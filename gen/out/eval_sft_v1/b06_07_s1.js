async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf7ec");
  randomSeed(1101);
  brush.noStroke();

  // soft pastel green leaves behind the bloom
  brush.fill("#c7d9b8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(120, 520); brush.vertex(220, 420); brush.vertex(320, 460); brush.vertex(380, 540); brush.vertex(300, 560); brush.vertex(200, 530);
  brush.endShape(true);
  brush.fill("#a8c29a", 170);
  brush.beginShape(0.7);
  brush.vertex(420, 480); brush.vertex(530, 400); brush.vertex(620, 440); brush.vertex(580, 520); brush.vertex(470, 500);
  brush.endShape(true);

  // two pale red undersides of petals
  brush.fill("#f2a8b0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(460, 170); brush.vertex(530, 300); brush.vertex(430, 400); brush.vertex(300, 360);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(140, 180); brush.vertex(70, 310); brush.vertex(170, 410); brush.vertex(300, 360);
  brush.endShape(true);

  // three pale pink petals
  brush.fill("#f4c9d2", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(360, 150); brush.vertex(440, 260); brush.vertex(380, 350); brush.vertex(300, 340);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(160, 160); brush.vertex(80, 270); brush.vertex(140, 370); brush.vertex(300, 360);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(440, 380); brush.vertex(520, 270); brush.vertex(460, 160); brush.vertex(300, 170);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(420, 390); brush.vertex(500, 280); brush.vertex(440, 170); brush.vertex(300, 160);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(220, 390); brush.vertex(140, 280); brush.vertex(200, 170); brush.vertex(300, 170);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(240, 390); brush.vertex(160, 280); brush.vertex(100, 170); brush.vertex(300, 160);
  brush.endShape(true);

  // the coral-red upper petals, layered
  brush.fill("#f28a9a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(450, 140); brush.vertex(540, 230); brush.vertex(470, 320); brush.vertex(360, 310);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(150, 140); brush.vertex(60, 230); brush.vertex(130, 320); brush.vertex(240, 310);
  brush.endShape(true);
  brush.fill("#e86a82", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(470, 190); brush.vertex(520, 260); brush.vertex(460, 330); brush.vertex(360, 320);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(130, 190); brush.vertex(80, 260); brush.vertex(140, 330); brush.vertex(240, 320);
  brush.endShape(true);
  brush.fill("#d44a70", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(430, 240); brush.vertex(470, 300); brush.vertex(410, 360); brush.vertex(350, 340);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(170, 240); brush.vertex(130, 300); brush.vertex(190, 360); brush.vertex(250, 340);
  brush.endShape(true);

  // deeper crimson at the base of each petal
  brush.fill("#a82a48", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(400, 280); brush.vertex(430, 320); brush.vertex(380, 350); brush.vertex(330, 330);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(200, 280); brush.vertex(170, 320); brush.vertex(220, 350); brush.vertex(270, 330);
  brush.endShape(true);

  // centre: pale yellow then a dark heart
  brush.fill("#f2d88a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(300, 270, 50, 0.4);
  brush.fill("#c89a30", 230);
  brush.circle(300, 270, 30, 0.4);
  brush.fill("#5a2a10", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(300, 270, 16, 0.4);
}
