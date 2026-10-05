async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e7e3ee");
  brush.noStroke(); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  // dusk sky
  brush.fill("#3a3fa8", 190); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#1a1c78", 170); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,250); brush.vertex(-60,200); brush.endShape(true);
  brush.fill("#6a60c8", 150); brush.beginShape(0.9); brush.vertex(-60,330); brush.vertex(660,300); brush.vertex(660,460); brush.vertex(-60,480); brush.endShape(true);
  brush.fill("#ff6a20", 190); brush.beginShape(0.9); brush.vertex(-60,460); brush.vertex(660,430); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  // tower, shaded
  brush.fill("#2a2c88", 215); brush.beginShape(0.1); brush.vertex(170,160); brush.vertex(430,160); brush.vertex(455,640); brush.vertex(145,640); brush.endShape(true);
  brush.fill("#14164e", 220); brush.beginShape(0.1); brush.vertex(310,160); brush.vertex(430,160); brush.vertex(455,640); brush.vertex(310,640); brush.endShape(true);
  brush.fill("#0a0c36", 180); brush.beginShape(0.1); brush.vertex(380,160); brush.vertex(430,160); brush.vertex(455,640); brush.vertex(380,640); brush.endShape(true);
  // spire
  brush.fill("#22268a", 230); brush.beginShape(0.1); brush.vertex(155,165); brush.vertex(300,-20); brush.vertex(445,165); brush.endShape(true);
  brush.fill("#10125a", 210); brush.beginShape(0.1); brush.vertex(300,-20); brush.vertex(445,165); brush.vertex(300,165); brush.endShape(true);
  // cornice band
  brush.fill("#3a3ca0", 220); brush.beginShape(0.1); brush.vertex(160,155); brush.vertex(440,155); brush.vertex(440,185); brush.vertex(160,185); brush.endShape(true);
  // belfry opening — the one accent
  brush.fill("#ff9a10", 235); brush.beginShape(0.4); brush.vertex(245,225); brush.vertex(355,225); brush.vertex(355,350); brush.vertex(245,350); brush.endShape(true);
  brush.fill("#ffd860", 220); brush.circle(300,305,24,1);
  brush.fill("#0e1048", 235); brush.circle(300,282,18,1);
  brush.beginShape(0.3); brush.vertex(292,282); brush.vertex(308,282); brush.vertex(312,340); brush.vertex(288,340); brush.endShape(true);
  // dark arch lines
  brush.fill("#0a0c36", 200); brush.beginShape(0.1); brush.vertex(235,350); brush.vertex(365,350); brush.vertex(365,368); brush.vertex(235,368); brush.endShape(true);
  brush.fill("#0a0c36", 190); brush.circle(300,470,26,1); brush.fill("#14164e", 200); brush.beginShape(0.3); brush.vertex(270,520); brush.vertex(330,520); brush.vertex(330,640); brush.vertex(270,640); brush.endShape(true);
  // birds / clouds
  brush.fill("#8a80d8", 150); brush.circle(80,90,40,1.4); brush.circle(520,120,50,1.4);
}
