async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#2e4a86");
  brush.noStroke();

  // deepen the night sky toward top
  brush.fill("#0b1640", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 220); brush.vertex(-40, 260);
  brush.endShape(true);

  // meadow and tree silhouettes: two passes of the darkest blue
  for (let pass = 0; pass < 3; pass++) {
    brush.fill(pass ? "#000000" : "#050a20", 250);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(-40, 480); brush.vertex(120, 465); brush.vertex(260, 478); brush.vertex(400, 455);
    brush.vertex(640, 470); brush.vertex(640, 640); brush.vertex(-40, 640);
    brush.endShape(true);
    for (let x = -10; x < 620; x += 30) {
      const h = 30 + ((x * 37) % 60);
      brush.beginShape(0.4);
      brush.vertex(x, 490); brush.vertex(x + 10 + (x % 13), 470 - h); brush.vertex(x + 24, 490);
      brush.endShape(true);
    }
    brush.beginShape(0.5);
    brush.vertex(110, 480); brush.vertex(126, 330); brush.vertex(144, 330); brush.vertex(158, 480);
    brush.endShape(true);
    brush.circle(135, 270, 80, 0.6);
    brush.circle(90, 310, 50, 0.6);
    brush.circle(185, 305, 55, 0.6);
  }

  // fireflies: warm yellow glows
  for (let i = 0; i < 45; i++) {
    const x = 220 + random(380), y = 200 + random(290);
    brush.fillBleed(0.35);
    brush.fill("#ff9a1a", 200);
    brush.circle(x, y, 7 + random(5), 0.5);
    brush.fill("#ffd24a", 250);
    brush.circle(x, y, 2 + random(2), 0.2);
  }
  // a few stars
  for (let i = 0; i < 25; i++) {
    brush.fill("#ffe46a", 200);
    brush.circle(random(600), random(220), 1 + random(1.5), 0.1);
  }
}
