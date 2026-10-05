async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f1e8");
  brush.noStroke();
  // teal-washed early spring sky
  brush.fill("#2a8c92", 160); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 420); brush.vertex(-10, 440);
  brush.endShape(true);
  // ground
  brush.fill("#0f5a5c", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 500); brush.vertex(200, 470); brush.vertex(420, 495); brush.vertex(610, 470); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // trunk and limbs
  brush.fill("#3b2a22", 220); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(270, 560); brush.vertex(335, 560); brush.vertex(325, 380); brush.vertex(285, 380);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(290, 400); brush.vertex(320, 400); brush.vertex(140, 220); brush.vertex(120, 250);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(300, 400); brush.vertex(330, 395); brush.vertex(470, 200); brush.vertex(440, 190);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(295, 380); brush.vertex(325, 380); brush.vertex(335, 120); brush.vertex(300, 120);
  brush.endShape(true);
  // blossoms: clusters of pale petals left as paper with teal shadow
  const spots = [[140, 230, 80], [470, 210, 80], [315, 130, 90], [210, 300, 60], [410, 310, 60], [260, 190, 55], [370, 200, 55]];
  for (const s of spots) {
    brush.fill("#d4602a", 140); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.circle(s[0] + 8, s[1] + 12, s[2] * 0.95, 0.6);
    for (let k = 0; k < 7; k++) {
      const a = k * 51 + s[0];
      brush.fill("#e88a50", 150); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
      brush.circle(s[0] + cos(a) * s[2] * 0.4, s[1] + sin(a) * s[2] * 0.4, s[2] * 0.3, 0.5);
    }
  }
}
