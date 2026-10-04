async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf3e2");
  randomSeed(1212);
  brush.noStroke();

  // warm hazy sky
  brush.fill("#f5d7a8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 210); brush.vertex(-10, 220);
  brush.endShape(true);
  // distant warm hills
  brush.fill("#c9b07a", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-10, 215); brush.vertex(150, 180); brush.vertex(330, 200); brush.vertex(470, 175);
  brush.vertex(610, 200); brush.vertex(610, 235); brush.vertex(-10, 235);
  brush.endShape(true);

  // meadow greens either side of a path
  brush.fill("#a6b85a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-10, 225); brush.vertex(290, 228); brush.vertex(240, 400); brush.vertex(110, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(318, 228); brush.vertex(610, 225); brush.vertex(610, 610); brush.vertex(470, 610); brush.vertex(360, 400);
  brush.endShape(true);

  // sandy path winding off to the horizon
  brush.fill("#e0b884", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.8);
  brush.vertex(292, 230); brush.vertex(316, 230); brush.vertex(360, 400); brush.vertex(470, 610);
  brush.vertex(110, 610); brush.vertex(240, 400);
  brush.endShape(true);

  // poppies: tiny dabs far off, big loose blooms near
  for (let i = 0; i < 220; i++) {
    let y = random(230, 600);
    let t = (y - 230) / 370;
    let pathL = lerp(290, 110, t) - 10, pathR = lerp(318, 470, t) + 10;
    let x = random() < 0.5 ? random(-10, pathL) : random(pathR, 610);
    let r = lerp(2, 20, t * t) + random(0, 3);
    brush.fill(random(["#e0301e", "#d8261a", "#f04a24"]), random(190, 235));
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, r, 0.5);
    if (r > 11) {
      brush.fill("#2a1a1a", 220);
      brush.circle(x + r * 0.1, y, r * 0.25, 0.3);
    }
  }
}
