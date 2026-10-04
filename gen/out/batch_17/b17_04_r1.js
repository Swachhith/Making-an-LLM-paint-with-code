async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf6ee");
  randomSeed(44);
  brush.noStroke();
  // splashy blooms of colour behind
  let blots = [["#e86aa6", 120, 180, 90], ["#9bc46a", 440, 470, 110], ["#f0a2c4", 480, 150, 70], ["#c24a8a", 150, 420, 60]];
  for (let b of blots) {
    brush.fill(b[0], 140);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(b[1], b[2], b[3], 0.7);
  }
  // arcing stem from bottom-left sweeping to upper-right
  brush.fill("#4f7a2a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(60, 600);
  brush.vertex(180, 430);
  brush.vertex(330, 300);
  brush.vertex(420, 250);
  brush.vertex(432, 282);
  brush.vertex(345, 336);
  brush.vertex(204, 460);
  brush.vertex(96, 612);
  brush.endShape(true);
  // leaves
  brush.fill("#5f8f33", 190);
  brush.beginShape(0.8);
  brush.vertex(200, 425);
  brush.vertex(260, 460);
  brush.vertex(330, 450);
  brush.vertex(270, 420);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(130, 510);
  brush.vertex(70, 470);
  brush.vertex(30, 480);
  brush.vertex(90, 530);
  brush.endShape(true);
  // drooping petals radiating downward from cone at (440,240)
  let cx = 420, cy = 230;
  for (let i = 0; i < 15; i++) {
    let a = 0 + i * (180 / 14);
    let len = random(130, 160);
    let tx = cx + cos(a) * len, ty = cy + sin(a) * len * 0.9 + 20;
    let px = cos(a + 90) * 22, py = sin(a + 90) * 22;
    brush.fill(i % 2 ? "#e0418a" : "#ec5f9e", random(180, 230));
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(cx + px * 0.5, cy + py * 0.5);
    brush.vertex((cx + tx) / 2 + px, (cy + ty) / 2 + py);
    brush.vertex(tx, ty);
    brush.vertex((cx + tx) / 2 - px, (cy + ty) / 2 - py);
    brush.vertex(cx - px * 0.5, cy - py * 0.5);
    brush.endShape(true);
  }
  // drips below petals
  for (let i = 0; i < 5; i++) {
    let x = 350 + i * 32;
    brush.fill("#d23c80", 170);
    brush.fillBleed(0.2);
    brush.beginShape(0.5);
    brush.vertex(x - 8, 380);
    brush.vertex(x + 8, 380);
    brush.vertex(x + 5, 420 + random(20, 90));
    brush.vertex(x - 5, 420 + random(20, 90));
    brush.endShape(true);
    brush.circle(x, 510 + random(10, 60), 9, 0.3);
  }
  // domed cone
  brush.fill("#c8641a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy - 5, 55, 0.3);
  brush.fill("#7a3410", 210);
  brush.circle(cx + 8, cy - 14, 34, 0.4);
  // spatter
  for (let i = 0; i < 40; i++) {
    brush.fill(random() < 0.6 ? "#e0418a" : "#6a9a3a", 200);
    brush.fillBleed(0.1);
    brush.circle(random(200, 600), random(60, 560), random(2, 6), 0.3);
  }
}
