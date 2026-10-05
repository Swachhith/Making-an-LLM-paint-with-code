async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e6ee");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#2a2a8c", 190);
  brush.beginShape(0.5); [[0,0],[600,0],[600,430],[0,440]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#3c3ca8", 150);
  brush.beginShape(0.5); [[0,60],[600,100],[600,400],[0,300]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // bright accent: low glowing band
  brush.fill("#ff8a2a", 200);
  brush.beginShape(0.6); [[0,390],[250,370],[600,385],[600,440],[0,450]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#ffc060", 170);
  brush.beginShape(0.6); [[120,405],[330,395],[480,410],[300,428]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // sea
  brush.fill("#1a1a64", 220);
  brush.beginShape(0.5); [[0,455],[600,445],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // cliff
  brush.fill("#14143c", 235);
  brush.beginShape(0.3); [[0,440],[180,425],[330,440],[380,480],[340,540],[370,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#262660", 190);
  brush.beginShape(0.4); [[0,520],[200,500],[300,540],[320,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // pine
  brush.fill("#0a0a28", 240);
  brush.beginShape(0.3); [[205,430],[225,430],[222,330],[212,330]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.beginShape(0.6); [[150,345],[215,290],[290,340],[250,335],[225,310],[185,340]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.beginShape(0.6); [[165,310],[218,250],[275,305],[218,290]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.beginShape(0.6); [[185,265],[218,210],[250,265],[218,255]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
}
