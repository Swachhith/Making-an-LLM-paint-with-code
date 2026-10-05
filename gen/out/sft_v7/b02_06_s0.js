async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f6");
  brush.noStroke();

  // cool light sky, left side
  brush.fill("#a8c4d8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(300, -20); brush.vertex(300, 250); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#8fa8c2", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(300, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(300, 190);
  brush.endShape(true);

  // stems
  brush.fill("#4f7a66", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.3);
  brush.vertex(250, 470); brush.vertex(260, 470); brush.vertex(260, 620); brush.vertex(250, 620);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(380, 470); brush.vertex(390, 470); brush.vertex(390, 620); brush.vertex(380, 620);
  brush.endShape(true);

  // open poppy: five broad petals, cool lilac, cool yellow centre
  for (let i = 0; i < 5; i++) {
    const a = i * 72 + 12;
    const r = 200;
    brush.fill("#8c96c4", 180);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 25) * 120, 300 + sin(a - 25) * 120);
    brush.vertex(300 + cos(a - 12) * r * 0.9, 300 + sin(a - 12) * r * 0.9);
    brush.vertex(300 + cos(a) * r, 300 + sin(a) * r);
    brush.vertex(300 + cos(a + 12) * r * 0.9, 300 + sin(a + 12) * r * 0.9);
    brush.vertex(300 + cos(a + 25) * 120, 300 + sin(a + 25) * 120);
    brush.endShape(true);
  }
  brush.fill("#e9d68a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(300, 300);
  brush.vertex(300 + 60 * cos(30), 300 + 60 * sin(30));
  brush.vertex(300 + 100 * cos(30), 300 + 100 * sin(30));
  brush.vertex(300 + 100 * cos(-30), 300 + 100 * sin(-30));
  brush.vertex(300 + 60 * cos(-30), 300 + 60 * sin(-30));
  brush.endShape(true);
  brush.fill("#3a3f5a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(300, 300, 30, 0.3);

  // closed bud, lower right
  brush.fill("#8c96c4", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(410, 450); brush.vertex(450, 410); brush.vertex(480, 440); brush.vertex(450, 470);
  brush.endShape(true);
  brush.fill("#c9b05a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(410, 450); brush.vertex(435, 420); brush.vertex(455, 445); brush.vertex(430, 470);
  brush.endShape(true);
  brush.fill("#3a3f5a", 220);
  brush.fillBleed(0.1);
  brush.circle(430, 435, 8, 0.3);
}
