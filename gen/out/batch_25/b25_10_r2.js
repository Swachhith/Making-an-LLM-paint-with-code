async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2eef2");
  randomSeed(1210);
  brush.noStroke();

  // soft violet-grey wash behind, with bright green foliage below
  brush.fill("#c4b4d8", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 330); brush.vertex(-10, 380);
  brush.endShape(true);
  brush.fill("#3aa040", 195);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(1);
  brush.vertex(-10, 430); brush.vertex(150, 400); brush.vertex(400, 430); brush.vertex(610, 380);
  brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#15602a", 200);
  brush.beginShape(1);
  brush.vertex(-10, 520); brush.vertex(300, 490); brush.vertex(610, 530); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);

  // stems
  brush.fill("#15602a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(232, 360); brush.vertex(252, 360); brush.vertex(262, 480); brush.vertex(242, 480);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(462, 230); brush.vertex(480, 236); brush.vertex(430, 440); brush.vertex(412, 436);
  brush.endShape(true);

  // pansy: petals as fan-shaped wedges from one centre so they overlap into one flower
  let cx = 240, cy = 250;
  let wedge = (a, spread, r, col, op, bleed) => {
    brush.fill(col, op);
    brush.fillBleed(bleed);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(1);
    brush.vertex(cx, cy);
    for (let t = -spread; t <= spread; t += spread / 2) brush.vertex(cx + cos(a + t) * r, cy + sin(a + t) * r);
    brush.endShape(true);
  };
  // upper pair, violet, two passes
  wedge(-125, 40, 150, "#5c10ac", 225, 0.28);
  wedge(-55, 40, 150, "#4c0a9a", 225, 0.28);
  wedge(-125, 32, 115, "#34066e", 205, 0.2);
  wedge(-55, 32, 115, "#34066e", 205, 0.2);
  // side pair, yellow with purple edges
  wedge(-190, 35, 130, "#7a20c0", 210, 0.26);
  wedge(10, 35, 130, "#7a20c0", 210, 0.26);
  wedge(-190, 30, 110, "#ffc800", 230, 0.24);
  wedge(10, 30, 110, "#ffc800", 230, 0.24);
  // lower lip, wide yellow
  wedge(90, 50, 135, "#ffd000", 230, 0.26);
  wedge(90, 42, 115, "#ffb400", 200, 0.2);
  // dark face and whisker streaks
  wedge(90, 30, 60, "#2a0460", 230, 0.18);
  wedge(-190, 22, 50, "#2a0460", 220, 0.18);
  wedge(10, 22, 50, "#2a0460", 220, 0.18);
  brush.fill("#ff7000", 240);
  brush.fillBleed(0.12);
  brush.circle(cx, cy, 12, 0.3);

  // bud: a closed twist of violet held in green sepals
  let bx = 470, by = 170;
  brush.fill("#6a14c0", 225);
  brush.fillBleed(0.24);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(1);
  brush.vertex(bx - 4, by - 90); brush.vertex(bx + 34, by - 20); brush.vertex(bx + 6, by + 40); brush.vertex(bx - 30, by - 18);
  brush.endShape(true);
  brush.fill("#34066e", 215);
  brush.fillBleed(0.18);
  brush.beginShape(1);
  brush.vertex(bx, by - 75); brush.vertex(bx + 26, by - 16); brush.vertex(bx + 6, by + 32);
  brush.endShape(true);
  brush.fill("#15802e", 230);
  brush.fillBleed(0.18);
  brush.beginShape(0.5);
  brush.vertex(bx - 34, by + 2); brush.vertex(bx - 6, by + 22); brush.vertex(bx + 6, by + 62);
  brush.vertex(bx + 20, by + 24); brush.vertex(bx + 40, by); brush.vertex(bx + 18, by + 42); brush.vertex(bx - 10, by + 42);
  brush.endShape(true);
}
