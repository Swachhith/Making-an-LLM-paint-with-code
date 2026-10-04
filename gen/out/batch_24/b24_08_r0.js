async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f4f6");

  brush.noStroke();
  brush.fill("#b9d4ee", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 230);
  brush.vertex(-20, 250);
  brush.endShape(true);

  brush.fill("#f2c9d6", 150);
  brush.fillBleed(0.3);
  brush.circle(120, 150, 80, 0.8);
  brush.circle(470, 110, 70, 0.8);

  brush.fill("#c6b9e2", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 280);
  brush.vertex(120, 220);
  brush.vertex(260, 260);
  brush.vertex(420, 210);
  brush.vertex(620, 250);
  brush.vertex(620, 330);
  brush.vertex(-20, 330);
  brush.endShape(true);

  brush.fill("#bfe0b4", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 320);
  brush.vertex(200, 300);
  brush.vertex(420, 312);
  brush.vertex(620, 295);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  brush.fill("#a7d19a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 450);
  brush.vertex(250, 410);
  brush.vertex(620, 440);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  let cols = ["#f4a6b8", "#ffd59a", "#9fd3e6", "#c6a8e8", "#f7b48a", "#a8e0c0", "#f5e38a"];
  let x = 200;
  let base = 318;
  for (let i = 0; i < cols.length; i++) {
    let w = 24 + (i % 3) * 3;
    let h = 38 + (i % 2) * 10;
    brush.fill(cols[i], 225);
    brush.fillBleed(0.15);
    brush.fillTexture(0.35, 0.3);
    brush.beginShape(0);
    brush.vertex(x, base);
    brush.vertex(x, base - h);
    brush.vertex(x + w / 2, base - h - 14);
    brush.vertex(x + w, base - h);
    brush.vertex(x + w, base);
    brush.endShape(true);
    brush.fill("#8a7aa8", 180);
    brush.fillBleed(0.1);
    brush.circle(x + w / 2, base - h * 0.55, 3, 0.2);
    brush.circle(x + w / 2, base - h * 0.2, 3, 0.2);
    x += w + 1;
  }
  brush.fill("#8fbf86", 190);
  brush.fillBleed(0.3);
  brush.circle(185, 312, 16, 0.6);
  brush.circle(x + 16, 310, 18, 0.6);

  brush.fill("#e8c6a8", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(290, 322);
  brush.vertex(318, 322);
  brush.vertex(380, 620);
  brush.vertex(200, 620);
  brush.endShape(true);
}
