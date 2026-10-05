async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece8f0");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#3a3a9a", 150);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 160); brush.vertex(0, 160);
  brush.endShape(true);
  brush.fill("#1c3a30", 230);
  brush.beginShape(0.8);
  brush.vertex(0, 140); brush.vertex(220, 160); brush.vertex(240, 400); brush.vertex(170, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#1a2a6a", 230);
  brush.beginShape(0.8);
  brush.vertex(600, 120); brush.vertex(400, 160); brush.vertex(380, 400); brush.vertex(430, 600); brush.vertex(600, 600);
  brush.endShape(true);
  brush.fill("#2e7a50", 190);
  brush.beginShape(0.9);
  brush.vertex(0, 200); brush.vertex(150, 220); brush.vertex(200, 420); brush.vertex(100, 560); brush.vertex(0, 520);
  brush.endShape(true);
  brush.fill("#2a8a60", 180);
  brush.beginShape(0.9);
  brush.vertex(600, 220); brush.vertex(450, 240); brush.vertex(420, 440); brush.vertex(500, 560); brush.vertex(600, 520);
  brush.endShape(true);
  brush.fill("#2a2a8a", 200);
  brush.beginShape(0.7);
  brush.vertex(225, 160); brush.vertex(395, 160); brush.vertex(400, 420); brush.vertex(240, 420);
  brush.endShape(true);
  brush.fill("#6a70c0", 190);
  brush.beginShape(0.7);
  brush.vertex(270, 170); brush.vertex(360, 170); brush.vertex(350, 420); brush.vertex(285, 420);
  brush.endShape(true);
  brush.fill("#2a2a8a", 220);
  brush.beginShape(0.8);
  brush.vertex(180, 420); brush.vertex(430, 420); brush.vertex(470, 600); brush.vertex(140, 600);
  brush.endShape(true);
  brush.fill("#ff6a20", 240);
  brush.circle(120, 520, 22, 0.8);
  brush.circle(160, 490, 14, 0.8);
  brush.circle(75, 470, 12, 0.8);
}
