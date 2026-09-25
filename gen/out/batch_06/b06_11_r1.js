async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5ebe4");
  randomSeed(1112);
  brush.noStroke();
  // deep plum backdrop, strong
  brush.fill("#4a1240", 235);
  brush.fillBleed(0.3, "out");
  brush.fillTexture(0.7, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-20, 60); brush.vertex(380, 20); brush.vertex(620, 120); brush.vertex(620, 500); brush.vertex(240, 580); brush.vertex(-20, 500);
  brush.endShape(true);
  // leaves, saturated green
  let leaves = [[190, 420, 50, 540], [380, 430, 540, 540], [140, 230, 20, 140], [420, 180, 560, 80]];
  for (let L of leaves) {
    brush.fill("#1c8a3f", 230);
    brush.fillBleed(0.15, "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(L[0], L[1]);
    brush.vertex((L[0] + L[2]) / 2 + 35, (L[1] + L[3]) / 2 - 35);
    brush.vertex(L[2], L[3]);
    brush.vertex((L[0] + L[2]) / 2 - 35, (L[1] + L[3]) / 2 + 35);
    brush.endShape(true);
  }
  // rose 1: open face, large, upper left
  let ax = 220, ay = 250;
  brush.fill("#f2b8c6", 230);
  brush.fillBleed(0.2, "out");
  brush.fillTexture(0.5, 0.5);
  brush.circle(ax, ay, 150, true);
  for (let k = 0; k < 20; k++) {
    let a = k * 97;
    let r = 150 - k * 6.5;
    brush.fill(k < 7 ? "#e58aa3" : (k < 14 ? "#d45f84" : "#a8325f"), 210 + k);
    brush.fillBleed(0.15, "out");
    brush.fillTexture(0.55, 0.6);
    brush.beginShape(0.9);
    brush.vertex(ax + cos(a) * r * 0.3, ay + sin(a) * r * 0.3);
    brush.vertex(ax + cos(a + 25) * r, ay + sin(a + 25) * r * 0.92);
    brush.vertex(ax + cos(a + 60) * r * 1.03, ay + sin(a + 60) * r * 0.95);
    brush.vertex(ax + cos(a + 95) * r, ay + sin(a + 95) * r * 0.92);
    brush.vertex(ax + cos(a + 120) * r * 0.3, ay + sin(a + 120) * r * 0.3);
    brush.endShape(true);
  }
  brush.fill("#7a1a45", 235);
  brush.fillBleed(0.1, "out");
  brush.circle(ax + 4, ay - 2, 16, true);
  // rose 2: side profile, lower right, tilted
  let bx = 430, by = 360;
  brush.fill("#146e32", 235);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.5);
  brush.vertex(bx - 70, by + 55); brush.vertex(bx, by + 110); brush.vertex(bx + 60, by + 60); brush.vertex(bx, by + 85);
  brush.endShape(true);
  for (let i = 0; i < 7; i++) {
    let w = 120 - i * 13;
    let top = by - 90 + i * 10;
    brush.fill(i % 2 ? "#cf5a82" : "#e893ab", 220 + i * 3);
    brush.fillBleed(0.15, "out");
    brush.fillTexture(0.55, 0.6);
    brush.beginShape(0.9);
    brush.vertex(bx - w, top + 10);
    brush.vertex(bx - w * 0.85, by + 30);
    brush.vertex(bx - 10, by + 85 - i * 6);
    brush.vertex(bx + w * 0.85, by + 25);
    brush.vertex(bx + w, top - 5);
    brush.vertex(bx, top + 30);
    brush.endShape(true);
  }
}
