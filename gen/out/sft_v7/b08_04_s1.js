async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4ea");
  randomSeed(2100);
  brush.noStroke();

  // splashy sky: teal and indigo blooms, drips running down
  brush.fill("#2f8f9a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(300, -20); brush.vertex(300, 120); brush.vertex(-20, 140);
  brush.endShape(true);
  brush.fill("#4a3070", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(400, -20); brush.vertex(620, -20); brush.vertex(620, 160); brush.vertex(400, 140);
  brush.endShape(true);
  brush.fill("#1f5a6a", 150);
  brush.circle(200, 260, 110, 0.6);
  brush.fill("#1f5a6a", 150);
  brush.circle(470, 330, 90, 0.6);
  // drips
  for (let i = 0; i < 12; i++) {
    brush.fill("#2f8f9a", 170);
    brush.fillBleed(0.3);
    brush.circle(random(20, 420), random(160, 320), random(6, 14), 0.5);
  }

  // sea, loose and splashy
  brush.fill("#1f6a7a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 320); brush.vertex(620, 310); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#0e3a4a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 380); brush.vertex(620, 370); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // white foam
  brush.fill("#eef2f0", 230);
  brush.fillBleed(0.1);
  brush.beginShape(0.6);
  brush.vertex(100, 350); brush.vertex(220, 345); brush.vertex(150, 360); brush.vertex(180, 365);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(350, 370); brush.vertex(460, 365); brush.vertex(390, 380); brush.vertex(420, 385);
  brush.endShape(true);

  // beach: pale sand with dark streaks
  brush.fill("#e8dcb8", 240);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 320); brush.vertex(620, 320); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8c6a4a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(30, 520); brush.vertex(130, 470); brush.vertex(220, 540); brush.vertex(110, 570);
  brush.endShape(true);
  brush.fill("#8c6a4a", 170);
  brush.beginShape(0.6);
  brush.vertex(350, 500); brush.vertex(450, 460); brush.vertex(540, 530); brush.vertex(440, 560);
  brush.endShape(true);

  // figure, left side, small
  let fx = 160, fy = 350;
  // legs
  brush.fill("#2a1a3a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(fx - 12, fy + 10); brush.vertex(fx - 4, fy + 10); brush.vertex(fx - 10, fy + 100); brush.vertex(fx - 4, fy + 100);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(fx + 4, fy + 10); brush.vertex(fx + 12, fy + 10); brush.vertex(fx + 10, fy + 100); brush.vertex(fx + 4, fy + 100);
  brush.endShape(true);
  // torso
  brush.beginShape(0.5);
  brush.vertex(fx - 8, fy + 40); brush.vertex(fx + 8, fy + 40); brush.vertex(fx + 6, fy + 90); brush.vertex(fx - 6, fy + 90);
  brush.endShape(true);
  // head
  brush.fill("#2a1a3a", 210);
  brush.beginShape(0.6);
  brush.vertex(fx - 9, fy + 20); brush.vertex(fx + 9, fy + 20); brush.vertex(fx + 7, fy + 40); brush.vertex(fx - 7, fy + 40);
  brush.endShape(true);
  // arm
  brush.fill("#2a1a3a", 210);
  brush.beginShape(0.4);
  brush.vertex(fx + 6, fy + 50); brush.vertex(fx + 20, fy + 30); brush.vertex(fx + 30, fy + 20); brush.vertex(fx + 20, fy + 30);
  brush.endShape(true);
  // shadow on sand
  brush.fill("#5a3a5a", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(fx - 6, fy + 100); brush.vertex(fx + 6, fy + 100); brush.vertex(fx + 10, fy + 120); brush.vertex(fx - 10, fy + 120);
  brush.endShape(true);
}
