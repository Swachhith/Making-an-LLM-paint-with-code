async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf8f0");
  brush.noStroke();
  // soft blue-green wash behind so the white petals are shaped by what surrounds them
  brush.fill("#bccfc6", 215);
  brush.fillBleed(0.45, "out");
  brush.fillTexture(0.55, 0.35);
  brush.beginShape(0.9);
  brush.vertex(250, 60); brush.vertex(560, 40); brush.vertex(600, 300); brush.vertex(520, 470); brush.vertex(330, 450); brush.vertex(240, 300);
  brush.endShape(true);
  // stem, curving up from bottom-left
  brush.fill("#5f8a4e", 235);
  brush.fillBleed(0.06, "out");
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.5);
  brush.vertex(110, 600); brush.vertex(150, 470); brush.vertex(215, 360); brush.vertex(232, 368); brush.vertex(168, 478); brush.vertex(128, 600);
  brush.endShape(true);
  brush.fill("#79a262", 225);
  brush.fillBleed(0.15, "out");
  brush.beginShape(0.7);
  brush.vertex(155, 480); brush.vertex(70, 380); brush.vertex(30, 350); brush.vertex(85, 420); brush.vertex(150, 500);
  brush.endShape(true);
  // trumpet tube: narrow at the stem, flaring right
  brush.fill("#e9ecd8", 245);
  brush.fillBleed(0.1, "out");
  brush.fillTexture(0.4, 0.6);
  brush.beginShape(0.8);
  brush.vertex(215, 368); brush.vertex(300, 300); brush.vertex(380, 245); brush.vertex(410, 330); brush.vertex(330, 345); brush.vertex(232, 380);
  brush.endShape(true);
  // tube shading along the bottom
  brush.fill("#a9b58e", 225);
  brush.fillBleed(0.15, "out");
  brush.beginShape(0.8);
  brush.vertex(222, 375); brush.vertex(320, 335); brush.vertex(395, 320); brush.vertex(330, 352); brush.vertex(235, 384);
  brush.endShape(true);
  // upper petal, recurving backward
  brush.fill("#fbf9f2", 250);
  brush.fillBleed(0.08, "out");
  brush.fillTexture(0.35, 0.7);
  brush.beginShape(0.85);
  brush.vertex(360, 260); brush.vertex(420, 170); brush.vertex(500, 100); brush.vertex(565, 95); brush.vertex(535, 130); brush.vertex(470, 175); brush.vertex(420, 265);
  brush.endShape(true);
  brush.fill("#b7b6c9", 215);
  brush.fillBleed(0.12, "out");
  brush.beginShape(0.8);
  brush.vertex(370, 255); brush.vertex(430, 175); brush.vertex(500, 110); brush.vertex(450, 175); brush.vertex(395, 262);
  brush.endShape(true);
  // middle petal pointing straight out
  brush.fill("#faf6ec", 250);
  brush.fillBleed(0.08, "out");
  brush.beginShape(0.85);
  brush.vertex(380, 260); brush.vertex(470, 230); brush.vertex(560, 225); brush.vertex(590, 250); brush.vertex(545, 262); brush.vertex(460, 290); brush.vertex(395, 305);
  brush.endShape(true);
  // lower petal, curling down
  brush.fill("#f8f2e6", 250);
  brush.beginShape(0.85);
  brush.vertex(385, 305); brush.vertex(470, 320); brush.vertex(540, 360); brush.vertex(565, 420); brush.vertex(525, 390); brush.vertex(450, 355); brush.vertex(380, 335);
  brush.endShape(true);
  brush.fill("#c3bdcf", 215);
  brush.fillBleed(0.12, "out");
  brush.beginShape(0.8);
  brush.vertex(390, 320); brush.vertex(470, 345); brush.vertex(530, 385); brush.vertex(460, 335);
  brush.endShape(true);
  // blush and midrib lines
  brush.fill("#efc0bf", 200);
  brush.fillBleed(0.3, "out");
  brush.circle(470, 262, 26, true);
  brush.fill("#b7c47e", 215);
  brush.fillBleed(0.08, "out");
  brush.beginShape(0.6);
  brush.vertex(385, 280); brush.vertex(540, 244); brush.vertex(541, 248); brush.vertex(386, 286);
  brush.endShape(true);
  // stamens arcing out past the petals
  let tips = [[520, 200], [540, 212], [510, 220], [548, 192], [530, 230], [555, 205]];
  for (let t of tips) {
    brush.fill("#a6a052", 230);
    brush.fillBleed(0.02, "out");
    brush.beginShape(0.4);
    brush.vertex(400, 285); brush.vertex((400 + t[0]) / 2, t[1] + 10); brush.vertex(t[0], t[1]); brush.vertex(t[0] + 1, t[1] + 4); brush.vertex((400 + t[0]) / 2, t[1] + 15); brush.vertex(402, 290);
    brush.endShape(true);
    brush.fill("#9c3a17", 240);
    brush.circle(t[0], t[1], 8, true);
  }
}
