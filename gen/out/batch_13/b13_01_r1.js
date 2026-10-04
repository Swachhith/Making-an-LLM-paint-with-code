async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#121218");
  randomSeed(21);
  brush.noStroke();
  // broad amber haze around the moon, laid in two loose passes
  brush.fill("#4a3a34", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.circle(360, 230, 210, 0.6);
  brush.fill("#6e5238", 170);
  brush.fillBleed(0.28);
  brush.circle(360, 230, 130, 0.5);
  // the full moon, warm cream on dark paper
  brush.fill("#f6dca0", 240);
  brush.fillBleed(0.18);
  brush.fillTexture(0.3, 0.4);
  brush.circle(360, 230, 78, 0.12);
  brush.fill("#fff0cc", 225);
  brush.fillBleed(0.12);
  brush.circle(352, 222, 62, 0.1);
  // maria, faint ochre patches
  brush.fill("#caa66a", 170);
  brush.fillBleed(0.25);
  brush.circle(380, 214, 18, 0.6);
  brush.circle(340, 246, 14, 0.6);
  brush.circle(372, 256, 10, 0.5);
  // long dark cloud bars across the lower sky
  let bars = [[80, 380, 300, 14], [260, 410, 330, 10], [30, 432, 200, 8]];
  for (let b of bars) {
    brush.fill("#08080c", 210);
    brush.fillBleed(0.3);
    brush.beginShape(1);
    brush.vertex(b[0], b[1]);
    brush.vertex(b[0] + b[2] * 0.4, b[1] - b[3]);
    brush.vertex(b[0] + b[2], b[1] - 2);
    brush.vertex(b[0] + b[2] * 0.7, b[1] + b[3]);
    brush.vertex(b[0] + 20, b[1] + b[3] * 0.8);
    brush.endShape(true);
  }
  // sparse stars
  for (let i = 0; i < 55; i++) {
    let x = random(0, 600), y = random(0, 440);
    if (dist(x, y, 360, 230) < 150) continue;
    brush.fill("#efe2c4", 210);
    brush.fillBleed(0.1);
    brush.circle(x, y, random(0.8, 2.2), 0.2);
  }
  // sea: almost black, with slight blue-grey swell bands
  brush.fill("#050508", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0);
  brush.vertex(-10, 478);
  brush.vertex(610, 476);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // broad shimmering column of moonlight, widening toward us
  for (let j = 0; j < 16; j++) {
    let y = 484 + j * 7.5;
    let w = 14 + j * 7 + random(-6, 6);
    let ox = random(-10, 10);
    brush.fill(j % 3 === 0 ? "#f8e2a8" : "#e0b870", 225 - j * 4);
    brush.fillBleed(0.2);
    brush.beginShape(1);
    brush.vertex(360 + ox - w, y);
    brush.vertex(360 + ox + w, y);
    brush.vertex(360 + ox + w * 0.5, y + 4);
    brush.vertex(360 + ox - w * 0.5, y + 4);
    brush.endShape(true);
  }
  // a harbour spit with a few warm lamps, far left
  brush.fill("#1c1a1e", 230);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(-10, 478);
  brush.vertex(40, 466);
  brush.vertex(130, 470);
  brush.vertex(150, 480);
  brush.vertex(-10, 484);
  brush.endShape(true);
  let lamps = [[22, 470], [48, 468], [74, 471], [104, 472], [128, 474]];
  for (let p of lamps) {
    brush.fill("#ffb34a", 245);
    brush.fillBleed(0.15);
    brush.circle(p[0], p[1], 3.2, 0.3);
    brush.fill("#d0752a", 170);
    brush.fillBleed(0.3);
    brush.beginShape(1);
    brush.vertex(p[0] - 3, p[1] + 10);
    brush.vertex(p[0] + 3, p[1] + 10);
    brush.vertex(p[0] + 2, p[1] + 34);
    brush.vertex(p[0] - 2, p[1] + 34);
    brush.endShape(true);
  }
  // one boat light on the water, right
  brush.fill("#ff9c3a", 240);
  brush.circle(530, 500, 3, 0.3);
}
