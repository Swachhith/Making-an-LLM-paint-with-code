async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0a0816");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#5a22a8", 220);
  brush.beginShape(0.4);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 300); brush.vertex(-40, 300);
  brush.endShape(true);
  brush.fill("#10a0a0", 200);
  brush.beginShape(0.9);
  brush.vertex(-40, 60); brush.vertex(300, 20); brush.vertex(640, 80); brush.vertex(640, 190); brush.vertex(300, 150); brush.vertex(-40, 190);
  brush.endShape(true);
  brush.fill("#c42a78", 170);
  brush.beginShape(0.9);
  brush.vertex(-40, 190); brush.vertex(300, 140); brush.vertex(640, 200); brush.vertex(640, 290); brush.vertex(-40, 290);
  brush.endShape(true);
  brush.fill("#f4d450", 235);
  brush.beginShape(0.3);
  brush.vertex(330, 70); brush.vertex(410, 70); brush.vertex(375, 150); brush.vertex(405, 155); brush.vertex(320, 270); brush.vertex(350, 175); brush.vertex(325, 170);
  brush.endShape(true);
  brush.fill("#fff6b0", 200);
  brush.beginShape(0.3);
  brush.vertex(350, 90); brush.vertex(385, 90); brush.vertex(360, 150);
  brush.endShape(true);
  const rng = [["#3a2a98", 235, 1], ["#1e6a78", 150, -1]];
  for (let m = 0; m < 2; m++) {
    const k = rng[m][2], y0 = 305;
    brush.fill(rng[m][0], rng[m][1]);
    brush.beginShape(0.3);
    brush.vertex(-40, y0); brush.vertex(60, y0 - k * 80); brush.vertex(140, y0 - k * 30); brush.vertex(250, y0 - k * 140); brush.vertex(330, y0 - k * 60); brush.vertex(450, y0 - k * 150); brush.vertex(540, y0 - k * 70); brush.vertex(640, y0 - k * 100); brush.vertex(640, y0);
    brush.endShape(true);
    if (m === 0) {
      brush.fill("#0c0820", 240);
      brush.beginShape(0.6);
      brush.vertex(-40, 305); brush.vertex(250, 205); brush.vertex(330, 250); brush.vertex(450, 200); brush.vertex(640, 300); brush.vertex(640, 310); brush.vertex(-40, 310);
      brush.endShape(true);
      brush.fill("#e8dcff", 255);
      brush.beginShape(0.3);
      brush.vertex(250, 165); brush.vertex(272, 188); brush.vertex(240, 190);
      brush.endShape(true);
      brush.fill("#1c1a60", 230);
      brush.beginShape(0.5);
      brush.vertex(-40, 305); brush.vertex(640, 305); brush.vertex(640, 650); brush.vertex(-40, 650);
      brush.endShape(true);
    }
  }
  brush.fill("#5a22a8", 170);
  brush.beginShape(0.5);
  brush.vertex(-40, 450); brush.vertex(640, 450); brush.vertex(640, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#10a0a0", 140);
  brush.beginShape(0.5);
  brush.vertex(-40, 520); brush.vertex(640, 540); brush.vertex(640, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#f4d450", 190);
  brush.beginShape(0.4);
  brush.vertex(330, 345); brush.vertex(400, 345); brush.vertex(390, 400); brush.vertex(360, 470); brush.vertex(345, 400);
  brush.endShape(true);
}
