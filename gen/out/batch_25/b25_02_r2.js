async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f9f6f0");
  randomSeed(9225);
  brush.noStroke();

  // wet backruns: pale overlapping blooms of rose and leaf-green
  let bg = [[150, 420, 110, "#f0a0b0"], [470, 170, 120, "#b8e08e"], [480, 480, 90, "#f5b8a0"], [90, 110, 70, "#c8e8a8"]];
  for (let b of bg) {
    brush.fill(b[3], 160);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(b[0], b[1], b[2], 1);
  }

  // stem and leaves, loose
  brush.fill("#2e8a3a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.45);
  brush.beginShape(0.6);
  brush.vertex(292, 300); brush.vertex(316, 300); brush.vertex(340, 440); brush.vertex(330, 590);
  brush.vertex(308, 590); brush.vertex(318, 440);
  brush.endShape(true);
  brush.fill("#45a84a", 205);
  brush.beginShape(1);
  brush.vertex(325, 420); brush.vertex(430, 360); brush.vertex(520, 370); brush.vertex(420, 440);
  brush.endShape(true);
  brush.fill("#1a5e28", 210);
  brush.fillBleed(0.22);
  brush.beginShape(1);
  brush.vertex(335, 418); brush.vertex(440, 372); brush.vertex(500, 375);
  brush.endShape(true);
  brush.fill("#3d9a42", 205);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(322, 500); brush.vertex(220, 455); brush.vertex(140, 480); brush.vertex(240, 530);
  brush.endShape(true);

  // rose: open cup, back petals first, then a spiral of darker curls toward the centre
  let cx = 300, cy = 220;
  brush.fill("#e0203c", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.55);
  brush.beginShape(1);
  brush.vertex(cx - 130, cy - 10); brush.vertex(cx - 90, cy - 110); brush.vertex(cx, cy - 135);
  brush.vertex(cx + 100, cy - 105); brush.vertex(cx + 135, cy); brush.vertex(cx + 80, cy + 85);
  brush.vertex(cx - 70, cy + 90);
  brush.endShape(true);
  for (let k = 0; k < 10; k++) {
    let a = k * 70;
    let r = 115 - k * 9;
    brush.fill(k < 5 ? "#b40e2c" : "#7a0620", 215);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(cx + cos(a) * r * 0.3, cy + sin(a) * r * 0.3);
    brush.vertex(cx + cos(a + 15) * r, cy + sin(a + 15) * r * 0.85);
    brush.vertex(cx + cos(a + 55) * r * 0.95, cy + sin(a + 55) * r * 0.8);
    brush.vertex(cx + cos(a + 75) * r * 0.5, cy + sin(a + 75) * r * 0.45);
    brush.endShape(true);
  }
  brush.fill("#4a0214", 230);
  brush.fillBleed(0.2);
  brush.circle(cx + 2, cy - 4, 20, 0.6);

  // three drips running from the lower rim, short and tapering, with beads
  for (let d of [[cx - 55, 70], [cx + 30, 120], [cx + 72, 50]]) {
    let x = d[0], dripY = cy + 78, len = d[1];
    brush.fill("#c0122e", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(x - 12, dripY); brush.vertex(x + 12, dripY); brush.vertex(x + 4, dripY + len); brush.vertex(x - 4, dripY + len);
    brush.endShape(true);
    brush.fill("#90061e", 225);
    brush.fillBleed(0.12);
    brush.circle(x, dripY + len + 3, 7, 0.2);
  }
  // flicked spatter
  for (let i = 0; i < 35; i++) {
    let a = random(360), r = random(150, 260);
    brush.fill(random(["#c0122e", "#e0203c", "#2e8a3a"]), 225);
    brush.fillBleed(0.15);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r * 0.9, random(2, 7), 0.4);
  }
}
