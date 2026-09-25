async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4efe4");
  brush.noStroke();
  let cx = 285, cy = 275;
  // negative painting: a continuous earthy ground hugging the flower's outline.
  // wedges fill each gap between petals and sweep out past the canvas edge.
  for (let i = 0; i < 5; i++) {
    let a = -90 + i * 72 + 10 + 36;
    brush.fill(i % 2 ? "#8c8862" : "#8d7657", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.4);
    brush.beginShape(0.5);
    brush.vertex(cx + 120 * cos(a), cy + 120 * sin(a));
    brush.vertex(cx + 175 * cos(a - 26), cy + 175 * sin(a - 26));
    brush.vertex(cx + 205 * cos(a - 38), cy + 205 * sin(a - 38));
    brush.vertex(cx + 420 * cos(a - 40), cy + 420 * sin(a - 40));
    brush.vertex(cx + 420 * cos(a + 40), cy + 420 * sin(a + 40));
    brush.vertex(cx + 205 * cos(a + 38), cy + 205 * sin(a + 38));
    brush.vertex(cx + 175 * cos(a + 26), cy + 175 * sin(a + 26));
    brush.endShape(true);
  }
  // a darker umber pass near the petal edges to sharpen the silhouette
  for (let i = 0; i < 5; i++) {
    let a = -90 + i * 72 + 10 + 36;
    brush.fill("#6b5a40", 190);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(cx + 130 * cos(a), cy + 130 * sin(a));
    brush.vertex(cx + 190 * cos(a - 28), cy + 190 * sin(a - 28));
    brush.vertex(cx + 240 * cos(a), cy + 240 * sin(a));
    brush.vertex(cx + 190 * cos(a + 28), cy + 190 * sin(a + 28));
    brush.endShape(true);
  }
  // stem and two leaves crossing the dark ground, lower right
  brush.fill("#3e3d22", 230);
  brush.fillBleed(0.08);
  brush.beginShape(0.5);
  brush.vertex(345, 400); brush.vertex(357, 400); brush.vertex(475, 590); brush.vertex(460, 592);
  brush.endShape(true);
  brush.fill("#6d7a44", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(410, 480); brush.vertex(470, 430); brush.vertex(540, 415); brush.vertex(585, 435);
  brush.vertex(540, 475); brush.vertex(465, 495);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(430, 540); brush.vertex(360, 550); brush.vertex(285, 572); brush.vertex(245, 598);
  brush.vertex(335, 596); brush.vertex(415, 565);
  brush.endShape(true);
  // petals: warm grey shade on one side of each, leaving the other side as paper
  for (let i = 0; i < 5; i++) {
    let a = -90 + i * 72 + 10;
    brush.fill("#d3c7ab", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.85);
    brush.vertex(cx, cy);
    brush.vertex(cx + 90 * cos(a + 4), cy + 90 * sin(a + 4));
    brush.vertex(cx + 175 * cos(a + 14), cy + 175 * sin(a + 14));
    brush.vertex(cx + 150 * cos(a + 30), cy + 150 * sin(a + 30));
    brush.vertex(cx + 60 * cos(a + 34), cy + 60 * sin(a + 34));
    brush.endShape(true);
    brush.fill("#b3a58a", 180);
    brush.fillBleed(0.12);
    brush.beginShape(0.85);
    brush.vertex(cx, cy);
    brush.vertex(cx + 110 * cos(a + 22), cy + 110 * sin(a + 22));
    brush.vertex(cx + 150 * cos(a + 30), cy + 150 * sin(a + 30));
    brush.vertex(cx + 50 * cos(a + 34), cy + 50 * sin(a + 34));
    brush.endShape(true);
  }
  // the red eye: rays bleeding outward along each petal, then a dark core
  for (let i = 0; i < 5; i++) {
    let a = -90 + i * 72 + 10;
    brush.fill("#962a2a", 220);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + 45 * cos(a - 14), cy + 45 * sin(a - 14));
    brush.vertex(cx + 70 * cos(a), cy + 70 * sin(a));
    brush.vertex(cx + 45 * cos(a + 14), cy + 45 * sin(a + 14));
    brush.endShape(true);
  }
  brush.fill("#5c141c", 230);
  brush.fillBleed(0.1);
  brush.circle(cx, cy, 22, true);
  // staminal column
  brush.fill("#a9844a", 230);
  brush.fillBleed(0.05);
  brush.beginShape(0.4);
  brush.vertex(cx - 3, cy); brush.vertex(cx + 5, cy + 2); brush.vertex(cx - 80, cy - 105); brush.vertex(cx - 88, cy - 100);
  brush.endShape(true);
  brush.fill("#9a3627", 235);
  brush.circle(cx - 86, cy - 104, 9, true);
  brush.fill("#c29840", 230);
  brush.circle(cx - 62, cy - 74, 5, true);
  brush.circle(cx - 45, cy - 55, 5, true);
}
