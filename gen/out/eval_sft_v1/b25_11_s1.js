async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e0d4");
  brush.noStroke();

  // dusky sky, violet fading to indigo
  brush.fill("#a98fb0", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 260); brush.vertex(420, 290); brush.vertex(350, 260); brush.vertex(200, 290); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#6f4f7a", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 260); brush.vertex(200, 290); brush.vertex(350, 260); brush.vertex(420, 290); brush.vertex(620, 260); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // field: warm ochre fading to brownish
  brush.fill("#c9a86e", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 260); brush.vertex(620, 260); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8a6a44", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 420); brush.vertex(200, 400); brush.vertex(620, 430); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // baobab: huge bulbous trunk and crown
  brush.fill("#5e4a2a", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(290, 290); brush.vertex(350, 290); brush.vertex(350, 360); brush.vertex(300, 360); brush.vertex(300, 520); brush.vertex(260, 520); brush.vertex(260, 360); brush.vertex(210, 360); brush.vertex(210, 290);
  brush.endShape(true);
  brush.fill("#3a281a", 225);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(290, 290); brush.vertex(350, 290); brush.vertex(350, 360); brush.vertex(300, 360); brush.vertex(300, 520); brush.vertex(260, 520); brush.vertex(260, 360); brush.vertex(210, 360); brush.vertex(210, 290);
  brush.endShape(true);
  // crown: wide, shallow, many rounded lobes
  for (let i = 0; i < 11; i++) {
    const a = i * 360 / 11;
    const R = 210;
    brush.fill("#5a4a30", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(290 + cos(a - 20) * 10, 290 + sin(a - 20) * 10);
    brush.vertex(290 + cos(a) * R * 0.6, 290 + sin(a) * R * 0.6);
    brush.vertex(290 + cos(a) * R * 0.95, 290 + sin(a) * R * 0.95);
    brush.vertex(290 + cos(a + 20) * R * 0.95, 290 + sin(a + 20) * R * 0.95);
    brush.vertex(290 + cos(a + 20) * R * 0.6, 290 + sin(a + 20) * R * 0.6);
    brush.endShape(true);
  }
  // darker crown shadow
  brush.fill("#3a2a1e", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(260, 260); brush.vertex(340, 260); brush.vertex(340, 320); brush.vertex(260, 320);
  brush.endShape(true);

  // silhouettes of distant trees
  brush.fill("#3a2a1e", 225);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(50, 340); brush.vertex(110, 340); brush.vertex(110, 300); brush.vertex(140, 300); brush.vertex(140, 340);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(400, 350); brush.vertex(460, 350); brush.vertex(460, 310); brush.vertex(490, 310); brush.vertex(490, 350);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(520, 340); brush.vertex(570, 340); brush.vertex(570, 315); brush.vertex(590, 315); brush.vertex(590, 340);
  brush.endShape(true);
  // a few grazing animals
  brush.fill("#3a2a1e", 225);
  brush.fillBleed(0.25);
  brush.circle(180, 470, 14, 0.3);
  brush.circle(200, 485, 8, 0.3);
  brush.circle(450, 460, 14, 0.3);
  brush.circle(470, 475, 8, 0.3);
  // a lone figure
  brush.fill("#3a2a1e", 225);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(500, 420); brush.vertex(525, 420); brush.vertex(525, 440); brush.vertex(500, 440);
  brush.endShape(true);
  brush.circle(512, 440, 4, 0.3);
}
