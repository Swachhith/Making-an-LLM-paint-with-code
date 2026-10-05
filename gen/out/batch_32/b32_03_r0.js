async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1e6cf");
  brush.noStroke();
  brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  // dark walls
  brush.fill("#14100f", 235);
  brush.beginShape(0.2); [[0,120],[230,120],[230,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.beginShape(0.2); [[370,120],[600,120],[600,600],[370,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#1e1816", 220);
  brush.beginShape(0.2); [[0,0],[600,0],[600,130],[0,130]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.beginShape(0.3); [[0,470],[600,470],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // glow in doorway
  brush.fill("#f4a640", 190);
  brush.beginShape(0.3); [[230,130],[370,130],[370,480],[230,480]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#fbd37a", 150);
  brush.beginShape(0.4); [[250,150],[350,150],[350,300],[250,300]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // light spill on floor
  brush.fill("#e8892e", 170);
  brush.beginShape(0.5); [[230,480],[370,480],[470,600],[130,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // figure
  brush.fill("#0a0706", 240);
  brush.beginShape(0.6); [[296,260],[304,260],[308,300],[318,380],[314,470],[304,470],[300,400],[296,470],[286,470],[282,380],[292,300]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.circle(300,246,13,0.3);
  brush.fill("#2a1a14", 200);
  brush.beginShape(0.5); [[286,300],[314,300],[320,400],[280,400]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#3a2518", 190);
  brush.beginShape(0.5); [[300,470],[330,490],[300,540],[270,490]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
}
