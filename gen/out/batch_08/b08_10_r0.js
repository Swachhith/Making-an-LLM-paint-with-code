async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5eee4");
  randomSeed(1010);
  brush.noStroke();
  // dusk sky: blooms of violet, rose, indigo
  brush.fill("#4b3f8f", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 420); brush.vertex(-20, 440);
  brush.endShape(true);
  for (let i = 0; i < 7; i++) {
    brush.fill(random(["#d8628a", "#e8955a", "#7a4fb0", "#2a2a6a"]), 170 + random(50));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.5);
    brush.circle(random(600), random(180, 380), 50 + random(70), 1);
  }
  // house looming from low angle, converging walls
  brush.fill("#2a2440", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.05);
  brush.vertex(110, 560); brush.vertex(150, 260); brush.vertex(320, 140); brush.vertex(470, 250); brush.vertex(500, 560);
  brush.endShape(true);
  brush.fill("#1a1428", 220);
  brush.fillBleed(0.25);
  brush.beginShape(0.1);
  brush.vertex(120, 560); brush.vertex(152, 290); brush.vertex(320, 165); brush.vertex(330, 560);
  brush.endShape(true);
  // chimney
  brush.beginShape(0.05);
  brush.vertex(400, 200); brush.vertex(405, 120); brush.vertex(440, 120); brush.vertex(438, 225);
  brush.endShape(true);
  // lit window: left as paper with warm glow wash around its edge
  brush.fill("#f2b33a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(330, 350, 45, 0.9);
  brush.fill("#1a1428", 235);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  // frame bars around window aperture (window region 305..355, 320..385)
  brush.beginShape(0.05);
  brush.vertex(290, 305); brush.vertex(370, 305); brush.vertex(370, 318); brush.vertex(290, 318);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(290, 385); brush.vertex(370, 385); brush.vertex(370, 400); brush.vertex(290, 400);
  brush.endShape(true);
  brush.fill("#e8a02a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.1);
  brush.vertex(305, 320); brush.vertex(355, 320); brush.vertex(355, 383); brush.vertex(305, 383);
  brush.endShape(true);
  // ground and dripping edge
  brush.fill("#1e2a2a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 520); brush.vertex(300, 545); brush.vertex(620, 515); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 6; i++) {
    let x = 40 + i * 100 + random(-20, 20);
    brush.fill("#4b3f8f", 180);
    brush.fillBleed(0.2);
    brush.beginShape(0.7);
    brush.vertex(x - 8, 420); brush.vertex(x + 8, 420); brush.vertex(x + 5, 470 + random(60)); brush.vertex(x - 5, 470 + random(60));
    brush.endShape(true);
  }
  // stars
  for (let i = 0; i < 10; i++) {
    brush.fill("#f7e8c8", 220);
    brush.fillBleed(0.05);
    brush.circle(random(600), random(10, 120), 2 + random(2), 0.2);
  }
}
