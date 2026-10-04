async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff6d0");
  randomSeed(727);
  brush.noStroke();
  let hz = 400, sx = 165, sy = 360, sr = 34;

  // sky, top to bottom, each band leaving a hole where the sun sits
  let bands = [["#8e0a5e", -10, 120], ["#d81e3a", 90, 230], ["#ff5a10", 200, 330], ["#ff9a00", 300, hz]];
  for (let b of bands) {
    let [col, y0, y1] = b;
    let hits = y1 > sy - sr - 10;
    brush.fill(col, 225);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.2);
    brush.vertex(-10, y0); brush.vertex(610, y0 - 12); brush.vertex(610, y1);
    if (hits) {
      brush.vertex(sx + sr + 4, y1);
      for (let a = 0; a >= -180; a -= 30) brush.vertex(sx + cos(a) * (sr + 4), sy + sin(a) * (sr + 4));
    }
    brush.vertex(-10, y1 + 6);
    brush.endShape(true);
  }
  // cadmium halo hugging the disc but not over it
  brush.fill("#ffc400", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(sx - sr - 40, hz); 
  for (let a = 180; a <= 360; a += 30) brush.vertex(sx + cos(a) * (sr + 45), sy + sin(a) * (sr + 45));
  brush.vertex(sx + sr + 40, hz);
  for (let a = 0; a >= -180; a -= 30) brush.vertex(sx + cos(a) * (sr + 3), sy + sin(a) * (sr + 3));
  brush.endShape(true);

  // violet cloud streaks, heavier on the right
  for (let i = 0; i < 6; i++) {
    let y = 50 + i * 45 + random(-8, 8);
    let x0 = random(250, 520);
    brush.fill(i % 2 ? "#4a0a5a" : "#6a1470", 215);
    brush.fillBleed(0.22);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(1);
    brush.vertex(x0 - 170, y + 8); brush.vertex(x0 - 20, y - 10); brush.vertex(x0 + 160, y);
    brush.vertex(x0 + 40, y + 20);
    brush.endShape(true);
  }

  // sea: deep teal-blue under the warm sky, darker near us
  brush.fill("#0c4c9a", 225);
  brush.fillBleed(0.28);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-10, hz); brush.vertex(610, hz); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#08225e", 215);
  brush.beginShape(0.5);
  brush.vertex(-10, 500); brush.vertex(610, 480); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // sun's glitter path: a tapering column of broken warm strokes
  for (let y = hz + 4; y < 600; y += 12) {
    let t = (y - hz) / 200;
    let n = 1 + floor(t * 3);
    for (let k = 0; k < n; k++) {
      let x = sx + random(-20 - t * 60, 20 + t * 60);
      let w = random(16, 26 + t * 30);
      brush.fill(random(["#ffb000", "#ff7a10", "#ffd23a"]), 230);
      brush.fillBleed(0.12);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.4);
      brush.vertex(x - w, y); brush.vertex(x + w, y); brush.vertex(x + w * 0.7, y + 6); brush.vertex(x - w * 0.7, y + 6);
      brush.endShape(true);
    }
  }
}
