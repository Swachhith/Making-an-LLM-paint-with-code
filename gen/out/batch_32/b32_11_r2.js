async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#d8d4ec");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#a8a0d8", 200);
  brush.beginShape(0.5); [[0,0],[600,0],[600,480],[0,480]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#c8a8d8", 190);
  brush.beginShape(0.5); [[0,250],[600,230],[600,480],[0,480]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#f0b8c0", 180);
  brush.beginShape(0.5); [[0,400],[600,390],[600,490],[0,490]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // cloud puffs
  brush.fill("#8a84c4", 170);
  brush.beginShape(0.9); [[60,120],[160,90],[260,120],[200,160],[100,160]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.beginShape(0.9); [[330,60],[460,40],[540,90],[470,120],[360,110]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // ground
  brush.fill("#6a5a9a", 215);
  brush.beginShape(0.4); [[0,490],[600,490],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // stalls
  const S=[[30,100],[170,120],[330,110],[470,100]];
  for (const [x,w] of S){
    brush.fill("#5a4a8c", 220);
    brush.beginShape(0.3); [[x,470],[x+w,470],[x+w,520],[x,520]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
    brush.fill("#e87a8a", 210);
    brush.beginShape(0.3); [[x-6,440],[x+w+6,440],[x+w,470],[x,470]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
    brush.fill("#f8d890", 200);
    brush.circle(x+w/2,495,12,0.3);
  }
  // lanterns strung
  for (let i=0;i<12;i++){
    const x=20+i*52, y=330+Math.sin(i*0.8)*20;
    brush.fill("#f08060", 200); brush.circle(x,y,15,0.4);
    brush.fill("#f8d070", 210); brush.circle(x,y,7,0.3);
  }
  brush.fill("#e8a0b0", 150);
  brush.beginShape(0.5); [[0,545],[600,545],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // second pass
  brush.fill("#4a3a8c", 230); brush.fillBleed(0.2); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,500); brush.vertex(600,500); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#ff7a60", 220); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(20,430); brush.vertex(140,430); brush.vertex(130,470); brush.vertex(30,470); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(170,445); brush.vertex(300,445); brush.vertex(290,480); brush.vertex(180,480); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(330,435); brush.vertex(450,435); brush.vertex(440,470); brush.vertex(340,470); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(480,430); brush.vertex(590,430); brush.vertex(580,470); brush.vertex(490,470); brush.endShape(true);
  brush.fill("#ffd060", 230); brush.fillBleed(0.2); brush.fillTexture(0.4,0.4);
  brush.circle(60,500,9,0.3);
  brush.circle(200,510,9,0.3);
  brush.circle(380,500,9,0.3);
  brush.circle(520,505,9,0.3);
  brush.circle(120,540,9,0.3);
  brush.circle(450,545,9,0.3);
  brush.fill("#b8a0e0", 150); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,60); brush.vertex(600,40); brush.vertex(600,120); brush.vertex(0,140); brush.endShape(true);
  
  // second pass
  brush.fill("#ff9a70", 190); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,380); brush.vertex(600,360); brush.vertex(600,400); brush.vertex(0,410); brush.endShape(true);
  brush.fill("#fff0b8", 200); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.circle(60,330,13,0.3);
  brush.circle(170,350,13,0.3);
  brush.circle(280,340,13,0.3);
  brush.circle(390,330,13,0.3);
  brush.circle(500,350,13,0.3);
  brush.fill("#3a2a70", 200); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,520); brush.vertex(600,520); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  
}
