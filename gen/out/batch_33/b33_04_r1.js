async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f4");
  randomSeed(44);
  brush.noStroke();
  // sky
  brush.fill("#3a86c0", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 420); brush.vertex(0, 420); brush.endShape(true);
  // steam plume
  brush.fill("#ffffff", 255); brush.fillBleed(0.3);
  brush.beginShape(0.8); brush.vertex(270, 440); brush.vertex(260, 300); brush.vertex(235, 180); brush.vertex(255, 90); brush.vertex(330, 90); brush.vertex(345, 180); brush.vertex(325, 300); brush.vertex(335, 440); brush.endShape(true);
  brush.fill("#a8c4d8", 210);
  brush.beginShape(0.8); brush.vertex(300, 440); brush.vertex(350, 300); brush.vertex(400, 170); brush.vertex(460, 110); brush.vertex(490, 150); brush.vertex(430, 280); brush.vertex(380, 440); brush.endShape(true);
  brush.fill("#6a98b8", 190);
  for (var i = 0; i < 14; i++) brush.circle(random(240, 460), random(80, 300), random(25, 45), 0.7);
  // rock ground
  brush.fill("#3a2e30", 225); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0, 450); brush.vertex(120, 430); brush.vertex(230, 450); brush.vertex(290, 425); brush.vertex(340, 450); brush.vertex(460, 435); brush.vertex(600, 455); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.fill("#14121a", 235);
  brush.beginShape(0.5); brush.vertex(0, 530); brush.vertex(200, 510); brush.vertex(400, 540); brush.vertex(600, 515); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  // pine silhouettes
  [[60,455,36],[100,450,46],[520,455,40],[560,450,52]].forEach(function (t) {
    brush.fill("#0e0e14", 235);
    brush.beginShape(0.2); brush.vertex(t[0], t[1] - t[2] * 3); brush.vertex(t[0] + t[2] * 0.6, t[1]); brush.vertex(t[0] - t[2] * 0.6, t[1]); brush.endShape(true);
  });
  // pool glow
  brush.fill("#18a8b0", 235);
  brush.beginShape(0.6); brush.vertex(230, 470); brush.vertex(300, 455); brush.vertex(380, 470); brush.vertex(330, 495); brush.vertex(260, 495); brush.endShape(true);
}
