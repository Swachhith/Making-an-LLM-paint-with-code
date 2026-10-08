async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f6f8");
  randomSeed(1337);
  brush.noStroke();
  // cool blue-grey ground wash
  brush.fill("#a8b8c8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 420); brush.vertex(600, 400); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // a few shadowed pines behind
  for (let i = 0; i < 7; i++) {
    brush.fill("#5a7a8a", 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(30 + i * 75, 300); brush.vertex(130 + i * 75, 200); brush.vertex(250 + i * 75, 280); brush.vertex(150 + i * 75, 400);
    brush.endShape(true);
  }
  // birch trunks: long soft shapes, two passes each
  const trunks = [
    [260, 270, 40, 360], [410, 240, 36, 390], [520, 300, 34, 340], [150, 420, 30, 180]
  ];
  for (const t of trunks) {
    brush.fill("#e8e0d4", 230);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(t[0], t[1]); brush.vertex(t[0] + t[2] / 2, t[1] - 10); brush.vertex(t[0] + t[2], t[1]); brush.vertex(t[0] + t[2] / 2, t[1] + t[3]); brush.vertex(t[0], t[1] + t[3]);
    brush.endShape(true);
    brush.fill("#c8c0b0", 180);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(t[0] + t[2] / 2, t[1] + t[3] / 2); brush.vertex(t[0] + 4, t[1] + t[3] / 2 - 4); brush.vertex(t[0] + t[2] - 4, t[1] + t[3] / 2 + 4); brush.vertex(t[0] + t[2] / 2, t[1] + t[3] / 2 + 4);
    brush.endShape(true);
  }
  // crown: big loose pass first, then two passes inside
  for (let k = 0; k < 3; k++) {
    brush.fill("#dceef4", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.8);
    brush.vertex(260, 270); brush.vertex(410, 240); brush.vertex(520, 300); brush.vertex(430, 340); brush.vertex(260, 330); brush.vertex(90, 340); brush.vertex(120, 260); brush.vertex(260, 270);
    brush.endShape(true);
    brush.fill("#bfe0f0", 220);
    brush.fillBleed(0.22);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(260, 270); brush.vertex(380, 230); brush.vertex(470, 310); brush.vertex(430, 340); brush.vertex(260, 330); brush.vertex(200, 290); brush.vertex(260, 270);
    brush.endShape(true);
  }
  // dark green shadow under the crown
  brush.fill("#5a8a8a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(100, 330); brush.vertex(500, 340); brush.vertex(520, 470); brush.vertex(260, 450); brush.vertex(80, 470);
  brush.endShape(true);
  // snow on lower branches
  brush.fill("#fff8f0", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(200, 320); brush.vertex(260, 300); brush.vertex(320, 320); brush.vertex(260, 340);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(420, 330); brush.vertex(470, 310); brush.vertex(520, 330); brush.vertex(470, 350);
  brush.endShape(true);
  // ground: pale grass
  brush.fill("#d4e4d0", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 470); brush.vertex(600, 460); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // a blue reflection in a puddle
  brush.fill("#5a8ac8", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(240, 520); brush.vertex(360, 520); brush.vertex(360, 570); brush.vertex(240, 570);
  brush.endShape(true);
}
