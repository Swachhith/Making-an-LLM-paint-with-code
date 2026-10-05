async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0b1022");
  brush.noStroke();
  // sky glow: deep blue top, luminous cyan-lilac halo near the moon
  brush.fill("#1c3a8c", 230); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 440); brush.vertex(-10, 440);
  brush.endShape(true);
  brush.fill("#3f78d8", 210); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.circle(300, 170, 440, 0.4);
  brush.fill("#8cc0f4", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.circle(300, 170, 270, 0.3);
  brush.fill("#d8e8fa", 200); brush.fillBleed(0.25); brush.fillTexture(0.3, 0.3);
  brush.circle(300, 170, 150, 0.2);
  // moon left as pale paper-warm disc
  brush.fill("#fff6d4", 245); brush.fillBleed(0.1); brush.fillTexture(0.2, 0.2);
  brush.circle(300, 170, 48, 0.1);
  // stars
  for (let i = 0; i < 14; i++) { brush.fill("#e8eefc", 230); brush.circle(25 + (i * 211) % 560, 20 + (i * 83) % 150, 2, 0.2); }
  // distant ridge, pale indigo
  brush.fill("#2c3f8a", 235); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-10, 430); brush.vertex(40, 380); brush.vertex(90, 405); brush.vertex(170, 330); brush.vertex(240, 395); brush.vertex(310, 370);
  brush.vertex(400, 320); brush.vertex(470, 385); brush.vertex(540, 350); brush.vertex(610, 395); brush.vertex(610, 500); brush.vertex(-10, 500);
  brush.endShape(true);
  // snow lit by moon on the ridge
  brush.fill("#cfe0f6", 215); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(150, 355); brush.vertex(170, 330); brush.vertex(190, 362); brush.vertex(170, 352);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(382, 345); brush.vertex(400, 320); brush.vertex(425, 355); brush.vertex(402, 345);
  brush.endShape(true);
  // near dark mountains and ground
  brush.fill("#0a1030", 250); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-10, 520); brush.vertex(70, 450); brush.vertex(150, 500); brush.vertex(240, 440); brush.vertex(330, 505);
  brush.vertex(420, 455); brush.vertex(520, 510); brush.vertex(610, 465); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // moonlit river sliver
  brush.fill("#6a98d8", 190); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.8);
  brush.vertex(270, 520); brush.vertex(330, 520); brush.vertex(350, 610); brush.vertex(250, 610);
  brush.endShape(true);
}
