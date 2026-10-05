async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e4d8");
  brush.noStroke();

  // sky: muted blue-grey wash, lots of paper left as white
  brush.fill("#a8b8c8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(300, 280); brush.vertex(-20, 250);
  brush.endShape(true);

  // far ridge behind, dark
  brush.fill("#7f7f7a", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(-20, 250); brush.vertex(150, 230); brush.vertex(300, 250); brush.vertex(470, 220); brush.vertex(620, 240); brush.vertex(620, 280); brush.vertex(-20, 280);
  brush.endShape(true);

  // mountain peak left, lower
  brush.fill("#8c8a7a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 280); brush.vertex(150, 260); brush.vertex(300, 280); brush.vertex(300, 470); brush.vertex(150, 450);
  brush.endShape(true);

  // near slope, earthy ochre
  brush.fill("#c9a86e", 210);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(150, 450); brush.vertex(620, 440); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // hiker off-centre right, two passes
  let hx = 470, hy = 390;
  brush.fill("#5a4a3e", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(hx - 14, hy); brush.vertex(hx + 14, hy); brush.vertex(hx + 8, hy - 110); brush.vertex(hx - 8, hy - 110);
  brush.endShape(true);
  brush.fill("#3a2a24", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(hx - 10, hy + 40); brush.vertex(hx + 10, hy + 40); brush.vertex(hx + 6, hy + 90); brush.vertex(hx - 6, hy + 90);
  brush.endShape(true);
  brush.fill("#3a2a24", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(hx - 9, hy + 100); brush.vertex(hx + 9, hy + 100); brush.vertex(hx + 4, hy + 125); brush.vertex(hx - 4, hy + 125);
  brush.endShape(true);
  brush.fill("#5a4a3e", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(hx - 10, hy + 130); brush.vertex(hx + 10, hy + 130); brush.vertex(hx + 4, hy + 160); brush.vertex(hx - 4, hy + 160);
  brush.endShape(true);
  brush.fill("#8a7a6a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(hx - 14, hy + 160); brush.vertex(hx + 14, hy + 160); brush.vertex(hx + 10, hy + 180); brush.vertex(hx - 10, hy + 180);
  brush.endShape(true);
}
