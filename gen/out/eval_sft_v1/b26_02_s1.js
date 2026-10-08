async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2ece8");
  brush.noStroke();
  // a soft earthy ground wash behind the bloom
  brush.fill("#b9a994", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // the cup: five heart-shaped petals, pale mauve with a darker rim
  let cx = 300, cy = 300;
  for (let p = 0; p < 5; p++) {
    let a = p * 72 + 12;
    let r = 210;
    brush.fill("#a3858e", 205);
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a - 20) * r * 0.45, cy + sin(a - 20) * r * 0.45);
    brush.vertex(cx + cos(a - 10) * r, cy + sin(a - 10) * r);
    brush.vertex(cx + cos(a + 10) * r, cy + sin(a + 10) * r);
    brush.vertex(cx + cos(a + 20) * r * 0.45, cy + sin(a + 20) * r * 0.45);
    brush.endShape(true);
  }
  // a second, smaller pass of a warmer mauve, deeper inside
  for (let p = 0; p < 5; p++) {
    let a = p * 72 + 12;
    let r = 150;
    brush.fill("#84636e", 215);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a - 15) * r * 0.3, cy + sin(a - 15) * r * 0.3);
    brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
    brush.vertex(cx + cos(a + 15) * r * 0.3, cy + sin(a + 15) * r * 0.3);
    brush.endShape(true);
  }
  // the heart-shaped lobes of the upper cup, darker and more opaque
  for (let p = 0; p < 5; p++) {
    let a = p * 72 + 12;
    let r = 130;
    brush.fill("#6a4e5a", 225);
    brush.fillBleed(0.22);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a - 15) * r * 0.5, cy + sin(a - 15) * r * 0.5);
    brush.vertex(cx + cos(a - 5) * r * 0.9, cy + sin(a - 5) * r * 0.9);
    brush.vertex(cx + cos(a + 5) * r * 0.9, cy + sin(a + 5) * r * 0.9);
    brush.vertex(cx + cos(a + 15) * r * 0.5, cy + sin(a + 15) * r * 0.5);
    brush.endShape(true);
  }
  // a deeper shadowed pass along the inside curve
  for (let p = 0; p < 5; p++) {
    let a = p * 72 + 12;
    let r = 160;
    brush.fill("#4e3842", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a - 22) * r * 0.6, cy + sin(a - 22) * r * 0.6);
    brush.vertex(cx + cos(a - 12) * r * 0.85, cy + sin(a - 12) * r * 0.85);
    brush.vertex(cx + cos(a + 12) * r * 0.85, cy + sin(a + 12) * r * 0.85);
    brush.vertex(cx + cos(a + 22) * r * 0.6, cy + sin(a + 22) * r * 0.6);
    brush.endShape(true);
  }
  // centre: a ring of five small green sepals
  for (let p = 0; p < 5; p++) {
    let a = p * 72 + 12;
    brush.fill("#5a7a50", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.circle(cx + cos(a) * 100, cy + sin(a) * 100, 16, 0.4);
  }
  // a pale yellow centre
  brush.fill("#e8d9a8", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(cx, cy, 36, 0.3);
  // the long drooping spadix
  brush.fill("#8a7a3a", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(cx, cy + 10); brush.vertex(cx + 14, cy + 10); brush.vertex(cx + 16, cy + 220); brush.vertex(cx + 14, cy + 230); brush.vertex(cx - 14, cy + 230); brush.vertex(cx - 16, cy + 220);
  brush.endShape(true);
  brush.fill("#6a5a2a", 200);
  brush.beginShape(0.6);
  brush.vertex(cx, cy + 10); brush.vertex(cx + 16, cy + 220); brush.vertex(cx + 14, cy + 230); brush.vertex(cx - 14, cy + 230); brush.vertex(cx - 16, cy + 220);
  brush.endShape(true);
  // tiny dark dots along the spadix
  for (let i = 0; i < 12; i++) {
    let a = i * 30;
    let y = 100 + i * 15;
    brush.fill("#2a2218", 230);
    brush.circle(cx + cos(a) * 14, cy + 10 + sin(a) * 14 + y, 3, 0.3);
  }
  // a few dark green leaves, broad and crinkled
  brush.fill("#4a5a3a", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(cx - 20, cy + 20); brush.vertex(cx + 10, cy + 120); brush.vertex(cx - 30, cy + 150); brush.vertex(cx - 30, cy + 100);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(cx + 20, cy + 20); brush.vertex(cx - 10, cy + 120); brush.vertex(cx + 30, cy + 150); brush.vertex(cx + 30, cy + 100);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(cx - 20, cy + 20); brush.vertex(cx - 50, cy + 180); brush.vertex(cx - 30, cy + 240); brush.vertex(cx - 30, cy + 210);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(cx + 20, cy + 20); brush.vertex(cx + 60, cy + 180); brush.vertex(cx + 40, cy + 240); brush.vertex(cx + 40, cy + 210);
  brush.endShape(true);
}
