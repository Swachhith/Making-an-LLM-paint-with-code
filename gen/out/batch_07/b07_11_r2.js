async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5f1f7");
  brush.noStroke();

  // three sepals: top and two lower
  brush.fill("#9b3fb8", 200);
  brush.fillBleed(0.45, "out");
  brush.fillTexture(0.5, 0.7);
  brush.beginShape(0.85);
  brush.vertex(300, 290);
  brush.vertex(230, 150);
  brush.vertex(300, 40);
  brush.vertex(370, 150);
  brush.endShape(true);
  brush.beginShape(0.85);
  brush.vertex(290, 310);
  brush.vertex(150, 440);
  brush.vertex(120, 540);
  brush.vertex(240, 460);
  brush.endShape(true);
  brush.beginShape(0.85);
  brush.vertex(310, 310);
  brush.vertex(450, 440);
  brush.vertex(480, 540);
  brush.vertex(360, 460);
  brush.endShape(true);

  // two wide petals left and right
  brush.fill("#b04fd0", 210);
  brush.fillBleed(0.5, "out");
  brush.beginShape(0.95);
  brush.vertex(295, 290);
  brush.vertex(170, 160);
  brush.vertex(40, 220);
  brush.vertex(50, 360);
  brush.vertex(200, 360);
  brush.endShape(true);
  brush.beginShape(0.95);
  brush.vertex(305, 290);
  brush.vertex(430, 160);
  brush.vertex(560, 220);
  brush.vertex(550, 360);
  brush.vertex(400, 360);
  brush.endShape(true);

  // darker veining toward centre
  brush.fill("#7a1f98", 200);
  brush.fillBleed(0.25, "in");
  brush.circle(220, 270, 50, true);
  brush.circle(380, 270, 50, true);

  // lip
  brush.fill("#5c0c78", 225);
  brush.fillBleed(0.3, "out");
  brush.beginShape(0.8);
  brush.vertex(262, 315);
  brush.vertex(338, 315);
  brush.vertex(385, 395);
  brush.vertex(345, 470);
  brush.vertex(300, 500);
  brush.vertex(255, 470);
  brush.vertex(215, 395);
  brush.endShape(true);
  // magenta stripes fanning over the side petals
  brush.fill("#7d1fa0", 160);
  brush.fillBleed(0.3, "out");
  for (let i = -4; i <= 4; i++) {
    if (i === 0) continue;
    const ex = 300 + i * 38, ey = 262 + abs(i) * 12 - (i % 2) * 20;
    brush.beginShape(0.5);
    brush.vertex(300, 295);
    brush.vertex(ex, ey);
    brush.vertex(ex + 4, ey + 6);
    brush.vertex(302, 300);
    brush.endShape(true);
  }
  brush.fill("#f2c12e", 230);
  brush.fillBleed(0.1, "in");
  brush.circle(300, 318, 16, true);

  // column
  brush.fill("#f7e6f4", 230);
  brush.circle(300, 290, 14, true);
}
