async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece5d2");
  brush.noStroke();
  // misty sky: pale lilac over a soft blue
  brush.fill("#b9b8d2", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(300, 230); brush.vertex(-20, 210);
  brush.endShape(true);
  brush.fill("#9aa6d4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 210); brush.vertex(620, 210); brush.vertex(620, 360); brush.vertex(-20, 370);
  brush.endShape(true);
  // far shore: a low, pale green hill
  brush.fill("#8fb5a2", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 370); brush.vertex(200, 350); brush.vertex(420, 375); brush.vertex(620, 360); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // near shore: a dark-green bank
  brush.fill("#4a7a5a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(200, 440); brush.vertex(420, 470); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // the lake: a soft teal, lighter near the far shore
  brush.fill("#86a8b0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 370); brush.vertex(620, 360); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // reeds: tall, narrow, soft
  const reeds = [[30, 470], [80, 470], [150, 470], [210, 470], [270, 470], [330, 470], [390, 470], [450, 470], [510, 470], [570, 470]];
  for (const r of reeds) {
    brush.fill("#5f8a6a", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.2);
    brush.vertex(r[0] - 9, 470); brush.vertex(r[0] + 9, 470); brush.vertex(r[0] + 5, 300); brush.vertex(r[0] - 5, 300);
    brush.endShape(true);
    brush.fill("#3a5a44", 170);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.2);
    brush.vertex(r[0] - 12, 470); brush.vertex(r[0] + 12, 470); brush.vertex(r[0] + 3, 220); brush.vertex(r[0] - 3, 220);
    brush.endShape(true);
  }
  // a few reflections of the reeds in the water
  for (const r of reeds) {
    brush.fill("#5f8a6a", 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(r[0] - 9, 560); brush.vertex(r[0] + 9, 560); brush.vertex(r[0] + 5, 510); brush.vertex(r[0] - 5, 510);
    brush.endShape(true);
  }
  // a lone white lotus on the near shore
  brush.fill("#f2e8d4", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(230, 530); brush.vertex(260, 530); brush.vertex(245, 480); brush.vertex(230, 480); brush.vertex(215, 530);
  brush.endShape(true);
  brush.fill("#e8d8c8", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(245, 530); brush.vertex(275, 530); brush.vertex(260, 480); brush.vertex(245, 480); brush.vertex(230, 530);
  brush.endShape(true);
  brush.fill("#d0b8a0", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(235, 530); brush.vertex(255, 530); brush.vertex(245, 500); brush.vertex(235, 510);
  brush.endShape(true);
  brush.fill("#b8a080", 170);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(245, 530); brush.vertex(265, 530); brush.vertex(255, 500); brush.vertex(245, 510);
  brush.endShape(true);
}
