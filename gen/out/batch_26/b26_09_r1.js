async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf4f0");
  randomSeed(2699);
  brush.noStroke();

  // pastel bands blended into each other
  let bands = [["#b0a4e0", -20, 200], ["#e8a8d0", 130, 330], ["#f8b8a0", 280, 440], ["#fcd49a", 380, 480]];
  for (let b of bands) {
    brush.fill(b[0], 175);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.6);
    brush.vertex(-20, b[1]); brush.vertex(200, b[1] + random(-15, 15)); brush.vertex(420, b[1] + random(-15, 15));
    brush.vertex(620, b[1]); brush.vertex(620, b[2]); brush.vertex(-20, b[2]);
    brush.endShape(true);
  }
  // wispy lilac cloud streaks
  for (let k = 0; k < 4; k++) {
    let x = random(-40, 400), y = random(90, 330), w = random(180, 280);
    brush.fill("#c090c0", 170);
    brush.beginShape(0.9);
    brush.vertex(x, y); brush.vertex(x + w * 0.4, y - 12); brush.vertex(x + w, y + 2); brush.vertex(x + w * 0.5, y + 16);
    brush.endShape(true);
  }

  // sun sitting on the horizon
  brush.fill("#fcd070", 225);
  brush.fillBleed(0.3);
  brush.circle(380, 470, 52, true);

  // sea
  brush.fill("#a098cc", 205);
  brush.fillBleed(0.25);
  brush.beginShape(0.2);
  brush.vertex(-20, 472); brush.vertex(620, 472); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#f8c890", 210);
  brush.beginShape(0.6);
  brush.vertex(340, 476); brush.vertex(420, 476); brush.vertex(450, 600); brush.vertex(310, 600);
  brush.endShape(true);
  // near beach
  brush.fill("#c8a4a8", 200);
  brush.beginShape(0.6);
  brush.vertex(-20, 560); brush.vertex(300, 575); brush.vertex(620, 550); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // palms in a soft plum, fronds broad and arched
  let palms = [[90, 600, 70, 1.05], [190, 590, 30, 0.75], [530, 610, -60, 1.15]];
  for (let p of palms) {
    let [bx, by, lean, s] = p;
    let tx = bx + lean, ty = by - 400 * s;
    brush.fill("#6a5078", 215);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.9);
    brush.vertex(bx - 14, by); brush.vertex(bx + 14, by);
    brush.vertex((bx + tx) / 2 + lean * 0.35 + 10, (by + ty) / 2);
    brush.vertex(tx + 9, ty); brush.vertex(tx - 9, ty);
    brush.vertex((bx + tx) / 2 + lean * 0.35 - 10, (by + ty) / 2);
    brush.endShape(true);
    for (let f = 0; f < 8; f++) {
      let a = -180 + f * 26 + random(-6, 6);
      let L = 150 * s;
      let ex = tx + cos(a) * L, ey = ty + sin(a) * L * 0.5 + 70 * s;
      let mx = (tx + ex) / 2, my = (ty + ey) / 2 - 45 * s;
      brush.fill(f % 2 ? "#5a4070" : "#74588a", 210);
      brush.fillBleed(0.22);
      brush.beginShape(0.9);
      brush.vertex(tx, ty);
      brush.vertex(mx, my - 12 * s);
      brush.vertex(ex, ey);
      brush.vertex(mx, my + 14 * s);
      brush.endShape(true);
    }
    brush.fill("#4a3060", 220);
    brush.circle(tx, ty + 6, 14 * s, true);
  }
}
