async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f6f0");
  brush.noStroke();
  brush.fill("#2a8ee0", 190); brush.fillBleed(0.3); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.8); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,330); brush.vertex(0,350); brush.endShape(true);
  brush.fill("#f0c030", 150); brush.circle(100,90,50,1);
  // ground
  brush.fill("#2a9a3a", 200); brush.beginShape(0.8); brush.vertex(0,430); brush.vertex(600,430); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // greenhouse body (off-centre right)
  brush.fill("#8fe0d0", 190);
  brush.beginShape(0.1); brush.vertex(250,260); brush.vertex(560,260); brush.vertex(560,450); brush.vertex(250,450); brush.endShape(true);
  brush.fill("#6fd0c0", 180);
  brush.beginShape(0.1); brush.vertex(240,260); brush.vertex(405,170); brush.vertex(570,260); brush.endShape(true);
  // plants
  brush.fill("#0e8a30", 220); brush.circle(300,400,40,1.3); brush.circle(380,380,50,1.3); brush.circle(470,400,42,1.3); brush.circle(520,340,30,1.3);
  brush.fill("#e02050", 220); brush.circle(380,350,16,1); brush.circle(470,360,14,1);
  brush.fill("#f08a10", 220); brush.circle(300,360,14,1); brush.circle(520,310,12,1);
  // frame
  brush.fill("#1e5a70", 220);
  for (const x of [250,355,460,560]) { brush.beginShape(0.1); brush.vertex(x-8,260); brush.vertex(x+8,260); brush.vertex(x+8,450); brush.vertex(x-8,450); brush.endShape(true); }
  brush.beginShape(0.1); brush.vertex(245,440); brush.vertex(565,440); brush.vertex(565,458); brush.vertex(245,458); brush.endShape(true);
}
