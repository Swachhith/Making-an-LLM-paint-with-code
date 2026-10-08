async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e2d2");
  brush.noStroke();

  // dusky sky: warm violet fading to indigo
  brush.fill("#8a7fb3", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(400, 250); brush.vertex(200, 220); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#5a4f8a", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 250); brush.vertex(620, 250); brush.vertex(620, 400); brush.vertex(450, 420); brush.vertex(250, 390); brush.vertex(-20, 400);
  brush.endShape(true);

  // ground: ochre with a darker pass
  brush.fill("#c99a4a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8a5a2a", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // baobab: wide buttress roots, pale bark, crown of small rounded leaves
  brush.fill("#e8dcb8", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(300, 420); brush.vertex(300, 120); brush.vertex(320, 60); brush.vertex(380, 80); brush.vertex(400, 200); brush.vertex(380, 300); brush.vertex(300, 300);
  brush.endShape(true);
  brush.fill("#d9c29a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(300, 420); brush.vertex(300, 120); brush.vertex(240, 60); brush.vertex(180, 80); brush.vertex(160, 200); brush.vertex(180, 300); brush.vertex(300, 300);
  brush.endShape(true);
  brush.fill("#d9c29a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(300, 420); brush.vertex(300, 120); brush.vertex(360, 60); brush.vertex(420, 80); brush.vertex(440, 200); brush.vertex(420, 300); brush.vertex(300, 300);
  brush.endShape(true);
  // buttress roots spreading wide
  brush.fill("#c9b08a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(300, 420); brush.vertex(200, 420); brush.vertex(180, 500); brush.vertex(230, 520); brush.vertex(260, 430);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(300, 420); brush.vertex(400, 420); brush.vertex(420, 500); brush.vertex(370, 520); brush.vertex(340, 430);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(300, 420); brush.vertex(200, 420); brush.vertex(170, 470); brush.vertex(210, 500); brush.vertex(240, 440);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(300, 420); brush.vertex(400, 420); brush.vertex(430, 470); brush.vertex(390, 500); brush.vertex(360, 440);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(300, 420); brush.vertex(230, 420); brush.vertex(220, 460); brush.vertex(250, 490); brush.vertex(270, 430);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(300, 420); brush.vertex(370, 420); brush.vertex(380, 460); brush.vertex(350, 490); brush.vertex(330, 430);
  brush.endShape(true);

  // crown: many small rounded leaves, darker
  for (let i = 0; i < 18; i++) {
    const a = i * 20 + 10;
    const r = 130 + (i % 3) * 20;
    brush.fill("#6f5c44", 215);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(300, 200);
    brush.vertex(300 + cos(a - 25) * r, 200 + sin(a - 25) * r);
    brush.vertex(300 + cos(a) * r * 0.85, 200 + sin(a) * r * 0.85);
    brush.vertex(300 + cos(a + 25) * r, 200 + sin(a + 25) * r);
    brush.endShape(true);
  }
  // a few taller leaves
  brush.fill("#5a4a3a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(300, 230); brush.vertex(310, 100); brush.vertex(350, 110); brush.vertex(340, 240); brush.vertex(300, 235);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(300, 240); brush.vertex(330, 115); brush.vertex(370, 110); brush.vertex(360, 245); brush.vertex(300, 240);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(300, 245); brush.vertex(335, 115); brush.vertex(375, 120); brush.vertex(365, 250); brush.vertex(300, 245);
  brush.endShape(true);
  // a tiny second crown
  brush.fill("#5a4a3a", 180);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(300, 280); brush.vertex(315, 160); brush.vertex(345, 165); brush.vertex(335, 285); brush.vertex(300, 282);
  brush.endShape(true);
}
