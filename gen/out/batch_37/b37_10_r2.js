async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4ece6");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#e8cfc8", 200);
  brush.beginShape(0.9);
  brush.vertex(-40, 320); brush.vertex(640, 300); brush.vertex(640, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#f4b8c4", 150);
  brush.circle(300, 200, 330, 0.9);
  brush.fill("#78a070", 235);
  brush.beginShape(0.4);
  brush.vertex(280, 360); brush.vertex(325, 360); brush.vertex(350, 650); brush.vertex(255, 650);
  brush.endShape(true);
  brush.fill("#4a7a4a", 160);
  brush.beginShape(0.4);
  brush.vertex(305, 380); brush.vertex(325, 380); brush.vertex(350, 650); brush.vertex(320, 650);
  brush.endShape(true);
  brush.fill("#8cb484", 210);
  brush.beginShape(0.6);
  brush.vertex(270, 600); brush.vertex(110, 450); brush.vertex(60, 470); brush.vertex(150, 600); brush.vertex(260, 650);
  brush.endShape(true);
  brush.fill("#cf3a58", 200);
  brush.beginShape(0.6);
  brush.vertex(300, 360); brush.vertex(190, 270); brush.vertex(100, 150); brush.vertex(120, 90); brush.vertex(215, 190); brush.vertex(310, 280);
  brush.endShape(true);
  brush.fill("#e8607e", 200);
  brush.beginShape(0.6);
  brush.vertex(305, 360); brush.vertex(420, 270); brush.vertex(510, 160); brush.vertex(540, 200); brush.vertex(470, 310); brush.vertex(330, 380);
  brush.endShape(true);
  brush.fill("#b01c3c", 190);
  brush.beginShape(0.6);
  brush.vertex(302, 350); brush.vertex(240, 230); brush.vertex(235, 100); brush.vertex(290, 90); brush.vertex(345, 230); brush.vertex(320, 350);
  brush.endShape(true);
  brush.fill("#f08aa0", 190);
  brush.beginShape(0.6);
  brush.vertex(310, 340); brush.vertex(310, 120); brush.vertex(380, 110); brush.vertex(390, 240);
  brush.endShape(true);
  brush.fill("#fbe6a0", 200);
  brush.beginShape(0.5);
  brush.vertex(300, 350); brush.vertex(290, 280); brush.vertex(325, 275); brush.vertex(325, 350);
  brush.endShape(true);
  brush.fill("#c89a20", 230);
  brush.circle(250, 100, 8, 0.5); brush.circle(300, 90, 8, 0.5); brush.circle(350, 110, 8, 0.5);
}
