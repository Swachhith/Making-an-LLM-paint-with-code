async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe9dc");
  randomSeed(27);
  brush.noStroke();
  // pale earthy ground wash across the lower half
  brush.fill("#c9b48a", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 420);
  brush.vertex(180, 400);
  brush.vertex(400, 415);
  brush.vertex(620, 395);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // distant muted treeline haze
  brush.fill("#a3a58a", 140);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(330, 420);
  brush.vertex(360, 380);
  brush.vertex(420, 370);
  brush.vertex(500, 360);
  brush.vertex(570, 380);
  brush.vertex(600, 420);
  brush.endShape(true);
  // birch trunks: small group at lower right, pale grey shadow sides
  let trunks = [[430, 18, 250], [462, 14, 290], [488, 20, 230], [515, 13, 300], [540, 16, 270]];
  for (let t of trunks) {
    let x = t[0], w = t[1], top = t[2];
    brush.fill("#8c8a80", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(x + w * 0.3, top);
    brush.vertex(x + w, top + 5);
    brush.vertex(x + w + 2, 470);
    brush.vertex(x + w * 0.3, 472);
    brush.endShape(true);
    // dark bark marks
    for (let y = top + 20; y < 460; y += random(25, 45)) {
      brush.fill("#3b3328", 210);
      brush.fillBleed(0.2);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.3);
      brush.vertex(x - 2, y);
      brush.vertex(x + w * random(0.6, 1.1), y - 3);
      brush.vertex(x + w * random(0.6, 1.1), y + 5);
      brush.vertex(x - 2, y + 6);
      brush.endShape(true);
    }
  }
  // sparse autumn foliage dabs above the trunks
  let cols = ["#b58d3a", "#8f8a4a", "#c29b55"];
  for (let i = 0; i < 26; i++) {
    brush.fill(random(cols), random(150, 210));
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.circle(random(410, 575), random(220, 320), random(10, 22), 0.6);
  }
  // cast shadows on ground
  brush.fill("#7d7560", 170);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(420, 468);
  brush.vertex(560, 466);
  brush.vertex(330, 500);
  brush.vertex(280, 492);
  brush.endShape(true);
}
