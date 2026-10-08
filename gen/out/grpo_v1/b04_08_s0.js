async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf0d4");
  brush.noStroke();

  // warm yellow-green ground
  brush.fill("#e8d89a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 600); brush.vertex(600, 600); brush.vertex(600, 470); brush.vertex(520, 350); brush.vertex(420, 320); brush.vertex(320, 350); brush.vertex(220, 470); brush.vertex(0, 600);
  brush.endShape(true);

  // stem
  brush.fill("#6f8a4a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(285, 420); brush.vertex(295, 420); brush.vertex(305, 600); brush.vertex(295, 600);
  brush.endShape(true);

  // two leaves
  brush.fill("#5a733e", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(295, 470); brush.vertex(240, 500); brush.vertex(230, 530); brush.vertex(270, 520); brush.vertex(285, 470);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(295, 470); brush.vertex(350, 500); brush.vertex(360, 530); brush.vertex(320, 520); brush.vertex(295, 470);
  brush.endShape(true);

  // anemone head: pale blue, six broad petals
  let cx = 300, cy = 220;
  for (let k = 0; k < 6; k++) {
    let a = k * 60;
    let R = 155;
    brush.fill("#4a7dc8", 215);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 20) * R * 0.85, cy + sin(a - 20) * R * 0.85);
    brush.vertex(cx + cos(a - 10) * R, cy + sin(a - 10) * R);
    brush.vertex(cx + cos(a + 10) * R, cy + sin(a + 10) * R);
    brush.vertex(cx + cos(a + 20) * R * 0.85, cy + sin(a + 20) * R * 0.85);
    brush.endShape(true);
  }

  // deeper blue veins
  for (let k = 0; k < 6; k++) {
    let a = k * 60;
    brush.fill("#2e5a8a", 225);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a) * 70, cy + sin(a) * 70);
    brush.vertex(cx + cos(a) * 110, cy + sin(a) * 110);
    brush.endShape(true);
  }

  // centre
  brush.fill("#e8c46a", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 40, 0.4);
  brush.fill("#d98a3a", 230);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 24, 0.4);
  brush.fill("#c26a2a", 220);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, 14, 0.4);
  brush.fill("#e8c46a", 250);
  brush.fillBleed(0.1);
  brush.circle(cx, cy, 6, 0.2);
}
