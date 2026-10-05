async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1e6d4");
  brush.noStroke();
  brush.fill("#e89a30", 180); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5); brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 300); brush.vertex(-10, 300); brush.endShape(true);
  brush.fill("#d8502a", 190);
  brush.beginShape(0.5); brush.vertex(100, 40); brush.vertex(300, 10); brush.vertex(500, 60); brush.vertex(450, 220); brush.vertex(150, 220); brush.endShape(true);
  brush.fill("#8a2a1c", 170);
  brush.circle(300, 90, 70, 0.8);
  // mountain: layered dark passes
  brush.fill("#2e1a16", 215); brush.fillBleed(0.2);
  brush.beginShape(0.25);
  brush.vertex(30, 300); brush.vertex(190, 190); brush.vertex(262, 128); brush.vertex(300, 140); brush.vertex(340, 124); brush.vertex(420, 190); brush.vertex(570, 300);
  brush.endShape(true);
  brush.fill("#180e0c", 215);
  brush.beginShape(0.25);
  brush.vertex(150, 300); brush.vertex(262, 134); brush.vertex(340, 130); brush.vertex(470, 300);
  brush.endShape(true);
  // lava river + glow
  brush.fill("#f05020", 240); brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(272, 132); brush.vertex(330, 128); brush.vertex(322, 190); brush.vertex(345, 245); brush.vertex(368, 300); brush.vertex(318, 300); brush.vertex(300, 240); brush.vertex(285, 190);
  brush.endShape(true);
  brush.fill("#ffb02a", 215);
  brush.beginShape(0.6); brush.vertex(285, 132); brush.vertex(320, 130); brush.vertex(312, 180); brush.vertex(300, 180); brush.endShape(true);
  brush.fill("#ffb02a", 180); brush.circle(300, 124, 40, 0.7);
  brush.fill("#e8461c", 190); brush.circle(250, 150, 12, 0.8); brush.circle(355, 148, 10, 0.8);
  // water, mirrored
  brush.fill("#4a2218", 170); brush.fillBleed(0.3);
  brush.beginShape(0.4); brush.vertex(-10, 300); brush.vertex(610, 300); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.fill("#2e1a16", 205);
  brush.beginShape(0.5);
  brush.vertex(30, 304); brush.vertex(190, 410); brush.vertex(262, 472); brush.vertex(300, 462); brush.vertex(340, 476); brush.vertex(420, 410); brush.vertex(570, 304);
  brush.vertex(470, 304); brush.vertex(340, 440); brush.vertex(262, 440); brush.vertex(150, 304);
  brush.endShape(true);
  brush.fill("#e8461c", 205);
  brush.beginShape(0.6);
  brush.vertex(318, 304); brush.vertex(368, 304); brush.vertex(345, 360); brush.vertex(322, 410); brush.vertex(330, 478); brush.vertex(285, 470); brush.vertex(300, 400); brush.vertex(300, 350);
  brush.endShape(true);
  brush.fill("#ffb02a", 150);
  brush.beginShape(0.5); brush.vertex(285, 460); brush.vertex(335, 460); brush.vertex(350, 490); brush.vertex(272, 490); brush.endShape(true);
  brush.fill("#e89a30", 150);
  brush.beginShape(0.5); brush.vertex(-10, 520); brush.vertex(610, 535); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
}
