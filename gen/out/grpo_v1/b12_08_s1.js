async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#121830");
  randomSeed(2313);
  brush.noStroke();

  // bold sky: violet, teal, and orange
  brush.fill("#3a1f8a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(300, 330); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#0f6fa3", 200);
  brush.beginShape(0.5);
  brush.vertex(-20, 180); brush.vertex(620, 140); brush.vertex(620, 400); brush.vertex(350, 470); brush.vertex(-20, 380);
  brush.endShape(true);
  brush.fill("#e84a1c", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 350); brush.vertex(620, 300); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // sun, low and off-centre
  brush.fill("#ffd84a", 250);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(520, 470, 55, 0.2);

  // snowy peaks: three passes, each darker and more opaque than the next
  const peaks = [
    { x: 320, y: 150, w: 130, h: 320, tilt: -6 },
    { x: 170, y: 260, w: 90, h: 240, tilt: 12 },
    { x: 530, y: 200, w: 100, h: 290, tilt: -8 }
  ];
  for (const p of peaks) {
    const col = ["#5f83d4", "#2a3f8a", "#0e1a5e"];
    for (let pass = 0; pass < 3; pass++) {
      brush.fill(col[pass], 225 - pass * 10);
      brush.fillBleed(0.25);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.3);
      brush.vertex(p.x + p.w / 2, p.y);
      brush.vertex(p.x + p.w, p.y + p.h);
      brush.vertex(p.x + p.w * 0.7, p.y + p.h * 0.85 + p.tilt);
      brush.vertex(p.x + p.w * 0.3, p.y + p.h * 0.9 + p.tilt);
      brush.endShape(true);
      brush.beginShape(0.3);
      brush.vertex(p.x, p.y + p.h * 0.6);
      brush.vertex(p.x - p.w * 0.5, p.y + p.h * 0.8 + p.tilt);
      brush.vertex(p.x - p.w * 0.2, p.y + p.h * 0.7 + p.tilt);
      brush.endShape(true);
    }
    // snow caps: pale left over dark, two passes
    brush.fill("#eef2f6", 230);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(p.x + p.w * 0.3, p.y - 10);
    brush.vertex(p.x + p.w * 0.45, p.y + 20);
    brush.vertex(p.x + p.w * 0.55, p.y - 10);
    brush.vertex(p.x + p.w * 0.5, p.y + 20);
    brush.endShape(true);
  }

  // foreground: dark evergreen trees
  for (let i = 0; i < 52; i++) {
    const x = random(20, 580);
    const h = random(80, 200);
    const w = random(12, 22);
    brush.fill("#0a142a", 235);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(x - w * 0.5, 620);
    brush.vertex(x - w * 0.2, 620 - h);
    brush.vertex(x, 620 - h * 0.7);
    brush.vertex(x + w * 0.2, 620 - h);
    brush.vertex(x + w * 0.6, 620);
    brush.endShape(true);
  }
  // a few lit windows
  brush.fill("#f2a83a", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(340, 220, 6, 0.2);
  brush.circle(520, 240, 5, 0.2);
  brush.circle(190, 270, 5, 0.2);
}
