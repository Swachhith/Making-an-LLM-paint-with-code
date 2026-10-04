async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#15151c");
  randomSeed(11);
  brush.noStroke();
  // upper sky, a faint warm-grey glow around the moon
  brush.fill("#3a3340", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(390, 190, 170, 0.5);
  brush.fill("#5a4a44", 160);
  brush.fillBleed(0.25);
  brush.circle(390, 190, 110, 0.4);
  // the moon: pale warm disc on dark paper
  brush.fill("#f2dfb0", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.circle(390, 190, 62, 0.15);
  brush.fill("#fbeccb", 210);
  brush.fillBleed(0.15);
  brush.circle(384, 184, 48, 0.1);
  brush.fill("#d9bf8a", 150);
  brush.fillBleed(0.2);
  brush.circle(402, 200, 16, 0.4);
  brush.circle(372, 176, 10, 0.4);
  // a thin cloud crossing low
  brush.fill("#2c2a33", 200);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(120, 300);
  brush.vertex(300, 282);
  brush.vertex(520, 296);
  brush.vertex(560, 318);
  brush.vertex(330, 320);
  brush.vertex(140, 324);
  brush.endShape(true);
  // few stars
  for (let i = 0; i < 40; i++) {
    brush.fill("#e8dcc0", 200);
    brush.fillBleed(0.1);
    brush.circle(random(10, 590), random(10, 400), random(1, 2.5), 0.2);
  }
  // sea, dark band under a low horizon
  brush.fill("#0b0c12", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0);
  brush.vertex(-10, 468);
  brush.vertex(610, 464);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // moon path glitter on the water
  for (let j = 0; j < 14; j++) {
    let y = 476 + j * 9;
    let w = 18 + j * 5;
    brush.fill(j % 2 ? "#e8c888" : "#f4dfae", 200 - j * 5);
    brush.fillBleed(0.25);
    brush.beginShape(1);
    brush.vertex(390 - w + random(-8, 8), y);
    brush.vertex(390 + w + random(-8, 8), y + 1);
    brush.vertex(390 + w * 0.6, y + 5);
    brush.vertex(390 - w * 0.6, y + 5);
    brush.endShape(true);
  }
  // warm distant lights on the horizon
  let lights = [[60, 462], [78, 463], [96, 461], [520, 460], [548, 462]];
  for (let p of lights) {
    brush.fill("#f0a040", 230);
    brush.fillBleed(0.2);
    brush.circle(p[0], p[1], 3, 0.3);
    brush.fill("#c86a20", 120);
    brush.circle(p[0], p[1] + 10, 5, 0.6);
  }
}
