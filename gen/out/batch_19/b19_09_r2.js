async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f6f5");
  brush.noStroke();

  // very pale sky wash, mostly left open
  brush.fill("#cfdde6", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 380); brush.vertex(-20, 400);
  brush.endShape(true);

  // long cool meadow
  brush.fill("#a9c3b3", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 390); brush.vertex(250, 380); brush.vertex(620, 370); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#86a998", 150);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(300, 460); brush.vertex(620, 490); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // tree to the far right, crown partly off the canvas
  brush.fill("#4f4b52", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(470, 440); brush.vertex(485, 300); brush.vertex(480, 200); brush.vertex(510, 200);
  brush.vertex(515, 300); brush.vertex(520, 440);
  brush.endShape(true);
  const crown = [[500, 150, 110], [440, 200, 80], [570, 210, 90], [520, 90, 80], [600, 120, 90]];
  for (const c of crown) {
    brush.fill("#5f8f8c", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(c[0], c[1], c[2], true);
  }
  for (const c of crown) {
    brush.fill("#2c5a60", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.circle(c[0] + 15, c[1] + 20, c[2] * 0.55, true);
  }
  // shade pool under tree
  brush.fill("#5f8584", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(380, 445); brush.vertex(500, 430); brush.vertex(620, 440); brush.vertex(620, 470); brush.vertex(400, 470);
  brush.endShape(true);

  // birds far off in the empty sky
  brush.fill("#56697a", 200);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(130, 120, 4, true);
  brush.circle(160, 100, 3, true);
  // small reader sitting against trunk, knees up
  brush.fill("#2a4a7a", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(458, 405); brush.vertex(475, 405); brush.vertex(478, 445); brush.vertex(440, 448); brush.vertex(438, 430);
  brush.endShape(true);
  brush.fill("#c9a390", 200);
  brush.circle(466, 396, 8, true);
  brush.fill("#4a3a32", 210);
  brush.circle(468, 392, 7, true);
  // open book, white page left as paper with a warm cover
  brush.fill("#b0463c", 220);
  brush.beginShape(0.1);
  brush.vertex(440, 418); brush.vertex(455, 414); brush.vertex(456, 426); brush.vertex(441, 430);
  brush.endShape(true);
}
