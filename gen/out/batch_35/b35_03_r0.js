async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0d2a30");
  randomSeed(3);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  // teal sky
  brush.fill("#1a6a70", 190);
  brush.beginShape(0.4); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,380); brush.vertex(0,400); brush.endShape(true);
  brush.fill("#2a8a8a", 150);
  brush.beginShape(0.5); brush.vertex(100,100); brush.vertex(500,100); brush.vertex(520,360); brush.vertex(80,360); brush.endShape(true);
  // moon glow orange halo, then moon as paper-ish pale
  brush.fill("#e8883a", 170);
  brush.circle(300, 150, 85, 0.3);
  brush.fill("#f6e4b8", 235); brush.fillBleed(0.15);
  brush.circle(300, 150, 55, 0.2);
  // snowy field
  brush.fill("#8fc4c0", 215); brush.fillBleed(0.25);
  brush.beginShape(0.4); brush.vertex(0,400); brush.vertex(200,380); brush.vertex(400,395); brush.vertex(600,375); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#d6ece4", 200);
  brush.beginShape(0.5); brush.vertex(0,470); brush.vertex(300,430); brush.vertex(600,460); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // shadows
  brush.fill("#0a3a48", 190);
  brush.beginShape(0.5); brush.vertex(0,520); brush.vertex(250,500); brush.vertex(450,540); brush.vertex(300,600); brush.vertex(0,600); brush.endShape(true);
  // moon reflection warm streak
  brush.fill("#e8a050", 170);
  brush.beginShape(0.5); brush.vertex(270,400); brush.vertex(330,400); brush.vertex(350,560); brush.vertex(250,560); brush.endShape(true);
  // distant trees
  brush.fill("#06181e", 230);
  for (let i = 0; i < 9; i++) { let x = 40 + i * 65 + random(-15,15); brush.beginShape(0.4); brush.vertex(x,395); brush.vertex(x+18,395); brush.vertex(x+9,340+random(-20,20)); brush.endShape(true); }
  // lit window orange
  brush.fill("#f09a30", 230); brush.circle(95, 392, 5, 0.3); brush.circle(520, 388, 4, 0.3);
}
