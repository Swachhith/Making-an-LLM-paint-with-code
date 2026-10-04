async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1df");
  brush.noStroke();

  // warm sky: apricot glow low, honey above
  brush.fill("#f0c48a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#eea079", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 200); brush.vertex(620, 180); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);

  // smoke plume rising then drifting right, grey-mauve with warm edges
  let puffs = [[330, 130, 34], [340, 95, 40], [362, 62, 46], [400, 40, 50], [450, 30, 54], [510, 34, 52], [570, 46, 50]];
  for (let p of puffs) {
    brush.fill("#a08c8a", 180);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(p[0], p[1], p[2], 0.7);
  }
  for (let p of puffs) {
    brush.fill("#7c6b6e", 170);
    brush.fillBleed(0.25);
    brush.circle(p[0] + 6, p[1] + 10, p[2] * 0.55, 0.6);
  }

  // the cone
  brush.fill("#a56a4e", 210);
  brush.fillBleed(0.22);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.25);
  brush.vertex(60, 300); brush.vertex(250, 175); brush.vertex(300, 150); brush.vertex(355, 152); brush.vertex(420, 190); brush.vertex(580, 300);
  brush.endShape(true);
  // shadow side, right
  brush.fill("#6e4638", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(330, 155); brush.vertex(355, 152); brush.vertex(420, 190); brush.vertex(580, 300); brush.vertex(400, 300);
  brush.endShape(true);
  // glow at the crater
  brush.fill("#e0643a", 220);
  brush.fillBleed(0.25);
  brush.circle(328, 152, 14, 0.5);

  // shoreline
  brush.fill("#5e5a3c", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(-20, 296); brush.vertex(620, 294); brush.vertex(620, 312); brush.vertex(-20, 314);
  brush.endShape(true);

  // lake: warm reflected sky, then the inverted cone, softer
  brush.fill("#eab487", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, 312); brush.vertex(620, 312); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#9a6a55", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(60, 314); brush.vertex(250, 440); brush.vertex(300, 462); brush.vertex(355, 460); brush.vertex(420, 425); brush.vertex(580, 314);
  brush.endShape(true);
  brush.fill("#8e7b78", 140);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(320, 470); brush.vertex(420, 560); brush.vertex(560, 580); brush.vertex(600, 540); brush.vertex(440, 520);
  brush.endShape(true);

  // ripple gaps: pale strokes of the sky colour across the reflection
  for (let i = 0; i < 6; i++) {
    let y = 340 + i * 42;
    brush.fill("#f6d4a8", 210);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.4);
    brush.vertex(80 + i * 20, y); brush.vertex(520 - i * 15, y - 2); brush.vertex(510 - i * 15, y + 6); brush.vertex(90 + i * 20, y + 7);
    brush.endShape(true);
  }
}
