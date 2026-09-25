async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8dfcf");
  brush.noStroke();

  let leaves = [[90, 90, 40, 200], [520, 80, 140, 180], [530, 520, 220, 210], [70, 520, 310, 190], [300, 40, 95, 120]];
  for (let L of leaves) {
    let x = L[0], y = L[1], a = L[2], s = L[3];
    brush.fill("#737b52", 205);
    brush.fillBleed(0.3);
    brush.fillTexture(0.65, 0.5);
    brush.beginShape(0.6);
    brush.vertex(x, y);
    brush.vertex(x + cos(a - 25) * s * 0.6, y + sin(a - 25) * s * 0.6);
    brush.vertex(x + cos(a) * s, y + sin(a) * s);
    brush.vertex(x + cos(a + 25) * s * 0.6, y + sin(a + 25) * s * 0.6);
    brush.endShape(true);
    brush.fill("#4f5638", 190);
    brush.fillBleed(0.15);
    brush.beginShape(0.6);
    brush.vertex(x, y);
    brush.vertex(x + cos(a + 6) * s * 0.55, y + sin(a + 6) * s * 0.55);
    brush.vertex(x + cos(a) * s * 0.9, y + sin(a) * s * 0.9);
    brush.vertex(x + cos(a + 18) * s * 0.5, y + sin(a + 18) * s * 0.5);
    brush.endShape(true);
  }

  let cx = 300, cy = 300;
  brush.fill("#d7a797", 190);
  brush.fillBleed(0.45);
  brush.fillTexture(0.55, 0.5);
  brush.circle(cx, cy, 215, true);

  let tones = ["#d49c8b", "#c8897b", "#bb776c", "#ad6661", "#985450", "#7e4442"];
  for (let ring = 0; ring < 6; ring++) {
    let r = 205 - ring * 30;
    let n = 10 - ring;
    for (let k = 0; k < n; k++) {
      let a = k * 360 / n + ring * 17 + random(-8, 8);
      let spread = 36 - ring * 3;
      brush.fill(tones[ring], 195 + ring * 7);
      brush.fillBleed(0.25);
      brush.fillTexture(0.55, 0.55);
      brush.beginShape(0.5);
      for (let t = -spread; t <= spread; t += spread / 2) {
        let rr = r * (0.86 + random(0, 0.16));
        brush.vertex(cx + cos(a + t) * rr, cy + sin(a + t) * rr);
      }
      brush.vertex(cx + cos(a + spread * 0.4) * r * 0.45, cy + sin(a + spread * 0.4) * r * 0.45);
      brush.vertex(cx + cos(a - spread * 0.4) * r * 0.45, cy + sin(a - spread * 0.4) * r * 0.45);
      brush.endShape(true);
      // ruffled pale lip
      brush.fill("#f0d8cc", 170);
      brush.fillBleed(0.08);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a - spread * 0.6) * r * 0.9, cy + sin(a - spread * 0.6) * r * 0.9);
      brush.vertex(cx + cos(a) * r * 0.98, cy + sin(a) * r * 0.98);
      brush.vertex(cx + cos(a + spread * 0.6) * r * 0.9, cy + sin(a + spread * 0.6) * r * 0.9);
      brush.vertex(cx + cos(a) * r * 0.86, cy + sin(a) * r * 0.86);
      brush.endShape(true);
    }
  }
  brush.fill("#b8902e", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.6, 0.3);
  brush.circle(cx, cy, 28, true);
  brush.fill("#5e3526", 220);
  brush.circle(cx + 4, cy + 3, 11, true);
}
