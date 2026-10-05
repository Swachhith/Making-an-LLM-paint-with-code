async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4ee");
  randomSeed(121);
  brush.noStroke();
  // pale sky
  brush.fill("#a8d4ea", 180); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 450); brush.vertex(0, 450); brush.endShape(true);
  // stream bank + stream
  brush.fill("#5a8a2a", 200);
  brush.beginShape(0.5); brush.vertex(0, 430); brush.vertex(600, 420); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.fill("#2a78c8", 210); brush.fillBleed(0.3);
  brush.beginShape(0.8); brush.vertex(0, 520); brush.vertex(200, 490); brush.vertex(420, 530); brush.vertex(600, 500); brush.vertex(600, 580); brush.vertex(380, 600); brush.vertex(0, 600); brush.endShape(true);
  // trunk
  brush.fill("#4a2a1a", 225);
  brush.beginShape(0.3); brush.vertex(285, 500); brush.vertex(325, 500); brush.vertex(322, 330); brush.vertex(290, 330); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(300, 360); brush.vertex(190, 250); brush.vertex(210, 225); brush.vertex(310, 320); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(310, 360); brush.vertex(420, 240); brush.vertex(440, 262); brush.vertex(320, 380); brush.endShape(true);
  // crown layers
  brush.fill("#e83a18", 180); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.circle(305, 190, 130, 0.8);
  brush.circle(190, 240, 80, 0.8); brush.circle(430, 240, 85, 0.8);
  brush.fill("#c81830", 200);
  brush.circle(290, 170, 85, 0.8); brush.circle(380, 230, 60, 0.8); brush.circle(220, 230, 55, 0.8);
  brush.fill("#f08a20", 190);
  brush.circle(340, 130, 50, 0.8); brush.circle(250, 120, 42, 0.8);
  brush.fill("#8a1020", 190);
  for (var i = 0; i < 12; i++) brush.circle(random(190, 430), random(140, 280), random(12, 22), 0.7);
  // fallen leaves
  brush.fill("#e83a18", 210);
  for (var j = 0; j < 14; j++) brush.circle(random(100, 520), random(450, 520), random(6, 11), 0.5);
}
