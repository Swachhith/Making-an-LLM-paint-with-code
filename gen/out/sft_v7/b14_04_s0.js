async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8dcc6");
  brush.noStroke();

  // wide sky, slate-grey with a warm tint
  brush.fill("#8f92a0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#b0a69a", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 180); brush.vertex(620, 150); brush.vertex(620, 350); brush.vertex(-20, 370);
  brush.endShape(true);

  // distant tree line, low
  brush.fill("#5e5f4a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 370); brush.vertex(150, 350); brush.vertex(300, 360); brush.vertex(450, 340); brush.vertex(620, 355); brush.vertex(620, 390); brush.vertex(-20, 390);
  brush.endShape(true);
  brush.fill("#3a3b2c", 180);
  brush.beginShape(0.6);
  brush.vertex(-20, 380); brush.vertex(200, 360); brush.vertex(400, 375); brush.vertex(620, 360); brush.vertex(620, 400); brush.vertex(-20, 400);
  brush.endShape(true);

  // meadow, ochre-green, darker at the bottom
  brush.fill("#8a7a40", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 390); brush.vertex(620, 385); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // windmill: low in the right third
  const mx = 410, my = 315;
  // tower
  brush.fill("#6b5a3a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(mx - 14, my); brush.vertex(mx + 14, my); brush.vertex(mx + 14, my + 130); brush.vertex(mx - 14, my + 130);
  brush.endShape(true);
  // cap
  brush.fill("#4a3a2a", 220);
  brush.beginShape(0);
  brush.vertex(mx - 20, my - 20); brush.vertex(mx + 20, my - 20); brush.vertex(mx + 18, my); brush.vertex(mx - 18, my);
  brush.endShape(true);
  // blades, two long ones
  brush.fill("#5a4a30", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(mx, my - 22); brush.vertex(mx + 85, my + 22); brush.vertex(mx + 80, my + 100); brush.vertex(mx, my + 85);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(mx, my - 22); brush.vertex(mx - 85, my + 22); brush.vertex(mx - 80, my + 100); brush.vertex(mx, my + 85);
  brush.endShape(true);
  // a couple of taller grasses in the meadow
  brush.fill("#4f5a30", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(300, 470); brush.vertex(310, 400); brush.vertex(316, 400); brush.vertex(306, 470);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(470, 480); brush.vertex(480, 420); brush.vertex(486, 420); brush.vertex(476, 480);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(540, 450); brush.vertex(552, 390); brush.vertex(558, 390); brush.vertex(546, 450);
  brush.endShape(true);
}
