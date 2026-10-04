async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf5e4");
  brush.noStroke();
  // peach-honey glow washing in from the top-right corner
  brush.fill("#f6c98a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(200, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 420);
  brush.vertex(420, 380);
  brush.vertex(260, 180);
  brush.endShape(true);
  // stem: one long confident arc from the lower-left corner, two passes
  for (let pass = 0; pass < 2; pass++) {
    let w = pass ? 6 : 12;
    brush.fill(pass ? "#5e7e24" : "#8aa840", 215);
    brush.fillBleed(0.22);
    brush.beginShape(1);
    brush.vertex(-10, 610);
    brush.vertex(90, 440);
    brush.vertex(230, 300);
    brush.vertex(380, 216);
    brush.vertex(380 + w, 216 + w * 2);
    brush.vertex(240 + w, 300 + w * 2);
    brush.vertex(100 + w * 2, 450);
    brush.vertex(18 + w * 2, 610);
    brush.endShape(true);
  }
  // two big heart-shaped leaves hanging off the arc
  let lv = [[110, 430, 150], [250, 290, -150]];
  for (let L of lv) {
    let x = L[0], y = L[1], a = L[2];
    brush.fill("#9ab84a", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(x, y);
    brush.vertex(x + cos(a - 35) * 70, y + sin(a - 35) * 70);
    brush.vertex(x + cos(a - 10) * 130, y + sin(a - 10) * 130);
    brush.vertex(x + cos(a + 15) * 90, y + sin(a + 15) * 90);
    brush.endShape(true);
    brush.fill("#6a8a2a", 170);
    brush.fillBleed(0.22);
    brush.beginShape(1);
    brush.vertex(x, y);
    brush.vertex(x + cos(a - 18) * 60, y + sin(a - 18) * 60);
    brush.vertex(x + cos(a - 8) * 100, y + sin(a - 8) * 100);
    brush.endShape(true);
  }
  // nodding head seen in three-quarter view: an ellipse of rays
  let hx = 440, hy = 180;
  let back = ["#f8cf48", "#f0a820"];
  for (let pass = 0; pass < 2; pass++) {
    for (let k = 0; k < 22; k++) {
      let a = k * (360 / 22) + pass * 8;
      let r = 128 - pass * 24;
      brush.fill(back[pass], 215);
      brush.fillBleed(0.28);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(1);
      brush.vertex(hx + cos(a - 8) * 46, hy + sin(a - 8) * 36);
      brush.vertex(hx + cos(a - 2) * r, hy + sin(a - 2) * r * 0.72);
      brush.vertex(hx + cos(a + 3) * r * 0.98, hy + sin(a + 3) * r * 0.7);
      brush.vertex(hx + cos(a + 8) * 46, hy + sin(a + 8) * 36);
      brush.endShape(true);
    }
  }
  brush.fill("#d07a10", 170);
  brush.fillBleed(0.25);
  brush.circle(hx + 20, hy + 26, 50, 0.6);
  // the seed disc, rich umber with a lit edge
  brush.fill("#7a4c14", 230);
  brush.fillBleed(0.22);
  brush.circle(hx, hy, 54, 0.25);
  brush.fill("#4a2a0a", 220);
  brush.fillBleed(0.18);
  brush.circle(hx + 6, hy + 6, 38, 0.25);
  brush.fill("#d09a3a", 170);
  brush.circle(hx - 22, hy - 18, 12, 0.5);
}
