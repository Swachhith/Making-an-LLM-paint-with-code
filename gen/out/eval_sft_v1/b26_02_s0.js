async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e2d4");
  brush.noStroke();
  // soft earthy ground wash, uneven
  brush.fill("#b8a88a", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(0, 470); brush.vertex(150, 440); brush.vertex(300, 470); brush.vertex(450, 430); brush.vertex(600, 460); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // stem
  brush.fill("#5a4a3a", 200);
  brush.fillBleed(0.15);
  brush.beginShape(0.3);
  brush.vertex(300, 540); brush.vertex(306, 540); brush.vertex(310, 600); brush.vertex(290, 600);
  brush.endShape(true);
  // leaf
  brush.fill("#6a624a", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.9);
  brush.vertex(230, 560); brush.vertex(270, 520); brush.vertex(330, 540); brush.vertex(290, 590); brush.vertex(220, 570);
  brush.endShape(true);
  // sepals: five broad, overlapping, slightly recurved
  for (let i = 0; i < 5; i++) {
    const a = i * 72 + 10;
    const r = 220;
    brush.fill("#7e5a42", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 22) * r * 0.8, 300 + sin(a - 22) * r * 0.8);
    brush.vertex(300 + cos(a - 6) * r, 300 + sin(a - 6) * r);
    brush.vertex(300 + cos(a + 6) * r, 300 + sin(a + 6) * r);
    brush.vertex(300 + cos(a + 22) * r * 0.8, 300 + sin(a + 22) * r * 0.8);
    brush.endShape(true);
  }
  // cup: three broad lobes, pale lilac, crinkled
  for (let i = 0; i < 3; i++) {
    const a = i * 120 + 20;
    brush.fill("#b796b0", 190);
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.85);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 12) * 230, 300 + sin(a - 12) * 230);
    brush.vertex(300 + cos(a - 4) * 260, 300 + sin(a - 4) * 260);
    brush.vertex(300 + cos(a + 4) * 260, 300 + sin(a + 4) * 260);
    brush.vertex(300 + cos(a + 12) * 230, 300 + sin(a + 12) * 230);
    brush.endShape(true);
  }
  // cup: three broad lobes, deeper violet, more opaque
  for (let i = 0; i < 3; i++) {
    const a = i * 120 + 20;
    brush.fill("#8a6a90", 215);
    brush.fillBleed(0.22);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.85);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 12) * 170, 300 + sin(a - 12) * 170);
    brush.vertex(300 + cos(a - 4) * 200, 300 + sin(a - 4) * 200);
    brush.vertex(300 + cos(a + 4) * 200, 300 + sin(a + 4) * 200);
    brush.vertex(300 + cos(a + 12) * 170, 300 + sin(a + 12) * 170);
    brush.endShape(true);
  }
  // heart-shaped notches at each lobe's base, deeper
  for (let i = 0; i < 3; i++) {
    const a = i * 120 + 20;
    brush.fill("#6a4a70", 225);
    brush.fillBleed(0.18);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.9);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 8) * 115, 300 + sin(a - 8) * 115);
    brush.vertex(300 + cos(a - 2) * 155, 300 + sin(a - 2) * 155);
    brush.vertex(300 + cos(a + 2) * 155, 300 + sin(a + 2) * 155);
    brush.vertex(300 + cos(a + 8) * 115, 300 + sin(a + 8) * 115);
    brush.endShape(true);
  }
  // centre: two dark hearts, overlapping
  brush.fill("#3a2a40", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(300, 300); brush.vertex(300 + 100, 250); brush.vertex(300 + 135, 300); brush.vertex(300 + 100, 350); brush.vertex(300, 300);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(300, 300); brush.vertex(250, 300 + 100); brush.vertex(300, 340); brush.vertex(300, 300);
  brush.endShape(true);
  // stamens: six pale tips
  for (let i = 0; i < 6; i++) {
    const a = i * 60 + 15;
    brush.fill("#c8b898", 200);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(300, 300); brush.vertex(300 + cos(a) * 140, 300 + sin(a) * 140); brush.vertex(300 + cos(a) * 145, 300 + sin(a) * 145); brush.vertex(300 + cos(a) * 140, 300 + sin(a) * 140);
    brush.endShape(true);
  }
  // dark anthers
  for (let i = 0; i < 6; i++) {
    const a = i * 60 + 15;
    brush.fill("#2a1828", 235);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(300 + cos(a) * 145, 300 + sin(a) * 145, 4, 0.3);
  }
  // subtle shadow on paper
  brush.fill("#a89a82", 160);
  brush.fillBleed(0.25);
  brush.circle(300, 300, 130, 0.4);
}
