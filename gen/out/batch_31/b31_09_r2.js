async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eee8d6");
  brush.noStroke();
  brush.fill("#b8b88a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5); brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 330); brush.vertex(-10, 330); brush.endShape(true);
  brush.fill("#8aa064", 190);
  brush.beginShape(0.5); brush.vertex(-10, 160); brush.vertex(200, 100); brush.vertex(420, 140); brush.vertex(610, 110); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  // terraces of tea bushes
  for (let i = 0; i < 5; i++) {
    brush.fill(i % 2 ? "#4a6a34" : "#5a7a3c", 185);
    brush.beginShape(0.6);
    brush.vertex(-10, 190 + i * 38); brush.vertex(150, 172 + i * 38); brush.vertex(330, 195 + i * 38); brush.vertex(610, 176 + i * 38);
    brush.vertex(610, 212 + i * 38); brush.vertex(330, 228 + i * 38); brush.vertex(-10, 224 + i * 38);
    brush.endShape(true);
  }
  // woman, large; background of bushes shows beside
  brush.fill("#6a4228", 230); brush.fillBleed(0.15);
  brush.beginShape(0.4); brush.vertex(220, 260); brush.vertex(300, 245); brush.vertex(375, 262); brush.vertex(355, 330); brush.vertex(240, 330); brush.endShape(true);
  brush.fill("#d4b05a", 235);
  brush.beginShape(0.4); brush.vertex(190, 215); brush.vertex(300, 140); brush.vertex(410, 215); brush.vertex(300, 240); brush.endShape(true);
  brush.fill("#a07a30", 190);
  brush.beginShape(0.4); brush.vertex(240, 215); brush.vertex(300, 178); brush.vertex(360, 215); brush.vertex(300, 228); brush.endShape(true);
  brush.fill("#9a4a30", 235);
  brush.beginShape(0.4); brush.vertex(120, 610); brush.vertex(150, 430); brush.vertex(220, 380); brush.vertex(300, 366); brush.vertex(390, 380); brush.vertex(455, 430); brush.vertex(485, 610); brush.endShape(true);
  brush.fill("#6a2a1c", 180);
  brush.beginShape(0.4); brush.vertex(290, 380); brush.vertex(385, 385); brush.vertex(450, 430); brush.vertex(470, 610); brush.vertex(380, 610); brush.vertex(350, 460); brush.endShape(true);
  brush.fill("#8a5a38", 235);
  brush.beginShape(0.4); brush.vertex(262, 330); brush.vertex(338, 330); brush.vertex(345, 374); brush.vertex(255, 374); brush.endShape(true);
  brush.fill("#c88a5a", 235); brush.circle(300, 282, 50, 0.3);
  brush.fill("#2a1c14", 210); brush.circle(286, 280, 3.5, 0.3); brush.circle(316, 280, 3.5, 0.3);
  brush.fill("#8a3a2a", 190); brush.circle(300, 302, 5, 0.3);
  // basket strap and leaves held in hand
  brush.fill("#c8a050", 200);
  brush.beginShape(0.5); brush.vertex(160, 470); brush.vertex(200, 440); brush.vertex(230, 520); brush.vertex(170, 530); brush.endShape(true);
  brush.fill("#6a9a3a", 215);
  for (let i = 0; i < 8; i++) brush.circle(180 + i * 18, 495 + (i % 3) * 8, 10, 0.6);
}
