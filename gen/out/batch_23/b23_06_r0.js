async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf8ee");
  brush.noStroke();

  // splashy sky: several blooming blobs
  brush.fillBleed(0.35);
  brush.fillTexture(0.6, 0.6);
  const skyc = ["#6fb3e8", "#9ecbf0", "#f4b6c8", "#7cc2e0"];
  for (let i = 0; i < 9; i++) {
    brush.fill(skyc[i % 4], 170);
    brush.circle(random(600), random(40, 230), 70 + random(60), 0.9);
  }

  // meadow washes, loose, overlapping
  brush.fill("#9ccf4a", 200);
  brush.beginShape(0.9);
  brush.vertex(0, 290); brush.vertex(200, 270); brush.vertex(420, 300); brush.vertex(600, 280);
  brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#5ea83a", 180);
  brush.beginShape(0.9);
  brush.vertex(0, 400); brush.vertex(260, 360); brush.vertex(600, 410); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // flower splashes / blooms
  const fc = ["#f0442a", "#f7c21a", "#e0409a", "#8a4ad8", "#ffffff"];
  for (let i = 0; i < 40; i++) {
    brush.fill(fc[floor(random(4))], 200);
    brush.fillBleed(0.35);
    brush.circle(random(600), 330 + random(260), 4 + random(12), 0.9);
  }

  // drips: narrow-ish vertical runs falling from the meadow
  for (let i = 0; i < 6; i++) {
    const x = 40 + random(520), y = 420 + random(80);
    brush.fill("#3f8a2a", 170);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(x, y); brush.vertex(x + 16, y); brush.vertex(x + 12, y + 70 + random(60)); brush.vertex(x + 6, y + 75 + random(60));
    brush.endShape(true);
    brush.circle(x + 9, y + 130, 8, 0.4);
  }

  // children: small figures across the middle distance
  const kids = [
    [220, 330, "#e0302a", "#2a4ad8"],
    [260, 345, "#f7c21a", "#e0409a"],
    [340, 325, "#2aa0d8", "#f0442a"],
  ];
  for (const [x, y, top, bot] of kids) {
    brush.fillBleed(0.25);
    brush.fill(top, 230);
    brush.beginShape(0.5);
    brush.vertex(x - 8, y); brush.vertex(x + 8, y); brush.vertex(x + 10, y + 22); brush.vertex(x - 10, y + 22);
    brush.endShape(true);
    brush.fill(bot, 220);
    brush.beginShape(0.4);
    brush.vertex(x - 9, y + 20); brush.vertex(x + 9, y + 20); brush.vertex(x + 12, y + 42); brush.vertex(x - 12, y + 42);
    brush.endShape(true);
    brush.fill("#d99a6c", 230);
    brush.circle(x, y - 8, 8, 0.2);
    brush.fill("#5a3218", 210);
    brush.circle(x - 1, y - 11, 7, 0.4);
  }
  // kite above them
  brush.fill("#e0302a", 230);
  brush.beginShape(0);
  brush.vertex(410, 130); brush.vertex(435, 150); brush.vertex(412, 185); brush.vertex(390, 152);
  brush.endShape(true);
  brush.fill("#f7c21a", 220);
  brush.circle(400, 200, 5, 0.3);
  brush.circle(392, 218, 5, 0.3);
}
