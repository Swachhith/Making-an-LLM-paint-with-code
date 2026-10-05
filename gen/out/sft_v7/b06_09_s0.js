async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece5d4");
  randomSeed(2002);
  brush.noStroke();

  // earthy background washes
  brush.fill("#b8b098", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 350); brush.vertex(350, 420); brush.vertex(-20, 380);
  brush.endShape(true);
  brush.fill("#9aa288", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stems
  brush.fill("#5e6244", 215);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(210, 470); brush.vertex(216, 470); brush.vertex(220, 620); brush.vertex(214, 620);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(470, 450); brush.vertex(476, 450); brush.vertex(480, 620); brush.vertex(474, 620);
  brush.endShape(true);

  // open anemone: ring of pointed petals, dark centre
  let cx = 212, cy = 210;
  for (let k = 0; k < 20; k++) {
    let a = k * 18 + random(-4, 4);
    let L = 110 + random(-8, 8);
    brush.fill("#9a8a6e", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(cx + cos(a - 10) * L * 0.3, cy + sin(a - 10) * L * 0.3);
    brush.vertex(cx + cos(a) * L, cy + sin(a) * L);
    brush.vertex(cx + cos(a + 10) * L * 0.3, cy + sin(a + 10) * L * 0.3);
    brush.endShape(true);
    brush.fill("#7a6e56", 180);
    brush.beginShape(0.6);
    brush.vertex(cx + cos(a - 7) * L * 0.6, cy + sin(a - 7) * L * 0.6);
    brush.vertex(cx + cos(a) * L * 0.85, cy + sin(a) * L * 0.85);
    brush.vertex(cx + cos(a + 7) * L * 0.6, cy + sin(a + 7) * L * 0.6);
    brush.endShape(true);
  }
  brush.fill("#3e2a22", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 32, 0.3);
  brush.fill("#1a1210", 220);
  brush.circle(cx + 2, cy + 2, 18, 0.3);

  // closed bud, side view
  brush.fill("#9a8a6e", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(470, 440); brush.vertex(486, 440); brush.vertex(480, 410); brush.vertex(466, 410);
  brush.endShape(true);
  brush.fill("#7a6e56", 180);
  brush.beginShape(0.5);
  brush.vertex(470, 440); brush.vertex(486, 440); brush.vertex(480, 420); brush.vertex(468, 420);
  brush.endShape(true);
  brush.fill("#3e2a22", 220);
  brush.beginShape(0.5);
  brush.vertex(470, 440); brush.vertex(480, 420); brush.vertex(468, 420);
  brush.endShape(true);
  brush.fill("#1a1210", 220);
  brush.circle(474, 426, 6, 0.3);
}
