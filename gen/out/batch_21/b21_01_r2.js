async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf4e6");
  randomSeed(4321);
  brush.noStroke();

  // sky: blue high, a honeyed band lower, clouds left as paper between
  brush.fill("#9fc0dc", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150); brush.vertex(460, 120); brush.vertex(300, 170); brush.vertex(120, 130); brush.vertex(-20, 180);
  brush.endShape(true);
  brush.fill("#f2c89c", 175);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 260); brush.vertex(180, 230); brush.vertex(400, 250); brush.vertex(620, 220); brush.vertex(620, 500); brush.vertex(-20, 500);
  brush.endShape(true);
  brush.fill("#f5dcb6", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 380); brush.vertex(620, 360); brush.vertex(620, 500); brush.vertex(-20, 500);
  brush.endShape(true);

  // faraway blue hills at a low horizon
  brush.fill("#a8a6b8", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, 488); brush.vertex(90, 470); brush.vertex(210, 480); brush.vertex(380, 462); brush.vertex(520, 476); brush.vertex(620, 468); brush.vertex(620, 500); brush.vertex(-20, 500);
  brush.endShape(true);

  // meadow in two passes
  brush.fill("#cfc27c", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 494); brush.vertex(620, 488); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#a3a85e", 180);
  brush.beginShape(0.6);
  brush.vertex(-20, 548); brush.vertex(200, 530); brush.vertex(420, 546); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // shade pool
  brush.fill("#8a8448", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(250, 500); brush.vertex(470, 494); brush.vertex(460, 516); brush.vertex(260, 520);
  brush.endShape(true);

  // trunk with spreading limbs, a broad soft shape
  brush.fill("#6d4a3c", 225);
  brush.fillBleed(0.18);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.35);
  brush.vertex(336, 505); brush.vertex(384, 505); brush.vertex(378, 440); brush.vertex(440, 368); brush.vertex(418, 356); brush.vertex(368, 412);
  brush.vertex(366, 360); brush.vertex(344, 360); brush.vertex(348, 414); brush.vertex(286, 362); brush.vertex(268, 380); brush.vertex(338, 448);
  brush.endShape(true);
  brush.fill("#4a3028", 215);
  brush.beginShape(0.35);
  brush.vertex(362, 505); brush.vertex(376, 505); brush.vertex(372, 440); brush.vertex(362, 440);
  brush.endShape(true);

  // blossom cloud: a wide loose wash, then many clusters, then deep accents
  brush.fill("#f5c3cd", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.9);
  brush.vertex(200, 380); brush.vertex(210, 300); brush.vertex(290, 250); brush.vertex(380, 240); brush.vertex(470, 270); brush.vertex(520, 340); brush.vertex(490, 400); brush.vertex(380, 410); brush.vertex(280, 405);
  brush.endShape(true);
  for (let i = 0; i < 60; i++) {
    let a = random(360);
    let r = sqrt(random()) * 1;
    let x = 360 + cos(a) * r * 150;
    let y = 325 + sin(a) * r * 75;
    brush.fill(random(["#f09db1", "#f7c4cf", "#e7849e", "#fbd3d9"]), random(170, 225));
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, random(14, 30), 0.7);
  }
  for (let i = 0; i < 18; i++) {
    brush.fill("#c95a78", random(180, 225));
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.4);
    brush.circle(random(250, 480), random(345, 405), random(5, 11), 0.5);
  }
  // glimpses of branch through blossom
  brush.fill("#6d4a3c", 200);
  brush.circle(300, 368, 8, 0.4);
  brush.circle(424, 356, 8, 0.4);
  brush.circle(360, 330, 7, 0.4);

  // drifting petals
  for (let i = 0; i < 26; i++) {
    brush.fill("#ee9fb3", 210);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.circle(random(150, 600), random(250, 560), random(2.5, 5), 0.4);
  }
}
