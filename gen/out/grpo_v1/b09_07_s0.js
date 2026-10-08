async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf5e6");
  brush.noStroke();
  // sky: bold cerulean
  brush.fill("#2a7fbf", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(400, 220); brush.vertex(200, 210); brush.vertex(-20, 230);
  brush.endShape(true);
  // sun
  brush.fill("#ffd83a", 250);
  brush.fillBleed(0.15);
  brush.fillTexture(0.2, 0.2);
  brush.circle(480, 110, 45, 0.2);
  // far ridge: purple-violet
  brush.fill("#7a3fa8", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 220); brush.vertex(150, 190); brush.vertex(300, 210); brush.vertex(470, 180); brush.vertex(620, 220); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // near ridges: magenta
  brush.fill("#c8204a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 230); brush.vertex(220, 200); brush.vertex(400, 230); brush.vertex(620, 215); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // valley floor: burnt orange
  brush.fill("#d95a1f", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 240); brush.vertex(620, 240); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // foreground trees: dark green, tall
  let trees = [[50, 420, 50, 150], [130, 450, 35, 120], [210, 410, 60, 180], [290, 430, 40, 140], [370, 400, 55, 170], [450, 420, 45, 150], [530, 440, 30, 130], [600, 420, 50, 160]];
  for (let t of trees) {
    brush.fill("#1a3a2a", 230);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(t[0], t[3]); brush.vertex(t[0] + 10, t[3] - t[2]); brush.vertex(t[0] + 20, t[3] - t[2] - 10); brush.vertex(t[0] + 25, t[3]);
    brush.vertex(t[0] + 25, t[3] + t[2] + 10); brush.vertex(t[0] + 15, t[3] + t[2]);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(t[0] - 10, t[3]); brush.vertex(t[0] - 20, t[3] - t[2]); brush.vertex(t[0] - 30, t[3] - t[2] - 10); brush.vertex(t[0] - 35, t[3]);
    brush.vertex(t[0] - 35, t[3] + t[2] + 10); brush.vertex(t[0] - 25, t[3] + t[2]);
    brush.endShape(true);
  }
  // autumn meadow: strokes of crimson and gold
  brush.fill("#c8102e", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(120, 470); brush.vertex(160, 430); brush.vertex(220, 480); brush.vertex(260, 450); brush.vertex(320, 490); brush.vertex(360, 460); brush.vertex(420, 500); brush.vertex(460, 470); brush.vertex(520, 490); brush.vertex(560, 460); brush.vertex(620, 480); brush.vertex(620, 620); brush.vertex(-20, 620); brush.vertex(-20, 480);
  brush.endShape(true);
  brush.fill("#f0a010", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(300, 470); brush.vertex(340, 440); brush.vertex(380, 460); brush.vertex(420, 430); brush.vertex(460, 450); brush.vertex(500, 420); brush.vertex(540, 440); brush.vertex(580, 460); brush.vertex(620, 440); brush.vertex(620, 620); brush.vertex(-20, 620); brush.vertex(-20, 460);
  brush.endShape(true);
  // path
  brush.fill("#5a3a2a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(150, 530); brush.vertex(200, 530); brush.vertex(200, 580); brush.vertex(150, 580);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(300, 530); brush.vertex(350, 530); brush.vertex(350, 580); brush.vertex(300, 580);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(450, 530); brush.vertex(500, 530); brush.vertex(500, 580); brush.vertex(450, 580);
  brush.endShape(true);
  // blueberries
  brush.fill("#2a3a8a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(220, 440, 3, 0.3);
  brush.circle(225, 445, 3, 0.3);
  brush.circle(230, 440, 3, 0.3);
  brush.circle(340, 455, 3, 0.3);
  brush.circle(345, 460, 3, 0.3);
  brush.circle(350, 455, 3, 0.3);
  brush.circle(450, 465, 3, 0.3);
  brush.circle(455, 470, 3, 0.3);
  brush.circle(460, 465, 3, 0.3);
}
