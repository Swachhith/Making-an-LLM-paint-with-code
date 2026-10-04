async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ecebe4");
  brush.noStroke();

  brush.fill("#d8d6ca", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.35);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 330); brush.vertex(-20, 330);
  brush.endShape(true);

  // far hills misty
  brush.fill("#b9bdb0", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 320); brush.vertex(150, 290); brush.vertex(330, 305); brush.vertex(470, 285); brush.vertex(620, 300); brush.vertex(620, 350); brush.vertex(-20, 350);
  brush.endShape(true);

  // field
  brush.fill("#c5c79e", 190);
  brush.fillBleed(0.28);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, 340); brush.vertex(620, 335); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#b1b58a", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 450); brush.vertex(300, 420); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // cypress row small in middle distance
  const xs = [300, 330, 356, 384, 410, 438, 462, 488];
  for (let i = 0; i < xs.length; i++) {
    const h = 110 + (i % 3) * 18;
    const b = 345;
    brush.fill("#8a9483", 185);
    brush.fillBleed(0.28);
    brush.fillTexture(0.4, 0.45);
    brush.beginShape(0.6);
    brush.vertex(xs[i], b - h);
    brush.vertex(xs[i] + 11, b - h * 0.5);
    brush.vertex(xs[i] + 9, b);
    brush.vertex(xs[i] - 9, b);
    brush.vertex(xs[i] - 11, b - h * 0.5);
    brush.endShape(true);
    brush.fill("#6f7b6c", 165);
    brush.beginShape(0.6);
    brush.vertex(xs[i] + 2, b - h * 0.8);
    brush.vertex(xs[i] + 9, b - h * 0.4);
    brush.vertex(xs[i] + 6, b);
    brush.vertex(xs[i] - 2, b);
    brush.endShape(true);
  }
  // a farmhouse hint
  brush.fill("#a79c8a", 170);
  brush.beginShape(0.2);
  brush.vertex(220, 330); brush.vertex(270, 330); brush.vertex(270, 348); brush.vertex(220, 348);
  brush.endShape(true);

  // soft furrow strokes
  brush.fill("#9ea07a", 150);
  brush.beginShape(0.6);
  brush.vertex(-20, 540); brush.vertex(300, 500); brush.vertex(620, 550); brush.vertex(620, 575); brush.vertex(300, 525); brush.vertex(-20, 570);
  brush.endShape(true);
}
