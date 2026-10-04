async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbeee0");
  brush.noStroke();

  // hot sky, gold low and crimson high
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#f7a21e", 220);
  brush.beginShape(0.3);
  brush.vertex(-20, 120); brush.vertex(620, 120); brush.vertex(620, 340); brush.vertex(-20, 350);
  brush.endShape(true);
  brush.fill("#e0304a", 200);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 170); brush.vertex(300, 200); brush.vertex(-20, 160);
  brush.endShape(true);
  brush.fill("#9a1a4a", 170);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 60); brush.vertex(-20, 80);
  brush.endShape(true);

  // smoke plume: dark ash billows leaning right, two passes each
  let puffs = [[300, 180, 40], [312, 135, 55], [345, 95, 70], [400, 65, 80], [470, 45, 85], [550, 40, 80], [610, 55, 60]];
  for (let p of puffs) {
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.fill("#5a4058", 200);
    brush.circle(p[0], p[1], p[2], 0.6);
    brush.fill("#2a1c30", 180);
    brush.circle(p[0] + 14, p[1] + 12, p[2] * 0.6, 0.5);
  }
  // glow underlit on plume base
  brush.fill("#ff6a1a", 170);
  brush.circle(302, 190, 28, 0.5);

  // far ridge, faint mauve
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.4);
  brush.fill("#c890b0", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 340); brush.vertex(60, 305); brush.vertex(150, 330); brush.vertex(200, 300);
  brush.vertex(420, 305); brush.vertex(510, 280); brush.vertex(620, 315); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);

  // volcano cone, three passes getting darker and narrower
  brush.fillBleed(0.2);
  brush.fillTexture(0.35, 0.4);
  brush.fill("#a02030", 230);
  brush.beginShape(0.15);
  brush.vertex(110, 420); brush.vertex(270, 205); brush.vertex(330, 200); brush.vertex(500, 420);
  brush.endShape(true);
  brush.fill("#6a1030", 220);
  brush.beginShape(0.2);
  brush.vertex(150, 420); brush.vertex(275, 225); brush.vertex(325, 220); brush.vertex(470, 420);
  brush.endShape(true);
  brush.fill("#2a0820", 210);
  brush.beginShape(0.3);
  brush.vertex(305, 215); brush.vertex(332, 210); brush.vertex(500, 420); brush.vertex(360, 420);
  brush.endShape(true);
  // lava at the crater and down one flank
  brush.fillBleed(0.3);
  brush.fill("#ffb01a", 240);
  brush.circle(300, 208, 22, 0.5);
  brush.fill("#ff4a0a", 230);
  brush.beginShape(0.6);
  brush.vertex(286, 212); brush.vertex(314, 212); brush.vertex(305, 280); brush.vertex(290, 350); brush.vertex(268, 352); brush.vertex(280, 280);
  brush.endShape(true);
  brush.fill("#ffc02a", 220);
  brush.beginShape(0.6);
  brush.vertex(292, 214); brush.vertex(308, 214); brush.vertex(298, 270); brush.vertex(284, 268);
  brush.endShape(true);

  // mid ridge, rich plum
  brush.fillBleed(0.25);
  brush.fillTexture(0.35, 0.4);
  brush.fill("#6a2478", 215);
  brush.beginShape(0.5);
  brush.vertex(-20, 410); brush.vertex(90, 380); brush.vertex(200, 410); brush.vertex(320, 392);
  brush.vertex(450, 418); brush.vertex(560, 385); brush.vertex(620, 400); brush.vertex(620, 500); brush.vertex(-20, 500);
  brush.endShape(true);
  brush.fill("#4a1860", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 450); brush.vertex(300, 440); brush.vertex(620, 455); brush.vertex(620, 500); brush.vertex(-20, 500);
  brush.endShape(true);

  // near ridge, deep indigo, two passes
  brush.fill("#1f1a5a", 235);
  brush.beginShape(0.4);
  brush.vertex(-20, 475); brush.vertex(120, 450); brush.vertex(260, 485); brush.vertex(400, 462);
  brush.vertex(620, 495); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#0c0828", 220);
  brush.beginShape(0.4);
  brush.vertex(-20, 530); brush.vertex(200, 512); brush.vertex(420, 540); brush.vertex(620, 522); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
