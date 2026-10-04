async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fffaf0");
  brush.noStroke();
  // intense sky gradient: ultramarine top, turquoise lower
  brush.fill("#1238b8", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 200);
  brush.endShape(true);
  brush.fill("#18a6c9", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 180); brush.vertex(620, 220); brush.vertex(620, 460); brush.vertex(-20, 460);
  brush.endShape(true);
  // hill from below: dome of grass
  brush.fill("#2e9c2a", 225);
  brush.fillBleed(0.28);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 620); brush.vertex(-20, 470); brush.vertex(200, 410); brush.vertex(420, 420); brush.vertex(620, 480); brush.vertex(620, 620);
  brush.endShape(true);
  brush.fill("#146b24", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 620); brush.vertex(-20, 540); brush.vertex(300, 500); brush.vertex(620, 540); brush.vertex(620, 620);
  brush.endShape(true);
  // chapel small on crest, towering tall due to low angle (walls paper)
  // shadowed side
  brush.fill("#6d5bd0", 215);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.05);
  brush.vertex(330, 300); brush.vertex(385, 320); brush.vertex(385, 425); brush.vertex(330, 420);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(275, 150); brush.vertex(295, 158); brush.vertex(295, 300); brush.vertex(275, 300);
  brush.endShape(true);
  // red roof + dome
  brush.fill("#d6262a", 230);
  brush.fillBleed(0.15);
  brush.beginShape(0.05);
  brush.vertex(205, 305); brush.vertex(270, 262); brush.vertex(335, 305); brush.vertex(390, 325); brush.vertex(385, 312); brush.vertex(330, 292); brush.vertex(270, 250); brush.vertex(210, 292);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(235, 155); brush.vertex(265, 110); brush.vertex(295, 155);
  brush.endShape(true);
  // arched door and bell opening
  brush.fill("#2a1a50", 230);
  brush.fillBleed(0.1);
  brush.beginShape(0.5);
  brush.vertex(255, 420); brush.vertex(255, 370); brush.vertex(270, 355); brush.vertex(285, 370); brush.vertex(285, 420);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(255, 210); brush.vertex(265, 195); brush.vertex(275, 210); brush.vertex(275, 240); brush.vertex(255, 240);
  brush.endShape(true);
  // walls' left edge outline in turquoise via sky surrounding is already enough; flowers in grass
  let cols = ["#f2c500", "#e8255a", "#ff7a00"];
  for (let i = 0; i < 22; i++) {
    brush.fill(cols[i % 3], 220);
    brush.fillBleed(0.2);
    brush.circle(20 + (i * 137) % 580, 500 + (i * 53) % 90, 5 + (i % 4) * 2, 0.5);
  }
}
