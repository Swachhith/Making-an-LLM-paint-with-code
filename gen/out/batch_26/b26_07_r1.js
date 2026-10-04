async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdfbf6");
  randomSeed(2677);
  brush.noStroke();

  // wet-in-wet sky, blue with blooms, fading toward the horizon
  brush.fill("#8ab8dc", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(450, 280);
  brush.vertex(200, 230); brush.vertex(-20, 290);
  brush.endShape(true);
  for (let k = 0; k < 6; k++) {
    brush.fill(k % 2 ? "#5a92c8" : "#b8a8d8", 170);
    brush.circle(random(0, 600), random(10, 170), random(35, 80), true);
  }

  // field in loose greens, bleeding up into the sky line
  brush.fill("#b4cc70", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.7);
  brush.vertex(-20, 360); brush.vertex(180, 340); brush.vertex(420, 360); brush.vertex(620, 345);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#7aa040", 180);
  brush.beginShape(0.7);
  brush.vertex(-20, 480); brush.vertex(250, 460); brush.vertex(620, 500); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // loose splashes of green in the foreground
  for (let k = 0; k < 8; k++) {
    brush.fill("#5a8a2c", 180);
    brush.circle(random(0, 600), random(500, 600), random(15, 40), true);
  }

  // trunk and two limbs
  brush.fill("#5a3834", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(292, 362); brush.vertex(318, 362); brush.vertex(314, 300); brush.vertex(340, 262);
  brush.vertex(322, 258); brush.vertex(304, 290); brush.vertex(288, 262); brush.vertex(272, 268); brush.vertex(296, 302);
  brush.endShape(true);

  // crown: broad pale wash, then heavier pink blooms, then deep spots
  brush.fill("#f8b8cc", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.9);
  brush.vertex(190, 300); brush.vertex(200, 220); brush.vertex(260, 180); brush.vertex(350, 175);
  brush.vertex(420, 215); brush.vertex(430, 290); brush.vertex(360, 315); brush.vertex(250, 318);
  brush.endShape(true);
  for (let k = 0; k < 12; k++) {
    let a = random(360), r = random(0, 1);
    brush.fill(random() < 0.5 ? "#f080a8" : "#e0507e", 190);
    brush.fillBleed(0.3);
    brush.circle(310 + cos(a) * r * 100, 245 + sin(a) * r * 55, random(20, 38), true);
  }
  // drips running down from the lower edge of the crown
  for (let k = 0; k < 6; k++) {
    let x = 215 + k * 38 + random(-8, 8), y = 300 + random(0, 12), l = random(35, 90);
    brush.fill("#e0507e", 190);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(x - 8, y); brush.vertex(x + 8, y); brush.vertex(x + 3, y + l); brush.vertex(x - 3, y + l);
    brush.endShape(true);
    brush.circle(x, y + l, 6, true);
  }
  // petals fallen in the grass and splatter across the page
  for (let k = 0; k < 40; k++) {
    brush.fill(random() < 0.7 ? "#e0507e" : "#5a92c8", 210);
    brush.circle(random(0, 600), random() < 0.5 ? random(330, 420) : random(0, 600), random(2, 6), true);
  }
}
