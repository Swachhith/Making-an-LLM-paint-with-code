async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#101a33");
  brush.noStroke();

  // milky way: a diagonal band of warm yellow haze across dark blue paper
  brush.fill("#d8b85a", 150);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 470);
  brush.vertex(120, 330);
  brush.vertex(320, 150);
  brush.vertex(500, -20);
  brush.vertex(620, -20);
  brush.vertex(460, 140);
  brush.vertex(240, 330);
  brush.vertex(60, 520);
  brush.endShape(true);
  brush.fill("#e8cf7a", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(60, 440);
  brush.vertex(220, 290);
  brush.vertex(400, 120);
  brush.vertex(540, -10);
  brush.vertex(560, 10);
  brush.vertex(420, 150);
  brush.vertex(240, 320);
  brush.vertex(90, 460);
  brush.endShape(true);
  // dark dust lane inside the band
  brush.fill("#1c2a52", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  brush.vertex(110, 420);
  brush.vertex(260, 280);
  brush.vertex(300, 250);
  brush.vertex(250, 300);
  brush.vertex(130, 430);
  brush.endShape(true);

  // star field
  for (let i = 0; i < 90; i++) {
    let x = (i * 137.5) % 600;
    let y = (i * 71.3 + (i % 7) * 23) % 420;
    brush.fill("#f4e3a0", 200 + (i % 3) * 20);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, 1 + (i % 4) * 0.7, 0.3);
  }

  // large moon, off-centre upper left
  brush.fill("#f2d77a", 240);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(150, 150, 85, 0.1);
  brush.fill("#f7e39a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.3);
  brush.circle(145, 145, 70, 0.1);
  // maria in blue-tinted yellow
  brush.fill("#c9b060", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(125, 130, 20, 0.5);
  brush.circle(170, 170, 16, 0.5);

  // mountains, the same dark blue deepened
  brush.fill("#0b1226", 245);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-20, 500);
  brush.vertex(80, 420);
  brush.vertex(160, 460);
  brush.vertex(280, 360);
  brush.vertex(380, 440);
  brush.vertex(470, 400);
  brush.vertex(620, 470);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#060a18", 250);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 540);
  brush.vertex(150, 500);
  brush.vertex(330, 530);
  brush.vertex(500, 490);
  brush.vertex(620, 520);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // moonlit rim on the tallest peak
  brush.fill("#8a7c4a", 170);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(280, 362);
  brush.vertex(250, 385);
  brush.vertex(265, 390);
  brush.endShape(true);
}
