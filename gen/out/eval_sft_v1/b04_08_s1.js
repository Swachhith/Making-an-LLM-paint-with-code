async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4e6");
  randomSeed(3131);
  brush.noStroke();

  // warm sky wash, top left
  brush.fill("#e8c8a8", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(0, 0); brush.vertex(250, 0); brush.vertex(300, 150); brush.vertex(0, 150);
  brush.endShape(true);

  // stem
  brush.fill("#8a6a3a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 300); brush.vertex(325, 300); brush.vertex(325, 600); brush.vertex(300, 600);
  brush.endShape(true);
  // two leaves
  for (let L of [[-22, 280], [22, 420]]) {
    brush.fill("#6a5a3a", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(300, 300); brush.vertex(300 + L[0] * 18, 300 + L[1] * 10);
    brush.vertex(300 + L[0] * 45, 300 + L[1] * 45); brush.vertex(300 + L[0] * 40, 300 + L[1] * 60);
    brush.vertex(300 + L[0] * 10, 300 + L[1] * 50); brush.vertex(300 + L[0] * 22, 300 + L[1] * 18);
    brush.endShape(true);
  }
  // ground dabs
  brush.fill("#b89a6a", 170);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(150, 520, 45, 0.6);
  brush.circle(470, 540, 50, 0.6);
  brush.circle(300, 590, 35, 0.6);

  // anemone: ten pointed petals, five passes each
  let cx = 300, cy = 300;
  for (let pass = 0; pass < 5; pass++) {
    brush.fill("#3a6fa8", 230 - pass * 20);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.5);
    for (let k = 0; k < 10; k++) {
      let a = k * 36 + pass * 10 + random(-3, 3);
      let r = 110 * ((pass + 1) / 5);
      brush.beginShape(0.9);
      brush.vertex(cx + cos(a) * r * 0.2, cy + sin(a) * r * 0.2);
      brush.vertex(cx + cos(a - 22) * r, cy + sin(a - 22) * r);
      brush.vertex(cx + cos(a - 14) * r * 0.9, cy + sin(a - 14) * r * 0.9);
      brush.vertex(cx + cos(a + 14) * r * 0.9, cy + sin(a + 14) * r * 0.9);
      brush.vertex(cx + cos(a + 22) * r, cy + sin(a + 22) * r);
      brush.endShape(true);
    }
  }
  // dark veins
  brush.fill("#1e3a6a", 210);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  for (let k = 0; k < 10; k++) {
    let a = k * 36;
    brush.beginShape(0.4);
    brush.vertex(cx + cos(a) * 100, cy + sin(a) * 100);
    brush.vertex(cx + cos(a) * 40, cy + sin(a) * 40);
    brush.vertex(cx + cos(a) * 15, cy + sin(a) * 15);
    brush.endShape(true);
  }
  // centre
  brush.fill("#d99a3a", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 32, 0.4);
  brush.fill("#b05a1a", 220);
  brush.circle(cx, cy, 20, 0.4);
  brush.fill("#f2d89a", 250);
  brush.circle(cx, cy, 8, 0.3);
}
