async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9edf0");

  // soft blue-grey ground wash, lower half
  brush.noStroke();
  brush.fill("#b7c4cf", 140);
  brush.fillBleed(0.4, "out");
  brush.fillTexture(0.6, 0.3);
  brush.beginShape(0.5);
  brush.vertex(0, 360);
  brush.vertex(600, 300);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  // upright stem
  brush.fill("#3f6b5a", 220);
  brush.fillBleed(0.05, "out");
  brush.fillTexture(0.3, 0.6);
  brush.beginShape(0.3);
  brush.vertex(292, 380);
  brush.vertex(306, 380);
  brush.vertex(300, 600);
  brush.vertex(286, 600);
  brush.endShape(true);

  // one leaf with a cool green
  brush.fill("#4f7d6c", 200);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.8);
  brush.vertex(296, 500);
  brush.vertex(360, 460);
  brush.vertex(430, 470);
  brush.vertex(370, 505);
  brush.endShape(true);

  // sepals curling down under the cup
  for (let a of [200, 240, 300, 340]) {
    brush.fill("#406d5d", 210);
    brush.fillBleed(0.1, "out");
    brush.beginShape(0.7);
    brush.vertex(300, 372);
    brush.vertex(300 + cos(a - 10) * 50, 380 - sin(a - 10) * 12);
    brush.vertex(300 + cos(a) * 80, 400 - sin(a) * 20);
    brush.vertex(300 + cos(a + 10) * 40, 385);
    brush.endShape(true);
  }

  // outer petals of the side-view cup, back to front
  let layers = [
    ["#8c1a2b", 175, 170, 250, 110, 0.35],
    ["#a3182c", 190, 150, 270, 95, 0.25],
    ["#7a0f22", 210, 130, 290, 80, 0.15]
  ];
  for (let L of layers) {
    brush.fill(L[0], L[1]);
    brush.fillBleed(L[5], "out");
    brush.fillTexture(0.55, 0.6);
    brush.beginShape(0.7);
    brush.vertex(300 - L[2] * 0.55, L[3] - 60);
    brush.vertex(300 - L[2] * 0.62, L[3] + 20);
    brush.vertex(300 - L[4] * 0.4, L[3] + 90);
    brush.vertex(300, 375);
    brush.vertex(300 + L[4] * 0.4, L[3] + 90);
    brush.vertex(300 + L[2] * 0.62, L[3] + 20);
    brush.vertex(300 + L[2] * 0.55, L[3] - 60);
    brush.vertex(300, L[3] - 30);
    brush.endShape(true);
  }

  // tightly wrapped centre spiral at top
  brush.fill("#5c0a1a", 220);
  brush.fillBleed(0.08, "out");
  brush.beginShape(0.8);
  brush.vertex(250, 175);
  brush.vertex(300, 150);
  brush.vertex(350, 175);
  brush.vertex(320, 200);
  brush.vertex(280, 200);
  brush.endShape(true);

  // front wrapping petal, lighter where light hits the rim
  brush.fill("#b82a3c", 190);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.8);
  brush.vertex(210, 250);
  brush.vertex(300, 225);
  brush.vertex(395, 245);
  brush.vertex(370, 330);
  brush.vertex(300, 365);
  brush.vertex(230, 330);
  brush.endShape(true);
  brush.fill("#d8707d", 150);
  brush.fillBleed(0.15, "out");
  brush.beginShape(0.8);
  brush.vertex(225, 250);
  brush.vertex(300, 232);
  brush.vertex(380, 248);
  brush.vertex(300, 260);
  brush.endShape(true);

  // cool shadow pooling at the base of the cup
  brush.fill("#4a2a44", 170);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.8);
  brush.vertex(240, 330);
  brush.vertex(300, 362);
  brush.vertex(360, 330);
  brush.vertex(300, 345);
  brush.endShape(true);
}
