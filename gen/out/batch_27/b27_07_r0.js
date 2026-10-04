async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ede6d6");
  randomSeed(707);
  brush.noStroke();
  // muted grey-ochre sky
  brush.fill("#b9b39f", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 330);
  brush.vertex(-20, 340);
  brush.endShape(true);
  // far hills
  brush.fill("#8e8f7b", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 320);
  brush.vertex(120, 290);
  brush.vertex(280, 305);
  brush.vertex(450, 280);
  brush.vertex(620, 300);
  brush.vertex(620, 350);
  brush.vertex(-20, 350);
  brush.endShape(true);
  // the wide field in bands, receding
  let bands = [[340, "#a79c6a"], [380, "#968a58"], [440, "#86794a"], [520, "#74683e"]];
  for (let b of bands) {
    brush.fill(b[1], 180);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.4);
    brush.vertex(-20, b[0] + random(-6, 6));
    brush.vertex(300, b[0] + random(-10, 10));
    brush.vertex(620, b[0] + random(-6, 6));
    brush.vertex(620, 620);
    brush.vertex(-20, 620);
    brush.endShape(true);
  }
  // distant cherry tree, small, on the far edge of the field
  let tx = 370, ty = 330;
  brush.fill("#4b3a2e", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(tx - 4, ty + 12);
  brush.vertex(tx - 3, ty - 10);
  brush.vertex(tx + 4, ty - 10);
  brush.vertex(tx + 5, ty + 12);
  brush.endShape(true);
  brush.fill("#c9a1a0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(tx, ty - 26, 30, 0.6);
  for (let i = 0; i < 12; i++) {
    brush.fill(random(["#b98285", "#d6b1ae", "#a86f75"]), random(170, 220));
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.circle(tx + random(-28, 28), ty - 26 + random(-18, 12), random(6, 12), 0.6);
  }
  brush.fill("#6e6340", 170);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(tx - 30, ty + 10);
  brush.vertex(tx + 35, ty + 8);
  brush.vertex(tx + 20, ty + 16);
  brush.vertex(tx - 25, ty + 16);
  brush.endShape(true);
  // foreground grass strokes
  for (let i = 0; i < 18; i++) {
    let x = random(0, 600);
    brush.fill("#5c5433", 180);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(x, 610);
    brush.vertex(x + random(-10, 10), 560 + random(-20, 20));
    brush.vertex(x + 16, 610);
    brush.endShape(true);
  }
}
