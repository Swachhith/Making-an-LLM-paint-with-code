async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1b1638");
  brush.noStroke();

  // tall vertical: a central panel with dark margins
  brush.fill("#0e0b20", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(-20, -20);
  brush.vertex(140, -20);
  brush.vertex(140, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(460, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 620);
  brush.vertex(460, 620);
  brush.endShape(true);

  // sky panel gradient: violet low, deep blue high
  brush.fill("#2c2a78", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(150, 20);
  brush.vertex(450, 20);
  brush.vertex(450, 300);
  brush.vertex(150, 300);
  brush.endShape(true);
  brush.fill("#5a3c8e", 180);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(150, 250);
  brush.vertex(450, 240);
  brush.vertex(450, 470);
  brush.vertex(150, 470);
  brush.endShape(true);
  brush.fill("#8a5aa8", 160);
  brush.fillBleed(0.35);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(150, 390);
  brush.vertex(450, 380);
  brush.vertex(450, 480);
  brush.vertex(150, 480);
  brush.endShape(true);

  // many stars in the panel
  for (let i = 0; i < 80; i++) {
    let x = 160 + (i * 97.3) % 280;
    let y = 30 + (i * 53.7) % 400;
    brush.fill("#eee8ff", 210 + (i % 3) * 15);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, 1 + (i % 5) * 0.6, 0.3);
  }
  // a few bright stars with halo
  for (let s of [[220, 90], [390, 150], [300, 60], [260, 250]]) {
    brush.fill("#b8a8f0", 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.3, 0.3);
    brush.circle(s[0], s[1], 9, 0.3);
    brush.fill("#ffffff", 240);
    brush.fillBleed(0.1);
    brush.fillTexture(0.2, 0.2);
    brush.circle(s[0], s[1], 3, 0.2);
  }

  // dark hills at the foot of the panel
  brush.fill("#140f2a", 245);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(140, 470);
  brush.vertex(220, 440);
  brush.vertex(300, 465);
  brush.vertex(380, 430);
  brush.vertex(460, 460);
  brush.vertex(460, 590);
  brush.vertex(140, 590);
  brush.endShape(true);
  brush.fill("#0a0718", 250);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(140, 510);
  brush.vertex(260, 490);
  brush.vertex(360, 515);
  brush.vertex(460, 500);
  brush.vertex(460, 590);
  brush.vertex(140, 590);
  brush.endShape(true);
}
