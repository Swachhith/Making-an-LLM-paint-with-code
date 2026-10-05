async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9f0ec");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#3f8a8c", 150);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,380); brush.vertex(0,420); brush.endShape(true);
  brush.fill("#0f5a63", 170);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,200); brush.vertex(0,250); brush.endShape(true);
  brush.fill("#1b6b6a", 200);
  brush.beginShape(0.4); brush.vertex(0,400); brush.vertex(600,370); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#e8832a", 190);
  brush.beginShape(0.4); brush.vertex(300,380); brush.vertex(380,380); brush.vertex(150,600); brush.vertex(30,600); brush.endShape(true);
  const xs=[395,425,452,476,497], hs=[170,150,128,108,90];
  for (let i=0;i<5;i++){
    const x=xs[i], b=392+i*3, t=b-hs[i]*0.95, w=22-i*2;
    brush.fill("#0a3d45", 210);
    brush.beginShape(0.6); brush.vertex(x-w/2,b); brush.vertex(x-w*0.6,b-hs[i]*0.5); brush.vertex(x,t); brush.vertex(x+w*0.6,b-hs[i]*0.5); brush.vertex(x+w/2,b); brush.endShape(true);
    brush.fill("#e8832a", 150);
    brush.beginShape(0.6); brush.vertex(x+2,b); brush.vertex(x+3,b-hs[i]*0.5); brush.vertex(x+w*0.5,b-hs[i]*0.4); brush.vertex(x+w*0.5,b); brush.endShape(true);
  }
  brush.fill("#f0a040", 200); brush.circle(130,110,30,0.3);
}
