async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f2");
  brush.noStroke();
  // cool teal sky, lighter at the top
  brush.fill("#a9c7c4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 320); brush.vertex(300, 350); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#6f9aa8", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 200); brush.vertex(620, 200); brush.vertex(620, 420); brush.vertex(420, 440); brush.vertex(-20, 400);
  brush.endShape(true);
  // crescent moon, large, upper right
  brush.fill("#eef6f0", 255);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(500, 150, 130, 0.3);
  brush.fill("#c8d6d0", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(400, 180); brush.vertex(460, 180); brush.vertex(520, 160); brush.vertex(520, 230); brush.vertex(460, 250); brush.vertex(400, 250);
  brush.endShape(true);
  // pine trees, layered
  brush.fill("#1f4a5a", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(100, 470); brush.vertex(125, 300); brush.vertex(150, 470); brush.vertex(150, 470); brush.vertex(150, 300); brush.vertex(175, 470);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(200, 470); brush.vertex(225, 260); brush.vertex(250, 470); brush.vertex(250, 470); brush.vertex(250, 260); brush.vertex(275, 470);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(320, 470); brush.vertex(345, 330); brush.vertex(370, 470); brush.vertex(370, 470); brush.vertex(370, 330); brush.vertex(395, 470);
  brush.endShape(true);
  brush.fill("#10323e", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(450, 470); brush.vertex(475, 370); brush.vertex(500, 470); brush.vertex(500, 470); brush.vertex(500, 370); brush.vertex(525, 470);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(550, 470); brush.vertex(570, 400); brush.vertex(590, 470); brush.vertex(590, 470); brush.vertex(590, 400); brush.vertex(610, 470);
  brush.endShape(true);
  // misty ground line
  brush.fill("#4f7a7a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 520); brush.vertex(-20, 520);
  brush.endShape(true);
  // stars
  for (let i = 0; i < 22; i++) {
    const x = random(0, 600), y = random(0, 200);
    brush.fill("#eef6f0", 230);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, random(1.2, 2.2), 0.3);
  }
}
