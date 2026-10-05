async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f1");
  brush.noStroke(); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  // low angle: big sky
  brush.fill("#1a8ae8", 190); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,420); brush.vertex(-60,420); brush.endShape(true);
  brush.fill("#0a5ac0", 160); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,140); brush.vertex(-60,190); brush.endShape(true);
  brush.fill("#ffd060", 190); brush.circle(520,80,42,1.2); brush.fill("#ffa030", 130); brush.circle(520,80,70,1.4);
  // sea
  brush.fill("#0a50c0", 210); brush.beginShape(0.6); brush.vertex(-60,420); brush.vertex(660,410); brush.vertex(660,520); brush.vertex(-60,520); brush.endShape(true);
  brush.fill("#20a0d8", 170); brush.beginShape(0.6); brush.vertex(-60,445); brush.vertex(660,440); brush.vertex(660,480); brush.vertex(-60,480); brush.endShape(true);
  // church walls left white as paper, shaded on the right side
  brush.fill("#f0d0a0", 150); brush.beginShape(0.1); brush.vertex(140,320); brush.vertex(450,320); brush.vertex(450,560); brush.vertex(140,560); brush.endShape(true);
  brush.fill("#d8905a", 190); brush.beginShape(0.1); brush.vertex(330,320); brush.vertex(450,320); brush.vertex(450,560); brush.vertex(330,560); brush.endShape(true);
  // drum + dome
  brush.fill("#e8c8a0", 170); brush.beginShape(0.1); brush.vertex(190,320); brush.vertex(400,320); brush.vertex(400,250); brush.vertex(190,250); brush.endShape(true);
  brush.fill("#1a56d8", 235); brush.beginShape(0.9); brush.vertex(175,255); brush.vertex(190,190); brush.vertex(295,125); brush.vertex(400,190); brush.vertex(415,255); brush.endShape(true);
  brush.fill("#0a2a98", 220); brush.beginShape(0.9); brush.vertex(295,125); brush.vertex(400,190); brush.vertex(415,255); brush.vertex(295,255); brush.endShape(true);
  brush.fill("#3a86f0", 170); brush.circle(250,195,24,1.3);
  // cross
  brush.fill("#f8f2e0", 230); brush.beginShape(0.1); brush.vertex(286,60); brush.vertex(304,60); brush.vertex(304,130); brush.vertex(286,130); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(268,78); brush.vertex(322,78); brush.vertex(322,94); brush.vertex(268,94); brush.endShape(true);
  brush.fill("#102a80", 225); brush.beginShape(0.1); brush.vertex(290,64); brush.vertex(300,64); brush.vertex(300,125); brush.vertex(290,125); brush.endShape(true);
  // arched windows and door
  brush.fill("#183a98", 225); for (const x of [175,245]) { brush.beginShape(0.6); brush.vertex(x,410); brush.vertex(x+34,410); brush.vertex(x+34,470); brush.vertex(x,470); brush.endShape(true); brush.circle(x+17,408,17,1); }
  brush.beginShape(0.4); brush.vertex(278,440); brush.vertex(322,440); brush.vertex(322,560); brush.vertex(278,560); brush.endShape(true);
  // rocks + bougainvillea
  brush.fill("#2a8a4a", 215); brush.beginShape(0.8); brush.vertex(-60,545); brush.vertex(300,535); brush.vertex(660,550); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#d81850", 225); brush.circle(70,540,38,1.5); brush.circle(110,560,30,1.5); brush.circle(520,545,32,1.5);
  brush.fill("#8a0a38", 190); brush.circle(80,550,20,1.4);
}
