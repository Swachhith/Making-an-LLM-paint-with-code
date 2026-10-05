async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8dfc4");
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4,0.4);
  // dark wall, two layers
  brush.fill("#0f4030", 210); brush.beginShape(0.5); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#07281c", 190); brush.beginShape(0.5); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  // sky through the window
  brush.fill("#f8c850", 210); brush.beginShape(0.3); brush.vertex(110,80); brush.vertex(490,80); brush.vertex(490,300); brush.vertex(110,300); brush.endShape(true);
  brush.fill("#e8801f", 190); brush.beginShape(0.6); brush.vertex(100,70); brush.vertex(500,70); brush.vertex(500,200); brush.vertex(300,170); brush.vertex(100,210); brush.endShape(true);
  brush.fill("#b8501a", 160); brush.beginShape(0.6); brush.vertex(100,70); brush.vertex(500,70); brush.vertex(500,120); brush.vertex(100,140); brush.endShape(true);
  // sun
  brush.fill("#fff0a0", 230); brush.circle(300,255,34,1);
  brush.fill("#f4c030", 190); brush.circle(300,255,52,1.2);
  // far shore silhouette
  brush.fill("#0f4030", 220); brush.beginShape(0.7); brush.vertex(110,300); brush.vertex(200,278); brush.vertex(260,296); brush.vertex(380,282); brush.vertex(490,300); brush.vertex(490,320); brush.vertex(110,320); brush.endShape(true);
  // water: dark green with gold path
  brush.fill("#1c6a48", 200); brush.beginShape(0.6); brush.vertex(110,310); brush.vertex(490,310); brush.vertex(490,520); brush.vertex(110,520); brush.endShape(true);
  brush.fill("#0e4a30", 190); brush.beginShape(0.6); brush.vertex(110,380); brush.vertex(490,380); brush.vertex(490,520); brush.vertex(110,520); brush.endShape(true);
  brush.fill("#f0c040", 200); brush.beginShape(0.6); brush.vertex(265,315); brush.vertex(335,315); brush.vertex(360,420); brush.vertex(340,520); brush.vertex(260,520); brush.vertex(240,420); brush.endShape(true);
  brush.fill("#fff0a0", 200); brush.circle(300,340,18,1.3); brush.circle(300,400,14,1.3);
  brush.fill("#f0c040", 160); brush.beginShape(0.6); brush.vertex(150,340); brush.vertex(210,340); brush.vertex(210,356); brush.vertex(150,356); brush.endShape(true);
  // frame
  brush.fill("#04180f", 235);
  brush.beginShape(0.1); brush.vertex(288,80); brush.vertex(312,80); brush.vertex(312,520); brush.vertex(288,520); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(110,205); brush.vertex(490,205); brush.vertex(490,225); brush.vertex(110,225); brush.endShape(true);
  brush.fill("#18503a", 220); brush.beginShape(0.2); brush.vertex(70,515); brush.vertex(530,515); brush.vertex(530,570); brush.vertex(70,570); brush.endShape(true);
  // plant leaf on sill
  brush.fill("#2a7a50", 200); brush.beginShape(0.8); brush.vertex(450,520); brush.vertex(500,430); brush.vertex(540,470); brush.vertex(520,525); brush.endShape(true);
  brush.fill("#e0a830", 160); brush.circle(500,440,20,1.3);
}
