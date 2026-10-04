async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#faf5eb");
  randomSeed(5055);
  brush.noStroke();
  // wet-in-wet colour blooms thrown across the sheet
  let splashes = [[450, 250, 150, "#dca05a", 160], [140, 520, 120, "#a9b784", 150], [250, 200, 90, "#e3bf86", 130], [520, 470, 70, "#c7875a", 140]];
  for (let s of splashes) {
    brush.fill(s[3], s[4]);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(s[0], s[1], s[2], 1);
  }
  // stem as a quadratic curve: bottom-left, up over the top, down to the bloom at right
  let P0 = [70, 600], P1 = [230, 20], P2 = [450, 250];
  let pts = [];
  for (let t = 0; t <= 1.001; t += 0.07) {
    let u = 1 - t;
    pts.push([u * u * P0[0] + 2 * u * t * P1[0] + t * t * P2[0], u * u * P0[1] + 2 * u * t * P1[1] + t * t * P2[1]]);
  }
  for (let pass = 0; pass < 3; pass++) {
    brush.fill(["#7a8c44", "#566a2c", "#3a4a1c"][pass], 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    let w = [13, 9, 6][pass];
    for (let p of pts) brush.vertex(p[0] - w, p[1] - w * 0.4);
    for (let i = pts.length - 1; i >= 0; i--) brush.vertex(pts[i][0] + w, pts[i][1] + w * 0.4);
    brush.endShape(true);
  }
  // lobed leaves hanging off the arc
  let leaves = [[3, -1], [6, 1], [10, 1]];
  for (let l of leaves) {
    let p = pts[l[0]], s = l[1];
    for (let pass = 0; pass < 2; pass++) {
      brush.fill(pass ? "#445c22" : "#7d9848", 195);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.5);
      brush.vertex(p[0], p[1]);
      brush.vertex(p[0] + s * 30, p[1] + 35);
      brush.vertex(p[0] + s * 20, p[1] + 60);
      brush.vertex(p[0] + s * 55, p[1] + 80);
      brush.vertex(p[0] + s * 70, p[1] + 50);
      brush.vertex(p[0] + s * 50, p[1] + 20);
      brush.endShape(true);
    }
  }
  // the chrysanthemum: dense incurved globe, bronze deepening toward the centre
  let bx = 460, by = 285;
  brush.fill("#c2743a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(bx, by, 88, 0.6);
  let layers = [["#e09a4c", 95, 30], ["#c87930", 78, 28], ["#a85a22", 60, 26], ["#8a4218", 42, 20], ["#6a2e0c", 24, 12]];
  for (let L of layers) {
    for (let i = 0; i < L[2]; i++) {
      let a = i * 360 / L[2] + random(-6, 6);
      let r = L[1] * random(0.85, 1.05);
      let w = 9;
      brush.fill(L[0], random(185, 230));
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.7);
      brush.vertex(bx + cos(a) * r * 0.3 + cos(a + 90) * w, by + sin(a) * r * 0.3 + sin(a + 90) * w);
      brush.vertex(bx + cos(a) * r + cos(a + 90) * w, by + sin(a) * r + sin(a + 90) * w);
      brush.vertex(bx + cos(a) * (r + 10), by + sin(a) * (r + 10));
      brush.vertex(bx + cos(a) * r - cos(a + 90) * w, by + sin(a) * r - sin(a + 90) * w);
      brush.vertex(bx + cos(a) * r * 0.3 - cos(a + 90) * w, by + sin(a) * r * 0.3 - sin(a + 90) * w);
      brush.endShape(true);
    }
  }
  // drips running from the bloom's lower edge
  for (let i = 0; i < 6; i++) {
    let dx = bx + random(-75, 75);
    let dy = by + random(60, 90);
    let len = random(50, 170);
    brush.fill(random(["#a4541f", "#c77a2e", "#8a4218"]), 200);
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
  // splatter flicks
  for (let i = 0; i < 45; i++) {
    brush.fill(random(["#b8672a", "#566a2c", "#d9a15a", "#6a2e0c"]), 215);
    brush.circle(random(20, 580), random(20, 580), random(2, 7), 0.5);
  }
}
