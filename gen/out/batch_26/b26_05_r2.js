async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f0e8");
  randomSeed(26052);
  brush.noStroke();

  // backdrop split: teal top-left, warm magenta-crimson bottom-right
  brush.fill("#1e7a70", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(-20, 520);
  brush.endShape(true);
  brush.fill("#b02060", 175);
  brush.beginShape(0.5);
  brush.vertex(620, 160); brush.vertex(620, 620); brush.vertex(-20, 620); brush.vertex(-20, 480);
  brush.endShape(true);

  // a pair of dark leaves under the bloom
  brush.fill("#145a30", 215);
  brush.beginShape(0.7);
  brush.vertex(320, 340); brush.vertex(470, 470); brush.vertex(600, 520); brush.vertex(480, 420);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(280, 340); brush.vertex(150, 500); brush.vertex(40, 560); brush.vertex(140, 440);
  brush.endShape(true);

  // rays: loose back ring, crisp front ring, a few curled forward
  let cx = 310, cy = 280;
  let rings = [["#4a10a0", 40, 270, 13, 215], ["#8a22e0", 34, 225, 12, 215], ["#b850f0", 24, 150, 10, 205]];
  for (let g = 0; g < rings.length; g++) {
    let [col, n, R, w, al] = rings[g];
    for (let i = 0; i < n; i++) {
      let a = (360 / n) * i + g * 5 + random(-5, 5);
      let r = R + random(-30, 15);
      let bend = random(-8, 8);
      let px = cos(a + 90) * w, py = sin(a + 90) * w;
      brush.fill(col, al);
      brush.fillBleed(0.22);
      brush.fillTexture(0.4, 0.45);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a) * 32, cy + sin(a) * 32);
      brush.vertex(cx + cos(a) * r * 0.55 - px, cy + sin(a) * r * 0.55 - py);
      brush.vertex(cx + cos(a + bend) * r, cy + sin(a + bend) * r);
      brush.vertex(cx + cos(a) * r * 0.55 + px, cy + sin(a) * r * 0.55 + py);
      brush.endShape(true);
    }
  }

  brush.fill("#c05a08", 235);
  brush.fillBleed(0.25);
  brush.circle(cx + 6, cy + 6, 56, true);
  brush.fill("#f8c418", 235);
  brush.circle(cx - 5, cy - 5, 40, true);
  brush.fill("#7a2a04", 225);
  for (let k = 0; k < 30; k++) {
    let a = random(-30, 170), rr = random(24, 52);
    brush.circle(cx + cos(a) * rr, cy + sin(a) * rr, random(3, 5), true);
  }
}
