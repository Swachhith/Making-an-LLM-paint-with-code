async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6eac4");
  brush.noStroke();

  // warm sky, two passes
  brush.fill("#f3c98a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 200); brush.vertex(400, 220); brush.vertex(0, 180);
  brush.endShape(true);
  brush.fill("#eab070", 160);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 120); brush.vertex(300, 130); brush.vertex(0, 100);
  brush.endShape(true);

  // far hills, ochre
  brush.fill("#e8a850", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(0, 260); brush.vertex(150, 240); brush.vertex(300, 260); brush.vertex(450, 245); brush.vertex(600, 270); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#d88a3a", 160);
  brush.beginShape(0.7);
  brush.vertex(250, 300); brush.vertex(350, 285); brush.vertex(450, 305); brush.vertex(450, 600); brush.vertex(250, 600);
  brush.endShape(true);

  // foreground meadow
  brush.fill("#e8c88a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 400); brush.vertex(600, 400); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // tall grass tufts
  for (let i = 0; i < 30; i++) {
    const x = (i * 600) / 30;
    const h = 40 + i * 3;
    brush.fill("#7f9a4a", 200);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(x, 400); brush.vertex(x + 3, 400 - h); brush.vertex(x + 12, 400 - h * 0.7); brush.vertex(x + 8, 400);
    brush.endShape(true);
  }

  // cottage: warm paper front, red roof
  brush.fill("#f7e8d2", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(220, 420); brush.vertex(380, 420); brush.vertex(380, 480); brush.vertex(220, 480);
  brush.endShape(true);
  brush.fill("#e8d4b8", 220);
  brush.beginShape(0.1);
  brush.vertex(230, 425); brush.vertex(240, 425); brush.vertex(240, 475); brush.vertex(230, 475);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(370, 425); brush.vertex(380, 425); brush.vertex(380, 475); brush.vertex(370, 475);
  brush.endShape(true);

  // chimney
  brush.fill("#d4b898", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(252, 360); brush.vertex(268, 360); brush.vertex(268, 300); brush.vertex(252, 300);
  brush.endShape(true);
  // smoke
  brush.fill("#b8a88a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(260, 290); brush.vertex(280, 270); brush.vertex(300, 285); brush.vertex(270, 300);
  brush.endShape(true);

  // red roof, two passes
  brush.fill("#c8204a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(220, 390); brush.vertex(380, 390); brush.vertex(380, 420); brush.vertex(220, 420);
  brush.endShape(true);
  brush.fill("#a8103a", 200);
  brush.beginShape(0.3);
  brush.vertex(230, 400); brush.vertex(370, 400); brush.vertex(370, 425); brush.vertex(230, 425);
  brush.endShape(true);

  // windows
  brush.fill("#f7e8d2", 240);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(242, 435); brush.vertex(262, 435); brush.vertex(262, 462); brush.vertex(242, 462);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(318, 435); brush.vertex(338, 435); brush.vertex(338, 462); brush.vertex(318, 462);
  brush.endShape(true);
  // lit windows
  brush.fill("#f28a3a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(246, 440); brush.vertex(258, 440); brush.vertex(258, 458); brush.vertex(246, 458);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(322, 440); brush.vertex(334, 440); brush.vertex(334, 458); brush.vertex(322, 458);
  brush.endShape(true);

  // door
  brush.fill("#8a3a1a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.1);
  brush.vertex(262, 475); brush.vertex(338, 475); brush.vertex(338, 515); brush.vertex(262, 515);
  brush.endShape(true);
  // path
  brush.fill("#c89a5a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(200, 520); brush.vertex(400, 520); brush.vertex(400, 600); brush.vertex(200, 600);
  brush.endShape(true);
}
