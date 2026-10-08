async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e2d4");
  brush.noStroke();
  // dusky sky: warm violet over indigo, top to bottom
  brush.fill("#b8a8c4", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(420, 330); brush.vertex(250, 290); brush.vertex(-20, 330);
  brush.endShape(true);
  brush.fill("#7a5fa0", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 280); brush.vertex(620, 260); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // silhouettes of distant hills
  brush.fill("#5a4a6a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 400); brush.vertex(120, 360); brush.vertex(280, 410); brush.vertex(420, 360); brush.vertex(620, 400); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // ground: warm ochre with a few sage tufts
  brush.fill("#c4a878", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 590); brush.vertex(620, 580); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8f9a7a", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(180, 570); brush.vertex(230, 540); brush.vertex(290, 570); brush.vertex(250, 590);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(420, 575); brush.vertex(470, 545); brush.vertex(520, 570); brush.vertex(480, 590);
  brush.endShape(true);
  // baobab: bulbous base, then a wide crown of long narrow leaves
  let cx = 300, cy = 430;
  // base
  brush.fill("#5a4028", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(cx - 110, cy + 40); brush.vertex(cx - 95, cy + 40); brush.vertex(cx - 80, cy + 65); brush.vertex(cx - 60, cy + 95); brush.vertex(cx - 35, cy + 120); brush.vertex(cx, cy + 135); brush.vertex(cx + 35, cy + 120); brush.vertex(cx + 60, cy + 95); brush.vertex(cx + 80, cy + 65); brush.vertex(cx + 95, cy + 40); brush.vertex(cx + 110, cy + 40);
  brush.endShape(true);
  // trunk
  brush.fill("#3a2a1c", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(cx - 15, cy + 40); brush.vertex(cx - 10, cy + 140); brush.vertex(cx + 10, cy + 140); brush.vertex(cx + 15, cy + 40);
  brush.endShape(true);
  // crown: many long narrow leaves radiating from a wide disk
  for (let i = 0; i < 13; i++) {
    let a = i * 360 / 13;
    let r = 200 + (i % 3) * 20;
    let w = 35 + (i % 2) * 10;
    brush.fill("#4a3a24", 215);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.4);
    brush.vertex(cx + cos(a - w) * r * 0.6, cy + sin(a - w) * r * 0.6);
    brush.vertex(cx + cos(a - w) * r, cy + sin(a - w) * r);
    brush.vertex(cx + cos(a + w) * r, cy + sin(a + w) * r);
    brush.vertex(cx + cos(a + w) * r * 0.6, cy + sin(a + w) * r * 0.6);
    brush.endShape(true);
  }
  // a few darker veins on leaves
  for (let i = 0; i < 6; i++) {
    let a = i * 60;
    brush.fill("#2a1c10", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(cx + cos(a) * 150, cy + sin(a) * 150);
    brush.vertex(cx + cos(a - 4) * 210, cy + sin(a - 4) * 210);
    brush.vertex(cx + cos(a + 4) * 210, cy + sin(a + 4) * 210);
    brush.endShape(true);
  }
  // soft orange glow at the crown
  brush.fill("#d99a6a", 150);
  brush.fillBleed(0.3);
  brush.circle(cx, cy - 10, 70, 0.5);
}
