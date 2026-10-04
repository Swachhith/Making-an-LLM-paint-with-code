async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf4e6");
  brush.noStroke();

  // turquoise sky, deeper at top
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#20b0c8", 190);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 430); brush.vertex(-20, 430);
  brush.endShape(true);
  brush.fill("#1060a8", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150); brush.vertex(-20, 190);
  brush.endShape(true);

  // distant mesas, pinkish
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.fill("#d0587a", 215);
  brush.beginShape(0.05);
  brush.vertex(-20, 420); brush.vertex(20, 420); brush.vertex(35, 380); brush.vertex(140, 378); brush.vertex(160, 420);
  brush.vertex(420, 420); brush.vertex(440, 395); brush.vertex(520, 392); brush.vertex(540, 420); brush.vertex(620, 420);
  brush.vertex(620, 440); brush.vertex(-20, 440);
  brush.endShape(true);

  // big near mesa and a butte, burnt orange, jagged steps
  brush.fill("#e04a10", 245);
  brush.beginShape(0.05);
  brush.vertex(180, 440); brush.vertex(200, 400); brush.vertex(215, 395); brush.vertex(228, 330); brush.vertex(250, 322);
  brush.vertex(360, 320); brush.vertex(372, 336); brush.vertex(385, 340); brush.vertex(398, 400); brush.vertex(420, 440);
  brush.endShape(true);
  brush.fill("#8a180a", 230);
  brush.beginShape(0.1);
  brush.vertex(330, 322); brush.vertex(360, 320); brush.vertex(372, 336); brush.vertex(385, 340); brush.vertex(398, 400); brush.vertex(420, 440); brush.vertex(345, 440);
  brush.endShape(true);
  // strata band
  brush.fill("#f0a040", 190);
  brush.beginShape(0.2);
  brush.vertex(222, 360); brush.vertex(380, 358); brush.vertex(384, 374); brush.vertex(219, 376);
  brush.endShape(true);

  // butte on right
  brush.fill("#c0300c", 245);
  brush.beginShape(0.05);
  brush.vertex(470, 440); brush.vertex(485, 360); brush.vertex(495, 350); brush.vertex(530, 350); brush.vertex(540, 362); brush.vertex(556, 440);
  brush.endShape(true);
  brush.fill("#6a1208", 225);
  brush.beginShape(0.1);
  brush.vertex(525, 350); brush.vertex(540, 362); brush.vertex(556, 440); brush.vertex(530, 440);
  brush.endShape(true);

  // spire on left
  brush.fill("#c8400e", 245);
  brush.beginShape(0.05);
  brush.vertex(70, 440); brush.vertex(85, 350); brush.vertex(102, 345); brush.vertex(115, 440);
  brush.endShape(true);

  // second pass deepening the big mesa's body
  brush.fill("#b8300e", 200);
  brush.beginShape(0.1);
  brush.vertex(200, 440); brush.vertex(230, 380); brush.vertex(390, 380); brush.vertex(410, 440);
  brush.endShape(true);

  // desert floor
  brush.fillBleed(0.3);
  brush.fill("#f0a040", 210);
  brush.beginShape(0.4);
  brush.vertex(-20, 435); brush.vertex(620, 435); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#c85a1a", 180);
  brush.beginShape(0.5);
  brush.vertex(-20, 510); brush.vertex(300, 490); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // mesa shadows on the floor
  brush.fill("#8a2a3a", 180);
  brush.beginShape(0.5);
  brush.vertex(340, 440); brush.vertex(430, 440); brush.vertex(470, 470); brush.vertex(360, 468);
  brush.endShape(true);
  // scrub
  brush.fill("#4a6a1a", 210);
  for (let s of [[60, 540], [150, 580], [420, 560], [520, 590], [260, 530]]) brush.circle(s[0], s[1], 12, 0.8);
}
