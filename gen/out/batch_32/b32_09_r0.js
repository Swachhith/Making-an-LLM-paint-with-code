async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1a1840");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#2a2a90", 200);
  brush.beginShape(0.5); [[0,0],[600,0],[600,400],[0,400]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#5a30a8", 190);
  brush.beginShape(0.5); [[0,150],[600,120],[600,400],[0,400]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#c0508c", 170);
  brush.beginShape(0.5); [[0,300],[600,290],[600,400],[0,400]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#ffb050", 210);
  brush.beginShape(0.5); [[100,360],[300,330],[500,360],[500,405],[100,405]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#ffe090", 220); brush.circle(300,375,30,0.3);
  // wheat field
  brush.fill("#b07818", 215);
  brush.beginShape(0.5); [[0,400],[600,400],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#6a4818", 200);
  brush.beginShape(0.5); [[0,480],[600,470],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#3a2a30", 210);
  brush.beginShape(0.5); [[0,540],[600,530],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // golden strokes in field
  for (let i=0;i<22;i++){
    brush.fill(i%2?"#e8a828":"#c88a1c", 180);
    const x=i*29+8, y=420+(i*37)%140;
    brush.beginShape(0.5); brush.vertex(x,y); brush.vertex(x+18,y); brush.vertex(x+22,y+45); brush.vertex(x+4,y+45); brush.endShape(true);
  }
  // distant tree line
  brush.fill("#1a1438", 220);
  brush.beginShape(0.8); [[0,398],[80,380],[150,395],[210,385],[260,398]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  for (let i=0;i<10;i++){ brush.fill("#e0e0ff",190); brush.circle(30+i*61%560,20+(i*47)%110,2,0.3); }
}
