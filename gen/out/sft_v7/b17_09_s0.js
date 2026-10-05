async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef4f2");
  brush.noStroke();

  // soft misty sky: pale blue-grey wash, two passes
  brush.fill("#b8c7d8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 320); brush.vertex(-20, 340);
  brush.endShape(true);
  brush.fill("#a6b8c8", 150);
  brush.beginShape(0.8);
  brush.vertex(-20, 260); brush.vertex(620, 250); brush.vertex(620, 420); brush.vertex(-20, 430);
  brush.endShape(true);

  // low rolling cloud bank, pale lilac
  brush.fill("#c9b8d4", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 360); brush.vertex(150, 350); brush.vertex(320, 370); brush.vertex(470, 355); brush.vertex(620, 375); brush.vertex(620, 430); brush.vertex(-20, 440);
  brush.endShape(true);
  brush.fill("#b8a8c4", 150);
  brush.beginShape(0.6);
  brush.vertex(-20, 400); brush.vertex(200, 390); brush.vertex(400, 410); brush.vertex(620, 395); brush.vertex(620, 450); brush.vertex(-20, 460);
  brush.endShape(true);

  // mid-ground: a low hill, grey-green, left of centre
  brush.fill("#8a9a88", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 450); brush.vertex(220, 440); brush.vertex(360, 460); brush.vertex(620, 445); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // three peaks, left off-centre, layered from far to near
  let peaks = [[-30, 400, 150, 280, 170], [120, 390, 130, 250, 150], [340, 360, 110, 220, 130], [500, 340, 90, 200, 110]];
  for (let p of peaks) {
    let [x, base, w, h, s] = p;
    brush.fill("#7f8fa0", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(x - w * 0.5, base); brush.vertex(x, base - h * 0.9); brush.vertex(x + w * 0.5, base);
    brush.endShape(true);
    brush.fill("#5f6f80", 170);
    brush.beginShape(0.3);
    brush.vertex(x - w * 0.3, base - h * 0.6); brush.vertex(x, base - h * 0.6 - s); brush.vertex(x + w * 0.3, base - h * 0.6);
    brush.endShape(true);
  }
  // snow caps
  brush.fill("#eef0ee", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  for (let p of peaks) {
    let [x, base, w, h, s] = p;
    brush.circle(x, base - h * 0.9 - s, w * 0.35, 0.3);
  }

  // misty air, faint blue-grey veil over peaks
  brush.fill("#9aa0b0", 140);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 300); brush.vertex(300, 290); brush.vertex(620, 310); brush.vertex(620, 430); brush.vertex(-20, 440);
  brush.endShape(true);
}
