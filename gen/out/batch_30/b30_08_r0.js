async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2ead2");
  brush.noStroke();
  brush.fill("#c8a040", 150); brush.fillBleed(0.3); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.8); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,260); brush.vertex(0,300); brush.endShape(true);
  // far trees
  brush.fill("#164a30", 190); brush.beginShape(0.7); brush.vertex(0,260); brush.vertex(150,200); brush.vertex(300,250); brush.vertex(450,190); brush.vertex(600,250); brush.vertex(600,330); brush.vertex(0,330); brush.endShape(true);
  // lake
  brush.fill("#2a6a50", 180); brush.beginShape(0.6); brush.vertex(0,330); brush.vertex(600,330); brush.vertex(600,420); brush.vertex(0,420); brush.endShape(true);
  brush.fill("#e0b040", 150); brush.beginShape(0.6); brush.vertex(100,335); brush.vertex(300,335); brush.vertex(280,410); brush.vertex(120,410); brush.endShape(true);
  // foreground grass bank
  brush.fill("#0e3a22", 210); brush.beginShape(0.7); brush.vertex(0,420); brush.vertex(600,400); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // cabin low angle
  brush.fill("#8a5a2a", 225); brush.beginShape(0.1); brush.vertex(200,300); brush.vertex(460,300); brush.vertex(480,520); brush.vertex(180,520); brush.endShape(true);
  brush.fill("#5a3818", 200); for (let y=330;y<520;y+=38){ brush.beginShape(0.1); brush.vertex(190,y); brush.vertex(470,y); brush.vertex(470,y+14); brush.vertex(190,y+14); brush.endShape(true);}
  brush.fill("#2a4a30", 230); brush.beginShape(0.1); brush.vertex(150,310); brush.vertex(330,190); brush.vertex(510,310); brush.endShape(true);
  brush.fill("#f4c850", 220); brush.beginShape(0.2); brush.vertex(260,380); brush.vertex(320,380); brush.vertex(320,450); brush.vertex(260,450); brush.endShape(true);
  brush.fill("#3a2410", 220); brush.beginShape(0.2); brush.vertex(380,400); brush.vertex(430,400); brush.vertex(430,520); brush.vertex(380,520); brush.endShape(true);
}
