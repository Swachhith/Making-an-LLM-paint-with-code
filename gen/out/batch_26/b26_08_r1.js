async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5f7f8");
  randomSeed(2688);
  brush.noStroke();

  // cobalt sky deepening toward the zenith
  brush.fill("#3a7ad8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 500); brush.vertex(-20, 500);
  brush.endShape(true);
  brush.fill("#1a44a8", 190);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 160); brush.vertex(300, 110); brush.vertex(-20, 180);
  brush.endShape(true);
  // a few white cumulus left as paper? paint shadow bellies under unpainted tops instead
  brush.fill("#8ab0e8", 160);
  brush.circle(90, 220, 40, true);
  brush.circle(540, 330, 34, true);

  // grassy bank, very close and tall
  brush.fill("#40a82c", 215);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 500); brush.vertex(200, 480); brush.vertex(420, 490); brush.vertex(620, 460);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1e7020", 210);
  brush.beginShape(0.6);
  brush.vertex(-20, 560); brush.vertex(300, 545); brush.vertex(620, 575); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // walls in strong upward perspective: vertical edges lean in toward the top
  brush.fill("#f2c46a", 205);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0);
  brush.vertex(60, 500); brush.vertex(380, 512); brush.vertex(362, 250); brush.vertex(120, 236);
  brush.endShape(true);
  brush.fill("#c47a30", 215);
  brush.beginShape(0);
  brush.vertex(380, 512); brush.vertex(570, 470); brush.vertex(520, 254); brush.vertex(362, 250);
  brush.endShape(true);
  // shadow under the eave
  brush.fill("#8a4a20", 190);
  brush.beginShape(0);
  brush.vertex(120, 236); brush.vertex(362, 250); brush.vertex(362, 290); brush.vertex(118, 276);
  brush.endShape(true);

  // red roof: the eave hangs over us, ridge far and small
  brush.fill("#e0281a", 220);
  brush.fillBleed(0.22);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0);
  brush.vertex(40, 245); brush.vertex(390, 262); brush.vertex(330, 120); brush.vertex(185, 112);
  brush.endShape(true);
  brush.fill("#b8120c", 210);
  brush.beginShape(0);
  brush.vertex(80, 235); brush.vertex(380, 250); brush.vertex(330, 140); brush.vertex(190, 130);
  brush.endShape(true);
  // gable end
  brush.fill("#96100c", 215);
  brush.beginShape(0);
  brush.vertex(362, 258); brush.vertex(545, 262); brush.vertex(440, 138);
  brush.endShape(true);
  brush.fill("#70080a", 205);
  brush.beginShape(0);
  brush.vertex(40, 245); brush.vertex(390, 262); brush.vertex(388, 282); brush.vertex(50, 264);
  brush.endShape(true);

  // chimney
  brush.fill("#6a2414", 225);
  brush.beginShape(0);
  brush.vertex(262, 124); brush.vertex(296, 126); brush.vertex(290, 50); brush.vertex(268, 52);
  brush.endShape(true);

  // door and windows, slightly keystoned
  brush.fill("#1a3a90", 230);
  brush.beginShape(0);
  brush.vertex(200, 506); brush.vertex(256, 508); brush.vertex(252, 390); brush.vertex(204, 388);
  brush.endShape(true);
  brush.fill("#20365e", 225);
  brush.beginShape(0);
  brush.vertex(128, 360); brush.vertex(182, 362); brush.vertex(180, 306); brush.vertex(132, 304);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(290, 366); brush.vertex(342, 368); brush.vertex(340, 312); brush.vertex(292, 310);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(420, 390); brush.vertex(490, 378); brush.vertex(482, 316); brush.vertex(416, 322);
  brush.endShape(true);

  // flowers and tall grass tufts in the foreground
  for (let k = 0; k < 16; k++) {
    brush.fill(k % 3 == 0 ? "#f0a018" : "#e82a3a", 230);
    brush.circle(60 + k * 32 + random(-8, 8), 510 + random(-6, 14), random(7, 12), true);
  }
  brush.fill("#145a18", 215);
  for (let k = 0; k < 9; k++) {
    let x = random(-10, 600);
    brush.beginShape(0.4);
    brush.vertex(x, 620); brush.vertex(x + 10, 540); brush.vertex(x + 26, 620);
    brush.endShape(true);
  }
}
