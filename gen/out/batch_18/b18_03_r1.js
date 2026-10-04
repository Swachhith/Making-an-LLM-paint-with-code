async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0c1330");
  randomSeed(1803);
  brush.noStroke();

  // teal glow rising from behind the hills, painted only down to the ridge
  brush.fill("#2f8f96", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.8);
  brush.vertex(0, 250); brush.vertex(300, 220); brush.vertex(600, 240);
  brush.vertex(600, 420); brush.vertex(400, 380); brush.vertex(260, 420); brush.vertex(120, 395); brush.vertex(0, 430);
  brush.endShape(true);
  brush.fill("#57b8b0", 170);
  brush.beginShape(0.8);
  brush.vertex(60, 330); brush.vertex(540, 320); brush.vertex(560, 400); brush.vertex(400, 385);
  brush.vertex(260, 420); brush.vertex(120, 398); brush.vertex(40, 410);
  brush.endShape(true);
  // indigo zenith
  brush.fill("#2a2c80", 200);
  brush.beginShape(0.8);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 170); brush.vertex(300, 200); brush.vertex(0, 160);
  brush.endShape(true);

  // milky way as one soft diagonal band
  brush.fill("#5f9fc0", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.9);
  brush.vertex(40, 20); brush.vertex(140, 0); brush.vertex(580, 300); brush.vertex(520, 340);
  brush.endShape(true);
  brush.fill("#9fd4d8", 140);
  brush.beginShape(0.9);
  brush.vertex(110, 40); brush.vertex(160, 30); brush.vertex(520, 270); brush.vertex(490, 290);
  brush.endShape(true);

  // stars
  for (let i = 0; i < 220; i++) {
    let big = random() < 0.08;
    brush.fill(random() < 0.3 ? "#c8fff4" : "#ffffff", 250);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(random(0, 600), random(0, 400), big ? random(3.5, 5.5) : random(1.5, 2.8), 0.1);
  }

  // far hills, dark teal-black, then near hills nearly black
  brush.fill("#081a28", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 430); brush.vertex(120, 392); brush.vertex(260, 420); brush.vertex(400, 380);
  brush.vertex(600, 418); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#03060e", 255);
  brush.beginShape(0.6);
  brush.vertex(0, 490); brush.vertex(160, 452); brush.vertex(330, 500); brush.vertex(480, 462);
  brush.vertex(600, 480); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#03060e", 240);
  brush.beginShape(0.5);
  brush.vertex(0, 530); brush.vertex(300, 520); brush.vertex(600, 535); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // a lone pine on the ridge
  brush.fill("#03060e", 255);
  brush.beginShape(0.1);
  brush.vertex(470, 400); brush.vertex(492, 468); brush.vertex(448, 468);
  brush.endShape(true);
}
