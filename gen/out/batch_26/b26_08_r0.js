async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5f7f8");
  randomSeed(2608);
  brush.noStroke();

  // deep cobalt sky, stronger at the top
  brush.fill("#2f6fd0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 460); brush.vertex(-20, 460);
  brush.endShape(true);
  brush.fill("#1a4cae", 180);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 120); brush.vertex(300, 90); brush.vertex(-20, 150);
  brush.endShape(true);

  // grass bank close to the eye, looming
  brush.fill("#3aa02a", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(200, 440); brush.vertex(420, 450); brush.vertex(620, 420);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1f7a20", 200);
  brush.beginShape(0.6);
  brush.vertex(-20, 540); brush.vertex(300, 520); brush.vertex(620, 560); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // walls seen from below: base wide, converging upward (shadow side right)
  brush.fill("#f0c878", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0);
  brush.vertex(110, 460); brush.vertex(360, 470); brush.vertex(350, 250); brush.vertex(140, 240);
  brush.endShape(true);
  brush.fill("#c88a40", 210);
  brush.beginShape(0);
  brush.vertex(360, 470); brush.vertex(520, 440); brush.vertex(495, 260); brush.vertex(350, 250);
  brush.endShape(true);

  // red roof: big eave overhang from below, gable end on the right
  brush.fill("#d8261c", 220);
  brush.fillBleed(0.22);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0);
  brush.vertex(90, 250); brush.vertex(370, 262); brush.vertex(330, 110); brush.vertex(170, 100);
  brush.endShape(true);
  brush.fill("#a0100e", 210);
  brush.beginShape(0);
  brush.vertex(350, 255); brush.vertex(520, 265); brush.vertex(430, 150);
  brush.endShape(true);
  brush.fill("#8a0a0a", 200);
  brush.beginShape(0);
  brush.vertex(90, 250); brush.vertex(370, 262); brush.vertex(368, 280); brush.vertex(100, 268);
  brush.endShape(true);

  // chimney
  brush.fill("#7a2a18", 220);
  brush.beginShape(0);
  brush.vertex(270, 130); brush.vertex(300, 130); brush.vertex(296, 60); brush.vertex(274, 62);
  brush.endShape(true);

  // door and windows
  brush.fill("#1f3f8a", 230);
  brush.beginShape(0);
  brush.vertex(220, 462); brush.vertex(268, 464); brush.vertex(266, 360); brush.vertex(222, 358);
  brush.endShape(true);
  brush.fill("#243a5e", 220);
  brush.beginShape(0);
  brush.vertex(150, 330); brush.vertex(195, 332); brush.vertex(194, 285); brush.vertex(152, 283);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(290, 336); brush.vertex(335, 338); brush.vertex(334, 290); brush.vertex(292, 288);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(410, 360); brush.vertex(460, 352); brush.vertex(455, 300); brush.vertex(408, 304);
  brush.endShape(true);

  // red flowers along the base
  for (let k = 0; k < 14; k++) {
    brush.fill(k % 2 ? "#e83a3a" : "#f0a020", 230);
    brush.circle(110 + k * 30 + random(-8, 8), 468 + random(-6, 10), random(6, 11), true);
  }
}
