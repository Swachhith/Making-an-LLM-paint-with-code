async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f5f8");
  brush.noStroke();

  // wet-in-wet sky with blooms: blue-grey and violet running together
  brush.fill("#7f9cc4", 180);
  brush.fillBleed(0.35);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.9);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 330); brush.vertex(-20, 360);
  brush.endShape(true);
  brush.fill("#9c7fc0", 170);
  brush.circle(460, 90, 110, 0.9);
  brush.fill("#c6a0b8", 150);
  brush.circle(160, 180, 80, 0.9);
  // sky drips
  brush.fill("#7f9cc4", 160);
  brush.fillBleed(0.2);
  const dx = [80, 250, 520];
  for (const x of dx) {
    brush.beginShape(0.5);
    brush.vertex(x - 7, 320); brush.vertex(x + 7, 320); brush.vertex(x + 3, 390); brush.vertex(x - 3, 390);
    brush.endShape(true);
    brush.circle(x, 392, 6, 0.3);
  }

  // distant pine line, bluish
  brush.fill("#4a5e7c", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, 380);
  for (let x = 0; x <= 620; x += 30) {
    brush.vertex(x, 340 - ((x * 7) % 40));
    brush.vertex(x + 15, 375);
  }
  brush.vertex(620, 400); brush.vertex(-20, 400);
  brush.endShape(true);

  // snow ground left as paper; blue shadow washes on it
  brush.fill("#a7bad6", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 470); brush.vertex(200, 450); brush.vertex(420, 490); brush.vertex(620, 460); brush.vertex(620, 520); brush.vertex(-20, 540);
  brush.endShape(true);

  // cabin, right of centre, small
  const x0 = 380, y0 = 430;
  brush.fill("#8a4a24", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(x0, y0); brush.vertex(x0, y0 - 55); brush.vertex(x0 + 110, y0 - 55); brush.vertex(x0 + 110, y0);
  brush.endShape(true);
  brush.fill("#5a2a14", 200);
  brush.beginShape(0.1);
  brush.vertex(x0 + 70, y0); brush.vertex(x0 + 70, y0 - 55); brush.vertex(x0 + 110, y0 - 55); brush.vertex(x0 + 110, y0);
  brush.endShape(true);
  // snowy roof: leave paper, paint underside shadow only
  brush.fill("#5c6f94", 200);
  brush.beginShape(0.1);
  brush.vertex(x0 - 14, y0 - 52); brush.vertex(x0 + 55, y0 - 100); brush.vertex(x0 + 124, y0 - 52); brush.vertex(x0 + 110, y0 - 46); brush.vertex(x0 + 55, y0 - 84); brush.vertex(x0, y0 - 46);
  brush.endShape(true);
  // warm lit window
  brush.fill("#f2a93b", 230);
  brush.beginShape(0);
  brush.vertex(x0 + 18, y0 - 38); brush.vertex(x0 + 44, y0 - 38); brush.vertex(x0 + 44, y0 - 16); brush.vertex(x0 + 18, y0 - 16);
  brush.endShape(true);
  // chimney
  brush.fill("#5a2a14", 210);
  brush.beginShape(0);
  brush.vertex(x0 + 80, y0 - 70); brush.vertex(x0 + 80, y0 - 105); brush.vertex(x0 + 96, y0 - 105); brush.vertex(x0 + 96, y0 - 60);
  brush.endShape(true);

  // two dark pines framing, left foreground
  const pines = [[90, 540, 60, 230], [190, 520, 40, 160], [560, 500, 38, 150]];
  for (const p of pines) {
    const [px, base, hw, h] = p;
    brush.fill("#1f3a3a", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(px, base - h);
    for (let k = 1; k <= 4; k++) {
      brush.vertex(px + hw * k / 4, base - h + h * k / 4);
      brush.vertex(px + hw * k / 8, base - h + h * k / 4 - 4);
    }
    for (let k = 4; k >= 1; k--) {
      brush.vertex(px - hw * k / 8, base - h + h * k / 4 - 4);
      brush.vertex(px - hw * k / 4, base - h + h * k / 4);
    }
    brush.endShape(true);
  }
  // splashes
  brush.fill("#9c7fc0", 190);
  brush.circle(300, 560, 8, 0.5);
  brush.circle(330, 575, 5, 0.5);
  brush.circle(40, 450, 6, 0.5);
}
