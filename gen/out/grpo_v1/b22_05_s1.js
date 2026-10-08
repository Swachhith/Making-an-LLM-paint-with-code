async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0a1422");
  brush.noStroke();
  // indigo sky, deeper at the top
  brush.fill("#1a2a4a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(420, 250); brush.vertex(300, 200); brush.vertex(220, 260); brush.vertex(-20, 220);
  brush.endShape(true);
  // teal lower sky
  brush.fill("#1f6f8a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 250); brush.vertex(620, 230); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // pine trees, left side
  let trees = [[20, 360, 60, 220], [70, 330, 50, 250], [140, 340, 70, 240], [220, 300, 80, 280], [300, 310, 60, 270], [380, 330, 50, 250], [460, 350, 60, 230], [540, 340, 70, 240]];
  for (let t of trees) {
    brush.fill("#123a5a", 215);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(t[0], t[3]);
    brush.vertex(t[0] + 12, t[3] - t[2]);
    brush.vertex(t[0] + 28, t[3] - t[2] * 0.6);
    brush.vertex(t[0] + 44, t[3] - t[2] * 0.8);
    brush.vertex(t[0] + 60, t[3] - t[2] * 0.6);
    brush.vertex(t[0] + 72, t[3] - t[2]);
    brush.vertex(t[0] + 60, t[3]);
    brush.endShape(true);
    brush.beginShape(0.4);
    brush.vertex(t[0] + 60, t[3]);
    brush.vertex(t[0] + 44, t[3] - t[2] * 0.8);
    brush.vertex(t[0] + 28, t[3] - t[2] * 0.6);
    brush.vertex(t[0] + 12, t[3] - t[2]);
    brush.vertex(t[0], t[3]);
    brush.endShape(true);
  }
  // a few stars
  for (let i = 0; i < 30; i++) {
    brush.fill("#eef2f8", 220);
    brush.fillBleed(0.1);
    brush.fillTexture(0.2, 0.2);
    brush.circle(random(-10, 610), random(-10, 610), random(1, 2.5), 0.2);
  }
  // crescent moon, large and off-centre
  brush.fill("#f6efe2", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(430, 150, 70, 0.4);
  brush.fill("#e8e8e8", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(430, 150);
  brush.vertex(490, 145);
  brush.vertex(485, 205);
  brush.vertex(425, 210);
  brush.vertex(430, 150);
  brush.endShape(true);
  // silhouettes of pine tips against the moon
  brush.fill("#050a12", 250);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(420, 145); brush.vertex(450, 120); brush.vertex(465, 150); brush.vertex(440, 165);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(445, 150); brush.vertex(470, 130); brush.vertex(480, 155); brush.vertex(465, 165);
  brush.endShape(true);
}
