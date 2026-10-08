async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f6");
  brush.noStroke();

  // pale sky, soft cloud streaks
  brush.fill("#b8c4d0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 120); brush.vertex(420, 150); brush.vertex(300, 120); brush.vertex(-20, 130);
  brush.endShape(true);
  brush.fill("#cfe3e8", 150);
  brush.beginShape(0.6);
  brush.vertex(-20, 130); brush.vertex(200, 100); brush.vertex(420, 130); brush.vertex(620, 110); brush.vertex(620, 220); brush.vertex(460, 230); brush.vertex(260, 210); brush.vertex(-20, 200);
  brush.endShape(true);

  // far shore: low hill, meadow, tree
  brush.fill("#9fb8a8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 230); brush.vertex(150, 210); brush.vertex(320, 230); brush.vertex(620, 215); brush.vertex(620, 330); brush.vertex(-20, 330);
  brush.endShape(true);
  brush.fill("#7aa08a", 180);
  brush.beginShape(0.4);
  brush.vertex(420, 230); brush.vertex(620, 215); brush.vertex(620, 290); brush.vertex(420, 300);
  brush.endShape(true);
  brush.fill("#4f7a6a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(360, 230); brush.vertex(420, 215); brush.vertex(470, 250); brush.vertex(420, 280); brush.vertex(380, 245);
  brush.endShape(true);
  brush.fill("#3a5a50", 210);
  brush.beginShape(0.4);
  brush.vertex(280, 230); brush.vertex(320, 215); brush.vertex(360, 240); brush.vertex(320, 270); brush.vertex(280, 250);
  brush.endShape(true);
  brush.fill("#2e4a48", 220);
  brush.beginShape(0.4);
  brush.vertex(180, 230); brush.vertex(220, 215); brush.vertex(250, 245); brush.vertex(220, 270); brush.vertex(180, 250);
  brush.endShape(true);

  // mid lake: reflection of hill, a soft green band
  brush.fill("#8fb8a0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 330); brush.vertex(620, 325); brush.vertex(620, 470); brush.vertex(420, 460); brush.vertex(300, 475); brush.vertex(150, 460); brush.vertex(-20, 470);
  brush.endShape(true);

  // foreground: open water, ripple bands
  brush.fill("#9ec0b0", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#7aa890", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 500); brush.vertex(200, 490); brush.vertex(420, 505); brush.vertex(620, 495); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#5f9080", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 530); brush.vertex(150, 520); brush.vertex(300, 535); brush.vertex(460, 525); brush.vertex(620, 540); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // reeds: tall soft columns along both banks, overlapping
  let reeds = [
    [40, 475, 140, "#7a9a7a", 180], [60, 480, 120, "#5f8a6a", 170], [85, 470, 110, "#4f7a5a", 160],
    [110, 485, 90, "#3f6a4a", 150], [130, 475, 100, "#5f8a6a", 160],
    [300, 470, 130, "#7a9a7a", 180], [325, 480, 110, "#5f8a6a", 170], [350, 465, 100, "#4f7a5a", 160],
    [375, 485, 90, "#3f6a4a", 150], [395, 475, 105, "#5f8a6a", 160],
    [520, 475, 135, "#7a9a7a", 180], [545, 485, 115, "#5f8a6a", 170], [570, 470, 105, "#4f7a5a", 160],
    [595, 488, 95, "#3f6a4a", 150],
    [500, 520, 150, "#5f8a6a", 170], [520, 530, 130, "#4f7a5a", 160], [540, 540, 110, "#3f6a4a", 150],
    [100, 520, 140, "#5f8a6a", 170], [120, 530, 120, "#4f7a5a", 160], [140, 540, 100, "#3f6a4a", 150]
  ];
  for (let r of reeds) {
    brush.fill(r[3], r[4]);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(r[0], r[1]); brush.vertex(r[0] + 12, r[1]); brush.vertex(r[0] + 12, r[2]); brush.vertex(r[0], r[2]);
    brush.endShape(true);
    brush.beginShape(0.4);
    brush.vertex(r[0] - 12, r[1]); brush.vertex(r[0], r[1]); brush.vertex(r[0], r[2]); brush.vertex(r[0] - 12, r[2]);
    brush.endShape(true);
  }
}
