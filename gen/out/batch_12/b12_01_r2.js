async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf5ef");
  randomSeed(1212);
  brush.noStroke();
  // one big wet sky mass, splashed in overlapping loose blobs
  let cols = ["#f06b95", "#f7a07a", "#b672c9", "#ff8f8f", "#f5b2c8"];
  for (let i = 0; i < 26; i++) {
    let x = random(-40, 640), y = random(-30, 420);
    let c = y < 150 ? random(["#b672c9", "#f06b95"]) : random(cols);
    brush.fill(c, random(160, 215));
    brush.fillBleed(0.35);
    brush.fillTexture(0.6, 0.6);
    brush.circle(x, y, random(55, 120), 1.0);
  }
  // drips pulled down from the wet sky toward the horizon, tapering with a bead at the end
  for (let i = 0; i < 9; i++) {
    let x = random(30, 570), y0 = random(300, 360), len = random(50, 110);
    let c = random(["#d4467a", "#9a4eb0", "#e8608a"]);
    brush.fill(c, 200);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.7);
    brush.vertex(x - 12, y0);
    brush.vertex(x + 12, y0);
    brush.vertex(x + 8, y0 + len * 0.6);
    brush.vertex(x + 4, y0 + len);
    brush.vertex(x - 4, y0 + len);
    brush.vertex(x - 8, y0 + len * 0.6);
    brush.endShape(true);
    brush.fill(c, 230);
    brush.fillBleed(0.1);
    brush.circle(x, y0 + len + 3, 6, 0.3);
  }
  // spatter
  for (let i = 0; i < 45; i++) {
    brush.fill(random(["#d4467a", "#9a4eb0", "#ff9a5a", "#5f7a3a"]), 230);
    brush.fillBleed(0.08);
    brush.circle(random(0, 600), random(0, 600), random(1.5, 5), 0.6);
  }
  // low horizon glow
  brush.fill("#ffc27a", 190);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-30, 440); brush.vertex(630, 430); brush.vertex(630, 500); brush.vertex(-30, 500);
  brush.endShape(true);
  // fields, loose wet bands that bleed into each other
  let f = [["#6f8c3e", 488, 210], ["#a8733c", 525, 190], ["#4a6a2c", 560, 210], ["#2f441e", 590, 200]];
  for (let b of f) {
    brush.fill(b[0], b[2]);
    brush.fillBleed(0.35);
    brush.fillTexture(0.6, 0.6);
    brush.beginShape(0.6);
    brush.vertex(-30, b[1] + random(-8, 8)); brush.vertex(200, b[1] + random(-10, 10)); brush.vertex(420, b[1] + random(-10, 10)); brush.vertex(630, b[1] + random(-8, 8));
    brush.vertex(630, 630); brush.vertex(-30, 630);
    brush.endShape(true);
  }
  // a lone tree and hedge on the horizon
  brush.fill("#253318", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(430, 468, 22, 0.7);
  brush.circle(445, 478, 14, 0.7);
  for (let x = 0; x < 600; x += random(18, 40)) {
    brush.fill("#2f3d20", 210);
    brush.fillBleed(0.2);
    brush.circle(x, 488, random(5, 10), 0.6);
  }
}
