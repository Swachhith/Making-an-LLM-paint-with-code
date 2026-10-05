async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3eee4");
  brush.noStroke();
  brush.fill("#5a90d0", 190); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6); brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 360); brush.vertex(-10, 390); brush.endShape(true);
  const blooms = [[110,90,90,"#e8607a"],[480,150,70,"#f0a030"],[290,50,80,"#2a50a8"],[560,60,60,"#9a40a0"],[60,250,60,"#f0a030"]];
  for (const b of blooms) { brush.fill(b[3], 160); brush.fillBleed(0.3); brush.circle(b[0], b[1], b[2], 0.9); }
  brush.fill("#1a6a90", 215);
  brush.beginShape(0.5); brush.vertex(-10, 385); brush.vertex(610, 380); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.fill("#0a4a70", 190);
  brush.beginShape(0.5); brush.vertex(-10, 500); brush.vertex(300, 480); brush.vertex(610, 505); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  // headland
  brush.fill("#5a8a40", 225);
  brush.beginShape(0.5); brush.vertex(60, 470); brush.vertex(150, 405); brush.vertex(330, 395); brush.vertex(500, 430); brush.vertex(540, 480); brush.endShape(true);
  brush.fill("#8a6a3a", 190);
  brush.beginShape(0.5); brush.vertex(120, 470); brush.vertex(400, 460); brush.vertex(440, 495); brush.vertex(100, 500); brush.endShape(true);
  // cottage with chimney
  brush.fill("#f6f0de", 235);
  brush.beginShape(0.1); brush.vertex(185, 410); brush.vertex(310, 410); brush.vertex(310, 345); brush.vertex(185, 345); brush.endShape(true);
  brush.fill("#c8381e", 235);
  brush.beginShape(0.1); brush.vertex(172, 350); brush.vertex(248, 300); brush.vertex(325, 350); brush.endShape(true);
  brush.fill("#2a2448", 230);
  brush.beginShape(0.1); brush.vertex(240, 410); brush.vertex(268, 410); brush.vertex(268, 368); brush.vertex(240, 368); brush.endShape(true);
  brush.fill("#e8a030", 220); brush.circle(205, 372, 7, 0.3);
  // tower
  brush.fill("#fbf8ee", 235);
  brush.beginShape(0.1); brush.vertex(340, 410); brush.vertex(392, 410); brush.vertex(380, 230); brush.vertex(352, 230); brush.endShape(true);
  brush.fill("#d8301c", 230);
  brush.beginShape(0.1); brush.vertex(348, 350); brush.vertex(386, 350); brush.vertex(383, 300); brush.vertex(352, 300); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(356, 285); brush.vertex(380, 285); brush.vertex(378, 262); brush.vertex(358, 262); brush.endShape(true);
  brush.fill("#262640", 230);
  brush.beginShape(0.1); brush.vertex(354, 232); brush.vertex(378, 232); brush.vertex(372, 205); brush.vertex(360, 205); brush.endShape(true);
  brush.fill("#ffe880", 200); brush.circle(366, 220, 10, 0.3);
  // drips
  brush.fill("#0a4a70", 190);
  for (let i = 0; i < 7; i++) brush.circle(40 + i * 85, 520 + (i * 31) % 70, 7, 0.9);
  brush.fill("#e8607a", 170);
  brush.beginShape(0.8); brush.vertex(100, 150); brush.vertex(120, 150); brush.vertex(118, 240); brush.vertex(104, 240); brush.endShape(true);
  brush.circle(110, 250, 9, 0.8);
}
