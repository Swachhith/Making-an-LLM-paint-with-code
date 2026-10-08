async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f5f7");
  brush.noStroke();
  // cool blue-grey ground wash
  brush.fill("#a8b8c4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // stems
  brush.fill("#5a7a6a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(230, 320); brush.vertex(236, 620); brush.vertex(226, 620); brush.vertex(220, 320);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(440, 280); brush.vertex(446, 620); brush.vertex(436, 620); brush.vertex(430, 280);
  brush.endShape(true);
  // open poppy, pale petals
  let cx = 230, cy = 320;
  let cols = 6;
  for (let i = 0; i < cols; i++) {
    let a = i * 60 + 15;
    let len = 140;
    brush.fill("#eef3f7", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.7);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 22) * len * 0.7, cy + sin(a - 22) * len * 0.7);
    brush.vertex(cx + cos(a - 12) * len, cy + sin(a - 12) * len);
    brush.vertex(cx + cos(a + 12) * len, cy + sin(a + 12) * len);
    brush.vertex(cx + cos(a + 22) * len * 0.7, cy + sin(a + 22) * len * 0.7);
    brush.endShape(true);
    // darker vein
    brush.fill("#cfdde8", 170);
    brush.fillBleed(0.2);
    brush.beginShape(0.5);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 5) * len * 0.55, cy + sin(a - 5) * len * 0.55);
    brush.vertex(cx + cos(a + 5) * len * 0.55, cy + sin(a + 5) * len * 0.55);
    brush.endShape(true);
  }
  brush.fill("#b8c8d4", 220);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 32, 0.3);
  // closed bud
  brush.fill("#d9e4ee", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(440, 280); brush.vertex(460, 260); brush.vertex(480, 280); brush.vertex(462, 300);
  brush.endShape(true);
  brush.fill("#cfdde8", 190);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(448, 270); brush.vertex(456, 252); brush.vertex(464, 270); brush.vertex(456, 286);
  brush.endShape(true);
  // leaves
  brush.fill("#7aa38a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(230, 450); brush.vertex(260, 470); brush.vertex(250, 490); brush.vertex(220, 480);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(430, 400); brush.vertex(460, 420); brush.vertex(450, 440); brush.vertex(420, 430);
  brush.endShape(true);
  // soft blue shadow behind
  brush.fill("#8aa0b0", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(200, 300); brush.vertex(290, 300); brush.vertex(290, 350); brush.vertex(200, 350);
  brush.endShape(true);
}
