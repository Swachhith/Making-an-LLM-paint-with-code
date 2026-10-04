async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3e6");
  brush.noStroke();
  // a warm, uneven ground wash across the whole sheet
  brush.fill("#f2d3a2", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#eab98a", 150);
  brush.beginShape(0.9);
  brush.vertex(-20, 470); brush.vertex(250, 440); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a sunlit glow behind the figure, left paper cream
  brush.fill("#f6c98c", 160);
  brush.fillBleed(0.35);
  brush.circle(160, 180, 120, 0.7);
  brush.fill("#fbe2b8", 150);
  brush.circle(130, 150, 70, 0.6);
  // distant sea line on the far left
  brush.fill("#9fc2c4", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(330, 412); brush.vertex(330, 440); brush.vertex(-20, 450);
  brush.endShape(true);
  // the dress, a long loose shape on the right
  brush.fill("#e8886a", 190);
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(420, 265); brush.vertex(470, 262); brush.vertex(492, 330); brush.vertex(520, 470); brush.vertex(540, 560);
  brush.vertex(380, 565); brush.vertex(398, 460); brush.vertex(405, 330);
  brush.endShape(true);
  brush.fill("#d0654c", 190);
  brush.beginShape(0.6);
  brush.vertex(470, 290); brush.vertex(505, 460); brush.vertex(532, 555); brush.vertex(478, 558); brush.vertex(462, 400);
  brush.endShape(true);
  // arm
  brush.fill("#e0a27e", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(418, 280); brush.vertex(400, 340); brush.vertex(392, 400); brush.vertex(410, 402); brush.vertex(420, 345); brush.vertex(432, 300);
  brush.endShape(true);
  // far arm holding the brim
  brush.fill("#d4926e", 200);
  brush.beginShape(0.5);
  brush.vertex(478, 285); brush.vertex(505, 255); brush.vertex(520, 215); brush.vertex(534, 220); brush.vertex(520, 265); brush.vertex(490, 300);
  brush.endShape(true);
  // neck and face
  brush.fill("#e3a986", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(434, 240); brush.vertex(458, 240); brush.vertex(460, 268); brush.vertex(432, 268);
  brush.endShape(true);
  brush.circle(446, 222, 25, 0.3);
  brush.fill("#c9805e", 170);
  brush.circle(438, 230, 13, 0.4);
  // hair falling behind
  brush.fill("#7a4a2c", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(458, 205); brush.vertex(478, 215); brush.vertex(482, 262); brush.vertex(462, 272); brush.vertex(462, 230);
  brush.endShape(true);
  // wide straw hat brim
  brush.fill("#d9a14a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.7);
  brush.vertex(360, 212); brush.vertex(410, 188); brush.vertex(480, 184); brush.vertex(540, 196); brush.vertex(548, 210);
  brush.vertex(500, 218); brush.vertex(430, 222); brush.vertex(372, 222);
  brush.endShape(true);
  // crown
  brush.fill("#c98a34", 220);
  brush.beginShape(0.6);
  brush.vertex(418, 196); brush.vertex(424, 160); brush.vertex(462, 152); brush.vertex(488, 164); brush.vertex(486, 196);
  brush.endShape(true);
  // ribbon
  brush.fill("#b8423a", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(420, 182); brush.vertex(487, 180); brush.vertex(488, 196); brush.vertex(419, 198);
  brush.endShape(true);
  // brim shadow on the face
  brush.fill("#b77458", 160);
  brush.beginShape(0.6);
  brush.vertex(424, 214); brush.vertex(470, 214); brush.vertex(466, 232); brush.vertex(428, 230);
  brush.endShape(true);
  // cast shadow on the ground
  brush.fill("#c9926a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(380, 562); brush.vertex(545, 558); brush.vertex(470, 590); brush.vertex(300, 592);
  brush.endShape(true);
  // two distant birds in the open space
  for (const [bx, by] of [[140, 250], [185, 232]]) {
    brush.fill("#8a6a58", 200);
    brush.fillBleed(0.15);
    brush.beginShape(0.5);
    brush.vertex(bx - 12, by); brush.vertex(bx, by - 6); brush.vertex(bx + 12, by); brush.vertex(bx, by - 2);
    brush.endShape(true);
  }
}
