async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3e4");
  randomSeed(211);
  brush.noStroke();

  // big warm sky, peach low and pale blue high
  brush.fill("#f2c9a0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 250); brush.vertex(620, 230); brush.vertex(620, 490); brush.vertex(-20, 490);
  brush.endShape(true);

  brush.fill("#a9c6dc", 160);
  brush.fillBleed(0.28);
  brush.fillTexture(0.35, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(300, 260); brush.vertex(-20, 190);
  brush.endShape(true);

  // soft cloud gaps left as paper; a few warm cloud undersides
  brush.fill("#e8b393", 150);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(330, 160); brush.vertex(470, 140); brush.vertex(560, 170); brush.vertex(450, 190); brush.vertex(360, 185);
  brush.endShape(true);

  // distant hills along the low horizon
  brush.fill("#b8a58c", 180);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 485); brush.vertex(120, 462); brush.vertex(260, 474); brush.vertex(420, 458); brush.vertex(620, 476); brush.vertex(620, 500); brush.vertex(-20, 500);
  brush.endShape(true);

  // meadow
  brush.fill("#c9c07a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 490); brush.vertex(620, 485); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#9fa45a", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 540); brush.vertex(250, 520); brush.vertex(620, 545); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // trunk and two main limbs, broad soft shapes
  brush.fill("#6b4a3a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(212, 500); brush.vertex(236, 500); brush.vertex(240, 430); brush.vertex(270, 390); brush.vertex(252, 382); brush.vertex(228, 420); brush.vertex(205, 380); brush.vertex(190, 390); brush.vertex(214, 432);
  brush.endShape(true);

  // shadow under the tree
  brush.fill("#8a8a4a", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(140, 500); brush.vertex(320, 496); brush.vertex(300, 512); brush.vertex(160, 514);
  brush.endShape(true);

  // blossom crown: a loose pale pass, then clusters, then deeper accents
  brush.fill("#f4b8c4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.9);
  brush.vertex(120, 380); brush.vertex(140, 320); brush.vertex(200, 290); brush.vertex(270, 295); brush.vertex(330, 330); brush.vertex(340, 385); brush.vertex(280, 410); brush.vertex(180, 408);
  brush.endShape(true);

  for (let i = 0; i < 22; i++) {
    let a = random(360);
    let r = random(20, 95);
    let x = 230 + cos(a) * r * 1.2;
    let y = 350 + sin(a) * r * 0.55;
    brush.fill(random(["#ee9fb2", "#f5c0cc", "#e88aa2"]), random(170, 220));
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, random(14, 30), 0.6);
  }
  for (let i = 0; i < 14; i++) {
    let x = random(150, 320);
    let y = random(345, 405);
    brush.fill("#d1667f", random(180, 230));
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.4);
    brush.circle(x, y, random(6, 13), 0.5);
  }

  // a few fallen petals on the grass
  for (let i = 0; i < 12; i++) {
    brush.fill("#f0a6b8", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.circle(random(150, 340), random(505, 540), random(3, 6), 0.4);
  }
}
