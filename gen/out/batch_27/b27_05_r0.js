async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f3ea");
  randomSeed(505);
  brush.noStroke();
  // loose splash of background colour behind the bloom
  brush.fill("#d9a15a", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(420, 190, 130, 0.9);
  brush.fill("#9fae7a", 140);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(160, 470, 110, 0.9);
  // the arcing stem as overlapping soft segments from lower-left up to the bloom
  let pts = [];
  for (let t = 0; t <= 1.001; t += 0.1) {
    let x = 40 + t * 380;
    let y = 560 - sin(t * 150) * 330 - t * 60;
    pts.push([x, y]);
  }
  for (let i = 0; i < pts.length - 1; i++) {
    let a = pts[i], b = pts[i + 1];
    brush.fill("#5b6b2e", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(a[0] - 8, a[1] + 6);
    brush.vertex(b[0] - 8, b[1] + 6);
    brush.vertex(b[0] + 8, b[1] - 6);
    brush.vertex(a[0] + 8, a[1] - 6);
    brush.endShape(true);
  }
  // leaves: jagged broad washes along stem
  let leaves = [[2, -1], [4, 1], [6, -1]];
  for (let l of leaves) {
    let p = pts[l[0]];
    let s = l[1];
    brush.fill("#4f6b2a", 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(p[0], p[1]);
    brush.vertex(p[0] + 30, p[1] + s * 40);
    brush.vertex(p[0] + 70, p[1] + s * 30);
    brush.vertex(p[0] + 90, p[1] + s * 60);
    brush.vertex(p[0] + 40, p[1] + s * 70);
    brush.endShape(true);
  }
  // the bloom at the end of the arc
  let bx = pts[pts.length - 1][0] + 30, by = pts[pts.length - 1][1] - 10;
  brush.fill("#b8672a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(bx, by, 85, 0.7);
  // many narrow curled petals radiating
  for (let i = 0; i < 40; i++) {
    let ang = random(360);
    let r = random(35, 95);
    let col = random(["#a4541f", "#c77a2e", "#8a4418", "#d88d3a"]);
    brush.fill(col, random(180, 235));
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(bx + cos(ang - 8) * 15, by + sin(ang - 8) * 15);
    brush.vertex(bx + cos(ang - 4) * r, by + sin(ang - 4) * r);
    brush.vertex(bx + cos(ang) * (r + 12), by + sin(ang) * (r + 12));
    brush.vertex(bx + cos(ang + 5) * r, by + sin(ang + 5) * r);
    brush.vertex(bx + cos(ang + 8) * 15, by + sin(ang + 8) * 15);
    brush.endShape(true);
  }
  brush.fill("#5e2c10", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(bx, by, 22, 0.6);
  // drips falling from the bloom
  for (let i = 0; i < 5; i++) {
    let dx = bx + random(-60, 60);
    let dy = by + random(60, 90);
    let len = random(40, 110);
    brush.fill("#a4541f", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(dx - 8, dy);
    brush.vertex(dx + 8, dy);
    brush.vertex(dx + 6, dy + len);
    brush.vertex(dx - 6, dy + len);
    brush.endShape(true);
    brush.circle(dx, dy + len + 4, 9, 0.4);
  }
  // splatter dots
  for (let i = 0; i < 30; i++) {
    brush.fill(random(["#b8672a", "#5b6b2e", "#d9a15a"]), 200);
    brush.circle(random(40, 580), random(40, 580), random(2, 6), 0.4);
  }
}
