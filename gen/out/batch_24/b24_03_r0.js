async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe3cf");

  brush.noStroke();
  brush.fill("#9a7f93", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 260);
  brush.vertex(-20, 280);
  brush.endShape(true);

  brush.fill("#d19a5c", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 230);
  brush.vertex(620, 210);
  brush.vertex(620, 470);
  brush.vertex(-20, 470);
  brush.endShape(true);

  brush.fill("#e5b97a", 170);
  brush.fillBleed(0.25);
  brush.circle(150, 420, 60, 0.3);

  brush.fill("#6f6450", 180);
  brush.fillBleed(0.2);
  brush.fillTexture(0.35, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 440);
  brush.vertex(140, 432);
  brush.vertex(360, 445);
  brush.vertex(620, 430);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  brush.fill("#4b3a2c", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 520);
  brush.vertex(300, 500);
  brush.vertex(620, 525);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  let trunk = [
    [258, 505], [238, 420], [236, 330], [250, 250], [262, 190],
    [338, 188], [352, 250], [366, 330], [364, 420], [350, 505]
  ];
  for (let pass = 0; pass < 3; pass++) {
    brush.fill(["#8b6f5a", "#6c5243", "#4a362b"][pass], [200, 200, 190][pass]);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.4);
    brush.beginShape(0.5);
    for (let p of trunk) {
      let k = pass * 12;
      let x = p[0] < 300 ? p[0] + k + (pass === 2 ? 30 : 0) : p[0] - k;
      brush.vertex(x, p[1] + (p[1] < 200 ? k : 0));
    }
    brush.endShape(true);
  }

  let branches = [
    [270, 195, 180, 110, 22], [290, 190, 250, 70, 20], [315, 190, 330, 60, 20],
    [335, 195, 420, 105, 22], [345, 205, 470, 170, 18], [258, 205, 140, 165, 18],
    [205, 140, 150, 95, 15], [400, 125, 455, 80, 15]
  ];
  for (let b of branches) {
    brush.fill("#5c4535", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    let dx = b[2] - b[0], dy = b[3] - b[1];
    let len = sqrt(dx * dx + dy * dy);
    let nx = -dy / len * b[4] / 2, ny = dx / len * b[4] / 2;
    brush.beginShape(0.4);
    brush.vertex(b[0] + nx * 1.4, b[1] + ny * 1.4);
    brush.vertex(b[2] + nx * 0.6, b[3] + ny * 0.6);
    brush.vertex(b[2] - nx * 0.6, b[3] - ny * 0.6);
    brush.vertex(b[0] - nx * 1.4, b[1] - ny * 1.4);
    brush.endShape(true);
  }

  randomSeed(2403);
  for (let i = 0; i < 20; i++) {
    let bx = random([180, 250, 330, 420, 470, 140, 150, 455]);
    let by = random([110, 70, 60, 105, 170, 165, 95, 80]);
    brush.fill("#6d7148", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(bx + random(-25, 25), by + random(-20, 15), random(10, 20), 0.6);
  }
}
