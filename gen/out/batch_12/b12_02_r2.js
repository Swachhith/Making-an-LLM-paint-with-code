async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#16243c");
  randomSeed(2202);
  brush.noStroke();
  for (let i = 0; i < 70; i++) {
    brush.fill("#e8f4f2", random(170, 250));
    brush.fillBleed(0.04);
    brush.circle(random(0, 600), random(0, 450), random(0.7, 2.2), 0.2);
  }
  // wide teal glow and inner halo
  brush.fill("#1f5a6e", 180);
  brush.fillBleed(0.35);
  brush.fillTexture(0.6, 0.6);
  brush.circle(250, 230, 240, 0.6);
  brush.fill("#3f8f96", 180);
  brush.fillBleed(0.3);
  brush.circle(250, 230, 150, 0.4);
  brush.fill("#78c0b8", 200);
  brush.fillBleed(0.3);
  brush.circle(250, 230, 105, 0.25);
  // huge moon, three passes
  for (let p = 0; p < 3; p++) {
    brush.fill("#f4f8ee", 250);
    brush.fillBleed(0.08);
    brush.fillTexture(0.3, 0.3);
    brush.circle(250, 230, 84 - p * 3, 0.06);
  }
  brush.fill("#c4d6cc", 160);
  brush.fillBleed(0.25);
  brush.circle(226, 212, 22, 0.6);
  brush.circle(276, 256, 15, 0.6);
  brush.circle(270, 206, 10, 0.6);
  // flat sea at a low horizon, deep indigo, then teal swell nearer
  brush.fill("#08102c", 245);
  brush.fillBleed(0.15);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.02);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 6; i++) {
    let y = 500 + i * 18;
    brush.fill("#15505e", 150);
    brush.fillBleed(0.3);
    brush.beginShape(0.5);
    let x0 = random(-40, 300);
    brush.vertex(x0, y); brush.vertex(x0 + random(200, 340), y - 2); brush.vertex(x0 + 220, y + 7); brush.vertex(x0 + 20, y + 8);
    brush.endShape(true);
  }
  // moon glitter column
  for (let i = 0; i < 30; i++) {
    let t = i / 29;
    let y = 476 + t * 122 + random(-2, 2);
    let spread = 10 + t * 70;
    let x = 250 + random(-spread, spread);
    let w = random(8, 16) + t * 16;
    brush.fill("#e2f2e8", random(200, 250));
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0.6);
    brush.vertex(x - w, y); brush.vertex(x + w, y - 1); brush.vertex(x + w * 0.7, y + 4); brush.vertex(x - w * 0.7, y + 4);
    brush.endShape(true);
  }
}
