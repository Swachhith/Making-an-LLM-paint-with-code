async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe6d8");
  brush.noStroke();

  brush.fill("#c7b79a", 150);
  brush.fillBleed(0.5);
  brush.fillTexture(0.7, 0.6);
  brush.beginShape(0.9);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 250); brush.vertex(300, 330); brush.vertex(0, 200);
  brush.endShape(true);

  // leaves
  let lv = [[220, 360, 150, 170], [280, 400, 60, 150], [450, 470, 110, 120]];
  for (let L of lv) {
    brush.fill("#6f7a4c", 195);
    brush.fillBleed(0.25);
    brush.fillTexture(0.6, 0.5);
    brush.beginShape(0.5);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + cos(L[2] - 30) * L[3] * 0.55, L[1] + sin(L[2] - 30) * L[3] * 0.55);
    brush.vertex(L[0] + cos(L[2]) * L[3], L[1] + sin(L[2]) * L[3]);
    brush.vertex(L[0] + cos(L[2] + 30) * L[3] * 0.55, L[1] + sin(L[2] + 30) * L[3] * 0.55);
    brush.endShape(true);
  }

  // bud stem
  brush.fill("#5d6a3c", 205);
  brush.fillBleed(0.1);
  brush.beginShape(0.5);
  brush.vertex(450, 340); brush.vertex(470, 470); brush.vertex(460, 600); brush.vertex(470, 600); brush.vertex(482, 470); brush.vertex(460, 338);
  brush.endShape(true);

  // open hibiscus: five broad petals
  let cx = 240, cy = 250;
  for (let k = 0; k < 5; k++) {
    let a = k * 72 - 60;
    brush.fill("#b0446e", 175);
    brush.fillBleed(0.35);
    brush.fillTexture(0.55, 0.55);
    brush.beginShape(0.75);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 38) * 150, cy + sin(a - 38) * 150);
    brush.vertex(cx + cos(a - 12) * 200, cy + sin(a - 12) * 200);
    brush.vertex(cx + cos(a + 14) * 195, cy + sin(a + 14) * 195);
    brush.vertex(cx + cos(a + 38) * 145, cy + sin(a + 38) * 145);
    brush.endShape(true);
    brush.fill("#6e1f40", 210);
    brush.fillBleed(0.3);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 20) * 60, cy + sin(a - 20) * 60);
    brush.vertex(cx + cos(a + 20) * 60, cy + sin(a + 20) * 60);
    brush.endShape(true);
  }
  // staminal column
  brush.fill("#8c2a4a", 220);
  brush.fillBleed(0.05);
  brush.beginShape(0.3);
  brush.vertex(cx - 4, cy); brush.vertex(cx + 70, cy - 90); brush.vertex(cx + 78, cy - 84); brush.vertex(cx + 4, cy + 4);
  brush.endShape(true);
  brush.fill("#d9a441", 225);
  brush.circle(cx + 76, cy - 90, 9, true);
  brush.circle(cx + 60, cy - 75, 6, true);

  // closed bud
  brush.fill("#a0506e", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.8);
  brush.vertex(455, 345); brush.vertex(430, 280); brush.vertex(450, 200); brush.vertex(478, 280); brush.vertex(468, 345);
  brush.endShape(true);
  brush.fill("#7a2e4c", 200);
  brush.beginShape(0.8);
  brush.vertex(460, 340); brush.vertex(455, 260); brush.vertex(452, 205); brush.vertex(472, 290);
  brush.endShape(true);
  brush.fill("#5d6a3c", 215);
  brush.beginShape(0.6);
  brush.vertex(438, 350); brush.vertex(432, 300); brush.vertex(452, 330); brush.vertex(462, 290); brush.vertex(472, 330); brush.vertex(488, 300); brush.vertex(478, 352);
  brush.endShape(true);
}
