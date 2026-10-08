async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e4d6");
  brush.noStroke();
  // earthy ground wash behind
  brush.fill("#b8a88c", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 600); brush.vertex(600, 600); brush.vertex(600, 450); brush.vertex(500, 300); brush.vertex(350, 250); brush.vertex(200, 320); brush.vertex(100, 450); brush.vertex(0, 600);
  brush.endShape(true);
  // stems
  brush.fill("#4a4a3a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(270, 470); brush.vertex(280, 470); brush.vertex(282, 600); brush.vertex(272, 600);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(320, 470); brush.vertex(330, 470); brush.vertex(332, 600); brush.vertex(322, 600);
  brush.endShape(true);
  // leaves
  brush.fill("#5a6a4a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(250, 460); brush.vertex(330, 460); brush.vertex(350, 530); brush.vertex(260, 540);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(360, 460); brush.vertex(280, 460); brush.vertex(260, 530); brush.vertex(350, 540);
  brush.endShape(true);
  // two broad petals, overlapping, pale lilac
  brush.fill("#a88fb8", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(300, 300); brush.vertex(300, 150); brush.vertex(420, 150); brush.vertex(430, 230); brush.vertex(330, 240);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(300, 300); brush.vertex(300, 450); brush.vertex(180, 450); brush.vertex(170, 370); brush.vertex(270, 360);
  brush.endShape(true);
  brush.fill("#8f7fb0", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(300, 300); brush.vertex(300, 150); brush.vertex(420, 150); brush.vertex(430, 230); brush.vertex(330, 240);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(300, 300); brush.vertex(300, 450); brush.vertex(180, 450); brush.vertex(170, 370); brush.vertex(270, 360);
  brush.endShape(true);
  // three side petals, deeper, arranged like a star
  for (let i = 0; i < 3; i++) {
    const a = i * 120 + 30;
    brush.fill("#7a628a", 225);
    brush.fillBleed(0.22);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(300, 300); brush.vertex(300 + cos(a - 45) * 150, 300 + sin(a - 45) * 150); brush.vertex(300 + cos(a - 15) * 150, 300 + sin(a - 15) * 150); brush.vertex(300 + cos(a + 15) * 150, 300 + sin(a + 15) * 150); brush.vertex(300 + cos(a + 45) * 150, 300 + sin(a + 45) * 150);
    brush.endShape(true);
  }
  // centre: green cup, then a darker star, then a dot
  brush.fill("#4a5a3a", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(300, 270); brush.vertex(325, 240); brush.vertex(350, 270); brush.vertex(325, 300);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(300, 300); brush.vertex(325, 270); brush.vertex(350, 300); brush.vertex(325, 330);
  brush.endShape(true);
  brush.fill("#2a3a2a", 240);
  brush.fillBleed(0.1);
  brush.fillTexture(0.4, 0.4);
  brush.circle(300, 300, 14, 0.3);
  // a few stamens
  for (let i = 0; i < 8; i++) {
    const a = i * 45 + 15;
    brush.fill("#b88a5a", 220);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(300, 300); brush.vertex(300 + cos(a) * 28, 300 + sin(a) * 28); brush.vertex(300 + cos(a) * 34, 300 + sin(a) * 34); brush.vertex(300 + cos(a) * 26, 300 + sin(a) * 26);
    brush.endShape(true);
  }
}
