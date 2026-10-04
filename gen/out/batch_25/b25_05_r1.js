async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e1cf");
  randomSeed(5105);
  brush.noStroke();

  // grey-ochre sky with a heavier cloud bank
  brush.fill("#bdb49c", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 270); brush.vertex(-10, 270);
  brush.endShape(true);
  brush.fill("#9e978a", 170);
  brush.beginShape(1);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 70); brush.vertex(400, 110);
  brush.vertex(200, 80); brush.vertex(-10, 120);
  brush.endShape(true);

  // the forest edge: a solid dark mass with a ragged spiky top, then tree tips
  let top = 255;
  brush.fill("#5a6150", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.45);
  brush.beginShape(0.2);
  brush.vertex(-10, 300);
  for (let x = -10; x <= 610; x += 20) brush.vertex(x, top - random(5, 30) + x * 0.03);
  brush.vertex(610, 300);
  brush.endShape(true);
  let x = -5;
  while (x < 610) {
    let h = random(45, 95);
    let w = random(12, 18);
    let base = 285;
    brush.fill(random(["#2f3a2c", "#3b4533", "#283226"]), random(200, 230));
    brush.fillBleed(0.18);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.05);
    brush.vertex(x - w, base); brush.vertex(x - w * 0.6, base - h * 0.45); brush.vertex(x - w * 0.3, base - h * 0.5);
    brush.vertex(x, base - h); brush.vertex(x + w * 0.3, base - h * 0.5); brush.vertex(x + w * 0.6, base - h * 0.45); brush.vertex(x + w, base);
    brush.endShape(true);
    x += random(10, 20);
  }
  // shadow at the foot of the trees
  brush.fill("#2a2f24", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-10, 280); brush.vertex(610, 280); brush.vertex(610, 300); brush.vertex(-10, 302);
  brush.endShape(true);

  // wide field in soft diagonal swathes toward the viewer
  brush.fill("#b39c68", 195);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-10, 296); brush.vertex(610, 296); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  let sw = [["#9a8a55", 360, 420], ["#a8935e", 440, 520], ["#8a7c4a", 540, 610]];
  for (let s of sw) {
    brush.fill(s[0], 175);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(1);
    brush.vertex(-10, s[1]); brush.vertex(300, s[1] - 15); brush.vertex(610, s[1] + 5);
    brush.vertex(610, s[2]); brush.vertex(-10, s[2] + 10);
    brush.endShape(true);
  }
  // hedgerow tufts in the middle distance
  for (let i = 0; i < 10; i++) {
    brush.fill("#6b6a3e", 190);
    brush.fillBleed(0.25);
    brush.circle(40 + i * 60 + random(-10, 10), 345 + random(-4, 4), random(8, 14), 0.6);
  }
}
