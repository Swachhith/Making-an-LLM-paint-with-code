async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e6f0");
  brush.noStroke();
  // big sky bands
  const bands = [["#2a2a7a",0,170],["#4a3fa0",120,150],["#8a5fb0",230,110],["#f08a3a",320,70]];
  for (const b of bands) {
    brush.fill(b[0], 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(-10, b[1]); brush.vertex(300, b[1]-15); brush.vertex(610, b[1]);
    brush.vertex(610, b[1]+b[2]); brush.vertex(300, b[1]+b[2]+12); brush.vertex(-10, b[1]+b[2]);
    brush.endShape(true);
  }
  // sun accent
  brush.fill("#ff6a1a", 230); brush.fillBleed(0.25); brush.circle(380, 372, 34, 0.4);
  brush.fill("#ffd24a", 220); brush.circle(380, 374, 18, 0.3);
  // ground
  brush.fill("#2b2250", 220); brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(-10, 395); brush.vertex(200, 388); brush.vertex(420, 392); brush.vertex(610, 386);
  brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#4a3a80", 190);
  brush.beginShape(0.3);
  brush.vertex(-10, 420); brush.vertex(300, 405); brush.vertex(610, 415); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // road converging to horizon
  brush.fill("#9a6ab8", 200); brush.fillBleed(0.25);
  brush.beginShape(0.2);
  brush.vertex(292, 392); brush.vertex(312, 392); brush.vertex(470, 610); brush.vertex(110, 610);
  brush.endShape(true);
  brush.fill("#ffb050", 170);
  brush.beginShape(0.2);
  brush.vertex(296, 395); brush.vertex(308, 395); brush.vertex(350, 520); brush.vertex(285, 520);
  brush.endShape(true);
  // pole
  brush.fill("#14103a", 230);
  brush.beginShape(0.1);
  brush.vertex(120, 400); brush.vertex(138, 400); brush.vertex(136, 300); brush.vertex(122, 300);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(95, 305); brush.vertex(165, 305); brush.vertex(165, 320); brush.vertex(95, 320);
  brush.endShape(true);
}
