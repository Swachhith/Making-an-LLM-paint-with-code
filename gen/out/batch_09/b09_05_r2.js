async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1dc");
  brush.noStroke();

  // warm evening sky
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.4);
  brush.fill("#f6b050", 215);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#f08050", 190);
  brush.beginShape(0.5);
  brush.vertex(-20, 150); brush.vertex(620, 180); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);

  // far hills, dusty lavender-gold
  brush.fill("#b0788a", 205);
  brush.beginShape(0.6);
  brush.vertex(-20, 300); brush.vertex(120, 260); brush.vertex(260, 285); brush.vertex(420, 250);
  brush.vertex(620, 280); brush.vertex(620, 360); brush.vertex(-20, 360);
  brush.endShape(true);

  // rolling fields, golden
  brush.fill("#e0a830", 225);
  brush.beginShape(0.6);
  brush.vertex(-20, 330); brush.vertex(200, 310); brush.vertex(400, 340); brush.vertex(620, 320);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8a9a28", 210);
  brush.beginShape(0.6);
  brush.vertex(-20, 430); brush.vertex(150, 400); brush.vertex(330, 440); brush.vertex(620, 410);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#5a6a1a", 210);
  brush.beginShape(0.6);
  brush.vertex(-20, 530); brush.vertex(250, 500); brush.vertex(620, 540); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // winding path toward cottage
  brush.fill("#e8c890", 190);
  brush.beginShape(0.7);
  brush.vertex(300, 620); brush.vertex(360, 620); brush.vertex(390, 500); brush.vertex(372, 400); brush.vertex(362, 400); brush.vertex(360, 500);
  brush.endShape(true);

  // hedgerows and far trees
  brush.fillBleed(0.25);
  brush.fill("#5a5a20", 200);
  for (let t of [[60, 335], [100, 330], [520, 320], [560, 326], [220, 420], [250, 425], [500, 470]]) brush.circle(t[0], t[1], 16, 0.7);
  brush.fill("#6a4a1a", 130);
  brush.beginShape(0.6);
  brush.vertex(-20, 432); brush.vertex(150, 402); brush.vertex(330, 442); brush.vertex(330, 458); brush.vertex(150, 420); brush.vertex(-20, 450);
  brush.endShape(true);

  // trees beside cottage
  brush.fill("#5a6a2a", 210);
  brush.circle(430, 345, 26, 0.6);
  brush.circle(450, 360, 20, 0.6);
  brush.fill("#3a4a1a", 180);
  brush.circle(438, 355, 16, 0.5);

  // cottage: warm wall, shadow side, red roof
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.fill("#f0d8a8", 220);
  brush.beginShape(0.05);
  brush.vertex(340, 360); brush.vertex(400, 360); brush.vertex(400, 395); brush.vertex(340, 395);
  brush.endShape(true);
  brush.fill("#c09070", 200);
  brush.beginShape(0.05);
  brush.vertex(380, 360); brush.vertex(400, 360); brush.vertex(400, 395); brush.vertex(380, 395);
  brush.endShape(true);
  brush.fill("#c8281e", 235);
  brush.beginShape(0.05);
  brush.vertex(332, 362); brush.vertex(352, 335); brush.vertex(392, 335); brush.vertex(408, 362);
  brush.endShape(true);
  brush.fill("#8a1414", 190);
  brush.beginShape(0.05);
  brush.vertex(372, 335); brush.vertex(392, 335); brush.vertex(408, 362); brush.vertex(385, 362);
  brush.endShape(true);
  brush.fill("#4a3020", 220);
  brush.circle(356, 382, 5, 0.1);

  // low sun glow
  brush.fillBleed(0.3);
  brush.fill("#ffc040", 210);
  brush.circle(130, 230, 50, 0.3);
  brush.fill("#ffe070", 220);
  brush.circle(130, 230, 28, 0.2);
}
