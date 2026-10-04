async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f9f4ea");
  randomSeed(505);
  brush.noStroke();
  // splashy loose blooms of colour that the flower sits in
  brush.fill("#dca05a", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(430, 170, 150, 1);
  brush.fill("#a9b784", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(120, 500, 120, 1);
  brush.fill("#c7875a", 130);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(300, 330, 90, 1);
  // arcing stem: one continuous soft band from lower-left, up and over to the right
  let pts = [];
  for (let t = 0; t <= 1.001; t += 0.08) {
    pts.push([30 + t * 420, 590 - sin(t * 160) * 420 - t * 40]);
  }
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(pass ? "#3f5222" : "#627536", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    let w = pass ? 6 : 10;
    for (let p of pts) brush.vertex(p[0] - w * 0.6, p[1] - w);
    for (let i = pts.length - 1; i >= 0; i--) brush.vertex(pts[i][0] + w * 0.6, pts[i][1] + w);
    brush.endShape(true);
  }
  // deeply lobed leaves along the arc
  let leaves = [[3, 1], [5, -1], [8, 1]];
  for (let l of leaves) {
    let p = pts[l[0]], s = l[1];
    for (let pass = 0; pass < 2; pass++) {
      brush.fill(pass ? "#435a24" : "#6f8a3f", 190);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.5);
      brush.vertex(p[0], p[1]);
      brush.vertex(p[0] + 25, p[1] + s * 45);
      brush.vertex(p[0] + 50, p[1] + s * 30);
      brush.vertex(p[0] + 70, p[1] + s * 65);
      brush.vertex(p[0] + 90, p[1] + s * 40);
      brush.vertex(p[0] + 60, p[1] + s * 15);
      brush.endShape(true);
    }
  }
  // the bronze bloom, hanging at the end of the arc
  let e = pts[pts.length - 1];
  let bx = e[0] + 20, by = e[1] + 60;
  brush.fill("#b0622a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(bx, by, 95, 0.8);
  // incurved spoon petals, outer pale bronze to inner rust
  let petalCols = [["#d38b3e", 110], ["#b86a2a", 85], ["#96491d", 60], ["#72330f", 35]];
  for (let pc of petalCols) {
    for (let i = 0; i < 18; i++) {
      let ang = random(360);
      let r = pc[1] * random(0.8, 1.1);
      brush.fill(pc[0], random(180, 230));
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.6);
      brush.vertex(bx + cos(ang - 10) * 10, by + sin(ang - 10) * 10);
      brush.vertex(bx + cos(ang - 7) * r, by + sin(ang - 7) * r);
      brush.vertex(bx + cos(ang) * (r + 14), by + sin(ang) * (r + 14));
      brush.vertex(bx + cos(ang + 7) * r, by + sin(ang + 7) * r);
      brush.vertex(bx + cos(ang + 10) * 10, by + sin(ang + 10) * 10);
      brush.endShape(true);
    }
  }
  // long drips running down off the bloom
  for (let i = 0; i < 6; i++) {
    let dx = bx + random(-80, 80);
    let dy = by + random(70, 100);
    let len = random(60, 160);
    brush.fill(random(["#a4541f", "#c77a2e"]), 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(dx - 8, dy);
    brush.vertex(dx + 8, dy);
    brush.vertex(dx + 5, dy + len);
    brush.vertex(dx - 5, dy + len);
    brush.endShape(true);
    brush.circle(dx, dy + len + 4, 9, 0.4);
  }
  // splatter
  for (let i = 0; i < 40; i++) {
    brush.fill(random(["#b8672a", "#5b6b2e", "#d9a15a", "#72330f"]), 210);
    brush.circle(random(20, 580), random(20, 580), random(2, 7), 0.5);
  }
}
