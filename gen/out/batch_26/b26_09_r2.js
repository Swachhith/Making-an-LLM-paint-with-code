async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf4ee");
  randomSeed(26092);
  brush.noStroke();

  // sky bands
  let bands = [["#aaa0dc", -20, 190], ["#eaa4cc", 140, 330], ["#f8b49c", 280, 430], ["#fcd49c", 390, 480]];
  for (let b of bands) {
    brush.fill(b[0], 180);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.6);
    brush.vertex(-20, b[1]); brush.vertex(300, b[1] + random(-15, 15)); brush.vertex(620, b[1]);
    brush.vertex(620, b[2]); brush.vertex(-20, b[2]);
    brush.endShape(true);
  }
  for (let k = 0; k < 5; k++) {
    let x = random(-60, 420), y = random(80, 360), w = random(200, 300);
    brush.fill("#c48cbc", 165);
    brush.beginShape(0.9);
    brush.vertex(x, y); brush.vertex(x + w * 0.4, y - 14); brush.vertex(x + w, y); brush.vertex(x + w * 0.5, y + 16);
    brush.endShape(true);
  }

  // sun and sea
  brush.fill("#fcd070", 230);
  brush.fillBleed(0.3);
  brush.circle(330, 468, 56, true);
  brush.fill("#9c94ca", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.2);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#f8c890", 215);
  brush.beginShape(0.6);
  brush.vertex(290, 474); brush.vertex(370, 474); brush.vertex(400, 590); brush.vertex(260, 590);
  brush.endShape(true);
  brush.fill("#b890a4", 205);
  brush.beginShape(0.6);
  brush.vertex(-20, 555); brush.vertex(320, 575); brush.vertex(620, 545); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // two palms framing the sun: tall curved trunks, long drooping fronds
  let palms = [[80, 620, 90, 1.1], [540, 620, -70, 0.95], [150, 610, 40, 0.7]];
  for (let p of palms) {
    let [bx, by, lean, s] = p;
    let tx = bx + lean, ty = by - 420 * s;
    let midx = (bx + tx) / 2 + lean * 0.4, midy = (by + ty) / 2;
    brush.fill("#644a74", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.9);
    brush.vertex(bx - 15, by); brush.vertex(midx - 11, midy); brush.vertex(tx - 8, ty);
    brush.vertex(tx + 8, ty); brush.vertex(midx + 11, midy); brush.vertex(bx + 15, by);
    brush.endShape(true);
    for (let f = 0; f < 9; f++) {
      let a = -175 + f * 21 + random(-5, 5);
      let L = 190 * s;
      let dir = cos(a);
      let peakx = tx + cos(a) * L * 0.5, peaky = ty + sin(a) * L * 0.5 - 30 * s;
      let ex = tx + cos(a) * L, ey = ty + sin(a) * L * 0.3 + 90 * s * (0.4 + abs(dir));
      brush.fill(f % 2 ? "#543c68" : "#72568a", 210);
      brush.fillBleed(0.22);
      brush.beginShape(0.9);
      brush.vertex(tx, ty - 6);
      brush.vertex(peakx, peaky - 12 * s);
      brush.vertex(ex, ey);
      brush.vertex(peakx, peaky + 16 * s);
      brush.vertex(tx, ty + 8);
      brush.endShape(true);
    }
    brush.fill("#3e2a52", 225);
    brush.circle(tx, ty + 6, 15 * s, true);
  }
}
