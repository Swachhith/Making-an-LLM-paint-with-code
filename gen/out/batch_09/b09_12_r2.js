async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf0e0");
  brush.noStroke();

  // warm dawn sky, rose over gold
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#f4b050", 210);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);
  brush.fill("#e8909a", 150);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 160); brush.vertex(-20, 200);
  brush.endShape(true);

  // tall poplars as vertical columns, far to near
  let poplars = [[120, 90, 30, "#b07a6a", 200], [470, 60, 34, "#8a6a5a", 205], [260, 30, 40, "#5a4a2a", 230], [360, 110, 28, "#7a6040", 215]];
  for (let p of poplars) {
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.fill(p[3], p[4]);
    brush.beginShape(0.6);
    brush.vertex(p[0], p[1]); brush.vertex(p[0] + p[2], p[1] + 120); brush.vertex(p[0] + p[2] * 0.9, 440);
    brush.vertex(p[0] - p[2] * 0.9, 440); brush.vertex(p[0] - p[2], p[1] + 120);
    brush.endShape(true);
  }
  // nearest poplar darker inner pass
  brush.fill("#3a3a1a", 170);
  brush.beginShape(0.6);
  brush.vertex(268, 80); brush.vertex(292, 200); brush.vertex(286, 440); brush.vertex(262, 440);
  brush.endShape(true);

  // mist bands across the trees
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.fill("#f8d8c0", 170);
  brush.beginShape(0.7);
  brush.vertex(-20, 380); brush.vertex(300, 370); brush.vertex(620, 385); brush.vertex(620, 440); brush.vertex(-20, 445);
  brush.endShape(true);

  // meadow
  brush.fill("#c8a030", 220);
  brush.beginShape(0.5);
  brush.vertex(-20, 430); brush.vertex(300, 420); brush.vertex(620, 435); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6a6a1a", 205);
  brush.beginShape(0.5);
  brush.vertex(-20, 520); brush.vertex(620, 505); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // tall grass stalks in foreground, soft and wide
  let stalks = [[40, 250], [90, 300], [520, 230], [560, 290], [480, 320], [140, 360]];
  for (let s of stalks) {
    brush.fillBleed(0.2);
    brush.fill("#5a5a1a", 200);
    brush.beginShape(0.7);
    brush.vertex(s[0] - 9, 620); brush.vertex(s[0] - 3, s[1]); brush.vertex(s[0] + 6, s[1]); brush.vertex(s[0] + 9, 620);
    brush.endShape(true);
    brush.fill("#c88a3a", 200);
    brush.circle(s[0], s[1] - 5, 12, 0.6);
  }

  // low sun glow
  brush.fillBleed(0.3);
  brush.fill("#ffc860", 210);
  brush.circle(380, 330, 50, 0.3);
  brush.fill("#fff0b0", 200);
  brush.circle(380, 330, 28, 0.2);
}
