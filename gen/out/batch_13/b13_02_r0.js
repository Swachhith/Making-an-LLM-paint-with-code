async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ebdf");
  brush.noStroke();
  // hazy sky
  brush.fill("#c9c2b4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(-10, -10);
  brush.vertex(610, -10);
  brush.vertex(610, 200);
  brush.vertex(-10, 210);
  brush.endShape(true);
  // distant hills, sage and dusty grey
  brush.fill("#8f957c", 190);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(-10, 205);
  brush.vertex(120, 170);
  brush.vertex(260, 190);
  brush.vertex(400, 160);
  brush.vertex(610, 190);
  brush.vertex(610, 240);
  brush.vertex(-10, 240);
  brush.endShape(true);
  // a small farmhouse and cypress on the horizon
  brush.fill("#7a5c44", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0);
  brush.vertex(430, 212);
  brush.vertex(470, 212);
  brush.vertex(470, 232);
  brush.vertex(430, 232);
  brush.endShape(true);
  brush.fill("#4d5840", 220);
  brush.beginShape(1);
  brush.vertex(485, 234);
  brush.vertex(492, 180);
  brush.vertex(500, 234);
  brush.endShape(true);
  // earth ground base
  brush.fill("#b8a584", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0);
  brush.vertex(-10, 236);
  brush.vertex(610, 236);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // lavender rows converging to a vanishing point
  let vx = 300, vy = 236;
  let rows = 9;
  for (let i = 0; i < rows; i++) {
    let a = -1 + (i + 0.5) * (2 / rows);
    let bx = 300 + a * 700;
    let half = 26;
    if (abs(a) < 0.12) continue;
    brush.fill(i % 2 ? "#7d6a96" : "#8a739f", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.4);
    brush.vertex(vx + a * 6, vy + 2);
    brush.vertex(bx - half * 1.8, 610);
    brush.vertex(bx + half * 1.8, 610);
    brush.endShape(true);
    brush.fill("#5c4a78", 170);
    brush.fillBleed(0.2);
    brush.beginShape(0.4);
    brush.vertex(vx + a * 5, vy + 8);
    brush.vertex(bx - half, 610);
    brush.vertex(bx + half * 0.8, 610);
    brush.endShape(true);
  }
  // the dirt path down the middle
  brush.fill("#c4a57a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(296, 238);
  brush.vertex(306, 238);
  brush.vertex(380, 610);
  brush.vertex(230, 610);
  brush.endShape(true);
  brush.fill("#9c7e5a", 120);
  brush.beginShape(1);
  brush.vertex(300, 300);
  brush.vertex(330, 610);
  brush.vertex(270, 610);
  brush.endShape(true);
}
