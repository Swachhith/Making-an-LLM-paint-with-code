async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e8c2");
  randomSeed(101);
  brush.noStroke();

  // bold sky: cerulean fading to sky-blue
  brush.fill("#3aa0d8", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(450, 300); brush.vertex(300, 260); brush.vertex(150, 280); brush.vertex(-20, 230);
  brush.endShape(true);
  brush.fill("#8fb8e8", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 230); brush.vertex(300, 260); brush.vertex(450, 300); brush.vertex(620, 250); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // distant blue range, small
  brush.fill("#4a7fd0", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 300); brush.vertex(120, 280); brush.vertex(260, 310); brush.vertex(400, 285); brush.vertex(540, 305); brush.vertex(620, 280); brush.vertex(620, 320); brush.vertex(-20, 320);
  brush.endShape(true);

  // snow-capped mountains, two passes each, bold colours
  let peaks = [
    { x: 150, y: 270, w: 70, h: 170, tilt: -10 },
    { x: 320, y: 230, w: 90, h: 210, tilt: 10 },
    { x: 480, y: 210, w: 60, h: 190, tilt: -5 },
    { x: 600, y: 250, w: 50, h: 150, tilt: 8 },
  ];
  for (let p of peaks) {
    let snow = 250;
    brush.fill("#1f5ab0", 230);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(p.x - p.w * 0.5, p.y + p.h);
    brush.vertex(p.x + p.w * 0.5, p.y + p.h);
    brush.vertex(p.x + p.w * 0.6, p.y - p.h * 0.3);
    brush.vertex(p.x + p.w * 0.5, p.y - p.h * 0.75);
    brush.vertex(p.x - p.w * 0.6, p.y - p.h * 0.3);
    brush.vertex(p.x - p.w * 0.5, p.y + p.h);
    brush.endShape(true);
    brush.fill("#5f8fd8", 210);
    brush.fillBleed(0.25);
    brush.beginShape(0.4);
    brush.vertex(p.x - p.w * 0.4, p.y + p.h * 0.4);
    brush.vertex(p.x + p.w * 0.4, p.y + p.h * 0.4);
    brush.vertex(p.x + p.w * 0.5, p.y - p.h * 0.55);
    brush.vertex(p.x - p.w * 0.5, p.y - p.h * 0.55);
    brush.endShape(true);
    brush.fill("#eef2ff", 230);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(p.x - p.w * 0.45, p.y - p.h * 0.5);
    brush.vertex(p.x - p.w * 0.2, p.y - p.h * 0.55);
    brush.vertex(p.x + p.w * 0.2, p.y - p.h * 0.55);
    brush.vertex(p.x + p.w * 0.45, p.y - p.h * 0.5);
    brush.endShape(true);
    brush.fill("#cfe0ff", 190);
    brush.fillBleed(0.3);
    brush.beginShape(0.3);
    brush.vertex(p.x - p.w * 0.55, p.y - p.h * 0.4);
    brush.vertex(p.x - p.w * 0.25, p.y - p.h * 0.45);
    brush.vertex(p.x + p.w * 0.25, p.y - p.h * 0.45);
    brush.vertex(p.x + p.w * 0.55, p.y - p.h * 0.4);
    brush.endShape(true);
  }

  // foreground pine line
  brush.fill("#0f3a1a", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(620, 455); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let x = 60; x < 600; x += 30) {
    let h = random(30, 80);
    brush.fill("#0b2a12", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(x, 470); brush.vertex(x + 12, 470 - h); brush.vertex(x + 24, 470 - h * 0.6); brush.vertex(x + 12, 470 - h * 0.3);
    brush.endShape(true);
    brush.beginShape(0.4);
    brush.vertex(x - 12, 470); brush.vertex(x - 24, 470 - h); brush.vertex(x - 12, 470 - h * 0.6); brush.vertex(x, 470 - h * 0.3);
    brush.endShape(true);
  }

  // meadow
  brush.fill("#3aa06a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 460); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8fe08a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 540); brush.vertex(620, 525); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // sunlit meadow
  brush.fill("#f0c06a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 570); brush.vertex(620, 555); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // sun
  brush.fill("#ffd04a", 240);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(520, 140, 35, 0.5);
  brush.fill("#fff0a0", 230);
  brush.fillBleed(0.3);
  brush.circle(520, 140, 20, 0.5);
}
