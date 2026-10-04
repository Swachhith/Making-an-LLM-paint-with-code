async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf0dc");
  brush.noStroke();

  // warm sky, glow from low right
  brush.fill("#f3c98b", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 500); brush.vertex(-20, 500);
  brush.endShape(true);
  brush.fill("#f2a86b", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.4);
  brush.circle(470, 380, 170, true);

  // distant mountain, broad, violet-rose in warm light
  brush.fill("#b8687a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, 470); brush.vertex(80, 330); brush.vertex(170, 230); brush.vertex(245, 130);
  brush.vertex(300, 180); brush.vertex(360, 250); brush.vertex(450, 330); brush.vertex(620, 420); brush.vertex(620, 480);
  brush.endShape(true);
  // shade side
  brush.fill("#6e3f6a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.2);
  brush.vertex(245, 132); brush.vertex(300, 182); brush.vertex(360, 252); brush.vertex(450, 332);
  brush.vertex(620, 422); brush.vertex(620, 480); brush.vertex(330, 480); brush.vertex(290, 330); brush.vertex(262, 220);
  brush.endShape(true);
  // snow near peak left as paper by painting a pale rim? add warm light rim on lit side
  brush.fill("#f7d9a4", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(245, 132); brush.vertex(225, 170); brush.vertex(240, 175); brush.vertex(258, 200); brush.vertex(262, 160);
  brush.endShape(true);

  // low horizon meadow strip
  brush.fill("#b58a3e", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 470); brush.vertex(300, 462); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8a6a2e", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 540); brush.vertex(200, 525); brush.vertex(420, 545); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // hut, small, left of centre
  brush.fill("#e8c89a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.3);
  brush.beginShape(0.05);
  brush.vertex(156, 490); brush.vertex(156, 439); brush.vertex(249, 439); brush.vertex(249, 490);
  brush.endShape(true);
  brush.fill("#a8826a", 210);
  brush.beginShape(0.05);
  brush.vertex(249, 490); brush.vertex(249, 439); brush.vertex(278, 429); brush.vertex(278, 484);
  brush.endShape(true);
  for (let p = 0; p < 2; p++) {
    brush.fill("#c1272d", 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.05);
    brush.vertex(138, 444); brush.vertex(190, 399); brush.vertex(288, 399); brush.vertex(295, 436);
    brush.endShape(true);
  }
  brush.fill("#5a3a2a", 220);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(198, 470, 8, true);
  // long shadow toward left
  brush.fill("#6d4f25", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(160, 490); brush.vertex(275, 488); brush.vertex(90, 515); brush.vertex(50, 506);
  brush.endShape(true);
}
