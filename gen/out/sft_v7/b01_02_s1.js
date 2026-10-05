async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece6d6");
  brush.noStroke();

  // earthy green ground wash
  brush.fill("#8c9a6e", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 620); brush.vertex(620, 620); brush.vertex(620, 420); brush.vertex(400, 360); brush.vertex(220, 380); brush.vertex(-20, 420);
  brush.endShape(true);

  // stems
  brush.fill("#4f6a3a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(250, 540); brush.vertex(258, 540); brush.vertex(266, 540); brush.vertex(274, 440); brush.vertex(270, 200);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(470, 530); brush.vertex(478, 530); brush.vertex(486, 530); brush.vertex(494, 470); brush.vertex(490, 250);
  brush.endShape(true);

  // ranunculus: many cupped petals, layered rings, deep yellow core
  let cx = 270, cy = 200, a = 130;
  let rings = [[230, 13], [170, 11], [115, 9], [65, 7]];
  for (let ring of rings) {
    let n = ring[1];
    for (let i = 0; i < n; i++) {
      let t = a + i * 360 / n + (i % 2) * 6;
      let r = ring[0] * (0.9 + 0.1 * (i / n));
      let x = cx + cos(t) * r, y = cy + sin(t) * r;
      brush.fill("#f2c71a", 190);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.circle(x, y, 6, 0.5);
    }
  }
  brush.fill("#e9a80e", 215);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 22, 0.4);
  brush.fill("#d8900a", 225);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 12, 0.4);
  brush.fill("#8a5a1a", 225);
  brush.fillBleed(0.2);
  brush.circle(cx + 3, cy + 3, 6, 0.4);
  brush.fill("#5a4a1a", 230);
  brush.circle(cx + 8, cy + 8, 3, 0.4);

  // second bloom, side-on, lower
  cx = 490; cy = 470; a = -20;
  let rings2 = [[190, 12], [140, 10], [95, 8], [55, 6]];
  for (let ring of rings2) {
    let n = ring[1];
    for (let i = 0; i < n; i++) {
      let t = a + i * 360 / n + (i % 2) * 6;
      let r = ring[0] * (0.9 + 0.1 * (i / n));
      let x = cx + cos(t) * r, y = cy + sin(t) * r;
      brush.fill("#f2c71a", 185);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.circle(x, y, 6, 0.5);
    }
  }
  brush.fill("#e9a80e", 210);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 18, 0.4);
  brush.fill("#d8900a", 220);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 10, 0.4);
  brush.fill("#8a5a1a", 225);
  brush.fillBleed(0.2);
  brush.circle(cx + 2, cy + 2, 5, 0.4);
}
