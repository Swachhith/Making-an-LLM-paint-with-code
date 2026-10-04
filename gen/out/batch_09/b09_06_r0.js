async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f7fa");
  brush.noStroke();

  // grey-blue winter wash behind, splashy
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.5);
  brush.fill("#8aa4c0", 180);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#b08ab8", 140);
  brush.circle(480, 80, 70, 0.9);

  // pines behind the cabin
  let pines = [[40, 330, 60], [130, 300, 50], [540, 310, 65], [600, 340, 50], [470, 290, 40]];
  for (let p of pines) {
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.fill("#1e4a48", 210);
    brush.beginShape(0.2);
    brush.vertex(p[0], p[1] - 250); brush.vertex(p[0] + p[2], p[1]); brush.vertex(p[0] - p[2], p[1]);
    brush.endShape(true);
    brush.fill("#0e2e30", 170);
    brush.beginShape(0.3);
    brush.vertex(p[0], p[1] - 220); brush.vertex(p[0] + p[2] * 0.6, p[1]); brush.vertex(p[0], p[1]);
    brush.endShape(true);
  }

  // cabin log walls, warm brown with drips below
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.fill("#8a4a24", 220);
  brush.beginShape(0.1);
  brush.vertex(90, 280); brush.vertex(510, 280); brush.vertex(510, 470); brush.vertex(90, 470);
  brush.endShape(true);
  brush.fill("#5a2a14", 180);
  for (let y = 300; y < 470; y += 34) {
    brush.beginShape(0.3);
    brush.vertex(90, y); brush.vertex(510, y + 3); brush.vertex(510, y + 17); brush.vertex(90, y + 15);
    brush.endShape(true);
  }
  // drips
  brush.fill("#6a3218", 190);
  for (let dx of [130, 210, 330, 440, 490]) {
    let len = 20 + (dx % 45);
    brush.beginShape(0.6);
    brush.vertex(dx - 8, 465); brush.vertex(dx + 8, 465); brush.vertex(dx + 5, 480 + len); brush.vertex(dx - 5, 480 + len);
    brush.endShape(true);
    brush.circle(dx, 483 + len, 8, 0.3);
  }

  // blue shadow under snowy roof (roof itself left as paper)
  brush.fill("#5a78a8", 200);
  brush.beginShape(0.3);
  brush.vertex(80, 280); brush.vertex(520, 280); brush.vertex(510, 305); brush.vertex(90, 305);
  brush.endShape(true);
  // roof edge shadow line above snow
  brush.fill("#9ab0d0", 170);
  brush.beginShape(0.4);
  brush.vertex(60, 270); brush.vertex(300, 140); brush.vertex(540, 270); brush.vertex(520, 280); brush.vertex(300, 160); brush.vertex(80, 280);
  brush.endShape(true);

  // glowing windows
  brush.fillBleed(0.3);
  brush.fill("#ffb030", 230);
  brush.beginShape(0.1);
  brush.vertex(140, 340); brush.vertex(220, 340); brush.vertex(220, 410); brush.vertex(140, 410);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(380, 340); brush.vertex(460, 340); brush.vertex(460, 410); brush.vertex(380, 410);
  brush.endShape(true);
  brush.fill("#e0601a", 170);
  brush.circle(180, 375, 20, 0.6);
  brush.circle(420, 375, 20, 0.6);
  // door
  brush.fill("#3a1a0e", 220);
  brush.beginShape(0.1);
  brush.vertex(270, 360); brush.vertex(330, 360); brush.vertex(330, 470); brush.vertex(270, 470);
  brush.endShape(true);

  // snow shadows in foreground
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.fill("#a8bcd8", 180);
  brush.beginShape(0.6);
  brush.vertex(-20, 500); brush.vertex(200, 530); brush.vertex(420, 510); brush.vertex(620, 540);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#7a90c0", 150);
  brush.circle(120, 580, 40, 0.8);
}
