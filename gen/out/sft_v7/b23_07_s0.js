async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fffdf0");
  randomSeed(1001);
  brush.noStroke();

  // saturated sky, big sky: magenta, then orange, then yellow
  brush.fill("#e03070", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(-20, 200);
  brush.endShape(true);
  brush.fill("#f98a1c", 215);
  brush.beginShape(0.3);
  brush.vertex(-20, 120); brush.vertex(620, 110); brush.vertex(620, 320); brush.vertex(-20, 330);
  brush.endShape(true);
  brush.fill("#ffd020", 210);
  brush.beginShape(0.3);
  brush.vertex(-20, 230); brush.vertex(620, 225); brush.vertex(620, 400); brush.vertex(-20, 410);
  brush.endShape(true);
  brush.fill("#ff9a00", 190);
  brush.beginShape(0.6);
  brush.vertex(320, 230); brush.vertex(470, 220); brush.vertex(470, 360); brush.vertex(320, 370);
  brush.endShape(true);

  // palm fronds: dark silhouettes against the sky, three rows
  let palms = [
    [[30, 420], [50, 360], [66, 310], [82, 270], [96, 245], [110, 232]],
    [[230, 430], [248, 380], [264, 330], [278, 295], [292, 272], [304, 258]],
    [[470, 420], [486, 370], [500, 325], [514, 292], [526, 268], [538, 254]]
  ];
  for (let p of palms) {
    brush.fill("#1a0f1a", 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(p[0][0], p[0][1]);
    for (let i = 1; i < p.length; i++) brush.vertex(p[i][0], p[i][1]);
    brush.vertex(p[0][0], p[0][1] + 10);
    brush.endShape(true);
    brush.beginShape(0.5);
    brush.vertex(p[0][0] + 2, p[0][1]);
    for (let i = 1; i < p.length; i++) brush.vertex(p[i][0] + 4, p[i][1]);
    brush.vertex(p[0][0] + 2, p[0][1] + 10);
    brush.endShape(true);
  }

  // trunk: two palms, painted as wide soft shapes
  brush.fill("#2e1a12", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(32, 420); brush.vertex(54, 420); brush.vertex(56, 620); brush.vertex(34, 620);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(252, 430); brush.vertex(272, 430); brush.vertex(274, 620); brush.vertex(254, 620);
  brush.endShape(true);

  // distant island silhouette
  brush.fill("#140a10", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.6);
  brush.vertex(100, 420); brush.vertex(200, 412); brush.vertex(300, 420); brush.vertex(400, 408); brush.vertex(500, 416); brush.vertex(620, 410); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1a0f1a", 220);
  brush.beginShape(0.6);
  brush.vertex(100, 420); brush.vertex(200, 412); brush.vertex(300, 420); brush.vertex(400, 408); brush.vertex(500, 416); brush.vertex(620, 410); brush.vertex(620, 420); brush.vertex(500, 420); brush.vertex(400, 420); brush.vertex(300, 420); brush.vertex(200, 420);
  brush.endShape(true);

  // reflection in the sea
  brush.fill("#f98a1c", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 410); brush.vertex(620, 410); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#e03070", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 440); brush.vertex(620, 440); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1a0f1a", 220);
  brush.beginShape(0.5);
  brush.vertex(32, 440); brush.vertex(54, 440); brush.vertex(56, 620); brush.vertex(34, 620);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(252, 450); brush.vertex(272, 450); brush.vertex(274, 620); brush.vertex(254, 620);
  brush.endShape(true);
  brush.fill("#140a10", 220);
  brush.beginShape(0.6);
  brush.vertex(100, 440); brush.vertex(200, 435); brush.vertex(300, 442); brush.vertex(400, 430); brush.vertex(500, 438); brush.vertex(620, 432); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
