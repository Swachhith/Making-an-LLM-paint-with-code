async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  // the paper itself is the hill colour: the sky is painted down to the ridge line only
  background("#070e18");
  randomSeed(4111);
  brush.noStroke();
  const ridge = [[-30, 470], [60, 430], [150, 452], [250, 400], [340, 425], [430, 395], [520, 440], [630, 415]];
  const skyTo = (c, o, lift, bleed) => {
    brush.fill(c, o);
    brush.fillBleed(bleed);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.6);
    brush.vertex(-30, -30); brush.vertex(630, -30);
    for (let i = ridge.length - 1; i >= 0; i--) brush.vertex(ridge[i][0], ridge[i][1] - lift);
    brush.endShape(true);
  };
  skyTo("#1d3f78", 230, 0, 0.12);
  skyTo("#2a6e8a", 210, 30, 0.2);
  // teal glow low over the ridge
  brush.fill("#3fa3a3", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-30, 360); brush.vertex(200, 330); brush.vertex(420, 320); brush.vertex(630, 340); brush.vertex(630, 400); brush.vertex(430, 390); brush.vertex(250, 395); brush.vertex(-30, 440);
  brush.endShape(true);
  // indigo overhead
  brush.fill("#2a2a80", 200);
  brush.fillBleed(0.35);
  brush.beginShape(0.9);
  brush.vertex(-30, -30); brush.vertex(630, -30); brush.vertex(630, 130); brush.vertex(380, 170); brush.vertex(140, 150); brush.vertex(-30, 190);
  brush.endShape(true);
  // stars
  for (let i = 0; i < 280; i++) {
    let x = random(0, 600);
    let y = random() < 0.5 ? 360 - x * 0.5 + randomGaussian(0, 40) : random(0, 380);
    if (y < 0 || y > 380) continue;
    brush.fill(random(["#f4fbff", "#fff4d6", "#d8f3f0"]), random(170, 250));
    brush.fillBleed(0.05);
    brush.circle(x, y, random(0.8, 2.4), 0.2);
  }
  for (let i = 0; i < 10; i++) {
    let x = random(30, 570), y = random(20, 350);
    brush.fill("#ffffff", 250);
    brush.fillBleed(0.05);
    brush.circle(x, y, random(3.5, 5), 0.2);
  }
  // a nearer ridge, even darker, over the paper hills
  brush.fill("#000205", 240);
  brush.fillBleed(0.12);
  brush.beginShape(0.8);
  brush.vertex(-20, 540); brush.vertex(160, 500); brush.vertex(330, 530); brush.vertex(620, 505); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
