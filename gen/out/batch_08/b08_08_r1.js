async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fffbf2");
  brush.noStroke();
  // sky painted around a tall chapel silhouette (low angle: tower reaches high)
  let sil = [[620, 430], [460, 430], [460, 285], [375, 225], [330, 245], [330, 120], [290, 55],
             [250, 120], [250, 245], [205, 225], [120, 285], [120, 430], [-20, 430]];
  brush.fill("#0f34b8", 235);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.1);
  brush.vertex(-20, -20); brush.vertex(620, -20);
  for (let p of sil) brush.vertex(p[0], p[1]);
  brush.endShape(true);
  brush.fill("#1aa8d0", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(-20, 260); brush.vertex(120, 285); brush.vertex(120, 430); brush.vertex(-20, 430);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(620, 250); brush.vertex(460, 285); brush.vertex(460, 430); brush.vertex(620, 430);
  brush.endShape(true);
  // shade on right planes (violet)
  brush.fill("#7a5ad8", 205);
  brush.fillBleed(0.15);
  brush.fillTexture(0.35, 0.35);
  brush.beginShape(0.05);
  brush.vertex(375, 240); brush.vertex(455, 295); brush.vertex(455, 430); brush.vertex(375, 430);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(305, 125); brush.vertex(328, 125); brush.vertex(328, 250); brush.vertex(305, 240);
  brush.endShape(true);
  // red dome and roof lines
  brush.fill("#e0202a", 235);
  brush.fillBleed(0.15);
  brush.fillTexture(0.35, 0.35);
  brush.beginShape(0.8);
  brush.vertex(248, 122); brush.vertex(290, 52); brush.vertex(332, 122);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(118, 285); brush.vertex(205, 225); brush.vertex(250, 245); brush.vertex(250, 260); brush.vertex(205, 242); brush.vertex(128, 298);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(330, 245); brush.vertex(375, 225); brush.vertex(462, 285); brush.vertex(455, 298); brush.vertex(375, 242); brush.vertex(330, 262);
  brush.endShape(true);
  // openings
  brush.fill("#281650", 235);
  brush.fillBleed(0.1);
  brush.beginShape(0.5);
  brush.vertex(274, 190); brush.vertex(274, 160); brush.vertex(289, 145); brush.vertex(304, 160); brush.vertex(304, 190);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(262, 430); brush.vertex(262, 360); brush.vertex(290, 335); brush.vertex(318, 360); brush.vertex(318, 430);
  brush.endShape(true);
  brush.circle(190, 330, 14, 0.3);
  brush.circle(410, 335, 12, 0.3);
  // grass hill from below: bright dome cutting across the base
  brush.fill("#2aa030", 230);
  brush.fillBleed(0.28);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 620); brush.vertex(-20, 450); brush.vertex(150, 420); brush.vertex(300, 415); brush.vertex(450, 422); brush.vertex(620, 460); brush.vertex(620, 620);
  brush.endShape(true);
  brush.fill("#0f6a24", 220);
  brush.fillBleed(0.28);
  brush.beginShape(0.6);
  brush.vertex(-20, 620); brush.vertex(-20, 520); brush.vertex(280, 490); brush.vertex(620, 525); brush.vertex(620, 620);
  brush.endShape(true);
  let cols = ["#ffd000", "#ff2a6a", "#ff7a00", "#ffffff"];
  for (let i = 0; i < 30; i++) {
    brush.fill(cols[i % 3], 230);
    brush.fillBleed(0.15);
    brush.circle(15 + (i * 197) % 590, 470 + (i * 71) % 130, 5 + (i % 4) * 2, 0.5);
  }
}
