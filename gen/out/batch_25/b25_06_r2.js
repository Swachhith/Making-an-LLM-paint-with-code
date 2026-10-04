async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff0c8");
  randomSeed(266);
  brush.noStroke();
  let sx = 330, sy = 330;

  // sky painted in rings around a paper sun: gold, then orange, then crimson, then violet
  let rings = [["#ffc21a", 110], ["#ff7a1a", 190], ["#e0302e", 290], ["#7a1e5a", 420], ["#2e1450", 560]];
  for (let i = rings.length - 1; i >= 0; i--) {
    let [col, r] = rings[i];
    brush.fill(col, 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(1);
    for (let a = 0; a < 360; a += 30) brush.vertex(sx + cos(a) * r * 1.3, sy + sin(a) * r * 0.9);
    brush.endShape(true);
  }
  // a second gold pass near the sun, leaving the disc bright
  brush.fill("#ffb000", 190);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  for (let a = 0; a < 360; a += 30) {
    let r = a % 60 ? 90 : 75;
    brush.vertex(sx + cos(a) * r * 1.2, sy + sin(a) * r * 0.9);
  }
  brush.endShape(true);
  brush.fill("#fff4b0", 200);
  brush.fillBleed(0.2);
  brush.circle(sx, sy, 34, 0.15);
  // thin cloud bars across the glow
  for (let y of [250, 290, 205]) {
    brush.fill("#5a1446", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(1);
    let x0 = random(40, 300);
    brush.vertex(x0, y); brush.vertex(x0 + 260, y - 6); brush.vertex(x0 + 220, y + 12); brush.vertex(x0 + 20, y + 14);
    brush.endShape(true);
  }

  // skyline silhouette: every tower built of four near-black passes
  let towers = [];
  let x = -20;
  while (x < 610) {
    let w = random(35, 80), h = random(120, 300);
    if (abs(x + w / 2 - sx) < 50) h = random(60, 120);
    towers.push([x, w, h, random()]);
    x += w + random(-4, 3);
  }
  for (let pass = 0; pass < 4; pass++) {
    for (let t of towers) {
      let [tx, w, h, kind] = t;
      brush.fill(pass < 2 ? "#1a0a1e" : "#050208", 245);
      brush.fillBleed(0.08);
      brush.fillTexture(0.2, 0.2);
      brush.beginShape(0);
      brush.vertex(tx, 610); brush.vertex(tx, 600 - h);
      if (kind < 0.25) { brush.vertex(tx + w * 0.35, 600 - h); brush.vertex(tx + w * 0.5, 550 - h); brush.vertex(tx + w * 0.65, 600 - h); }
      else if (kind < 0.45) { brush.vertex(tx + w * 0.2, 580 - h); brush.vertex(tx + w * 0.8, 580 - h); }
      brush.vertex(tx + w, 600 - h); brush.vertex(tx + w, 610);
      brush.endShape(true);
    }
  }
}
