async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf2e6");
  brush.noStroke();

  // warm sky, peach near horizon, gold above
  brush.fill("#f6c27a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 260); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#f29a7a", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 150); brush.vertex(620, 130); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);

  // great peak: snowfield left as paper; paint the sky around it first by
  // painting only the shadow side and the rock below the snow
  // shadowed snow faces (cool lilac, lit edge is bare paper)
  brush.fill("#a894c0", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(270, 70); brush.vertex(330, 140); brush.vertex(370, 150); brush.vertex(420, 215); brush.vertex(460, 240); brush.vertex(330, 250); brush.vertex(300, 180); brush.vertex(276, 120);
  brush.endShape(true);
  brush.fill("#8a74a4", 170);
  brush.beginShape(0.1);
  brush.vertex(276, 100); brush.vertex(320, 170); brush.vertex(345, 230); brush.vertex(310, 240); brush.vertex(285, 160);
  brush.endShape(true);
  // re-paint sky tint hugging the peak outline so the white summit reads
  brush.fill("#f6c27a", 200);
  brush.fillBleed(0.15);
  brush.beginShape(0.1);
  brush.vertex(-20, 250); brush.vertex(-20, 130); brush.vertex(150, 150); brush.vertex(270, 70); brush.vertex(200, 180); brush.vertex(120, 230);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(270, 70); brush.vertex(620, 90); brush.vertex(620, 200); brush.vertex(530, 180); brush.vertex(420, 215); brush.vertex(370, 150); brush.vertex(330, 140);
  brush.endShape(true);
  // rock below snowline, warm lit
  brush.fill("#c98a70", 200);
  brush.fillBleed(0.22);
  brush.beginShape(0.2);
  brush.vertex(60, 290); brush.vertex(120, 230); brush.vertex(160, 245); brush.vertex(200, 200); brush.vertex(235, 225); brush.vertex(300, 215); brush.vertex(330, 250); brush.vertex(460, 240); brush.vertex(530, 180); brush.vertex(570, 215); brush.vertex(620, 210); brush.vertex(620, 300);
  brush.endShape(true);
  brush.fill("#a8708a", 180);
  brush.beginShape(0.2);
  brush.vertex(330, 250); brush.vertex(460, 240); brush.vertex(530, 180); brush.vertex(560, 260); brush.vertex(400, 290);
  brush.endShape(true);

  // successive ridges, warmer and darker toward viewer
  brush.fill("#b78aa2", 195);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.25);
  brush.vertex(-20, 320); brush.vertex(80, 285); brush.vertex(160, 300); brush.vertex(250, 270); brush.vertex(340, 310); brush.vertex(450, 280); brush.vertex(530, 300); brush.vertex(620, 285); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);
  brush.fill("#8a5a6a", 215);
  brush.fillBleed(0.22);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 400); brush.vertex(120, 360); brush.vertex(220, 390); brush.vertex(330, 355); brush.vertex(460, 400); brush.vertex(620, 370); brush.vertex(620, 500); brush.vertex(-20, 500);
  brush.endShape(true);
  brush.fill("#f2a86a", 150);
  brush.beginShape(0.5);
  brush.vertex(-20, 395); brush.vertex(120, 362); brush.vertex(180, 380); brush.vertex(60, 410);
  brush.endShape(true);
  brush.fill("#6b3a3a", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.35);
  brush.vertex(-20, 480); brush.vertex(90, 445); brush.vertex(200, 470); brush.vertex(300, 435); brush.vertex(420, 480); brush.vertex(540, 450); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#4f2a2a", 230);
  brush.beginShape(0.4);
  brush.vertex(-20, 540); brush.vertex(250, 515); brush.vertex(620, 545); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
