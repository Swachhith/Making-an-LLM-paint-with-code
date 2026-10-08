async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e2d4");
  brush.noStroke();
  // a soft brown ground
  brush.fill("#b59d7a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 600); brush.vertex(600, 600); brush.vertex(600, 420); brush.vertex(420, 380); brush.vertex(300, 420); brush.vertex(180, 380); brush.vertex(0, 420);
  brush.endShape(true);
  // stem
  brush.fill("#5a4a38", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(300, 450); brush.vertex(320, 450); brush.vertex(322, 600); brush.vertex(302, 600);
  brush.endShape(true);
  // two leaves, midground
  brush.fill("#6e6a5a", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(230, 470); brush.vertex(270, 470); brush.vertex(310, 510); brush.vertex(270, 550); brush.vertex(230, 550);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(370, 470); brush.vertex(410, 470); brush.vertex(450, 510); brush.vertex(490, 550); brush.vertex(450, 550); brush.vertex(410, 510);
  brush.endShape(true);
  // the bloom, held by the stem
  brush.fill("#8a6a78", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(300, 100); brush.vertex(360, 120); brush.vertex(380, 200); brush.vertex(340, 240); brush.vertex(260, 240); brush.vertex(220, 200); brush.vertex(240, 120);
  brush.endShape(true);
  brush.fill("#7a5a68", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(300, 120); brush.vertex(330, 160); brush.vertex(310, 200); brush.vertex(290, 160);
  brush.endShape(true);
  brush.fill("#5a4a58", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(300, 140); brush.vertex(310, 120); brush.vertex(320, 140); brush.vertex(310, 160);
  brush.endShape(true);
  // darker cupped rim
  brush.fill("#5a3a48", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(300, 130); brush.vertex(340, 160); brush.vertex(300, 180); brush.vertex(260, 160);
  brush.endShape(true);
  // stamens
  for (let i = 0; i < 10; i++) {
    const a = i * 36;
    const r = 100 + (i % 3) * 12;
    brush.fill("#c99a70", 230);
    brush.fillBleed(0.2);
    brush.beginShape(0.4);
    brush.vertex(300, 140); brush.vertex(300 + cos(a) * 110, 140); brush.vertex(300 + cos(a) * r, 140 - 12); brush.vertex(300 + cos(a) * 90, 140 + 12);
    brush.endShape(true);
    brush.fill("#e8b88a", 250);
    brush.fillBleed(0.2);
    brush.beginShape(0.4);
    brush.vertex(300, 140); brush.vertex(300 + cos(a) * 110, 140); brush.vertex(300 + cos(a) * 120, 140 - 10); brush.vertex(300 + cos(a) * 95, 140 + 10);
    brush.endShape(true);
  }
  // pistil
  brush.fill("#7a3a4a", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(300, 140); brush.vertex(300, 100); brush.vertex(300, 60); brush.vertex(300, 140);
  brush.endShape(true);
  brush.fill("#d8a878", 235);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(300, 140); brush.vertex(300, 100); brush.vertex(300, 40); brush.vertex(300, 140);
  brush.endShape(true);
}
