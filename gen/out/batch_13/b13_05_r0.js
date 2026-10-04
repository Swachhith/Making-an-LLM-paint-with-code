async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe9f2");
  brush.noStroke();
  let cx = 300, cy = 310;
  // cool violet backdrop wash, bleeding into the corners
  brush.fill("#6a5a9a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // five huge overlapping petals, painted as many translucent layers
  let angs = [-80, -8, 64, 136, 208];
  for (let pass = 0; pass < 3; pass++) {
    for (let i = 0; i < angs.length; i++) {
      let a = angs[i] + pass * 6;
      let r = 270 - pass * 55;
      let col = ["#e0142a", "#c00824", "#8e0020"][pass];
      brush.fill(col, 200 - pass * 10);
      brush.fillBleed(0.3 - pass * 0.04);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(1);
      brush.vertex(cx + cos(a) * 30, cy + sin(a) * 30);
      brush.vertex(cx + cos(a - 34) * r * 0.85, cy + sin(a - 34) * r * 0.85);
      brush.vertex(cx + cos(a - 12) * r, cy + sin(a - 12) * r);
      brush.vertex(cx + cos(a + 14) * r * 0.98, cy + sin(a + 14) * r * 0.98);
      brush.vertex(cx + cos(a + 34) * r * 0.8, cy + sin(a + 34) * r * 0.8);
      brush.endShape(true);
    }
  }
  // soft vein streaks radiating
  for (let k = 0; k < 20; k++) {
    let a = k * 18;
    brush.fill("#6a0018", 150);
    brush.fillBleed(0.2);
    brush.beginShape(1);
    brush.vertex(cx + cos(a - 6) * 70, cy + sin(a - 6) * 70);
    brush.vertex(cx + cos(a) * 150, cy + sin(a) * 150);
    brush.vertex(cx + cos(a + 6) * 70, cy + sin(a + 6) * 70);
    brush.endShape(true);
  }
  // pale ring, then the inky black boss and stamens
  brush.fill("#f7dfe6", 230);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, 70, 0.3);
  brush.fill("#1b0f2e", 245);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 48, 0.3);
  brush.fill("#0e0618", 230);
  brush.circle(cx, cy, 32, 0.2);
  for (let k = 0; k < 28; k++) {
    let a = k * 13;
    let rr = 60 + (k % 3) * 8;
    brush.fill("#140a22", 230);
    brush.fillBleed(0.1);
    brush.circle(cx + cos(a) * rr, cy + sin(a) * rr, 4, 0.3);
  }
}
