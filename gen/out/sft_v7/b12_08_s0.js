async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2eef2");
  brush.noStroke();
  // bold sky, saturated
  brush.fill("#1c4fb8", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 260);
  brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#122fa8", 190);
  brush.beginShape(0.6);
  brush.vertex(-20, 120);
  brush.vertex(620, 100);
  brush.vertex(620, 230);
  brush.vertex(-20, 230);
  brush.endShape(true);
  // snow-capped peaks: three tiers, one huge off-centre
  const peaks = [[220, 300, 200], [440, 360, 150], [600, 420, 110]];
  for (const p of peaks) {
    const [x, y, w] = p;
    brush.fill("#2a2a4a", 220);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.05);
    brush.vertex(x - w, y);
    brush.vertex(x + w, y);
    brush.vertex(x + w * 0.55, y + 10);
    brush.vertex(x + w * 0.4, y + 14);
    brush.vertex(x, y + 16);
    brush.vertex(x - w * 0.4, y + 14);
    brush.vertex(x - w * 0.55, y + 10);
    brush.endShape(true);
    brush.fill("#eef2f8", 230);
    brush.fillBleed(0.05);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.05);
    brush.vertex(x - w * 0.5, y + 16);
    brush.vertex(x + w * 0.5, y + 16);
    brush.vertex(x + w * 0.4, y + 6);
    brush.vertex(x, y + 4);
    brush.vertex(x - w * 0.4, y + 6);
    brush.endShape(true);
  }
  // blue shadow on the mountain faces
  brush.fill("#1a3a8a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(150, 330);
  brush.vertex(300, 310);
  brush.vertex(460, 330);
  brush.vertex(620, 350);
  brush.vertex(620, 440);
  brush.vertex(460, 440);
  brush.vertex(300, 420);
  brush.vertex(150, 440);
  brush.endShape(true);
  // foreground meadow
  brush.fill("#2f8a3a", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 440);
  brush.vertex(220, 420);
  brush.vertex(620, 430);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1e6a2a", 200);
  brush.beginShape(0.6);
  brush.vertex(-20, 500);
  brush.vertex(620, 490);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // a few pines
  brush.fill("#123a2a", 225);
  for (let x of [180, 320, 500]) {
    brush.beginShape(0.4);
    brush.vertex(x - 9, 520);
    brush.vertex(x + 9, 520);
    brush.vertex(x + 4, 460);
    brush.vertex(x - 4, 460);
    brush.endShape(true);
  }
  // sun
  brush.fill("#ffd030", 240);
  brush.fillBleed(0.1);
  brush.circle(600, 60, 20, 0.2);
}
