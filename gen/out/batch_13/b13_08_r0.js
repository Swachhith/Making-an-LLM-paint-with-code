async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e7e4dc");
  randomSeed(8);
  brush.noStroke();
  // grey rainy air, heavier at top
  brush.fill("#8e8a80", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(-10, -10);
  brush.vertex(610, -10);
  brush.vertex(610, 330);
  brush.vertex(-10, 360);
  brush.endShape(true);
  // wet street with a soft reflection
  brush.fill("#7a7064", 180);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-10, 470);
  brush.vertex(610, 460);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // figure at x~440, lower right
  let fx = 440, fy = 470;
  // coat
  brush.fill("#4e4034", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(fx - 14, fy - 110);
  brush.vertex(fx + 14, fy - 110);
  brush.vertex(fx + 26, fy - 20);
  brush.vertex(fx - 24, fy - 20);
  brush.endShape(true);
  // legs
  brush.fill("#2e2620", 220);
  brush.beginShape(0.5);
  brush.vertex(fx - 16, fy - 22);
  brush.vertex(fx + 18, fy - 22);
  brush.vertex(fx + 14, fy);
  brush.vertex(fx - 14, fy);
  brush.endShape(true);
  // head
  brush.fill("#8a6a52", 210);
  brush.circle(fx, fy - 122, 11, 0.2);
  // arm and handle
  brush.fill("#3e3228", 210);
  brush.beginShape(1);
  brush.vertex(fx + 4, fy - 100);
  brush.vertex(fx + 20, fy - 128);
  brush.vertex(fx + 30, fy - 124);
  brush.vertex(fx + 16, fy - 94);
  brush.endShape(true);
  // red umbrella canopy, two passes
  brush.fill("#c42a1e", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(fx - 60, fy - 132);
  brush.vertex(fx - 30, fy - 172);
  brush.vertex(fx + 14, fy - 184);
  brush.vertex(fx + 60, fy - 170);
  brush.vertex(fx + 86, fy - 132);
  brush.vertex(fx + 12, fy - 142);
  brush.endShape(true);
  brush.fill("#8e1810", 190);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(fx + 14, fy - 182);
  brush.vertex(fx + 60, fy - 168);
  brush.vertex(fx + 84, fy - 134);
  brush.vertex(fx + 30, fy - 140);
  brush.endShape(true);
  // reflection of the red on the wet street
  brush.fill("#a8463a", 150);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(fx - 20, fy + 4);
  brush.vertex(fx + 40, fy + 4);
  brush.vertex(fx + 30, fy + 80);
  brush.vertex(fx - 6, fy + 80);
  brush.endShape(true);
  brush.fill("#3e342c", 150);
  brush.beginShape(1);
  brush.vertex(fx - 14, fy + 2);
  brush.vertex(fx + 14, fy + 2);
  brush.vertex(fx + 10, fy + 50);
  brush.vertex(fx - 8, fy + 50);
  brush.endShape(true);
  // rain: small slanted dabs
  for (let i = 0; i < 90; i++) {
    let x = random(0, 600), y = random(0, 460);
    brush.fill("#5c584e", 170);
    brush.fillBleed(0.1);
    brush.circle(x, y, 1.6, 0.2);
    brush.circle(x - 2, y + 5, 1.2, 0.2);
  }
}
