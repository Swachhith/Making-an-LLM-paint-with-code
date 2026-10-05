async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#121a2a");
  brush.noStroke();
  // big sky
  brush.fill("#2b3f8c", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,400); brush.vertex(0,400); brush.endShape(true);
  brush.fill("#6a2f8f", 190);
  brush.beginShape(0.5); brush.vertex(0,120); brush.vertex(600,80); brush.vertex(600,380); brush.vertex(0,390); brush.endShape(true);
  brush.fill("#d0793a", 190);
  brush.beginShape(0.5); brush.vertex(0,300); brush.vertex(600,280); brush.vertex(600,420); brush.vertex(0,430); brush.endShape(true);
  brush.fill("#e8b04a", 200);
  brush.beginShape(0.5); brush.vertex(120,360); brush.vertex(480,350); brush.vertex(480,425); brush.vertex(120,430); brush.endShape(true);
  // steppe ground, emerald
  brush.fill("#0e6b57", 210); brush.fillBleed(0.25);
  brush.beginShape(0.6); brush.vertex(0,420); brush.vertex(300,405); brush.vertex(600,420); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#0a4a50", 200);
  brush.beginShape(0.6); brush.vertex(0,500); brush.vertex(300,470); brush.vertex(600,505); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#2d8a4a", 150);
  brush.beginShape(0.6); brush.vertex(40,440); brush.vertex(300,430); brush.vertex(400,470); brush.vertex(100,480); brush.endShape(true);
  // horses
  const hs = [[170,455,1],[250,445,0.8],[420,462,1.1],[480,450,0.7]];
  for (const h of hs) {
    const x = h[0], y = h[1], s = h[2];
    brush.fill("#1a0e12", 230); brush.fillBleed(0.2);
    brush.beginShape(0.5); brush.vertex(x-28*s,y-14*s); brush.vertex(x+24*s,y-16*s); brush.vertex(x+26*s,y+4*s); brush.vertex(x-26*s,y+6*s); brush.endShape(true);
    brush.beginShape(0.3); brush.vertex(x+18*s,y-18*s); brush.vertex(x+34*s,y-38*s); brush.vertex(x+46*s,y-30*s); brush.vertex(x+30*s,y-8*s); brush.endShape(true);
    brush.beginShape(0.3); brush.vertex(x-22*s,y+2*s); brush.vertex(x-12*s,y+2*s); brush.vertex(x-14*s,y+28*s); brush.vertex(x-24*s,y+28*s); brush.endShape(true);
    brush.beginShape(0.3); brush.vertex(x+14*s,y+2*s); brush.vertex(x+24*s,y+2*s); brush.vertex(x+22*s,y+28*s); brush.vertex(x+12*s,y+28*s); brush.endShape(true);
  }
  brush.fill("#f0d890", 220);
  for (let i = 0; i < 14; i++) brush.circle(30 + i * 41, 30 + (i * 53) % 90, 2, 0.3);
}
