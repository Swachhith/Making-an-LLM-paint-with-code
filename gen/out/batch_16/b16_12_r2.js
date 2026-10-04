async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf5ef");
  brush.noStroke();

  // wet-in-wet pastel sky, bands blending
  let bands = [["#c4b4e2", -20, 150], ["#f2b4c6", 110, 270], ["#f8caa6", 230, 380], ["#faeab0", 340, 470]];
  for (let b of bands) {
    brush.fill(b[0], 190);
    brush.fillBleed(0.35);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(-20, b[1]);
    brush.vertex(620, b[1] + 15);
    brush.vertex(620, b[2]);
    brush.vertex(-20, b[2] - 15);
    brush.endShape(true);
  }
  // sun low and pale
  brush.fill("#f49478", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(180, 360, 48, 0.2);

  // far skyline, powder blue-violet
  brush.fill("#a896c4", 200);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0);
  let xs = [-20, 40, 40, 90, 90, 130, 130, 170, 170, 230, 230, 270, 270, 330, 330, 370, 370, 440, 440, 490, 490, 540, 540, 620];
  let ys = [390, 390, 330, 330, 360, 360, 300, 300, 355, 355, 320, 320, 370, 370, 310, 310, 280, 280, 340, 340, 315, 315, 350, 350];
  for (let i = 0; i < xs.length; i++) brush.vertex(xs[i], ys[i]);
  brush.vertex(620, 460);
  brush.vertex(-20, 460);
  brush.endShape(true);

  // near skyline: two passes of deep plum to make a firm silhouette
  let fx = [-20, 30, 30, 90, 90, 140, 140, 200, 200, 212, 212, 228, 228, 240, 240, 300, 300, 360, 360, 420, 420, 470, 470, 520, 520, 580, 580, 620];
  let fy = [400, 400, 330, 330, 360, 360, 290, 290, 200, 200, 150, 150, 200, 200, 290, 290, 380, 380, 250, 250, 330, 330, 300, 300, 370, 370, 340, 340];
  for (let k = 0; k < 2; k++) {
    brush.fill(k ? "#5a3a70" : "#7a5890", 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0);
    for (let i = 0; i < fx.length; i++) brush.vertex(fx[i], fy[i] + k * 4);
    brush.vertex(620, 470);
    brush.vertex(-20, 470);
    brush.endShape(true);
  }

  // river mirrors the sky
  brush.fill("#e8b4c0", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 470);
  brush.vertex(620, 470);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // wobbly reflection of the silhouettes
  brush.fill("#7a5890", 170);
  brush.fillBleed(0.35);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, 470);
  brush.vertex(620, 470);
  brush.vertex(620, 540);
  brush.vertex(420, 560);
  brush.vertex(360, 520);
  brush.vertex(240, 600);
  brush.vertex(200, 600);
  brush.vertex(140, 540);
  brush.vertex(-20, 530);
  brush.endShape(true);
  // sun path
  for (let i = 0; i < 4; i++) {
    brush.fill("#fbd7a8", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(150 - i * 5, 485 + i * 30);
    brush.vertex(210 + i * 5, 485 + i * 30);
    brush.vertex(205 + i * 5, 498 + i * 30);
    brush.vertex(155 - i * 5, 498 + i * 30);
    brush.endShape(true);
  }
}
