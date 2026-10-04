async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f7fa");
  brush.noStroke();

  // stormy winter wash, painted around the snowy roof triangle
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.5);
  brush.fill("#6a88b0", 200);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300);
  brush.vertex(560, 290); brush.vertex(300, 120); brush.vertex(40, 290); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#9a70b0", 160);
  brush.circle(500, 70, 70, 0.9);
  brush.fill("#4a6a98", 150);
  brush.circle(100, 60, 60, 0.9);

  // pines crowding behind, dark teal
  let pines = [[30, 320, 55], [150, 250, 45], [450, 250, 45], [560, 320, 60], [620, 300, 45]];
  for (let p of pines) {
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.fill("#18403e", 225);
    brush.beginShape(0.2);
    brush.vertex(p[0], p[1] - 260); brush.vertex(p[0] + p[2], p[1]); brush.vertex(p[0] - p[2], p[1]);
    brush.endShape(true);
    brush.fill("#0a2426", 190);
    brush.beginShape(0.3);
    brush.vertex(p[0], p[1] - 230); brush.vertex(p[0] + p[2] * 0.7, p[1]); brush.vertex(p[0], p[1]);
    brush.endShape(true);
  }

  // dark fascia just under the snow load
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#3a1e14", 230);
  brush.beginShape(0.2);
  brush.vertex(60, 290); brush.vertex(300, 158); brush.vertex(540, 290); brush.vertex(520, 300); brush.vertex(300, 180); brush.vertex(80, 300);
  brush.endShape(true);

  // gable wall
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.fill("#9a5428", 225);
  brush.beginShape(0.1);
  brush.vertex(95, 300); brush.vertex(300, 185); brush.vertex(505, 300); brush.vertex(505, 480); brush.vertex(95, 480);
  brush.endShape(true);
  // log courses, soft darker bands
  brush.fillBleed(0.3);
  brush.fill("#5a2a14", 170);
  for (let y = 320; y < 480; y += 36) {
    brush.beginShape(0.5);
    brush.vertex(95, y); brush.vertex(505, y + 4); brush.vertex(505, y + 20); brush.vertex(95, y + 17);
    brush.endShape(true);
  }
  // shadow under eaves
  brush.fill("#3a2a50", 170);
  brush.beginShape(0.4);
  brush.vertex(110, 300); brush.vertex(300, 195); brush.vertex(490, 300); brush.vertex(470, 318); brush.vertex(300, 222); brush.vertex(130, 318);
  brush.endShape(true);

  // pigment drips from the logs
  brush.fill("#7a3a18", 200);
  for (let dx of [120, 200, 350, 430, 485]) {
    let len = 25 + (dx % 45);
    brush.beginShape(0.6);
    brush.vertex(dx - 8, 475); brush.vertex(dx + 8, 475); brush.vertex(dx + 5, 490 + len); brush.vertex(dx - 5, 490 + len);
    brush.endShape(true);
    brush.circle(dx, 493 + len, 9, 0.3);
  }

  // glowing windows, two passes
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  for (let wx of [140, 390]) {
    brush.fill("#ffa820", 240);
    brush.beginShape(0.1);
    brush.vertex(wx, 345); brush.vertex(wx + 75, 345); brush.vertex(wx + 75, 415); brush.vertex(wx, 415);
    brush.endShape(true);
    brush.fill("#f06010", 200);
    brush.circle(wx + 37, 380, 22, 0.6);
  }
  // door
  brush.fill("#2a120a", 230);
  brush.beginShape(0.1);
  brush.vertex(268, 360); brush.vertex(332, 360); brush.vertex(332, 480); brush.vertex(268, 480);
  brush.endShape(true);
  // attic window glow
  brush.fill("#ffb030", 220);
  brush.circle(300, 255, 18, 0.2);

  // snow drifts in foreground: blue shadows around bare paper
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.fill("#90a8d0", 190);
  brush.beginShape(0.6);
  brush.vertex(-20, 510); brush.vertex(150, 545); brush.vertex(380, 520); brush.vertex(620, 555);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6a80b8", 160);
  brush.circle(110, 590, 45, 0.8);
  brush.circle(500, 600, 40, 0.8);
  brush.fill("#8aa0c8", 180);
  brush.beginShape(0.5);
  brush.vertex(-20, 300); brush.vertex(95, 330); brush.vertex(95, 480); brush.vertex(-20, 500);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(620, 310); brush.vertex(505, 330); brush.vertex(505, 480); brush.vertex(620, 505);
  brush.endShape(true);
}
