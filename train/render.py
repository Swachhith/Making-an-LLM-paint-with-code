"""Headless renderer for watercolour sketches.

Drives env/render.html in Playwright Chromium. This is the same harness the
browser studio uses, so a painting debugged by hand is byte-identical to the
one that produces reward during training.

Runs self-contained: it serves the project on an ephemeral localhost port
itself (render.html fetches contract.json, which file:// URLs forbid), so it
works unchanged in a Colab or Kaggle notebook.

    from train.render import Renderer
    with Renderer() as r:
        out = r.render(source, seed=7)
        print(out["ok"], out["metrics"]["coverage"])
"""
from __future__ import annotations

import base64
import json
import os
import threading
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from typing import Any

from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# A hidden or occluded tab has setTimeout clamped to a multi-second budget by
# Chrome's intensive throttling, which stalls the harness's settle loop for
# tens of seconds. These flags are not optional -- without them the renderer
# appears to hang and every rollout returns a blank canvas.
LAUNCH_ARGS = [
    "--disable-background-timer-throttling",
    "--disable-backgrounding-occluded-windows",
    "--disable-renderer-backgrounding",
    "--disable-features=CalculateNativeWinOcclusion,IntensiveWakeUpThrottling",
    "--no-sandbox",
    "--disable-dev-shm-usage",
]


class _QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass


class Renderer:
    """Renders sketch source to (png, metrics) in a headless browser."""

    def __init__(
        self,
        headless: bool = True,
        # p5.brush keeps module-level state bound to the first p5 instance on a
        # page. Reusing a page silently renders a blank canvas for every sketch
        # after the first -- no error, just coverage 0. Recycling per render is
        # the only reliable reset found, so 1 is the correct default, not a
        # conservative one. Raising it will quietly corrupt a training run.
        recycle_after: int = 1,
        gpu: bool = False,
        nav_timeout_ms: int = 60_000,
    ):
        self.headless = headless
        self.recycle_after = recycle_after
        self.gpu = gpu
        self.nav_timeout_ms = nav_timeout_ms
        self._since_recycle = 0
        self._pw = self._browser = self._page = self._httpd = self._thread = None
        self.port: int | None = None

    # -- lifecycle ---------------------------------------------------------
    def __enter__(self) -> "Renderer":
        handler = partial(_QuietHandler, directory=ROOT)
        self._httpd = ThreadingHTTPServer(("127.0.0.1", 0), handler)
        self.port = self._httpd.server_address[1]
        self._thread = threading.Thread(target=self._httpd.serve_forever, daemon=True)
        self._thread.start()

        args = list(LAUNCH_ARGS)
        if self.gpu:
            # Colab/Kaggle have a real GPU; ANGLE over EGL is far faster than
            # the SwiftShader software path headless Chromium defaults to.
            args += ["--use-gl=angle", "--use-angle=gl-egl", "--enable-gpu"]

        self._pw = sync_playwright().start()
        # WC_CHROME points at a browser installed outside Playwright. Claude cloud
        # sandboxes block Playwright's browser CDN but allow storage.googleapis.com,
        # so there Chrome for Testing is installed separately (gen/cloud_setup.sh).
        exe = os.environ.get("WC_CHROME") or None
        self._browser = self._pw.chromium.launch(headless=self.headless, args=args,
                                                 executable_path=exe)
        self._new_page()
        return self

    def __exit__(self, *exc):
        for closer in (
            lambda: self._page and self._page.close(),
            lambda: self._browser and self._browser.close(),
            lambda: self._pw and self._pw.stop(),
            lambda: self._httpd and self._httpd.shutdown(),
            lambda: self._httpd and self._httpd.server_close(),
        ):
            try:
                closer()
            except Exception:
                pass

    def _new_page(self):
        if self._page is not None:
            try:
                self._page.close()
            except Exception:
                pass
        self._page = self._browser.new_page(viewport={"width": 900, "height": 900})
        self._page.set_default_timeout(self.nav_timeout_ms)
        self._page.goto(f"http://127.0.0.1:{self.port}/env/render.html",
                        wait_until="load", timeout=self.nav_timeout_ms)
        self._page.wait_for_function("window.harnessReady !== undefined",
                                     timeout=self.nav_timeout_ms)
        self._page.evaluate("async () => { await window.harnessReady; }")
        self._since_recycle = 0

    # -- rendering ---------------------------------------------------------
    def render(self, source: str, seed: int = 1, png_path: str | None = None) -> dict[str, Any]:
        """Render one sketch. Never raises: failures come back as ok=False.

        A crashed page is recycled and the call retried once, so a single bad
        sketch cannot take down a whole training run.
        """
        for attempt in (1, 2):
            try:
                if self._since_recycle >= self.recycle_after:
                    self._new_page()
                result = self._page.evaluate(
                    """async ({ source, seed }) => {
                        try { return await window.paintSketch({ source, seed, show: false }); }
                        catch (e) { return { ok: false, stage: 'harness',
                                             error: String((e && e.message) || e) }; }
                    }""",
                    {"source": source, "seed": int(seed)},
                )
                self._since_recycle += 1
                break
            except Exception as e:
                if attempt == 2:
                    return {"ok": False, "stage": "driver", "error": f"{type(e).__name__}: {e}"}
                try:
                    self._new_page()
                except Exception as e2:
                    return {"ok": False, "stage": "driver",
                            "error": f"page recycle failed: {type(e2).__name__}: {e2}"}

        png = result.pop("png", None)
        if png and png_path:
            os.makedirs(os.path.dirname(os.path.abspath(png_path)), exist_ok=True)
            with open(png_path, "wb") as f:
                f.write(base64.b64decode(png.split(",", 1)[1]))
            result["png_path"] = png_path
        result["png_b64"] = png.split(",", 1)[1] if png else None
        return result


# Process-pool workers for reward.local_render_fn: one Renderer per process.
_pool_renderer = None


def pool_worker_init():
    global _pool_renderer
    import atexit
    _pool_renderer = Renderer().__enter__()
    atexit.register(lambda: _pool_renderer.__exit__(None, None, None))


def pool_worker_render(source: str, seed: int) -> dict:
    return _pool_renderer.render(source, seed=seed)


def _demo():
    """Smoke test: render one sketch and report what came back."""
    src = """
brush.noStroke();
brush.fill(340, 55, 88, 160);
brush.fillBleed(0.3, "out");
brush.fillTexture(0.6, 0.4);
brush.beginShape(0.4);
brush.vertex(W*0.25, H*0.25); brush.vertex(W*0.75, H*0.27);
brush.vertex(W*0.72, H*0.75); brush.vertex(W*0.27, H*0.72);
brush.endShape(true);
"""
    out_dir = os.path.join(ROOT, "results")
    with Renderer() as r:
        out = r.render(src, seed=3, png_path=os.path.join(out_dir, "pw_quad.png"))
    out.pop("png_b64", None)
    print(json.dumps(out, indent=2))


if __name__ == "__main__":
    _demo()
