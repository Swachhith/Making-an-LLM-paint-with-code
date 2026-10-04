async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf2de");
  randomSeed(2);
  brush.noStroke();
  // warm evening sky
  brush.fill("#f0a860", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 200);
  brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#f7d38a", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 150);
  brush.vertex(620, 110);
  brush.vertex(620, 380);
  brush.vertex(-20, 400);
  brush.endShape(true);
  // soft rosy cloud streaks
  for (let i = 0; i < 3; i++) {
    brush.fill("#e58b6a", 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.7);
    let y = 50 + i * 55, x0 = random(-60, 240);
    brush.vertex(x0, y);
    brush.vertex(x0 + 180, y - 10);
    brush.vertex(x0 + 300, y + 6);
    brush.vertex(x0 + 140, y + 18);
    brush.endShape(true);
  }
  // hill rising from the bottom, seen from below: big dark slope in the foreground
  brush.fill("#d09a5c", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 470);
  brush.vertex(100, 380);
  brush.vertex(230, 300);
  brush.vertex(360, 240);
  brush.vertex(480, 210);
  brush.vertex(620, 200);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // tiers of houses, rows get bigger lower down (closer to the viewer)
  let rows = [[250, 0.7], [320, 0.85], [400, 1.05], [490, 1.3]];
  for (let r of rows) {
    let s = r[1];
    let startX = (r[0] - 470) / -0.75;
    for (let x = max(-10, startX - 40); x < 620; x += 52 * s + random(-6, 6)) {
      let y = r[0] + (startX - x) * 0.25 + random(-6, 6);
      if (y > 600 || y < 180) continue;
      let w = random(40, 54) * s, ht = random(34, 48) * s;
      let wall = random(["#f6e2bd", "#f0cf9a", "#f3dcc8", "#e9c48a"]);
      brush.fill(wall, 220);
      brush.fillBleed(0.15);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0);
      brush.vertex(x, y - ht);
      brush.vertex(x + w, y - ht);
      brush.vertex(x + w, y);
      brush.vertex(x, y);
      brush.endShape(true);
      brush.fill("#b8733e", 200);
      brush.fillBleed(0.15);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0);
      brush.vertex(x + w * 0.65, y - ht);
      brush.vertex(x + w, y - ht);
      brush.vertex(x + w, y);
      brush.vertex(x + w * 0.65, y);
      brush.endShape(true);
      // roof underside seen from below: shallow terracotta cap
      brush.fill(random(["#c2452b", "#d0613a", "#a8392a"]), 230);
      brush.fillBleed(0.15);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0);
      brush.vertex(x - 5, y - ht + 4);
      brush.vertex(x + w * 0.5, y - ht - 14 * s);
      brush.vertex(x + w + 5, y - ht + 4);
      brush.endShape(true);
      brush.fill("#2f5476", 220);
      brush.fillBleed(0.1);
      brush.fillTexture(0.3, 0.3);
      brush.circle(x + w * 0.3, y - ht * 0.5, 5 * s, 0.2);
    }
  }
  // steps/wall and sea at the bottom edge (we look up from the harbour)
  brush.fill("#2e86a3", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 560);
  brush.vertex(620, 575);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#7a5a36", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 540);
  brush.vertex(620, 552);
  brush.vertex(620, 578);
  brush.vertex(-20, 566);
  brush.endShape(true);
  // bell tower crowning the hill
  brush.fill("#f0d7a8", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(520, 215);
  brush.vertex(520, 120);
  brush.vertex(552, 120);
  brush.vertex(552, 215);
  brush.endShape(true);
  brush.fill("#b8733e", 200);
  brush.beginShape(0);
  brush.vertex(540, 215);
  brush.vertex(540, 120);
  brush.vertex(552, 120);
  brush.vertex(552, 215);
  brush.endShape(true);
  brush.fill("#c2452b", 230);
  brush.beginShape(0);
  brush.vertex(514, 122);
  brush.vertex(536, 88);
  brush.vertex(558, 122);
  brush.endShape(true);
  brush.fill("#5a3b28", 220);
  brush.circle(536, 140, 5, 0.2);
  // a couple of dark cypresses among the houses
  for (let i = 0; i < 3; i++) {
    let x = 120 + i * 170, y = 470 - i * 90;
    brush.fill("#3f5a2e", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(x, y);
    brush.vertex(x + 10, y - 80);
    brush.vertex(x + 20, y);
    brush.endShape(true);
  }
}
