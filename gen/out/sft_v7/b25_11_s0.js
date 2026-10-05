async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8d8c4");
  brush.noStroke();

  // sky: warm peach fading to violet, a wide band above the tree
  brush.fill("#d9a88a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 190); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#a88fb8", 170);
  brush.beginShape(0.3);
  brush.vertex(-20, 170); brush.vertex(620, 140); brush.vertex(620, 300); brush.vertex(-20, 320);
  brush.endShape(true);

  // field: olive grass, taller in the foreground, receding
  brush.fill("#8f945a", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 320); brush.vertex(620, 310); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a few tall grasses reaching toward the tree
  brush.fill("#7a824a", 210);
  for (let i = 0; i < 14; i++) {
    let x = 20 + i * 46;
    let h = 50 + (i % 3) * 60;
    brush.beginShape(0.6);
    brush.vertex(x, 360); brush.vertex(x + 3, 360 - h); brush.vertex(x - 3, 360 - h);
    brush.endShape(true);
  }

  // baobab trunk: thick, grey-brown, rising from the field
  brush.fill("#6b624e", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(260, 360); brush.vertex(266, 360); brush.vertex(272, 360); brush.vertex(270, 220);
  brush.vertex(264, 220); brush.vertex(258, 360);
  brush.endShape(true);
  brush.fill("#4a4438", 210);
  brush.beginShape(0.3);
  brush.vertex(254, 360); brush.vertex(256, 360); brush.vertex(258, 220); brush.vertex(252, 220);
  brush.endShape(true);
  brush.fill("#5a5240", 225);
  brush.beginShape(0.3);
  brush.vertex(268, 360); brush.vertex(270, 360); brush.vertex(272, 220); brush.vertex(276, 220);
  brush.endShape(true);

  // crown: bulbous, pale olive with darker rings
  let cx = 260, cy = 190;
  let rings = [[110, 130], [88, 90], [66, 52], [44, 22], [22, 4]];
  for (let k = 0; k < rings.length; k++) {
    let r = rings[k][0], th = rings[k][1];
    brush.fill("#9aa87a", 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.5);
    for (let i = 0; i < 12; i++) {
      let a = i * 30 + k * 15 + (k % 2 ? 20 : -20);
      let x = cx + r * cos(a), y = cy + r * sin(a);
      brush.vertex(x, y);
    }
    brush.endShape(true);
    brush.fill("#6a7254", 180);
    brush.beginShape(0.5);
    for (let i = 0; i < 12; i++) {
      let a = i * 30 + k * 15 + (k % 2 ? 20 : -20);
      let x = cx + r * 0.7 * cos(a), y = cy + r * 0.7 * sin(a);
      brush.vertex(x, y);
    }
    brush.endShape(true);
  }
  brush.fill("#4a4838", 200);
  brush.circle(cx, cy, 32, 0.5);

  // dusk light: a warm glow on the right, shadow on the left
  brush.fill("#c99a7a", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(380, 220); brush.vertex(620, 220); brush.vertex(620, 300); brush.vertex(380, 300);
  brush.endShape(true);
  brush.fill("#7a7a6a", 150);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(200, 430); brush.vertex(200, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
