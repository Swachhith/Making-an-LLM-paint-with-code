async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f0e0");
  randomSeed(813);
  brush.noStroke();
  // sky: wet blooms of cobalt and violet
  brush.fill("#5d95d0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 320);
  brush.endShape(true);
  for (let i = 0; i < 8; i++) {
    brush.fill(random(["#2f6fc0", "#a58ad0", "#f4c8a0"]), 160 + random(70));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.5);
    brush.circle(random(-30, 630), random(20, 260), 30 + random(70), 1);
  }
  // barn looms, gable pushed high, walls splay outward toward viewer
  brush.fill("#d23221", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.08);
  brush.vertex(90, 500); brush.vertex(150, 240); brush.vertex(310, 95); brush.vertex(460, 240); brush.vertex(520, 500);
  brush.endShape(true);
  brush.fill("#a8150e", 215);
  brush.fillBleed(0.28);
  brush.beginShape(0.15);
  brush.vertex(110, 495); brush.vertex(165, 265); brush.vertex(310, 130); brush.vertex(330, 495);
  brush.endShape(true);
  brush.fill("#c8201a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.1);
  brush.vertex(100, 498); brush.vertex(155, 250); brush.vertex(310, 110); brush.vertex(450, 250); brush.vertex(505, 498);
  brush.endShape(true);
  brush.fill("#7a0f0a", 190);
  brush.fillBleed(0.3);
  brush.circle(200, 420, 60, 1);
  brush.circle(430, 300, 45, 1);
  // roof overhang
  brush.fill("#2d2a3a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.05);
  brush.vertex(125, 250); brush.vertex(310, 78); brush.vertex(485, 250); brush.vertex(465, 270); brush.vertex(310, 118); brush.vertex(145, 272);
  brush.endShape(true);
  // big doors with white X left as paper: paint four triangles
  let dl = 225, dr = 395, dt = 330, db = 500, mx = 310, my = 415;
  let tris = [[dl + 14, dt + 10, dr - 14, dt + 10, mx, my - 12], [dl + 14, db, dr - 14, db, mx, my + 12],
              [dl + 8, dt + 20, dl + 8, db - 10, mx - 16, my], [dr - 8, dt + 20, dr - 8, db - 10, mx + 16, my]];
  for (let t of tris) {
    brush.fill("#5c0e0a", 225);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.05);
    brush.vertex(t[0], t[1]); brush.vertex(t[2], t[3]); brush.vertex(t[4], t[5]);
    brush.endShape(true);
  }
  // hayloft
  brush.fill("#1f1520", 220);
  brush.fillBleed(0.15);
  brush.beginShape(0.1);
  brush.vertex(280, 190); brush.vertex(340, 190); brush.vertex(340, 250); brush.vertex(280, 250);
  brush.endShape(true);
  // long red drips running down into the grass
  for (let i = 0; i < 9; i++) {
    let x = 110 + i * 48 + random(-12, 12);
    let len = 40 + random(70);
    brush.fill("#b01d14", 200);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.3);
    brush.beginShape(0.6);
    brush.vertex(x - 8, 490); brush.vertex(x + 8, 490); brush.vertex(x + 6, 500 + len); brush.vertex(x - 6, 500 + len);
    brush.endShape(true);
    brush.circle(x, 505 + len, 9, 0.3);
  }
  // grass horizon, low, loose band
  brush.fill("#6aa232", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 485); brush.vertex(120, 500); brush.vertex(330, 490); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 7; i++) {
    brush.fill(random(["#3f7a1e", "#9cc03a", "#d8b43a"]), 180 + random(50));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.5);
    brush.circle(random(600), 530 + random(60), 25 + random(40), 1);
  }
  // splatter
  for (let i = 0; i < 25; i++) {
    brush.fill(random(["#b01d14", "#2f6fc0", "#3f7a1e"]), 210);
    brush.fillBleed(0.1);
    brush.circle(random(600), random(600), 2 + random(5), 0.4);
  }
}
