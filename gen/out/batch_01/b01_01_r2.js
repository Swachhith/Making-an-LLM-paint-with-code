async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  randomSeed(11);
  brush.noStroke();

  brush.fill("#cbb89a", 80);
  brush.fillBleed(0.5, "out");
  brush.fillTexture(0.6, 0.3);
  brush.beginShape(0.8);
  brush.vertex(40, 90); brush.vertex(520, 60); brush.vertex(570, 420); brush.vertex(300, 560); brush.vertex(60, 470);
  brush.endShape(true);

  // arching stem to the bud
  brush.fill("#6e6b45", 235);
  brush.fillBleed(0.15, "out");
  brush.fillTexture(0.3, 0.5);
  brush.beginShape(0.9);
  brush.vertex(250, 580); brush.vertex(262, 430); brush.vertex(300, 300); brush.vertex(380, 200); brush.vertex(455, 175);
  brush.vertex(458, 183); brush.vertex(386, 210); brush.vertex(310, 305); brush.vertex(272, 432); brush.vertex(262, 580);
  brush.endShape(true);

  // orchid leaves at base
  brush.fill("#5f6a3e", 180);
  brush.fillBleed(0.3, "out");
  brush.beginShape(0.7);
  brush.vertex(255, 570); brush.vertex(140, 520); brush.vertex(60, 540); brush.vertex(150, 585);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(262, 570); brush.vertex(380, 530); brush.vertex(470, 560); brush.vertex(360, 595);
  brush.endShape(true);

  // open bloom centred at (220, 300)
  let cx = 220, cy = 290;
  let sepals = [-90, 30, 150];
  for (let pass = 0; pass < 2; pass++) {
    for (let a of sepals) {
      let len = pass == 0 ? 170 : 135;
      let w = pass == 0 ? 60 : 40;
      brush.fill(pass == 0 ? "#b89bb0" : "#8f6e8a", pass == 0 ? 140 : 220);
      brush.fillBleed(pass == 0 ? 0.45 : 0.2, "out");
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.8);
      brush.vertex(cx, cy);
      brush.vertex(cx + cos(a - 12) * len * 0.5 + cos(a + 90) * w * 0.3, cy + sin(a - 12) * len * 0.5 + sin(a + 90) * w * 0.3);
      brush.vertex(cx + cos(a) * len, cy + sin(a) * len);
      brush.vertex(cx + cos(a + 12) * len * 0.5 - cos(a + 90) * w * 0.3, cy + sin(a + 12) * len * 0.5 - sin(a + 90) * w * 0.3);
      brush.endShape(true);
    }
  }
  // two broad petals
  for (let a of [-25, 205]) {
    for (let pass = 0; pass < 3; pass++) {
      let s = [1, 0.8, 0.5][pass];
      brush.fill(["#a9869f", "#7d5a78", "#6a4665"][pass], [120, 180, 235][pass]);
      brush.fillBleed([0.5, 0.3, 0.15][pass], "out");
      brush.fillTexture(0.6, 0.4);
      brush.beginShape(0.9);
      brush.vertex(cx, cy);
      brush.vertex(cx + cos(a - 35) * 125 * s, cy + sin(a - 35) * 125 * s);
      brush.vertex(cx + cos(a) * 165 * s, cy + sin(a) * 165 * s);
      brush.vertex(cx + cos(a + 30) * 118 * s, cy + sin(a + 30) * 118 * s);
      brush.endShape(true);
    }
  }
  // labellum
  brush.fill("#5a3552", 235);
  brush.fillBleed(0.25, "out");
  brush.fillTexture(0.4, 0.6);
  brush.beginShape(0.9);
  brush.vertex(cx - 20, cy + 5); brush.vertex(cx - 38, cy + 55); brush.vertex(cx, cy + 85); brush.vertex(cx + 38, cy + 55); brush.vertex(cx + 20, cy + 5);
  brush.endShape(true);
  brush.fill("#c9a24a", 235);
  brush.fillBleed(0.1, "out");
  brush.circle(cx, cy + 12, 9, true);
  brush.fill("#efe4d2", 235);
  brush.fillBleed(0.05, "out");
  brush.circle(cx, cy - 4, 6, true);

  // closed bud at stem tip
  for (let pass = 0; pass < 3; pass++) {
    let s = [1, 0.75, 0.45][pass];
    brush.fill(["#b99db3", "#8a6b86", "#644560"][pass], [140, 200, 235][pass]);
    brush.fillBleed([0.4, 0.25, 0.1][pass], "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(455, 178);
    brush.vertex(455 + 42 * s, 140 - 8 * s);
    brush.vertex(470 + 95 * s, 168);
    brush.vertex(455 + 45 * s, 205 + 12 * s);
    brush.endShape(true);
  }
}
