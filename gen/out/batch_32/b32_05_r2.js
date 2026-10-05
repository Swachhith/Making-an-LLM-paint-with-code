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
  // second pass
  brush.fill("#e82810", 230); brush.fillBleed(0.2); brush.fillTexture(0.4,0.4);
  brush.circle(270,262,6,0.5);
  brush.circle(300,224,7,0.5);
  brush.circle(330,252,6,0.5);
  brush.circle(285,244,6,0.5);
  brush.circle(318,272,6,0.5);
  brush.circle(260,280,5,0.5);
  brush.circle(342,280,5,0.5);
  brush.circle(305,240,5,0.5);
  brush.fill("#0a5a20", 160); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(270,320); brush.vertex(330,320); brush.vertex(380,372); brush.vertex(220,372); brush.endShape(true);
  brush.fill("#2a60e0", 160); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,100); brush.vertex(300,60); brush.vertex(600,110); brush.vertex(600,170); brush.vertex(0,190); brush.endShape(true);
  
  // second pass
  brush.fill("#d8180a", 220); brush.fillBleed(0.2); brush.fillTexture(0.4,0.4);
  brush.circle(250,262,5,0.5);
  brush.circle(280,228,5,0.5);
  brush.circle(312,232,5,0.5);
  brush.circle(338,246,5,0.5);
  brush.circle(292,265,5,0.5);
  brush.circle(325,288,5,0.5);
  brush.fill("#f0c020", 170); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,520); brush.vertex(600,500); brush.vertex(600,560); brush.vertex(0,580); brush.endShape(true);
  
}
