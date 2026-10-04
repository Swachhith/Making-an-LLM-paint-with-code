async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1efe9");
  brush.noStroke();

  // heavy snow-sky, grey with a hint of mauve
  brush.fill("#aaa3a4", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 460); brush.vertex(-20, 470);
  brush.endShape(true);

  // tall pines towering from a low viewpoint, leaning slightly outward
  let pines = [[40, 470, 60, -8], [130, 450, 48, -4], [480, 452, 52, 5], [570, 470, 64, 9], [300, 440, 34, 0]];
  for (let p of pines) {
    let [x, base, w, lean] = p;
    brush.fill("#4f5a48", 205);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.35);
    brush.vertex(x - w, base); brush.vertex(x - w * 0.5, base - 140); brush.vertex(x - w * 0.7, base - 150);
    brush.vertex(x + lean * 3, -20); brush.vertex(x + w * 0.7 + lean * 2, base - 150); brush.vertex(x + w * 0.5, base - 140); brush.vertex(x + w, base);
    brush.endShape(true);
    brush.fill("#343c33", 190);
    brush.beginShape(0.4);
    brush.vertex(x, base); brush.vertex(x + lean * 2, 40); brush.vertex(x + w * 0.6, base - 60); brush.vertex(x + w * 0.9, base);
    brush.endShape(true);
  }

  // cabin: log walls in umber, seen from below so the roof looms
  brush.fill("#7a5238", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.1);
  brush.vertex(170, 470); brush.vertex(430, 470); brush.vertex(424, 320); brush.vertex(176, 320);
  brush.endShape(true);
  // log bands
  for (let y = 336; y < 465; y += 26) {
    brush.fill("#5a3a28", 190);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(176, y); brush.vertex(424, y - 2); brush.vertex(424, y + 9); brush.vertex(176, y + 10);
    brush.endShape(true);
  }
  // roof underside, dark, snow on top left as paper
  brush.fill("#3a2a24", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.1);
  brush.vertex(140, 330); brush.vertex(300, 220); brush.vertex(460, 330); brush.vertex(440, 336); brush.vertex(300, 244); brush.vertex(160, 336);
  brush.endShape(true);
  // blue shadow on the snow of the roof
  brush.fill("#9aa6b8", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.2);
  brush.vertex(300, 196); brush.vertex(470, 318); brush.vertex(460, 330); brush.vertex(300, 222);
  brush.endShape(true);

  // warm windows and a door
  brush.fill("#e0a64a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0);
  brush.vertex(200, 370); brush.vertex(250, 370); brush.vertex(250, 415); brush.vertex(200, 415);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(350, 370); brush.vertex(400, 370); brush.vertex(400, 415); brush.vertex(350, 415);
  brush.endShape(true);
  brush.fill("#3a2a24", 220);
  brush.beginShape(0);
  brush.vertex(280, 380); brush.vertex(320, 380); brush.vertex(320, 470); brush.vertex(280, 470);
  brush.endShape(true);

  // snowbank in front, left as paper, shaped by blue-grey shadows
  brush.fill("#aab3c2", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, 470); brush.vertex(160, 468); brush.vertex(300, 478); brush.vertex(440, 466); brush.vertex(620, 474); brush.vertex(620, 500); brush.vertex(300, 505); brush.vertex(-20, 498);
  brush.endShape(true);
  brush.fill("#8b93a6", 170);
  brush.beginShape(0.8);
  brush.vertex(-20, 560); brush.vertex(200, 540); brush.vertex(260, 580); brush.vertex(-20, 610);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(380, 590); brush.vertex(520, 548); brush.vertex(620, 560); brush.vertex(620, 620); brush.vertex(400, 620);
  brush.endShape(true);
}
