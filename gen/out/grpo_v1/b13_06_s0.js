async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf2e0");
  brush.noStroke();
  // warm ground wash
  brush.fill("#f7d8a8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(0, 600); brush.vertex(600, 600); brush.vertex(600, 400); brush.vertex(400, 300); brush.vertex(0, 350);
  brush.endShape(true);
  // stem, arcing from lower left to upper right
  brush.fill("#5c7a3a", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(100, 520); brush.vertex(200, 450); brush.vertex(310, 330); brush.vertex(420, 210); brush.vertex(520, 110); brush.vertex(560, 90); brush.vertex(530, 130); brush.vertex(420, 230); brush.vertex(300, 340); brush.vertex(180, 450); brush.vertex(80, 520);
  brush.endShape(true);
  // leaf
  brush.fill("#4f6e32", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(250, 450); brush.vertex(310, 370); brush.vertex(380, 360); brush.vertex(430, 430); brush.vertex(370, 450);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(250, 450); brush.vertex(190, 380); brush.vertex(130, 390); brush.vertex(80, 450); brush.vertex(140, 440);
  brush.endShape(true);
  // head
  let cx = 520, cy = 110;
  brush.fill("#f7c23a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(cx - 150, cy - 150); brush.vertex(cx + 150, cy - 150); brush.vertex(cx + 150, cy + 150); brush.vertex(cx - 150, cy + 150);
  brush.endShape(true);
  // ray petals, two passes
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 36; i++) {
      let a = i * 10 + k * 2;
      let r = 115 - k * 10;
      let px = cx + cos(a) * r * 0.7, py = cy + sin(a) * r * 0.7;
      let len = 125;
      brush.fill("#f7a02a", 220);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.5);
      brush.vertex(cx, cy); brush.vertex(px + cos(a - 8) * len * 0.6, py + sin(a - 8) * len * 0.6); brush.vertex(px + cos(a - 4) * len, py + sin(a - 4) * len); brush.vertex(px + cos(a + 4) * len, py + sin(a + 4) * len); brush.vertex(px + cos(a + 8) * len * 0.6, py + sin(a + 8) * len * 0.6);
      brush.endShape(true);
    }
  }
  // disc
  brush.fill("#e88a20", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 105, 0.3);
  brush.fill("#d06a18", 230);
  brush.fillBleed(0.15);
  brush.circle(cx + 4, cy + 4, 90, 0.3);
  // seeds
  for (let i = 0; i < 200; i++) {
    let a = random(360), r = random(60, 90);
    brush.fill("#8a5a1a", 215);
    brush.fillBleed(0.05);
    brush.fillTexture(0.2, 0.2);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 2.5, 0.2);
  }
  // halo
  brush.fill("#ffd24a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 150, 0.5);
}
