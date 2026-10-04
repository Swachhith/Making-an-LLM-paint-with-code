async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3e3");
  randomSeed(12);
  brush.noStroke();
  let H = 300;
  // sky
  brush.fill("#1f6fe0", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 200);
  brush.vertex(-20, 200);
  brush.endShape(true);
  // mountains (upper) and mirrored (lower)
  let mt = [[-20, 190], [90, 80], [170, 130], [300, 50], [420, 140], [520, 90], [620, 160]];
  for (let flip = 0; flip < 2; flip++) {
    brush.fill(flip ? "#3a2f7f" : "#4a3f8f", flip ? 190 : 230);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(-20, H);
    for (let p of mt) brush.vertex(p[0], flip ? 2 * H - p[1] : p[1]);
    brush.vertex(620, H);
    brush.endShape(true);
  }
  // autumn tree band
  let cols = ["#e8501a", "#f2a31a", "#c81e1e", "#f07d12", "#d9b21a"];
  for (let flip = 0; flip < 2; flip++) {
    for (let i = 0; i < 26; i++) {
      let x = i * 24 + random(-8, 8);
      let y = 255 + random(-20, 20);
      let r = random(28, 42);
      brush.fill(random(cols), flip ? 170 : 220);
      brush.fillBleed(0.25);
      brush.fillTexture(0.5, 0.5);
      brush.circle(x, flip ? 2 * H - y : y, r, 0.5);
    }
  }
  // conifer spires among the autumn crowns
  for (let i = 0; i < 9; i++) {
    let x = 30 + i * 68 + random(-10, 10), h = random(50, 80);
    for (let flip = 0; flip < 2; flip++) {
      brush.fill("#1f4a2a", flip ? 160 : 220);
      brush.fillBleed(0.2);
      brush.beginShape(0.1);
      let base = flip ? H + 8 : H - 8;
      let tip = flip ? base + h : base - h;
      brush.vertex(x - 16, base);
      brush.vertex(x, tip);
      brush.vertex(x + 16, base);
      brush.endShape(true);
    }
  }
  // lake tint and ripples
  brush.fill("#1e5ea8", 130);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, H);
  brush.vertex(620, H);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 8; i++) {
    let y = 320 + i * 35, x = random(0, 450);
    brush.fill("#fbf3e3", 230);
    brush.fillBleed(0.1);
    brush.beginShape(0.5);
    brush.vertex(x, y);
    brush.vertex(x + 120, y - 2);
    brush.vertex(x + 120, y + 4);
    brush.vertex(x, y + 5);
    brush.endShape(true);
  }
  // shore band
  brush.fill("#6b3a12", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(-20, 290);
  brush.vertex(620, 292);
  brush.vertex(620, 305);
  brush.vertex(-20, 306);
  brush.endShape(true);
}
