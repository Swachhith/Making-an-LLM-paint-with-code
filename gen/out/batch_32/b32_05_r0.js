async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3efe2");
  brush.noStroke();
  brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.fill("#4aa8e8", 190);
  brush.beginShape(0.5); [[0,0],[600,0],[600,330],[0,350]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#9fd0f0", 150);
  brush.beginShape(0.5); [[0,200],[600,200],[600,340],[0,360]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // far hills
  brush.fill("#2f9a54", 200);
  brush.beginShape(0.7); [[0,330],[120,290],[260,320],[400,285],[600,320],[600,380],[0,380]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // field
  brush.fill("#e8b820", 210);
  brush.beginShape(0.6); [[0,370],[600,360],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#6cb028", 190);
  brush.beginShape(0.6); [[0,470],[600,450],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // trunk
  brush.fill("#5a3418", 230);
  brush.beginShape(0.4); [[290,300],[308,300],[312,375],[286,375]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // crown
  brush.fill("#1a7a34", 200);
  brush.beginShape(0.8); [[240,300],[250,235],[300,205],[355,235],[365,300],[300,320]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#0f6028", 190);
  brush.beginShape(0.8); [[262,295],[272,245],[310,230],[345,260],[340,300]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // berries
  brush.fill("#e0200c", 230);
  const B=[[265,250,8],[290,232,9],[320,240,9],[345,265,8],[280,275,8],[315,275,9],[300,255,10],[255,285,7],[335,290,7]];
  for (const [x,y,r] of B) brush.circle(x,y,r,0.4);
  brush.fill("#ff5a1a", 200); brush.circle(300,255,5,0.3); brush.circle(322,242,5,0.3);
  // shadow
  brush.fill("#1a5a2a", 150);
  brush.beginShape(0.6); [[250,375],[360,372],[400,395],[240,398]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // wildflower dabs
  brush.fill("#e03060", 200); for (let i=0;i<8;i++) brush.circle(40+i*77%540,500+(i*29)%90,6,0.4);
}
