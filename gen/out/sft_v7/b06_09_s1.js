async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe9d8");
  randomSeed(213);
  brush.noStroke();

  // earthy ground wash
  brush.fill("#b0a070", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 460); brush.vertex(600, 430); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // stems
  brush.fill("#4a5a30", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(230, 460); brush.vertex(230, 600); brush.vertex(246, 600); brush.vertex(246, 460);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(430, 470); brush.vertex(430, 600); brush.vertex(448, 600); brush.vertex(448, 470);
  brush.endShape(true);

  // open anemone: ring of dark petals, pale centre
  const cx = 230, cy = 280;
  for (let i = 0; i < 19; i++) {
    const a = i * 18 + random(-6, 6);
    const r = random(130, 150);
    const w = random(12, 16);
    brush.fill(random(["#7a5a4a", "#6a4a40"]), 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(cx + cos(a - w) * r * 0.6, cy + sin(a - w) * r * 0.6);
    brush.vertex(cx + cos(a - w * 0.6) * r, cy + sin(a - w * 0.6) * r);
    brush.vertex(cx + cos(a) * r * 0.85, cy + sin(a) * r * 0.85);
    brush.vertex(cx + cos(a + w * 0.6) * r, cy + sin(a + w * 0.6) * r);
    brush.vertex(cx + cos(a + w) * r * 0.6, cy + sin(a + w) * r * 0.6);
    brush.endShape(true);
  }
  brush.fill("#d8c090", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 60, 0.7);
  brush.fill("#7a5a4a", 220);
  brush.fillBleed(0.15);
  brush.circle(cx + 2, cy + 2, 34, 0.4);

  // closed bud: tight cone
  brush.fill("#8a6a50", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(430, 430); brush.vertex(460, 390); brush.vertex(488, 390); brush.vertex(470, 410); brush.vertex(440, 410);
  brush.endShape(true);
  brush.fill("#6a4a40", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(430, 430); brush.vertex(450, 380); brush.vertex(470, 380); brush.vertex(460, 400);
  brush.endShape(true);
  brush.fill("#c0b080", 190);
  brush.fillBleed(0.2);
  brush.circle(450, 390, 14, 0.5);
}
