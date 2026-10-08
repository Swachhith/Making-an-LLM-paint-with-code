async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f6");
  randomSeed(2107);
  brush.noStroke();

  // cool light: a soft blue-grey wash across the upper left
  brush.fill("#b7c3d8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 220); brush.vertex(420, 260); brush.vertex(0, 150);
  brush.endShape(true);

  // stems
  brush.fill("#5a7a6a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(310, 530); brush.vertex(322, 530); brush.vertex(328, 470); brush.vertex(320, 400); brush.vertex(308, 330); brush.vertex(300, 260); brush.vertex(302, 260); brush.vertex(310, 330); brush.vertex(318, 400); brush.vertex(326, 470); brush.vertex(338, 530);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(480, 530); brush.vertex(492, 530); brush.vertex(484, 480); brush.vertex(474, 430); brush.vertex(462, 370); brush.vertex(454, 300); brush.vertex(456, 300); brush.vertex(464, 370); brush.vertex(474, 430); brush.vertex(482, 480); brush.vertex(494, 530);
  brush.endShape(true);

  // open white poppy: six broad petals, cupped
  let cx = 302, cy = 260;
  let px = 6;
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 2;
    let R = 130;
    let px0 = cx + cos(a - 10) * R * 0.6;
    let py0 = cy + sin(a - 10) * R * 0.6;
    let px1 = cx + cos(a) * R * 0.9;
    let py1 = cy + sin(a) * R * 0.9;
    let px2 = cx + cos(a + 10) * R * 0.6;
    let py2 = cy + sin(a + 10) * R * 0.6;
    brush.fill("#f6f4f8", 225);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(cx, cy);
    brush.vertex(px0, py0);
    brush.vertex(px1, py1);
    brush.vertex(px2, py2);
    brush.endShape(true);
  }
  // cool shadow inside the cup
  brush.fill("#c8d4e2", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(cx - 10, cy - 10);
  brush.vertex(cx + 10, cy - 10);
  brush.vertex(cx + 8, cy + 8);
  brush.vertex(cx - 8, cy + 8);
  brush.endShape(true);

  // closed bud: two cones stacked
  let bx = 456, by = 300;
  brush.fill("#e9e4ec", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(bx - 12, by);
  brush.vertex(bx + 12, by);
  brush.vertex(bx + 14, by - 45);
  brush.vertex(bx - 14, by - 45);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(bx - 10, by - 45);
  brush.vertex(bx + 10, by - 45);
  brush.vertex(bx + 12, by - 95);
  brush.vertex(bx - 12, by - 95);
  brush.endShape(true);
  brush.fill("#c8b8d4", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(bx - 8, by - 45);
  brush.vertex(bx + 8, by - 45);
  brush.vertex(bx + 10, by - 95);
  brush.vertex(bx - 10, by - 95);
  brush.endShape(true);

  // a few pale blue bell flowers in the lower right
  for (let i = 0; i < 3; i++) {
    let x = 480 + i * 30, y = 480 + i * 20;
    brush.fill("#9fb8d6", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(x, y);
    brush.vertex(x + 18, y - 22);
    brush.vertex(x + 38, y + 4);
    brush.vertex(x + 18, y + 22);
    brush.endShape(true);
    brush.beginShape(0.6);
    brush.vertex(x, y);
    brush.vertex(x - 18, y - 22);
    brush.vertex(x - 38, y + 4);
    brush.vertex(x - 18, y + 22);
    brush.endShape(true);
  }
}
