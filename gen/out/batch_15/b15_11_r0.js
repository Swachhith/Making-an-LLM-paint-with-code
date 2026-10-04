async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf6ef");
  randomSeed(1111);
  brush.noStroke();

  let cx = 210, cy = 390;

  // leaves reaching out
  brush.fill("#2f7a3a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(cx + 60, cy + 40);
  brush.vertex(cx + 200, cy + 60);
  brush.vertex(cx + 230, cy + 120);
  brush.vertex(cx + 110, cy + 100);
  brush.endShape(true);
  brush.fill("#1f5a2a", 190);
  brush.beginShape(0.8);
  brush.vertex(cx - 40, cy + 80);
  brush.vertex(cx - 120, cy + 180);
  brush.vertex(cx - 60, cy + 190);
  brush.vertex(cx + 10, cy + 110);
  brush.endShape(true);

  // outer ruffled petals
  for (let i = 0; i < 11; i++) {
    let a = i * 33 + random(-8, 8);
    let r = random(95, 125);
    brush.fill(random(["#ff6a4a", "#f5563c", "#ff7a5c"]), random(180, 220));
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 22) * r * 0.8, cy + sin(a - 22) * r * 0.8);
    brush.vertex(cx + cos(a - 8) * r, cy + sin(a - 8) * r);
    brush.vertex(cx + cos(a + 6) * r * 0.9, cy + sin(a + 6) * r * 0.9);
    brush.vertex(cx + cos(a + 22) * r * 0.82, cy + sin(a + 22) * r * 0.82);
    brush.endShape(true);
  }
  // inner cupped petals
  for (let i = 0; i < 9; i++) {
    let a = i * 40 + random(-10, 10);
    let r = random(50, 75);
    brush.fill(random(["#e8402e", "#d8302a"]), random(170, 210));
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a) * 8, cy + sin(a) * 8);
    brush.vertex(cx + cos(a - 25) * r, cy + sin(a - 25) * r);
    brush.vertex(cx + cos(a) * r * 1.1, cy + sin(a) * r * 1.1);
    brush.vertex(cx + cos(a + 25) * r, cy + sin(a + 25) * r);
    brush.endShape(true);
  }
  // deep heart
  brush.fill("#b01e28", 220);
  brush.fillBleed(0.2);
  brush.circle(cx + 5, cy - 5, 26, 0.6);
  brush.fill("#ffc040", 220);
  brush.fillBleed(0.15);
  for (let i = 0; i < 8; i++) brush.circle(cx + random(-14, 14), cy + random(-14, 14), 3.5, 0.2);
}
