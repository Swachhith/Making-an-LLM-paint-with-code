async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4eae0");
  randomSeed(11);
  brush.noStroke(); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#ff7a6a", 200);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,300); brush.vertex(0,300); brush.endShape(true);
  brush.fill("#8a4ac0", 190);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,110); brush.vertex(0,140); brush.endShape(true);
  brush.fill("#ffc060", 190);
  brush.beginShape(0.5); brush.vertex(100,200); brush.vertex(500,190); brush.vertex(500,300); brush.vertex(100,300); brush.endShape(true);
  // mountains with alpenglow
  brush.fill("#5a3a8a", 215);
  brush.beginShape(0.2); brush.vertex(0,300); brush.vertex(120,210); brush.vertex(220,130); brush.vertex(330,250); brush.vertex(430,180); brush.vertex(600,300); brush.endShape(true);
  brush.fill("#ff8a70", 200);
  brush.beginShape(0.2); brush.vertex(220,130); brush.vertex(260,200); brush.vertex(200,230); brush.vertex(190,170); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(430,180); brush.vertex(470,240); brush.vertex(410,240); brush.endShape(true);
  // reflection lower half
  brush.fill("#e0706a", 190);
  brush.beginShape(0.5); brush.vertex(0,310); brush.vertex(600,310); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#7a4a9a", 190);
  brush.beginShape(0.4); brush.vertex(0,310); brush.vertex(120,390); brush.vertex(220,470); brush.vertex(330,360); brush.vertex(430,420); brush.vertex(600,310); brush.endShape(true);
  brush.fill("#ffa070", 190);
  brush.beginShape(0.5); brush.vertex(190,380); brush.vertex(260,420); brush.vertex(200,500); brush.vertex(180,430); brush.endShape(true);
  // drips and blooms
  for (let i = 0; i < 8; i++) { brush.fill(i % 2 ? "#d83a6a" : "#4a8ac0", 160); brush.circle(random(40,560), random(20,580), random(14,30), 0.9); }
}
