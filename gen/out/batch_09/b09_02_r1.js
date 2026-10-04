async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff4d8");
  brush.noStroke();

  // sky bands from horizon upward
  let bands = [
    ["#ffd23a", 210, 470, 330],
    ["#ff8a1e", 200, 360, 220],
    ["#e8343a", 190, 250, 110],
    ["#7a1f6a", 200, 140, -20]
  ];
  for (let b of bands) {
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.3);
    brush.fill(b[0], b[1]);
    brush.beginShape(0.3);
    brush.vertex(-20, b[3]); brush.vertex(620, b[3]); brush.vertex(620, b[2]); brush.vertex(-20, b[2]);
    brush.endShape(true);
  }

  // low sun, left as a pale disc warmed twice
  brush.fillBleed(0.2);
  brush.fill("#ff7a0a", 200);
  brush.circle(390, 425, 85, 0.3);
  brush.fill("#ffe030", 240);
  brush.circle(390, 425, 62, 0.15);
  brush.fill("#ffea50", 220);
  brush.circle(390, 425, 45, 0.1);

  // distant mountain silhouette
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.fill("#5a1d4a", 210);
  brush.beginShape(0.4);
  brush.vertex(-20, 450); brush.vertex(60, 420); brush.vertex(150, 440); brush.vertex(230, 410);
  brush.vertex(300, 445); brush.vertex(620, 455); brush.vertex(620, 480); brush.vertex(-20, 480);
  brush.endShape(true);

  // desert floor, near black
  brush.fill("#1c0f18", 235);
  brush.beginShape(0.3);
  brush.vertex(-20, 470); brush.vertex(200, 462); brush.vertex(420, 478); brush.vertex(620, 468);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#0e060c", 240);
  brush.beginShape(0.3);
  brush.vertex(-20, 520); brush.vertex(620, 510); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // saguaro: trunk and two arms, two passes each
  for (let pass = 0; pass < 2; pass++) {
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.fill(pass == 0 ? "#2a1422" : "#0c0408", 235);
    // trunk
    brush.beginShape(0.5);
    brush.vertex(170, 500); brush.vertex(168, 220); brush.vertex(182, 200); brush.vertex(200, 200); brush.vertex(212, 220); brush.vertex(212, 500);
    brush.endShape(true);
    // left arm
    brush.beginShape(0.5);
    brush.vertex(170, 380); brush.vertex(130, 378); brush.vertex(118, 360); brush.vertex(116, 280);
    brush.vertex(128, 265); brush.vertex(142, 270); brush.vertex(146, 350); brush.vertex(170, 352);
    brush.endShape(true);
    // right arm
    brush.beginShape(0.5);
    brush.vertex(210, 340); brush.vertex(248, 338); brush.vertex(258, 320); brush.vertex(258, 250);
    brush.vertex(246, 238); brush.vertex(234, 244); brush.vertex(232, 312); brush.vertex(210, 314);
    brush.endShape(true);
  }

  // second, smaller cactus far right
  brush.fill("#140810", 235);
  brush.beginShape(0.5);
  brush.vertex(520, 480); brush.vertex(520, 400); brush.vertex(530, 390); brush.vertex(540, 400); brush.vertex(540, 480);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(520, 445); brush.vertex(502, 443); brush.vertex(498, 410); brush.vertex(510, 405); brush.vertex(512, 430); brush.vertex(520, 430);
  brush.endShape(true);

  // small scrub silhouettes
  brush.fill("#120810", 220);
  brush.circle(430, 480, 22, 0.8);
  brush.circle(460, 486, 16, 0.8);
  brush.circle(60, 490, 18, 0.8);
}
