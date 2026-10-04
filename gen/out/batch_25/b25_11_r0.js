async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8dccb");
  randomSeed(1111);
  brush.noStroke();

  // dusk sky: dusty mauve above, faded apricot at the horizon
  brush.fill("#8f7a8c", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 230); brush.vertex(-10, 250);
  brush.endShape(true);
  brush.fill("#d4a07a", 190);
  brush.beginShape(0.6);
  brush.vertex(-10, 200); brush.vertex(610, 190); brush.vertex(610, 400); brush.vertex(-10, 410);
  brush.endShape(true);

  // savanna field, dun and brown, rising to a horizon at 400
  brush.fill("#8f7651", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-10, 400); brush.vertex(610, 395); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#6b573a", 180);
  brush.beginShape(0.7);
  brush.vertex(-10, 480); brush.vertex(250, 470); brush.vertex(610, 500); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);

  // distant baobab, small, right of centre: thick bottle trunk, stubby root-like crown
  let bx = 380, by = 402;
  let trunk = [[bx - 16, by], [bx - 14, by - 30], [bx - 8, by - 55], [bx + 8, by - 55], [bx + 14, by - 30], [bx + 16, by]];
  for (let p = 0; p < 2; p++) {
    brush.fill(p ? "#3a2c26" : "#5a463a", 220);
    brush.fillBleed(0.15);
    brush.fillTexture(0.35, 0.3);
    brush.beginShape(0.5);
    for (let v of trunk) brush.vertex(v[0], v[1]);
    brush.endShape(true);
  }
  // splayed branch crown as small blobs and spurs
  for (let i = 0; i < 7; i++) {
    let a = -160 + i * 23;
    let r = random(30, 48);
    brush.fill("#3a2c26", 215);
    brush.fillBleed(0.18);
    brush.fillTexture(0.35, 0.35);
    brush.beginShape(0.3);
    brush.vertex(bx - 8, by - 52); brush.vertex(bx + 8, by - 52);
    brush.vertex(bx + cos(a) * r + 6, by - 60 + sin(a) * r * 0.6);
    brush.vertex(bx + cos(a) * r - 6, by - 60 + sin(a) * r * 0.6);
    brush.endShape(true);
    brush.circle(bx + cos(a) * r, by - 60 + sin(a) * r * 0.6, 7, 0.4);
  }
  // low acacia scrub on the horizon for scale
  for (let i = 0; i < 6; i++) {
    brush.fill("#54483a", 190);
    brush.fillBleed(0.25);
    brush.circle(random(20, 580), 398 + random(-2, 2), random(6, 12), 0.6);
  }
}
