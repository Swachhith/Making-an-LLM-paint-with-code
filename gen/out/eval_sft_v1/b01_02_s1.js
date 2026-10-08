async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe8d8");
  randomSeed(101);
  brush.noStroke();

  // ground: sage-green
  brush.fill("#9aa894", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 420); brush.vertex(600, 400); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // stems
  brush.fill("#6e8a6a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(290, 420); brush.vertex(282, 520); brush.vertex(308, 600); brush.vertex(320, 600); brush.vertex(302, 520);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(412, 420); brush.vertex(400, 510); brush.vertex(426, 600); brush.vertex(438, 600); brush.vertex(420, 520);
  brush.endShape(true);

  // blooms: pale buttercup, two angles
  for (const b of [[280, 300], [430, 160]]) {
    const cx = b[0], cy = b[1];
    let p = 0;
    for (let i = 0; i < 22; i++) {
      p = randomSeed(p + i);
      const a = i * 360 / 22 + random(-3, 3);
      const r = random(40, 60);
      const rr = random(220, 250);
      brush.fill("#d9c26a", 190);
      brush.fillBleed(0.28);
      brush.fillTexture(0.45, 0.45);
      brush.beginShape(0.9);
      brush.vertex(cx + cos(a) * rr, cy + sin(a) * rr);
      brush.vertex(cx + cos(a - 14) * r, cy + sin(a - 14) * r);
      brush.vertex(cx + cos(a) * r * 0.7, cy + sin(a) * r * 0.7);
      brush.vertex(cx + cos(a + 14) * r, cy + sin(a + 14) * r);
      brush.vertex(cx + cos(a + 18) * rr, cy + sin(a + 18) * rr);
      brush.endShape(true);
    }
    // darker cupped heart
    for (let i = 0; i < 20; i++) {
      p = randomSeed(p + i);
      const a = i * 360 / 20 + random(-4, 4);
      const r = random(28, 42);
      const rr = random(110, 135);
      brush.fill("#b89a50", 215);
      brush.fillBleed(0.22);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.9);
      brush.vertex(cx + cos(a) * rr, cy + sin(a) * rr);
      brush.vertex(cx + cos(a - 12) * r, cy + sin(a - 12) * r);
      brush.vertex(cx + cos(a) * r * 0.6, cy + sin(a) * r * 0.6);
      brush.vertex(cx + cos(a + 12) * r, cy + sin(a + 12) * r);
      brush.vertex(cx + cos(a + 18) * rr, cy + sin(a + 18) * rr);
      brush.endShape(true);
    }
    // green throat
    brush.fill("#5e7a54", 215);
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.8);
    brush.vertex(cx, cy + 2); brush.vertex(cx + 20, cy - 20); brush.vertex(cx + 48, cy - 8); brush.vertex(cx + 22, cy + 18); brush.vertex(cx, cy + 2);
    brush.endShape(true);
    brush.beginShape(0.8);
    brush.vertex(cx, cy + 2); brush.vertex(cx - 20, cy - 20); brush.vertex(cx - 48, cy - 8); brush.vertex(cx - 22, cy + 18); brush.vertex(cx, cy + 2);
    brush.endShape(true);
  }
}
