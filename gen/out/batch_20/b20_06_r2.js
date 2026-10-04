async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9dfcc");
  brush.noStroke();

  brush.fill("#cfbf9e", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 240); brush.vertex(400, 200); brush.vertex(-20, 280);
  brush.endShape(true);
  brush.fill("#b8a680", 160);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(620, 390); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // sword leaves, two passes each
  const leaves = [[200, 620, 150, 300], [240, 620, 280, 280], [330, 620, 380, 320], [380, 620, 470, 360], [150, 620, 90, 380], [420, 620, 540, 420]];
  for (let p = 0; p < 2; p++) {
    for (const l of leaves) {
      brush.fill(p === 0 ? "#7a8656" : "#5a6640", p === 0 ? 200 : 190);
      brush.fillBleed(0.22);
      brush.fillTexture(0.4, 0.4);
      const w = p === 0 ? 16 : 8;
      brush.beginShape(0.5);
      brush.vertex(l[0] - w, l[1]);
      brush.vertex((l[0] + l[2]) / 2 - w * 0.5, (l[1] + l[3]) / 2);
      brush.vertex(l[2], l[3]);
      brush.vertex((l[0] + l[2]) / 2 + w, (l[1] + l[3]) / 2);
      brush.vertex(l[0] + w, l[1]);
      brush.endShape(true);
    }
  }
  brush.fill("#5a6640", 215);
  const stems = [[228, 240], [322, 170], [430, 300]];
  for (const s of stems) {
    brush.beginShape(0.3);
    brush.vertex(s[0] - 20, 620); brush.vertex(s[0] - 8, s[1]); brush.vertex(s[0] + 8, s[1]); brush.vertex(s[0] - 2, 620);
    brush.endShape(true);
  }

  function iris(x, y, s) {
    // standards
    brush.fill("#8a6a92", 200);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.45);
    brush.beginShape(0.7);
    brush.vertex(x, y); brush.vertex(x - 40 * s, y - 60 * s); brush.vertex(x - 10 * s, y - 110 * s); brush.vertex(x + 10 * s, y - 60 * s);
    brush.endShape(true);
    brush.beginShape(0.7);
    brush.vertex(x, y); brush.vertex(x + 42 * s, y - 62 * s); brush.vertex(x + 12 * s, y - 112 * s); brush.vertex(x - 8 * s, y - 60 * s);
    brush.endShape(true);
    brush.fill("#6e4e7a", 170);
    brush.beginShape(0.7);
    brush.vertex(x - 4 * s, y - 20 * s); brush.vertex(x - 22 * s, y - 60 * s); brush.vertex(x - 8 * s, y - 95 * s);
    brush.endShape(true);
    // falls — broad, drooping, darker
    for (let p = 0; p < 2; p++) {
      brush.fill(p === 0 ? "#5e3f6e" : "#46284f", p === 0 ? 215 : 200);
      brush.fillBleed(0.25);
      const k = p === 0 ? 1 : 0.7;
      brush.beginShape(0.7);
      brush.vertex(x, y - 12 * s); brush.vertex(x - 80 * s * k, y + 5 * s); brush.vertex(x - 70 * s * k, y + 65 * s * k); brush.vertex(x - 18 * s, y + 30 * s * k);
      brush.endShape(true);
      brush.beginShape(0.7);
      brush.vertex(x, y - 12 * s); brush.vertex(x + 82 * s * k, y + 2 * s); brush.vertex(x + 74 * s * k, y + 65 * s * k); brush.vertex(x + 18 * s, y + 30 * s * k);
      brush.endShape(true);
    }
    brush.fill("#c9983a", 235);
    brush.fillBleed(0.2);
    brush.circle(x - 32 * s, y + 14 * s, 8 * s, 0.5);
    brush.circle(x + 32 * s, y + 14 * s, 8 * s, 0.5);
  }
  iris(212, 262, 1.2);
  iris(330, 185, 1.35);
  iris(450, 320, 1.1);
}
