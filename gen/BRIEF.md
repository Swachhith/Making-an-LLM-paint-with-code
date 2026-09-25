# Generation brief for a cloud session

You are painting watercolours in code for a hand-rated reference pool. A person
will rate every painting you make; the good ones become the definition of
"beautiful" for a reinforcement-learning run, and training data for a smaller
model. Your task names one batch file, e.g. `gen/batches/batch_03.json`.

## Setup (once)

```bash
python3 -c "import playwright" 2>/dev/null && ls /opt/chrome-*/chrome-linux64/chrome >/dev/null 2>&1 \
  || bash gen/cloud_setup.sh
```

## The rules for every sketch

Read `env/prompt.md` once. Every sketch must follow it exactly: a complete p5.js
program with its own `setup()` and `draw()`, a 600x600 WEBGL canvas, only the ten
brush methods listed there, hex colours with opacity. Anything else fails the gate
and the painting is wasted.

## Work loop -- three rounds, then stop

For each item in the batch (`id`, `subject`, `composition`, `palette`):

1. **Round 0 -- draft.** Write `gen/out/<batch>/<id>_r0.js` for every item.
2. Run `python3 gen/render_batch.py gen/batches/<batch>.json --round 0`.
3. Look at each contact sheet it prints (one image shows 12 paintings). Note, for
   each painting, what would most improve it: does it read as the flower named;
   does it look like real watercolour (soft bleeding edges, translucent layered
   washes, pigment pooling where shapes meet, paper showing through); is the
   composition the one asked for.
4. **Round 1 -- revise.** Write `<id>_r1.js` for every item, improving on `_r0`
   (and fixing any gate failure). Render with `--round 1`, look at the sheets.
5. **Round 2 -- revise again.** Write `<id>_r2.js`, render with `--round 2`.

Keep every version. Do not delete or overwrite earlier rounds -- all of them get
rated, and the person may prefer an earlier one.

## Variety matters more than polish

The pool must not converge on one style, or the trained model learns to paint
one picture. So:

- Write each sketch for its own subject. Do not reuse a code template, helper
  function or petal routine across items, and do not copy structure between files.
- Vary the construction: petals as few broad washes vs many small strokes, loose
  vs tight, background wash vs bare paper, stems and leaves or none, where the
  flower sits on the canvas.
- Follow the item's `palette` and `composition` literally; they are there to
  force difference.

## Spend carefully -- this runs on limited credit

- Read only `env/prompt.md`, your batch file, and the output of `render_batch.py`.
  Do not explore the rest of the repository.
- Look at contact sheets, never at individual PNGs.
- No subagents, no web access, no tests or linters, no refactoring.
- Keep your notes to yourself short; the person does the rating, not you.
- Stop after round 2.

## Hand-off

Commit everything under `gen/out/<batch>/` (sketches, PNGs, contact sheets,
`manifest.json`) on a branch named `gen/<batch>` and push it. Do not change any
file outside `gen/out/<batch>/`.
