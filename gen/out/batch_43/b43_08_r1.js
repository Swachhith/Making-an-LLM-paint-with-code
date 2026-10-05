async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3e0");
  brush.noStroke();
  // wide sky, cobalt over warm yellow near horizon
  brush.fill("#1f7ee0", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 360); brush.vertex(-10, 360);
  brush.endShape(true);
  brush.fill("#ffc830", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, 280); brush.vertex(610, 260); brush.vertex(610, 400); brush.vertex(-10, 400);
  brush.endShape(true);
  // clouds left as paper
  brush.fill("#fffaf0", 245); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.circle(110, 110, 46, 0.8); brush.circle(165, 98, 38, 0.8); brush.circle(60, 125, 32, 0.8);
  brush.circle(300, 190, 28, 0.8); brush.circle(340, 180, 22, 0.8);
  // street
  brush.fill("#3b3070", 215); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 505); brush.vertex(610, 495); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // corner building, right of centre, tall facade
  brush.fill("#e0243a", 230); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(330, 510); brush.vertex(330, 250); brush.vertex(600, 250); brush.vertex(600, 510);
  brush.endShape(true);
  brush.fill("#8a1030", 210); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(330, 250); brush.vertex(345, 215); brush.vertex(585, 215); brush.vertex(600, 250);
  brush.endShape(true);
  // awning: green / cream stripes angled
  for (let i = 0; i < 5; i++) {
    brush.fill(i % 2 ? "#fff0cc" : "#0e8a48", 240); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(325 + i * 55, 318); brush.vertex(380 + i * 55, 318); brush.vertex(388 + i * 55, 385); brush.vertex(314 + i * 55, 385);
    brush.endShape(true);
  }
  // shop window glowing, door deep blue
  brush.fill("#ffb82a", 235); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(355, 410); brush.vertex(355, 495); brush.vertex(455, 495); brush.vertex(455, 410);
  brush.endShape(true);
  brush.fill("#14288a", 240); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(490, 505); brush.vertex(490, 410); brush.vertex(565, 410); brush.vertex(565, 505);
  brush.endShape(true);
  // upstairs windows
  for (let i = 0; i < 3; i++) {
    brush.fill("#14288a", 220); brush.fillBleed(0.2);
    brush.beginShape(0.3);
    brush.vertex(360 + i * 80, 235); brush.vertex(360 + i * 80, 295); brush.vertex(405 + i * 80, 295); brush.vertex(405 + i * 80, 235);
    brush.endShape(true);
  }
  // bistro tables and a tree in the left foreground
  brush.fill("#1a1048", 235); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.circle(180, 525, 34, 0.4); brush.circle(265, 540, 34, 0.4);
  brush.beginShape(0.4);
  brush.vertex(50, 520); brush.vertex(80, 520); brush.vertex(76, 400); brush.vertex(56, 400);
  brush.endShape(true);
  brush.fill("#18a040", 225); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.circle(66, 385, 80, 0.8);
  brush.fill("#0a6a2a", 200); brush.circle(80, 400, 50, 0.8);
}
