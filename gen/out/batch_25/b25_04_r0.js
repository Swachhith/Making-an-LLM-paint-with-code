async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f5f7");
  randomSeed(44);
  brush.noStroke();

  // wide cool sky, graded in bands
  let bands = ["#9ec3e0", "#b7d3e8", "#cfe0ec"];
  for (let i = 0; i < bands.length; i++) {
    brush.fill(bands[i], 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.35, 0.4);
    brush.beginShape(0.6);
    brush.vertex(-10, i * 120 - 10); brush.vertex(610, i * 120 - 20);
    brush.vertex(610, i * 120 + 150); brush.vertex(-10, i * 120 + 160);
    brush.endShape(true);
  }

  // big mountain, blue-violet, with a snowy peak left as paper
  brush.fill("#7f8fb8", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(40, 470); brush.vertex(190, 300); brush.vertex(250, 240);
  brush.vertex(290, 175); brush.vertex(330, 230); brush.vertex(400, 280);
  brush.vertex(470, 350); brush.vertex(580, 470);
  brush.endShape(true);
  // shadow side
  brush.fill("#5a6a99", 190);
  brush.fillBleed(0.2);
  brush.beginShape(0.2);
  brush.vertex(290, 185); brush.vertex(330, 240); brush.vertex(400, 290);
  brush.vertex(470, 360); brush.vertex(570, 470); brush.vertex(330, 470);
  brush.endShape(true);

  // low foothills
  brush.fill("#8fa6a0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 470); brush.vertex(120, 440); brush.vertex(300, 455);
  brush.vertex(480, 435); brush.vertex(610, 460); brush.vertex(610, 490); brush.vertex(-10, 490);
  brush.endShape(true);

  // meadow, low and wide
  brush.fill("#a8c0a0", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-10, 480); brush.vertex(610, 475); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#7f9e86", 170);
  brush.beginShape(0.6);
  brush.vertex(-10, 540); brush.vertex(300, 525); brush.vertex(610, 545); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);

  // the hut, small, left of centre
  let hx = 200, hy = 488;
  brush.fill("#8a8d99", 210);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(hx, hy); brush.vertex(hx + 40, hy); brush.vertex(hx + 40, hy - 22); brush.vertex(hx, hy - 22);
  brush.endShape(true);
  for (let p = 0; p < 2; p++) {
    brush.fill("#c0302a", 220);
    brush.fillBleed(0.15);
    brush.beginShape(0);
    brush.vertex(hx - 6, hy - 20); brush.vertex(hx + 20, hy - 42); brush.vertex(hx + 46, hy - 20);
    brush.endShape(true);
  }
  brush.fill("#3e4150", 220);
  brush.circle(hx + 12, hy - 8, 4, 0.1);
}
