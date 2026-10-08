async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e4d6");
  randomSeed(3131);
  brush.noStroke();

  // sky: soft blue-grey, lower down
  brush.fill("#b8c2c8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150); brush.vertex(420, 170); brush.vertex(250, 155); brush.vertex(-20, 180);
  brush.endShape(true);
  brush.fill("#8f9aa8", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 180); brush.vertex(620, 180); brush.vertex(620, 420); brush.vertex(470, 430); brush.vertex(300, 410); brush.vertex(-20, 420);
  brush.endShape(true);

  // far field: low rolling hills
  for (let i = 0; i <= 6; i++) {
    let x = i * 100, h = 70 + random(-15, 15);
    brush.fill("#8a7a5a", 180);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(x, 420); brush.vertex(x + 50, 420 - h); brush.vertex(x + 100, 420 + random(-10, 10));
    brush.endShape(true);
  }
  brush.fill("#6e6048", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // foreground meadow
  brush.fill("#8a8464", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // the windmill, small
  let mx = 300, my = 330;
  brush.fill("#5a4a38", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(mx - 32, my - 110); brush.vertex(mx - 12, my - 100); brush.vertex(mx + 12, my - 100); brush.vertex(mx + 32, my - 110);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(mx - 32, my + 30); brush.vertex(mx - 12, my + 22); brush.vertex(mx + 12, my + 22); brush.vertex(mx + 32, my + 30);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(mx - 22, my + 32); brush.vertex(mx - 10, my + 40); brush.vertex(mx + 10, my + 40); brush.vertex(mx + 22, my + 32);
  brush.endShape(true);
  brush.fill("#3a2a20", 210);
  brush.beginShape(0.4);
  brush.vertex(mx - 22, my + 42); brush.vertex(mx - 10, my + 52); brush.vertex(mx + 10, my + 52); brush.vertex(mx + 22, my + 42);
  brush.endShape(true);

  // sails
  let sx = [0, 90, 180, 270];
  for (let i = 0; i < 4; i++) {
    let a = sx[i];
    let len = 110;
    let x0 = mx + cos(a) * 22, y0 = my + sin(a) * 22;
    let x1 = mx + cos(a + 90) * len, y1 = my + sin(a + 90) * len;
    let x2 = mx + cos(a + 180) * len * 0.6, y2 = my + sin(a + 180) * len * 0.6;
    brush.fill("#7a6a58", 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(x0, y0); brush.vertex(x1, y1); brush.vertex(x2, y2); brush.vertex(x0, y0);
    brush.endShape(true);
  }
  brush.fill("#5a4a38", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(mx - 12, my - 100); brush.vertex(mx + 12, my - 100); brush.vertex(mx + 12, my - 80); brush.vertex(mx - 12, my - 80);
  brush.endShape(true);
  brush.fill("#3a2a20", 210);
  brush.beginShape(0.4);
  brush.vertex(mx - 8, my - 88); brush.vertex(mx + 8, my - 88); brush.vertex(mx + 8, my - 72); brush.vertex(mx - 8, my - 72);
  brush.endShape(true);

  // shadow on ground
  brush.fill("#5a4a38", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(240, 520); brush.vertex(360, 515); brush.vertex(380, 530); brush.vertex(260, 535);
  brush.endShape(true);
}
