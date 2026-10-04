async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece6dc");
  brush.noStroke();

  // narrow dawn sky across the top, horizon at ~150
  brush.fill("#e3bfa0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 160); brush.vertex(-20, 160);
  brush.endShape(true);
  brush.fill("#f0d6a8", 190);
  brush.fillBleed(0.3);
  brush.circle(420, 150, 38, 0.2);

  // distant treeline, smudged grey-violet by mist
  brush.fill("#8e8683", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 160); brush.vertex(40, 138); brush.vertex(90, 150); brush.vertex(150, 132); brush.vertex(220, 152); brush.vertex(300, 145); brush.vertex(360, 156); brush.vertex(620, 150); brush.vertex(620, 175); brush.vertex(-20, 178);
  brush.endShape(true);

  // mist bands are paper; meadow washes in bands with gaps between
  let bands = [
    [180, 240, "#b7ac86", 160],
    [260, 340, "#a39a6c", 175],
    [360, 460, "#8c865a", 190],
    [470, 620, "#6f6b45", 205]
  ];
  for (let b of bands) {
    brush.fill(b[2], b[3]);
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.5);
    brush.vertex(-20, b[0] + 10); brush.vertex(180, b[0]); brush.vertex(420, b[0] + 14); brush.vertex(620, b[0] - 4);
    brush.vertex(620, b[1]); brush.vertex(300, b[1] - 12); brush.vertex(-20, b[1]);
    brush.endShape(true);
  }

  // a lone tree half lost in mist, left of centre
  brush.fill("#7a7468", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.circle(170, 225, 42, 0.6);
  brush.fill("#5f5a4e", 190);
  brush.circle(176, 232, 26, 0.5);
  brush.beginShape(0.2);
  brush.vertex(168, 250); brush.vertex(184, 250); brush.vertex(186, 285); brush.vertex(166, 285);
  brush.endShape(true);

  // foreground grass tufts in rust and umber
  for (let i = 0; i < 9; i++) {
    let x = 30 + i * 68 + (i % 3) * 7;
    brush.fill(i % 2 ? "#7b5a3a" : "#5d5838", 200);
    brush.fillBleed(0.22);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.6);
    brush.vertex(x - 20, 610); brush.vertex(x - 6, 540 - (i % 4) * 10); brush.vertex(x + 4, 560); brush.vertex(x + 16, 530 - (i % 3) * 12); brush.vertex(x + 24, 610);
    brush.endShape(true);
  }
}
