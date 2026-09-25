async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f3ee");
  brush.noStroke();
  // deep cobalt washes only around the flowers, leaving white where the bloom sits
  brush.fill("#1d3f9e", 225);
  brush.fillBleed(0.3, "out");
  brush.fillTexture(0.65, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(330, -20); brush.vertex(260, 60); brush.vertex(90, 110); brush.vertex(-20, 200);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(620, 330); brush.vertex(620, 620); brush.vertex(300, 620); brush.vertex(440, 540); brush.vertex(540, 420);
  brush.endShape(true);
  // dark branch
  brush.fill("#2c1a10", 235);
  brush.fillBleed(0.08, "out");
  brush.fillTexture(0.7, 0.7);
  brush.beginShape(0.4);
  brush.vertex(0, 590); brush.vertex(150, 500); brush.vertex(330, 420); brush.vertex(470, 260); brush.vertex(500, 180);
  brush.vertex(512, 186); brush.vertex(484, 268); brush.vertex(342, 434); brush.vertex(160, 518); brush.vertex(0, 606);
  brush.endShape(true);
  // open magnolia: large goblet of petals, magenta bases fading to white tips
  let cx = 230, cy = 400;
  let petals = [[-170, -110, 55], [170, -110, 55], [-110, -230, 50], [110, -230, 50], [-40, -270, 48], [45, -265, 48], [0, -200, 44]];
  for (let p of petals) {
    let tx = cx + p[0], ty = cy + p[1], hw = p[2];
    let len = sqrt(p[0] * p[0] + p[1] * p[1]);
    let ux = p[0] / len, uy = p[1] / len, nx = -uy, ny = ux;
    brush.fill("#f4d3e4", 215);
    brush.fillBleed(0.25, "out");
    brush.fillTexture(0.45, 0.6);
    brush.beginShape(0.9);
    brush.vertex(cx - nx * 20, cy - ny * 20);
    brush.vertex(cx + ux * len * 0.55 - nx * hw, cy + uy * len * 0.55 - ny * hw);
    brush.vertex(tx - nx * hw * 0.5, ty - ny * hw * 0.5);
    brush.vertex(tx + ux * 12, ty + uy * 12);
    brush.vertex(tx + nx * hw * 0.5, ty + ny * hw * 0.5);
    brush.vertex(cx + ux * len * 0.55 + nx * hw, cy + uy * len * 0.55 + ny * hw);
    brush.vertex(cx + nx * 20, cy + ny * 20);
    brush.endShape(true);
    brush.fill("#b3105f", 230);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.6, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx - nx * 18, cy - ny * 18);
    brush.vertex(cx + ux * len * 0.35 - nx * hw * 0.7, cy + uy * len * 0.35 - ny * hw * 0.7);
    brush.vertex(cx + ux * len * 0.5, cy + uy * len * 0.5);
    brush.vertex(cx + ux * len * 0.35 + nx * hw * 0.7, cy + uy * len * 0.35 + ny * hw * 0.7);
    brush.vertex(cx + nx * 18, cy + ny * 18);
    brush.endShape(true);
  }
  brush.fill("#7a0c3c", 235);
  brush.fillBleed(0.15, "out");
  brush.circle(cx, cy - 10, 30, true);
  // closed bud at branch tip
  brush.fill("#f4d3e4", 220);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.9);
  brush.vertex(480, 200); brush.vertex(450, 130); brush.vertex(478, 30); brush.vertex(515, 125); brush.vertex(505, 198);
  brush.endShape(true);
  brush.fill("#b3105f", 230);
  brush.fillBleed(0.25, "out");
  brush.beginShape(0.9);
  brush.vertex(482, 198); brush.vertex(462, 140); brush.vertex(476, 70); brush.vertex(490, 140); brush.vertex(500, 196);
  brush.endShape(true);
  brush.fill("#5a6b1f", 230);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.6);
  brush.vertex(474, 210); brush.vertex(466, 176); brush.vertex(500, 184); brush.vertex(508, 212);
  brush.endShape(true);
}
