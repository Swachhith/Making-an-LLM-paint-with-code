async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4ede4");
  brush.noStroke();
  // palette: orange #e8691c, indigo #3b3f7a, green #5c7a3a
  // indigo wash upper-left
  brush.fill("#3b3f7a", 130);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20);
  brush.vertex(380, -20);
  brush.vertex(260, 160);
  brush.vertex(-20, 260);
  brush.endShape(true);
  // stem arcing from right bottom up and over to the left
  brush.fill("#5c7a3a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(560, 610);
  brush.vertex(520, 420);
  brush.vertex(420, 300);
  brush.vertex(260, 250);
  brush.vertex(255, 268);
  brush.vertex(405, 318);
  brush.vertex(500, 430);
  brush.vertex(540, 610);
  brush.endShape(true);
  // two leaves
  brush.fill("#5c7a3a", 190);
  brush.beginShape(0.8);
  brush.vertex(505, 440);
  brush.vertex(430, 450);
  brush.vertex(380, 500);
  brush.vertex(470, 490);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(470, 360);
  brush.vertex(540, 330);
  brush.vertex(590, 350);
  brush.vertex(520, 380);
  brush.endShape(true);
  // dahlia head at (220,260): rings of pointed petals
  let cx = 220, cy = 255;
  let rings = [[120, 18, 200, 0], [92, 16, 215, 11], [64, 13, 225, 5], [38, 10, 235, 17]];
  for (let r of rings) {
    for (let i = 0; i < r[1]; i++) {
      let a = i * 360 / r[1] + r[3];
      let w = r[0] * 0.22;
      let tx = cx + cos(a) * r[0], ty = cy + sin(a) * r[0] * 0.85;
      let bx = cx + cos(a) * r[0] * 0.3, by = cy + sin(a) * r[0] * 0.3 * 0.85;
      let px = cos(a + 90) * w, py = sin(a + 90) * w;
      brush.fill(r[0] > 80 ? "#e8691c" : "#d94f10", r[2]);
      brush.fillBleed(0.22);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.5);
      brush.vertex(bx + px * 0.5, by + py * 0.5);
      brush.vertex((bx + tx) / 2 + px, (by + ty) / 2 + py);
      brush.vertex(tx, ty);
      brush.vertex((bx + tx) / 2 - px, (by + ty) / 2 - py);
      brush.vertex(bx - px * 0.5, by - py * 0.5);
      brush.endShape(true);
    }
  }
  // shadow at centre in indigo
  brush.fill("#3b3f7a", 170);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 20, 0.4);
}
