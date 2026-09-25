async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f4f8");
  randomSeed(5);
  brush.noStroke();
  brush.fill("#c6d4e6", 200);
  brush.fillBleed(0.5, "out");
  brush.fillTexture(0.5, 0.25);
  brush.circle(120, 110, 200, true);
  brush.circle(500, 510, 180, true);
  let cx = 300, cy = 300;
  for (let i = 0; i < 5; i++) {
    let a = -90 + i * 72 + random(-6, 6);
    let passes = [
      { s: 1.0, c: "#f3c9d6", o: 210, b: 0.3 },
      { s: 0.78, c: "#eaa7bd", o: 200, b: 0.2 },
      { s: 0.42, c: "#d97897", o: 215, b: 0.15 }
    ];
    for (let ps of passes) {
      brush.fill(ps.c, ps.o);
      brush.fillBleed(ps.b, "out");
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.8);
      let pts = [[0, 10], [-45, 70], [-85, 160], [-65, 245], [-20, 262], [0, 236], [20, 262], [65, 245], [85, 160], [45, 70]];
      for (let p of pts) {
        let x = p[0] * ps.s, y = p[1] * ps.s;
        brush.vertex(cx + x * cos(a + 90) - y * sin(a + 90), cy + x * sin(a + 90) + y * cos(a + 90));
      }
      brush.endShape(true);
    }
  }
  brush.fill("#b8446c", 225);
  brush.fillBleed(0.18, "out");
  brush.fillTexture(0.6, 0.6);
  brush.circle(cx, cy, 34, true);
  for (let i = 0; i < 28; i++) {
    let a = random(360), r = random(55, 105);
    brush.fill("#a83a62", 220);
    brush.fillBleed(0.02, "out");
    brush.beginShape(0.1);
    brush.vertex(cx + cos(a - 2) * 20, cy + sin(a - 2) * 20);
    brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
    brush.vertex(cx + cos(a + 2) * 20, cy + sin(a + 2) * 20);
    brush.endShape(true);
    brush.fill("#e3aa2e", 235);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 6, true);
  }
}
