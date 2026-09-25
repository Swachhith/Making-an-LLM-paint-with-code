async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbfaf7");
  brush.noStroke();

  brush.fill("#7a6154", 190);
  brush.fillBleed(0.15);
  brush.fillTexture(0.7, 0.4);
  brush.beginShape(0.4);
  brush.vertex(20, 560);
  brush.vertex(180, 440);
  brush.vertex(330, 330);
  brush.vertex(470, 180);
  brush.vertex(480, 186);
  brush.vertex(338, 342);
  brush.vertex(190, 452);
  brush.vertex(30, 575);
  brush.endShape(true);

  // upright bloom, lower left
  let bx = 210, by = 400;
  let upr = [[-38, 150, "#f7dfe6"], [-12, 175, "#f4d2dc"], [14, 170, "#f7dfe6"], [40, 140, "#f2cdd8"]];
  for (let p of upr) {
    let a = p[0] - 90, len = p[1];
    brush.fill(p[2], 170);
    brush.fillBleed(0.35);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.8);
    brush.vertex(bx + cos(a - 60) * 20, by + sin(a - 60) * 20);
    brush.vertex(bx + cos(a - 12) * len * 0.7, by + sin(a - 12) * len * 0.7);
    brush.vertex(bx + cos(a) * len, by + sin(a) * len);
    brush.vertex(bx + cos(a + 12) * len * 0.7, by + sin(a + 12) * len * 0.7);
    brush.vertex(bx + cos(a + 60) * 20, by + sin(a + 60) * 20);
    brush.endShape(true);
    brush.fill("#d9798f", 190);
    brush.fillBleed(0.3);
    brush.beginShape(0.8);
    brush.vertex(bx + cos(a - 40) * 16, by + sin(a - 40) * 16);
    brush.vertex(bx + cos(a) * len * 0.35, by + sin(a) * len * 0.35);
    brush.vertex(bx + cos(a + 40) * 16, by + sin(a + 40) * 16);
    brush.endShape(true);
  }

  // open bloom, tilted, upper right
  let ox = 420, oy = 210;
  for (let k = 0; k < 7; k++) {
    let a = k * 51 + 10;
    let len = 95 + (k % 2) * 25;
    brush.fill("#fbe6ec", 160);
    brush.fillBleed(0.35);
    brush.fillTexture(0.35, 0.5);
    brush.beginShape(0.85);
    brush.vertex(ox, oy);
    brush.vertex(ox + cos(a - 20) * len * 0.8, oy + sin(a - 20) * len * 0.55);
    brush.vertex(ox + cos(a) * len, oy + sin(a) * len * 0.62);
    brush.vertex(ox + cos(a + 20) * len * 0.8, oy + sin(a + 20) * len * 0.55);
    brush.endShape(true);
    brush.fill("#e38fa3", 175);
    brush.fillBleed(0.25);
    brush.beginShape(0.8);
    brush.vertex(ox, oy);
    brush.vertex(ox + cos(a - 8) * len * 0.4, oy + sin(a - 8) * len * 0.25);
    brush.vertex(ox + cos(a + 8) * len * 0.4, oy + sin(a + 8) * len * 0.25);
    brush.endShape(true);
  }
  brush.fill("#b6a24a", 210);
  brush.fillBleed(0.1);
  brush.circle(ox, oy, 12, true);
  brush.fill("#8a7a3a", 190);
  brush.circle(bx, by - 6, 10, true);
}
