async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0b1620");
  brush.noStroke();
  brush.fill("#f09a3a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,260); brush.vertex(0,260); brush.endShape(true);
  brush.fill("#e0507a", 190);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,130); brush.vertex(0,170); brush.endShape(true);
  brush.fill("#fbd88a", 210);
  brush.beginShape(0.5); brush.vertex(100,200); brush.vertex(500,190); brush.vertex(500,270); brush.vertex(100,280); brush.endShape(true);
  // dark water
  brush.fill("#10304a", 210); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(0,250); brush.vertex(600,255); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#d07a4a", 130);
  brush.beginShape(0.6); brush.vertex(180,270); brush.vertex(420,270); brush.vertex(380,330); brush.vertex(220,330); brush.endShape(true);
  // iceberg above water (pale), submerged below
  brush.fill("#cfe8f0", 230); brush.fillBleed(0.25);
  brush.beginShape(0.2); brush.vertex(240,300); brush.vertex(280,150); brush.vertex(330,60); brush.vertex(370,150); brush.vertex(395,300); brush.endShape(true);
  brush.fill("#8ac0d8", 210);
  brush.beginShape(0.2); brush.vertex(330,60); brush.vertex(395,300); brush.vertex(340,300); brush.vertex(325,150); brush.endShape(true);
  brush.fill("#2a8aa8", 200);
  brush.beginShape(0.5); brush.vertex(240,300); brush.vertex(395,300); brush.vertex(430,420); brush.vertex(340,560); brush.vertex(230,440); brush.endShape(true);
  brush.fill("#14607a", 190);
  brush.beginShape(0.5); brush.vertex(320,320); brush.vertex(395,310); brush.vertex(410,430); brush.vertex(340,540); brush.endShape(true);
}
