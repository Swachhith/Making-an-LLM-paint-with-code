async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ece6");
  brush.noStroke();

  // dusk sky — splashy blooms of violet and rose
  brush.fill("#6a5aa8", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.55);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 260); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#e07a8a", 180);
  brush.circle(120, 330, 180, 0.9);
  brush.fill("#f2a860", 170);
  brush.circle(520, 360, 140, 0.9);
  brush.fill("#3f3a78", 180);
  brush.circle(420, 40, 160, 0.9);

  // low angle: house looms, base near bottom, roof tilts up. converging verticals
  brush.fill("#3a2a3e", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.1);
  brush.vertex(110, 600); brush.vertex(150, 260); brush.vertex(300, 140); brush.vertex(450, 260); brush.vertex(490, 600);
  brush.endShape(true);
  brush.fill("#2a1e30", 215);
  brush.beginShape(0.2);
  brush.vertex(300, 260); brush.vertex(450, 270); brush.vertex(490, 600); brush.vertex(330, 600);
  brush.endShape(true);
  // roof overhang
  brush.fill("#1e1628", 235);
  brush.beginShape(0.1);
  brush.vertex(125, 275); brush.vertex(300, 125); brush.vertex(475, 275); brush.vertex(455, 285); brush.vertex(300, 155); brush.vertex(145, 285);
  brush.endShape(true);
  // chimney
  brush.beginShape(0.1);
  brush.vertex(380, 190); brush.vertex(385, 120); brush.vertex(410, 120); brush.vertex(410, 210);
  brush.endShape(true);

  // one lit window — warm, bleeding
  brush.fill("#f7c24a", 245);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(220, 360); brush.vertex(280, 356); brush.vertex(282, 440); brush.vertex(222, 444);
  brush.endShape(true);
  brush.fill("#f39a3a", 200);
  brush.beginShape(0.1);
  brush.vertex(226, 400); brush.vertex(278, 398); brush.vertex(280, 438); brush.vertex(226, 440);
  brush.endShape(true);
  // dark window
  brush.fill("#150f1c", 220);
  brush.beginShape(0.1);
  brush.vertex(350, 365); brush.vertex(400, 362); brush.vertex(404, 440); brush.vertex(352, 442);
  brush.endShape(true);

  // grass at base
  brush.fill("#1f2a22", 225);
  brush.fillBleed(0.28);
  brush.beginShape(0.6);
  brush.vertex(-20, 560); brush.vertex(150, 540); brush.vertex(350, 560); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // drips from sky
  brush.fill("#6a5aa8", 180);
  brush.beginShape(0.4);
  brush.vertex(60, 300); brush.vertex(76, 300); brush.vertex(72, 400); brush.vertex(68, 410); brush.vertex(62, 400);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(540, 270); brush.vertex(556, 270); brush.vertex(552, 340); brush.vertex(548, 348); brush.vertex(542, 340);
  brush.endShape(true);
  brush.fill("#f7e08a", 220);
  brush.circle(80, 70, 4, 0.3);
  brush.circle(200, 40, 3, 0.3);
}
