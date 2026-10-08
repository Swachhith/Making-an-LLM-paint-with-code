async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff4e8");
  randomSeed(2025);
  brush.noStroke();

  // orange to violet sky, three bands
  brush.fill("#f07a2a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 320); brush.vertex(620, 280); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#d94a1a", 190);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(620, 380); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#9a2a9a", 180);
  brush.beginShape(0.5);
  brush.vertex(-20, 520); brush.vertex(620, 490); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // sun, a bright disc
  brush.fill("#ffd040", 250);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(300, 270, 60, 0.3);

  // palm silhouettes
  let palms = [[120, 470, 100], [240, 440, 110], [360, 480, 90], [470, 430, 105], [560, 460, 95]];
  for (let p of palms) {
    let x = p[0], y = p[1], len = p[2];
    brush.fill("#1a121a", 245);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.1);
    brush.vertex(x, y);
    brush.vertex(x + cos(p[2] - 18) * len * 0.85, y - sin(p[2] - 18) * len * 0.85);
    brush.vertex(x + cos(p[2] - 10) * len, y - sin(p[2] - 10) * len);
    brush.vertex(x + cos(p[2] + 10) * len, y - sin(p[2] + 10) * len);
    brush.vertex(x + cos(p[2] + 18) * len * 0.85, y - sin(p[2] + 18) * len * 0.85);
    brush.endShape(true);
  }
  // ground line
  brush.fill("#1a121a", 245);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(-20, 620); brush.vertex(620, 620); brush.vertex(620, 590); brush.vertex(-20, 590);
  brush.endShape(true);
}
