async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  randomSeed(202);
  brush.noStroke();

  // sage stems, loose
  brush.fill("#7f8660", 220);
  brush.fillBleed(0.2, "out");
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(210, 260); brush.vertex(240, 420); brush.vertex(300, 600); brush.vertex(310, 600); brush.vertex(252, 418); brush.vertex(222, 262);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(420, 360); brush.vertex(370, 480); brush.vertex(318, 600); brush.vertex(328, 600); brush.vertex(382, 484); brush.vertex(430, 366);
  brush.endShape(true);
  brush.fill("#8a9468", 160);
  brush.fillBleed(0.35, "out");
  brush.beginShape(0.8);
  brush.vertex(250, 470); brush.vertex(150, 440); brush.vertex(110, 490); brush.vertex(200, 510);
  brush.endShape(true);

  // bloom A: front-facing, concentric rings of small petals
  let ax = 210, ay = 230;
  let rings = [[120, 13, "#e0bf5e", 120], [95, 12, "#d0a63c", 150], [72, 10, "#bf922f", 180], [50, 8, "#a8802a", 200], [30, 7, "#8a6a26", 220]];
  for (let r of rings) {
    for (let i = 0; i < r[1]; i++) {
      let a = i * 360 / r[1] + random(-8, 8) + r[0];
      let d = r[0] * 0.7;
      brush.fill(r[2], r[3] + random(-25, 25));
      brush.fillBleed(0.3, "out");
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.9);
      brush.vertex(ax + cos(a - 28) * d * 0.45, ay + sin(a - 28) * d * 0.45);
      brush.vertex(ax + cos(a) * d * 1.28, ay + sin(a) * d * 1.28);
      brush.vertex(ax + cos(a + 28) * d * 0.45, ay + sin(a + 28) * d * 0.45);
      brush.endShape(true);
    }
  }
  brush.fill("#5e5a2c", 235);
  brush.fillBleed(0.1, "out");
  brush.circle(ax, ay, 11, true);

  // bloom B: tilted cup, seen three-quarter from below
  let bx = 425, by = 330;
  brush.fill("#dcc27a", 120);
  brush.fillBleed(0.45, "out");
  brush.fillTexture(0.6, 0.3);
  brush.beginShape(0.9);
  brush.vertex(bx - 95, by - 50); brush.vertex(bx - 80, by + 30); brush.vertex(bx, by + 65); brush.vertex(bx + 80, by + 35); brush.vertex(bx + 95, by - 45); brush.vertex(bx, by - 75);
  brush.endShape(true);
  // cupped side view: shells of petals wrapping round, outer to inner
  for (let row = 0; row < 4; row++) {
    let yy = by + 30 - row * 22;
    let hw = 92 - row * 16;
    for (let k = 0; k < 5 - row; k++) {
      let x0 = bx - hw * 0.8 + k * (1.6 * hw / max(1, 4 - row)) + random(-6, 6);
      brush.fill(["#c49a37", "#b78d33", "#a98030", "#94702a"][row], 160 + row * 24);
      brush.fillBleed(0.25, "out");
      brush.fillTexture(0.5, 0.6);
      brush.beginShape(1);
      brush.vertex(x0 - 34, yy - 6); brush.vertex(x0 - 14, yy - 40); brush.vertex(x0 + 18, yy - 38); brush.vertex(x0 + 34, yy - 4); brush.vertex(x0, yy + 22);
      brush.endShape(true);
    }
  }
  brush.fill("#7f8660", 235);
  brush.fillBleed(0.15, "out");
  brush.beginShape(0.8);
  brush.vertex(bx - 30, by + 55); brush.vertex(bx, by + 80); brush.vertex(bx + 30, by + 55); brush.vertex(bx, by + 62);
  brush.endShape(true);
}
