async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ede4d3");
  brush.noStroke();

  brush.fill("#c9b99a", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 380); brush.vertex(620, 350); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // long sword leaves
  const leaves = [[200, 600, 170, 250], [250, 600, 300, 200], [330, 600, 390, 230], [380, 600, 460, 300], [150, 600, 110, 330]];
  for (const l of leaves) {
    brush.fill("#6b7a4e", 200);
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(l[0] - 12, l[1]);
    brush.vertex((l[0] + l[2]) / 2 - 6, (l[1] + l[3]) / 2);
    brush.vertex(l[2], l[3]);
    brush.vertex((l[0] + l[2]) / 2 + 12, (l[1] + l[3]) / 2);
    brush.vertex(l[0] + 12, l[1]);
    brush.endShape(true);
  }

  // stems
  brush.fill("#556240", 210);
  brush.beginShape(0.3);
  brush.vertex(225, 600); brush.vertex(215, 260); brush.vertex(232, 260); brush.vertex(243, 600);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(300, 600); brush.vertex(330, 200); brush.vertex(346, 200); brush.vertex(318, 600);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(355, 600); brush.vertex(420, 320); brush.vertex(436, 322); brush.vertex(372, 600);
  brush.endShape(true);

  function iris(x, y, s) {
    // standards (upright)
    brush.fill("#7b5a86", 190);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.45);
    brush.beginShape(0.7);
    brush.vertex(x, y); brush.vertex(x - 30 * s, y - 50 * s); brush.vertex(x - 6 * s, y - 85 * s); brush.vertex(x + 8 * s, y - 50 * s);
    brush.endShape(true);
    brush.beginShape(0.7);
    brush.vertex(x, y); brush.vertex(x + 30 * s, y - 55 * s); brush.vertex(x + 10 * s, y - 88 * s); brush.vertex(x - 6 * s, y - 50 * s);
    brush.endShape(true);
    // falls (drooping)
    brush.fill("#5e3f6e", 210);
    brush.fillBleed(0.25);
    brush.beginShape(0.7);
    brush.vertex(x, y - 10 * s); brush.vertex(x - 60 * s, y + 5 * s); brush.vertex(x - 55 * s, y + 45 * s); brush.vertex(x - 15 * s, y + 25 * s);
    brush.endShape(true);
    brush.beginShape(0.7);
    brush.vertex(x, y - 10 * s); brush.vertex(x + 62 * s, y + 2 * s); brush.vertex(x + 58 * s, y + 45 * s); brush.vertex(x + 15 * s, y + 25 * s);
    brush.endShape(true);
    brush.fill("#4a2f58", 200);
    brush.beginShape(0.7);
    brush.vertex(x - 10 * s, y); brush.vertex(x, y + 50 * s); brush.vertex(x + 10 * s, y);
    brush.endShape(true);
    // beard
    brush.fill("#c79a3a", 230);
    brush.fillBleed(0.2);
    brush.circle(x - 25 * s, y + 12 * s, 7 * s, 0.5);
    brush.circle(x + 25 * s, y + 12 * s, 7 * s, 0.5);
  }
  iris(222, 250, 1.0);
  iris(340, 190, 1.15);
  iris(428, 315, 0.9);
}
