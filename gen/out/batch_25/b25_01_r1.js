async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ebe0cc");
  randomSeed(2511);
  brush.noStroke();

  // two overlapping earthy washes for the backdrop: sepia top-left, sage bottom-right
  brush.fill("#a88b62", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.45);
  brush.beginShape(1);
  brush.vertex(-10, -10); brush.vertex(470, -10); brush.vertex(360, 260); brush.vertex(-10, 380);
  brush.endShape(true);
  brush.fill("#8d977a", 160);
  brush.beginShape(1);
  brush.vertex(610, 200); brush.vertex(610, 610); brush.vertex(120, 610); brush.vertex(300, 420);
  brush.endShape(true);

  // stem leaning slightly
  for (let p = 0; p < 2; p++) {
    brush.fill(p ? "#3d4424" : "#56603a", 215);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.7);
    brush.vertex(305 + p * 4, 300); brush.vertex(325 - p * 2, 300); brush.vertex(330, 420);
    brush.vertex(315, 590); brush.vertex(296 + p * 3, 590); brush.vertex(310, 420);
    brush.endShape(true);
  }
  // leaves as long pointed ellipses, one each side
  let leaf = (x, y, dx, dy, c1, c2) => {
    brush.fill(c1, 200);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.45);
    brush.beginShape(1);
    brush.vertex(x, y); brush.vertex(x + dx * 0.5 - dy * 0.3, y + dy * 0.5 + dx * 0.3);
    brush.vertex(x + dx, y + dy); brush.vertex(x + dx * 0.5 + dy * 0.3, y + dy * 0.5 - dx * 0.3);
    brush.endShape(true);
    brush.fill(c2, 210);
    brush.fillBleed(0.2);
    brush.beginShape(1);
    brush.vertex(x, y); brush.vertex(x + dx * 0.5 + dy * 0.25, y + dy * 0.5 - dx * 0.25);
    brush.vertex(x + dx * 0.95, y + dy * 0.95);
    brush.endShape(true);
  };
  leaf(315, 440, -150, -40, "#6b7440", "#3f4a22");
  leaf(322, 500, 140, -60, "#7a7a44", "#4a4d26");

  // bloom: several layered passes of oxblood and madder, cupped shape
  let cx = 310, cy = 215;
  brush.fill("#7c2a22", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.circle(cx, cy, 120, 0.6);
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + random(-12, 12);
    brush.fill(random(["#6e1c1a", "#7a221c", "#5e1916"]), 210);
    brush.fillBleed(0.26);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(cx + cos(a - 50) * 40, cy + sin(a - 50) * 40);
    brush.vertex(cx + cos(a - 15) * 118, cy + sin(a - 15) * 110);
    brush.vertex(cx + cos(a + 20) * 110, cy + sin(a + 20) * 105);
    brush.vertex(cx + cos(a + 35) * 45, cy + sin(a + 35) * 45);
    brush.endShape(true);
  }
  // inner cup: curling bands
  for (let i = 0; i < 5; i++) {
    let a = i * 72 + 20;
    brush.fill("#4a1210", 215);
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(1);
    brush.vertex(cx + cos(a) * 20, cy + sin(a) * 20);
    brush.vertex(cx + cos(a + 30) * 70, cy + sin(a + 30) * 62);
    brush.vertex(cx + cos(a + 80) * 55, cy + sin(a + 80) * 50);
    brush.vertex(cx + cos(a + 70) * 25, cy + sin(a + 70) * 25);
    brush.endShape(true);
  }
  brush.fill("#2e0a0a", 225);
  brush.fillBleed(0.2);
  brush.circle(cx + 4, cy - 2, 22, 0.5);
  // a few paler rust highlights on outer petal rims
  for (let i = 0; i < 4; i++) {
    let a = i * 90 + 45;
    brush.fill("#a8503a", 180);
    brush.fillBleed(0.25);
    brush.circle(cx + cos(a) * 95, cy + sin(a) * 90, 18, 0.7);
  }
}
