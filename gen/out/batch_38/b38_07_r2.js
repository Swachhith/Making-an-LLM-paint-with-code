async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f0ea");
  brush.noStroke(); brush.fillTexture(0.4, 0.4); brush.fillBleed(0.3);
  brush.fill("#1a7ad0", 205);
  brush.beginShape(0.5); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#0a45a8", 185);
  brush.beginShape(0.5); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,190); brush.vertex(-40,250); brush.endShape(true);
  brush.fill("#f09a3a", 150);
  brush.beginShape(0.5); brush.vertex(-40,420); brush.vertex(640,380); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#5a9ae0", 140);
  brush.beginShape(0.8); brush.vertex(-40,250); brush.vertex(300,240); brush.vertex(300,420); brush.vertex(-40,430); brush.endShape(true);
  // peak
  brush.fill("#7a3fb0", 215); brush.fillBleed(0.25);
  brush.beginShape(0.2); brush.vertex(130,640); brush.vertex(300,380); brush.vertex(400,100); brush.vertex(480,300); brush.vertex(660,640); brush.endShape(true);
  brush.fill("#3a1a80", 215);
  brush.beginShape(0.2); brush.vertex(400,100); brush.vertex(480,300); brush.vertex(660,640); brush.vertex(430,640); brush.vertex(410,330); brush.endShape(true);
  brush.fill("#e0601f", 195);
  brush.beginShape(0.2); brush.vertex(400,100); brush.vertex(335,270); brush.vertex(385,240); brush.vertex(410,330); brush.vertex(412,200); brush.endShape(true);
  brush.fill("#d03a7a", 150);
  brush.beginShape(0.5); brush.vertex(200,520); brush.vertex(330,420); brush.vertex(380,640); brush.vertex(150,640); brush.endShape(true);
  // small teal peak
  brush.fill("#1a9a8a", 205);
  brush.beginShape(0.3); brush.vertex(-40,640); brush.vertex(100,350); brush.vertex(250,640); brush.endShape(true);
  brush.fill("#0a6a6a", 195);
  brush.beginShape(0.3); brush.vertex(100,350); brush.vertex(250,640); brush.vertex(130,640); brush.endShape(true);
  // clouds wrapping summit
  brush.fill("#fbfaf6", 240); brush.fillBleed(0.3);
  brush.beginShape(0.9); brush.vertex(240,320); brush.vertex(350,265); brush.vertex(470,300); brush.vertex(600,330); brush.vertex(560,390); brush.vertex(430,415); brush.vertex(300,400); brush.vertex(220,370); brush.endShape(true);
  brush.fill("#dce8f6", 225);
  brush.beginShape(0.9); brush.vertex(60,470); brush.vertex(300,430); brush.vertex(560,480); brush.vertex(540,540); brush.vertex(300,530); brush.vertex(80,540); brush.endShape(true);
  brush.fill("#fbfaf6", 235);
  brush.circle(390, 190, 26, 0.8); brush.circle(430, 150, 20, 0.8);
  brush.fill("#d6e2f4", 200);
  brush.circle(100, 130, 36, 0.8); brush.circle(150, 150, 28, 0.8);
  brush.fill("#f09a3a", 150);
  brush.beginShape(0.3); brush.vertex(300,380); brush.vertex(340,300); brush.vertex(350,420); brush.vertex(290,430); brush.endShape(true);
}
