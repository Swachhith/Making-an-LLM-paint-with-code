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
  brush.vertex(-40, 290); brush.vertex(200, 270); brush.vertex(420, 300); brush.vertex(640, 280);
  brush.vertex(640, 640); brush.vertex(-40, 640);
  brush.endShape(true);
  brush.fill("#5ea83a", 180);
  brush.beginShape(0.9);
  brush.vertex(-40, 400); brush.vertex(260, 360); brush.vertex(640, 410); brush.vertex(640, 640); brush.vertex(-40, 640);
  brush.endShape(true);

  // flower splashes / blooms
  const fc = ["#f0442a", "#f7c21a", "#e0409a", "#8a4ad8", "#ffffff"];
  for (let i = 0; i < 40; i++) {
    brush.fill(fc[floor(random(4))], 200);
    brush.fillBleed(0.35);
    brush.circle(random(600), 330 + random(260), 4 + random(12), 0.9);
  }

  // drips running down from the sky wash, and back-run blooms in the meadow
  for (let i = 0; i < 5; i++) {
    const x = 30 + i * 120 + random(40);
    brush.fill(random(["#6fb3e8", "#f4b6c8"]), 170);
    brush.fillBleed(0.3);
    brush.beginShape(0.7);
    brush.vertex(x, 210); brush.vertex(x + 18, 210); brush.vertex(x + 13, 290 + random(40)); brush.vertex(x + 5, 290 + random(40));
    brush.endShape(true);
  }
  for (let i = 0; i < 7; i++) {
    brush.fill(random(["#f7c21a", "#3f8a2a", "#e0409a"]), 150);
    brush.fillBleed(0.4);
    brush.circle(random(600), 420 + random(160), 25 + random(30), 1);
  }

  // children: small figures across the middle distance
  const kids = [
    [200, 335, "#e0302a", "#2a4ad8"],
    [262, 350, "#f7c21a", "#e0409a"],
    [370, 322, "#2aa0d8", "#f0442a"],
  ];
  for (const [x, y, shirt, bot] of kids) {
    brush.fillBleed(0.25);
    brush.fill(shirt, 230);
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
