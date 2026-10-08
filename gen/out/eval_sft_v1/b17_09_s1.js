async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f3f0");
  brush.noStroke();
  // soft sky, light blue-grey, left higher
  brush.fill("#b9c7d4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(300, 230); brush.vertex(-20, 200);
  brush.endShape(true);
  // clouds: low, wide, soft, left of the peak
  brush.fill("#cfd6d8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(20, 230); brush.vertex(120, 215); brush.vertex(200, 235); brush.vertex(280, 225); brush.vertex(320, 245); brush.vertex(400, 240); brush.vertex(500, 255); brush.vertex(600, 250); brush.vertex(620, 270); brush.vertex(450, 285); brush.vertex(350, 275); brush.vertex(220, 285); brush.vertex(150, 270); brush.vertex(80, 285); brush.vertex(20, 275);
  brush.endShape(true);
  // mountain: three passes, darker each time, paper left as snow
  let px = [350, 400, 460];
  let py = [320, 310, 295];
  let w = [170, 160, 150];
  for (let k = 0; k < 3; k++) {
    brush.fill("#8a9aa0", 210 - k * 15);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.5);
    brush.vertex(px[k] - w[k] * 0.4, 330); brush.vertex(px[k] - w[k] * 0.05, py[k]);
    brush.vertex(px[k] + w[k] * 0.05, py[k]); brush.vertex(px[k] + w[k] * 0.4, 330);
    brush.endShape(true);
  }
  // shadowed face on the right
  brush.fill("#6f7f8e", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(350, 330); brush.vertex(520, 330); brush.vertex(470, 295); brush.vertex(400, 310); brush.vertex(360, 325);
  brush.endShape(true);
  // soft mist rolling between base and clouds
  brush.fill("#a8b4c0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(100, 330); brush.vertex(330, 325); brush.vertex(400, 335); brush.vertex(460, 330); brush.vertex(520, 340); brush.vertex(560, 335); brush.vertex(500, 350); brush.vertex(420, 355); brush.vertex(300, 350); brush.vertex(200, 355); brush.vertex(150, 350); brush.vertex(120, 340); brush.vertex(80, 345);
  brush.endShape(true);
}
