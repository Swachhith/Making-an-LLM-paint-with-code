async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f6f9");
  brush.noStroke();

  // cool sky wash behind
  brush.fill("#b8c7d8", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);

  // stem, curving
  brush.fill("#2f5a3a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.7);
  brush.vertex(300, 470); brush.vertex(330, 470); brush.vertex(370, 320); brush.vertex(360, 170); brush.vertex(340, 20);
  brush.vertex(310, 20); brush.vertex(330, 170); brush.vertex(340, 320); brush.vertex(370, 470);
  brush.endShape(true);
  brush.fill("#5a8a4a", 170);
  brush.beginShape(0.7);
  brush.vertex(310, 470); brush.vertex(350, 470); brush.vertex(350, 360); brush.vertex(320, 360);
  brush.endShape(true);

  // three petals, overlapping, side view: each a wide soft shape with a darker heart
  let petals = [[340, 130, 290, 50, 180, 100], [340, 130, 390, 50, 220, 100], [340, 130, 250, 50, 140, 100]];
  for (let p of petals) {
    let [cx, cy, wx, wy, len, tip] = p;
    brush.fill("#a01a3a", 215);
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.7);
    brush.vertex(cx - wx, cy - wy);
    brush.vertex(cx + wx, cy - wy);
    brush.vertex(tip, tip - 10);
    brush.vertex(cx + wx * 0.9, cy + wy * 0.9);
    brush.vertex(cx, cy + wy * 0.8);
    brush.vertex(cx - wx * 0.9, cy + wy * 0.9);
    brush.endShape(true);
    brush.fill("#6a0e2a", 200);
    brush.beginShape(0.7);
    brush.vertex(cx - wx * 0.6, cy - wy * 0.6);
    brush.vertex(cx + wx * 0.6, cy - wy * 0.6);
    brush.vertex(cx, cy + wy * 0.7);
    brush.vertex(cx - wx * 0.6, cy + wy * 0.6);
    brush.endShape(true);
  }
  // a fourth half-petal tucked on the side
  brush.fill("#8a1438", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(340, 130); brush.vertex(380, 170); brush.vertex(390, 190); brush.vertex(360, 190); brush.vertex(340, 170);
  brush.endShape(true);
  brush.fill("#4a0a28", 190);
  brush.beginShape(0.7);
  brush.vertex(340, 130); brush.vertex(360, 190); brush.vertex(340, 185);
  brush.endShape(true);

  // green leaves
  brush.fill("#2f5a3a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(280, 300); brush.vertex(210, 270); brush.vertex(160, 300); brush.vertex(200, 320);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(380, 300); brush.vertex(440, 270); brush.vertex(490, 300); brush.vertex(450, 320);
  brush.endShape(true);
}
