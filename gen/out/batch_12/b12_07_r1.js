async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3ead8");
  randomSeed(707);
  brush.noStroke();
  // sky: warm grey-ochre above, paler glow behind the child
  brush.fill("#b8a078", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(-20, 230);
  brush.endShape(true);
  brush.fill("#e2c58e", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 200); brush.vertex(620, 160); brush.vertex(620, 420); brush.vertex(-20, 440);
  brush.endShape(true);
  brush.fill("#8c7a60", 160);
  brush.fillBleed(0.35);
  brush.fillTexture(0.6, 0.6);
  brush.circle(90, 70, 110, 0.9);
  brush.circle(520, 110, 90, 0.9);
  // hill, rising right to left, figure near crest on left third
  brush.fill("#6e5c38", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 430); brush.vertex(120, 405); brush.vertex(260, 420); brush.vertex(450, 470); brush.vertex(620, 500); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#443822", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(-20, 510); brush.vertex(250, 490); brush.vertex(620, 560); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // silhouette: paint three times to get near-black
  let fx = 170, fy = 412;
  for (let pass = 0; pass < 3; pass++) {
    brush.fill("#1c140c", 250);
    brush.fillBleed(0.08);
    brush.fillTexture(0.3, 0.3);
    brush.circle(fx, fy - 78, 12, 0.15);
    // dress/coat A-line
    brush.beginShape(0.2);
    brush.vertex(fx - 10, fy - 66); brush.vertex(fx + 10, fy - 66); brush.vertex(fx + 20, fy - 26); brush.vertex(fx - 20, fy - 26);
    brush.endShape(true);
    // legs as one wedge each, >= 15 wide
    brush.beginShape(0.1);
    brush.vertex(fx - 16, fy - 28); brush.vertex(fx, fy - 28); brush.vertex(fx - 6, fy + 2); brush.vertex(fx - 22, fy + 2);
    brush.endShape(true);
    brush.beginShape(0.1);
    brush.vertex(fx - 2, fy - 28); brush.vertex(fx + 14, fy - 28); brush.vertex(fx + 22, fy); brush.vertex(fx + 7, fy);
    brush.endShape(true);
    // arm raised high toward the kite
    brush.beginShape(0.2);
    brush.vertex(fx + 2, fy - 64); brush.vertex(fx + 14, fy - 66); brush.vertex(fx + 36, fy - 108); brush.vertex(fx + 22, fy - 112);
    brush.endShape(true);
    // other arm out for balance
    brush.beginShape(0.2);
    brush.vertex(fx - 4, fy - 62); brush.vertex(fx - 8, fy - 50); brush.vertex(fx - 36, fy - 44); brush.vertex(fx - 34, fy - 56);
    brush.endShape(true);
  }
  // kite high right, rust
  let kx = 450, ky = 110;
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#8e3a24", 240);
    brush.fillBleed(0.12);
    brush.beginShape(0.03);
    brush.vertex(kx, ky - 40); brush.vertex(kx + 28, ky - 2); brush.vertex(kx, ky + 50); brush.vertex(kx - 28, ky - 2);
    brush.endShape(true);
  }
  // string: sagging chain of tiny dots
  for (let t = 0; t <= 1; t += 0.012) {
    let x = lerp(fx + 30, kx, t);
    let y = lerp(fy - 112, ky + 50, t) + sin(t * 180) * 40;
    brush.fill("#2a2016", 220);
    brush.fillBleed(0.02);
    brush.circle(x, y, 1.3, 0.1);
  }
  for (let i = 1; i <= 6; i++) {
    brush.fill("#a2702a", 230);
    brush.fillBleed(0.1);
    brush.circle(kx + 8 * i + sin(i * 80) * 8, ky + 50 + i * 16, 5, 0.4);
  }
}
