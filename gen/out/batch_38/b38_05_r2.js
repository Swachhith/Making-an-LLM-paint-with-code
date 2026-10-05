async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6e8f5");
  brush.noStroke(); brush.fillTexture(0.4, 0.4); brush.fillBleed(0.3);
  brush.fill("#1c2a8a", 215);
  brush.beginShape(0.5); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,340); brush.vertex(-40,340); brush.endShape(true);
  brush.fill("#5a2da8", 195);
  brush.beginShape(0.5); brush.vertex(-40,140); brush.vertex(640,100); brush.vertex(640,350); brush.vertex(-40,350); brush.endShape(true);
  brush.fill("#9a78d8", 180);
  brush.beginShape(0.5); brush.vertex(-40,250); brush.vertex(640,240); brush.vertex(640,350); brush.vertex(-40,355); brush.endShape(true);
  brush.fill("#2a1a6a", 170);
  brush.beginShape(0.8); brush.vertex(-40,-40); brush.vertex(260,-40); brush.vertex(200,110); brush.vertex(-40,140); brush.endShape(true);
  // far ridge
  brush.fill("#4a3a98", 195); brush.fillBleed(0.25);
  brush.beginShape(0.8); brush.vertex(-40,350); brush.vertex(120,310); brush.vertex(260,340); brush.vertex(460,300); brush.vertex(640,345); brush.vertex(640,380); brush.vertex(-40,380); brush.endShape(true);
  // snow banks leave paper, shadows blue
  brush.fill("#7a90d8", 160);
  brush.beginShape(0.8); brush.vertex(-40,370); brush.vertex(200,350); brush.vertex(420,375); brush.vertex(640,360); brush.vertex(640,420); brush.vertex(-40,430); brush.endShape(true);
  brush.fill("#4a5cb8", 170);
  brush.beginShape(0.8); brush.vertex(-40,520); brush.vertex(250,480); brush.vertex(640,530); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#2a2a88", 150);
  brush.beginShape(0.8); brush.vertex(-40,590); brush.vertex(300,560); brush.vertex(640,600); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  // pool rim dark rocks, then water
  brush.fill("#2a2a60", 200);
  brush.beginShape(0.9); brush.vertex(120,430); brush.vertex(300,405); brush.vertex(480,430); brush.vertex(460,515); brush.vertex(260,535); brush.vertex(110,500); brush.endShape(true);
  brush.fill("#2a8aa8", 205); brush.fillBleed(0.3);
  brush.beginShape(0.9); brush.vertex(145,440); brush.vertex(300,418); brush.vertex(455,440); brush.vertex(435,500); brush.vertex(262,518); brush.vertex(135,490); brush.endShape(true);
  brush.fill("#1a5a8a", 190);
  brush.beginShape(0.9); brush.vertex(200,455); brush.vertex(320,440); brush.vertex(420,458); brush.vertex(380,495); brush.vertex(250,505); brush.endShape(true);
  // steam plume
  brush.fill("#f4eefc", 215); brush.fillBleed(0.3);
  brush.circle(270, 400, 42, 0.8); brush.circle(300, 345, 48, 0.8); brush.circle(335, 285, 52, 0.8); brush.circle(300, 225, 46, 0.8); brush.circle(340, 160, 40, 0.8);
  brush.fill("#cfc0ee", 190);
  brush.circle(390, 370, 34, 0.8); brush.circle(410, 310, 38, 0.8); brush.circle(240, 300, 32, 0.8);
  brush.fill("#0e1850", 215);
  for (let i = 0; i < 7; i++) { const x = 10 + i * 34, h = 55 + (i % 3) * 18; brush.beginShape(0.2); brush.vertex(x,345); brush.vertex(x+17,345-h); brush.vertex(x+34,345); brush.endShape(true); }
  for (let i = 0; i < 5; i++) { const x = 400 + i * 38, h = 50 + (i % 2) * 22; brush.beginShape(0.2); brush.vertex(x,340); brush.vertex(x+18,340-h); brush.vertex(x+36,340); brush.endShape(true); }
  brush.fill("#f8f4ff", 235);
  for (let i = 0; i < 24; i++) brush.circle(15 + i * 25, 20 + (i * 61) % 150, 2, 0.3);
  brush.fill("#b8a0f0", 150);
  brush.circle(300, 470, 50, 0.8);
}
