async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#faf1e2");
  brush.noStroke();

  // meandering vine
  brush.fill("#8a7a3e", 200);
  brush.fillBleed(0.1);
  brush.fillTexture(0.6, 0.4);
  brush.beginShape(0.9);
  brush.vertex(0, 140); brush.vertex(150, 110); brush.vertex(300, 200); brush.vertex(420, 330); brush.vertex(600, 380);
  brush.vertex(600, 388); brush.vertex(418, 340); brush.vertex(296, 210); brush.vertex(148, 120); brush.vertex(0, 150);
  brush.endShape(true);
  let lf = [[90, 125, -60], [250, 170, 60], [360, 270, -40], [520, 360, 80]];
  for (let q of lf) {
    brush.fill("#a5a150", 180);
    brush.fillBleed(0.3);
    brush.beginShape(0.7);
    brush.vertex(q[0], q[1]);
    brush.vertex(q[0] + cos(q[2] - 30) * 45, q[1] + sin(q[2] - 30) * 45);
    brush.vertex(q[0] + cos(q[2]) * 80, q[1] + sin(q[2]) * 80);
    brush.vertex(q[0] + cos(q[2] + 30) * 45, q[1] + sin(q[2] + 30) * 45);
    brush.endShape(true);
  }

  // bloom one: face-on, four broad sepals, big and loose
  let x1 = 190, y1 = 330;
  for (let k = 0; k < 4; k++) {
    let a = k * 90 + 40;
    brush.fill("#b58ad0", 165);
    brush.fillBleed(0.45);
    brush.fillTexture(0.45, 0.6);
    brush.beginShape(0.9);
    brush.vertex(x1, y1);
    brush.vertex(x1 + cos(a - 30) * 110, y1 + sin(a - 30) * 110);
    brush.vertex(x1 + cos(a) * 160, y1 + sin(a) * 160);
    brush.vertex(x1 + cos(a + 30) * 110, y1 + sin(a + 30) * 110);
    brush.endShape(true);
    brush.fill("#8d5bb4", 195);
    brush.fillBleed(0.3);
    brush.beginShape(0.8);
    brush.vertex(x1, y1);
    brush.vertex(x1 + cos(a - 8) * 110, y1 + sin(a - 8) * 110);
    brush.vertex(x1 + cos(a) * 140, y1 + sin(a) * 140);
    brush.vertex(x1 + cos(a + 8) * 110, y1 + sin(a + 8) * 110);
    brush.endShape(true);
  }
  brush.fill("#f0cf72", 220);
  brush.fillBleed(0.2);
  brush.circle(x1, y1, 24, true);
  brush.fill("#c98a3a", 200);
  brush.circle(x1, y1, 10, true);

  // bloom two: seen from the side, drooping bell of sepals
  let x2 = 440, y2 = 470;
  let sides = [[-50, "#b58ad0"], [-18, "#9d6fc4"], [18, "#a57ac8"], [50, "#b58ad0"]];
  for (let s of sides) {
    brush.fill(s[1], 190);
    brush.fillBleed(0.35);
    brush.fillTexture(0.5, 0.55);
    brush.beginShape(0.85);
    brush.vertex(x2, y2 - 60);
    brush.vertex(x2 + s[0] * 0.6 - 20, y2);
    brush.vertex(x2 + s[0] * 1.6, y2 + 80);
    brush.vertex(x2 + s[0] * 0.6 + 20, y2 + 5);
    brush.endShape(true);
  }
  brush.fill("#8a7a3e", 210);
  brush.beginShape(0.6);
  brush.vertex(418, 340); brush.vertex(436, 412); brush.vertex(446, 410); brush.vertex(428, 338);
  brush.endShape(true);
}
