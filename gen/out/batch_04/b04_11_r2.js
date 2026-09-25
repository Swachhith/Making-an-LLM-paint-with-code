async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fffdf9");
  randomSeed(3);
  brush.noStroke();

  // no background: two dahlias floating on bare paper
  // bloom 1, face-on, upper left: long loose apricot petals, gaps left open
  let cx = 220, cy = 220;
  for (let i = 0; i < 22; i++) {
    const a = i * 360 / 22 + random(-4, 4);
    const l = random(110, 135);
    brush.fill(random() < 0.5 ? "#ffc79a" : "#ffb488", 160);
    brush.fillBleed(0.35);
    brush.fillTexture(0.3, 0.6);
    brush.beginShape(0.7);
    brush.vertex(cx + cos(a - 9) * 30, cy + sin(a - 9) * 30);
    brush.vertex(cx + cos(a - 5) * l * 0.85, cy + sin(a - 5) * l * 0.85);
    brush.vertex(cx + cos(a) * l, cy + sin(a) * l);
    brush.vertex(cx + cos(a + 5) * l * 0.85, cy + sin(a + 5) * l * 0.85);
    brush.vertex(cx + cos(a + 9) * 30, cy + sin(a + 9) * 30);
    brush.endShape(true);
  }
  for (let i = 0; i < 14; i++) {
    const a = i * 360 / 14 + 12;
    brush.fill("#f7a070", 175);
    brush.fillBleed(0.2);
    brush.beginShape(0.7);
    brush.vertex(cx + cos(a - 10) * 12, cy + sin(a - 10) * 12);
    brush.vertex(cx + cos(a) * 62, cy + sin(a) * 62);
    brush.vertex(cx + cos(a + 10) * 12, cy + sin(a + 10) * 12);
    brush.endShape(true);
  }
  brush.fill("#e98a5a", 190);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, 16, 0.5);

  // bloom 2, profile, lower right: a squashed half-dome
  cx = 410; cy = 420;
  for (let i = 0; i < 16; i++) {
    const a = 180 + i * 180 / 15;
    const l = random(95, 115);
    brush.fill("#ffbe8c", 185);
    brush.fillBleed(0.3);
    brush.fillTexture(0.3, 0.6);
    brush.beginShape(0.7);
    brush.vertex(cx + cos(a - 6) * 20, cy + sin(a - 6) * 12);
    brush.vertex(cx + cos(a) * l, cy + sin(a) * l * 0.55);
    brush.vertex(cx + cos(a + 6) * 20, cy + sin(a + 6) * 12);
    brush.endShape(true);
  }
  for (let i = 0; i < 10; i++) {
    const a = 150 + i * 240 / 9;
    brush.fill("#f39062", 185);
    brush.fillBleed(0.25);
    brush.beginShape(0.7);
    brush.vertex(cx, cy + 5);
    brush.vertex(cx + cos(a) * 100, cy + 18 + sin(a) * 30);
    brush.vertex(cx + cos(a + 10) * 90, cy + 24 + sin(a + 10) * 28);
    brush.endShape(true);
  }
  brush.fill("#b4c79c", 195);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(cx - 30, cy + 20); brush.vertex(cx + 30, cy + 20); brush.vertex(cx + 8, cy + 48); brush.vertex(cx - 6, cy + 48);
  brush.endShape(true);
  // stems as thin sage lines
  brush.fill("#a7bb94", 190);
  brush.fillBleed(0.1);
  brush.beginShape(0.8);
  brush.vertex(cx - 2, cy + 40); brush.vertex(cx + 6, cy + 40); brush.vertex(cx + 30, 600); brush.vertex(cx + 22, 600);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(218, 330); brush.vertex(226, 330); brush.vertex(290, 600); brush.vertex(282, 600);
  brush.endShape(true);
}
