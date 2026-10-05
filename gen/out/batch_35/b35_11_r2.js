async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e8dc");
  randomSeed(31);
  brush.noStroke(); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  // upper sky, wet-in-wet blooms
  brush.fill("#6a2aa8", 215);
  brush.beginShape(0.5); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,130); brush.vertex(-60,160); brush.endShape(true);
  brush.fill("#ff5a68", 215);
  brush.beginShape(0.5); brush.vertex(-60,100); brush.vertex(660,90); brush.vertex(660,290); brush.vertex(-60,290); brush.endShape(true);
  brush.fill("#ffb040", 215);
  brush.beginShape(0.5); brush.vertex(80,200); brush.vertex(520,190); brush.vertex(540,295); brush.vertex(60,295); brush.endShape(true);
  // mountains, a jagged chain
  brush.fill("#3a2a7a", 230);
  brush.beginShape(0.1); brush.vertex(-60,300); brush.vertex(40,240); brush.vertex(110,200); brush.vertex(200,110); brush.vertex(260,190); brush.vertex(330,230); brush.vertex(420,150); brush.vertex(500,220); brush.vertex(660,300); brush.endShape(true);
  brush.fill("#ff6a6a", 225);
  brush.beginShape(0.1); brush.vertex(200,110); brush.vertex(240,160); brush.vertex(215,205); brush.vertex(185,150); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(420,150); brush.vertex(455,205); brush.vertex(405,215); brush.endShape(true);
  // water: mirror colours, stretched downward
  brush.fill("#e0486a", 205);
  brush.beginShape(0.5); brush.vertex(-60,305); brush.vertex(660,305); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#ffa848", 200);
  brush.beginShape(0.5); brush.vertex(80,310); brush.vertex(520,310); brush.vertex(500,420); brush.vertex(100,420); brush.endShape(true);
  brush.fill("#3a2a7a", 215);
  brush.beginShape(0.4); brush.vertex(-60,305); brush.vertex(40,360); brush.vertex(200,490); brush.vertex(330,380); brush.vertex(420,455); brush.vertex(500,380); brush.vertex(660,305); brush.endShape(true);
  brush.fill("#ff6a6a", 210);
  brush.beginShape(0.5); brush.vertex(200,490); brush.vertex(230,430); brush.vertex(190,380); brush.vertex(170,440); brush.endShape(true);
  brush.fill("#5a2a98", 190);
  brush.beginShape(0.5); brush.vertex(-60,520); brush.vertex(660,540); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  // blooms and drip streaks
  for (let i = 0; i < 9; i++) { brush.fill(["#e03a7a","#2a8ac0","#ffb830"][i%3], 170); brush.circle(random(30,570), random(40,580), random(12,32), 1.0); }
  for (let i = 0; i < 6; i++) { let x = 60 + i * 95 + random(-20,20); brush.fill("#4a2a9a", 160); brush.beginShape(0.5); brush.vertex(x,0); brush.vertex(x+16,0); brush.vertex(x+16,60+random(0,70)); brush.vertex(x,60+random(0,70)); brush.endShape(true); }
}
