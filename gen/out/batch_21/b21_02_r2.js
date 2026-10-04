async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eee6d6");
  brush.noStroke();

  // faint warm-grey air wash over the upper page so it isn't dead paper
  brush.fill("#d8cbb0", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(400, -20); brush.vertex(300, 200); brush.vertex(-20, 320);
  brush.endShape(true);

  // far low hills, faint, to hold the empty left half together
  brush.fill("#b3a98e", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 450); brush.vertex(60, 420); brush.vertex(160, 430); brush.vertex(260, 410); brush.vertex(360, 440); brush.vertex(360, 460); brush.vertex(-20, 470);
  brush.endShape(true);

  // ground sweeping low
  brush.fill("#bfa373", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 450); brush.vertex(220, 440); brush.vertex(440, 450); brush.vertex(620, 436); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8e8558", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(260, 470); brush.vertex(620, 456); brush.vertex(620, 580); brush.vertex(330, 540);
  brush.endShape(true);

  // trunk at the right edge
  brush.fill("#5a4535", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(480, 480); brush.vertex(530, 484); brush.vertex(520, 360); brush.vertex(532, 230); brush.vertex(500, 226); brush.vertex(490, 360);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(500, 300); brush.vertex(430, 230); brush.vertex(414, 244); brush.vertex(494, 326);
  brush.endShape(true);
  brush.fill("#3c2e24", 200);
  brush.beginShape(0.3);
  brush.vertex(510, 480); brush.vertex(530, 484); brush.vertex(520, 360); brush.vertex(510, 360);
  brush.endShape(true);

  // canopy off the top-right, olive and umber
  brush.fill("#7f8352", 195);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.9);
  brush.vertex(330, 220); brush.vertex(350, 120); brush.vertex(430, 40); brush.vertex(560, 20); brush.vertex(630, 80); brush.vertex(630, 280); brush.vertex(520, 280); brush.vertex(410, 270);
  brush.endShape(true);
  brush.fill("#555e34", 205);
  brush.fillBleed(0.25);
  brush.beginShape(0.9);
  brush.vertex(400, 240); brush.vertex(420, 150); brush.vertex(500, 90); brush.vertex(600, 110); brush.vertex(620, 230); brush.vertex(540, 262);
  brush.endShape(true);
  brush.fill("#a58c54", 170);
  brush.circle(376, 180, 26, 0.6);
  brush.circle(452, 84, 22, 0.6);
  brush.fill("#3f4a2a", 190);
  brush.circle(560, 200, 30, 0.6);

  // shade under the tree
  brush.fill("#5e583a", 205);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(360, 482); brush.vertex(610, 470); brush.vertex(620, 512); brush.vertex(380, 512);
  brush.endShape(true);

  // the reader, larger: seated against the trunk, legs out, book in lap
  // legs stretched forward
  brush.fill("#4b4a50", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(470, 452); brush.vertex(470, 482); brush.vertex(370, 490); brush.vertex(366, 468);
  brush.endShape(true);
  brush.fill("#3a2e28", 225); // shoes
  brush.circle(366, 480, 10, 0.3);
  // torso in rust
  brush.fill("#9a5a38", 225);
  brush.fillBleed(0.18);
  brush.beginShape(0.35);
  brush.vertex(460, 390); brush.vertex(492, 388); brush.vertex(500, 470); brush.vertex(456, 474);
  brush.endShape(true);
  brush.fill("#7a4428", 180);
  brush.beginShape(0.35);
  brush.vertex(480, 392); brush.vertex(492, 390); brush.vertex(500, 470); brush.vertex(484, 470);
  brush.endShape(true);
  // arm reaching to the book
  brush.fill("#9a5a38", 210);
  brush.beginShape(0.4);
  brush.vertex(462, 404); brush.vertex(430, 442); brush.vertex(446, 452); brush.vertex(474, 420);
  brush.endShape(true);
  // open book, cream pages with a shadowed gutter
  brush.fill("#e2d0a6", 235);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(410, 440); brush.vertex(438, 428); brush.vertex(462, 440); brush.vertex(462, 460); brush.vertex(436, 450); brush.vertex(410, 460);
  brush.endShape(true);
  brush.fill("#8a6a4a", 200);
  brush.circle(436, 444, 3, 0.2);
  // head bowed, hair
  brush.fill("#c8977a", 235);
  brush.fillBleed(0.12);
  brush.circle(468, 374, 15, 0.25);
  brush.fill("#3b2a22", 220);
  brush.beginShape(0.6);
  brush.vertex(458, 360); brush.vertex(480, 356); brush.vertex(488, 378); brush.vertex(476, 372); brush.vertex(462, 366);
  brush.endShape(true);
}
