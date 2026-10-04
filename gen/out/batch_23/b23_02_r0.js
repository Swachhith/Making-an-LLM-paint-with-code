async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef0f1");
  brush.noStroke();

  // misty sky, soft grey-lilac
  brush.fill("#b9bccb", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.4);
  brush.beginShape(0.8);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 300); brush.vertex(0, 300);
  brush.endShape(true);

  // far peaks
  brush.fill("#8d93a8", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.35);
  brush.vertex(0, 250); brush.vertex(70, 190); brush.vertex(140, 120); brush.vertex(190, 170);
  brush.vertex(260, 90); brush.vertex(330, 160); brush.vertex(400, 130); brush.vertex(480, 60);
  brush.vertex(560, 150); brush.vertex(600, 170); brush.vertex(600, 290); brush.vertex(0, 290);
  brush.endShape(true);
  // nearer peaks, a touch darker
  brush.fill("#6f768c", 190);
  brush.beginShape(0.35);
  brush.vertex(60, 290); brush.vertex(150, 190); brush.vertex(220, 230); brush.vertex(300, 170);
  brush.vertex(370, 240); brush.vertex(470, 160); brush.vertex(560, 250); brush.vertex(600, 290);
  brush.endShape(true);

  // cloud band, left as paper with a pale edge wash
  brush.fill("#d7d9e2", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(0, 255); brush.vertex(120, 240); brush.vertex(260, 262); brush.vertex(400, 238);
  brush.vertex(600, 258); brush.vertex(600, 300); brush.vertex(0, 300);
  brush.endShape(true);

  // shoreline strip
  brush.fill("#6a6e78", 160);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(0, 296); brush.vertex(600, 296); brush.vertex(600, 312); brush.vertex(0, 312);
  brush.endShape(true);

  // water
  brush.fill("#c3c6d2", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(0, 310); brush.vertex(600, 310); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // reflected peaks, inverted and softer
  brush.fill("#9ba0b3", 160);
  brush.fillBleed(0.35);
  brush.beginShape(0.4);
  brush.vertex(0, 350); brush.vertex(70, 410); brush.vertex(140, 480); brush.vertex(190, 430);
  brush.vertex(260, 510); brush.vertex(330, 440); brush.vertex(400, 470); brush.vertex(480, 540);
  brush.vertex(560, 450); brush.vertex(600, 430); brush.vertex(600, 312); brush.vertex(0, 312);
  brush.endShape(true);
  brush.fill("#80869b", 150);
  brush.beginShape(0.4);
  brush.vertex(60, 312); brush.vertex(150, 410); brush.vertex(220, 370); brush.vertex(300, 430);
  brush.vertex(370, 360); brush.vertex(470, 440); brush.vertex(560, 350); brush.vertex(600, 312);
  brush.endShape(true);

  // horizontal ripple breaks in the reflection
  for (let y = 360; y < 580; y += 38) {
    brush.fill("#e4e6ec", 170);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(40 + random(80), y); brush.vertex(300 + random(200), y - 2);
    brush.vertex(310 + random(200), y + 16); brush.vertex(40 + random(80), y + 17);
    brush.endShape(true);
  }
}
