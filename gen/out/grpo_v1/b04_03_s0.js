async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf5f2");
  brush.noStroke();
  // stem, broad and soft, curving to the lower left
  brush.fill("#8fb0a0", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(280, 300); brush.vertex(240, 470); brush.vertex(220, 560); brush.vertex(250, 560); brush.vertex(270, 470); brush.vertex(310, 300);
  brush.endShape(true);
  brush.fill("#5f8a7a", 170);
  brush.beginShape(0.6);
  brush.vertex(250, 400); brush.vertex(220, 530); brush.vertex(260, 530); brush.vertex(290, 400);
  brush.endShape(true);
  // three broad petals, each a soft pink, overlapping the paper
  for (let i = 0; i < 3; i++) {
    let a = i * 120 + 12;
    let R = 200;
    brush.fill("#f5b3c2", 215);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(300, 300);
    brush.vertex(300 + R * cos(a - 40), 300 + R * sin(a - 40));
    brush.vertex(300 + R * cos(a - 12), 300 + R * sin(a - 12));
    brush.vertex(300 + R * cos(a + 12), 300 + R * sin(a + 12));
    brush.vertex(300 + R * cos(a + 40), 300 + R * sin(a + 40));
    brush.endShape(true);
    // a narrower inner vein
    brush.fill("#e88fb0", 235);
    brush.fillBleed(0.15);
    brush.beginShape(0.3);
    brush.vertex(300, 300);
    brush.vertex(300 + R * cos(a - 18), 300 + R * sin(a - 18));
    brush.vertex(300 + R * cos(a + 18), 300 + R * sin(a + 18));
    brush.endShape(true);
  }
  // yellow stamen
  brush.fill("#f7d66a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(300, 300); brush.vertex(312, 300); brush.vertex(312, 312); brush.vertex(300, 312);
  brush.endShape(true);
  brush.fill("#e88a2a", 235);
  brush.beginShape(0.4);
  brush.vertex(300, 300); brush.vertex(308, 300); brush.vertex(308, 310); brush.vertex(300, 310);
  brush.endShape(true);
  brush.fill("#d94a14", 225);
  brush.beginShape(0.5);
  brush.vertex(300, 300); brush.vertex(310, 300); brush.vertex(310, 320); brush.vertex(300, 320);
  brush.endShape(true);
  // a few dark dots on the paper, not on the petals
  brush.fill("#a87a8a", 200);
  brush.fillBleed(0.1);
  brush.circle(100, 100, 2, 0.5);
  brush.circle(500, 500, 2, 0.5);
  brush.circle(400, 150, 2, 0.5);
  brush.circle(150, 450, 2, 0.5);
}
