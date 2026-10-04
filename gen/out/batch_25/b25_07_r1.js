async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff0cc");
  randomSeed(717);
  brush.noStroke();
  let hz = 390, sx = 150, sy = 345, sr = 38;

  // sky painted around the sun: bold scarlet and orange, the disc left as warm paper
  let bands = [["#b0125e", -10, 130], ["#e8302a", 100, 250], ["#ff7a12", 220, hz]];
  for (let b of bands) {
    brush.fill(b[0], 220);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.4);
    brush.vertex(-10, b[1]); brush.vertex(610, b[1] - 15);
    brush.vertex(610, b[2]);
    if (b[2] > sy - sr) {
      brush.vertex(sx + sr + 30, b[2]); brush.vertex(sx + sr + 6, sy); brush.vertex(sx, sy - sr - 8);
      brush.vertex(sx - sr - 6, sy); brush.vertex(sx - sr - 30, b[2]);
    }
    brush.vertex(-10, b[2]);
    brush.endShape(true);
  }
  // glow ring
  brush.fill("#ffc21a", 200);
  brush.fillBleed(0.3);
  brush.circle(sx, sy, sr + 20, 0.3);
  brush.fill("#fff0a8", 150);
  brush.circle(sx, sy, sr - 4, 0.1);

  // purple cloud streaks, backlit
  for (let i = 0; i < 5; i++) {
    let y = 60 + i * 50 + random(-10, 10);
    let x0 = random(100, 450);
    brush.fill("#5c1466", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(1);
    brush.vertex(x0 - 150, y + 6); brush.vertex(x0, y - 10); brush.vertex(x0 + 180, y + 2);
    brush.vertex(x0 + 60, y + 18);
    brush.endShape(true);
  }

  // sea: saturated violet-blue, darker towards us
  brush.fill("#3a2a9a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-10, hz); brush.vertex(610, hz); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#1a1466", 210);
  brush.beginShape(0.6);
  brush.vertex(-10, 480); brush.vertex(610, 470); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // sun-path: wide warm column broken into horizontal slivers, widening toward us
  for (let y = hz + 6; y < 600; y += 14) {
    let t = (y - hz) / 210;
    let w = 30 + t * 80;
    brush.fill(random(["#ff8a12", "#ffb81a", "#ff5a1a"]), 225);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    let x = sx + random(-w * 0.4, w * 0.4);
    let ww = random(w * 0.3, w * 0.7);
    brush.vertex(x - ww, y); brush.vertex(x + ww, y + 1); brush.vertex(x + ww * 0.7, y + 6); brush.vertex(x - ww * 0.7, y + 6);
    brush.endShape(true);
  }
}
