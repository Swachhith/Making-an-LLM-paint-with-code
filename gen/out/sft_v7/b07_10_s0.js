async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  randomSeed(1212);
  brush.noStroke();

  // deep green leaf behind, large and loose
  brush.fill("#1f6a2a", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(40, 360); brush.vertex(160, 320); brush.vertex(260, 370); brush.vertex(340, 430); brush.vertex(280, 480); brush.vertex(180, 440); brush.vertex(60, 410);
  brush.endShape(true);
  brush.fill("#0f421e", 170);
  brush.beginShape(0.6);
  brush.vertex(20, 390); brush.vertex(100, 330); brush.vertex(150, 380); brush.vertex(100, 440); brush.vertex(30, 420);
  brush.endShape(true);

  // stem
  brush.fill("#2e8a1a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 480); brush.vertex(310, 480); brush.vertex(320, 600); brush.vertex(290, 600);
  brush.endShape(true);

  // bloom seen from the side: overlapping petals, a few open, one closed
  let cx = 300, cy = 220;
  for (let i = 0; i < 10; i++) {
    let a = i * 36 + random(-6, 6);
    let len = 170 + random(-10, 10);
    let w = 55 + random(-10, 10);
    let o = random(0.9, 1.0);
    brush.fill(random(["#ff8fb0", "#ff7299", "#ff5aa8", "#f0307a"]), random(170, 240));
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.4);
    brush.vertex(cx + cos(a - 18) * w * 0.35, cy + sin(a - 18) * w * 0.35);
    brush.vertex(cx + cos(a - 130) * len * o * 0.7, cy + sin(a - 130) * len * o * 0.7);
    brush.vertex(cx + cos(a - 70) * len * o, cy + sin(a - 70) * len * o);
    brush.vertex(cx + cos(a - 130) * len * o * 1.1, cy + sin(a - 130) * len * o * 1.1);
    brush.vertex(cx + cos(a - 70) * len * o * 1.1, cy + sin(a - 70) * len * o * 1.1);
    brush.vertex(cx + cos(a - 130) * len * o * 0.7, cy + sin(a - 130) * len * o * 0.7);
    brush.vertex(cx + cos(a - 18) * w * 0.35, cy + sin(a - 18) * w * 0.35);
    brush.endShape(true);
  }
  // closed bud, one petal still curled
  brush.fill("#ff4a8a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(cx - 20, cy - 20); brush.vertex(cx + 20, cy - 20); brush.vertex(cx + 20, cy + 30); brush.vertex(cx - 20, cy + 30);
  brush.endShape(true);
  brush.fill("#ff9a70", 200);
  brush.beginShape(0.5);
  brush.vertex(cx - 12, cy - 12); brush.vertex(cx + 12, cy - 12); brush.vertex(cx + 12, cy + 12); brush.vertex(cx - 12, cy + 12);
  brush.endShape(true);
  // dark centre
  brush.fill("#5a1a2a", 225);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 16, 0.4);
}
