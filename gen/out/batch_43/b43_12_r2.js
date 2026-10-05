async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6e0f4");
  brush.noStroke();
  brush.fill("#12187c", 235); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 330); brush.vertex(-10, 330);
  brush.endShape(true);
  brush.fill("#5a24a8", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, 170); brush.vertex(610, 160); brush.vertex(610, 360); brush.vertex(-10, 360);
  brush.endShape(true);
  brush.fill("#e87aa8", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-10, 280); brush.vertex(300, 265); brush.vertex(610, 285); brush.vertex(610, 380); brush.vertex(-10, 380);
  brush.endShape(true);
  brush.fill("#ffd0a0", 215); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.circle(110, 340, 100, 0.4);
  brush.fill("#fff0d0", 245); brush.fillBleed(0.1); brush.fillTexture(0.2, 0.2);
  brush.circle(110, 345, 34, 0.1);
  // far shore silhouette
  brush.fill("#2a1a78", 225); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-10, 372); brush.vertex(200, 358); brush.vertex(420, 366); brush.vertex(610, 352); brush.vertex(610, 392); brush.vertex(-10, 392);
  brush.endShape(true);
  // water with golden dawn track
  brush.fill("#12186e", 235); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-10, 385); brush.vertex(610, 385); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#f0a070", 200); brush.fillBleed(0.35); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(60, 395); brush.vertex(170, 395); brush.vertex(200, 470); brush.vertex(150, 560); brush.vertex(80, 480);
  brush.endShape(true);
  brush.fill("#8a40c0", 170); brush.fillBleed(0.35); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(220, 440); brush.vertex(400, 430); brush.vertex(380, 500); brush.vertex(240, 510);
  brush.endShape(true);
  // fisherman, strong dark mass on the right, big enough to read
  brush.fill("#08062e", 252); brush.fillBleed(0.12); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(425, 480); brush.vertex(433, 410); brush.vertex(435, 330); brush.vertex(480, 330); brush.vertex(486, 410); brush.vertex(498, 480);
  brush.endShape(true);
  brush.circle(458, 306, 16, 0.3);
  brush.beginShape(0.3);
  brush.vertex(432, 298); brush.vertex(458, 276); brush.vertex(486, 298); brush.vertex(458, 303);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(440, 350); brush.vertex(400, 330); brush.vertex(345, 315); brush.vertex(340, 345); brush.vertex(400, 372); brush.vertex(445, 385);
  brush.endShape(true);
  // net in the air, translucent with dark knots
  brush.fill("#d8b8f8", 190); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.9);
  brush.vertex(345, 318); brush.vertex(290, 240); brush.vertex(190, 225); brush.vertex(170, 285); brush.vertex(250, 335); brush.vertex(342, 350);
  brush.endShape(true);
  brush.fill("#4a2ca0", 200); brush.fillBleed(0.25); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.9);
  brush.vertex(300, 270); brush.vertex(230, 260); brush.vertex(215, 295); brush.vertex(285, 320);
  brush.endShape(true);
  for (let k = 0; k < 7; k++) brush.circle(190 + k * 22, 300 - (k % 3) * 18, 5, 0.4);
  // reflection
  brush.fill("#08062e", 190); brush.fillBleed(0.35); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(428, 492); brush.vertex(498, 492); brush.vertex(485, 590); brush.vertex(440, 590);
  brush.endShape(true);
}
