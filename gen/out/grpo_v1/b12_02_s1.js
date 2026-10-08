async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0d162a");
  brush.noStroke();
  // teal sky, top left, big pass first
  brush.fill("#0f8a8a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(450, 350); brush.vertex(300, 320); brush.vertex(150, 370); brush.vertex(-20, 260);
  brush.endShape(true);
  // indigo, right and lower, big pass
  brush.fill("#2a1f6a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(300, 320); brush.vertex(620, 250); brush.vertex(620, 620); brush.vertex(300, 620);
  brush.endShape(true);
  // a sliver of indigo on the left
  brush.fill("#1a124a", 150);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 260); brush.vertex(150, 370); brush.vertex(300, 320); brush.vertex(120, 250); brush.vertex(-20, 230);
  brush.endShape(true);
  // moon: pale paper left as paper, indigo halo painted around it
  brush.fill("#2a1f6a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(320, 120, 110, 0.4);
  brush.fill("#1a124a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(320, 120, 90, 0.4);
  // stars
  for (let i = 0; i < 30; i++) {
    brush.fill("#b9c3e0", 220);
    brush.fillBleed(0.05);
    brush.fillTexture(0.1, 0.1);
    brush.circle(random(-20, 620), random(-20, 250), random(1.5, 3.5), 0.1);
  }
  // sea: indigo wash
  brush.fill("#0a122a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 350); brush.vertex(620, 350); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // moon reflection, long and pale
  brush.fill("#a8bfe0", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(310, 350); brush.vertex(330, 350); brush.vertex(340, 470); brush.vertex(320, 470);
  brush.endShape(true);
  // a few dark ripples
  brush.fill("#040a14", 200);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(200, 420); brush.vertex(220, 420); brush.vertex(225, 470); brush.vertex(205, 470);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(450, 400); brush.vertex(470, 400); brush.vertex(475, 450); brush.vertex(455, 450);
  brush.endShape(true);
}
