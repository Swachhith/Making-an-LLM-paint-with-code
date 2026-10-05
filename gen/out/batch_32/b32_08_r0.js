async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f0e6");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.5, 0.5);
  brush.fill("#e8c860", 170);
  brush.beginShape(0.6); [[30,20],[570,40],[580,330],[20,350]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#78c0a8", 190);
  brush.beginShape(0.6); [[10,200],[590,230],[590,430],[10,420]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // water
  brush.fill("#2a8aa0", 200);
  brush.beginShape(0.6); [[0,440],[600,430],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#d8408a", 150);
  brush.beginShape(0.7); [[60,470],[220,455],[260,530],[100,560]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // canopy blooms
  const C=[["#2a9a40",300,150,190],["#d0a020",170,200,110],["#18784a",440,210,130],["#6ab830",300,260,120]];
  for (const [c,x,y,r] of C){ brush.fill(c,190); brush.fillBleed(0.3); brush.circle(x,y,r,1.4); }
  brush.fill("#0e5a32", 200); brush.circle(300,190,70,1.2);
  // prop roots: tangled legs
  brush.fill("#4a2a14", 225);
  const roots=[[300,300,160,440],[300,300,230,450],[300,300,300,455],[300,300,380,450],[300,300,450,440],[200,300,110,440],[420,300,500,440]];
  for (const [x1,y1,x2,y2] of roots){
    brush.beginShape(0.5); brush.vertex(x1-12,y1); brush.vertex(x1+12,y1); brush.vertex(x2+9,y2); brush.vertex(x2-9,y2); brush.endShape(true);
  }
  brush.fill("#2a1a0e", 200);
  brush.beginShape(0.5); [[285,230],[320,230],[325,320],[280,320]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // drips
  brush.fill("#2a9a40", 170);
  for (let i=0;i<6;i++) brush.beginShape(0.5), brush.vertex(80+i*85,280), brush.vertex(100+i*85,280), brush.vertex(98+i*85,340+i*9), brush.vertex(82+i*85,340+i*9), brush.endShape(true);
  brush.fill("#c8308a", 180); brush.circle(500,500,26,1.2); brush.circle(80,380,18,1);
}
