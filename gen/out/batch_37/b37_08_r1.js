async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#080c20");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#2e3c9a", 215);
  brush.beginShape(0.4);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 470); brush.vertex(-40, 470);
  brush.endShape(true);
  brush.fill("#6a52c0", 190);
  brush.beginShape(0.8);
  brush.vertex(-40, 230); brush.vertex(640, 190); brush.vertex(640, 480); brush.vertex(-40, 480);
  brush.endShape(true);
  brush.fill("#e89a50", 190);
  brush.beginShape(0.8);
  brush.vertex(-40, 370); brush.vertex(640, 350); brush.vertex(640, 480); brush.vertex(-40, 480);
  brush.endShape(true);
  brush.fill("#f6e8a8", 170);
  brush.beginShape(0.8);
  brush.vertex(-40, 430); brush.vertex(640, 420); brush.vertex(640, 480); brush.vertex(-40, 480);
  brush.endShape(true);
  brush.fill("#f2e0a0", 160);
  brush.beginShape(0.6);
  brush.vertex(410, 215); brush.vertex(640, 90); brush.vertex(640, 300); brush.vertex(410, 240);
  brush.endShape(true);
  brush.fill("#fff4c8", 170);
  brush.beginShape(0.6);
  brush.vertex(410, 220); brush.vertex(640, 170); brush.vertex(640, 250); brush.vertex(410, 236);
  brush.endShape(true);
  brush.fill("#f2e0a0", 130);
  brush.beginShape(0.6);
  brush.vertex(400, 225); brush.vertex(-40, 120); brush.vertex(-40, 320); brush.vertex(400, 240);
  brush.endShape(true);
  brush.fill("#04060e", 245);
  brush.beginShape(0.8);
  brush.vertex(-40, 520); brush.vertex(120, 490); brush.vertex(300, 500); brush.vertex(420, 470); brush.vertex(520, 480); brush.vertex(640, 500); brush.vertex(640, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#161830", 240);
  brush.beginShape(0.3);
  brush.vertex(375, 490); brush.vertex(398, 250); brush.vertex(422, 250); brush.vertex(446, 490);
  brush.endShape(true);
  brush.fill("#d83a28", 235);
  brush.beginShape(0.3);
  brush.vertex(390, 330); brush.vertex(430, 330); brush.vertex(435, 370); brush.vertex(386, 370);
  brush.endShape(true);
  brush.fill("#ffe9a0", 255);
  brush.beginShape(0.3);
  brush.vertex(392, 214); brush.vertex(428, 214); brush.vertex(428, 250); brush.vertex(392, 250);
  brush.endShape(true);
  for (let i = 0; i < 40; i++) {
    brush.fill("#f4f0d0", 230);
    brush.circle((i * 83) % 620, 15 + (i * 47) % 190, 1.5 + (i % 3), 0.5);
  }
}
