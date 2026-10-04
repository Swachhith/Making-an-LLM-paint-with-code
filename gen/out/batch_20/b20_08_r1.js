async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e8e2");
  brush.noStroke();

  brush.fill("#d4d4cc", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.35);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 320); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#e0d4c4", 150);
  brush.circle(430, 150, 140, 0.8);

  brush.fill("#b9bdb0", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 310); brush.vertex(150, 280); brush.vertex(330, 295); brush.vertex(470, 275); brush.vertex(620, 290); brush.vertex(620, 340); brush.vertex(-20, 340);
  brush.endShape(true);

  brush.fill("#c5c79e", 195);
  brush.fillBleed(0.28);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, 335); brush.vertex(620, 330); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#b8b88a", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 440); brush.vertex(300, 410); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // soft lavender strip across field
  brush.fill("#b8aec0", 150);
  brush.beginShape(0.6);
  brush.vertex(-20, 390); brush.vertex(620, 375); brush.vertex(620, 395); brush.vertex(-20, 410);
  brush.endShape(true);

  // cypress row, varying heights, slightly left-centre
  const xs = [190, 222, 250, 282, 310, 340, 366, 396, 424];
  const hs = [120, 150, 132, 160, 140, 118, 150, 128, 104];
  for (let i = 0; i < xs.length; i++) {
    const h = hs[i], b = 338, x = xs[i];
    brush.fill("#8e978a", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.45);
    brush.beginShape(0.7);
    brush.vertex(x, b - h); brush.vertex(x + 12, b - h * 0.5); brush.vertex(x + 10, b); brush.vertex(x - 10, b); brush.vertex(x - 12, b - h * 0.5);
    brush.endShape(true);
    brush.fill("#737e71", 170);
    brush.beginShape(0.7);
    brush.vertex(x + 1, b - h * 0.85); brush.vertex(x + 10, b - h * 0.4); brush.vertex(x + 7, b); brush.vertex(x - 2, b);
    brush.endShape(true);
  }
  // their shadows across field
  brush.fill("#9ea08a", 150);
  brush.beginShape(0.6);
  brush.vertex(180, 340); brush.vertex(440, 340); brush.vertex(470, 356); brush.vertex(190, 356);
  brush.endShape(true);

  brush.fill("#a8a888", 150);
  brush.beginShape(0.6);
  brush.vertex(-20, 540); brush.vertex(300, 500); brush.vertex(620, 550); brush.vertex(620, 575); brush.vertex(300, 525); brush.vertex(-20, 570);
  brush.endShape(true);
}
