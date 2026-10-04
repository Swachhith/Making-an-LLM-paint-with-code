async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff8ec");
  brush.noStroke();

  // bold turquoise sky upper portion
  brush.fill("#1aa6c8", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 280);
  brush.endShape(true);

  // rolling hills: lime, emerald
  brush.fill("#8cc63f", 210);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 280); brush.vertex(150, 240); brush.vertex(330, 270); brush.vertex(480, 230); brush.vertex(620, 250); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1f8a4c", 200);
  brush.beginShape(0.8);
  brush.vertex(-20, 360); brush.vertex(200, 330); brush.vertex(620, 380); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // road: sweeping curve from bottom-left to a vanishing point far right
  brush.fill("#e2a25a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, 620); brush.vertex(180, 620); brush.vertex(300, 480); brush.vertex(470, 350); brush.vertex(540, 300);
  brush.vertex(530, 300); brush.vertex(440, 350); brush.vertex(240, 460); brush.vertex(-20, 540);
  brush.endShape(true);

  // cyclist, small, upper-right of road
  const cx = 400, cy = 400;
  const k = 2.6;
  // wheels as rings: dark circle, then lighter road circle inside
  brush.fill("#141414", 240);
  brush.fillBleed(0.08);
  brush.circle(cx - 22 * k, cy + 20 * k, 16 * k, 0.1);
  brush.circle(cx + 22 * k, cy + 20 * k, 16 * k, 0.1);
  brush.fill("#e2a25a", 230);
  brush.circle(cx - 22 * k, cy + 20 * k, 10 * k, 0.1);
  brush.circle(cx + 22 * k, cy + 20 * k, 10 * k, 0.1);
  // frame
  brush.fill("#141414", 220);
  brush.beginShape(0);
  brush.vertex(cx - 22 * k, cy + 18 * k); brush.vertex(cx, cy + 4 * k); brush.vertex(cx + 22 * k, cy + 18 * k); brush.vertex(cx + 20 * k, cy + 24 * k); brush.vertex(cx, cy + 12 * k); brush.vertex(cx - 20 * k, cy + 24 * k);
  brush.endShape(true);
  // body: red jersey leaning forward
  brush.fill("#d7263d", 230);
  brush.fillBleed(0.15);
  brush.beginShape(0.3);
  brush.vertex(cx - 6 * k, cy + 4 * k); brush.vertex(cx - 4 * k, cy - 20 * k); brush.vertex(cx + 18 * k, cy - 14 * k); brush.vertex(cx + 22 * k, cy - 4 * k); brush.vertex(cx + 8 * k, cy + 6 * k);
  brush.endShape(true);
  // legs dark
  brush.fill("#1c1c3a", 220);
  brush.beginShape(0.3);
  brush.vertex(cx - 6 * k, cy + 2 * k); brush.vertex(cx + 8 * k, cy + 4 * k); brush.vertex(cx + 6 * k, cy + 20 * k); brush.vertex(cx - 6 * k, cy + 18 * k);
  brush.endShape(true);
  // head
  brush.fill("#6a3a1c", 230);
  brush.circle(cx + 22 * k, cy - 22 * k, 7 * k, 0.2);
  // shadow
  brush.fill("#6a4a24", 170);
  brush.beginShape(0.6);
  brush.vertex(cx - 40 * k, cy + 36 * k); brush.vertex(cx + 30 * k, cy + 34 * k); brush.vertex(cx + 20 * k, cy + 44 * k); brush.vertex(cx - 50 * k, cy + 46 * k);
  brush.endShape(true);

  // sun in the sky, top left
  brush.fill("#ffd23f", 230);
  brush.circle(110, 90, 36, 0.2);
}
