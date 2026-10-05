async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4efe4");
  brush.noStroke();
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#2060d0", 200);
  brush.beginShape(0.5);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 380); brush.vertex(0, 380);
  brush.endShape(true);
  brush.fill("#ff9040", 140);
  brush.beginShape(0.8);
  brush.vertex(0, 260); brush.vertex(600, 230); brush.vertex(600, 400); brush.vertex(0, 400);
  brush.endShape(true);
  brush.fill("#5a2a9a", 230);
  brush.beginShape(0.9);
  brush.vertex(0, 400); brush.vertex(60, 250); brush.vertex(150, 330); brush.vertex(280, 150); brush.vertex(380, 300); brush.vertex(470, 220); brush.vertex(600, 380); brush.vertex(600, 450); brush.vertex(0, 450);
  brush.endShape(true);
  brush.fill("#2a1060", 200);
  brush.beginShape(0.8);
  brush.vertex(280, 150); brush.vertex(380, 300); brush.vertex(330, 450); brush.vertex(250, 450); brush.vertex(240, 260);
  brush.endShape(true);
  brush.fill("#f0f0f8", 255);
  brush.beginShape(0.6);
  brush.vertex(280, 150); brush.vertex(310, 205); brush.vertex(270, 195);
  brush.endShape(true);
  brush.fill("#c8381c", 230);
  brush.beginShape(0.8);
  brush.vertex(0, 480); brush.vertex(200, 450); brush.vertex(450, 470); brush.vertex(600, 440); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#1a8a50", 220);
  brush.beginShape(0.8);
  brush.vertex(0, 540); brush.vertex(150, 500); brush.vertex(300, 560); brush.vertex(300, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#f2d890", 255);
  brush.beginShape(0.9);
  brush.vertex(520, 600); brush.vertex(380, 540); brush.vertex(300, 500); brush.vertex(240, 470); brush.vertex(275, 465); brush.vertex(340, 495); brush.vertex(430, 535); brush.vertex(580, 600);
  brush.endShape(true);
}
