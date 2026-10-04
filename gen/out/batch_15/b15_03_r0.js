async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbe7c6");
  randomSeed(33);

  brush.noStroke();
  let bands = [
    [0, "#5a2a6e", 200],
    [90, "#b8345a", 200],
    [180, "#e8563a", 210],
    [260, "#f49a3a", 200],
  ];
  for (let b of bands) {
    brush.fill(b[1], b[2]);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(0, b[0]);
    brush.vertex(600, b[0] - 10);
    brush.vertex(600, b[0] + 120);
    brush.vertex(0, b[0] + 110);
    brush.endShape(true);
  }

  // sun left mostly as paper glow
  brush.fill("#ffd36a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(430, 330, 48, 0.15);
  brush.fill("#ffc24a", 120);
  brush.fillBleed(0.3);
  brush.circle(430, 330, 90, 0.4);

  // back skyline, dim purple
  brush.fill("#5b2a4a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0);
  let x = 0;
  brush.vertex(0, 420);
  while (x < 600) {
    let h = random(300, 380);
    let w = random(30, 60);
    brush.vertex(x, h);
    brush.vertex(x + w, h);
    x += w;
  }
  brush.vertex(600, 440);
  brush.vertex(0, 440);
  brush.endShape(true);

  // front skyline, near black
  let tall = [
    [0, 50, 360], [50, 40, 300], [90, 55, 340], [145, 30, 250], [175, 60, 330],
    [235, 45, 380], [280, 70, 310], [350, 35, 390], [385, 55, 350],
    [440, 40, 400], [480, 60, 320], [540, 60, 370],
  ];
  for (let t of tall) {
    brush.fill("#1c1024", 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0);
    brush.vertex(t[0], t[2]);
    brush.vertex(t[0] + t[1], t[2]);
    brush.vertex(t[0] + t[1], 470);
    brush.vertex(t[0], 470);
    brush.endShape(true);
  }
  brush.fill("#1c1024", 235);
  brush.beginShape(0);
  brush.vertex(152, 250);
  brush.vertex(166, 200);
  brush.vertex(168, 250);
  brush.endShape(true);

  // river
  brush.fill("#2a1830", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(0, 465);
  brush.vertex(600, 465);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  // sun reflection streaks
  for (let i = 0; i < 7; i++) {
    let y = 485 + i * 16;
    let w = 60 - i * 5;
    brush.fill("#f49a3a", 200);
    brush.fillBleed(0.2);
    brush.beginShape(0.4);
    brush.vertex(430 - w, y);
    brush.vertex(430 + w, y + 2);
    brush.vertex(430 + w - 10, y + 12);
    brush.vertex(430 - w + 10, y + 11);
    brush.endShape(true);
  }

  // few lit windows
  for (let i = 0; i < 18; i++) {
    brush.fill("#ffb040", 220);
    brush.fillBleed(0.1);
    brush.circle(random(20, 580), random(360, 455), 2.5, 0.1);
  }
}
