async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2d37a");
  brush.noStroke();
  // bold orange sky, deepening to violet at the top
  brush.fill("#ff6a2a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(400, 320); brush.vertex(200, 280); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#7a3fd8", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 120); brush.vertex(450, 150); brush.vertex(220, 110); brush.vertex(-20, 130);
  brush.endShape(true);
  // sun low and off-centre
  brush.fill("#ffd23a", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(470, 470, 70, 0.2);
  // warm glow halo
  brush.fill("#ff8a2a", 180);
  brush.fillBleed(0.25);
  brush.circle(470, 470, 140, 0.4);
  // desert floor: layered warm bands
  brush.fill("#e85a1a", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(-20, 420); brush.vertex(620, 400); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#d83a0a", 200);
  brush.beginShape(0.3);
  brush.vertex(-20, 460); brush.vertex(620, 440); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // distant dunes
  brush.fill("#f08a2a", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(150, 430); brush.vertex(320, 470); brush.vertex(620, 440); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // tall cactus
  brush.fill("#2a6a1a", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(310, 440); brush.vertex(320, 440); brush.vertex(322, 620); brush.vertex(312, 620);
  brush.endShape(true);
  // three arms
  brush.beginShape(0.2);
  brush.vertex(310, 440); brush.vertex(240, 340); brush.vertex(260, 450); brush.vertex(310, 445);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(310, 440); brush.vertex(380, 330); brush.vertex(360, 450); brush.vertex(310, 445);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(310, 440); brush.vertex(280, 200); brush.vertex(300, 230); brush.vertex(310, 445);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(310, 440); brush.vertex(340, 200); brush.vertex(320, 230); brush.vertex(310, 445);
  brush.endShape(true);
  // spines
  brush.fill("#1a4a10", 220);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(310, 440, 3, 0.3);
  brush.circle(250, 330, 2, 0.3);
  brush.circle(360, 330, 2, 0.3);
  brush.circle(290, 210, 2, 0.3);
  brush.circle(330, 210, 2, 0.3);
  // a few shrubs in the distance
  brush.fill("#4a3a1a", 190);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(100, 500); brush.vertex(140, 470); brush.vertex(180, 500); brush.vertex(160, 520); brush.vertex(120, 520);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(420, 500); brush.vertex(460, 470); brush.vertex(500, 500); brush.vertex(480, 520); brush.vertex(440, 520);
  brush.endShape(true);
}
