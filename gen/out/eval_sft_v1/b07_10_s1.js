async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4efe8");
  randomSeed(2107);
  brush.noStroke();

  // deep green stem, curving, with a couple of leaves
  brush.fill("#1e5a2a", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(290, 560); brush.vertex(300, 420); brush.vertex(315, 290); brush.vertex(330, 180); brush.vertex(345, 90); brush.vertex(330, 50); brush.vertex(300, 70); brush.vertex(275, 130); brush.vertex(260, 200); brush.vertex(245, 270); brush.vertex(235, 350); brush.vertex(225, 430); brush.vertex(215, 510); brush.vertex(210, 550);
  brush.endShape(true);
  brush.fill("#2a7a3a", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(235, 300); brush.vertex(250, 300); brush.vertex(255, 340); brush.vertex(240, 340); brush.vertex(238, 310);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(280, 380); brush.vertex(295, 380); brush.vertex(300, 415); brush.vertex(285, 415); brush.vertex(282, 390);
  brush.endShape(true);

  // loose loose petals, side view, overlapping, two passes each
  const petals = [
    [[300, 140], [260, 160], [230, 200], [215, 250], [225, 300], [260, 330], [300, 310], [340, 330], [375, 300], [360, 250], [345, 200], [320, 160]],
    [[300, 140], [340, 160], [370, 200], [385, 250], [375, 300], [340, 330], [300, 310], [260, 330], [225, 300], [215, 250], [230, 200], [260, 160]],
    [[300, 140], [330, 180], [350, 230], [345, 275], [315, 300], [285, 275], [270, 230], [290, 180]],
    [[300, 140], [270, 180], [250, 230], [255, 275], [285, 300], [315, 275], [330, 230], [350, 180]],
    [[300, 140], [250, 180], [220, 230], [215, 275], [245, 300], [275, 275], [290, 230], [300, 190]],
    [[300, 140], [350, 180], [380, 230], [385, 275], [355, 300], [325, 275], [310, 230], [290, 190]],
    [[300, 140], [350, 200], [380, 250], [385, 295], [355, 320], [325, 295], [310, 250], [280, 200]],
    [[300, 140], [250, 200], [220, 250], [215, 295], [245, 320], [275, 295], [310, 250], [340, 200]],
    [[300, 140], [280, 170], [255, 190], [235, 210], [225, 230], [240, 245], [265, 225], [290, 205]],
    [[300, 140], [320, 170], [345, 190], [365, 210], [375, 230], [360, 245], [335, 225], [310, 205]],
    [[300, 140], [300, 115], [285, 90], [265, 75], [245, 90], [260, 115]],
    [[300, 140], [300, 115], [315, 90], [335, 75], [355, 90], [340, 115]],
    [[300, 140], [295, 125], [285, 110], [270, 95], [255, 110], [265, 125]],
    [[300, 140], [305, 125], [315, 110], [330, 95], [345, 110], [335, 125]],
  ];
  for (const p of petals) {
    brush.fill("#e88aa8", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    for (const v of p) brush.vertex(v[0], v[1]);
    brush.endShape(true);
    brush.fill("#c84a6a", 195);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.5);
    for (const v of p) brush.vertex(v[0], v[1]);
    brush.endShape(true);
  }
  // deeper cupped ring
  brush.fill("#b82a5a", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(285, 170); brush.vertex(315, 150); brush.vertex(345, 170); brush.vertex(340, 200); brush.vertex(310, 220); brush.vertex(280, 200); brush.vertex(275, 170);
  brush.endShape(true);
  // centre
  brush.fill("#d96a8a", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(300, 140, 22, 0.3);
  brush.fill("#a82a4a", 230);
  brush.fillBleed(0.15);
  brush.circle(300, 140, 12, 0.3);
  brush.fill("#5a1a2a", 225);
  brush.fillBleed(0.15);
  brush.circle(300, 140, 5, 0.3);
}
