async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4e6");
  randomSeed(31337);
  brush.noStroke();

  // warm sky, layered
  brush.fill("#f2c98a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(470, 240); brush.vertex(470, 300); brush.vertex(260, 290); brush.vertex(260, 330); brush.vertex(-20, 330);
  brush.endShape(true);
  brush.fill("#eab37a", 150);
  brush.beginShape(0.6);
  brush.vertex(-20, 180); brush.vertex(620, 170); brush.vertex(620, 300); brush.vertex(470, 310); brush.vertex(470, 360); brush.vertex(260, 350); brush.vertex(-20, 350);
  brush.endShape(true);

  // meadow
  brush.fill("#e89f5c", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 360); brush.vertex(620, 350); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // rolling hills behind
  brush.fill("#d48a4a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, 380); brush.vertex(150, 350); brush.vertex(300, 380); brush.vertex(450, 340); brush.vertex(620, 370); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // cottage
  brush.fill("#e82a2a", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(200, 470); brush.vertex(200, 250); brush.vertex(230, 250); brush.vertex(230, 470);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(370, 470); brush.vertex(370, 250); brush.vertex(400, 250); brush.vertex(400, 470);
  brush.endShape(true);
  brush.fill("#c81818", 215);
  brush.beginShape(0.2);
  brush.vertex(200, 250); brush.vertex(230, 230); brush.vertex(400, 230); brush.vertex(400, 250);
  brush.endShape(true);
  brush.fill("#f2a83a", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(200, 470); brush.vertex(220, 420); brush.vertex(370, 420); brush.vertex(390, 470);
  brush.endShape(true);
  // chimney
  brush.fill("#8a2a2a", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(355, 300); brush.vertex(365, 300); brush.vertex(365, 220); brush.vertex(355, 220);
  brush.endShape(true);
  brush.fill("#d9a85a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(210, 470); brush.vertex(210, 420); brush.vertex(220, 420); brush.vertex(220, 470);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(380, 470); brush.vertex(380, 420); brush.vertex(390, 420); brush.vertex(390, 470);
  brush.endShape(true);
  // door and window
  brush.fill("#3a1a1a", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(250, 460); brush.vertex(270, 460); brush.vertex(270, 490); brush.vertex(250, 490);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(320, 460); brush.vertex(340, 460); brush.vertex(340, 490); brush.vertex(320, 490);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(250, 380); brush.vertex(290, 380); brush.vertex(290, 420); brush.vertex(250, 420);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(310, 380); brush.vertex(350, 380); brush.vertex(350, 420); brush.vertex(310, 420);
  brush.endShape(true);
  // smoke
  brush.fill("#c9a86a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(362, 215, 22, 0.5);
  brush.circle(362, 185, 14, 0.5);
  brush.circle(362, 155, 8, 0.5);
  // trees
  brush.fill("#3a3a2a", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(100, 380); brush.vertex(130, 360); brush.vertex(160, 380); brush.vertex(145, 420); brush.vertex(115, 420);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(480, 370); brush.vertex(510, 350); brush.vertex(540, 370); brush.vertex(525, 410); brush.vertex(495, 410);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(50, 420); brush.vertex(70, 390); brush.vertex(90, 420); brush.vertex(75, 450); brush.vertex(55, 450);
  brush.endShape(true);
  // path
  brush.fill("#d9b87a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(210, 490); brush.vertex(230, 490); brush.vertex(230, 550); brush.vertex(210, 550);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(370, 490); brush.vertex(390, 490); brush.vertex(390, 550); brush.vertex(370, 550);
  brush.endShape(true);
}
