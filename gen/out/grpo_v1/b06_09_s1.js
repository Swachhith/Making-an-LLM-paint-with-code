async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece4d3");
  brush.noStroke();
  // soft green ground wash, lower half
  brush.fill("#8f9a7a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 420); brush.vertex(600, 420); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // stem
  brush.fill("#3e5a3a", 210);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(290, 520); brush.vertex(310, 520); brush.vertex(315, 600); brush.vertex(285, 600);
  brush.endShape(true);
  // open anemone, pale petals with darker veins, dark centre
  brush.fill("#f6efe2", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(330, 330); brush.vertex(385, 270); brush.vertex(430, 330); brush.vertex(420, 390); brush.vertex(370, 430); brush.vertex(330, 390);
  brush.endShape(true);
  for (let p = 0; p < 8; p++) {
    const a = p * 45 + 20;
    const len = 90;
    brush.fill("#e9e0d4", 215);
    brush.fillBleed(0.22);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.5);
    brush.vertex(330, 330); brush.vertex(330 + cos(a - 22) * len, 330 + sin(a - 22) * len); brush.vertex(330 + cos(a) * len * 0.85, 330 + sin(a) * len * 0.85); brush.vertex(330 + cos(a + 22) * len, 330 + sin(a + 22) * len);
    brush.endShape(true);
  }
  brush.fill("#8a6b58", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(330, 330, 42, 0.5);
  // closed bud, pale base, dark tip
  brush.fill("#f2e8d8", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(470, 340); brush.vertex(495, 280); brush.vertex(520, 340); brush.vertex(500, 345);
  brush.endShape(true);
  brush.fill("#6f5a4e", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(480, 300); brush.vertex(490, 250); brush.vertex(500, 250); brush.vertex(510, 300); brush.vertex(500, 310);
  brush.endShape(true);
  // a couple of leaves
  brush.fill("#5c7a4a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(250, 470); brush.vertex(200, 420); brush.vertex(160, 470); brush.vertex(200, 490);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(450, 450); brush.vertex(500, 400); brush.vertex(550, 450); brush.vertex(520, 470);
  brush.endShape(true);
}
