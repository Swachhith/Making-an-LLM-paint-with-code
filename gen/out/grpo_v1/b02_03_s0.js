async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f6f8");
  randomSeed(1111);
  brush.noStroke();
  // cool blue-grey ground
  brush.fill("#a8b8d4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(0, 600); brush.vertex(600, 600); brush.vertex(600, 420); brush.vertex(420, 380); brush.vertex(300, 420); brush.vertex(120, 460); brush.vertex(0, 480);
  brush.endShape(true);
  // stem
  brush.fill("#3f6a4a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(290, 480); brush.vertex(300, 480); brush.vertex(300, 600); brush.vertex(290, 600);
  brush.endShape(true);
  // leaves
  brush.fill("#2f5a3e", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(280, 520); brush.vertex(220, 490); brush.vertex(160, 540); brush.vertex(220, 570);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(300, 570); brush.vertex(360, 540); brush.vertex(420, 580); brush.vertex(360, 610);
  brush.endShape(true);
  // bloom
  let cx = 300, cy = 360;
  for (let pass = 0; pass < 3; pass++) {
    let r = 135 - pass * 14;
    let off = pass === 0 ? 12 : 2;
    brush.fill("#c2122a", 210 - pass * 10);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    for (let i = 0; i < 18; i++) {
      let a = i * 20 + off;
      let len = r + random(-6, 6);
      brush.vertex(cx + cos(a) * len, cy + sin(a) * len);
    }
    brush.endShape(true);
    brush.fill("#8a081a", 190 - pass * 10);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.5);
    for (let i = 0; i < 14; i++) {
      let a = i * 25.7 + off * 2;
      let len = r * 0.7 + random(-4, 4);
      brush.vertex(cx + cos(a) * len, cy + sin(a) * len);
    }
    brush.endShape(true);
  }
  // petal tips
  brush.fill("#7a0518", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(cx + 60, cy - 40); brush.vertex(cx + 100, cy - 100); brush.vertex(cx + 140, cy - 50); brush.vertex(cx + 100, cy - 30);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(cx - 60, cy - 40); brush.vertex(cx - 100, cy - 100); brush.vertex(cx - 140, cy - 50); brush.vertex(cx - 100, cy - 30);
  brush.endShape(true);
  // centre
  brush.fill("#d94a1a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(cx, cy, 30, 0.3);
  brush.fill("#e86a2a", 230);
  brush.circle(cx, cy, 18, 0.3);
}
