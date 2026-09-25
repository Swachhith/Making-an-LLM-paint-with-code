async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  brush.noStroke();

  // bare paper; long blue-grey leaves first
  brush.fill("#7c8466", 140);
  brush.fillBleed(0.4, "out");
  brush.fillTexture(0.6, 0.4);
  brush.beginShape(0.8);
  brush.vertex(250, 590); brush.vertex(170, 430); brush.vertex(150, 300); brush.vertex(215, 440); brush.vertex(275, 590);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(300, 590); brush.vertex(410, 470); brush.vertex(470, 390); brush.vertex(430, 490); brush.vertex(330, 595);
  brush.endShape(true);
  brush.fill("#5d6649", 200);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.8);
  brush.vertex(252, 590); brush.vertex(190, 450); brush.vertex(172, 360); brush.vertex(222, 460); brush.vertex(268, 590);
  brush.endShape(true);

  // stems
  brush.fill("#6b7250", 235);
  brush.fillBleed(0.1, "out");
  brush.fillTexture(0.3, 0.5);
  brush.beginShape(0.7);
  brush.vertex(262, 595); brush.vertex(250, 400); brush.vertex(235, 250); brush.vertex(245, 250); brush.vertex(262, 400); brush.vertex(274, 595);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(300, 595); brush.vertex(340, 420); brush.vertex(390, 310); brush.vertex(398, 316); brush.vertex(350, 424); brush.vertex(311, 595);
  brush.endShape(true);

  // open tulip: petals flaring outward, cup centred (240, 190)
  let petals = [
    [[240, 250], [150, 210], [120, 120], [185, 150]],
    [[240, 250], [330, 210], [360, 120], [295, 150]],
    [[240, 250], [190, 160], [215, 80], [255, 150]],
    [[240, 250], [262, 150], [280, 85], [300, 175]],
  ];
  let tones = [["#9d8095", 130], ["#6d4c63", 190], ["#523a4c", 225]];
  for (let p of petals) {
    for (let t = 0; t < 3; t++) {
      let k = [1, 0.85, 0.6][t];
      brush.fill(tones[t][0], tones[t][1]);
      brush.fillBleed([0.45, 0.25, 0.1][t], "out");
      brush.fillTexture(0.55, 0.45);
      brush.beginShape(0.9);
      for (let v of p) brush.vertex(240 + (v[0] - 240) * k * 1.3, 250 + (v[1] - 250) * k * 1.3);
      brush.endShape(true);
    }
  }
  brush.fill("#3e3a2a", 235);
  brush.fillBleed(0.15, "out");
  brush.circle(240, 205, 15, true);

  // closed bud, egg shape at (395, 250)
  let layers = [[60, 110, "#a58ba0", 130, 0.45], [48, 95, "#735469", 200, 0.25], [26, 70, "#553b4e", 230, 0.1]];
  for (let L of layers) {
    brush.fill(L[2], L[3]);
    brush.fillBleed(L[4], "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(395, 312); brush.vertex(395 - L[0] * 0.65, 262); brush.vertex(395 - L[0] * 0.4, 312 - L[1] * 1.3); brush.vertex(400, 312 - L[1] * 1.3 - 16); brush.vertex(395 + L[0] * 0.4, 312 - L[1] * 1.3); brush.vertex(395 + L[0] * 0.65, 262);
    brush.endShape(true);
  }
}
