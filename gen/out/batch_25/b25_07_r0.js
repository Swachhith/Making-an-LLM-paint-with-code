async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbe9c8");
  randomSeed(707);
  brush.noStroke();
  let hz = 360, sx = 430;

  // hot sky: magenta top melting into orange and gold
  brush.fill("#d2266a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 170); brush.vertex(-10, 200);
  brush.endShape(true);
  brush.fill("#f25a1f", 210);
  brush.beginShape(0.5);
  brush.vertex(-10, 150); brush.vertex(610, 130); brush.vertex(610, 290); brush.vertex(-10, 300);
  brush.endShape(true);
  brush.fill("#ffb21a", 200);
  brush.beginShape(0.5);
  brush.vertex(-10, 270); brush.vertex(610, 260); brush.vertex(610, hz); brush.vertex(-10, hz);
  brush.endShape(true);

  // long streak clouds in violet
  for (let i = 0; i < 4; i++) {
    let y = 90 + i * 55;
    brush.fill("#7a1f6e", 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(1);
    let x0 = random(-40, 200);
    brush.vertex(x0, y); brush.vertex(x0 + 180, y - 12); brush.vertex(x0 + 320, y - 4);
    brush.vertex(x0 + 260, y + 16); brush.vertex(x0 + 60, y + 18);
    brush.endShape(true);
  }

  // sun low and to the right, left as bright gold with a paler core
  brush.fill("#ffd23a", 220);
  brush.fillBleed(0.2);
  brush.circle(sx, hz - 25, 45, 0.15);

  // sea: deep ultramarine with teal
  brush.fill("#1d3f9a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-10, hz); brush.vertex(610, hz); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#0e2466", 200);
  brush.beginShape(0.5);
  brush.vertex(-10, 470); brush.vertex(610, 450); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);

  // glittering path of the sun on the water
  for (let y = hz + 8; y < 600; y += 16) {
    let spread = (y - hz) * 0.35 + 10;
    brush.fill(random(["#ff9a1f", "#ffc830", "#f2641f"]), 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    let x = sx + random(-spread, spread);
    let w = random(18, 50);
    brush.vertex(x - w, y); brush.vertex(x + w, y - 2); brush.vertex(x + w * 0.8, y + 7); brush.vertex(x - w * 0.8, y + 8);
    brush.endShape(true);
  }
}
