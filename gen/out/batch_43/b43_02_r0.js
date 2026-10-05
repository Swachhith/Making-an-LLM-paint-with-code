async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f3f6");
  brush.noStroke();
  // narrow sky strip
  brush.fill("#6a7fc4", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 110); brush.vertex(-10, 120);
  brush.endShape(true);
  // far hills in indigo
  brush.fill("#2f3a8f", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 130); brush.vertex(120, 90); brush.vertex(300, 115); brush.vertex(460, 80); brush.vertex(610, 110); brush.vertex(610, 200); brush.vertex(-10, 200);
  brush.endShape(true);
  // terraces, slanting bands of indigo
  const cols = ["#3b4aa8", "#26307c", "#4a58b8", "#1f2866", "#34419c"];
  for (let i = 0; i < 8; i++) {
    const y = 170 + i * 42;
    brush.fill(cols[i % 5], 180 + (i % 3) * 20); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.7);
    brush.vertex(-10, y + 10); brush.vertex(200, y - 12); brush.vertex(420, y + 8); brush.vertex(610, y - 10);
    brush.vertex(610, y + 50); brush.vertex(300, y + 62); brush.vertex(-10, y + 55);
    brush.endShape(true);
    // vine rows
    for (let j = 0; j < 9; j++) {
      brush.fill("#161c55", 200); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
      brush.circle(30 + j * 68 + (i % 2) * 30, y + 28 + (j % 2) * 4, 14, 0.5);
    }
  }
  // river in sweeping curve, pale blue with accent-free
  brush.fill("#3d86d8", 210); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.9);
  brush.vertex(380, 190); brush.vertex(430, 190); brush.vertex(400, 300); brush.vertex(470, 400); brush.vertex(520, 610); brush.vertex(380, 610); brush.vertex(380, 420); brush.vertex(340, 300);
  brush.endShape(true);
  // bright accent: golden-orange sunset lights on the water and a house
  brush.fill("#ff9a1a", 230); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(120, 285); brush.vertex(165, 285); brush.vertex(165, 322); brush.vertex(120, 322);
  brush.endShape(true);
  brush.fill("#ffb640", 190); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.9);
  brush.vertex(405, 250); brush.vertex(430, 270); brush.vertex(425, 330); brush.vertex(400, 310);
  brush.endShape(true);
}
