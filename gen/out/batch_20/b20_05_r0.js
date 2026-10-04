async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f4");
  brush.noStroke();

  brush.fill("#a9c6d6", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.35);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 230); brush.vertex(-20, 230);
  brush.endShape(true);

  // distant hills
  brush.fill("#8fa8b8", 170);
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 240); brush.vertex(100, 200); brush.vertex(230, 215); brush.vertex(330, 190); brush.vertex(470, 220); brush.vertex(620, 205); brush.vertex(620, 260); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#6f8e8e", 190);
  brush.beginShape(0.5);
  brush.vertex(-20, 260); brush.vertex(150, 235); brush.vertex(280, 250); brush.vertex(420, 238); brush.vertex(620, 255); brush.vertex(620, 275); brush.vertex(-20, 275);
  brush.endShape(true);

  // banks framing a river narrowing into distance
  brush.fill("#7fa39a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.4);
  brush.vertex(-20, 270); brush.vertex(270, 272); brush.vertex(240, 330); brush.vertex(160, 420); brush.vertex(60, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(330, 272); brush.vertex(620, 270); brush.vertex(620, 620); brush.vertex(520, 620); brush.vertex(420, 440); brush.vertex(350, 330);
  brush.endShape(true);

  // water
  brush.fill("#b7d3e0", 190);
  brush.fillBleed(0.28);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.5);
  brush.vertex(270, 272); brush.vertex(330, 272); brush.vertex(350, 330); brush.vertex(420, 440); brush.vertex(520, 620); brush.vertex(60, 620); brush.vertex(160, 420); brush.vertex(240, 330);
  brush.endShape(true);
  brush.fill("#8fb6c9", 160);
  brush.beginShape(0.6);
  brush.vertex(200, 420); brush.vertex(380, 420); brush.vertex(460, 600); brush.vertex(120, 600);
  brush.endShape(true);

  // reeds: tall soft blades in foreground left and right
  function reed(x, y, h, lean, col, op) {
    brush.fill(col, op);
    brush.fillBleed(0.2);
    brush.fillTexture(0.35, 0.4);
    brush.beginShape(0.6);
    brush.vertex(x - 9, y);
    brush.vertex(x + lean * 0.5 - 5, y - h * 0.6);
    brush.vertex(x + lean, y - h);
    brush.vertex(x + lean * 0.5 + 8, y - h * 0.55);
    brush.vertex(x + 10, y);
    brush.endShape(true);
  }
  reed(20, 620, 260, 20, "#3f6a62", 220);
  reed(50, 620, 220, -15, "#4d7a6a", 210);
  reed(80, 620, 300, 35, "#2f5a58", 225);
  reed(110, 620, 180, 10, "#5a8a74", 200);
  reed(540, 620, 240, -30, "#3f6a62", 220);
  reed(570, 620, 290, -10, "#2f5a58", 225);
  reed(590, 620, 200, 15, "#4d7a6a", 210);
  brush.fill("#5a4a3a", 220);
  brush.circle(115, 355, 10, 0.4);
  brush.circle(560, 330, 10, 0.4);
}
