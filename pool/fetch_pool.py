"""Download Sergio Paniego's watercolour reference pool.

Pulls the 178 hand-rated paintings, their p5.brush source sketches, and the
row metadata (tier, subject, generator, HPSv3 score) into pool/.

The sketches matter more than the images: they are known-good p5.brush programs
with a human rating attached, which makes them usable as ground truth for
validating our own render harness, as SFT data, and as the seed pool.

    python pool/fetch_pool.py
"""
from __future__ import annotations

import concurrent.futures
import json
import os
import urllib.request

REPO = "FineEnvs/watercolour-reference-pool"
BASE = f"https://huggingface.co/datasets/{REPO}/resolve/main"
HERE = os.path.dirname(os.path.abspath(__file__))
ROWS_API = "https://datasets-server.huggingface.co/rows"


def get(url: str, timeout: int = 60) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": "watercolours/0.1"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()


def fetch_metadata() -> list[dict]:
    """Page through the datasets-server rows API for all row metadata."""
    rows, offset = [], 0
    while True:
        url = (f"{ROWS_API}?dataset={REPO.replace('/', '%2F')}&config=default"
               f"&split=train&offset={offset}&length=100")
        page = json.loads(get(url))
        batch = page.get("rows", [])
        if not batch:
            break
        for r in batch:
            row = dict(r["row"])
            row.pop("image", None)  # the PNG is fetched separately
            rows.append(row)
        offset += len(batch)
        if offset >= page.get("num_rows_total", 0):
            break
    return rows


def download_one(args) -> tuple[str, bool, str]:
    remote, local = args
    if os.path.exists(local) and os.path.getsize(local) > 0:
        return (remote, True, "cached")
    try:
        data = get(f"{BASE}/{remote}")
        os.makedirs(os.path.dirname(local), exist_ok=True)
        with open(local, "wb") as f:
            f.write(data)
        return (remote, True, f"{len(data)}B")
    except Exception as e:
        return (remote, False, f"{type(e).__name__}: {e}")


def main():
    print("fetching row metadata...")
    rows = fetch_metadata()
    meta_path = os.path.join(HERE, "pool.json")
    with open(meta_path, "w", encoding="utf-8") as f:
        json.dump(rows, f, indent=2)

    tiers: dict[str, int] = {}
    for r in rows:
        tiers[r.get("tier", "?")] = tiers.get(r.get("tier", "?"), 0) + 1
    print(f"  {len(rows)} rows -> pool.json   tiers: {tiers}")

    jobs = []
    for r in rows:
        src = r.get("source_file")          # e.g. sources/love_c0011_r1.js
        if not src:
            continue
        stem = os.path.basename(src)[:-3]   # love_c0011_r1
        jobs.append((src, os.path.join(HERE, "sources", f"{stem}.js")))
        jobs.append((f"images/{stem}.png", os.path.join(HERE, "renders", f"{stem}.png")))

    print(f"downloading {len(jobs)} files...")
    ok = fail = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=12) as ex:
        for remote, good, note in ex.map(download_one, jobs):
            if good:
                ok += 1
            else:
                fail += 1
                print(f"  FAILED {remote}: {note}")
    print(f"done: {ok} ok, {fail} failed")


if __name__ == "__main__":
    main()
