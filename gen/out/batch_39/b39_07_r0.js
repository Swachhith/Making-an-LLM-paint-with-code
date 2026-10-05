async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1e6c8");
  brush.noStroke();
  brush.fill("#e0a830", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,500); brush.vertex(0,500); brush.endShape(true);
  brush.fill("#d07a20", 190);
  brush.beginShape(0.5); brush.vertex(0,330); brush.vertex(600,330); brush.vertex(600,520); brush.vertex(0,520); brush.endShape(true);
  brush.fill("#1f4a3a", 200); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,130); brush.vertex(0,110); brush.endShape(true);
  // ground
  brush.fill("#143a2a", 230); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(0,520); brush.vertex(300,500); brush.vertex(600,515); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // elm: vase shape
  brush.fill("#0e2a1e", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6); brush.vertex(270,520); brush.vertex(285,380); brush.vertex(240,280); brush.vertex(300,300); brush.vertex(315,380); brush.vertex(340,520); brush.endShape(true);
  const cr = [[300,150,170],[170,190,110],[430,190,110],[300,80,100],[120,240,70],[480,240,70]];
  for (const [x,y,r] of cr) {
    brush.fill("#0e3022", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.circle(x,y,r,0.8);
  }
}
