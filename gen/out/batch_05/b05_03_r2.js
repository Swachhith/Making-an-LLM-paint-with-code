async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ebe0cc");
  randomSeed(33);
  brush.noStroke();
  // earthy ground wash, with a warmer sienna patch behind the bloom
  brush.fill("#d7bf9a", 150);
  brush.fillBleed(0.5);
  brush.fillTexture(0.6, 0.3);
  brush.circle(250, 260, 210, true);
  brush.fill("#b59d73", 175);
  brush.fillBleed(0.45);
  brush.fillTexture(0.6, 0.4);
  brush.beginShape(0.9);
  brush.vertex(20, 380); brush.vertex(300, 440); brush.vertex(590, 400);
  brush.vertex(580, 590); brush.vertex(20, 590);
  brush.endShape(true);
  // stems
  brush.fill("#584829", 220);
  brush.fillBleed(0.08);
  brush.beginShape(0.5);
  brush.vertex(245, 380); brush.vertex(256, 380); brush.vertex(282, 590); brush.vertex(269, 590);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(455, 260); brush.vertex(463, 262); brush.vertex(300, 590); brush.vertex(290, 588);
  brush.endShape(true);
  // olive leaves, two passes each
  let lv = [[255, 420, 200, 150], [265, 440, 150, 130], [390, 400, 320, 120], [270, 500, 20, 115]];
  for (let l of lv) {
    brush.fill("#737040", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(l[0], l[1]);
    brush.vertex(l[0] + l[3] * 0.5 * cos(l[2] - 22), l[1] + l[3] * 0.5 * sin(l[2] - 22));
    brush.vertex(l[0] + l[3] * cos(l[2]), l[1] + l[3] * sin(l[2]));
    brush.vertex(l[0] + l[3] * 0.5 * cos(l[2] + 22), l[1] + l[3] * 0.5 * sin(l[2] + 22));
    brush.endShape(true);
    brush.fill("#4f4d2a", 190);
    brush.fillBleed(0.1);
    brush.beginShape(0.7);
    brush.vertex(l[0], l[1]);
    brush.vertex(l[0] + l[3] * cos(l[2]), l[1] + l[3] * sin(l[2]));
    brush.vertex(l[0] + l[3] * 0.5 * cos(l[2] + 18), l[1] + l[3] * 0.5 * sin(l[2] + 18));
    brush.endShape(true);
  }
  // open bloom: loose skirt, ruffled rings, deep heart
  let cx = 240, cy = 260;
  brush.fill("#9c4b52", 185);
  brush.fillBleed(0.4);
  brush.fillTexture(0.6, 0.4);
  brush.circle(cx, cy + 10, 155, true);
  let rings = [[155, 12, "#8a3440", 205], [120, 10, "#74202f", 215], [86, 8, "#5d1627", 225], [54, 6, "#46101e", 235], [30, 5, "#3a0c18", 235]];
  for (let R of rings) {
    for (let i = 0; i < R[1]; i++) {
      let a = i * 360 / R[1] + random(-12, 12);
      let w = 360 / R[1] * 0.75;
      let rr = R[0] * random(0.85, 1.05);
      brush.fill(R[2], R[3] + random(-15, 10));
      brush.fillBleed(random(0.15, 0.3));
      brush.fillTexture(0.55, 0.5);
      brush.beginShape(0.8);
      brush.vertex(cx + rr * 0.25 * cos(a), cy + rr * 0.22 * sin(a));
      brush.vertex(cx + rr * 0.9 * cos(a - w), cy + rr * 0.8 * sin(a - w));
      brush.vertex(cx + rr * cos(a - w * 0.3), cy + rr * 0.88 * sin(a - w * 0.3));
      brush.vertex(cx + rr * 0.95 * cos(a + w * 0.2), cy + rr * 0.84 * sin(a + w * 0.2));
      brush.vertex(cx + rr * 0.88 * cos(a + w), cy + rr * 0.78 * sin(a + w));
      brush.endShape(true);
    }
  }
  // dusty highlights on a few outer ruffles
  brush.fill("#c28a86", 170);
  brush.fillBleed(0.12);
  brush.circle(cx - 110, cy - 50, 14, true);
  brush.circle(cx + 95, cy - 80, 12, true);
  brush.circle(cx - 40, cy + 125, 13, true);
  brush.fill("#b08642", 210);
  brush.fillBleed(0.1);
  brush.circle(cx + 5, cy - 3, 12, true);
  // closed bud
  brush.fill("#7f2c3c", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(460, 215, 46, true);
  brush.fill("#4e1221", 220);
  brush.fillBleed(0.15);
  brush.beginShape(0.8);
  brush.vertex(432, 200); brush.vertex(460, 172); brush.vertex(492, 205);
  brush.vertex(475, 245); brush.vertex(445, 242);
  brush.endShape(true);
  brush.fill("#b56a6a", 175);
  brush.fillBleed(0.1);
  brush.circle(446, 192, 10, true);
  brush.fill("#56542e", 225);
  brush.fillBleed(0.12);
  brush.beginShape(0.7);
  brush.vertex(418, 228); brush.vertex(460, 272); brush.vertex(500, 230);
  brush.vertex(475, 252); brush.vertex(460, 242); brush.vertex(440, 254);
  brush.endShape(true);
}
