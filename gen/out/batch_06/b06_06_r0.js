async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef0f6");
  brush.noStroke();
  // bold indigo sky wash
  brush.fill("#2f4fa3", 190);
  brush.fillBleed(0.3, "out");
  brush.fillTexture(0.6, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 380);
  brush.vertex(420, 470); brush.vertex(150, 560); brush.vertex(-20, 520);
  brush.endShape(true);
  // branch
  brush.fill("#3b2417", 220);
  brush.fillBleed(0.1, "out");
  brush.fillTexture(0.7, 0.6);
  brush.beginShape(0.4);
  brush.vertex(0, 560); brush.vertex(200, 420); brush.vertex(400, 290); brush.vertex(470, 180);
  brush.vertex(480, 186); brush.vertex(412, 300); brush.vertex(210, 436); brush.vertex(0, 580);
  brush.endShape(true);
  // open bloom petals
  let cx = 230, cy = 360;
  let petals = [[-150, -60], [-110, -170], [-20, -210], [80, -170], [120, -60], [-60, -120], [30, -130]];
  for (let i = 0; i < petals.length; i++) {
    let p = petals[i];
    let tx = cx + p[0], ty = cy + p[1];
    brush.fill("#fbeef4", 230);
    brush.fillBleed(0.2, "out");
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx - 25, cy);
    brush.vertex((cx + tx) / 2 - p[1] * 0.3, (cy + ty) / 2 + p[0] * 0.3);
    brush.vertex(tx, ty);
    brush.vertex((cx + tx) / 2 + p[1] * 0.3, (cy + ty) / 2 - p[0] * 0.3);
    brush.vertex(cx + 25, cy);
    brush.endShape(true);
    brush.fill("#c2186b", 210);
    brush.fillBleed(0.35, "out");
    brush.beginShape(0.8);
    brush.vertex(cx - 20, cy);
    brush.vertex(cx + p[0] * 0.3 - 18, cy + p[1] * 0.3);
    brush.vertex(cx + p[0] * 0.45, cy + p[1] * 0.45);
    brush.vertex(cx + p[0] * 0.3 + 18, cy + p[1] * 0.3);
    brush.vertex(cx + 20, cy);
    brush.endShape(true);
  }
  brush.fill("#e2b33a", 220);
  brush.fillBleed(0.1, "out");
  brush.circle(cx, cy - 40, 22, true);
  // closed bud
  brush.fill("#b0125f", 220);
  brush.fillBleed(0.25, "out");
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(455, 200); brush.vertex(425, 130); brush.vertex(450, 40); brush.vertex(485, 125); brush.vertex(475, 195);
  brush.endShape(true);
  brush.fill("#f7d9e8", 200);
  brush.fillBleed(0.15, "out");
  brush.beginShape(0.9);
  brush.vertex(460, 190); brush.vertex(445, 120); brush.vertex(452, 60); brush.vertex(468, 125);
  brush.endShape(true);
  brush.fill("#5a6b2a", 210);
  brush.beginShape(0.6);
  brush.vertex(450, 205); brush.vertex(440, 170); brush.vertex(470, 180); brush.vertex(478, 205);
  brush.endShape(true);
}
