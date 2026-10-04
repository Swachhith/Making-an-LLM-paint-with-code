async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3efec");
  randomSeed(404);
  brush.noStroke();
  // misty sky, narrow because the horizon is high
  brush.fill("#d7d2d6", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 140); brush.vertex(-20, 150);
  brush.endShape(true);
  // faint tree line in the haze
  brush.fill("#aeb3a8", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(-20, 140); brush.vertex(60, 118); brush.vertex(150, 128); brush.vertex(260, 110); brush.vertex(330, 126); brush.vertex(470, 115); brush.vertex(620, 130); brush.vertex(620, 150); brush.vertex(-20, 155);
  brush.endShape(true);
  // the meadow
  brush.fill("#c9cfae", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 145); brush.vertex(620, 138); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#b3bf95", 170);
  brush.beginShape(0.8);
  brush.vertex(-20, 330); brush.vertex(200, 300); brush.vertex(620, 350); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a pink haze where the poppies are thick
  brush.fill("#e0a9a0", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(-20, 200); brush.vertex(300, 180); brush.vertex(620, 210); brush.vertex(620, 290); brush.vertex(-20, 280);
  brush.endShape(true);
  // poppies, tiny near the horizon, larger toward us
  for (let i = 0; i < 170; i++) {
    let t = pow(random(), 0.8);
    let y = 160 + t * 440;
    let x = random(-10, 610);
    let r = 2 + t * 13;
    brush.fill(random(["#d9534a", "#e0685a", "#c9483f"]), random(150, 200));
    brush.fillBleed(0.28);
    brush.fillTexture(0.3, 0.4);
    brush.circle(x, y, r, 0.5);
    if (t > 0.55) {
      brush.fill("#b8413c", 170);
      brush.circle(x + r * 0.2, y + r * 0.15, r * 0.6, 0.5);
      brush.fill("#5a5250", 150);
      brush.fillBleed(0.15);
      brush.circle(x + r * 0.1, y, r * 0.2, 0.2);
    }
  }
  // soft green grass strokes in the foreground
  for (let i = 0; i < 14; i++) {
    let x = random(0, 600);
    brush.fill("#8e9f76", 160);
    brush.fillBleed(0.3);
    brush.beginShape(0.5);
    brush.vertex(x - 10, 620); brush.vertex(x + random(-10, 10), 520 + random(0, 40)); brush.vertex(x + 12, 620);
    brush.endShape(true);
  }
}
