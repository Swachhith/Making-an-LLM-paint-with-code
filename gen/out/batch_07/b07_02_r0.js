async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe6d6");
  brush.noStroke();

  // loose ochre ground wash
  brush.fill("#d9c7a3", 140);
  brush.fillBleed(0.5, "out");
  brush.fillTexture(0.6, 0.3);
  brush.circle(330, 330, 230, true);

  // calyx and stem, olive
  brush.fill("#6f7446", 200);
  brush.fillBleed(0.2, "out");
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(120, 520);
  brush.vertex(190, 420);
  brush.vertex(230, 380);
  brush.vertex(240, 395);
  brush.vertex(200, 440);
  brush.vertex(132, 530);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(225, 370);
  brush.vertex(270, 340);
  brush.vertex(285, 380);
  brush.vertex(250, 405);
  brush.endShape(true);

  // trumpet petals flaring to the upper right
  const petals = [
    [[270, 350], [340, 220], [420, 190], [450, 240], [330, 350]],
    [[272, 360], [400, 300], [480, 320], [470, 380], [320, 385]],
    [[268, 355], [300, 240], [340, 170], [380, 200], [320, 330]],
  ];
  for (let i = 0; i < petals.length; i++) {
    brush.fill("#9c4a66", 180);
    brush.fillBleed(0.45, "out");
    brush.fillTexture(0.55, 0.6);
    brush.beginShape(0.85);
    for (const p of petals[i]) brush.vertex(p[0], p[1]);
    brush.endShape(true);
    brush.fill("#7d3150", 200);
    brush.fillBleed(0.2, "in");
    brush.beginShape(0.85);
    for (const p of petals[i]) brush.vertex(p[0] * 0.8 + 270 * 0.2, p[1] * 0.8 + 355 * 0.2);
    brush.endShape(true);
  }

  // dark throat at the base
  brush.fill("#4e1f2f", 210);
  brush.fillBleed(0.3, "out");
  brush.circle(285, 352, 22, true);

  // staminal column, curving out
  brush.fill("#b98a4e", 220);
  brush.fillBleed(0.1, "in");
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.5);
  brush.vertex(285, 348);
  brush.vertex(390, 270);
  brush.vertex(470, 235);
  brush.vertex(474, 244);
  brush.vertex(395, 282);
  brush.vertex(290, 358);
  brush.endShape(true);
  brush.fill("#d4a24a", 230);
  for (let k = 0; k < 7; k++) {
    brush.circle(440 + k * 7, 236 + (k % 2) * 8 - k * 2, 5, true);
  }
  brush.fill("#8c3a3a", 230);
  brush.circle(482, 234, 7, true);
}
