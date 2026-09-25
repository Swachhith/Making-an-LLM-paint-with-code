async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece5d6");
  brush.noStroke();
  let cx = 280, cy = 270;
  // negative painting: dark earthy pools placed in the gaps between the petals,
  // so the white flower is the untouched paper they surround
  for (let i = 0; i < 5; i++) {
    let a = -90 + i * 72 + 10 + 36;
    brush.fill(i % 2 ? "#8e8a66" : "#8a7458", 200);
    brush.fillBleed(0.35);
    brush.fillTexture(0.6, 0.4);
    brush.beginShape(0.8);
    brush.vertex(cx + 150 * cos(a), cy + 150 * sin(a));
    brush.vertex(cx + 240 * cos(a - 22), cy + 240 * sin(a - 22));
    brush.vertex(cx + 330 * cos(a), cy + 330 * sin(a));
    brush.vertex(cx + 240 * cos(a + 22), cy + 240 * sin(a + 22));
    brush.endShape(true);
  }
  // stem and two leaves in the lower right, against the dark ground
  brush.fill("#4b4a2c", 225);
  brush.fillBleed(0.08);
  brush.beginShape(0.5);
  brush.vertex(330, 380); brush.vertex(342, 380); brush.vertex(470, 590); brush.vertex(455, 592);
  brush.endShape(true);
  brush.fill("#5d6238", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(400, 470); brush.vertex(460, 420); brush.vertex(530, 405); brush.vertex(575, 425);
  brush.vertex(530, 465); brush.vertex(455, 485);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(425, 530); brush.vertex(355, 540); brush.vertex(280, 565); brush.vertex(240, 595);
  brush.vertex(330, 590); brush.vertex(410, 555);
  brush.endShape(true);
  // petals: pale grey-ochre shade only on their inner halves, outer rims left as paper
  for (let i = 0; i < 5; i++) {
    let a = -90 + i * 72 + 10;
    brush.fill("#d6cbb2", 185);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.85);
    brush.vertex(cx, cy);
    brush.vertex(cx + 120 * cos(a - 26), cy + 120 * sin(a - 26));
    brush.vertex(cx + 160 * cos(a - 4), cy + 160 * sin(a - 4));
    brush.vertex(cx + 100 * cos(a + 20), cy + 100 * sin(a + 20));
    brush.endShape(true);
    brush.fill("#b9ad96", 170);
    brush.fillBleed(0.15);
    brush.beginShape(0.85);
    brush.vertex(cx, cy);
    brush.vertex(cx + 70 * cos(a + 18), cy + 70 * sin(a + 18));
    brush.vertex(cx + 150 * cos(a + 30), cy + 150 * sin(a + 30));
    brush.vertex(cx + 60 * cos(a + 34), cy + 60 * sin(a + 34));
    brush.endShape(true);
  }
  // the red eye: rays bleeding outward along each petal, then a dark core
  for (let i = 0; i < 5; i++) {
    let a = -90 + i * 72 + 10;
    brush.fill("#9b2c2c", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + 45 * cos(a - 14), cy + 45 * sin(a - 14));
    brush.vertex(cx + 65 * cos(a), cy + 65 * sin(a));
    brush.vertex(cx + 45 * cos(a + 14), cy + 45 * sin(a + 14));
    brush.endShape(true);
  }
  brush.fill("#651820", 225);
  brush.fillBleed(0.1);
  brush.circle(cx, cy, 20, true);
  // staminal column
  brush.fill("#b38d52", 225);
  brush.fillBleed(0.05);
  brush.beginShape(0.4);
  brush.vertex(cx - 3, cy); brush.vertex(cx + 5, cy + 2); brush.vertex(cx - 80, cy - 105); brush.vertex(cx - 88, cy - 100);
  brush.endShape(true);
  brush.fill("#a33d2a", 230);
  brush.circle(cx - 86, cy - 104, 8, true);
  brush.fill("#c9a14a", 225);
  brush.circle(cx - 62, cy - 74, 5, true);
  brush.circle(cx - 45, cy - 55, 5, true);
}
