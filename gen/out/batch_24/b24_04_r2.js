async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff4d0");
  randomSeed(3404);

  brush.noStroke();
  brush.fill("#5a0e5e", 235);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 110);
  brush.vertex(-20, 130);
  brush.endShape(true);
  brush.fill("#d0183a", 225);
  brush.beginShape(0.5);
  brush.vertex(-20, 90);
  brush.vertex(620, 80);
  brush.vertex(620, 210);
  brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#f25010", 220);
  brush.beginShape(0.5);
  brush.vertex(-20, 190);
  brush.vertex(620, 185);
  brush.vertex(620, 260);
  brush.vertex(-20, 270);
  brush.endShape(true);
  brush.fill("#f25010", 200);
  brush.beginShape(0.6);
  brush.vertex(-20, 250);
  brush.vertex(320, 250);
  brush.vertex(340, 345);
  brush.vertex(-20, 345);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(500, 250);
  brush.vertex(620, 250);
  brush.vertex(620, 345);
  brush.vertex(505, 345);
  brush.endShape(true);
  brush.fill("#ffb400", 210);
  brush.fillBleed(0.3);
  brush.circle(415, 300, 95, 0.4);

  for (let p = 0; p < 3; p++) {
    brush.fill("#ff8a00", 230);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.3);
    brush.circle(415, 312, 36 - p * 6, 0.1);
  }

  brush.fill("#6a0e4a", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 160);
  brush.vertex(100, 140);
  brush.vertex(260, 158);
  brush.vertex(200, 182);
  brush.vertex(20, 186);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(300, 230);
  brush.vertex(420, 222);
  brush.vertex(540, 236);
  brush.vertex(420, 250);
  brush.endShape(true);

  for (let p = 0; p < 5; p++) {
    brush.fill(p < 2 ? "#2a0a58" : "#120430", 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.2);
    brush.vertex(-20, 346 + p * 20);
    brush.vertex(360, 346 + p * 22);
    brush.vertex(330, 620);
    brush.vertex(-20, 620);
    brush.endShape(true);
    brush.beginShape(0.2);
    brush.vertex(470, 346 + p * 22);
    brush.vertex(620, 346 + p * 20);
    brush.vertex(620, 620);
    brush.vertex(500, 620);
    brush.endShape(true);
    brush.fill("#3a0c50", 190);
    brush.beginShape(0.3);
    brush.vertex(-20, 470 + p * 25);
    brush.vertex(620, 470 + p * 25);
    brush.vertex(620, 620);
    brush.vertex(-20, 620);
    brush.endShape(true);
  }
  brush.fill("#d23a18", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(355, 346);
  brush.vertex(475, 346);
  brush.vertex(520, 620);
  brush.vertex(320, 620);
  brush.endShape(true);

  for (let i = 0; i < 26; i++) {
    let y = 352 + random(0, 250);
    let spread = 20 + (y - 350) * 0.35;
    let x = 415 + random(-spread, spread);
    brush.fill(random() < 0.5 ? "#ffb400" : "#ff7a10", 235);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.7);
    brush.vertex(x - random(15, 35), y);
    brush.vertex(x + random(15, 35), y - 2);
    brush.vertex(x + 10, y + 15);
    brush.vertex(x - 10, y + 15);
    brush.endShape(true);
  }
}
