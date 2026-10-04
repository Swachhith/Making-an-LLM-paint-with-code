async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f1ee");
  randomSeed(66);
  brush.noStroke();
  let cx = 190, cy = 210;
  // splashy halo blooms: wine and violet bleeding out
  brush.fill("#b34a6e", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(cx + 25, cy + 15, 160, 1);
  brush.fill("#6a4a90", 140);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(cx - 70, cy + 80, 85, 1);
  brush.fill("#d9a0a6", 130);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(cx + 120, cy - 60, 70, 1);
  // stem & leaf first, under the bloom
  for (let p = 0; p < 2; p++) {
    brush.fill("#3e5c34", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(cx + 8, cy + 100);
    brush.vertex(cx + 26, cy + 100);
    brush.vertex(cx + 46, 500);
    brush.vertex(cx + 30, 500);
    brush.endShape(true);
  }
  brush.fill("#4c6e3e", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(cx + 34, 390);
  brush.vertex(cx + 90, 345);
  brush.vertex(cx + 150, 360);
  brush.vertex(cx + 90, 410);
  brush.endShape(true);
  // burgundy dahlia: rings of pointed petals, three passes deepening inward
  let rings = [[125, 16, "#7a0f2e"], [100, 14, "#6a0b28"], [76, 13, "#5a0822"], [52, 11, "#48061b"], [28, 8, "#320312"]];
  for (let pass = 0; pass < 2; pass++) {
    for (let rg of rings) {
      let R = rg[0] * (pass ? 0.93 : 1), n = rg[1];
      let off = random(360);
      for (let i = 0; i < n; i++) {
        let a = off + i * 360 / n;
        brush.fill(rg[2], random(190, 235));
        brush.fillBleed(0.3);
        brush.fillTexture(0.5, 0.4);
        brush.beginShape(0.5);
        brush.vertex(cx + cos(a - 12) * R * 0.35, cy + sin(a - 12) * R * 0.35);
        brush.vertex(cx + cos(a - 10) * R * 0.88, cy + sin(a - 10) * R * 0.88);
        brush.vertex(cx + cos(a) * R, cy + sin(a) * R);
        brush.vertex(cx + cos(a + 10) * R * 0.88, cy + sin(a + 10) * R * 0.88);
        brush.vertex(cx + cos(a + 12) * R * 0.35, cy + sin(a + 12) * R * 0.35);
        brush.endShape(true);
      }
    }
  }
  brush.fill("#1e0209", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 14, 0.5);
  // a closed bud on a side stem
  brush.fill("#3e5c34", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(cx + 40, 450);
  brush.vertex(cx + 160, 390);
  brush.vertex(cx + 168, 404);
  brush.vertex(cx + 46, 466);
  brush.endShape(true);
  for (let p = 0; p < 2; p++) {
    brush.fill("#6a0b28", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.circle(cx + 172, 385, 20 - p * 6, 0.6);
  }
  // drips
  for (let i = 0; i < 7; i++) {
    let dx = cx + random(-110, 110);
    let dy = cy + random(90, 125);
    let len = random(70, 230);
    brush.fill(random(["#7a0f2e", "#6a4a90", "#b34a6e"]), 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(dx - 7, dy);
    brush.vertex(dx + 7, dy);
    brush.vertex(dx + 5, dy + len);
    brush.vertex(dx - 5, dy + len);
    brush.endShape(true);
    brush.circle(dx, dy + len + 3, 8, 0.4);
  }
  // splatter over the empty space, sparse
  for (let i = 0; i < 35; i++) {
    brush.fill(random(["#7a0f2e", "#b34a6e", "#6a4a90"]), 215);
    brush.circle(cx + random(-170, 390), cy + random(-170, 370), random(2, 7), 0.5);
  }
}
