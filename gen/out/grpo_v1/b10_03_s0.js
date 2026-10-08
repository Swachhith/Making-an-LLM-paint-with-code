async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e3d8");
  brush.noStroke();
  // soft sky: warm peach fading to lilac
  brush.fill("#e8c4a8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(470, 250); brush.vertex(470, 420); brush.vertex(330, 420); brush.vertex(330, 250); brush.vertex(180, 250); brush.vertex(180, 420); brush.vertex(40, 420); brush.vertex(40, 250); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#c8b8d4", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(420, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(520, 250); brush.vertex(520, 420); brush.vertex(360, 420); brush.vertex(360, 250); brush.vertex(260, 250); brush.vertex(260, -20); brush.vertex(420, -20);
  brush.endShape(true);
  // distant tree line
  brush.fill("#7a725a", 180);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 460); brush.vertex(540, 450); brush.vertex(480, 465); brush.vertex(420, 455); brush.vertex(350, 465); brush.vertex(270, 450); brush.vertex(200, 462); brush.vertex(130, 450); brush.vertex(60, 462); brush.vertex(-20, 455);
  brush.endShape(true);
  // ground
  brush.fill("#8c826a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // bench
  brush.fill("#5a4a38", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(200, 420); brush.vertex(400, 420); brush.vertex(400, 430); brush.vertex(200, 430);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(200, 430); brush.vertex(210, 430); brush.vertex(210, 445); brush.vertex(200, 445);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(400, 430); brush.vertex(410, 430); brush.vertex(410, 445); brush.vertex(400, 445);
  brush.endShape(true);
  // two figures as silhouettes
  let p1 = [330, 340, 300, 300, 360, 300, 330, 360, 330, 390, 330, 430];
  let p2 = [440, 340, 410, 300, 470, 300, 440, 360, 440, 390, 440, 430];
  for (let p of [p1, p2]) {
    brush.fill("#4a3e2e", 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(p[0], p[4]); brush.vertex(p[1], p[5]); brush.vertex(p[2], p[6]); brush.vertex(p[3], p[7]); brush.vertex(p[0], p[8]); brush.vertex(p[0], p[10]); brush.vertex(p[1], p[9]); brush.vertex(p[2], p[11]); brush.vertex(p[3], p[12]); brush.vertex(p[0], p[13]);
    brush.endShape(true);
  }
  // heads
  brush.fill("#3a3024", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(330, 280, 24, 0.3);
  brush.circle(440, 280, 24, 0.3);
  // a couple of fallen leaves
  brush.fill("#b87a5a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(150, 470, 16, 0.5);
  brush.circle(520, 460, 12, 0.5);
  brush.circle(300, 490, 10, 0.5);
}
