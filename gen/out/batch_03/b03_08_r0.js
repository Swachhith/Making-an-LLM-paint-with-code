async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef1f4");
  brush.noStroke();

  brush.fill("#b8c6d8", 150);
  brush.fillBleed(0.5);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.9);
  brush.vertex(80, 60); brush.vertex(520, 90); brush.vertex(560, 330); brush.vertex(380, 470); brush.vertex(60, 380);
  brush.endShape(true);

  // twig
  brush.fill("#4d4a52", 215);
  brush.fillBleed(0.1);
  brush.fillTexture(0.7, 0.4);
  brush.beginShape(0.3);
  brush.vertex(292, 430); brush.vertex(280, 520); brush.vertex(240, 600); brush.vertex(256, 600); brush.vertex(294, 522); brush.vertex(306, 432);
  brush.endShape(true);
  brush.fill("#7c8a6e", 180);
  brush.beginShape(0.6);
  brush.vertex(285, 510); brush.vertex(380, 480); brush.vertex(450, 520); brush.vertex(360, 540);
  brush.endShape(true);

  // back petals of the goblet
  let backs = [[-70, 170, "#b99ad6"], [0, 210, "#a784cc"], [70, 175, "#b99ad6"]];
  for (let b of backs) {
    brush.fill(b[2], 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.8);
    brush.vertex(300 + b[0] * 0.3, 440);
    brush.vertex(300 + b[0] * 1.3 - 30, 440 - b[1] * 0.6);
    brush.vertex(300 + b[0] * 0.9, 440 - b[1] * 1.2);
    brush.vertex(300 + b[0] * 1.3 + 30, 440 - b[1] * 0.6);
    brush.endShape(true);
  }
  // front petals, deeper purple at base
  let fronts = [[-45, 200], [40, 190], [0, 230]];
  for (let f of fronts) {
    let x = 300 + f[0];
    brush.fill("#8a5cc0", 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.85);
    brush.vertex(x - 10, 445);
    brush.vertex(x - 62, 440 - f[1] * 0.5);
    brush.vertex(x - 5, 440 - f[1]);
    brush.vertex(x + 55, 440 - f[1] * 0.55);
    brush.vertex(x + 15, 445);
    brush.endShape(true);
    brush.fill("#5e2e94", 210);
    brush.fillBleed(0.3);
    brush.beginShape(0.8);
    brush.vertex(x - 5, 448);
    brush.vertex(x - 35, 400);
    brush.vertex(x, 440 - f[1] * 0.45);
    brush.vertex(x + 32, 402);
    brush.endShape(true);
    brush.fill("#ece6f6", 150);
    brush.fillBleed(0.1);
    brush.beginShape(0.9);
    brush.vertex(x - 20, 440 - f[1] * 0.75);
    brush.vertex(x - 4, 440 - f[1] * 0.97);
    brush.vertex(x + 18, 440 - f[1] * 0.78);
    brush.endShape(true);
  }
}
