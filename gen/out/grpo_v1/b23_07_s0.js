async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf0c8");
  brush.noStroke();
  // sky: saturated bands from deep indigo to magenta to orange
  brush.fill("#2a1a6a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(-20, 200);
  brush.endShape(true);
  brush.fill("#b02a8a", 200);
  brush.beginShape(0.3);
  brush.vertex(-20, 200); brush.vertex(620, 190); brush.vertex(620, 360); brush.vertex(-20, 370);
  brush.endShape(true);
  brush.fill("#e84a1a", 220);
  brush.beginShape(0.3);
  brush.vertex(-20, 370); brush.vertex(620, 360); brush.vertex(620, 500); brush.vertex(-20, 510);
  brush.endShape(true);
  brush.fill("#ff8a1a", 230);
  brush.beginShape(0.3);
  brush.vertex(-20, 510); brush.vertex(620, 500); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // clouds
  brush.fill("#fbf0c8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(150, 130); brush.vertex(220, 100); brush.vertex(290, 130); brush.vertex(250, 150); brush.vertex(190, 140);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(420, 150); brush.vertex(480, 120); brush.vertex(540, 150); brush.vertex(500, 170); brush.vertex(440, 160);
  brush.endShape(true);
  // palm trunks: three tall slender shapes
  brush.fill("#2a2a2a", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(130, 400); brush.vertex(136, 400); brush.vertex(142, 620); brush.vertex(136, 620);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(230, 410); brush.vertex(236, 410); brush.vertex(242, 620); brush.vertex(236, 620);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(350, 420); brush.vertex(356, 420); brush.vertex(362, 620); brush.vertex(356, 620);
  brush.endShape(true);
  // fronds: long sweeping arcs
  brush.fill("#1a3a1a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(130, 390); brush.vertex(150, 330); brush.vertex(170, 270); brush.vertex(190, 210); brush.vertex(210, 150);
  brush.vertex(230, 90); brush.vertex(250, 150); brush.vertex(270, 210); brush.vertex(290, 270); brush.vertex(310, 330);
  brush.vertex(330, 390);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(230, 410); brush.vertex(250, 350); brush.vertex(270, 290); brush.vertex(290, 230); brush.vertex(310, 170);
  brush.vertex(330, 230); brush.vertex(350, 290); brush.vertex(370, 350); brush.vertex(390, 410);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(350, 420); brush.vertex(370, 360); brush.vertex(390, 300); brush.vertex(410, 240); brush.vertex(430, 180);
  brush.vertex(450, 240); brush.vertex(470, 300); brush.vertex(490, 360); brush.vertex(510, 420);
  brush.endShape(true);
  // sun on the horizon
  brush.fill("#ffd23a", 240);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(460, 520, 50, 0.4);
  // silhouettes of houses along the far shore
  brush.fill("#1a1a2a", 230);
  brush.fillBleed(0.15);
  brush.beginShape(0.1);
  brush.vertex(10, 520); brush.vertex(60, 520); brush.vertex(60, 440); brush.vertex(10, 440);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(200, 520); brush.vertex(250, 520); brush.vertex(250, 460); brush.vertex(200, 460);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(350, 520); brush.vertex(400, 520); brush.vertex(400, 470); brush.vertex(350, 470);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(520, 520); brush.vertex(570, 520); brush.vertex(570, 490); brush.vertex(520, 490);
  brush.endShape(true);
}
