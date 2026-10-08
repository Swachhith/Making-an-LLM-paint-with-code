async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe2");
  brush.noStroke();

  // bold sky: cobalt top, turquoise lower left
  brush.fill("#1a3d7a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(420, 250); brush.vertex(200, 150); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#2aa38a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 220); brush.vertex(620, 220); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // a tall stem, bold green
  brush.fill("#1f6b3a", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(250, 450); brush.vertex(258, 450); brush.vertex(260, 620); brush.vertex(252, 620);
  brush.endShape(true);
  brush.fill("#0e4a24", 210);
  brush.beginShape(0.3);
  brush.vertex(242, 470); brush.vertex(250, 470); brush.vertex(252, 620); brush.vertex(244, 620);
  brush.endShape(true);

  // six broad petals, arranged with a face
  let cx = 420, cy = 340;
  for (let k = 0; k < 6; k++) {
    let a = k * 60 + 15;
    let len = 135;
    let px = cx + cos(a) * len * 0.75;
    let py = cy + sin(a) * len * 0.75;
    let w = 30;
    brush.fill("#f76a1a", 240);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 20) * len * 0.9, cy + sin(a - 20) * len * 0.9);
    brush.vertex(px + cos(a - 10) * w * 0.8, py + sin(a - 10) * w * 0.8);
    brush.vertex(px + cos(a + 10) * w * 0.8, py + sin(a + 10) * w * 0.8);
    brush.vertex(cx + cos(a + 20) * len * 0.9, cy + sin(a + 20) * len * 0.9);
    brush.endShape(true);
  }

  // orange face: two dots, a crescent, a V
  brush.fill("#e02a14", 250);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx - 10, cy - 30, 10, 0.3);
  brush.circle(cx + 10, cy - 30, 10, 0.3);
  brush.beginShape(0.7);
  brush.vertex(cx - 22, cy - 14); brush.vertex(cx - 10, cy - 30); brush.vertex(cx + 10, cy - 30); brush.vertex(cx + 22, cy - 14); brush.vertex(cx + 18, cy + 10); brush.vertex(cx - 18, cy + 10);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(cx + 22, cy + 10); brush.vertex(cx + 36, cy + 24); brush.vertex(cx + 32, cy + 38); brush.vertex(cx + 18, cy + 38); brush.vertex(cx + 14, cy + 24);
  brush.endShape(true);
  brush.fill("#f76a1a", 220);
  brush.beginShape(0.7);
  brush.vertex(cx - 22, cy + 10); brush.vertex(cx - 10, cy + 24); brush.vertex(cx + 10, cy + 24); brush.vertex(cx + 22, cy + 10);
  brush.endShape(true);

  // two stamens
  brush.fill("#c8300e", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx - 4, cy + 12, 8, 0.4);
  brush.circle(cx + 4, cy + 12, 8, 0.4);
  brush.fill("#f76a1a", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(cx - 4, cy + 12); brush.vertex(cx - 4, cy + 40); brush.vertex(cx + 4, cy + 40); brush.vertex(cx + 4, cy + 12);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(cx + 4, cy + 12); brush.vertex(cx + 4, cy + 40); brush.vertex(cx - 4, cy + 40); brush.vertex(cx - 4, cy + 12);
  brush.endShape(true);

  // a dark shadowed petal behind the face
  brush.fill("#d93a16", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(cx, cy); brush.vertex(cx + 20, cy - 20); brush.vertex(cx + 40, cy + 5); brush.vertex(cx + 20, cy + 35); brush.vertex(cx - 15, cy + 10);
  brush.endShape(true);
}
