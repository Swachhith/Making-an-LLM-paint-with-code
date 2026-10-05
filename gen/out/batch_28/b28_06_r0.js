async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbe9d0");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#ff8a1a", 190);
  brush.beginShape(0.4); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,300); brush.vertex(0,300); brush.endShape(true);
  brush.fill("#d8205a", 170);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,130); brush.vertex(0,170); brush.endShape(true);
  brush.fill("#ffe070", 230); brush.circle(300,240,50,0.3);
  brush.fill("#b8300a", 220);
  brush.beginShape(0.8); brush.vertex(0,300); brush.vertex(0,230); brush.vertex(120,200); brush.vertex(250,262); brush.vertex(400,215); brush.vertex(520,180); brush.vertex(600,215); brush.vertex(600,300); brush.endShape(true);
  brush.fill("#7a1a30", 200);
  brush.beginShape(0.8); brush.vertex(0,300); brush.vertex(120,250); brush.vertex(250,285); brush.vertex(450,250); brush.vertex(600,270); brush.vertex(600,300); brush.endShape(true);
  brush.fill("#e85a20", 190);
  brush.beginShape(0.4); brush.vertex(0,300); brush.vertex(600,300); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#8a2060", 180);
  brush.beginShape(0.5); brush.vertex(0,420); brush.vertex(600,400); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#ffc040", 220);
  brush.beginShape(0.5); brush.vertex(270,320); brush.vertex(330,320); brush.vertex(320,520); brush.vertex(280,520); brush.endShape(true);
  brush.fill("#6a1a40", 200);
  brush.beginShape(0.5); brush.vertex(0,300); brush.vertex(120,300); brush.vertex(190,330); brush.vertex(0,350); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(600,300); brush.vertex(450,300); brush.vertex(400,330); brush.vertex(600,360); brush.endShape(true);
}
