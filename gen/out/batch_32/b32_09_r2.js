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
  // second pass
  brush.fill("#ff7a2a", 190); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,340); brush.vertex(600,330); brush.vertex(600,400); brush.vertex(0,400); brush.endShape(true);
  brush.fill("#e8b030", 200); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,470); brush.vertex(25,468); brush.vertex(40,600); brush.vertex(-10,600); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(70,470); brush.vertex(95,468); brush.vertex(110,600); brush.vertex(60,600); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(140,470); brush.vertex(165,468); brush.vertex(180,600); brush.vertex(130,600); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(210,470); brush.vertex(235,468); brush.vertex(250,600); brush.vertex(200,600); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(280,470); brush.vertex(305,468); brush.vertex(320,600); brush.vertex(270,600); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(350,470); brush.vertex(375,468); brush.vertex(390,600); brush.vertex(340,600); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(420,470); brush.vertex(445,468); brush.vertex(460,600); brush.vertex(410,600); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(490,470); brush.vertex(515,468); brush.vertex(530,600); brush.vertex(480,600); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(560,470); brush.vertex(585,468); brush.vertex(600,600); brush.vertex(550,600); brush.endShape(true);
  brush.fill("#2a0a40", 180); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,60); brush.vertex(0,90); brush.endShape(true);
  
  // second pass
  brush.fill("#ffc860", 190); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,395); brush.vertex(600,390); brush.vertex(600,420); brush.vertex(0,425); brush.endShape(true);
  brush.fill("#120a24", 200); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,560); brush.vertex(600,550); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#e0508c", 150); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,250); brush.vertex(600,230); brush.vertex(600,330); brush.vertex(0,350); brush.endShape(true);
  
}
