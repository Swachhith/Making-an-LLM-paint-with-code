async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe8d9");
  brush.noStroke();
  // muted earthy ground wash
  brush.fill("#b89c7a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(0, 420); brush.vertex(600, 430); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // stems
  brush.fill("#5e5a3c", 215);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(320, 420); brush.vertex(328, 420); brush.vertex(328, 580); brush.vertex(320, 580);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(470, 420); brush.vertex(478, 420); brush.vertex(478, 580); brush.vertex(470, 580);
  brush.endShape(true);
  // open anemone: six petals, dark centre
  let cx = 260, cy = 270;
  for (let k = 0; k < 6; k++) {
    let a = k * 60 + 12;
    let r = 150;
    let px = cx + cos(a) * r, py = cy + sin(a) * r;
    brush.fill("#8a7a5c", 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 14) * 130, cy + sin(a - 14) * 130);
    brush.vertex(px, py);
    brush.vertex(cx + cos(a + 14) * 130, cy + sin(a + 14) * 130);
    brush.endShape(true);
  }
  brush.fill("#3e2e22", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 52, 0.5);
  // closed bud, three overlapping cones
  let bx = 470, by = 300;
  for (let k = 0; k < 3; k++) {
    let a = k * 120 + 15;
    brush.fill("#7a6a50", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.7);
    brush.vertex(bx, by);
    brush.vertex(bx + cos(a - 30) * 55, by - sin(a - 30) * 55);
    brush.vertex(bx + cos(a) * 40, by - sin(a) * 40);
    brush.vertex(bx + cos(a + 30) * 55, by - sin(a + 30) * 55);
    brush.endShape(true);
  }
  brush.fill("#2e2218", 230);
  brush.fillBleed(0.2);
  brush.circle(bx, by, 26, 0.4);
  // a few leaves
  brush.fill("#6a6244", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.9);
  brush.vertex(320, 520); brush.vertex(280, 550); brush.vertex(310, 560); brush.vertex(340, 530);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(470, 470); brush.vertex(510, 440); brush.vertex(540, 470); brush.vertex(510, 490);
  brush.endShape(true);
}
