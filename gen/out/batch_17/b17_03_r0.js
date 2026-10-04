async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe6d4");
  randomSeed(3);
  brush.noStroke();
  // overcast sky
  brush.fill("#b7ab95", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 200);
  brush.vertex(-20, 210);
  brush.endShape(true);
  // far headland
  brush.fill("#8a8a78", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(330, 205);
  brush.vertex(420, 180);
  brush.vertex(520, 188);
  brush.vertex(620, 175);
  brush.vertex(620, 215);
  brush.vertex(330, 215);
  brush.endShape(true);
  // sea: a channel narrowing into distance
  brush.fill("#6f8a86", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 205);
  brush.vertex(620, 210);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#4e6b69", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(200, 330);
  brush.vertex(420, 320);
  brush.vertex(620, 420);
  brush.vertex(620, 620);
  brush.vertex(150, 620);
  brush.endShape(true);
  // left cliffs receding
  brush.fill("#8b6b4a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 150);
  brush.vertex(80, 170);
  brush.vertex(190, 210);
  brush.vertex(260, 240);
  brush.vertex(200, 330);
  brush.vertex(110, 470);
  brush.vertex(60, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#5a4533", 220);
  brush.fillBleed(0.15);
  brush.beginShape(0.2);
  brush.vertex(-20, 260);
  brush.vertex(90, 280);
  brush.vertex(150, 360);
  brush.vertex(90, 450);
  brush.vertex(40, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // scattered rocks in foreground surf
  let rocks = [[250, 520, 40], [330, 470, 26], [390, 560, 50], [520, 500, 34], [300, 390, 18], [360, 350, 12]];
  for (let r of rocks) {
    brush.fill("#6b5840", 220);
    brush.fillBleed(0.15);
    brush.circle(r[0], r[1], r[2], 0.45);
    brush.fill("#3e3226", 200);
    brush.circle(r[0] + r[2] * 0.2, r[1] + r[2] * 0.25, r[2] * 0.6, 0.4);
  }
  // wave foam lines: leave paper by painting darker troughs
  for (let i = 0; i < 6; i++) {
    let y = 280 + i * 55;
    brush.fill("#3f5a5a", 150);
    brush.fillBleed(0.2);
    brush.beginShape(0.8);
    brush.vertex(180 + i * 10, y);
    brush.vertex(400, y - 10 + i * 4);
    brush.vertex(620, y + 5);
    brush.vertex(620, y + 18);
    brush.vertex(400, y + 10 + i * 4);
    brush.vertex(180 + i * 10, y + 16);
    brush.endShape(true);
  }
}
