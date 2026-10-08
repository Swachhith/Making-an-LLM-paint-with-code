async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3e8");
  brush.noStroke();
  // a splash of green behind the bloom
  brush.fill("#1f7a3a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(150, 150); brush.vertex(300, 220); brush.vertex(470, 180); brush.vertex(470, 470); brush.vertex(300, 560); brush.vertex(130, 490);
  brush.endShape(true);
  // stem
  brush.fill("#1f7a3a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(300, 420); brush.vertex(300, 600); brush.vertex(318, 600); brush.vertex(318, 420);
  brush.endShape(true);
  // two long tepals
  brush.fill("#f77a1c", 235);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(300, 260); brush.vertex(480, 300); brush.vertex(480, 440); brush.vertex(300, 430); brush.vertex(300, 300);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(300, 260); brush.vertex(120, 300); brush.vertex(120, 440); brush.vertex(300, 430); brush.vertex(300, 300);
  brush.endShape(true);
  // a third shorter tepal
  brush.fill("#f55a1a", 230);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(300, 270); brush.vertex(300, 130); brush.vertex(210, 100); brush.vertex(210, 220); brush.vertex(300, 250);
  brush.endShape(true);
  // ruffled centre
  brush.fill("#d93a0a", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(300, 250); brush.vertex(320, 230); brush.vertex(345, 245); brush.vertex(330, 265);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(300, 250); brush.vertex(280, 230); brush.vertex(255, 245); brush.vertex(270, 265);
  brush.endShape(true);
  brush.fill("#e88a2a", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(300, 250); brush.vertex(310, 210); brush.vertex(300, 190); brush.vertex(290, 210);
  brush.endShape(true);
  brush.fill("#f77a1c", 235);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(300, 250); brush.vertex(315, 220); brush.vertex(330, 240); brush.vertex(315, 260);
  brush.endShape(true);
  brush.fill("#c83a0a", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(300, 250); brush.vertex(300, 230); brush.vertex(315, 245); brush.vertex(300, 260);
  brush.endShape(true);
  // an eye
  brush.fill("#1a1a1a", 250);
  brush.fillBleed(0.1);
  brush.circle(430, 200, 12, 0.2);
  brush.fill("#f6e8a0", 240);
  brush.circle(436, 202, 4, 0.2);
}
