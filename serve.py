"""Dev server for the watercolour project.

Serves the project statically and accepts PNG/JSON writes from the browser,
so the studio can persist paintings, sketches and ratings straight into the
pool without any manual download step.

    python serve.py [--port 8777]

Endpoints beyond static files:
    POST /save   {"path": "pool/renders/x.png", "png": "data:image/png;base64,..."}
                 {"path": "pool/index.json",    "json": {...}}
                 -> {"ok": true, "path": "...", "bytes": N}
"""
import argparse
import base64
import json
import os
import posixpath
import re
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
SAFE = re.compile(r"^[A-Za-z0-9_./-]+$")


def resolve(rel: str) -> str:
    """Resolve a client-supplied path inside ROOT, or raise."""
    rel = rel.lstrip("/")
    if not rel or not SAFE.match(rel) or ".." in rel.split("/"):
        raise ValueError(f"unsafe path: {rel!r}")
    dest = os.path.abspath(os.path.join(ROOT, *rel.split("/")))
    if os.path.commonpath([dest, ROOT]) != ROOT:
        raise ValueError(f"path escapes project root: {rel!r}")
    return dest


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def end_headers(self):
        # The studio fetches contract.json and posts renders from the same
        # origin, but keep this permissive so a file:// page can talk to it too.
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def _reply(self, code, payload):
        body = json.dumps(payload).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        path, _, query = self.path.partition("?")
        if posixpath.normpath(path) == "/api/paintings":
            return self._reply(200, self._paintings(include_hidden="all=1" in query))
        return super().do_GET()

    def _paintings(self, include_hidden: bool) -> list:
        """Every gate-passing render across gen/out/*/manifest.json.

        Batches whose directory starts with "_" (self-tests) are skipped unless
        ?all=1. Failed sketches are left out: there is no painting to rate.
        """
        out = []
        gen_out = os.path.join(ROOT, "gen", "out")
        if not os.path.isdir(gen_out):
            return out
        for batch in sorted(os.listdir(gen_out)):
            man = os.path.join(gen_out, batch, "manifest.json")
            if not os.path.isfile(man) or (batch.startswith("_") and not include_hidden):
                continue
            for stem, e in json.load(open(man, encoding="utf-8")).items():
                png = os.path.join(gen_out, batch, stem + ".png")
                if e.get("passed") and os.path.isfile(png):
                    out.append({"key": f"{batch}/{stem}", "png": f"gen/out/{batch}/{stem}.png",
                                "subject": e.get("subject"), "round": e.get("round"),
                                "id": e.get("id")})
        return out

    def do_POST(self):
        if posixpath.normpath(self.path.split("?")[0]) != "/save":
            return self._reply(404, {"ok": False, "error": "no such endpoint"})
        try:
            n = int(self.headers.get("Content-Length") or 0)
            if n <= 0 or n > 64 * 1024 * 1024:
                raise ValueError("bad or oversized body")
            req = json.loads(self.rfile.read(n))
            dest = resolve(req["path"])
            os.makedirs(os.path.dirname(dest), exist_ok=True)

            if "png" in req:
                data = req["png"]
                if data.startswith("data:"):
                    data = data.split(",", 1)[1]
                blob = base64.b64decode(data)
                with open(dest, "wb") as f:
                    f.write(blob)
            elif "json" in req:
                blob = json.dumps(req["json"], indent=2).encode()
                with open(dest, "wb") as f:
                    f.write(blob)
            elif "text" in req:
                blob = req["text"].encode()
                with open(dest, "wb") as f:
                    f.write(blob)
            else:
                raise ValueError("body needs one of: png, json, text")

            rel = os.path.relpath(dest, ROOT).replace(os.sep, "/")
            print(f"  saved {rel} ({len(blob)} bytes)")
            return self._reply(200, {"ok": True, "path": rel, "bytes": len(blob)})
        except Exception as e:
            return self._reply(400, {"ok": False, "error": f"{type(e).__name__}: {e}"})

    def log_message(self, fmt, *args):
        if "POST" not in (args[0] if args else ""):
            return  # static GETs are noise


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--port", type=int, default=8777)
    args = ap.parse_args()
    print(f"watercolours dev server -> http://127.0.0.1:{args.port}/  (root: {ROOT})")
    print(f"  studio:  http://127.0.0.1:{args.port}/app/")
    print(f"  harness: http://127.0.0.1:{args.port}/env/render.html")
    ThreadingHTTPServer(("127.0.0.1", args.port), Handler).serve_forever()
