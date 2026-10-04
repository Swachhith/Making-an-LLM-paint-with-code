async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2ede4");
  brush.noStroke();
  let cx = 320, cy = 300;
  // backdrop: deep teal-green in the corners only, the flower takes the rest
  brush.fill("#1a5a54", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(20, 580, 180, 0.7);
  brush.circle(600, 20, 150, 0.7);
  brush.fill("#2e3a7a", 180);
  brush.circle(600, 600, 120, 0.7);
  brush.circle(0, 0, 110, 0.7);
  // six petals as big lobed fans, orange-scarlet under, crimson over
  let cols = ["#ff3a14", "#f0141c", "#c4001c", "#860014"];
  for (let pass = 0; pass < 4; pass++) {
    for (let i = 0; i < 6; i++) {
      let a = i * 60 + 20 + (pass % 2 ? 6 : -4);
      let r = 300 - pass * 50;
      brush.fill(cols[pass], 225 - pass * 8);
      brush.fillBleed(0.3 - pass * 0.03);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(1);
      brush.vertex(cx, cy);
      brush.vertex(cx + cos(a - 32) * r * 0.8, cy + sin(a - 32) * r * 0.8);
      brush.vertex(cx + cos(a - 14) * r, cy + sin(a - 14) * r);
      brush.vertex(cx + cos(a) * r * 0.9, cy + sin(a) * r * 0.9);
      brush.vertex(cx + cos(a + 14) * r, cy + sin(a + 14) * r);
      brush.vertex(cx + cos(a + 32) * r * 0.8, cy + sin(a + 32) * r * 0.8);
      brush.endShape(true);
    }
  }
  // velvet dark at the heart, bleeding outward
  brush.fill("#3a0010", 210);
  brush.fillBleed(0.3);
  brush.circle(cx, cy, 90, 0.5);
  // white eye ring painted as bare-ish cream, then a jet-black centre
  brush.fill("#fbe9e4", 240);
  brush.fillBleed(0.12);
  brush.circle(cx, cy, 62, 0.3);
  brush.fill("#07030c", 252);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 46, 0.25);
  brush.fill("#07030c", 250);
  brush.circle(cx + 2, cy + 2, 34, 0.2);
  brush.fill("#3a2a5a", 170);
  brush.circle(cx - 12, cy - 12, 10, 0.4);
  // halo of black stamen tips
  for (let k = 0; k < 40; k++) {
    let a = k * 9;
    let rr = 58 + (k % 4) * 7;
    brush.fill("#08030e", 245);
    brush.fillBleed(0.06);
    brush.circle(cx + cos(a) * rr, cy + sin(a) * rr, 4, 0.3);
  }
}
