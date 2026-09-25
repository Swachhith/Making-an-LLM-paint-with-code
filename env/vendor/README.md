# Vendored libraries

Unmodified copies, so rendering works without network access to a CDN (cloud
agent sandboxes, Kaggle, Modal).

| file | package | version | source | licence |
|---|---|---|---|---|
| `p5.min.js` | p5 | 2.2.0 | https://cdn.jsdelivr.net/npm/p5@2.2.0/lib/p5.min.js | LGPL-2.1 |
| `p5.brush.js` | p5.brush | 2.2.3 | https://cdn.jsdelivr.net/npm/p5.brush@2.2.3/dist/p5.brush.js | MIT |

The render harness is validated against these exact versions (178/178 reference
sketches render; coverage r = 0.946 vs the dataset's recorded values). Changing a
version means re-running `pool/validate_pool.py`.
