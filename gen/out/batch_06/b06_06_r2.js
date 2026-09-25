async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f4ee");
  brush.noStroke();
  // big cobalt sky wash, full field; petals are painted opaque over it
  brush.fill("#1b3fa8", 240);
  brush.fillBleed(0.25, "out");
  brush.fillTexture(0.7, 0.55);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#0f2a7a", 230);
  brush.fillBleed(0.4, "out");
  brush.circle(80, 80, 150, true);
  brush.circle(560, 560, 140, true);
  // dark branch, two passes
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(pass ? "#140904" : "#3a2414", 250);
    brush.fillBleed(0.04, "out");
    brush.fillTexture(0.6, 0.8);
    let w = pass ? 6 : 12;
    brush.beginShape(0.4);
    brush.vertex(0, 590); brush.vertex(160, 500); brush.vertex(330, 430); brush.vertex(460, 280); brush.vertex(490, 200);
    brush.vertex(490 + w, 206); brush.vertex(460 + w, 288); brush.vertex(340 + w, 440 + w); brush.vertex(170, 500 + w * 1.5); brush.vertex(0, 590 + w * 1.5);
    brush.endShape(true);
  }
  // open magnolia: tulip-like goblet of broad petals
  let cx = 240, cy = 420;
  let petals = [[-175, -120, 58], [175, -120, 58], [-115, -240, 55], [115, -240, 55], [-45, -285, 50], [45, -280, 50], [0, -215, 50]];
  for (let p of petals) {
    let len = sqrt(p[0] * p[0] + p[1] * p[1]);
    let ux = p[0] / len, uy = p[1] / len, nx = -uy, ny = ux, hw = p[2];
    // white body
    brush.fill("#fdf5f8", 250);
    brush.fillBleed(0.08, "out");
    brush.fillTexture(0.4, 0.7);
    brush.beginShape(0.9);
    brush.vertex(cx - nx * 20, cy - ny * 20);
    brush.vertex(cx + ux * len * 0.55 - nx * hw, cy + uy * len * 0.55 - ny * hw);
    brush.vertex(cx + ux * len * 0.95 - nx * hw * 0.55, cy + uy * len * 0.95 - ny * hw * 0.55);
    brush.vertex(cx + ux * (len + 10), cy + uy * (len + 10));
    brush.vertex(cx + ux * len * 0.95 + nx * hw * 0.55, cy + uy * len * 0.95 + ny * hw * 0.55);
    brush.vertex(cx + ux * len * 0.55 + nx * hw, cy + uy * len * 0.55 + ny * hw);
    brush.vertex(cx + nx * 20, cy + ny * 20);
    brush.endShape(true);
    // pink midtone rising from base
    brush.fill("#e88cbc", 230);
    brush.fillBleed(0.2, "out");
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.85);
    brush.vertex(cx - nx * 18, cy - ny * 18);
    brush.vertex(cx + ux * len * 0.45 - nx * hw * 0.8, cy + uy * len * 0.45 - ny * hw * 0.8);
    brush.vertex(cx + ux * len * 0.7, cy + uy * len * 0.7);
    brush.vertex(cx + ux * len * 0.45 + nx * hw * 0.8, cy + uy * len * 0.45 + ny * hw * 0.8);
    brush.vertex(cx + nx * 18, cy + ny * 18);
    brush.endShape(true);
    // magenta at the base
    brush.fill("#b00c62", 240);
    brush.fillBleed(0.12, "out");
    brush.beginShape(0.8);
    brush.vertex(cx - nx * 16, cy - ny * 16);
    brush.vertex(cx + ux * len * 0.3 - nx * hw * 0.5, cy + uy * len * 0.3 - ny * hw * 0.5);
    brush.vertex(cx + ux * len * 0.4, cy + uy * len * 0.4);
    brush.vertex(cx + ux * len * 0.3 + nx * hw * 0.5, cy + uy * len * 0.3 + ny * hw * 0.5);
    brush.vertex(cx + nx * 16, cy + ny * 16);
    brush.endShape(true);
  }
  brush.fill("#5c0a30", 245);
  brush.fillBleed(0.1, "out");
  brush.circle(cx, cy - 15, 26, true);
  brush.fill("#f2c230", 240);
  brush.circle(cx, cy - 55, 12, true);
  // closed bud
  brush.fill("#fdf5f8", 250);
  brush.fillBleed(0.08, "out");
  brush.beginShape(0.9);
  brush.vertex(478, 210); brush.vertex(448, 140); brush.vertex(476, 30); brush.vertex(515, 135); brush.vertex(504, 208);
  brush.endShape(true);
  brush.fill("#c2156f", 240);
  brush.fillBleed(0.15, "out");
  brush.beginShape(0.9);
  brush.vertex(480, 206); brush.vertex(460, 150); brush.vertex(474, 70); brush.vertex(492, 150); brush.vertex(500, 204);
  brush.endShape(true);
  brush.fill("#4f6a18", 245);
  brush.fillBleed(0.06, "out");
  brush.beginShape(0.6);
  brush.vertex(472, 222); brush.vertex(464, 186); brush.vertex(500, 192); brush.vertex(508, 222);
  brush.endShape(true);
}
