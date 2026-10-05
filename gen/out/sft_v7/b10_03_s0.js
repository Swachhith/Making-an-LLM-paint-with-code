async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e8d8");
  brush.noStroke();

  // sky: warm grey-blue, two passes
  brush.fill("#8f9aa8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#6f7a8c", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 200); brush.vertex(620, 180); brush.vertex(620, 320); brush.vertex(-20, 340);
  brush.endShape(true);

  // bench: dark silhouette
  brush.fill("#3a322a", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(100, 460); brush.vertex(220, 435); brush.vertex(300, 460); brush.vertex(420, 435); brush.vertex(540, 460);
  brush.vertex(540, 480); brush.vertex(100, 480);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(100, 470); brush.vertex(220, 455); brush.vertex(300, 470); brush.vertex(420, 455); brush.vertex(540, 470);
  brush.vertex(540, 490); brush.vertex(100, 490);
  brush.endShape(true);

  // two figures, silhouettes
  let f = [[108, 370, 23, 260], [138, 360, 22, 260]];
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < 2; i++) {
      let [x, y, w, h] = f[i];
      brush.fill("#2a241e", 235);
      brush.fillBleed(0.1);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.4);
      brush.vertex(x, y); brush.vertex(x + w * 0.4, y - 12); brush.vertex(x + w, y - 14); brush.vertex(x + w, y + h);
      brush.vertex(x, y + h + 4);
      brush.endShape(true);
    }
  }
  // heads
  brush.fill("#2a241e", 235);
  brush.fillBleed(0.1);
  brush.beginShape(0.6);
  brush.vertex(114, 350); brush.vertex(128, 330); brush.vertex(144, 332); brush.vertex(130, 352);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(144, 340); brush.vertex(158, 320); brush.vertex(174, 322); brush.vertex(160, 342);
  brush.endShape(true);
  // arms on the bench
  brush.fill("#2a241e", 235);
  brush.beginShape(0.5);
  brush.vertex(130, 375); brush.vertex(150, 390); brush.vertex(170, 375);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(160, 375); brush.vertex(180, 390); brush.vertex(200, 375);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(150, 390); brush.vertex(170, 408); brush.vertex(190, 400);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(170, 390); brush.vertex(190, 408); brush.vertex(210, 400);
  brush.endShape(true);
}
