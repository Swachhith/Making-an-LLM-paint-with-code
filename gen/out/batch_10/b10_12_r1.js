async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6f8fa");
  brush.noStroke();
  // sky: cobalt at the top, turquoise-pale toward the peaks
  brush.fill("#1a5fd0", 215);
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 110); brush.vertex(-20, 140);
  brush.endShape(true);
  brush.fill("#3ab0e0", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 90); brush.vertex(620, 70); brush.vertex(620, 190); brush.vertex(-20, 210);
  brush.endShape(true);
  // peaks: snow caps stay paper, rock is violet and indigo, in two passes
  const peaks = [[130, 110, -20, 290], [310, 55, 150, 470], [490, 100, 360, 620]];
  for (const p of peaks) {
    for (let pass = 0; pass < 2; pass++) {
      // lower flanks below the snowline
      brush.fill("#4a2aa6", 225);
      brush.fillBleed(0.15);
      brush.fillTexture(0.4, 0.5);
      brush.beginShape(0.1);
      brush.vertex(p[2], 275); brush.vertex(p[0] - (p[0] - p[2]) * 0.45, p[1] + 90);
      brush.vertex(p[0] - 25, p[1] + 70); brush.vertex(p[0] - 5, p[1] + 95); brush.vertex(p[0] + 15, p[1] + 60);
      brush.vertex(p[0] + 40, p[1] + 85); brush.vertex(p[0] + (p[3] - p[0]) * 0.45, p[1] + 80); brush.vertex(p[3], 275);
      brush.endShape(true);
      // shadow face beside the ridge, reaching into the snow
      brush.fill("#1c2a8a", 200);
      brush.fillBleed(0.12);
      brush.beginShape(0.05);
      brush.vertex(p[0], p[1] + 5); brush.vertex(p[0] + 40, p[1] + 75); brush.vertex(p[0] + 20, 275); brush.vertex(p[0] - 5, p[1] + 90);
      brush.endShape(true);
    }
  }
  // dark green forest shoreline
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#0a5a30", 230);
    brush.fillBleed(0.18);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.3);
    brush.vertex(-20, 300); brush.vertex(-20, 268);
    for (let x = 0; x <= 600; x += 24) brush.vertex(x, 250 + ((x / 24) % 2) * 18 + (x % 72 === 0 ? -10 : 0));
    brush.vertex(620, 268); brush.vertex(620, 300);
    brush.endShape(true);
  }
  // lake: mirror of the sky, dark near the shore
  brush.fill("#1a5fd0", 205);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 300); brush.vertex(620, 300); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1a5fd0", 170);
  brush.beginShape(0.3);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // reflected forest
  brush.fill("#0a4a2a", 215);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(-20, 300); brush.vertex(620, 300); brush.vertex(620, 340); brush.vertex(300, 348); brush.vertex(-20, 338);
  brush.endShape(true);
  // reflected peaks, inverted and softer, snow as pale gaps
  for (const p of peaks) {
    brush.fill("#3a2294", 195);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.2);
    brush.vertex(p[2], 335); brush.vertex(p[0] - (p[0] - p[2]) * 0.45, 600 - p[1] - 90);
    brush.vertex(p[0] + (p[3] - p[0]) * 0.45, 600 - p[1] - 80); brush.vertex(p[3], 335);
    brush.endShape(true);
  }
  // ripple lines that break the reflection
  for (let i = 0; i < 7; i++) {
    const y = 360 + i * 34;
    const x = (i * 97) % 300;
    brush.fill(i % 2 ? "#0c3a90" : "#9ad8f0", 190);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(x, y); brush.vertex(x + 260, y - 2); brush.vertex(x + 240, y + 9); brush.vertex(x + 10, y + 10);
    brush.endShape(true);
  }
}
