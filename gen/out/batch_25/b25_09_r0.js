async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf6e8");
  randomSeed(909);
  brush.noStroke();

  // intense cobalt sky with the tower punched out as paper: paint two halves
  let tl = 250, tr = 350; // tower base edges; it tapers upward to 275..325
  brush.fill("#1c55c8", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-10, -10); brush.vertex(268, -10); brush.vertex(268, 90);
  brush.vertex(tl + 18, 150); brush.vertex(tl, 470); brush.vertex(-10, 470);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(332, -10); brush.vertex(610, -10); brush.vertex(610, 470);
  brush.vertex(tr, 470); brush.vertex(tr - 18, 150); brush.vertex(332, 90);
  brush.endShape(true);
  // deeper zenith
  brush.fill("#0d2f8a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-10, -10); brush.vertex(240, -10); brush.vertex(180, 120); brush.vertex(-10, 200);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(360, -10); brush.vertex(610, -10); brush.vertex(610, 180); brush.vertex(430, 110);
  brush.endShape(true);

  // cliff towering from below, rich ochre and burnt sienna
  brush.fill("#d27a1e", 220);
  brush.fillBleed(0.28);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-10, 610); brush.vertex(-10, 480); brush.vertex(120, 450);
  brush.vertex(300, 462); brush.vertex(470, 440); brush.vertex(610, 470); brush.vertex(610, 610);
  brush.endShape(true);
  brush.fill("#8e3b12", 220);
  brush.fillBleed(0.22);
  brush.beginShape(0.5);
  brush.vertex(-10, 610); brush.vertex(40, 520); brush.vertex(160, 500);
  brush.vertex(260, 560); brush.vertex(380, 510); brush.vertex(520, 540); brush.vertex(610, 610);
  brush.endShape(true);
  brush.fill("#2f8a3a", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-10, 485); brush.vertex(150, 452); brush.vertex(460, 445); brush.vertex(610, 472);
  brush.vertex(610, 492); brush.vertex(300, 478); brush.vertex(-10, 505);
  brush.endShape(true);

  // tower: shadow side on the right, bold red bands (low angle -> strong taper)
  brush.fill("#8a9ab8", 200);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(305, 470); brush.vertex(tr, 470); brush.vertex(tr - 18, 150); brush.vertex(305, 150);
  brush.endShape(true);
  for (let b = 0; b < 3; b++) {
    let y0 = 190 + b * 95, y1 = y0 + 40;
    let w0 = 32 + (y0 - 150) * 0.056 + 18, w1 = 32 + (y1 - 150) * 0.056 + 18;
    brush.fill("#e0142c", 225);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0);
    brush.vertex(300 - w0, y0); brush.vertex(300 + w0, y0); brush.vertex(300 + w1, y1); brush.vertex(300 - w1, y1);
    brush.endShape(true);
  }
  // gallery and lantern
  brush.fill("#141a2a", 230);
  brush.beginShape(0);
  brush.vertex(255, 150); brush.vertex(345, 150); brush.vertex(345, 132); brush.vertex(255, 132);
  brush.endShape(true);
  brush.fill("#ffcc1a", 230);
  brush.fillBleed(0.2);
  brush.circle(300, 112, 18, 0.2);
  brush.fill("#e0142c", 230);
  brush.fillBleed(0.12);
  brush.beginShape(0);
  brush.vertex(270, 95); brush.vertex(300, 62); brush.vertex(330, 95);
  brush.endShape(true);
}
