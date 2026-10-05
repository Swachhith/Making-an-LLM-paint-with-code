async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ede4d0");
  randomSeed(66);
  brush.noStroke();
  // big sky
  brush.fill("#a8bcb0", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 470); brush.vertex(0, 470); brush.endShape(true);
  brush.fill("#d8c8a0", 160);
  brush.beginShape(0.7); brush.vertex(0, 150); brush.vertex(600, 120); brush.vertex(600, 400); brush.vertex(0, 420); brush.endShape(true);
  // distant ridge
  brush.fill("#6a7a64", 170);
  brush.beginShape(0.6); brush.vertex(0, 430); brush.vertex(120, 395); brush.vertex(280, 420); brush.vertex(420, 390); brush.vertex(600, 420); brush.vertex(600, 480); brush.vertex(0, 480); brush.endShape(true);
  // ground
  brush.fill("#6a4a30", 215); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(0, 470); brush.vertex(300, 460); brush.vertex(600, 475); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  // redwood trunk
  brush.fill("#8a4a28", 200); brush.fillBleed(0.25); brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.3); brush.vertex(215, 0); brush.vertex(375, 0); brush.vertex(385, 400); brush.vertex(420, 480); brush.vertex(480, 520); brush.vertex(150, 520); brush.vertex(190, 470); brush.vertex(205, 400); brush.endShape(true);
  brush.fill("#5a2a18", 210);
  brush.beginShape(0.3); brush.vertex(300, 0); brush.vertex(375, 0); brush.vertex(385, 400); brush.vertex(420, 480); brush.vertex(480, 520); brush.vertex(300, 520); brush.endShape(true);
  // bark furrows
  for (var i = 0; i < 6; i++) {
    var x = 235 + i * 25 + random(-5, 5);
    brush.fill("#3a1a10", 170);
    brush.beginShape(0.3); brush.vertex(x, 20); brush.vertex(x + 16, 20); brush.vertex(x + 20, 440); brush.vertex(x + 4, 440); brush.endShape(true);
  }
  // fern litter
  brush.fill("#4a5a30", 190);
  for (var j = 0; j < 10; j++) brush.circle(random(0, 600), random(500, 590), random(15, 30), 0.7);
}
