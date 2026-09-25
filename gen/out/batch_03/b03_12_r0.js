async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f8f6");
  brush.noStroke();

  // lily pad, notched, offset down-left
  brush.fill("#b9d4b0", 160);
  brush.fillBleed(0.4);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  for (let a = 20; a <= 340; a += 40) {
    brush.vertex(250 + cos(a + 90) * 210, 360 + sin(a + 90) * 170);
  }
  brush.vertex(250, 360);
  brush.endShape(true);

  let cx = 320, cy = 290;
  // outer petals: white with pink tips, mostly paper
  for (let k = 0; k < 8; k++) {
    let a = k * 45 + 10;
    brush.fill("#f7e4ea", 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.35, 0.45);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a - 25) * 30, cy + sin(a - 25) * 30);
    brush.vertex(cx + cos(a - 14) * 130, cy + sin(a - 14) * 130);
    brush.vertex(cx + cos(a) * 185, cy + sin(a) * 185);
    brush.vertex(cx + cos(a + 14) * 130, cy + sin(a + 14) * 130);
    brush.vertex(cx + cos(a + 25) * 30, cy + sin(a + 25) * 30);
    brush.endShape(true);
    brush.fill("#eaa6bb", 170);
    brush.fillBleed(0.25);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a - 6) * 145, cy + sin(a - 6) * 145);
    brush.vertex(cx + cos(a) * 183, cy + sin(a) * 183);
    brush.vertex(cx + cos(a + 6) * 145, cy + sin(a + 6) * 145);
    brush.endShape(true);
  }
  // inner ring
  for (let k = 0; k < 7; k++) {
    let a = k * 51 + 35;
    brush.fill("#fbeef2", 165);
    brush.fillBleed(0.2);
    brush.fillTexture(0.35, 0.45);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a - 30) * 20, cy + sin(a - 30) * 20);
    brush.vertex(cx + cos(a - 16) * 85, cy + sin(a - 16) * 85);
    brush.vertex(cx + cos(a) * 118, cy + sin(a) * 118);
    brush.vertex(cx + cos(a + 16) * 85, cy + sin(a + 16) * 85);
    brush.vertex(cx + cos(a + 30) * 20, cy + sin(a + 30) * 20);
    brush.endShape(true);
    brush.fill("#d7dfe8", 150);
    brush.fillBleed(0.15);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a + 10) * 30, cy + sin(a + 10) * 30);
    brush.vertex(cx + cos(a + 14) * 90, cy + sin(a + 14) * 90);
    brush.vertex(cx + cos(a + 22) * 30, cy + sin(a + 22) * 30);
    brush.endShape(true);
  }
  // seed pod and stamens
  brush.fill("#f1d36a", 200);
  brush.fillBleed(0.3);
  brush.circle(cx, cy, 40, true);
  brush.fill("#c9d27a", 215);
  brush.fillBleed(0.1);
  brush.circle(cx, cy, 24, true);
  for (let k = 0; k < 7; k++) {
    brush.fill("#8f9a4a", 200);
    brush.circle(cx + cos(k * 51) * 12, cy + sin(k * 51) * 12, 3, true);
  }
}
