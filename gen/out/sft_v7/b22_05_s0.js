async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#16223a");
  randomSeed(2301);
  brush.noStroke();

  // cool teal indigo sky, layered
  brush.fill("#1a2f55", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#0f1d3a", 180);
  brush.beginShape(0.6);
  brush.vertex(-20, 300); brush.vertex(620, 260); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1a2f55", 150);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(620, 440); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // crescent moon, large and off-centre, top-right
  brush.fill("#b8c4d6", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(490, 130, 130, 0.2);
  brush.fill("#f2f4f6", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(500, 140, 70, 0.2);
  brush.fill("#7f94a8", 180);
  brush.circle(480, 120, 26, 0.4);
  brush.circle(520, 150, 20, 0.4);

  // pine trees, left half, layered from back to front
  let trees = [[20, 420, 110], [70, 360, 90], [150, 460, 130], [230, 400, 100], [300, 440, 120], [380, 380, 90], [450, 420, 110]];
  for (let pass = 0; pass < 2; pass++) {
    for (let t of trees) {
      let [x, y, w] = t;
      brush.fill(pass ? "#0a1224" : "#1f3a66", pass ? 215 : 190);
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.4);
      brush.vertex(x, y);
      brush.vertex(x + w * 0.3, y - 50);
      brush.vertex(x + w * 0.6, y - 60);
      brush.vertex(x + w * 0.8, y - 55);
      brush.vertex(x + w * 0.95, y - 5);
      brush.vertex(x + w * 0.75, y + 5);
      brush.vertex(x + w * 0.6, y + 55);
      brush.vertex(x + w * 0.3, y + 50);
      brush.endShape(true);
    }
  }
  // snow-capped peaks
  for (let t of trees) {
    let [x, y, w] = t;
    brush.fill("#bfcfe8", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(x, y - 20);
    brush.vertex(x + w * 0.6, y - 55);
    brush.vertex(x + w * 0.9, y - 50);
    brush.vertex(x + w * 0.95, y);
    brush.vertex(x + w * 0.6, y + 30);
    brush.vertex(x, y + 20);
    brush.endShape(true);
  }
}
