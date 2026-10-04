async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbeede");
  randomSeed(1010);
  brush.noStroke();

  // stacked bold sky bands, top to horizon
  const bands = [["#5a1e8c", -20, 110], ["#b2206e", 80, 210], ["#ec4a2a", 190, 330], ["#ff9a1f", 300, 430], ["#ffd23f", 390, 470]];
  for (const b of bands) {
    brush.fill(b[0], 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.4);
    brush.beginShape(0.6);
    brush.vertex(-20, b[1] + random(-10, 10)); brush.vertex(300, b[1] + random(-15, 15));
    brush.vertex(620, b[1] + random(-10, 10)); brush.vertex(620, b[2]); brush.vertex(-20, b[2]);
    brush.endShape(true);
  }

  // the sun half-set, pale yellow over orange
  brush.fill("#fff08a", 230);
  brush.fillBleed(0.2);
  brush.circle(380, 468, 55, 0.2);

  // long thin clouds as ribbons of magenta
  brush.fill("#8a1a5e", 180);
  for (let i = 0; i < 3; i++) {
    const y = 150 + i * 70, x = random(-40, 250);
    brush.beginShape(0.7);
    brush.vertex(x, y); brush.vertex(x + 200, y - 10); brush.vertex(x + 330, y + 4); brush.vertex(x + 180, y + 18);
    brush.endShape(true);
  }

  // desert floor, low
  brush.fill("#8a3a1a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 475); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#4a1a14", 200);
  brush.beginShape(0.6);
  brush.vertex(-20, 540); brush.vertex(300, 525); brush.vertex(620, 560); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // distant mesa
  brush.fill("#5a1e3a", 220);
  brush.beginShape(0.1);
  brush.vertex(20, 478); brush.vertex(40, 440); brush.vertex(150, 438); brush.vertex(170, 478);
  brush.endShape(true);

  // saguaro, dark silhouette, left of centre
  brush.fill("#1a0c14", 240);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(205, 560); brush.vertex(207, 300); brush.vertex(220, 285); brush.vertex(233, 300); brush.vertex(235, 560);
  brush.endShape(true);
  // left arm
  brush.beginShape(0.6);
  brush.vertex(208, 440); brush.vertex(175, 440); brush.vertex(168, 360); brush.vertex(180, 350);
  brush.vertex(190, 360); brush.vertex(192, 422); brush.vertex(208, 422);
  brush.endShape(true);
  // right arm
  brush.beginShape(0.6);
  brush.vertex(234, 400); brush.vertex(262, 400); brush.vertex(266, 330); brush.vertex(278, 322);
  brush.vertex(288, 332); brush.vertex(282, 418); brush.vertex(234, 418);
  brush.endShape(true);
}
