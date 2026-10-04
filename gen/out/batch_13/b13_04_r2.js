async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf6e8");
  brush.noStroke();
  // one bold sky wash, deep at the top, lighter near the horizon, bare paper for two clouds
  brush.fill("#1248c0", 205);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(-10, -10);
  brush.vertex(610, -10);
  brush.vertex(610, 200);
  brush.vertex(470, 170);
  brush.vertex(380, 190);
  brush.vertex(300, 150);
  brush.vertex(-10, 200);
  brush.endShape(true);
  brush.fill("#4a94e8", 185);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-10, 180);
  brush.vertex(300, 150);
  brush.vertex(380, 230);
  brush.vertex(470, 250);
  brush.vertex(610, 180);
  brush.vertex(610, 440);
  brush.vertex(-10, 450);
  brush.endShape(true);
  brush.fill("#8ab8ec", 170);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-10, 380);
  brush.vertex(610, 360);
  brush.vertex(610, 450);
  brush.vertex(-10, 460);
  brush.endShape(true);
  // field: bold stripes of green and ochre, low
  brush.fill("#a8cc14", 220);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-10, 450);
  brush.vertex(300, 436);
  brush.vertex(610, 440);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#e4b418", 190);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-10, 510);
  brush.vertex(300, 490);
  brush.vertex(610, 520);
  brush.vertex(610, 560);
  brush.vertex(-10, 560);
  brush.endShape(true);
  brush.fill("#4e9a14", 200);
  brush.beginShape(1);
  brush.vertex(-10, 560);
  brush.vertex(610, 550);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // oak far right, small, standing on the horizon
  let tx = 470, ty = 446;
  brush.fill("#2e1c10", 230);
  brush.fillBleed(0.18);
  brush.beginShape(1);
  brush.vertex(tx - 7, ty);
  brush.vertex(tx - 4, ty - 30);
  brush.vertex(tx - 20, ty - 46);
  brush.vertex(tx + 2, ty - 38);
  brush.vertex(tx + 18, ty - 50);
  brush.vertex(tx + 6, ty - 28);
  brush.vertex(tx + 8, ty);
  brush.endShape(true);
  // crown: dome of irregular lobes, deep emerald, dark underside
  let lb = [[-40, -60, 22], [-20, -78, 26], [6, -86, 28], [32, -76, 24], [48, -58, 20], [0, -60, 26]];
  for (let l of lb) {
    brush.fill("#1c7a22", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(tx + l[0], ty + l[1], l[2], 0.7);
  }
  brush.fill("#0c3a14", 210);
  brush.fillBleed(0.22);
  brush.beginShape(1);
  brush.vertex(tx - 50, ty - 50);
  brush.vertex(tx + 56, ty - 50);
  brush.vertex(tx + 30, ty - 36);
  brush.vertex(tx - 30, ty - 36);
  brush.endShape(true);
  brush.fill("#5ab830", 170);
  brush.circle(tx - 16, ty - 86, 12, 0.6);
  // shadow
  brush.fill("#2e6a10", 210);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(tx - 60, ty + 2);
  brush.vertex(tx + 30, ty);
  brush.vertex(tx + 20, ty + 12);
  brush.vertex(tx - 60, ty + 12);
  brush.endShape(true);
}
