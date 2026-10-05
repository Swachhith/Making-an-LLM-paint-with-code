async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4efe4");
  brush.noStroke();
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#e8a020", 220);
  brush.beginShape(0.3);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 130); brush.vertex(-40, 130);
  brush.endShape(true);
  brush.fill("#b02418", 235);
  brush.beginShape(0.3);
  brush.vertex(-40, 130); brush.vertex(640, 130); brush.vertex(640, 180); brush.vertex(-40, 180);
  brush.endShape(true);
  brush.fill("#1c70c0", 210);
  brush.beginShape(0.3);
  brush.vertex(-40, 180); brush.vertex(640, 180); brush.vertex(640, 520); brush.vertex(-40, 520);
  brush.endShape(true);
  const wins = [[40, 220, 200, 380], [400, 220, 560, 380]];
  for (let w = 0; w < 2; w++) {
    brush.fill("#f6ebb0", 255);
    brush.beginShape(0.3);
    brush.vertex(wins[w][0], wins[w][1]); brush.vertex(wins[w][2], wins[w][1]); brush.vertex(wins[w][2], wins[w][3]); brush.vertex(wins[w][0], wins[w][3]);
    brush.endShape(true);
    brush.fill("#6ab04a", 170);
    brush.beginShape(0.6);
    brush.vertex(wins[w][0], wins[w][3] - 50); brush.vertex(wins[w][2], wins[w][3] - 70); brush.vertex(wins[w][2], wins[w][3]); brush.vertex(wins[w][0], wins[w][3]);
    brush.endShape(true);
  }
  brush.fill("#7a1a60", 230);
  brush.beginShape(0.4);
  brush.vertex(-40, 450); brush.vertex(120, 430); brush.vertex(220, 460); brush.vertex(220, 520); brush.vertex(-40, 520);
  brush.endShape(true);
  brush.fill("#c42818", 240);
  brush.beginShape(0.3);
  brush.vertex(-40, 520); brush.vertex(640, 520); brush.vertex(640, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#5a1a8a", 240);
  brush.beginShape(0.5);
  brush.vertex(255, 420); brush.vertex(390, 420); brush.vertex(400, 520); brush.vertex(250, 520);
  brush.endShape(true);
  brush.fill("#1a1a60", 240);
  brush.beginShape(0.6);
  brush.vertex(290, 290); brush.vertex(350, 290); brush.vertex(375, 430); brush.vertex(270, 430);
  brush.endShape(true);
  brush.fill("#2a1008", 245);
  brush.circle(318, 266, 21, 0.5);
  brush.fill("#ff9a20", 235);
  brush.beginShape(0.3);
  brush.vertex(300, 350); brush.vertex(345, 345); brush.vertex(350, 380); brush.vertex(305, 385);
  brush.endShape(true);
  brush.fill("#f4efe4", 255);
  brush.beginShape(0.3);
  brush.vertex(306, 352); brush.vertex(338, 349); brush.vertex(341, 374); brush.vertex(309, 377);
  brush.endShape(true);
}
