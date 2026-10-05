async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6f2e4");
  brush.noStroke();
  brush.fill("#8ad0b0", 150); brush.fillBleed(0.3); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.8); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // stems
  brush.fill("#1a8a3a", 220);
  brush.beginShape(0.4); brush.vertex(270,330); brush.vertex(300,330); brush.vertex(320,600); brush.vertex(290,600); brush.endShape(true);
  brush.beginShape(0.4); brush.vertex(430,330); brush.vertex(455,330); brush.vertex(430,600); brush.vertex(405,600); brush.endShape(true);
  brush.fill("#2aa04a", 200);
  brush.beginShape(0.5); brush.vertex(300,600); brush.vertex(150,330); brush.vertex(200,320); brush.vertex(330,600); brush.endShape(true);
  // open bloom petals
  brush.fill("#f5b800", 215);
  for (let a=0;a<360;a+=60){ const x=285+Math.cos(a*Math.PI/180)*60, y=240+Math.sin(a*Math.PI/180)*60; brush.circle(x,y,48,1.2); }
  brush.fill("#e07a00", 230); brush.circle(285,240,40,1);
  brush.fill("#c85000", 200); brush.circle(285,240,22,1);
  // bud
  brush.fill("#f0a800", 220); brush.beginShape(0.6); brush.vertex(410,330); brush.vertex(470,330); brush.vertex(450,230); brush.vertex(430,215); brush.endShape(true);
  brush.fill("#c88a00", 200); brush.circle(440,300,30,1);
}
