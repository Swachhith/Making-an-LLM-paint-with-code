async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8dcc6");
  randomSeed(2521);
  brush.noStroke();

  // backdrop: raw umber and sage, loosely crossing
  brush.fill("#9c8058", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.45);
  brush.beginShape(1);
  brush.vertex(-10, -10); brush.vertex(480, -10); brush.vertex(380, 250); brush.vertex(-10, 400);
  brush.endShape(true);
  brush.fill("#7f8b6c", 165);
  brush.beginShape(1);
  brush.vertex(610, 180); brush.vertex(610, 610); brush.vertex(100, 610); brush.vertex(320, 400);
  brush.endShape(true);

  // stem
  for (let p = 0; p < 2; p++) {
    brush.fill(p ? "#343a1e" : "#525a32", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.7);
    brush.vertex(300, 300); brush.vertex(322, 300); brush.vertex(328, 430);
    brush.vertex(312, 595); brush.vertex(292, 595); brush.vertex(306, 430);
    brush.endShape(true);
  }
  // two serrated leaves on short petioles
  let leaf = (x, y, ang, len, c1, c2) => {
    let dx = cos(ang) * len, dy = sin(ang) * len, nx = -dy * 0.32, ny = dx * 0.32;
    brush.fill(c1, 210);
    brush.fillBleed(0.26);
    brush.fillTexture(0.5, 0.45);
    brush.beginShape(0.9);
    brush.vertex(x, y);
    brush.vertex(x + dx * 0.3 + nx, y + dy * 0.3 + ny);
    brush.vertex(x + dx * 0.65 + nx * 0.8, y + dy * 0.65 + ny * 0.8);
    brush.vertex(x + dx, y + dy);
    brush.vertex(x + dx * 0.65 - nx * 0.8, y + dy * 0.65 - ny * 0.8);
    brush.vertex(x + dx * 0.3 - nx, y + dy * 0.3 - ny);
    brush.endShape(true);
    brush.fill(c2, 215);
    brush.fillBleed(0.18);
    brush.beginShape(0.9);
    brush.vertex(x, y);
    brush.vertex(x + dx * 0.4 + nx * 0.8, y + dy * 0.4 + ny * 0.8);
    brush.vertex(x + dx * 0.95, y + dy * 0.95);
    brush.endShape(true);
  };
  leaf(310, 450, 200, 150, "#667038", "#343f1a");
  leaf(320, 510, -25, 140, "#747240", "#3e4220");

  // rose: five layered passes, each darker and tighter, so the red reads deep
  let cx = 312, cy = 210;
  let layers = [
    ["#8a2a22", 125, 7, 0.3],
    ["#741a1a", 108, 6, 0.28],
    ["#5e1014", 86, 6, 0.24],
    ["#480a10", 62, 5, 0.22],
    ["#300608", 38, 4, 0.2]
  ];
  for (let L = 0; L < layers.length; L++) {
    let [col, r, n, bl] = layers[L];
    let off = L * 23;
    for (let i = 0; i < n; i++) {
      let a = off + i * (360 / n) + random(-8, 8);
      brush.fill(col, 215);
      brush.fillBleed(bl);
      brush.fillTexture(0.5, 0.45);
      brush.beginShape(1);
      brush.vertex(cx + cos(a - 40) * r * 0.3, cy + sin(a - 40) * r * 0.3);
      brush.vertex(cx + cos(a - 20) * r, cy + sin(a - 20) * r * 0.9);
      brush.vertex(cx + cos(a + 10) * r * 1.05, cy + sin(a + 10) * r * 0.95);
      brush.vertex(cx + cos(a + 35) * r * 0.85, cy + sin(a + 35) * r * 0.8);
      brush.vertex(cx + cos(a + 50) * r * 0.3, cy + sin(a + 50) * r * 0.3);
      brush.endShape(true);
    }
  }
  // lit petal lips: warm rust crescents along the outer ring
  for (let i = 0; i < 5; i++) {
    let a = i * 72 + 10;
    brush.fill("#b0543c", 190);
    brush.fillBleed(0.22);
    brush.beginShape(1);
    brush.vertex(cx + cos(a - 18) * 112, cy + sin(a - 18) * 100);
    brush.vertex(cx + cos(a) * 128, cy + sin(a) * 114);
    brush.vertex(cx + cos(a + 18) * 112, cy + sin(a + 18) * 100);
    brush.vertex(cx + cos(a) * 100, cy + sin(a) * 90);
    brush.endShape(true);
  }
}
