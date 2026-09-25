async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#edf0f4");
  brush.noStroke();

  brush.fill("#aebfd6", 175);
  brush.fillBleed(0.5);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.9);
  brush.vertex(60, 40); brush.vertex(540, 60); brush.vertex(580, 360); brush.vertex(400, 520); brush.vertex(40, 420);
  brush.endShape(true);
  brush.fill("#c9d6e6", 160);
  brush.fillBleed(0.4);
  brush.circle(300, 250, 150, true);

  // twig and a leaf bud
  brush.fill("#3f3c48", 230);
  brush.fillBleed(0.1);
  brush.fillTexture(0.7, 0.4);
  brush.beginShape(0.3);
  brush.vertex(292, 470); brush.vertex(284, 540); brush.vertex(250, 600); brush.vertex(266, 600); brush.vertex(298, 542); brush.vertex(308, 472);
  brush.endShape(true);
  brush.fill("#6e7e6a", 205);
  brush.beginShape(0.6);
  brush.vertex(290, 540); brush.vertex(380, 505); brush.vertex(460, 540); brush.vertex(370, 565);
  brush.endShape(true);
  brush.fill("#6b5f78", 215);
  brush.beginShape(0.6);
  brush.vertex(278, 478); brush.vertex(300, 450); brush.vertex(322, 478); brush.vertex(300, 492);
  brush.endShape(true);

  let base = 470;
  // back petals splaying outward
  let backs = [[-95, 250, "#b596d4"], [0, 330, "#a282c8"], [95, 255, "#b596d4"]];
  for (let b of backs) {
    brush.fill(b[2], 195);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.8);
    brush.vertex(300 + b[0] * 0.2, base - 10);
    brush.vertex(300 + b[0] * 1.2 - 45, base - b[1] * 0.55);
    brush.vertex(300 + b[0] * 1.1, base - b[1]);
    brush.vertex(300 + b[0] * 1.2 + 45, base - b[1] * 0.55);
    brush.endShape(true);
  }
  // inner furled petal glimpsed between the fronts
  brush.fill("#3a1468", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(285, base - 20); brush.vertex(292, base - 250); brush.vertex(318, base - 250); brush.vertex(318, base - 20);
  brush.endShape(true);
  // front petals: pale tips, deep purple base
  let fronts = [[-60, 280, -12], [60, 270, 12], [0, 305, 0]];
  for (let f of fronts) {
    let x = 300 + f[0], lean = f[2];
    brush.fill("#8a5cc0", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.85);
    brush.vertex(x - 12, base);
    brush.vertex(x - 80 + lean, base - f[1] * 0.5);
    brush.vertex(x + lean * 2, base - f[1]);
    brush.vertex(x + 75 + lean, base - f[1] * 0.55);
    brush.vertex(x + 18, base);
    brush.endShape(true);
    brush.fill("#3e1672", 235);
    brush.fillBleed(0.3);
    brush.beginShape(0.8);
    brush.vertex(x - 8, base + 4);
    brush.vertex(x - 48, base - 60);
    brush.vertex(x + lean, base - f[1] * 0.62);
    brush.vertex(x + 45, base - 58);
    brush.vertex(x + 10, base + 4);
    brush.endShape(true);
    brush.fill("#e6dcf2", 180);
    brush.fillBleed(0.1);
    brush.beginShape(0.9);
    brush.vertex(x - 30 + lean, base - f[1] * 0.75);
    brush.vertex(x + lean * 2, base - f[1] * 0.97);
    brush.vertex(x + 28 + lean, base - f[1] * 0.78);
    brush.vertex(x + lean, base - f[1] * 0.7);
    brush.endShape(true);
  }
}
