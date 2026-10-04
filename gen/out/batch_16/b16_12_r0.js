async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3f1");
  brush.noStroke();

  // pastel sunset bands, top to bottom: lilac, rose, peach, butter
  let bands = [["#b8a8d8", -20, 170], ["#eeaac0", 120, 300], ["#f6c3a0", 250, 400], ["#f8e0a0", 350, 460]];
  for (let b of bands) {
    brush.fill(b[0], 180);
    brush.fillBleed(0.35);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(-20, b[1]);
    brush.vertex(620, b[1] + 10);
    brush.vertex(620, b[2]);
    brush.vertex(-20, b[2] - 10);
    brush.endShape(true);
  }
  // sun, soft
  brush.fill("#f7b38a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(360, 380, 55, 0.2);

  // back skyline, pale mauve silhouettes
  brush.fill("#a58fb4", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0);
  let xs = [-20, 30, 30, 70, 70, 110, 110, 150, 150, 210, 210, 250, 250, 300, 300, 340, 340, 420, 420, 470, 470, 520, 520, 570, 570, 620];
  let ys = [360, 360, 300, 300, 340, 340, 260, 260, 330, 330, 290, 290, 350, 350, 310, 310, 270, 270, 330, 330, 300, 300, 345, 345, 290, 290];
  for (let i = 0; i < xs.length; i++) brush.vertex(xs[i], ys[i]);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  // front skyline, deeper plum
  brush.fill("#6e5082", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0);
  let fx = [-20, 50, 50, 80, 80, 130, 130, 190, 190, 205, 205, 220, 220, 280, 280, 390, 390, 440, 440, 500, 500, 560, 560, 620];
  let fy = [430, 430, 380, 380, 330, 330, 410, 410, 250, 250, 180, 180, 250, 250, 400, 400, 350, 350, 420, 420, 370, 370, 410, 410];
  for (let i = 0; i < fx.length; i++) brush.vertex(fx[i], fy[i]);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  // water with reflected glow
  brush.fill("#8a7098", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 470);
  brush.vertex(620, 470);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 5; i++) {
    brush.fill("#f6c3a0", 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0.5);
    brush.vertex(320 - i * 6, 490 + i * 24);
    brush.vertex(400 + i * 6, 490 + i * 24);
    brush.vertex(395 + i * 6, 504 + i * 24);
    brush.vertex(325 - i * 6, 504 + i * 24);
    brush.endShape(true);
  }
}
