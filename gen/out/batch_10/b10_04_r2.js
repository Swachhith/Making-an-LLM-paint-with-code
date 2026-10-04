async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f9f1e6");
  brush.noStroke();
  const warmA = "#f2862e";
  const warmB = "#d4507a";
  const dark = "#27213c";
  const hz = 300;
  // sky: rose at the top, graded into orange by overlapping washes
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(warmB, 200 - pass * 30);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.4);
    brush.beginShape(0.7);
    brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150 - pass * 60); brush.vertex(-20, 170 - pass * 60);
    brush.endShape(true);
  }
  brush.fill(warmA, 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 130); brush.vertex(620, 120); brush.vertex(620, 260); brush.vertex(-20, 260);
  brush.endShape(true);
  // the sun: a pale disc of paper, a warm ring pooled around it
  for (let k = 0; k < 10; k++) {
    const a = k * 36;
    brush.fill(warmA, 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.circle(300 + 58 * cos(a), 262 + 58 * sin(a), 20, 0.6);
  }
  // mist: the lower sky left almost bare, only a faint rose haze
  brush.fill(warmB, 120);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 270); brush.vertex(620, 262); brush.vertex(620, hz); brush.vertex(-20, hz);
  brush.endShape(true);
  // far shore, a low dark band fading into mist in the middle
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(dark, 210);
    brush.fillBleed(0.22);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(-20, hz); brush.vertex(-20, 262); brush.vertex(60, 255); brush.vertex(140, 272); brush.vertex(210, hz);
    brush.endShape(true);
    brush.beginShape(0.6);
    brush.vertex(410, hz); brush.vertex(470, 276); brush.vertex(540, 260); brush.vertex(620, 266); brush.vertex(620, hz);
    brush.endShape(true);
  }
  // water: orange strip under the shore, rose below
  brush.fill(warmA, 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, hz); brush.vertex(620, hz); brush.vertex(620, 400); brush.vertex(-20, 400);
  brush.endShape(true);
  brush.fill(warmB, 195);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(-20, 380); brush.vertex(620, 380); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // mirrored shore, softer
  brush.fill(dark, 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, hz); brush.vertex(210, hz); brush.vertex(140, 326); brush.vertex(60, 344); brush.vertex(-20, 336);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(410, hz); brush.vertex(620, hz); brush.vertex(620, 332); brush.vertex(540, 338); brush.vertex(470, 322);
  brush.endShape(true);
  // the sun's column on the water, broken strokes with paper gaps
  for (let i = 0; i < 9; i++) {
    const w = 18 + i * 7;
    const y = hz + 12 + i * 22;
    brush.fill(warmA, 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(300 - w, y); brush.vertex(300 - 6, y + 1); brush.vertex(300 - 8, y + 11); brush.vertex(300 - w + 6, y + 11);
    brush.endShape(true);
    brush.beginShape(0.5);
    brush.vertex(300 + 6, y + 3); brush.vertex(300 + w, y + 2); brush.vertex(300 + w - 6, y + 13); brush.vertex(300 + 8, y + 13);
    brush.endShape(true);
  }
  // long dark ripples near the viewer
  for (let i = 0; i < 4; i++) {
    const y = 500 + i * 30;
    brush.fill(dark, 170 + i * 15);
    brush.fillBleed(0.25);
    brush.beginShape(0.6);
    brush.vertex(-20, y); brush.vertex(200 + i * 30, y - 2); brush.vertex(180 + i * 30, y + 12); brush.vertex(-20, y + 15);
    brush.endShape(true);
    brush.beginShape(0.6);
    brush.vertex(420 - i * 20, y + 10); brush.vertex(620, y + 8); brush.vertex(620, y + 22); brush.vertex(430 - i * 20, y + 22);
    brush.endShape(true);
  }
}
