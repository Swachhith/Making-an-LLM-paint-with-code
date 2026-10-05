async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2dcd0");
  randomSeed(129);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.fill("#c8101e", 235);
  brush.beginShape(0.4); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,480); brush.vertex(-60,480); brush.endShape(true);
  brush.fill("#ff5a28", 215);
  brush.beginShape(0.5); brush.vertex(-60,260); brush.vertex(660,280); brush.vertex(660,480); brush.vertex(-60,480); brush.endShape(true);
  brush.fill("#ffb830", 205);
  brush.beginShape(0.5); brush.vertex(260,350); brush.vertex(660,340); brush.vertex(660,480); brush.vertex(260,480); brush.endShape(true);
  brush.fill("#4a0a2a", 215);
  brush.beginShape(0.5); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,60); brush.vertex(300,100); brush.vertex(-60,80); brush.endShape(true);
  // sun disc left as pale warm paper
  brush.fill("#ffe0a0", 230); brush.circle(470, 330, 40, 0.2);
  // large off-centre peak, two passes
  for (let k = 0; k < 4; k++) {
    brush.fill("#14061e", 240);
    brush.beginShape(0.12); brush.vertex(-60,660); brush.vertex(40,420); brush.vertex(110,330); brush.vertex(190,120); brush.vertex(215,95); brush.vertex(270,250); brush.vertex(340,330); brush.vertex(410,430); brush.vertex(520,480); brush.vertex(660,660); brush.endShape(true);
  }
  brush.fill("#3a1038", 190);
  brush.beginShape(0.3); brush.vertex(420,480); brush.vertex(520,420); brush.vertex(660,470); brush.vertex(660,660); brush.vertex(420,660); brush.endShape(true);
  // pine specks on the ridge
  for (let i = 0; i < 10; i++) { let x = 60 + i * 55; brush.fill("#0a0212", 235); brush.beginShape(0.3); brush.vertex(x,560); brush.vertex(x+22,560); brush.vertex(x+11,520+random(-12,10)); brush.endShape(true); }
}
