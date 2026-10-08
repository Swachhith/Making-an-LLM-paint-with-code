async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f6");
  brush.noStroke();

  // pale sky, soft blue-grey
  brush.fill("#b9c5d4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 200); brush.vertex(0, 220);
  brush.endShape(true);

  // rolling hill behind the clouds, lavender
  brush.fill("#c7a8d2", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(0, 400); brush.vertex(150, 360); brush.vertex(300, 380); brush.vertex(470, 350);
  brush.vertex(600, 390); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // cloud bank, left to right, low
  brush.fill("#a8b8c8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(0, 420); brush.vertex(180, 390); brush.vertex(340, 425); brush.vertex(500, 400); brush.vertex(600, 435);
  brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#8fa0b2", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(250, 445); brush.vertex(420, 425); brush.vertex(600, 450); brush.vertex(600, 600); brush.vertex(420, 600);
  brush.vertex(250, 600);
  brush.endShape(true);

  // three peaks: a big one off-centre right, two smaller left
  let peaks = [[260, 530, 230], [470, 300, 180], [150, 370, 130]];
  for (let p of peaks) {
    let [x, base, h] = p;
    brush.fill("#8f9bb2", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.4);
    brush.vertex(x, base);
    brush.vertex(x - h * 0.3, base - h * 0.6);
    brush.vertex(x, base - h);
    brush.vertex(x + h * 0.3, base - h * 0.6);
    brush.vertex(x + h * 0.5, base);
    brush.endShape(true);
    brush.fill("#6e7aa2", 180);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(x, base);
    brush.vertex(x - h * 0.35, base - h * 0.55);
    brush.vertex(x, base - h * 0.9);
    brush.vertex(x + h * 0.35, base - h * 0.55);
    brush.vertex(x + h * 0.4, base);
    brush.endShape(true);
  }
  // snow caps
  brush.fill("#f2f4f6", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(260, 340); brush.vertex(260, 300); brush.vertex(310, 300); brush.vertex(310, 340);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(470, 260); brush.vertex(470, 230); brush.vertex(520, 230); brush.vertex(520, 260);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(150, 350); brush.vertex(150, 320); brush.vertex(190, 320); brush.vertex(190, 350);
  brush.endShape(true);
  // soft shadow on the hill where peaks meet the cloud bank
  brush.fill("#9aa0b2", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(300, 430); brush.vertex(470, 420); brush.vertex(470, 470); brush.vertex(300, 480);
  brush.vertex(300, 440);
  brush.endShape(true);
}
