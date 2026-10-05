async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#060a1c");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#243498", 220);
  brush.beginShape(0.4);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 460); brush.vertex(-40, 460);
  brush.endShape(true);
  brush.fill("#7a4ac0", 180);
  brush.beginShape(0.8);
  brush.vertex(-40, 180); brush.vertex(640, 260); brush.vertex(640, 470); brush.vertex(-40, 470);
  brush.endShape(true);
  brush.fill("#d86a48", 180);
  brush.beginShape(0.8);
  brush.vertex(-40, 340); brush.vertex(640, 360); brush.vertex(640, 480); brush.vertex(-40, 480);
  brush.endShape(true);
  brush.fill("#f8d890", 190);
  brush.beginShape(0.8);
  brush.vertex(-40, 420); brush.vertex(640, 430); brush.vertex(640, 485); brush.vertex(-40, 485);
  brush.endShape(true);
  for (let i = 0; i < 3; i++) {
    brush.fill(i === 2 ? "#fff6cc" : "#f8e6a0", 140 + i * 40);
    brush.beginShape(0.5);
    brush.vertex(190, 205 + i * 4); brush.vertex(640, 70 + i * 50); brush.vertex(640, 250 - i * 20); brush.vertex(190, 225 - i * 2);
    brush.endShape(true);
  }
  brush.fill("#f8e6a0", 120);
  brush.beginShape(0.6);
  brush.vertex(180, 215); brush.vertex(-40, 330); brush.vertex(-40, 240); brush.vertex(180, 205);
  brush.endShape(true);
  brush.fill("#04060e", 245);
  brush.beginShape(0.8);
  brush.vertex(-40, 525); brush.vertex(120, 500); brush.vertex(230, 510); brush.vertex(300, 485); brush.vertex(420, 505); brush.vertex(640, 490); brush.vertex(640, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#1c1c3c", 240);
  brush.beginShape(0.3);
  brush.vertex(150, 500); brush.vertex(168, 240); brush.vertex(200, 240); brush.vertex(222, 500);
  brush.endShape(true);
  brush.fill("#e03a28", 235);
  brush.beginShape(0.3);
  brush.vertex(160, 320); brush.vertex(208, 320); brush.vertex(214, 365); brush.vertex(155, 365);
  brush.endShape(true);
  brush.fill("#ffeaa8", 255);
  brush.beginShape(0.3);
  brush.vertex(165, 200); brush.vertex(205, 200); brush.vertex(205, 242); brush.vertex(165, 242);
  brush.endShape(true);
  for (let i = 0; i < 50; i++) {
    brush.fill("#f4f0d0", 230);
    brush.circle((i * 97) % 620, 12 + (i * 41) % 170, 1.5 + (i % 3), 0.5);
  }
}
