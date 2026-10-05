async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7eddc");
  brush.noStroke();
  brush.fill("#ff8a10", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 320); brush.vertex(-10, 320); brush.endShape(true);
  brush.fill("#e0104a", 200);
  brush.beginShape(0.5); brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 120); brush.vertex(300, 170); brush.vertex(-10, 130); brush.endShape(true);
  brush.fill("#9a10a0", 150);
  brush.beginShape(0.5); brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 50); brush.vertex(-10, 60); brush.endShape(true);
  brush.fill("#ffe030", 230); brush.circle(420, 300, 56, 0.4);
  brush.fill("#ff5a10", 130); brush.circle(420, 300, 90, 0.7);
  brush.fill("#0a50c0", 225); brush.fillBleed(0.25);
  brush.beginShape(0.4); brush.vertex(-10, 320); brush.vertex(610, 320); brush.vertex(610, 410); brush.vertex(-10, 415); brush.endShape(true);
  brush.fill("#08908a", 200);
  brush.beginShape(0.4); brush.vertex(-10, 380); brush.vertex(610, 372); brush.vertex(610, 420); brush.vertex(-10, 425); brush.endShape(true);
  brush.fill("#ffc830", 190);
  brush.beginShape(0.4); brush.vertex(385, 324); brush.vertex(455, 324); brush.vertex(500, 410); brush.vertex(340, 410); brush.endShape(true);
  brush.fill("#e89040", 230);
  brush.beginShape(0.4); brush.vertex(-10, 415); brush.vertex(610, 408); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.fill("#b04a28", 190);
  brush.beginShape(0.4); brush.vertex(-10, 530); brush.vertex(300, 515); brush.vertex(610, 525); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  // wet sand sheen
  brush.fill("#6ab0e0", 140);
  brush.beginShape(0.5); brush.vertex(-10, 430); brush.vertex(610, 424); brush.vertex(610, 450); brush.vertex(-10, 456); brush.endShape(true);
  // runner mid-stride
  brush.fill("#0c0c2e", 235); brush.fillBleed(0.1);
  brush.circle(250, 440, 7, 0.3);
  brush.beginShape(0.3); brush.vertex(242, 448); brush.vertex(258, 448); brush.vertex(254, 474); brush.vertex(242, 474); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(244, 472); brush.vertex(256, 472); brush.vertex(272, 490); brush.vertex(258, 494); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(240, 472); brush.vertex(252, 472); brush.vertex(236, 496); brush.vertex(224, 490); brush.endShape(true);
  brush.fill("#e0104a", 200); brush.circle(250, 458, 7, 0.4);
  brush.fill("#0c0c2e", 150);
  brush.beginShape(0.5); brush.vertex(215, 498); brush.vertex(300, 500); brush.vertex(292, 508); brush.vertex(222, 507); brush.endShape(true);
}
