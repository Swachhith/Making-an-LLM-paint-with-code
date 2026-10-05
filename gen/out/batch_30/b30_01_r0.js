async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f1e3");
  brush.noStroke();
  // sky blooms
  brush.fill("#7fb2d8", 150); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,300); brush.vertex(300,260); brush.vertex(0,320); brush.endShape(true);
  brush.fill("#e8a07a", 130); brush.beginShape(0.8); brush.vertex(40,60); brush.vertex(260,40); brush.vertex(300,170); brush.vertex(90,190); brush.endShape(true);
  brush.fill("#a98fd0", 120); brush.circle(130,110,60,1);
  brush.fill("#5aa0cf", 150); brush.circle(470,70,50,1);
  // crown
  brush.fill("#3f8a4a", 170); brush.fillBleed(0.3);
  brush.beginShape(0.9); brush.vertex(300,300); brush.vertex(360,190); brush.vertex(470,150); brush.vertex(570,200); brush.vertex(590,320); brush.vertex(520,400); brush.vertex(380,400); brush.endShape(true);
  brush.fill("#1f6a3a", 190); brush.circle(440,270,70,1.2); brush.circle(520,320,55,1.2);
  brush.fill("#9ac04a", 160); brush.circle(400,230,45,1.2);
  // trunk
  brush.fill("#6b4a30", 210);
  brush.beginShape(0.3); brush.vertex(430,600); brush.vertex(450,380); brush.vertex(500,380); brush.vertex(530,600); brush.endShape(true);
  brush.fill("#4a3020", 190);
  brush.beginShape(0.3); brush.vertex(470,600); brush.vertex(475,400); brush.vertex(500,400); brush.vertex(510,600); brush.endShape(true);
  // branch
  brush.fill("#6b4a30", 200);
  brush.beginShape(0.3); brush.vertex(300,410); brush.vertex(300,380); brush.vertex(460,420); brush.vertex(460,450); brush.endShape(true);
  // house
  brush.fill("#c98b4a", 220);
  brush.beginShape(0.2); brush.vertex(330,300); brush.vertex(440,300); brush.vertex(440,395); brush.vertex(330,395); brush.endShape(true);
  brush.fill("#a8442a", 220);
  brush.beginShape(0.2); brush.vertex(315,305); brush.vertex(385,240); brush.vertex(455,305); brush.endShape(true);
  brush.fill("#f4d27a", 200); brush.circle(385,345,14,1);
  // drips
  brush.fill("#e0587a", 170);
  brush.beginShape(0.5); brush.vertex(120,380); brush.vertex(140,380); brush.vertex(140,520); brush.vertex(120,520); brush.endShape(true);
  brush.circle(130,530,14,1);
  brush.fill("#2f78b8", 170);
  brush.beginShape(0.5); brush.vertex(180,420); brush.vertex(200,420); brush.vertex(200,560); brush.vertex(180,560); brush.endShape(true);
  brush.circle(190,568,12,1);
  brush.fill("#e8b030", 160); brush.circle(90,470,40,1.4); brush.circle(250,520,35,1.4);
  brush.fill("#4aa860", 160); brush.beginShape(0.8); brush.vertex(0,560); brush.vertex(300,540); brush.vertex(600,570); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
}
