async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eaf0f4");
  randomSeed(1010);
  brush.noStroke();
  // saturated storm sky, glowing turquoise gap behind the figure
  brush.fill("#233a94", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 300);
  brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#233a94", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20);
  brush.vertex(400, -20);
  brush.vertex(250, 140);
  brush.vertex(-20, 180);
  brush.endShape(true);
  brush.fill("#5b4fb0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 220);
  brush.vertex(620, 250);
  brush.vertex(620, 470);
  brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#5fc0d6", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(340, 370, 120, 0.8);
  // diagonal rain, two lengths
  for (let i = 0; i < 34; i++) {
    let x = random(-40, 640), y = random(-30, 540);
    let len = random(50, 90);
    brush.fill(random(["#15205a", "#3d56b8"]), 180);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.1);
    brush.vertex(x, y);
    brush.vertex(x + 15, y);
    brush.vertex(x - 6, y + len);
    brush.vertex(x - 20, y + len);
    brush.endShape(true);
  }
  // wet pavement
  for (let p = 0; p < 2; p++) {
    brush.fill("#15205a", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(-20, 470 + p * 30);
    brush.vertex(620, 470 + p * 20);
    brush.vertex(620, 620);
    brush.vertex(-20, 620);
    brush.endShape(true);
  }
  // figure silhouette in a long coat, three passes for a solid dark
  let fx = 330;
  for (let p = 0; p < 3; p++) {
    brush.fill("#0c0d1c", 240);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.4);
    brush.vertex(fx - 20, 325);
    brush.vertex(fx + 20, 325);
    brush.vertex(fx + 36, 440);
    brush.vertex(fx + 16, 442);
    brush.vertex(fx + 15, 485);
    brush.vertex(fx + 2, 485);
    brush.vertex(fx, 450);
    brush.vertex(fx - 4, 485);
    brush.vertex(fx - 17, 485);
    brush.vertex(fx - 17, 442);
    brush.vertex(fx - 34, 440);
    brush.endShape(true);
    brush.circle(fx, 310, 16, 0.3);
    brush.beginShape(0.2);
    brush.vertex(fx + 8, 340);
    brush.vertex(fx + 28, 296);
    brush.vertex(fx + 45, 300);
    brush.vertex(fx + 22, 352);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(fx + 30, 300);
    brush.vertex(fx + 36, 245);
    brush.vertex(fx + 45, 245);
    brush.vertex(fx + 42, 300);
    brush.endShape(true);
  }
  // red umbrella dome with scalloped edge, three passes
  for (let p = 0; p < 3; p++) {
    brush.fill(["#ff1a1a", "#e00b1c", "#9c0010"][p], 235);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(fx - 70 + p * 10, 282);
    brush.vertex(fx - 45 + p * 6, 232);
    brush.vertex(fx + 40, 208 + p * 6);
    brush.vertex(fx + 115 - p * 8, 236);
    brush.vertex(fx + 140 - p * 12, 282);
    brush.vertex(fx + 105, 270);
    brush.vertex(fx + 70, 284);
    brush.vertex(fx + 35, 272);
    brush.vertex(fx, 286);
    brush.vertex(fx - 35, 272);
    brush.endShape(true);
  }
  // red reflection streaks and the figure's dark reflection
  for (let p = 0; p < 2; p++) {
    brush.fill("#ff1a1a", 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(fx - 40, 520);
    brush.vertex(fx + 120, 515);
    brush.vertex(fx + 80, 560);
    brush.vertex(fx + 40, 600);
    brush.vertex(fx, 560);
    brush.endShape(true);
  }
  brush.fill("#05060e", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(fx - 17, 487);
  brush.vertex(fx + 15, 487);
  brush.vertex(fx + 26, 520);
  brush.vertex(fx - 24, 520);
  brush.endShape(true);
  // rain splashes on the pavement
  for (let i = 0; i < 18; i++) {
    brush.fill("#6f86d8", 200);
    brush.circle(random(0, 600), random(490, 600), random(3, 7), 0.5);
  }
}
