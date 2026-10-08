async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf5e6");
  randomSeed(2113);
  brush.noStroke();

  // loose sky washes, splashed
  brush.fill("#b8c4e0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(400, 340); brush.vertex(200, 280); brush.vertex(-20, 330);
  brush.endShape(true);
  brush.fill("#e8d8f0", 160);
  brush.beginShape(0.7);
  brush.vertex(-20, 340); brush.vertex(620, 320); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stem, arcing from lower left to upper right
  brush.fill("#3f5a2a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(40, 570); brush.vertex(150, 470); brush.vertex(300, 360); brush.vertex(450, 250); brush.vertex(600, 140); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // two passes of each bloom, big loose then smaller inside
  const blooms = [[120, 300, 45], [200, 260, 40], [280, 220, 42], [360, 190, 44], [440, 150, 40], [520, 110, 38], [160, 340, 46], [240, 310, 42], [320, 270, 44], [400, 230, 42], [480, 190, 40], [560, 150, 38]];
  for (const b of blooms) {
    const [cx, cy, r] = b;
    // loose outer pass
    brush.fill("#ffb3c4", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    for (let k = 0; k < 9; k++) {
      const a = k * 40 + random(-6, 6);
      const rr = r * random(0.9, 1.05);
      brush.vertex(cx + cos(a) * rr, cy + sin(a) * rr);
    }
    brush.endShape(true);
    // smaller inner pass, more opaque
    brush.fill("#f28aa8", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    for (let k = 0; k < 9; k++) {
      const a = k * 40 + random(-6, 6);
      const rr = r * 0.65;
      brush.vertex(cx + cos(a) * rr, cy + sin(a) * rr);
    }
    brush.endShape(true);
    // a few darker spots
    brush.fill("#d94a8a", 210);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.circle(cx + random(-r * 0.3, r * 0.3), cy + random(-r * 0.3, r * 0.3), r * 0.25, 0.4);
  }

  // drips and splashes
  for (let i = 0; i < 30; i++) {
    const x = random(20, 580), y = random(400, 620);
    brush.fill(random(["#ffb3c4", "#f28aa8", "#d94a8a"]), random(160, 230));
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(x, y); brush.vertex(x + 12, y + 20); brush.vertex(x + 30, y + 50); brush.vertex(x + 20, y + 80); brush.vertex(x - 10, y + 60);
    brush.endShape(true);
  }
}
