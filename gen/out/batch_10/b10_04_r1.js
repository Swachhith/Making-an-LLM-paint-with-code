async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f0e8");
  brush.noStroke();
  const warmA = "#f08a3c";
  const warmB = "#d9577a";
  const dark = "#2a2440";
  // sky, rose deepening upward, left paler round the sun
  brush.fill(warmB, 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 190); brush.vertex(400, 160); brush.vertex(200, 170); brush.vertex(-20, 200);
  brush.endShape(true);
  brush.fill(warmB, 170);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 80); brush.vertex(-20, 100);
  brush.endShape(true);
  brush.fill(warmA, 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 170); brush.vertex(200, 200); brush.vertex(620, 180); brush.vertex(620, 280); brush.vertex(-20, 280);
  brush.endShape(true);
  // sun rising: a ring of orange leaves a bright disc of paper
  brush.fill(warmA, 220);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(230, 230); brush.vertex(300, 200); brush.vertex(370, 230); brush.vertex(380, 275); brush.vertex(345, 262);
  brush.vertex(330, 240); brush.vertex(300, 230); brush.vertex(270, 240); brush.vertex(255, 262); brush.vertex(220, 275);
  brush.endShape(true);
  // treeline, dark, broken into mist on the right
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(dark, 215);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(-20, 290); brush.vertex(-20, 240); brush.vertex(30, 225); brush.vertex(60, 245); brush.vertex(100, 230);
    brush.vertex(150, 256); brush.vertex(200, 268); brush.vertex(240, 280); brush.vertex(240, 290);
    brush.endShape(true);
  }
  brush.fill(dark, 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(360, 290); brush.vertex(420, 270); brush.vertex(500, 262); brush.vertex(620, 250); brush.vertex(620, 290);
  brush.endShape(true);
  // water, mirrored colours: orange near shore, rose further out
  brush.fill(warmA, 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 290); brush.vertex(620, 290); brush.vertex(620, 400); brush.vertex(-20, 410);
  brush.endShape(true);
  brush.fill(warmB, 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(-20, 390); brush.vertex(620, 380); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill(warmB, 170);
  brush.beginShape(0.4);
  brush.vertex(-20, 520); brush.vertex(620, 500); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // reflected treeline, softer and inverted
  brush.fill(dark, 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 290); brush.vertex(240, 290); brush.vertex(200, 312); brush.vertex(150, 324); brush.vertex(100, 350);
  brush.vertex(60, 335); brush.vertex(30, 355); brush.vertex(-20, 340);
  brush.endShape(true);
  // the sun's broken reflection, gaps of paper between strokes
  for (let i = 0; i < 7; i++) {
    const w = 70 - i * 8;
    const y = 305 + i * 24;
    brush.fill(warmA, 225);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(300 - w, y); brush.vertex(300 + w, y + 2); brush.vertex(300 + w - 8, y + 14); brush.vertex(300 - w + 8, y + 13);
    brush.endShape(true);
  }
  // dark ripples, horizontal, lengthening toward the viewer
  for (let i = 0; i < 6; i++) {
    const y = 440 + i * 30;
    const x = (i % 2) * 330 - 20;
    brush.fill(dark, 150 + i * 14);
    brush.fillBleed(0.25);
    brush.beginShape(0.6);
    brush.vertex(x, y); brush.vertex(x + 200 + i * 20, y - 3); brush.vertex(x + 180 + i * 20, y + 13); brush.vertex(x + 10, y + 16);
    brush.endShape(true);
  }
  // near reeds, left foreground, two passes
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(dark, 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(-20, 620); brush.vertex(-20, 500); brush.vertex(18, 440); brush.vertex(30, 530); brush.vertex(62, 460); brush.vertex(70, 550); brush.vertex(108, 500); brush.vertex(100, 580); brush.vertex(150, 620);
    brush.endShape(true);
  }
}
