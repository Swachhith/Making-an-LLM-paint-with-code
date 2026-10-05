async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e6c8");
  brush.noStroke(); brush.fillTexture(0.4, 0.4); brush.fillBleed(0.3);
  brush.fill("#f0b53a", 205);
  brush.beginShape(0.5); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,330); brush.vertex(-40,330); brush.endShape(true);
  brush.fill("#e0701f", 185);
  brush.beginShape(0.5); brush.vertex(-40,190); brush.vertex(640,170); brush.vertex(640,330); brush.vertex(-40,330); brush.endShape(true);
  brush.fill("#fbe08a", 225); brush.circle(300, 225, 46, 0.5);
  brush.fill("#f4c860", 160); brush.circle(300, 225, 85, 0.6);
  // distant tree line
  brush.fill("#4a7a45", 190); brush.fillBleed(0.25);
  brush.beginShape(0.8); brush.vertex(-40,300); brush.vertex(150,260); brush.vertex(300,290); brush.vertex(450,255); brush.vertex(640,300); brush.vertex(640,340); brush.vertex(-40,340); brush.endShape(true);
  // foreground forest framing
  brush.fill("#1f4a2a", 215);
  brush.beginShape(0.8); brush.vertex(-40,-40); brush.vertex(200,-40); brush.vertex(150,130); brush.vertex(190,330); brush.vertex(-40,340); brush.endShape(true);
  brush.beginShape(0.8); brush.vertex(640,-40); brush.vertex(400,-40); brush.vertex(450,140); brush.vertex(410,330); brush.vertex(640,340); brush.endShape(true);
  brush.fill("#0f2f1c", 225);
  for (const x of [40, 120, 470, 550]) { brush.beginShape(0.2); brush.vertex(x,-20); brush.vertex(x+28,-20); brush.vertex(x+32,335); brush.vertex(x-8,335); brush.endShape(true); }
  brush.fill("#c8e060", 120);
  brush.beginShape(0.5); brush.vertex(230,60); brush.vertex(370,60); brush.vertex(400,200); brush.vertex(200,200); brush.endShape(true);
  // water
  brush.fill("#b87a2a", 185);
  brush.beginShape(0.6); brush.vertex(-40,335); brush.vertex(640,335); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#e8a830", 195);
  brush.beginShape(0.6); brush.vertex(150,345); brush.vertex(450,345); brush.vertex(440,580); brush.vertex(160,590); brush.endShape(true);
  brush.fill("#fbe08a", 225); brush.circle(300, 395, 44, 0.8);
  brush.fill("#e07a1f", 170);
  brush.beginShape(0.5); brush.vertex(120,440); brush.vertex(480,440); brush.vertex(470,470); brush.vertex(130,475); brush.endShape(true);
  brush.fill("#143a24", 215);
  brush.beginShape(0.8); brush.vertex(-40,340); brush.vertex(190,340); brush.vertex(150,470); brush.vertex(200,640); brush.vertex(-40,640); brush.endShape(true);
  brush.beginShape(0.8); brush.vertex(640,340); brush.vertex(410,340); brush.vertex(450,470); brush.vertex(400,640); brush.vertex(640,640); brush.endShape(true);
  brush.fill("#0a2216", 215);
  for (const x of [45, 125, 475, 555]) { brush.beginShape(0.2); brush.vertex(x-4,340); brush.vertex(x+32,340); brush.vertex(x+28,600); brush.vertex(x,600); brush.endShape(true); }
}
