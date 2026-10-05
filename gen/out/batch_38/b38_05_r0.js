async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9eaf4");
  brush.noStroke();
  // night sky blue/violet
  brush.fill("#1c2a7a", 210); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,330); brush.vertex(0,330); brush.endShape(true);
  brush.fill("#5a2d9a", 190);
  brush.beginShape(0.5); brush.vertex(0,150); brush.vertex(600,100); brush.vertex(600,340); brush.vertex(0,340); brush.endShape(true);
  brush.fill("#8d6fc8", 170);
  brush.beginShape(0.5); brush.vertex(0,260); brush.vertex(600,250); brush.vertex(600,340); brush.vertex(0,345); brush.endShape(true);
  // snow field left as paper with blue shadows
  brush.fill("#6f86cc", 150);
  brush.beginShape(0.8); brush.vertex(0,345); brush.vertex(200,330); brush.vertex(420,350); brush.vertex(600,335); brush.vertex(600,420); brush.vertex(0,430); brush.endShape(true);
  brush.fill("#4a5cb0", 160);
  brush.beginShape(0.8); brush.vertex(0,500); brush.vertex(250,470); brush.vertex(600,520); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // pool
  brush.fill("#2a7a9a", 200); brush.fillBleed(0.3);
  brush.beginShape(0.9); brush.vertex(150,430); brush.vertex(300,410); brush.vertex(460,435); brush.vertex(430,500); brush.vertex(260,520); brush.vertex(140,490); brush.endShape(true);
  brush.fill("#1a4a7a", 180);
  brush.beginShape(0.9); brush.vertex(200,445); brush.vertex(320,432); brush.vertex(420,450); brush.vertex(380,490); brush.vertex(250,500); brush.endShape(true);
  // steam
  brush.fill("#f0eaf8", 200); brush.fillBleed(0.3);
  brush.circle(270, 380, 40, 0.8); brush.circle(300, 330, 46, 0.8); brush.circle(330, 270, 50, 0.8); brush.circle(300, 210, 42, 0.8);
  brush.fill("#d4c8ee", 170);
  brush.circle(380, 360, 34, 0.8); brush.circle(400, 300, 38, 0.8);
  // dark pines far
  brush.fill("#101a50", 200);
  for (let i = 0; i < 6; i++) { const x = 20 + i * 36; brush.beginShape(0.2); brush.vertex(x,330); brush.vertex(x+16,280-(i%3)*14); brush.vertex(x+32,330); brush.endShape(true); }
  brush.fill("#f8f4ff", 230);
  for (let i = 0; i < 20; i++) brush.circle(20 + i * 29, 20 + (i * 67) % 160, 2, 0.3);
}
