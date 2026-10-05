async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f1e6");
  randomSeed(33);
  brush.noStroke();
  // sky
  brush.fill("#f2a24a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 380); brush.vertex(0, 380); brush.endShape(true);
  brush.fill("#e8603a", 170);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 160); brush.vertex(0, 200); brush.endShape(true);
  brush.fill("#fbe3a0", 170);
  brush.circle(120, 300, 55, 0.3);
  // water
  brush.fill("#2a5a78", 200); brush.fillBleed(0.3);
  brush.beginShape(0.4); brush.vertex(0, 380); brush.vertex(600, 380); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.fill("#e8904a", 150);
  brush.beginShape(0.5); brush.vertex(60, 390); brush.vertex(190, 390); brush.vertex(200, 560); brush.vertex(80, 560); brush.endShape(true);
  // house reflection
  brush.fill("#1a1a22", 150);
  brush.beginShape(0.4); brush.vertex(340, 420); brush.vertex(520, 420); brush.vertex(520, 500); brush.vertex(340, 500); brush.endShape(true);
  // stilts
  brush.fill("#14141a", 235);
  [350, 385, 430, 470, 505].forEach(function (x) {
    brush.beginShape(0.2); brush.vertex(x, 335); brush.vertex(x + 16, 335); brush.vertex(x + 16, 420); brush.vertex(x, 420); brush.endShape(true);
  });
  // platform and house
  brush.beginShape(0.3); brush.vertex(325, 320); brush.vertex(535, 320); brush.vertex(535, 340); brush.vertex(325, 340); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(350, 250); brush.vertex(510, 250); brush.vertex(510, 322); brush.vertex(350, 322); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(330, 255); brush.vertex(430, 195); brush.vertex(530, 255); brush.vertex(510, 262); brush.vertex(350, 262); brush.endShape(true);
  // lit window
  brush.fill("#fbd070", 220);
  brush.beginShape(0.2); brush.vertex(380, 275); brush.vertex(410, 275); brush.vertex(410, 305); brush.vertex(380, 305); brush.endShape(true);
  // birds
  brush.fill("#2a2a30", 200);
  brush.circle(200, 100, 6, 0.4); brush.circle(235, 85, 5, 0.4); brush.circle(270, 105, 5, 0.4);
  // ripples
  brush.fill("#14141a", 170);
  brush.beginShape(0.3); brush.vertex(0, 530); brush.vertex(300, 520); brush.vertex(300, 540); brush.vertex(0, 550); brush.endShape(true);
}
