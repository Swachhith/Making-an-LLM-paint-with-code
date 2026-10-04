async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece6da");
  brush.noStroke();
  // hazy sky, warm grey
  brush.fill("#c2b8a6", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);
  // far ridges, layered, receding
  brush.fill("#9a9486", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(80, 420); brush.vertex(200, 445); brush.vertex(330, 400); brush.vertex(470, 440); brush.vertex(620, 410);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#7a6f5c", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 520); brush.vertex(120, 490); brush.vertex(260, 515); brush.vertex(420, 480); brush.vertex(620, 510);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // summit rock, lower right, rising
  brush.fill("#5c4a36", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(300, 620); brush.vertex(380, 520); brush.vertex(440, 470); brush.vertex(500, 455); brush.vertex(560, 480); brush.vertex(620, 520); brush.vertex(620, 620);
  brush.endShape(true);
  brush.fill("#3a2e22", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(470, 620); brush.vertex(500, 470); brush.vertex(560, 485); brush.vertex(620, 525); brush.vertex(620, 620);
  brush.endShape(true);
  // hiker on summit
  let hx = 495, hy = 455;
  brush.fill("#2a2420", 235);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(hx, hy - 50, 6, 0.3);
  brush.beginShape(0.2);
  brush.vertex(hx - 7, hy - 43); brush.vertex(hx + 7, hy - 43); brush.vertex(hx + 8, hy - 18); brush.vertex(hx - 7, hy - 18);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(hx - 7, hy - 19); brush.vertex(hx - 1, hy - 19); brush.vertex(hx - 9, hy + 2); brush.vertex(hx - 14, hy + 1);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(hx + 1, hy - 19); brush.vertex(hx + 7, hy - 19); brush.vertex(hx + 11, hy + 2); brush.vertex(hx + 5, hy + 2);
  brush.endShape(true);
  // rust backpack
  brush.fill("#9a4a24", 225);
  brush.beginShape(0.3);
  brush.vertex(hx - 14, hy - 42); brush.vertex(hx - 5, hy - 42); brush.vertex(hx - 5, hy - 22); brush.vertex(hx - 15, hy - 24);
  brush.endShape(true);
  // raised arm with pole
  brush.fill("#2a2420", 210);
  brush.beginShape(0.2);
  brush.vertex(hx + 4, hy - 40); brush.vertex(hx + 20, hy - 70); brush.vertex(hx + 25, hy - 67); brush.vertex(hx + 9, hy - 36);
  brush.endShape(true);
}
