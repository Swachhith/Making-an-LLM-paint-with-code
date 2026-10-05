async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6e2dc");
  brush.noStroke();
  brush.fill("#1c1838", 225); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#3a2a6a", 170); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(120,60); brush.vertex(480,40); brush.vertex(520,420); brush.vertex(100,440); brush.endShape(true);
  // stems
  brush.fill("#2a7a3a", 220); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(160,600); brush.vertex(190,330); brush.vertex(240,100); brush.vertex(262,105); brush.vertex(225,340); brush.vertex(215,600); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(380,600); brush.vertex(360,380); brush.vertex(400,170); brush.vertex(425,175); brush.vertex(405,390); brush.vertex(435,600); brush.endShape(true);
  // bells: [x,y,size,tilt] -- upright left spike tilting, right spike leaning
  const bells = [[215,330,1.2,-6],[225,255,1.1,-4],[238,185,1.0,0],[250,125,0.8,4],[395,360,1.25,10],[402,280,1.15,8],[410,210,1.0,6],[418,155,0.8,4]];
  for (const [x,y,s,t] of bells) {
    const dx = x < 300 ? -40*s : 40*s;
    brush.fill("#5a1480", 210); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6); brush.vertex(x+dx-30*s,y-35*s); brush.vertex(x+dx+35*s,y-40*s); brush.vertex(x+dx+55*s,y+50*s); brush.vertex(x+dx-5*s+t,y+75*s); brush.vertex(x+dx-45*s,y+45*s); brush.endShape(true);
    brush.fill("#a850d0", 190); brush.fillBleed(0.25);
    brush.beginShape(0.6); brush.vertex(x+dx-18*s,y-22*s); brush.vertex(x+dx+22*s,y-25*s); brush.vertex(x+dx+34*s,y+35*s); brush.vertex(x+dx-28*s,y+35*s); brush.endShape(true);
    brush.fill("#1a0630", 230); brush.fillBleed(0.2);
    brush.beginShape(0.5); brush.vertex(x+dx-18*s,y+40*s); brush.vertex(x+dx+30*s,y+40*s); brush.vertex(x+dx+10*s,y+72*s); brush.vertex(x+dx-8*s,y+70*s); brush.endShape(true);
    brush.fill("#f0e0f4", 230); brush.circle(x+dx-5*s, y+50*s, 5*s, 0.4); brush.circle(x+dx+14*s, y+55*s, 4*s, 0.4);
  }
  brush.fill("#0e3a1c", 230); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(40,600); brush.vertex(90,490); brush.vertex(200,450); brush.vertex(215,540); brush.vertex(195,600); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(570,600); brush.vertex(520,480); brush.vertex(430,440); brush.vertex(420,550); brush.vertex(440,600); brush.endShape(true);
  // r2: deepen shadows between bells, add rim light
  brush.fill("#0c0420", 190); brush.fillBleed(0.3);
  brush.beginShape(0.6); brush.vertex(230,120); brush.vertex(300,160); brush.vertex(290,330); brush.vertex(240,340); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(440,150); brush.vertex(500,200); brush.vertex(500,360); brush.vertex(450,380); brush.endShape(true);
  brush.fill("#d890e8", 180); brush.fillBleed(0.3);
  for (const [x,y] of [[185,300],[190,235],[200,165],[455,340],[460,262],[455,195]]) brush.circle(x,y,15,0.6);
}
