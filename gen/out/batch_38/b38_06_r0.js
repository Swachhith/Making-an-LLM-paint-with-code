async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe3cb");
  brush.noStroke();
  brush.fill("#d9a15a", 180); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,420); brush.vertex(0,420); brush.endShape(true);
  brush.fill("#c9784a", 170);
  brush.beginShape(0.5); brush.vertex(0,230); brush.vertex(600,200); brush.vertex(600,430); brush.vertex(0,440); brush.endShape(true);
  brush.fill("#f0d9a0", 170);
  brush.circle(180, 300, 80, 0.6);
  brush.fill("#7a8a4a", 190);
  brush.beginShape(0.7); brush.vertex(0,410); brush.vertex(300,395); brush.vertex(600,415); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#5a5a30", 200);
  brush.beginShape(0.7); brush.vertex(0,490); brush.vertex(300,470); brush.vertex(600,500); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // swath marks
  brush.fill("#9a8a4a", 170);
  brush.beginShape(0.5); brush.vertex(40,540); brush.vertex(300,510); brush.vertex(330,550); brush.vertex(80,580); brush.endShape(true);
  // silhouette farmer
  brush.fill("#2e2218", 235); brush.fillBleed(0.2);
  brush.beginShape(0.3); brush.vertex(350,250); brush.vertex(385,250); brush.vertex(395,380); brush.vertex(340,380); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(345,375); brush.vertex(365,375); brush.vertex(362,470); brush.vertex(340,470); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(368,375); brush.vertex(392,375); brush.vertex(398,470); brush.vertex(374,470); brush.endShape(true);
  brush.circle(368, 232, 15, 0.3);
  brush.beginShape(0.5); brush.vertex(335,200); brush.vertex(405,205); brush.vertex(395,222); brush.vertex(345,222); brush.endShape(true);
  // scythe: handle + curved blade
  brush.fill("#4a3a28", 220);
  brush.beginShape(0.2); brush.vertex(405,190); brush.vertex(422,190); brush.vertex(440,480); brush.vertex(424,480); brush.endShape(true);
  brush.fill("#8a8a82", 220);
  brush.beginShape(0.6); brush.vertex(405,190); brush.vertex(300,150); brush.vertex(240,180); brush.vertex(310,180); brush.vertex(410,215); brush.endShape(true);
}
