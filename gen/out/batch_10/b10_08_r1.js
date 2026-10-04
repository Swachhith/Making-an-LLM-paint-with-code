async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f1f6");
  brush.noStroke();
  // pastel sky: lilac top, peach low
  brush.fill("#b9a6d8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#f7b9a3", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 200); brush.vertex(620, 180); brush.vertex(620, 370); brush.vertex(-20, 370);
  brush.endShape(true);
  // glow round the low sun (right of centre, near the horizon)
  brush.fill("#fbd48c", 200);
  brush.fillBleed(0.3);
  brush.circle(430, 345, 70, 0.6);
  brush.fill("#f39a6a", 200);
  brush.fillBleed(0.25);
  brush.circle(430, 345, 34, 0.3);
  brush.fill("#f7b070", 215);
  brush.circle(430, 345, 24, 0.2);
  // far hills, soft blue-grey
  brush.fill("#9aa6c8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 370); brush.vertex(60, 345); brush.vertex(160, 358); brush.vertex(250, 340);
  brush.vertex(330, 366); brush.vertex(620, 364); brush.vertex(620, 386); brush.vertex(-20, 386);
  brush.endShape(true);
  // soft trees on the far left shore
  brush.fill("#8a90b8", 180);
  brush.fillBleed(0.3);
  brush.circle(40, 350, 22, 0.7);
  brush.circle(75, 344, 26, 0.7);
  brush.circle(110, 356, 18, 0.7);
  // mist bands over the water
  brush.fill("#e8d3e6", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 360); brush.vertex(620, 368); brush.vertex(620, 395); brush.vertex(-20, 392);
  brush.endShape(true);
  // water
  brush.fill("#b6c4e2", 180);
  brush.fillBleed(0.28);
  brush.beginShape(0.5);
  brush.vertex(-20, 386); brush.vertex(620, 386); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#f2b39c", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 390); brush.vertex(620, 390); brush.vertex(620, 470); brush.vertex(-20, 460);
  brush.endShape(true);
  // sun path
  for (let i = 0; i < 7; i++) {
    const y = 400 + i * 28;
    const w = 26 + i * 6;
    brush.fill("#f9c98a", 200 - i * 10);
    brush.fillBleed(0.25);
    brush.beginShape(0.6);
    brush.vertex(430 - w, y); brush.vertex(430 + w, y + 3); brush.vertex(430 + w - 8, y + 14); brush.vertex(430 - w + 8, y + 12);
    brush.endShape(true);
  }
  // soft lilac ripples
  for (let i = 0; i < 6; i++) {
    brush.fill("#a598cf", 160);
    brush.fillBleed(0.3);
    const y = 480 + i * 22;
    const x = 40 + (i * 53) % 200;
    brush.beginShape(0.6);
    brush.vertex(x, y); brush.vertex(x + 130, y - 2); brush.vertex(x + 120, y + 12); brush.vertex(x + 10, y + 14);
    brush.endShape(true);
  }
  // a small boat far left for scale
  brush.fill("#7c7aa6", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(110, 420); brush.vertex(170, 420); brush.vertex(160, 434); brush.vertex(120, 434);
  brush.endShape(true);
}
