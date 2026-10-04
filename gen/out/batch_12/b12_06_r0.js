async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f6f7");
  randomSeed(66);
  brush.noStroke();
  // cool sky
  brush.fill("#a9c7de", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 320);
  brush.endShape(true);
  // distant tree line
  brush.fill("#7f9fa3", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 300); brush.vertex(80, 285); brush.vertex(200, 292); brush.vertex(330, 278); brush.vertex(460, 290); brush.vertex(620, 280); brush.vertex(620, 330); brush.vertex(-20, 335);
  brush.endShape(true);
  // grassy banks converging (canal perspective)
  brush.fill("#8fae8c", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-20, 320); brush.vertex(270, 325); brush.vertex(120, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(620, 318); brush.vertex(330, 325); brush.vertex(520, 620); brush.vertex(620, 620);
  brush.endShape(true);
  // canal water
  brush.fill("#6f9bb8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.2);
  brush.vertex(270, 325); brush.vertex(330, 325); brush.vertex(520, 620); brush.vertex(120, 620);
  brush.endShape(true);
  brush.fill("#4e7a99", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(250, 420); brush.vertex(360, 420); brush.vertex(470, 620); brush.vertex(170, 620);
  brush.endShape(true);
  // houseboat, small, on left side of water
  let bx = 260, by = 395;
  brush.fill("#2e4d5f", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(bx - 30, by); brush.vertex(bx + 32, by); brush.vertex(bx + 26, by + 14); brush.vertex(bx - 24, by + 14);
  brush.endShape(true);
  brush.fill("#5c8a8a", 220);
  brush.beginShape(0.05);
  brush.vertex(bx - 22, by - 20); brush.vertex(bx + 22, by - 20); brush.vertex(bx + 22, by); brush.vertex(bx - 22, by);
  brush.endShape(true);
  brush.fill("#8a4a44", 210);
  brush.beginShape(0.05);
  brush.vertex(bx - 26, by - 20); brush.vertex(bx, by - 32); brush.vertex(bx + 26, by - 20);
  brush.endShape(true);
  // its reflection
  brush.fill("#2e4d5f", 130);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(bx - 24, by + 15); brush.vertex(bx + 26, by + 15); brush.vertex(bx + 22, by + 40); brush.vertex(bx - 20, by + 40);
  brush.endShape(true);
  // a couple of willows on banks
  for (let t of [[90, 330, 45], [520, 340, 55]]) {
    brush.fill("#5f8a78", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(t[0], t[1] - t[2], t[2], 0.7);
    brush.fill("#3f6a5e", 170);
    brush.circle(t[0] + 8, t[1] - t[2] + 12, t[2] * 0.6, 0.7);
  }
}
