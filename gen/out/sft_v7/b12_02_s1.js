async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#14182a");
  randomSeed(20250101);
  brush.noStroke();

  // sky: teal top, indigo lower, a few stars
  brush.fill("#2a6a66", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(-20, 190);
  brush.endShape(true);
  brush.fill("#4a3a8a", 190);
  brush.beginShape(0.3);
  brush.vertex(-20, 220); brush.vertex(620, 200); brush.vertex(620, 460); brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#1a2a5a", 180);
  brush.beginShape(0.3);
  brush.vertex(-20, 380); brush.vertex(620, 370); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 22; i++) {
    let x = random(0, 600), y = random(0, 220);
    brush.fill("#dfe8f0", 230);
    brush.circle(x, y, random(0.6, 1.4), 0.2);
  }

  // full moon: paper left, painted as a pale disc with a halo
  brush.fill("#f4f2e8", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(230, 140, 72, 0.2);
  brush.fill("#c9c6a8", 150);
  brush.fillBleed(0.25);
  brush.circle(230, 140, 56, 0.3);
  brush.fill("#7a8aa0", 170);
  brush.circle(230, 140, 36, 0.3);
  // halo ring
  brush.fill("#7a8aa0", 130);
  brush.fillBleed(0.3);
  brush.circle(230, 140, 96, 0.3);

  // sea: teal-blue, dark at the bottom, a few glints
  brush.fill("#1e5a5a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(620, 465); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#143a4a", 210);
  brush.beginShape(0.5);
  brush.vertex(-20, 560); brush.vertex(620, 550); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 12; i++) {
    let x = random(0, 600), y = random(470, 560);
    brush.fill("#b8d4c8", 190);
    brush.circle(x, y, random(4, 8), 0.3);
  }
}
