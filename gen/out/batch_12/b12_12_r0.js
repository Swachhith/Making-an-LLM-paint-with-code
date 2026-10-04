async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f6f4");
  randomSeed(1212);
  brush.noStroke();
  // pale cool sky
  brush.fill("#c3d8e6", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 350); brush.vertex(-20, 350);
  brush.endShape(true);
  // distant blue hills
  brush.fill("#9fb6c8", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 340); brush.vertex(150, 300); brush.vertex(330, 320); brush.vertex(480, 295); brush.vertex(620, 325); brush.vertex(620, 370); brush.vertex(-20, 370);
  brush.endShape(true);
  // big field
  brush.fill("#a8c7a0", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 350); brush.vertex(620, 345); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#7fa88a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 480); brush.vertex(250, 460); brush.vertex(620, 500); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // small tree far away, right of centre
  let tx = 380, ty = 360;
  brush.fill("#6b6a6e", 220);
  brush.fillBleed(0.15);
  brush.beginShape(0.3);
  brush.vertex(tx - 5, ty); brush.vertex(tx + 5, ty); brush.vertex(tx + 4, ty - 26); brush.vertex(tx - 4, ty - 26);
  brush.endShape(true);
  brush.fill("#5f8f7a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(tx, ty - 40, 34, 0.7);
  brush.fill("#3f6f64", 180);
  brush.circle(tx + 8, ty - 34, 22, 0.7);
  // apples
  for (let i = 0; i < 10; i++) {
    brush.fill("#c8384a", 230);
    brush.fillBleed(0.05);
    brush.circle(tx + random(-26, 26), ty - 40 + random(-22, 20), 2.5, 0.2);
  }
  // shadow under tree
  brush.fill("#5f8a86", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(tx - 30, ty); brush.vertex(tx + 40, ty - 2); brush.vertex(tx + 36, ty + 8); brush.vertex(tx - 26, ty + 8);
  brush.endShape(true);
}
