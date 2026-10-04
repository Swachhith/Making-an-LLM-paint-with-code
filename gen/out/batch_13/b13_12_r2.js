async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#14123a");
  randomSeed(52);
  brush.noStroke();
  // sky swirls: big soft spirals of violet and ultramarine
  let sw = [[140, 150, "#3c2a86"], [380, 110, "#243a96"], [260, 300, "#4a2a88"], [520, 300, "#2a3c98"]];
  for (let s of sw) {
    for (let k = 0; k < 3; k++) {
      let r = 150 - k * 40;
      brush.fill(s[2], 170 + k * 12);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(1);
      for (let a = 0; a < 360; a += 40) {
        let rr = r * (0.55 + 0.45 * ((a + k * 90) % 360) / 360);
        brush.vertex(s[0] + cos(a + k * 50) * rr, s[1] + sin(a + k * 50) * rr * 0.6);
      }
      brush.endShape(true);
    }
  }
  // glowing big stars: pale gold ring then a bright core
  let big = [[80, 80], [300, 60], [470, 200], [190, 260], [560, 70]];
  for (let b of big) {
    brush.fill("#b0a0e0", 180);
    brush.fillBleed(0.25);
    brush.circle(b[0], b[1], 12, 0.4);
    brush.fill("#ffeab0", 250);
    brush.fillBleed(0.08);
    brush.circle(b[0], b[1], 5, 0.2);
  }
  for (let i = 0; i < 80; i++) {
    brush.fill("#f4f0ff", 230);
    brush.fillBleed(0.05);
    brush.circle(random(0, 600), random(0, 440), random(0.7, 2), 0.1);
  }
  // rolling dark hill
  brush.fill("#0a0820", 240);
  brush.fillBleed(0.22);
  brush.beginShape(1);
  brush.vertex(-10, 490);
  brush.vertex(150, 470);
  brush.vertex(320, 480);
  brush.vertex(480, 462);
  brush.vertex(610, 474);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // cottages clustered on the hill: walls in dusky lilac, cottages stepped
  let hs = [[250, 468, 36, 26], [282, 460, 30, 34], [310, 470, 44, 26], [350, 458, 30, 38], [380, 466, 40, 30], [218, 476, 34, 22]];
  for (let h of hs) {
    let x = h[0], y = h[1], w = h[2], ht = h[3];
    brush.fill("#5c5898", 220);
    brush.fillBleed(0.12);
    brush.beginShape(0);
    brush.vertex(x, y);
    brush.vertex(x + w, y);
    brush.vertex(x + w, y + ht);
    brush.vertex(x, y + ht);
    brush.endShape(true);
    brush.fill("#1a1440", 235);
    brush.beginShape(0);
    brush.vertex(x - 3, y + 2);
    brush.vertex(x + w * 0.5, y - 16);
    brush.vertex(x + w + 3, y + 2);
    brush.endShape(true);
  }
  // a tall dark cypress on the left, the only vertical in the huge sky
  brush.fill("#08061a", 240);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(70, 500);
  brush.vertex(62, 380);
  brush.vertex(80, 250);
  brush.vertex(100, 380);
  brush.vertex(96, 500);
  brush.endShape(true);
  // windows
  let w = [[228, 484], [260, 478], [292, 474], [322, 480], [336, 484], [360, 470], [392, 478], [406, 482]];
  for (let p of w) {
    brush.fill("#e89228", 180);
    brush.fillBleed(0.3);
    brush.circle(p[0], p[1], 8, 0.5);
    brush.fill("#ffd560", 250);
    brush.fillBleed(0.08);
    brush.circle(p[0], p[1], 4, 0.2);
  }
}
