async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4ead6");
  randomSeed(7707);
  brush.noStroke();
  // stormy earthy sky above, glowing ochre band behind the figure
  brush.fill("#8c8068", 200);
  brush.fillBleed(0.35);
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150); brush.vertex(300, 190); brush.vertex(-20, 160);
  brush.endShape(true);
  brush.fill("#e6b870", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 170); brush.vertex(620, 150); brush.vertex(620, 460); brush.vertex(-20, 460);
  brush.endShape(true);
  brush.fill("#d89a58", 150);
  brush.fillBleed(0.35);
  brush.circle(300, 390, 170, 0.8);
  // hill: low rounded crest, figure standing on top centre-right
  brush.fill("#5e5234", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-20, 520); brush.vertex(150, 470); brush.vertex(340, 452); brush.vertex(500, 470); brush.vertex(620, 500); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#3a3020", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(-20, 560); brush.vertex(300, 530); brush.vertex(620, 570); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // larger child silhouette, many passes of near-black
  let fx = 340, fy = 456, s = 1.5;
  for (let p = 0; p < 5; p++) {
    brush.fill("#0e0a06", 255);
    brush.fillBleed(0.05);
    brush.fillTexture(0.3, 0.3);
    brush.circle(fx, fy - 80 * s, 11 * s, 0.1);
    brush.beginShape(0.3);
    brush.vertex(fx - 9 * s, fy - 68 * s); brush.vertex(fx + 9 * s, fy - 68 * s); brush.vertex(fx + 17 * s, fy - 30 * s); brush.vertex(fx - 17 * s, fy - 30 * s);
    brush.endShape(true);
    brush.beginShape(0.1);
    brush.vertex(fx - 13 * s, fy - 32 * s); brush.vertex(fx - 1 * s, fy - 32 * s); brush.vertex(fx - 8 * s, fy); brush.vertex(fx - 19 * s, fy);
    brush.endShape(true);
    brush.beginShape(0.1);
    brush.vertex(fx + 1 * s, fy - 32 * s); brush.vertex(fx + 13 * s, fy - 32 * s); brush.vertex(fx + 19 * s, fy); brush.vertex(fx + 8 * s, fy);
    brush.endShape(true);
    // arm up to the left, holding string
    brush.beginShape(0.2);
    brush.vertex(fx - 4 * s, fy - 66 * s); brush.vertex(fx - 12 * s, fy - 62 * s); brush.vertex(fx - 34 * s, fy - 104 * s); brush.vertex(fx - 24 * s, fy - 110 * s);
    brush.endShape(true);
    brush.beginShape(0.2);
    brush.vertex(fx + 6 * s, fy - 64 * s); brush.vertex(fx + 10 * s, fy - 54 * s); brush.vertex(fx + 30 * s, fy - 40 * s); brush.vertex(fx + 28 * s, fy - 52 * s);
    brush.endShape(true);
  }
  // kite upper left, earthy red, with tail
  let kx = 120, ky = 120;
  for (let p = 0; p < 3; p++) {
    brush.fill("#7e2a18", 250);
    brush.fillBleed(0.1);
    brush.beginShape(0.03);
    brush.vertex(kx, ky - 44); brush.vertex(kx + 30, ky - 4); brush.vertex(kx, ky + 54); brush.vertex(kx - 30, ky - 4);
    brush.endShape(true);
  }
  for (let t = 0; t <= 1; t += 0.01) {
    let x = lerp(fx - 30 * s, kx, t);
    let y = lerp(fy - 110 * s, ky + 54, t) + sin(t * 180) * 36;
    brush.fill("#1a120a", 230);
    brush.fillBleed(0.02);
    brush.circle(x, y, 1.3, 0.1);
  }
  for (let i = 1; i <= 7; i++) {
    brush.fill("#3a2c1a", 240);
    brush.fillBleed(0.1);
    brush.circle(kx - 10 * i + sin(i * 90) * 8, ky + 54 + i * 15, 5, 0.4);
  }
  // wind-blown grass tufts at the crest
  for (let i = 0; i < 12; i++) {
    let x = random(200, 520);
    brush.fill("#2a2216", 220);
    brush.fillBleed(0.1);
    brush.circle(x, 462 + abs(x - 340) * 0.08 + random(-2, 2), random(3, 6), 0.6);
  }
}
