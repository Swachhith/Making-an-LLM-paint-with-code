async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ebe6f6");
  brush.noStroke();
  // dawn sky: deep blue top fading to violet and a pink band at horizon
  brush.fill("#1c2290", 225); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 330); brush.vertex(-10, 330);
  brush.endShape(true);
  brush.fill("#6a30b0", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, 180); brush.vertex(610, 170); brush.vertex(610, 370); brush.vertex(-10, 370);
  brush.endShape(true);
  brush.fill("#f0a0c0", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-10, 300); brush.vertex(300, 285); brush.vertex(610, 300); brush.vertex(610, 380); brush.vertex(-10, 380);
  brush.endShape(true);
  // low sun
  brush.fill("#ffe0b0", 235); brush.fillBleed(0.15); brush.fillTexture(0.2, 0.2);
  brush.circle(130, 330, 30, 0.1);
  // water
  brush.fill("#161a74", 230); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-10, 372); brush.vertex(610, 372); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#f0a0c0", 170); brush.fillBleed(0.35); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(80, 380); brush.vertex(190, 380); brush.vertex(210, 450); brush.vertex(100, 470);
  brush.endShape(true);
  brush.fill("#6a30b0", 160); brush.beginShape(0.9);
  brush.vertex(40, 480); brush.vertex(330, 475); brush.vertex(300, 540); brush.vertex(60, 545);
  brush.endShape(true);
  // fisherman: wide-stance figure, off-centre right, thigh-deep
  brush.fill("#0c0a38", 245); brush.fillBleed(0.15); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(418, 470); brush.vertex(428, 410); brush.vertex(432, 335); brush.vertex(470, 335); brush.vertex(476, 410); brush.vertex(490, 470);
  brush.endShape(true);
  brush.circle(452, 310, 14, 0.3);
  // hat
  brush.beginShape(0.3);
  brush.vertex(428, 300); brush.vertex(452, 282); brush.vertex(478, 300); brush.vertex(452, 304);
  brush.endShape(true);
  // casting arm out toward the sun
  brush.beginShape(0.4);
  brush.vertex(436, 350); brush.vertex(405, 335); brush.vertex(350, 325); brush.vertex(348, 350); brush.vertex(405, 372); brush.vertex(440, 380);
  brush.endShape(true);
  // net: a wide pale-lilac arc thrown in the air
  brush.fill("#c8a8f0", 170); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.9);
  brush.vertex(350, 325); brush.vertex(290, 260); brush.vertex(200, 250); brush.vertex(185, 300); brush.vertex(260, 335); brush.vertex(345, 350);
  brush.endShape(true);
  brush.fill("#3a2a98", 150); brush.beginShape(0.9);
  brush.vertex(300, 290); brush.vertex(235, 280); brush.vertex(230, 310); brush.vertex(290, 320);
  brush.endShape(true);
  // reflection
  brush.fill("#0c0a38", 170); brush.fillBleed(0.35); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(420, 480); brush.vertex(490, 480); brush.vertex(478, 580); brush.vertex(432, 580);
  brush.endShape(true);
}
