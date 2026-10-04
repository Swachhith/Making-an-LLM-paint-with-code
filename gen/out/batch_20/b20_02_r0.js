async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1e4");
  brush.noStroke();

  brush.fill("#f4b98a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(300, 240); brush.vertex(-20, 210);
  brush.endShape(true);

  brush.fill("#f7d49a", 160);
  brush.fillBleed(0.28);
  brush.beginShape(0.6);
  brush.vertex(-20, 150); brush.vertex(620, 130); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);

  // far ridge with snow left as paper at peaks
  brush.fill("#c9a3b8", 170);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, 300); brush.vertex(60, 250); brush.vertex(110, 262); brush.vertex(200, 190); brush.vertex(240, 215); brush.vertex(300, 170); brush.vertex(370, 225); brush.vertex(430, 200); brush.vertex(520, 250); brush.vertex(620, 235); brush.vertex(620, 340); brush.vertex(-20, 340);
  brush.endShape(true);
  brush.fill("#a9829e", 150);
  brush.beginShape(0.2);
  brush.vertex(300, 205); brush.vertex(330, 240); brush.vertex(370, 260); brush.vertex(430, 235); brush.vertex(470, 270); brush.vertex(400, 300); brush.vertex(300, 290); brush.vertex(240, 250);
  brush.endShape(true);

  brush.fill("#9f7a92", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.25);
  brush.vertex(-20, 330); brush.vertex(80, 290); brush.vertex(150, 310); brush.vertex(250, 270); brush.vertex(340, 320); brush.vertex(450, 285); brush.vertex(530, 310); brush.vertex(620, 290); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);

  brush.fill("#8a5a6a", 205);
  brush.fillBleed(0.22);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 400); brush.vertex(120, 360); brush.vertex(220, 390); brush.vertex(330, 355); brush.vertex(460, 400); brush.vertex(620, 370); brush.vertex(620, 500); brush.vertex(-20, 500);
  brush.endShape(true);

  brush.fill("#6b3a3a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.35);
  brush.vertex(-20, 480); brush.vertex(90, 450); brush.vertex(200, 470); brush.vertex(300, 440); brush.vertex(420, 480); brush.vertex(540, 455); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#4f2a2a", 220);
  brush.beginShape(0.4);
  brush.vertex(-20, 540); brush.vertex(250, 520); brush.vertex(620, 545); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  brush.fill("#f2a86a", 170);
  brush.circle(470, 110, 34, 0.25);
}
