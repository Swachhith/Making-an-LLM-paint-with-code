async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f8fb");
  randomSeed(88);
  brush.noStroke();
  // saturated cobalt sky
  brush.fill("#1f5fd6", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);
  brush.fill("#0c3aa8", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 120); brush.vertex(-20, 160);
  brush.endShape(true);
  // big peak, off centre (peak at x=390)
  let px = 390, py = 90;
  // rock body purple-blue, snow left as paper at top
  brush.fill("#5a2e8c", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.1);
  brush.vertex(80, 470); brush.vertex(250, 260); brush.vertex(300, 250); brush.vertex(340, 190); brush.vertex(px, py);
  brush.vertex(440, 170); brush.vertex(480, 200); brush.vertex(620, 330); brush.vertex(620, 470);
  brush.endShape(true);
  // paint the snow cap as bright paper by overpainting? light can't cover dark: instead paint shadow side of snow
  brush.fill("#7ab0ff", 200);
  brush.fillBleed(0.15);
  brush.beginShape(0.1);
  brush.vertex(px, py); brush.vertex(440, 170); brush.vertex(410, 200); brush.vertex(395, 160);
  brush.endShape(true);
  // shadow face of rock
  brush.fill("#2a0f5a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.1);
  brush.vertex(px, py + 60); brush.vertex(480, 200); brush.vertex(620, 330); brush.vertex(620, 470); brush.vertex(430, 470);
  brush.endShape(true);
  // secondary smaller peak left
  brush.fill("#c2336b", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.1);
  brush.vertex(-20, 470); brush.vertex(-20, 330); brush.vertex(90, 250); brush.vertex(170, 330); brush.vertex(260, 470);
  brush.endShape(true);
  // foreground: bold green and orange meadow
  brush.fill("#1f8a4c", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 450); brush.vertex(300, 430); brush.vertex(620, 455); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#f28a1a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 530); brush.vertex(300, 510); brush.vertex(620, 540); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
