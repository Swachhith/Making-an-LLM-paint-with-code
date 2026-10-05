async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ebe0");
  brush.noStroke();
  brush.fill("#2a2428", 150); brush.fillBleed(0.3); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.8); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,330); brush.vertex(0,300); brush.endShape(true);
  brush.fill("#8a1a2e", 120); brush.circle(120,120,90,1.4);
  // water
  brush.fill("#1c1618", 190); brush.beginShape(0.8); brush.vertex(0,420); brush.vertex(600,420); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#a01830", 150); brush.beginShape(0.6); brush.vertex(380,430); brush.vertex(430,430); brush.vertex(440,580); brush.vertex(370,580); brush.endShape(true);
  // bridge deck + rail
  brush.fill("#0e0a0c", 230); brush.beginShape(0.1); brush.vertex(0,360); brush.vertex(600,340); brush.vertex(600,420); brush.vertex(0,430); brush.endShape(true);
  brush.fill("#1c1618", 220); brush.beginShape(0.1); brush.vertex(0,300); brush.vertex(600,285); brush.vertex(600,305); brush.vertex(0,320); brush.endShape(true);
  // figure
  brush.fill("#c0183c", 230);
  brush.beginShape(0.4); brush.vertex(395,200); brush.vertex(440,200); brush.vertex(470,350); brush.vertex(365,355); brush.endShape(true);
  brush.fill("#8a0e28", 210); brush.beginShape(0.4); brush.vertex(420,205); brush.vertex(440,205); brush.vertex(470,350); brush.vertex(420,355); brush.endShape(true);
  brush.fill("#0e0a0c", 230); brush.circle(418,175,20,1);
  brush.fill("#0e0a0c", 230); brush.beginShape(0.3); brush.vertex(385,350); brush.vertex(415,350); brush.vertex(410,400); brush.vertex(380,400); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(425,350); brush.vertex(455,350); brush.vertex(460,400); brush.vertex(430,400); brush.endShape(true);
  brush.fill("#f6e8c8", 220); brush.circle(412,172,8,1);
}
