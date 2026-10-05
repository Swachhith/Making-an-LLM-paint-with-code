async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4eee2");
  brush.noStroke();
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#1e50d0", 220);
  brush.beginShape(0.3);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 360); brush.vertex(-40, 360);
  brush.endShape(true);
  brush.fill("#ff8a3a", 170);
  brush.beginShape(0.6);
  brush.vertex(-40, 250); brush.vertex(640, 220); brush.vertex(640, 420); brush.vertex(-40, 420);
  brush.endShape(true);
  brush.fill("#6a2ab0", 210);
  brush.beginShape(0.3);
  brush.vertex(-40, 420); brush.vertex(40, 300); brush.vertex(110, 330); brush.vertex(180, 240); brush.vertex(250, 300); brush.vertex(300, 140); brush.vertex(380, 280); brush.vertex(430, 230); brush.vertex(520, 330); brush.vertex(580, 290); brush.vertex(640, 340); brush.vertex(640, 460); brush.vertex(-40, 460);
  brush.endShape(true);
  brush.fill("#3a1480", 230);
  brush.beginShape(0.3);
  brush.vertex(300, 140); brush.vertex(380, 280); brush.vertex(350, 460); brush.vertex(270, 460); brush.vertex(280, 300);
  brush.endShape(true);
  brush.fill("#d83a2a", 190);
  brush.beginShape(0.3);
  brush.vertex(180, 240); brush.vertex(250, 300); brush.vertex(210, 400); brush.vertex(150, 350);
  brush.endShape(true);
  brush.fill("#f4eee2", 255);
  brush.beginShape(0.3);
  brush.vertex(300, 140); brush.vertex(325, 195); brush.vertex(305, 185); brush.vertex(290, 205); brush.vertex(280, 190);
  brush.endShape(true);
  brush.fill("#d02a1c", 235);
  brush.beginShape(0.6);
  brush.vertex(-40, 500); brush.vertex(200, 440); brush.vertex(450, 470); brush.vertex(640, 430); brush.vertex(640, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#10904a", 235);
  brush.beginShape(0.6);
  brush.vertex(-40, 560); brush.vertex(150, 510); brush.vertex(300, 570); brush.vertex(240, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#f2d070", 255);
  brush.beginShape(0.8);
  brush.vertex(630, 650); brush.vertex(470, 580); brush.vertex(350, 540); brush.vertex(240, 480); brush.vertex(290, 468); brush.vertex(370, 505); brush.vertex(500, 560); brush.vertex(660, 625);
  brush.endShape(true);
  brush.fill("#fff2c0", 255);
  brush.circle(500, 130, 18, 0.6);

  brush.fill("#1a0a50", 140);
  brush.beginShape(0.5);
  brush.vertex(300, 140); brush.vertex(330, 210); brush.vertex(310, 300); brush.vertex(285, 300);
  brush.endShape(true);
  brush.fill("#0a5a30", 130);
  brush.beginShape(0.9);
  brush.vertex(330, 650); brush.vertex(420, 600); brush.vertex(520, 650);
  brush.endShape(true);
}
