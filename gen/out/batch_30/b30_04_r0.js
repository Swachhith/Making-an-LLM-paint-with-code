async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e6ee");
  brush.noStroke();
  brush.fill("#3a3d9a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.8); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#e8602a", 190); brush.beginShape(0.8); brush.vertex(0,420); brush.vertex(600,380); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // tower
  brush.fill("#1c1f66", 230);
  brush.beginShape(0.1); brush.vertex(190,150); brush.vertex(410,150); brush.vertex(430,600); brush.vertex(170,600); brush.endShape(true);
  brush.fill("#14164a", 220);
  brush.beginShape(0.1); brush.vertex(300,150); brush.vertex(410,150); brush.vertex(430,600); brush.vertex(300,600); brush.endShape(true);
  // spire
  brush.fill("#262a80", 230);
  brush.beginShape(0.1); brush.vertex(180,155); brush.vertex(300,20); brush.vertex(420,155); brush.endShape(true);
  // belfry opening
  brush.fill("#f6a030", 230);
  brush.beginShape(0.5); brush.vertex(255,230); brush.vertex(345,230); brush.vertex(345,340); brush.vertex(255,340); brush.endShape(true);
  brush.fill("#fff0b0", 200); brush.circle(300,300,22,1);
  brush.fill("#14164a", 230); brush.circle(300,285,16,1);
  brush.fill("#f6a030", 200); brush.circle(300,420,28,1);
  brush.fill("#5a5ec0", 170); brush.circle(90,90,40,1.3); brush.circle(510,130,50,1.3);
}
