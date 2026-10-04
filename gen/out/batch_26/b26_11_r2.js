async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ede2");
  randomSeed(26112);
  brush.noStroke();

  // leafy ground in two greens, plus a sky-blue gap top right
  brush.fill("#1e6a34", 195);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#3a8ac0", 175);
  brush.beginShape(0.8);
  brush.vertex(380, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(500, 120);
  brush.endShape(true);
  brush.fill("#0c3a1c", 185);
  brush.beginShape(0.7);
  brush.vertex(-20, 620); brush.vertex(-20, 330); brush.vertex(120, 470); brush.vertex(260, 620);
  brush.endShape(true);

  // six tepals, slightly rotated bloom, tips twisted
  let cx = 290, cy = 310;
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 5 + random(-4, 4);
    let r = 270 + random(-15, 10);
    let tw = random(-8, 8);
    for (let pass = 0; pass < 2; pass++) {
      let k = pass == 0 ? 1 : 0.78;
      brush.fill(pass == 0 ? "#9848e8" : "#6a1ec8", pass == 0 ? 215 : 205);
      brush.fillBleed(0.28);
      brush.fillTexture(0.45, 0.45);
      brush.beginShape(0.85);
      brush.vertex(cx + cos(a) * 20, cy + sin(a) * 20);
      brush.vertex(cx + cos(a - 32) * r * 0.5 * k, cy + sin(a - 32) * r * 0.5 * k);
      brush.vertex(cx + cos(a - 15 + tw) * r * 0.85 * k, cy + sin(a - 15 + tw) * r * 0.85 * k);
      brush.vertex(cx + cos(a + tw) * r * k, cy + sin(a + tw) * r * k);
      brush.vertex(cx + cos(a + 15 + tw) * r * 0.85 * k, cy + sin(a + 15 + tw) * r * 0.85 * k);
      brush.vertex(cx + cos(a + 32) * r * 0.5 * k, cy + sin(a + 32) * r * 0.5 * k);
      brush.endShape(true);
    }
    // three raised ribs down the tepal
    for (let rib = -1; rib <= 1; rib++) {
      brush.fill("#420c88", 200);
      brush.fillBleed(0.2);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a) * 40, cy + sin(a) * 40);
      brush.vertex(cx + cos(a + rib * 9 - 3) * r * 0.5, cy + sin(a + rib * 9 - 3) * r * 0.5);
      brush.vertex(cx + cos(a + rib * 6 + tw) * r * 0.85, cy + sin(a + rib * 6 + tw) * r * 0.85);
      brush.vertex(cx + cos(a + rib * 9 + 3) * r * 0.5, cy + sin(a + rib * 9 + 3) * r * 0.5);
      brush.endShape(true);
    }
  }

  brush.fill("#98a830", 225);
  brush.circle(cx, cy, 40, true);
  brush.fill("#f4e070", 235);
  for (let k = 0; k < 34; k++) {
    let a = random(360), rr = random(24, 54);
    brush.circle(cx + cos(a) * rr, cy + sin(a) * rr, 5, true);
  }
  brush.fill("#380866", 225);
  brush.circle(cx, cy, 15, true);
}
