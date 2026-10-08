async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e2d4");
  randomSeed(1101);
  brush.noStroke();

  // stems
  brush.fill("#6d7a4a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 600); brush.vertex(306, 450); brush.vertex(312, 320); brush.vertex(318, 200); brush.vertex(324, 100); brush.vertex(330, 600);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(450, 600); brush.vertex(444, 470); brush.vertex(438, 340); brush.vertex(432, 220); brush.vertex(426, 110); brush.vertex(420, 600);
  brush.endShape(true);

  // front bloom: cupped, three big petals
  let cx = 270, cy = 260;
  for (let p = 0; p < 3; p++) {
    let a = p * 120 + 10;
    brush.fill("#d9c94a", 205);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.5);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 40) * 100, cy + sin(a - 40) * 100);
    brush.vertex(cx + cos(a - 15) * 140, cy + sin(a - 15) * 140);
    brush.vertex(cx + cos(a + 15) * 140, cy + sin(a + 15) * 140);
    brush.vertex(cx + cos(a + 40) * 100, cy + sin(a + 40) * 100);
    brush.endShape(true);
  }
  // cupped centre
  brush.fill("#b8a42e", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.circle(cx, cy, 48, 0.5);
  // yellow stamens
  for (let i = 0; i < 12; i++) {
    let a = i * 30 + 15;
    brush.fill("#f0e85a", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a) * 28, cy + sin(a) * 28);
    brush.vertex(cx + cos(a) * 36, cy + sin(a) * 36);
    brush.vertex(cx + cos(a) * 34, cy + sin(a) * 34);
    brush.endShape(true);
  }

  // back bloom: open, two big petals
  let cx2 = 420, cy2 = 430;
  for (let p = 0; p < 2; p++) {
    let a = p * 90 + 45;
    brush.fill("#d9c94a", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.5);
    brush.vertex(cx2, cy2);
    brush.vertex(cx2 + cos(a - 30) * 110, cy2 + sin(a - 30) * 110);
    brush.vertex(cx2 + cos(a - 10) * 150, cy2 + sin(a - 10) * 150);
    brush.vertex(cx2 + cos(a + 10) * 150, cy2 + sin(a + 10) * 150);
    brush.vertex(cx2 + cos(a + 30) * 110, cy2 + sin(a + 30) * 110);
    brush.endShape(true);
  }
  brush.fill("#b8a42e", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.circle(cx2, cy2, 46, 0.5);
  for (let i = 0; i < 10; i++) {
    let a = i * 36 + 12;
    brush.fill("#f0e85a", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(cx2, cy2);
    brush.vertex(cx2 + cos(a) * 26, cy2 + sin(a) * 26);
    brush.vertex(cx2 + cos(a) * 34, cy2 + sin(a) * 34);
    brush.vertex(cx2 + cos(a) * 32, cy2 + sin(a) * 32);
    brush.endShape(true);
  }

  // ground wash
  brush.fill("#b09a5a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 470); brush.vertex(600, 450); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
}
