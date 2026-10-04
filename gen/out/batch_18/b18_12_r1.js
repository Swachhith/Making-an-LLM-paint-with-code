async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6dcb0");
  randomSeed(1812);
  brush.noStroke();

  // burning orange band at horizon
  brush.fill("#f07a18", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 180); brush.vertex(600, 170); brush.vertex(600, 300); brush.vertex(0, 300);
  brush.endShape(true);
  brush.fill("#ffb02e", 220);
  brush.beginShape(0.6);
  brush.vertex(80, 250); brush.vertex(520, 240); brush.vertex(560, 300); brush.vertex(40, 300);
  brush.endShape(true);

  // storm clouds: heavy dark masses
  let clouds = [[0, 0, 600, 140, "#1e1624"], [40, 100, 380, 205, "#3a2430"], [300, 80, 620, 195, "#181020"], [-20, 60, 220, 170, "#2a1a28"]];
  for (let C of clouds) {
    for (let p = 0; p < 2; p++) {
      brush.fill(C[4], 245 - p * 20);
      brush.fillBleed(0.3);
      brush.fillTexture(0.55, 0.55);
      brush.beginShape(0.9);
      brush.vertex(C[0], C[1]);
      brush.vertex(C[2], C[1] + random(-10, 10));
      brush.vertex(C[2] - 30, C[3] + random(-20, 10));
      brush.vertex((C[0] + C[2]) / 2 + random(-60, 60), C[3] + random(-25, 15));
      brush.vertex(C[0] + 30, C[3] - random(0, 20));
      brush.endShape(true);
    }
  }
  // dark headland silhouette at horizon
  brush.fill("#120c10", 250);
  brush.fillBleed(0.15);
  brush.beginShape(0.5);
  brush.vertex(380, 300); brush.vertex(430, 270); brush.vertex(500, 262); brush.vertex(600, 250);
  brush.vertex(600, 300);
  brush.endShape(true);

  // water: reflection of orange streaks broken by dark
  brush.fill("#3a2a36", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(0, 300); brush.vertex(600, 300); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  for (let i = 0; i < 12; i++) {
    let y = 310 + i * 24 + random(-5, 5);
    let w = random(60, 200);
    let x = random(80, 520);
    brush.fill(i < 5 ? "#ffb02e" : "#f07a18", 220 - i * 6);
    brush.fillBleed(0.25);
    brush.beginShape(0.4);
    brush.vertex(x - w, y); brush.vertex(x + w, y - 3); brush.vertex(x + w - 10, y + 15); brush.vertex(x - w + 10, y + 16);
    brush.endShape(true);
  }
  // reflected headland
  brush.fill("#120c10", 220);
  brush.beginShape(0.5);
  brush.vertex(380, 300); brush.vertex(600, 300); brush.vertex(600, 350); brush.vertex(500, 338); brush.vertex(430, 330);
  brush.endShape(true);
}
