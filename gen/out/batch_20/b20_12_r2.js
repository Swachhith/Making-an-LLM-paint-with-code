async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2efe8");
  brush.noStroke();

  // teal + rust + warm grey; horizon high, most of canvas empty water
  brush.fill("#a8a39a", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 120); brush.vertex(-20, 150);
  brush.endShape(true);
  brush.fill("#a8a39a", 190);
  brush.beginShape(0.5);
  brush.vertex(-20, 160); brush.vertex(120, 140); brush.vertex(260, 155); brush.vertex(400, 145); brush.vertex(620, 158); brush.vertex(620, 180); brush.vertex(-20, 182);
  brush.endShape(true);

  brush.fill("#8fb5b0", 175);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 178); brush.vertex(620, 176); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#5f9892", 165);
  brush.beginShape(0.7);
  brush.vertex(-20, 380); brush.vertex(620, 360); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#3f7a74", 150);
  brush.beginShape(0.7);
  brush.vertex(-20, 520); brush.vertex(620, 500); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // pale glints left: a few wide ripple strokes
  brush.fill("#5f9892", 170);
  for (const r of [[60, 260, 140], [200, 320, 90], [80, 440, 160], [260, 560, 110]]) {
    brush.beginShape(0.5);
    brush.vertex(r[0], r[1]); brush.vertex(r[0] + r[2], r[1] - 4); brush.vertex(r[0] + r[2] + 5, r[1] + 12); brush.vertex(r[0] + 5, r[1] + 16);
    brush.endShape(true);
  }

  // boat lower right third
  for (let p = 0; p < 2; p++) {
    brush.fill("#b5502a", 230);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.45);
    brush.beginShape(0.3);
    brush.vertex(346, 450); brush.vertex(580, 441); brush.vertex(548, 499); brush.vertex(376, 504);
    brush.endShape(true);
  }
  brush.fill("#7a3218", 215);
  brush.beginShape(0.3);
  brush.vertex(369, 480); brush.vertex(561, 473); brush.vertex(545, 501); brush.vertex(379, 505);
  brush.endShape(true);
  // fisherman
  for (let p = 0; p < 2; p++) {
    brush.fill("#4f4a44", 235);
    brush.fillBleed(0.18);
    brush.circle(480, 372, 17, 0.3);
    brush.beginShape(0.4);
    brush.vertex(457, 392); brush.vertex(501, 392); brush.vertex(512, 450); brush.vertex(449, 450);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(465, 405); brush.vertex(431, 431); brush.vertex(441, 447); brush.vertex(478, 421);
    brush.endShape(true);
  }
  brush.fill("#b5502a", 230);
  brush.beginShape(0.2);
  brush.vertex(457, 366); brush.vertex(504, 366); brush.vertex(493, 348); brush.vertex(467, 348);
  brush.endShape(true);
  // rod: tapered wide soft shape
  brush.fill("#4f4a44", 210);
  brush.beginShape(0.3);
  brush.vertex(439, 438); brush.vertex(249, 249); brush.vertex(239, 259); brush.vertex(426, 452);
  brush.endShape(true);
  // line
  brush.fill("#4f4a44", 150);
  brush.circle(296, 330, 3, 0.2);
  brush.circle(298, 360, 3, 0.2);
  brush.circle(300, 390, 3, 0.2);
  brush.circle(302, 420, 5, 0.3);
  // reflection
  brush.fill("#7a3218", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(380, 508); brush.vertex(550, 503); brush.vertex(520, 580); brush.vertex(410, 584);
  brush.endShape(true);
}
