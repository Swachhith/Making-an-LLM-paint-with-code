async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eee8d6");
  brush.noStroke();
  // gold sky
  brush.fill("#e89a10", 230); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 210); brush.vertex(-10, 230);
  brush.endShape(true);
  brush.fill("#f8c838", 200);
  brush.beginShape(0.5);
  brush.vertex(150, 40); brush.vertex(450, 30); brush.vertex(460, 220); brush.vertex(140, 220);
  brush.endShape(true);
  brush.fill("#fff0a0", 230);
  brush.circle(300, 95, 30, 0.4);
  // forest backdrop, two greens
  brush.fill("#0a5a30", 235); brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(-10, 190); brush.vertex(80, 135); brush.vertex(150, 195); brush.vertex(230, 125); brush.vertex(330, 195);
  brush.vertex(420, 120); brush.vertex(520, 185); brush.vertex(610, 135); brush.vertex(610, 320); brush.vertex(-10, 320);
  brush.endShape(true);
  brush.fill("#0a5a30", 225);
  brush.beginShape(0.4);
  brush.vertex(-10, 190); brush.vertex(80, 135); brush.vertex(150, 195); brush.vertex(230, 125); brush.vertex(330, 195);
  brush.vertex(420, 120); brush.vertex(520, 185); brush.vertex(610, 135); brush.vertex(610, 320); brush.vertex(-10, 320);
  brush.endShape(true);
  brush.fill("#06361e", 225);
  brush.beginShape(0.4);
  brush.vertex(-10, 250); brush.vertex(100, 215); brush.vertex(240, 255); brush.vertex(380, 220); brush.vertex(610, 245); brush.vertex(610, 320); brush.vertex(-10, 320);
  brush.endShape(true);
  brush.fill("#06361e", 215);
  brush.beginShape(0.4);
  brush.vertex(-10, 250); brush.vertex(100, 215); brush.vertex(240, 255); brush.vertex(380, 220); brush.vertex(610, 245); brush.vertex(610, 320); brush.vertex(-10, 320);
  brush.endShape(true);
  // frozen lake, gold-washed, snow banks left as paper
  brush.fill("#d8a828", 215); brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(120, 295); brush.vertex(480, 295); brush.vertex(520, 440); brush.vertex(430, 570); brush.vertex(170, 570); brush.vertex(80, 440);
  brush.endShape(true);
  brush.fill("#f0c850", 190);
  brush.beginShape(0.5);
  brush.vertex(200, 330); brush.vertex(400, 330); brush.vertex(420, 440); brush.vertex(190, 440);
  brush.endShape(true);
  // green banks with snow gaps
  brush.fill("#0c5a30", 235);
  brush.beginShape(0.5);
  brush.vertex(-10, 310); brush.vertex(120, 295); brush.vertex(80, 435); brush.vertex(150, 575); brush.vertex(100, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#0c5a30", 225);
  brush.beginShape(0.5);
  brush.vertex(-10, 310); brush.vertex(120, 295); brush.vertex(80, 435); brush.vertex(150, 575); brush.vertex(100, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(610, 310); brush.vertex(480, 295); brush.vertex(520, 440); brush.vertex(440, 575); brush.vertex(500, 610); brush.vertex(610, 610);
  brush.endShape(true);
  brush.fill("#0c5a30", 225);
  brush.beginShape(0.5);
  brush.vertex(610, 310); brush.vertex(480, 295); brush.vertex(520, 440); brush.vertex(440, 575); brush.vertex(500, 610); brush.vertex(610, 610);
  brush.endShape(true);
  brush.fill("#06361e", 235);
  brush.beginShape(0.4);
  brush.vertex(-10, 340); brush.vertex(60, 350); brush.vertex(40, 410); brush.vertex(-10, 420);
  brush.endShape(true);
  brush.fill("#06361e", 225);
  brush.beginShape(0.4);
  brush.vertex(-10, 340); brush.vertex(60, 350); brush.vertex(40, 410); brush.vertex(-10, 420);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(610, 370); brush.vertex(560, 380); brush.vertex(572, 450); brush.vertex(610, 460);
  brush.endShape(true);
  brush.fill("#06361e", 225);
  brush.beginShape(0.4);
  brush.vertex(610, 370); brush.vertex(560, 380); brush.vertex(572, 450); brush.vertex(610, 460);
  brush.endShape(true);
  // snow lumps as paper: ring them with shadow
  brush.fill("#2a6a5a", 190);
  brush.beginShape(0.5);
  brush.vertex(-10, 470); brush.vertex(90, 490); brush.vertex(120, 560); brush.vertex(-10, 570);
  brush.endShape(true);
  // pines
  brush.fill("#06361e", 245);
  brush.beginShape(0.2);
  brush.vertex(25, 525); brush.vertex(62, 395); brush.vertex(100, 525);
  brush.endShape(true);
  brush.fill("#06361e", 235);
  brush.beginShape(0.2);
  brush.vertex(25, 525); brush.vertex(62, 395); brush.vertex(100, 525);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(40, 480); brush.vertex(65, 415); brush.vertex(92, 480);
  brush.endShape(true);
  brush.fill("#06361e", 235);
  brush.beginShape(0.2);
  brush.vertex(40, 480); brush.vertex(65, 415); brush.vertex(92, 480);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(515, 545); brush.vertex(555, 410); brush.vertex(595, 545);
  brush.endShape(true);
  brush.fill("#06361e", 235);
  brush.beginShape(0.2);
  brush.vertex(515, 545); brush.vertex(555, 410); brush.vertex(595, 545);
  brush.endShape(true);
  // foreground shadow
  brush.fill("#06361e", 205);
  brush.beginShape(0.5);
  brush.vertex(-10, 600); brush.vertex(300, 570); brush.vertex(610, 600); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#06361e", 195);
  brush.beginShape(0.5);
  brush.vertex(-10, 600); brush.vertex(300, 570); brush.vertex(610, 600); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
}
