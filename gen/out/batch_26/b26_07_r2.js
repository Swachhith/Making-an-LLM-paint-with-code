async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fefcf7");
  randomSeed(26072);
  brush.noStroke();

  // loose sky: two big blooms of blue and violet, bare paper between
  brush.fill("#78acd8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(120, 90, 170, true);
  brush.fill("#a898d8", 160);
  brush.circle(500, 130, 150, true);
  brush.fill("#5a92c8", 170);
  brush.circle(320, 20, 90, true);

  // field: one sloppy yellow-green sweep, then a darker band that runs into the bottom edge
  brush.fill("#c0d070", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.8);
  brush.vertex(-20, 380); brush.vertex(200, 360); brush.vertex(420, 385); brush.vertex(620, 365);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6a9838", 180);
  brush.beginShape(0.8);
  brush.vertex(-20, 500); brush.vertex(280, 480); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // trunk
  brush.fill("#4e302c", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(290, 385); brush.vertex(318, 385); brush.vertex(316, 320); brush.vertex(350, 280);
  brush.vertex(330, 272); brush.vertex(304, 305); brush.vertex(282, 272); brush.vertex(264, 282); brush.vertex(292, 318);
  brush.endShape(true);

  // crown: big wet rose wash, then hot pink blooms, then a few deep cores
  brush.fill("#f4a8c4", 195);
  brush.fillBleed(0.32);
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.95);
  brush.vertex(150, 320); brush.vertex(160, 220); brush.vertex(230, 150); brush.vertex(340, 140);
  brush.vertex(450, 190); brush.vertex(470, 290); brush.vertex(380, 330); brush.vertex(240, 335);
  brush.endShape(true);
  for (let k = 0; k < 16; k++) {
    let a = random(360), r = sqrt(random());
    brush.fill(random() < 0.5 ? "#f07aa6" : "#e04a80", 195);
    brush.fillBleed(0.32);
    brush.circle(310 + cos(a) * r * 130, 240 + sin(a) * r * 75, random(24, 44), true);
  }
  brush.fill("#b02a60", 200);
  for (let k = 0; k < 6; k++) brush.circle(310 + random(-100, 100), 260 + random(-40, 50), random(10, 18), true);

  // three drips of wet pink running off the crown
  for (let k = 0; k < 3; k++) {
    let x = 210 + k * 90 + random(-10, 10), y = 318, l = random(50, 110);
    brush.fill("#e04a80", 185);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(x - 8, y); brush.vertex(x + 8, y); brush.vertex(x + 4, y + l); brush.vertex(x - 4, y + l);
    brush.endShape(true);
    brush.circle(x, y + l + 2, 7, true);
  }
  // fallen petals and splatter
  for (let k = 0; k < 45; k++) {
    brush.fill(random() < 0.75 ? "#e04a80" : "#5a92c8", 215);
    brush.circle(random(0, 600), random() < 0.6 ? random(360, 470) : random(0, 600), random(2, 6), true);
  }
}
