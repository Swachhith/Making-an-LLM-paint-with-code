async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf0d8");
  brush.noStroke();
  // sky bands, wide overlaps so they melt together
  const bands = [
    ["#4a1680", -20, 180, 225],
    ["#b0156a", 100, 270, 215],
    ["#ee3a1a", 200, 350, 215],
    ["#ff9a00", 290, 440, 210]
  ];
  for (const b of bands) {
    brush.fill(b[0], b[3]);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.8);
    brush.vertex(-20, b[1]);
    brush.vertex(180, b[1] + 25);
    brush.vertex(420, b[1] - 15);
    brush.vertex(620, b[1] + 10);
    brush.vertex(620, b[2]);
    brush.vertex(300, b[2] + 20);
    brush.vertex(-20, b[2]);
    brush.endShape(true);
  }
  brush.fill("#3a1070", 210);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 90); brush.vertex(300, 120); brush.vertex(-20, 80);
  brush.endShape(true);
  // sun left mostly paper-yellow with a hot halo
  brush.fill("#ff6a10", 190);
  brush.fillBleed(0.3);
  brush.circle(370, 380, 110, 0.5);
  brush.fill("#ffd21a", 245);
  brush.fillBleed(0.15);
  brush.circle(370, 385, 60, 0.2);
  brush.fill("#ffe86a", 230);
  brush.circle(370, 385, 40, 0.2);
  // hills, each built from three passes so they go properly dark
  const hills = [
    ["#6a1050", [[-20, 430], [120, 385], [270, 415], [430, 395], [620, 375]]],
    ["#2e0a3c", [[-20, 480], [160, 438], [330, 478], [500, 445], [620, 465]]],
    ["#12051a", [[-20, 530], [220, 505], [420, 545], [620, 515]]]
  ];
  for (const h of hills) {
    for (let pass = 0; pass < 3; pass++) {
      brush.fill(h[0], 230 - pass * 15);
      brush.fillBleed(0.15);
      brush.fillTexture(0.35, 0.45);
      brush.beginShape(0.8);
      for (const v of h[1]) brush.vertex(v[0], v[1] + pass * 4);
      brush.vertex(620, 620); brush.vertex(-20, 620);
      brush.endShape(true);
    }
  }
  // a lone tree on the middle ridge
  for (let pass = 0; pass < 3; pass++) {
    brush.fill("#12051a", 230);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0.2);
    brush.vertex(140, 445); brush.vertex(158, 445); brush.vertex(157, 395); brush.vertex(141, 395);
    brush.endShape(true);
    brush.circle(150, 378, 32, 0.6);
    brush.circle(130, 392, 22, 0.6);
    brush.circle(172, 390, 24, 0.6);
  }
  // a pair of birds crossing the sun
  brush.fill("#2e0a3c", 230);
  brush.fillBleed(0.1);
  brush.circle(330, 330, 4, 0.3);
  brush.circle(350, 318, 3, 0.3);
}
