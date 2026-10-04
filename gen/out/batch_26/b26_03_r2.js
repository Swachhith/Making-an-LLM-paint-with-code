async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe8d6");
  randomSeed(26032);
  brush.noStroke();

  // sky with a soft grey cloud bank
  brush.fill("#b6b4a2", 155);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 280); brush.vertex(-20, 290);
  brush.endShape(true);
  brush.fill("#9a9888", 150);
  brush.beginShape(0.9);
  brush.vertex(-20, 60); brush.vertex(150, 30); brush.vertex(380, 70); brush.vertex(620, 40);
  brush.vertex(620, 130); brush.vertex(360, 150); brush.vertex(-20, 120);
  brush.endShape(true);

  // distant trees along the horizon
  brush.fill("#6e7058", 185);
  brush.beginShape(0.8);
  brush.vertex(-20, 290); brush.vertex(60, 272); brush.vertex(140, 284); brush.vertex(240, 270);
  brush.vertex(380, 282); brush.vertex(520, 268); brush.vertex(620, 280); brush.vertex(620, 305); brush.vertex(-20, 308);
  brush.endShape(true);

  // field
  brush.fill("#aa9c64", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 298); brush.vertex(620, 294); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8a8048", 175);
  brush.beginShape(0.8);
  brush.vertex(-20, 460); brush.vertex(300, 420); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#645e32", 175);
  brush.beginShape(0.8);
  brush.vertex(-20, 560); brush.vertex(200, 540); brush.vertex(620, 580); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // pond on the right of the willow
  brush.fill("#8e9c9c", 205);
  brush.fillBleed(0.22);
  brush.beginShape(0.95);
  brush.vertex(300, 336); brush.vertex(400, 322); brush.vertex(500, 330); brush.vertex(470, 352); brush.vertex(340, 356);
  brush.endShape(true);

  // willow: a mound whose skirt hangs in long tapering strands
  let wx = 290, wy = 255, R = 80;
  brush.fill("#909a58", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(wx, wy, R, true);
  for (let i = 0; i < 16; i++) {
    let a = 180 + (180 / 15) * i;
    let sx = wx + cos(a) * R * 1.05, sy = wy + sin(a) * R * 0.6;
    let hang = 340 - sy + random(-8, 4);
    brush.fill(i % 3 == 0 ? "#5a6430" : i % 3 == 1 ? "#6e7a3a" : "#828c48", 190);
    brush.fillBleed(0.25);
    brush.beginShape(0.8);
    brush.vertex(sx - 10, sy); brush.vertex(sx + 10, sy);
    brush.vertex(sx + 8 + cos(a) * 12, sy + hang); brush.vertex(sx - 7 + cos(a) * 12, sy + hang + 4);
    brush.endShape(true);
  }
  // darker inner shadow and trunk
  brush.fill("#4a522a", 185);
  brush.beginShape(0.8);
  brush.vertex(wx - 45, 338); brush.vertex(wx - 40, 270); brush.vertex(wx + 40, 270); brush.vertex(wx + 48, 338);
  brush.endShape(true);
  brush.fill("#3a2e20", 215);
  brush.beginShape(0.3);
  brush.vertex(wx - 9, 342); brush.vertex(wx + 9, 342); brush.vertex(wx + 6, 280); brush.vertex(wx - 6, 280);
  brush.endShape(true);

  // reflection of the skirt in the water edge
  brush.fill("#5c643a", 165);
  brush.beginShape(0.8);
  brush.vertex(310, 340); brush.vertex(370, 340); brush.vertex(355, 354); brush.vertex(318, 354);
  brush.endShape(true);
}
