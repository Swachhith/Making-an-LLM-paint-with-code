async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ebe4d8");
  brush.noStroke();

  // umber shadow wash behind
  brush.fill("#b8a58c", 140);
  brush.fillBleed(0.6, "out");
  brush.fillTexture(0.7, 0.3);
  brush.circle(300, 300, 260, true);

  // three huge standards at top
  brush.fill("#8a7196", 190);
  brush.fillBleed(0.45, "out");
  brush.fillTexture(0.5, 0.7);
  brush.beginShape(0.85);
  brush.vertex(300, 300);
  brush.vertex(220, 160);
  brush.vertex(260, 30);
  brush.vertex(340, 30);
  brush.vertex(380, 160);
  brush.endShape(true);
  brush.fill("#7a6189", 180);
  brush.beginShape(0.85);
  brush.vertex(290, 290);
  brush.vertex(140, 200);
  brush.vertex(90, 90);
  brush.vertex(180, 110);
  brush.endShape(true);
  brush.beginShape(0.85);
  brush.vertex(310, 290);
  brush.vertex(460, 200);
  brush.vertex(510, 90);
  brush.vertex(420, 110);
  brush.endShape(true);

  // falls sweeping down to the edges
  brush.fill("#6b4f7b", 210);
  brush.fillBleed(0.5, "out");
  brush.beginShape(0.9);
  brush.vertex(290, 300);
  brush.vertex(120, 330);
  brush.vertex(30, 470);
  brush.vertex(120, 560);
  brush.vertex(240, 430);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(310, 300);
  brush.vertex(480, 330);
  brush.vertex(570, 470);
  brush.vertex(480, 560);
  brush.vertex(360, 430);
  brush.endShape(true);
  brush.fill("#5c4169", 220);
  brush.beginShape(0.9);
  brush.vertex(280, 310);
  brush.vertex(320, 310);
  brush.vertex(370, 470);
  brush.vertex(300, 590);
  brush.vertex(230, 470);
  brush.endShape(true);

  // pale signal patches with vein strokes
  brush.fill("#d8c9a8", 200);
  brush.fillBleed(0.2, "in");
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  brush.vertex(290, 320);
  brush.vertex(310, 320);
  brush.vertex(318, 420);
  brush.vertex(282, 420);
  brush.endShape(true);
  brush.fill("#c9a24e", 220);
  brush.beginShape(0.6);
  brush.vertex(295, 318);
  brush.vertex(305, 318);
  brush.vertex(306, 390);
  brush.vertex(294, 390);
  brush.endShape(true);
  brush.fill("#3f2a4a", 200);
  for (let i = -3; i <= 3; i++) {
    brush.beginShape(0.5);
    brush.vertex(300 + i * 6, 330);
    brush.vertex(300 + i * 14, 470);
    brush.vertex(303 + i * 14, 470);
    brush.vertex(302 + i * 6, 330);
    brush.endShape(true);
  }
}
