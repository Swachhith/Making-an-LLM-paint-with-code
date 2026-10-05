async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e2bc");
  brush.noStroke();
  // twilight sky: gold glow low, deep green above
  brush.fill("#e8a820", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,120); brush.vertex(600,130); brush.vertex(600,500); brush.vertex(0,500); brush.endShape(true);
  brush.fill("#d8701a", 190);
  brush.beginShape(0.5); brush.vertex(0,330); brush.vertex(600,320); brush.vertex(600,510); brush.vertex(0,510); brush.endShape(true);
  brush.fill("#1a5240", 215);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,200); brush.vertex(0,170); brush.endShape(true);
  brush.fill("#0e3a2c", 170);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,90); brush.vertex(0,70); brush.endShape(true);
  // distant hedge line
  brush.fill("#1a4a38", 210); brush.fillBleed(0.3);
  brush.beginShape(0.6); brush.vertex(0,470); brush.vertex(100,440); brush.vertex(220,455); brush.vertex(400,445); brush.vertex(520,435); brush.vertex(600,455); brush.vertex(600,520); brush.vertex(0,520); brush.endShape(true);
  // ground
  brush.fill("#0c2a20", 240); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(0,520); brush.vertex(300,505); brush.vertex(600,520); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // elm silhouette: trunk forking
  brush.fill("#08201a", 245); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6); brush.vertex(265,525); brush.vertex(280,420); brush.vertex(270,340); brush.vertex(325,340); brush.vertex(320,420); brush.vertex(345,525); brush.endShape(true);
  const lim = [[290,350,130,215],[290,350,200,175],[310,350,400,205],[310,345,470,260],[290,350,110,260],[300,330,300,110]];
  for (const [x0,y0,x1,y1] of lim) {
    brush.beginShape(0.5); brush.vertex(x0-18,y0); brush.vertex(x1-14,y1); brush.vertex(x1+14,y1); brush.vertex(x0+18,y0); brush.endShape(true);
  }
  // crown masses (translucent so sky glints through)
  const cr = [[300,120,150],[190,175,115],[420,175,115],[110,255,85],[490,255,85],[300,210,130],[210,250,90],[400,250,90]];
  for (const [x,y,r] of cr) {
    brush.fill("#0a3024", 205); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.circle(x,y,r,0.9);
    brush.fill("#06201a", 150); brush.circle(x+8,y+10,r*0.6,0.9);
  }
}
