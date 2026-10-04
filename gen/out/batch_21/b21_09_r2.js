async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f5f8");
  brush.noStroke();

  // sky wash across the top
  brush.fill("#aecbe0", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.45);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 120); brush.vertex(-20, 110);
  brush.endShape(true);
  // sea glimpsed on the left, below the horizon
  brush.fill("#3f86b4", 210);
  brush.fillBleed(0.22);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.1);
  brush.vertex(-20, 110); brush.vertex(200, 112); brush.vertex(200, 200); brush.vertex(-20, 210);
  brush.endShape(true);
  brush.fill("#2a6890", 170);
  brush.beginShape(0.3);
  brush.vertex(-20, 160); brush.vertex(200, 156); brush.vertex(200, 200); brush.vertex(-20, 210);
  brush.endShape(true);

  // lower houses down-slope at left, small and pale
  let low = [[20, 200, 70, "#c46a4e"], [100, 220, 60, "#5a86a6"], [30, 280, 80, "#5a86a6"]];
  for (let h of low) {
    let [x, y, w, roof] = h;
    brush.fill("#c2ced8", 185);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0);
    brush.vertex(x, y); brush.vertex(x + w, y); brush.vertex(x + w, y + w * 0.8); brush.vertex(x, y + w * 0.8);
    brush.endShape(true);
    brush.fill(roof, 220);
    brush.beginShape(0);
    brush.vertex(x - 5, y + 2); brush.vertex(x + w * 0.5, y - w * 0.3); brush.vertex(x + w + 5, y + 2);
    brush.endShape(true);
  }
  // hillside green below them
  brush.fill("#9fb49a", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 330); brush.vertex(200, 300); brush.vertex(200, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // the close house: flat-roofed cube, front face paper, blue trim
  // left side wall in cool shadow
  brush.fill("#90a8bd", 210);
  brush.fillBleed(0.18);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0);
  brush.vertex(150, 150); brush.vertex(210, 130); brush.vertex(210, 620); brush.vertex(150, 620);
  brush.endShape(true);
  brush.fill("#7690a8", 180);
  brush.beginShape(0.2);
  brush.vertex(190, 136); brush.vertex(210, 130); brush.vertex(210, 620); brush.vertex(190, 620);
  brush.endShape(true);
  // parapet band and its shadow on the white front
  brush.fill("#2f6f9e", 230);
  brush.fillBleed(0.15);
  brush.beginShape(0);
  brush.vertex(210, 118); brush.vertex(620, 118); brush.vertex(620, 138); brush.vertex(210, 138);
  brush.endShape(true);
  brush.fill("#b6c7d6", 175);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(210, 138); brush.vertex(620, 138); brush.vertex(620, 160); brush.vertex(210, 166);
  brush.endShape(true);
  // blue-domed chapel roof peeking behind the house
  brush.fill("#2a6ab0", 225);
  brush.fillBleed(0.2);
  brush.circle(470, 90, 42, 0.1);
  brush.fill("#1e4f88", 180);
  brush.circle(488, 96, 26, 0.2);

  // soft cast shadows modelling the white front
  brush.fill("#c9d6e0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(210, 540); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(210, 620);
  brush.endShape(true);

  // two tall shuttered windows and a door
  let wins = [[260, 210], [500, 210]];
  for (let w of wins) {
    brush.fill("#2a86b8", 232);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0);
    brush.vertex(w[0] - 28, w[1]); brush.vertex(w[0], w[1]); brush.vertex(w[0], w[1] + 110); brush.vertex(w[0] - 28, w[1] + 110);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(w[0] + 60, w[1]); brush.vertex(w[0] + 88, w[1]); brush.vertex(w[0] + 88, w[1] + 110); brush.vertex(w[0] + 60, w[1] + 110);
    brush.endShape(true);
    brush.fill("#33404e", 215);
    brush.beginShape(0);
    brush.vertex(w[0] + 4, w[1] + 4); brush.vertex(w[0] + 56, w[1] + 4); brush.vertex(w[0] + 56, w[1] + 106); brush.vertex(w[0] + 4, w[1] + 106);
    brush.endShape(true);
    brush.fill("#8aa6ba", 190);
    brush.beginShape(0);
    brush.vertex(w[0] - 32, w[1] + 110); brush.vertex(w[0] + 92, w[1] + 110); brush.vertex(w[0] + 92, w[1] + 124); brush.vertex(w[0] - 32, w[1] + 124);
    brush.endShape(true);
  }
  brush.fill("#236aa0", 238);
  brush.fillBleed(0.15);
  brush.beginShape(0.3);
  brush.vertex(370, 620); brush.vertex(370, 420); brush.vertex(400, 392); brush.vertex(440, 392); brush.vertex(470, 420); brush.vertex(470, 620);
  brush.endShape(true);
  // bougainvillea spilling over the corner in magenta, one warm accent in a cool picture
  for (let i = 0; i < 12; i++) {
    let x = 580 - (i % 4) * 22 + (i % 3) * 6;
    let y = 150 + floor(i / 4) * 30 + (i % 2) * 10;
    brush.fill(i % 3 ? "#c83a8c" : "#e060a8", 220);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, 16, 0.6);
  }
  brush.fill("#4a7a58", 200);
  brush.circle(552, 214, 12, 0.6);
  brush.circle(598, 196, 10, 0.6);
}
