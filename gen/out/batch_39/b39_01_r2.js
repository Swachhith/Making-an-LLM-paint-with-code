async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e6c6");
  brush.noStroke();
  // deep green sky, two passes
  for (let i = 0; i < 2; i++) {
    brush.fill(i ? "#0f3a2a" : "#1f5a44", i ? 170 : 220); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,210-i*40); brush.vertex(300,190); brush.vertex(0,230-i*50); brush.endShape(true);
  }
  // sandy ground
  brush.fill("#a8761a", 220); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3); brush.vertex(0,490); brush.vertex(600,470); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#d8a838", 190);
  brush.beginShape(0.3); brush.vertex(0,520); brush.vertex(600,505); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // walls: lit gold, then shade side
  for (let i = 0; i < 3; i++) {
    brush.fill(["#e0aa30","#c88a1c","#b5760f"][i], 200 - i*10); brush.fillBleed(0.25); brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.2); brush.vertex(30+i*8,215+i*6); brush.vertex(570-i*8,210+i*6); brush.vertex(575-i*6,505); brush.vertex(25+i*6,510); brush.endShape(true);
  }
  brush.fill("#6a4a0a", 190); brush.fillBleed(0.3);
  brush.beginShape(0.3); brush.vertex(420,230); brush.vertex(570,225); brush.vertex(575,505); brush.vertex(440,505); brush.endShape(true);
  // round parapet top
  brush.fill("#a56c10", 220); brush.fillBleed(0.2);
  brush.beginShape(0.5); brush.vertex(20,190); brush.vertex(300,175); brush.vertex(580,185); brush.vertex(580,240); brush.vertex(20,250); brush.endShape(true);
  // door, arched
  brush.fill("#0c2e20", 235); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5); brush.vertex(205,510); brush.vertex(205,360); brush.vertex(230,315); brush.vertex(290,300); brush.vertex(350,315); brush.vertex(375,360); brush.vertex(375,510); brush.endShape(true);
  brush.fill("#2f7a50", 170);
  brush.beginShape(0.5); brush.vertex(225,505); brush.vertex(225,375); brush.vertex(290,330); brush.vertex(355,375); brush.vertex(355,505); brush.endShape(true);
  // windows with deep shadow
  for (const [x,y] of [[70,310],[430,300]]) {
    brush.fill("#0c2e20", 235); brush.fillBleed(0.2);
    brush.beginShape(0.4); brush.vertex(x,y); brush.vertex(x+80,y); brush.vertex(x+80,y+95); brush.vertex(x,y+95); brush.endShape(true);
    brush.fill("#5a3a08", 190); brush.beginShape(0.3); brush.vertex(x-8,y+95); brush.vertex(x+88,y+95); brush.vertex(x+88,y+115); brush.vertex(x-8,y+115); brush.endShape(true);
  }
  // vigas
  for (let i = 0; i < 6; i++) { brush.fill("#4a2c08", 230); brush.fillBleed(0.15); brush.circle(70 + i*92, 262, 15, 0.4); }
  // chile ristra
  brush.fill("#c0281a", 220); brush.fillBleed(0.2);
  for (let j = 0; j < 5; j++) brush.circle(150, 295 + j*16, 9, 0.5);
  // cactus
  brush.fill("#1a5a3a", 220); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(490,540); brush.vertex(495,410); brush.vertex(525,405); brush.vertex(535,540); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(455,470); brush.vertex(460,420); brush.vertex(485,420); brush.vertex(490,480); brush.endShape(true);
  // cast shadow on ground
  brush.fill("#4a3208", 170); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(40,510); brush.vertex(580,505); brush.vertex(600,560); brush.vertex(0,570); brush.endShape(true);
  // r2: second pass on openings and shadow, sun-bleached highlights
  for (const [x,y,w,h] of [[70,310,80,95],[430,300,80,95]]) {
    brush.fill("#06201a", 215); brush.fillBleed(0.2);
    brush.beginShape(0.4); brush.vertex(x+4,y+4); brush.vertex(x+w-4,y+4); brush.vertex(x+w-4,y+h-4); brush.vertex(x+4,y+h-4); brush.endShape(true);
  }
  brush.fill("#06201a", 215); brush.fillBleed(0.2);
  brush.beginShape(0.5); brush.vertex(215,505); brush.vertex(215,365); brush.vertex(290,312); brush.vertex(365,365); brush.vertex(365,505); brush.endShape(true);
  brush.fill("#f2c850", 170); brush.fillBleed(0.3);
  brush.beginShape(0.4); brush.vertex(40,260); brush.vertex(190,258); brush.vertex(200,300); brush.vertex(45,310); brush.endShape(true);
  brush.fill("#1a5a3a", 160); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(0,130); brush.vertex(600,120); brush.vertex(600,200); brush.vertex(0,210); brush.endShape(true);
}
