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
    brush.vertex(375, 455); brush.vertex(555, 448); brush.vertex(530, 492); brush.vertex(398, 496);
    brush.endShape(true);
  }
  brush.fill("#7a3218", 215);
  brush.beginShape(0.3);
  brush.vertex(392, 478); brush.vertex(540, 472); brush.vertex(528, 494); brush.vertex(400, 497);
  brush.endShape(true);
  // fisherman
  for (let p = 0; p < 2; p++) {
    brush.fill("#4f4a44", 235);
    brush.fillBleed(0.18);
    brush.circle(478, 395, 13, 0.3);
    brush.beginShape(0.4);
    brush.vertex(460, 410); brush.vertex(494, 410); brush.vertex(502, 455); brush.vertex(454, 455);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(466, 420); brush.vertex(440, 440); brush.vertex(448, 452); brush.vertex(476, 432);
    brush.endShape(true);
  }
  brush.fill("#b5502a", 230);
  brush.beginShape(0.2);
  brush.vertex(460, 390); brush.vertex(496, 390); brush.vertex(488, 376); brush.vertex(468, 376);
  brush.endShape(true);
  // rod: tapered wide soft shape
  brush.fill("#4f4a44", 210);
  brush.beginShape(0.3);
  brush.vertex(446, 445); brush.vertex(300, 300); brush.vertex(292, 308); brush.vertex(436, 456);
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
  brush.vertex(398, 500); brush.vertex(530, 496); brush.vertex(505, 555); brush.vertex(425, 558);
  brush.endShape(true);
}
