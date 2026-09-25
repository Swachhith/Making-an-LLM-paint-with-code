async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf0e2");
  randomSeed(808);
  brush.noStroke();
  brush.fill("#f5d9b0", 205);
  brush.fillBleed(0.5, "out");
  brush.fillTexture(0.5, 0.2);
  brush.circle(470, 120, 170, true);
  // stem and leaf
  brush.fill("#7a8e4e", 235);
  brush.fillBleed(0.06, "out");
  brush.beginShape(0.5);
  brush.vertex(290, 420); brush.vertex(282, 510); brush.vertex(300, 600); brush.vertex(314, 600); brush.vertex(296, 510); brush.vertex(304, 420);
  brush.endShape(true);
  brush.fill("#92a35d", 225);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.7);
  brush.vertex(288, 515); brush.vertex(380, 480); brush.vertex(450, 495); brush.vertex(370, 530);
  brush.endShape(true);
  // ranunculus from the side, slightly above: a wide cup, top rim an ellipse of tight rings
  let cx = 300, cy = 250;
  // cup body
  brush.fill("#f7c29a", 225);
  brush.fillBleed(0.2, "out");
  brush.fillTexture(0.5, 0.55);
  brush.beginShape(0.9);
  brush.vertex(cx - 190, cy); brush.vertex(cx - 170, cy + 110); brush.vertex(cx - 90, cy + 175); brush.vertex(cx, cy + 190);
  brush.vertex(cx + 90, cy + 175); brush.vertex(cx + 170, cy + 110); brush.vertex(cx + 190, cy);
  brush.endShape(true);
  // outer wrapping petals: overlapping scallops around the cup
  for (let i = 0; i < 6; i++) {
    let x0 = cx - 180 + i * 70;
    let dip = 150 - abs(i - 2.5) * 30;
    brush.fill(i % 2 ? "#ef9d6e" : "#f4b085", 225);
    brush.fillBleed(0.12, "out");
    brush.fillTexture(0.55, 0.7);
    brush.beginShape(0.9);
    brush.vertex(x0 - 10, cy + 10);
    brush.vertex(x0 + 10, cy + dip * 0.8);
    brush.vertex(x0 + 50, cy + dip);
    brush.vertex(x0 + 90, cy + dip * 0.8);
    brush.vertex(x0 + 100, cy + 20);
    brush.vertex(x0 + 45, cy - 10);
    brush.endShape(true);
  }
  // top face: concentric ellipses, tight rings of petals
  for (let r = 0; r < 8; r++) {
    let rx = 185 - r * 22, ry = 58 - r * 6.5;
    let col = r < 3 ? "#f6b88e" : (r < 6 ? "#f0a077" : "#e2835a");
    brush.fill(col, 220 + r * 3);
    brush.fillBleed(0.1, "out");
    brush.fillTexture(0.55, 0.75);
    brush.beginShape(0.9);
    for (let k = 0; k < 14; k++) {
      let a = k * 360 / 14;
      let wob = 1 + random(-0.05, 0.05);
      brush.vertex(cx + cos(a) * rx * wob, cy + sin(a) * ry * wob - r * 3);
    }
    brush.endShape(true);
  }
  brush.fill("#9fa458", 230);
  brush.fillBleed(0.1, "out");
  brush.circle(cx, cy - 25, 14, true);
  // sepals
  brush.fill("#667f3e", 240);
  brush.fillBleed(0.08, "out");
  brush.beginShape(0.6);
  brush.vertex(240, 425); brush.vertex(297, 450); brush.vertex(355, 425); brush.vertex(297, 436);
  brush.endShape(true);
}
