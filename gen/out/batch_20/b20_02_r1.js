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

  brush.fill("#f4b98a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(300, 200); brush.vertex(-20, 190);
  brush.endShape(true);
  brush.fill("#f7d49a", 170);
  brush.fillBleed(0.28);
  brush.beginShape(0.6);
  brush.vertex(-20, 140); brush.vertex(620, 120); brush.vertex(620, 320); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#f2a86a", 200);
  brush.circle(480, 95, 32, 0.25);

  // big snowy peak: shadow side painted, sunlit side left as paper
  // shadowed faces (cool mauve) on the right of each peak
  brush.fill("#b7a0c4", 200);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.15);
  brush.vertex(250, 80); brush.vertex(280, 130); brush.vertex(300, 125); brush.vertex(340, 190); brush.vertex(380, 200); brush.vertex(430, 260); brush.vertex(300, 270); brush.vertex(262, 180); brush.vertex(254, 120);
  brush.endShape(true);
  brush.fill("#9d82ae", 180);
  brush.beginShape(0.15);
  brush.vertex(262, 110); brush.vertex(300, 160); brush.vertex(330, 210); brush.vertex(290, 240); brush.vertex(268, 170);
  brush.endShape(true);
  // sunlit rock below snow line on left
  brush.fill("#e6b58c", 180);
  brush.beginShape(0.2);
  brush.vertex(60, 270); brush.vertex(150, 200); brush.vertex(190, 215); brush.vertex(220, 180); brush.vertex(262, 180); brush.vertex(300, 270);
  brush.endShape(true);
  // second peak right
  brush.fill("#b7a0c4", 190);
  brush.beginShape(0.15);
  brush.vertex(480, 170); brush.vertex(520, 215); brush.vertex(600, 250); brush.vertex(620, 290); brush.vertex(480, 290); brush.vertex(488, 220);
  brush.endShape(true);
  brush.fill("#e6b58c", 170);
  brush.beginShape(0.2);
  brush.vertex(380, 290); brush.vertex(440, 230); brush.vertex(480, 170); brush.vertex(488, 220); brush.vertex(480, 290);
  brush.endShape(true);

  // mid ridges
  brush.fill("#a9829e", 195);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.25);
  brush.vertex(-20, 320); brush.vertex(80, 285); brush.vertex(160, 300); brush.vertex(250, 270); brush.vertex(340, 310); brush.vertex(450, 280); brush.vertex(530, 300); brush.vertex(620, 285); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);

  brush.fill("#8a5a6a", 210);
  brush.fillBleed(0.22);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 400); brush.vertex(120, 360); brush.vertex(220, 390); brush.vertex(330, 355); brush.vertex(460, 400); brush.vertex(620, 370); brush.vertex(620, 500); brush.vertex(-20, 500);
  brush.endShape(true);
  brush.fill("#f2a86a", 140);
  brush.beginShape(0.5);
  brush.vertex(-20, 395); brush.vertex(120, 362); brush.vertex(180, 380); brush.vertex(60, 410);
  brush.endShape(true);

  brush.fill("#6b3a3a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.35);
  brush.vertex(-20, 480); brush.vertex(90, 445); brush.vertex(200, 470); brush.vertex(300, 435); brush.vertex(420, 480); brush.vertex(540, 450); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#4f2a2a", 225);
  brush.beginShape(0.4);
  brush.vertex(-20, 540); brush.vertex(250, 515); brush.vertex(620, 545); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
