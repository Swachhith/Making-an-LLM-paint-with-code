async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf6e8");
  brush.noStroke();
  const vx = 330, hz = 140;
  // strong blue sky strip
  brush.fill("#2f7fd0", 210);
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, hz + 5); brush.vertex(-20, hz + 5);
  brush.endShape(true);
  brush.fill("#1c5fb0", 170);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 50); brush.vertex(-20, 70);
  brush.endShape(true);
  // white clouds left as paper-ish lighter patches
  brush.fill("#e9f1fb", 200);
  brush.fillBleed(0.3);
  brush.circle(140, 70, 38, 0.6);
  brush.circle(185, 62, 30, 0.6);
  brush.circle(470, 90, 32, 0.6);
  // distant hedgerow
  brush.fill("#2b6a2a", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(-20, hz + 4); brush.vertex(80, hz - 12); brush.vertex(200, hz - 4); brush.vertex(300, hz - 16); brush.vertex(420, hz - 6); brush.vertex(620, hz - 14); brush.vertex(620, hz + 10); brush.vertex(-20, hz + 12);
  brush.endShape(true);
  // left field: rapeseed yellow
  brush.fill("#f5c211", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, hz + 8); brush.vertex(vx - 6, hz + 8); brush.vertex(150, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#e9a800", 190);
  brush.beginShape(0.5);
  brush.vertex(-20, 360); brush.vertex(220, 360); brush.vertex(160, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // right field: vivid green with rows converging
  brush.fill("#4cae2c", 225);
  brush.beginShape(0.2);
  brush.vertex(vx + 6, hz + 8); brush.vertex(620, hz + 8); brush.vertex(620, 620); brush.vertex(470, 620);
  brush.endShape(true);
  for (let k = 0; k < 6; k++) {
    let bx = 520 + k * 60;
    brush.fill("#2f8a1c", 190);
    brush.fillBleed(0.2);
    brush.beginShape(0.2);
    brush.vertex(vx + 12 + k * 6, hz + 10); brush.vertex(vx + 16 + k * 6, hz + 10); brush.vertex(bx + 10, 620); brush.vertex(bx - 12, 620);
    brush.endShape(true);
  }
  // a far red-brown field on the left horizon
  brush.fill("#c0502a", 210);
  brush.beginShape(0.3);
  brush.vertex(-20, hz + 8); brush.vertex(200, hz + 8); brush.vertex(120, 210); brush.vertex(-20, 215);
  brush.endShape(true);
  // the road, ochre, converging to the horizon
  brush.fill("#caa472", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(vx - 6, hz + 6); brush.vertex(vx + 6, hz + 6); brush.vertex(470, 620); brush.vertex(150, 620);
  brush.endShape(true);
  brush.fill("#a67f4e", 190);
  brush.beginShape(0.4);
  brush.vertex(vx - 3, hz + 8); brush.vertex(vx + 2, hz + 8); brush.vertex(290, 620); brush.vertex(240, 620);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(vx + 3, hz + 8); brush.vertex(vx + 6, hz + 8); brush.vertex(420, 620); brush.vertex(380, 620);
  brush.endShape(true);
  // stripes in the rapeseed
  for (let k = 0; k < 5; k++) {
    brush.fill("#d98a00", 180);
    brush.fillBleed(0.2);
    brush.beginShape(0.3);
    brush.vertex(vx - 20 - k * 10, hz + 12); brush.vertex(vx - 14 - k * 10, hz + 12); brush.vertex(120 - k * 70, 620); brush.vertex(90 - k * 70, 620);
    brush.endShape(true);
  }
  // a lone tree by the road, with trunk
  brush.fill("#4a2c14", 220);
  brush.beginShape(0.2);
  brush.vertex(284, 250); brush.vertex(290, 200); brush.vertex(300, 200); brush.vertex(302, 250);
  brush.endShape(true);
  brush.fill("#1f5a24", 230);
  brush.fillBleed(0.25);
  brush.circle(294, 185, 34, 0.5);
  brush.fill("#14401a", 200);
  brush.circle(302, 195, 22, 0.5);
  // its shadow falling across the road
  brush.fill("#7a5a34", 180);
  brush.beginShape(0.5);
  brush.vertex(290, 250); brush.vertex(310, 248); brush.vertex(380, 262); brush.vertex(360, 268);
  brush.endShape(true);
}
