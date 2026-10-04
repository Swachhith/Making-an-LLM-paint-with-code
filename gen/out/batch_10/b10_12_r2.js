async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f8f6");
  brush.noStroke();
  const hz = 330;
  // sky: cobalt graded to a pale turquoise at the peaks
  brush.fill("#1450c8", 220);
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 90); brush.vertex(-20, 110);
  brush.endShape(true);
  brush.fill("#38a8e0", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 70); brush.vertex(620, 60); brush.vertex(620, 170); brush.vertex(-20, 190);
  brush.endShape(true);
  // one broad massif: sunlit face orange-rose, shadow face violet, snow left as paper
  const top = [300, 110];
  // far shoulder behind, deep blue-violet
  brush.fill("#4a3ab8", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-20, hz); brush.vertex(-20, 250); brush.vertex(90, 180); brush.vertex(170, 230); brush.vertex(200, hz);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(400, hz); brush.vertex(470, 190); brush.vertex(540, 170); brush.vertex(620, 220); brush.vertex(620, hz);
  brush.endShape(true);
  // snowline zig-zag across the main peak
  const snow = [[210, 225], [240, 205], [265, 222], [290, 195], [320, 215], [345, 190], [375, 220], [400, 210]];
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#e0503a", 205);
    brush.fillBleed(0.18);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.1);
    brush.vertex(120, hz); brush.vertex(210, 225);
    for (let i = 1; i < 5; i++) brush.vertex(snow[i][0], snow[i][1]);
    brush.vertex(320, hz);
    brush.endShape(true);
    brush.fill("#5a2aa0", 215);
    brush.beginShape(0.1);
    brush.vertex(300, hz); brush.vertex(290, 195);
    for (let i = 4; i < 8; i++) brush.vertex(snow[i][0], snow[i][1]);
    brush.vertex(480, hz);
    brush.endShape(true);
  }
  // shadow side of the snowy summit, cool blue so the snow reads as a form
  brush.fill("#6a8ae0", 190);
  brush.fillBleed(0.15);
  brush.beginShape(0.1);
  brush.vertex(top[0], top[1]); brush.vertex(345, 190); brush.vertex(320, 215); brush.vertex(300, 180);
  brush.endShape(true);
  // pine forest along the shore, bold green, two passes
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#07703a", 230);
    brush.fillBleed(0.18);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.2);
    brush.vertex(-20, hz + 8); brush.vertex(-20, 300);
    for (let x = 0; x <= 600; x += 20) brush.vertex(x, (x / 20) % 2 ? 300 : 278 + (x % 60) / 3);
    brush.vertex(620, 300); brush.vertex(620, hz + 8);
    brush.endShape(true);
  }
  // lake: cobalt, with the massif mirrored below the shore
  brush.fill("#1450c8", 205);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, hz); brush.vertex(620, hz); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#06502a", 210);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(-20, hz); brush.vertex(620, hz); brush.vertex(620, hz + 45); brush.vertex(300, hz + 52); brush.vertex(-20, hz + 42);
  brush.endShape(true);
  brush.fill("#c8483a", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(120, hz + 40); brush.vertex(320, hz + 40); brush.vertex(300, 2 * hz - 190); brush.vertex(210, 2 * hz - 225);
  brush.endShape(true);
  brush.fill("#4a2294", 190);
  brush.beginShape(0.2);
  brush.vertex(300, hz + 40); brush.vertex(480, hz + 40); brush.vertex(375, 2 * hz - 220); brush.vertex(300, 2 * hz - 190);
  brush.endShape(true);
  // pale ripple gaps and dark ripple lines across the reflection
  for (let i = 0; i < 6; i++) {
    const y = hz + 70 + i * 40;
    const x = (i * 83) % 260;
    brush.fill("#0a3488", 200);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(x, y); brush.vertex(x + 300, y - 2); brush.vertex(x + 280, y + 10); brush.vertex(x + 10, y + 11);
    brush.endShape(true);
  }
}
