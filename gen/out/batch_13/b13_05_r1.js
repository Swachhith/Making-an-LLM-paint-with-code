async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece6f0");
  brush.noStroke();
  let cx = 290, cy = 320;
  // deep indigo-violet background, strong enough to push the red forward
  brush.fill("#3e2e7a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1e5a3a", 180);
  brush.fillBleed(0.3);
  brush.circle(560, 560, 120, 0.7);
  brush.circle(40, 40, 90, 0.7);
  // five big rounded petals, each a wide fan, built up in four glazes
  let angs = [-90, -18, 54, 126, 198];
  let cols = ["#f01a22", "#d80a1e", "#b0001c", "#7a0016"];
  for (let pass = 0; pass < 4; pass++) {
    for (let i = 0; i < 5; i++) {
      let a = angs[i] + (pass % 2 ? 5 : -3);
      let r = 290 - pass * 45;
      brush.fill(cols[pass], 220 - pass * 8);
      brush.fillBleed(0.3 - pass * 0.03);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(1);
      brush.vertex(cx + cos(a - 10) * 20, cy + sin(a - 10) * 20);
      brush.vertex(cx + cos(a - 38) * r * 0.78, cy + sin(a - 38) * r * 0.78);
      brush.vertex(cx + cos(a - 18) * r, cy + sin(a - 18) * r);
      brush.vertex(cx + cos(a + 4) * r * 1.03, cy + sin(a + 4) * r * 1.03);
      brush.vertex(cx + cos(a + 22) * r * 0.96, cy + sin(a + 22) * r * 0.96);
      brush.vertex(cx + cos(a + 38) * r * 0.75, cy + sin(a + 38) * r * 0.75);
      brush.vertex(cx + cos(a + 10) * 20, cy + sin(a + 10) * 20);
      brush.endShape(true);
    }
  }
  // dark gaps where petals meet
  for (let i = 0; i < 5; i++) {
    let a = angs[i] + 36;
    brush.fill("#50000e", 200);
    brush.fillBleed(0.25);
    brush.beginShape(1);
    brush.vertex(cx + cos(a - 5) * 60, cy + sin(a - 5) * 60);
    brush.vertex(cx + cos(a) * 200, cy + sin(a) * 200);
    brush.vertex(cx + cos(a + 5) * 60, cy + sin(a + 5) * 60);
    brush.endShape(true);
  }
  // white ring left as a paler wash, then a jet boss
  brush.fill("#f4e4ec", 235);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, 72, 0.3);
  brush.fill("#0e0818", 250);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 52, 0.25);
  brush.fill("#06030c", 250);
  brush.circle(cx - 4, cy - 4, 36, 0.2);
  brush.fill("#2a1a44", 170);
  brush.circle(cx - 12, cy - 14, 12, 0.4);
  for (let k = 0; k < 36; k++) {
    let a = k * 10;
    let rr = 64 + (k % 3) * 9;
    brush.fill("#0a0512", 240);
    brush.fillBleed(0.1);
    brush.circle(cx + cos(a) * rr, cy + sin(a) * rr, 4.5, 0.3);
  }
}
