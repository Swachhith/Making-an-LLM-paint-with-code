async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#101728");
  brush.noStroke(); brush.fillTexture(0.4, 0.4); brush.fillBleed(0.3);
  brush.fill("#2b3f9c", 205);
  brush.beginShape(0.5); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,420); brush.vertex(-40,420); brush.endShape(true);
  brush.fill("#6f2f9f", 195);
  brush.beginShape(0.5); brush.vertex(-40,110); brush.vertex(640,70); brush.vertex(640,400); brush.vertex(-40,410); brush.endShape(true);
  brush.fill("#d4457a", 185);
  brush.beginShape(0.5); brush.vertex(-40,250); brush.vertex(640,230); brush.vertex(640,430); brush.vertex(-40,440); brush.endShape(true);
  brush.fill("#f0a040", 205);
  brush.beginShape(0.5); brush.vertex(60,340); brush.vertex(540,330); brush.vertex(560,435); brush.vertex(60,440); brush.endShape(true);
  brush.fill("#18207a", 190);
  brush.beginShape(0.7); brush.vertex(-40,30); brush.vertex(300,20); brush.vertex(240,150); brush.vertex(-40,170); brush.endShape(true);
  // steppe
  brush.fill("#0e7a5f", 215); brush.fillBleed(0.25);
  brush.beginShape(0.6); brush.vertex(-40,425); brush.vertex(300,405); brush.vertex(640,425); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#0a4a55", 205);
  brush.beginShape(0.6); brush.vertex(-40,510); brush.vertex(300,475); brush.vertex(640,515); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#6a2f8f", 160);
  brush.beginShape(0.6); brush.vertex(-40,580); brush.vertex(300,550); brush.vertex(640,590); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#c9a02f", 150);
  brush.beginShape(0.6); brush.vertex(40,440); brush.vertex(300,432); brush.vertex(420,470); brush.vertex(120,485); brush.endShape(true);
  const hs = [[150,458,1.2],[250,448,0.9],[430,468,1.4],[510,452,0.8]];
  const cs = ["#2a0e18", "#3a1a10", "#14101e", "#4a2a18"];
  hs.forEach((h, i) => {
    const x = h[0], y = h[1], s = h[2];
    brush.fill(cs[i], 235); brush.fillBleed(0.2);
    brush.beginShape(0.5); brush.vertex(x-28*s,y-14*s); brush.vertex(x+24*s,y-17*s); brush.vertex(x+27*s,y+5*s); brush.vertex(x-26*s,y+7*s); brush.endShape(true);
    brush.beginShape(0.3); brush.vertex(x+18*s,y-18*s); brush.vertex(x+32*s,y-42*s); brush.vertex(x+48*s,y-34*s); brush.vertex(x+30*s,y-8*s); brush.endShape(true);
    brush.beginShape(0.3); brush.vertex(x-30*s,y-14*s); brush.vertex(x-44*s,y-2*s); brush.vertex(x-40*s,y+16*s); brush.vertex(x-26*s,y+2*s); brush.endShape(true);
    for (const dx of [-24, -8, 12, 24]) { brush.beginShape(0.3); brush.vertex(x+(dx-6)*s,y+2*s); brush.vertex(x+(dx+6)*s,y+2*s); brush.vertex(x+(dx+4)*s,y+30*s); brush.vertex(x+(dx-6)*s,y+30*s); brush.endShape(true); }
  });
  brush.fill("#f4dc98", 225);
  for (let i = 0; i < 22; i++) brush.circle(25 + i * 27, 25 + (i * 47) % 110, 2.2, 0.3);
}
