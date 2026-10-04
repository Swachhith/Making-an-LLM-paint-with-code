async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf2e2");
  randomSeed(1222);
  brush.noStroke();

  // warm sky: gold at the top melting into peach
  brush.fill("#f7c77a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 280);
  brush.endShape(true);
  brush.fill("#f4a07e", 170);
  brush.beginShape(0.7);
  brush.vertex(-20, 200); brush.vertex(300, 240); brush.vertex(620, 190); brush.vertex(620, 380); brush.vertex(-20, 380);
  brush.endShape(true);

  // far range, then nearer range, each warmer-dark
  brush.fill("#d09aa0", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(-20, 330); brush.vertex(60, 250); brush.vertex(130, 290); brush.vertex(220, 210);
  brush.vertex(320, 280); brush.vertex(440, 220); brush.vertex(530, 270); brush.vertex(620, 240); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);
  brush.fill("#a86a78", 190);
  brush.beginShape(0.3);
  brush.vertex(-20, 390); brush.vertex(90, 330); brush.vertex(200, 370); brush.vertex(330, 320);
  brush.vertex(470, 370); brush.vertex(620, 330); brush.vertex(620, 460); brush.vertex(-20, 460);
  brush.endShape(true);

  // summit rock, ochre, two passes
  for (let k = 0; k < 2; k++) {
    brush.fill(k ? "#9a5a2a" : "#c98a4a", 215);
    brush.fillBleed(0.2);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.4);
    brush.vertex(-20, 470 + k * 50); brush.vertex(140, 440 + k * 50); brush.vertex(300, 470 + k * 40);
    brush.vertex(460, 450 + k * 50); brush.vertex(620, 500 + k * 40); brush.vertex(620, 620); brush.vertex(-20, 620);
    brush.endShape(true);
  }

  // hiker: large, from the waist up, left of centre, looking right
  // torso in a mustard jacket, three passes
  const jac = [["#e6a830", 225], ["#c98a1e", 190], ["#9a6410", 160]];
  for (let k = 0; k < 3; k++) {
    brush.fill(jac[k][0], jac[k][1]);
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(120 + k * 25, 620); brush.vertex(125 + k * 20, 400); brush.vertex(170 + k * 15, 330);
    brush.vertex(250, 310); brush.vertex(310 - k * 10, 335); brush.vertex(335 - k * 12, 420); brush.vertex(330 - k * 15, 620);
    brush.endShape(true);
  }
  // backpack peeking behind the left shoulder
  for (let k = 0; k < 2; k++) {
    brush.fill(k ? "#7a1e14" : "#c0402a", 220);
    brush.fillBleed(0.2);
    brush.beginShape(0.5);
    brush.vertex(80, 560); brush.vertex(85, 330); brush.vertex(150, 305); brush.vertex(165, 560);
    brush.endShape(true);
  }
  // strap across the chest
  brush.fill("#5a2a14", 210);
  brush.beginShape(0.3);
  brush.vertex(170, 335); brush.vertex(190, 330); brush.vertex(215, 620); brush.vertex(193, 620);
  brush.endShape(true);
  // arm raised, pointing to the far peaks
  for (let k = 0; k < 2; k++) {
    brush.fill(k ? "#b07818" : "#e6a830", 215);
    brush.beginShape(0.6);
    brush.vertex(285, 340); brush.vertex(420, 265); brush.vertex(438, 290); brush.vertex(310, 385);
    brush.endShape(true);
  }
  brush.fill("#d98a62", 225);
  brush.circle(440, 272, 16, 0.3);
  // neck, then head in three-quarter view turned toward the peaks
  brush.fill("#dd9468", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(232, 290); brush.vertex(266, 290); brush.vertex(270, 330); brush.vertex(228, 332);
  brush.endShape(true);
  for (let k = 0; k < 2; k++) {
    brush.fill(k ? "#e8a078" : "#d98860", 225);
    brush.beginShape(0.8);
    brush.vertex(215, 240); brush.vertex(228, 200); brush.vertex(270, 195); brush.vertex(292, 225);
    brush.vertex(300, 250); brush.vertex(290, 258); brush.vertex(286, 285); brush.vertex(262, 300); brush.vertex(228, 292);
    brush.endShape(true);
  }
  // shadow side of the face and the ear
  brush.fill("#a8563a", 190);
  brush.beginShape(0.8);
  brush.vertex(215, 240); brush.vertex(230, 222); brush.vertex(246, 290); brush.vertex(228, 292);
  brush.endShape(true);
  brush.fill("#c06a48", 210);
  brush.circle(238, 252, 8, 0.3);
  brush.fill("#3a2016", 225);
  brush.circle(278, 238, 3.5, 0.2);
  // hair at the nape
  brush.fill("#4a2a1a", 225);
  brush.beginShape(0.6);
  brush.vertex(212, 230); brush.vertex(226, 215); brush.vertex(236, 240); brush.vertex(228, 292); brush.vertex(210, 280);
  brush.endShape(true);
  // blue beanie sitting on the head
  for (let k = 0; k < 2; k++) {
    brush.fill(k ? "#1e4a6a" : "#2f6a9a", 225);
    brush.beginShape(0.6);
    brush.vertex(210, 228); brush.vertex(220, 185); brush.vertex(255, 168); brush.vertex(288, 182); brush.vertex(298, 222); brush.vertex(255, 215);
    brush.endShape(true);
  }
}
