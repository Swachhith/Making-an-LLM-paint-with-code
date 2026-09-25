async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf6ec");
  brush.noStroke();
  // stem
  brush.fill("#8fae7a", 190);
  brush.fillBleed(0.1, "out");
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(150, 600);
  brush.vertex(200, 460);
  brush.vertex(250, 360);
  brush.vertex(262, 368);
  brush.vertex(214, 468);
  brush.vertex(166, 600);
  brush.endShape(true);
  // leaf
  brush.fill("#a7c290", 170);
  brush.fillBleed(0.25, "out");
  brush.beginShape(0.7);
  brush.vertex(195, 480);
  brush.vertex(110, 430);
  brush.vertex(60, 440);
  brush.vertex(120, 470);
  brush.endShape(true);
  // back petals of trumpet (shadowed)
  brush.fill("#dfe6cf", 190);
  brush.fillBleed(0.35, "out");
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.7);
  brush.vertex(255, 360);
  brush.vertex(350, 200);
  brush.vertex(470, 130);
  brush.vertex(430, 210);
  brush.vertex(300, 350);
  brush.endShape(true);
  // upper recurved petal
  brush.fill("#e9ecd9", 200);
  brush.fillBleed(0.3, "out");
  brush.beginShape(0.8);
  brush.vertex(265, 355);
  brush.vertex(360, 250);
  brush.vertex(470, 150);
  brush.vertex(540, 140);
  brush.vertex(500, 110);
  brush.vertex(420, 150);
  brush.vertex(300, 300);
  brush.endShape(true);
  // lower recurved petal
  brush.fill("#f1e3cf", 200);
  brush.beginShape(0.8);
  brush.vertex(265, 360);
  brush.vertex(380, 300);
  brush.vertex(500, 290);
  brush.vertex(560, 330);
  brush.vertex(520, 260);
  brush.vertex(420, 250);
  brush.vertex(300, 320);
  brush.endShape(true);
  // green throat shading
  brush.fill("#b9c98e", 180);
  brush.fillBleed(0.3, "out");
  brush.beginShape(0.7);
  brush.vertex(255, 362);
  brush.vertex(320, 300);
  brush.vertex(340, 270);
  brush.vertex(290, 330);
  brush.endShape(true);
  // pink blush on petal
  brush.fill("#f2c7c4", 150);
  brush.fillBleed(0.4, "out");
  brush.circle(470, 280, 35, true);
  // stamens
  brush.fill("#9a8a4c", 190);
  brush.fillBleed(0.05, "out");
  let tips = [[450, 200], [470, 225], [440, 240], [480, 190], [460, 250]];
  for (let t of tips) {
    brush.beginShape(0.2);
    brush.vertex(330, 285);
    brush.vertex(t[0], t[1]);
    brush.vertex(t[0] + 2, t[1] + 3);
    brush.vertex(332, 290);
    brush.endShape(true);
    brush.fill("#b55a2a", 210);
    brush.circle(t[0], t[1], 6, true);
    brush.fill("#9a8a4c", 190);
  }
}
