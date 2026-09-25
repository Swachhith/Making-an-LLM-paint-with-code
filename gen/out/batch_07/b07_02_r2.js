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
  brush.beginShape(0.4);
  brush.vertex(0, 600);
  brush.vertex(0, 420);
  brush.vertex(600, 60);
  brush.vertex(600, 280);
  brush.endShape(true);

  // a muted sage leaf behind the bloom
  brush.fill("#8d9468", 190);
  brush.fillBleed(0.35, "out");
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.7);
  brush.vertex(150, 470);
  brush.vertex(70, 360);
  brush.vertex(60, 270);
  brush.vertex(130, 360);
  brush.vertex(190, 450);
  brush.endShape(true);

  // calyx and stem, olive
  brush.fill("#6f7446", 200);
  brush.fillBleed(0.2, "out");
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(75, 565);
  brush.vertex(162, 440);
  brush.vertex(212, 390);
  brush.vertex(225, 409);
  brush.vertex(175, 465);
  brush.vertex(90, 578);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(206, 378);
  brush.vertex(262, 340);
  brush.vertex(281, 390);
  brush.vertex(238, 421);
  brush.endShape(true);

  // trumpet petals flaring to the upper right
  const petals = [
    [[262, 352], [350, 190], [450, 152], [488, 215], [338, 352]],
    [[265, 365], [425, 290], [525, 315], [512, 390], [325, 396]],
    [[260, 359], [300, 215], [350, 128], [400, 165], [325, 328]],
  ];
  for (let i = 0; i < petals.length; i++) {
    brush.fill("#a4406c", 205);
    brush.fillBleed(0.45, "out");
    brush.fillTexture(0.55, 0.6);
    brush.beginShape(0.85);
    for (const p of petals[i]) brush.vertex(p[0], p[1]);
    brush.endShape(true);
    brush.fill("#76294a", 215);
    brush.fillBleed(0.2, "in");
    brush.beginShape(0.85);
    for (const p of petals[i]) brush.vertex(p[0] * 0.8 + 262 * 0.2, p[1] * 0.8 + 359 * 0.2);
    brush.endShape(true);
  }

  // dark throat at the base
  brush.fill("#4e1f2f", 210);
  brush.fillBleed(0.3, "out");
  brush.circle(281, 355, 28, true);

  // staminal column, curving out
  brush.fill("#b98a4e", 220);
  brush.fillBleed(0.1, "in");
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.5);
  brush.vertex(281, 350);
  brush.vertex(412, 252);
  brush.vertex(512, 209);
  brush.vertex(518, 220);
  brush.vertex(419, 268);
  brush.vertex(288, 362);
  brush.endShape(true);
  brush.fill("#d4a24a", 230);
  for (let k = 0; k < 7; k++) {
    brush.circle(475 + k * 9, 208 + (k % 2) * 10 - k * 2, 6, true);
  }
  brush.fill("#8c3a3a", 230);
  brush.circle(528, 208, 9, true);
}
