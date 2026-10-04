async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f5f7");
  randomSeed(808);
  brush.noStroke();
  // cool light: soft blue-grey sky, pale mint meadow blur
  brush.fill("#aec6d6", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 300);
  brush.vertex(-20, 340);
  brush.endShape(true);
  brush.fill("#9fc2b4", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 330);
  brush.vertex(250, 300);
  brush.vertex(620, 320);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // soft out-of-focus companion blooms, blurred pale
  for (let i = 0; i < 5; i++) {
    brush.fill(random(["#e7d68a", "#b9d0dc", "#c9dbc0"]), 140);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(random(40, 250), random(380, 560), random(25, 45), 0.9);
  }
  // grass blades behind, cool green
  for (let i = 0; i < 10; i++) {
    let x = random(250, 600);
    brush.fill("#6d9a88", 170);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(x, 620);
    brush.vertex(x + random(-30, 30), random(430, 500));
    brush.vertex(x + 16, 620);
    brush.endShape(true);
  }
  let cx = 420, cy = 350;
  // stem & leaf
  for (let p = 0; p < 2; p++) {
    brush.fill("#4f7e5e", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(cx - 8, cy + 20);
    brush.vertex(cx + 8, cy + 20);
    brush.vertex(cx + 20, 620);
    brush.vertex(cx + 4, 620);
    brush.endShape(true);
  }
  brush.fill("#4f7e5e", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(cx + 12, 520);
  brush.vertex(cx - 40, 470);
  brush.vertex(cx - 100, 455);
  brush.vertex(cx - 55, 505);
  brush.endShape(true);
  // cool-blue shadow cast by the petals
  brush.fill("#7f9fbb", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx + 12, cy + 18, 80, 0.7);
  // 13 golden rays, drooping tips, three passes
  let n = 13;
  for (let pass = 0; pass < 3; pass++) {
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + pass * 4;
      let L = [92, 80, 60][pass];
      let w = [15, 12, 8][pass];
      brush.fill(["#f5c02a", "#e7a40f", "#c97f06"][pass], [190, 200, 190][pass]);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a - 90) * w, cy + sin(a - 90) * w);
      brush.vertex(cx + cos(a) * L * 0.6 + cos(a - 90) * w, cy + sin(a) * L * 0.6 + sin(a - 90) * w + 4);
      brush.vertex(cx + cos(a) * L, cy + sin(a) * L + 10);
      brush.vertex(cx + cos(a) * L * 0.6 + cos(a + 90) * w, cy + sin(a) * L * 0.6 + sin(a + 90) * w + 4);
      brush.vertex(cx + cos(a + 90) * w, cy + sin(a + 90) * w);
      brush.endShape(true);
    }
  }
  // dark domed cone
  brush.fill("#3a2616", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 24, 0.5);
  brush.fill("#1c120a", 225);
  brush.circle(cx - 4, cy - 4, 13, 0.5);
}
