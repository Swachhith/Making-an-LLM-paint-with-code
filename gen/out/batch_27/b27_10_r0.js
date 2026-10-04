async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9eef2");
  randomSeed(1010);
  brush.noStroke();
  // bold rainy sky: indigo top, violet-grey lower, lighter band behind figure
  brush.fill("#2b3f8f", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 300);
  brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#5a58a8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 220);
  brush.vertex(620, 250);
  brush.vertex(620, 470);
  brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#8fb0d8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(330, 360, 130, 0.8);
  // rain streaks: slanted thin-ish shapes
  for (let i = 0; i < 26; i++) {
    let x = random(-40, 620), y = random(-20, 440);
    brush.fill("#1c2a66", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.1);
    brush.vertex(x, y);
    brush.vertex(x + 15, y);
    brush.vertex(x - 5, y + 70);
    brush.vertex(x - 18, y + 70);
    brush.endShape(true);
  }
  // wet street, reflecting
  brush.fill("#1c2a66", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 470);
  brush.vertex(620, 470);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // figure silhouette, standing
  let fx = 330;
  brush.fill("#111324", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(fx - 22, 330);
  brush.vertex(fx + 22, 330);
  brush.vertex(fx + 32, 430);
  brush.vertex(fx + 16, 432);
  brush.vertex(fx + 14, 480);
  brush.vertex(fx + 2, 480);
  brush.vertex(fx, 440);
  brush.vertex(fx - 4, 480);
  brush.vertex(fx - 16, 480);
  brush.vertex(fx - 16, 432);
  brush.vertex(fx - 30, 430);
  brush.endShape(true);
  brush.fill("#111324", 240);
  brush.circle(fx, 315, 15, 0.3);
  // arm raising umbrella handle
  brush.beginShape(0.2);
  brush.vertex(fx + 10, 340);
  brush.vertex(fx + 30, 300);
  brush.vertex(fx + 44, 304);
  brush.vertex(fx + 22, 350);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(fx + 30, 300);
  brush.vertex(fx + 36, 250);
  brush.vertex(fx + 44, 250);
  brush.vertex(fx + 40, 300);
  brush.endShape(true);
  // red umbrella canopy, two passes
  for (let p = 0; p < 3; p++) {
    brush.fill(p == 2 ? "#a3000f" : "#e3101f", 230);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(fx - 70 + p * 6, 280);
    brush.vertex(fx - 40, 230);
    brush.vertex(fx + 40, 212 + p * 4);
    brush.vertex(fx + 110 - p * 6, 240);
    brush.vertex(fx + 135 - p * 8, 280);
    brush.vertex(fx + 95, 268);
    brush.vertex(fx + 60, 280);
    brush.vertex(fx + 25, 272);
    brush.vertex(fx - 15, 284);
    brush.endShape(true);
  }
  // red reflection in the wet street
  brush.fill("#e3101f", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(fx - 40, 500);
  brush.vertex(fx + 110, 500);
  brush.vertex(fx + 70, 560);
  brush.vertex(fx + 20, 590);
  brush.vertex(fx - 10, 550);
  brush.endShape(true);
  brush.fill("#0b0c18", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(fx - 16, 482);
  brush.vertex(fx + 14, 482);
  brush.vertex(fx + 22, 540);
  brush.vertex(fx - 20, 540);
  brush.endShape(true);
}
