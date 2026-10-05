async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7ecd8");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#f2c88a", 180);
  brush.beginShape(0.5); brush.vertex(-70,0); brush.vertex(670,0); brush.vertex(670,600); brush.vertex(-70,600); brush.endShape(true);
  brush.fill("#d9a58a", 170);
  brush.beginShape(0.6); brush.vertex(380,420); brush.vertex(440,300); brush.vertex(470,240); brush.vertex(520,310); brush.vertex(670,380); brush.vertex(670,500); brush.vertex(380,500); brush.endShape(true);
  brush.fill("#a8736a", 190);
  brush.beginShape(0.3); brush.vertex(120,600); brush.vertex(170,360); brush.vertex(200,120); brush.vertex(228,70); brush.vertex(250,150); brush.vertex(285,300); brush.vertex(330,600); brush.endShape(true);
  brush.fill("#7a4a4c", 200);
  brush.beginShape(0.3); brush.vertex(228,70); brush.vertex(250,150); brush.vertex(285,300); brush.vertex(330,600); brush.vertex(250,600); brush.vertex(235,330); brush.endShape(true);
  brush.fill("#8a5a58", 180);
  brush.beginShape(0.4); brush.vertex(-70,600); brush.vertex(40,400); brush.vertex(90,330); brush.vertex(130,420); brush.vertex(170,600); brush.endShape(true);
  brush.fill("#fff4e0", 150);
  brush.beginShape(0.7); brush.vertex(-70,430); brush.vertex(250,380); brush.vertex(670,420); brush.vertex(670,520); brush.vertex(-70,540); brush.endShape(true);
  brush.fill("#fbe6c4", 190);
  brush.beginShape(0.7); brush.vertex(-70,520); brush.vertex(300,490); brush.vertex(670,520); brush.vertex(670,600); brush.vertex(-70,600); brush.endShape(true);

  brush.fill("#9a6a66", 170);
  brush.beginShape(0.4); brush.vertex(330,500); brush.vertex(360,380); brush.vertex(385,330); brush.vertex(410,380); brush.vertex(440,500); brush.endShape(true);
  brush.fill("#5a3a40", 150);
  brush.beginShape(0.4); brush.vertex(200,110); brush.vertex(228,70); brush.vertex(240,300); brush.vertex(205,300); brush.endShape(true);
  brush.fill("#ffffff", 120);
  brush.beginShape(0.8); brush.vertex(100,300); brush.vertex(400,260); brush.vertex(600,300); brush.vertex(600,360); brush.vertex(100,370); brush.endShape(true);
}
