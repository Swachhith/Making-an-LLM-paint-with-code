async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e6d4");
  brush.noStroke();
  // pale sky: a single loose wash of warm grey with a little rose low down
  brush.fill("#cdbca8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(-10, -10);
  brush.vertex(610, -10);
  brush.vertex(610, 200);
  brush.vertex(-10, 190);
  brush.endShape(true);
  brush.fill("#dcae94", 170);
  brush.circle(460, 190, 110, 0.7);
  // far dune range
  brush.fill("#c09a78", 200);
  brush.fillBleed(0.28);
  brush.beginShape(1);
  brush.vertex(-10, 220);
  brush.vertex(120, 190);
  brush.vertex(240, 214);
  brush.vertex(380, 176);
  brush.vertex(520, 206);
  brush.vertex(610, 194);
  brush.vertex(610, 280);
  brush.vertex(-10, 280);
  brush.endShape(true);
  // big left dune: lit sand, with a sweeping curved crest
  brush.fill("#e0a868", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(-10, 250);
  brush.vertex(100, 240);
  brush.vertex(230, 290);
  brush.vertex(250, 420);
  brush.vertex(200, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // its shadow flank, deep burnt sienna along the crest line
  brush.fill("#8e4e2e", 205);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(100, 240);
  brush.vertex(230, 290);
  brush.vertex(250, 420);
  brush.vertex(200, 610);
  brush.vertex(150, 610);
  brush.vertex(200, 420);
  brush.vertex(170, 300);
  brush.endShape(true);
  // big right dune, facing the other way
  brush.fill("#d89458", 215);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(610, 260);
  brush.vertex(480, 256);
  brush.vertex(380, 320);
  brush.vertex(360, 440);
  brush.vertex(420, 610);
  brush.vertex(610, 610);
  brush.endShape(true);
  brush.fill("#a4603a", 190);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(480, 256);
  brush.vertex(610, 270);
  brush.vertex(610, 360);
  brush.vertex(470, 300);
  brush.endShape(true);
  // the valley floor between them: a pale wadi that snakes back to the horizon
  brush.fill("#b8906c", 200);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(290, 250);
  brush.vertex(330, 250);
  brush.vertex(380, 320);
  brush.vertex(360, 440);
  brush.vertex(420, 610);
  brush.vertex(200, 610);
  brush.vertex(250, 420);
  brush.vertex(230, 290);
  brush.endShape(true);
  // ripple marks across the valley
  for (let i = 0; i < 8; i++) {
    let y = 330 + i * 34;
    let w = 30 + i * 10;
    brush.fill("#8a6444", 170);
    brush.fillBleed(0.2);
    brush.beginShape(1);
    brush.vertex(310 - w, y);
    brush.vertex(310, y - 6);
    brush.vertex(310 + w, y);
    brush.vertex(310, y + 4);
    brush.endShape(true);
  }
}
