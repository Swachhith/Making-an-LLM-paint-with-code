async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0ede8");
  brush.noStroke();
  brush.fill("#8aa0c0", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 360); brush.vertex(-10, 360); brush.endShape(true);
  // far peaks
  brush.fill("#4a5a80", 200);
  brush.beginShape(0.1); brush.vertex(-10, 380); brush.vertex(120, 230); brush.vertex(220, 330); brush.vertex(340, 190); brush.vertex(470, 340); brush.vertex(560, 260); brush.vertex(610, 330); brush.vertex(610, 400); brush.vertex(-10, 400); brush.endShape(true);
  brush.fill("#1a2040", 220);
  brush.beginShape(0.2); brush.vertex(-10, 600); brush.vertex(-10, 380); brush.vertex(150, 400); brush.vertex(260, 480); brush.vertex(330, 600); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(610, 600); brush.vertex(610, 360); brush.vertex(480, 400); brush.vertex(400, 480); brush.vertex(350, 600); brush.endShape(true);
  // cable
  brush.fill("#10142a", 220);
  brush.beginShape(0.5); brush.vertex(40, 300); brush.vertex(560, 150); brush.vertex(560, 168); brush.vertex(40, 318); brush.endShape(true);
  // cabin
  brush.fill("#d8402a", 230);
  brush.beginShape(0.2); brush.vertex(290, 250); brush.vertex(350, 235); brush.vertex(355, 285); brush.vertex(295, 300); brush.endShape(true);
  brush.fill("#f8d070", 200);
  brush.beginShape(0.2); brush.vertex(300, 262); brush.vertex(340, 252); brush.vertex(342, 272); brush.vertex(302, 282); brush.endShape(true);
  brush.fill("#10142a", 220);
  brush.beginShape(0.2); brush.vertex(315, 247); brush.vertex(330, 243); brush.vertex(330, 220); brush.vertex(318, 222); brush.endShape(true);
  // valley mist
  brush.fill("#c8d0e0", 160);
  brush.beginShape(0.5); brush.vertex(-10, 500); brush.vertex(300, 470); brush.vertex(610, 500); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
}
