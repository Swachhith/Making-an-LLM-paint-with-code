async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe6d6");
  randomSeed(2501);
  brush.noStroke();

  // soft umber ground wash behind the bloom
  brush.fill("#b7a282", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(1);
  brush.vertex(60, 90); brush.vertex(420, 50); brush.vertex(560, 250);
  brush.vertex(500, 540); brush.vertex(140, 560); brush.vertex(40, 330);
  brush.endShape(true);

  // stem, a wide soft olive band curving down
  brush.fill("#5e6a3a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(292, 250); brush.vertex(312, 250); brush.vertex(322, 380);
  brush.vertex(300, 575); brush.vertex(280, 575); brush.vertex(300, 380);
  brush.endShape(true);

  // left leaf, two passes
  let leaves = [[300, 400, -1], [312, 470, 1]];
  for (let L of leaves) {
    let [x, y, s] = L;
    brush.fill("#6f7a43", 190);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(1);
    brush.vertex(x, y); brush.vertex(x + s * 60, y - 45); brush.vertex(x + s * 130, y - 30);
    brush.vertex(x + s * 80, y + 18);
    brush.endShape(true);
    brush.fill("#48512a", 200);
    brush.fillBleed(0.2);
    brush.beginShape(1);
    brush.vertex(x + s * 10, y - 4); brush.vertex(x + s * 70, y - 34); brush.vertex(x + s * 115, y - 28);
    brush.vertex(x + s * 60, y + 2);
    brush.endShape(true);
  }

  // outer petals: broad earthy red washes
  let cx = 300, cy = 200;
  for (let i = 0; i < 7; i++) {
    let a = i * 51 + random(-10, 10);
    let r = random(95, 115);
    brush.fill(random(["#8a2f2a", "#7a3326", "#94382c"]), 185);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 28) * r * 0.8, cy + sin(a - 28) * r * 0.8);
    brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
    brush.vertex(cx + cos(a + 28) * r * 0.8, cy + sin(a + 28) * r * 0.8);
    brush.endShape(true);
  }
  // middle petals, deeper
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 25;
    let r = 68;
    brush.fill("#6b1f1e", 205);
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(1);
    brush.vertex(cx + cos(a - 40) * 18, cy + sin(a - 40) * 18);
    brush.vertex(cx + cos(a - 20) * r, cy + sin(a - 20) * r);
    brush.vertex(cx + cos(a + 20) * r * 0.9, cy + sin(a + 20) * r * 0.9);
    brush.endShape(true);
  }
  // heart of the rose: a tight dark spiral of overlapping discs
  for (let i = 0; i < 5; i++) {
    let a = i * 80;
    brush.fill("#4a1616", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.circle(cx + cos(a) * (30 - i * 5), cy + sin(a) * (30 - i * 5), 26 - i * 3, 0.4);
  }
}
