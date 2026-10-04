async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4ece0");
  randomSeed(1011);
  brush.noStroke();
  // dusk sky around the house silhouette
  let sil = [[500, 540], [470, 250], [438, 226], [438, 110], [398, 110], [400, 198], [320, 140], [150, 260], [110, 540]];
  brush.fill("#e28a5a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 250); brush.vertex(620, 230); brush.vertex(620, 540);
  for (let p of sil) brush.vertex(p[0], p[1]);
  brush.vertex(-20, 540);
  brush.endShape(true);
  brush.fill("#5a3f9a", 215);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 260); brush.vertex(470, 250); brush.vertex(438, 226);
  brush.vertex(438, 110); brush.vertex(398, 110); brush.vertex(400, 198); brush.vertex(320, 140); brush.vertex(190, 232); brush.vertex(-20, 280);
  brush.endShape(true);
  for (let s of [[60, 80], [520, 60], [80, 330], [560, 330], [200, 60], [540, 450], [50, 460]]) {
    brush.fill(random(["#d8507a", "#2a2a70", "#f0a050", "#8a4fb8"]), 180 + random(50));
    brush.fillBleed(0.3);
    brush.fillTexture(0.65, 0.5);
    brush.circle(s[0], s[1], 35 + random(40), 1);
  }
  // house: three dark layered passes
  for (let k = 0; k < 3; k++) {
    brush.fill(["#3a2a5a", "#241a3a", "#140e24"][k], [215, 220, 200][k]);
    brush.fillBleed(0.22);
    brush.fillTexture(0.5, 0.45);
    brush.beginShape(0.05);
    if (k < 2) {
      for (let p of sil) brush.vertex(p[0] - k * 4, p[1]);
    } else {
      brush.vertex(125, 540); brush.vertex(158, 280); brush.vertex(320, 162); brush.vertex(328, 540);
    }
    brush.endShape(true);
  }
  // warm window glow around paper window
  brush.fill("#ffb030", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(300, 310); brush.vertex(360, 310); brush.vertex(362, 395); brush.vertex(298, 395);
  brush.endShape(true);
  brush.fill("#ffe08a", 200);
  brush.fillBleed(0.15);
  brush.beginShape(0.1);
  brush.vertex(310, 322); brush.vertex(350, 322); brush.vertex(350, 383); brush.vertex(310, 383);
  brush.endShape(true);
  // glazing bars
  brush.fill("#140e24", 225);
  brush.fillBleed(0.05);
  brush.beginShape(0.05);
  brush.vertex(300, 348); brush.vertex(360, 348); brush.vertex(360, 356); brush.vertex(300, 356);
  brush.endShape(true);
  // light spilling to the ground
  brush.fill("#e8902a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(290, 540); brush.vertex(380, 540); brush.vertex(460, 600); brush.vertex(240, 600);
  brush.endShape(true);
  // ground with drips of sky colour
  brush.fill("#1a2230", 225);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 530); brush.vertex(300, 550); brush.vertex(620, 525); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 5; i++) {
    let x = [30, 75, 520, 560, 590][i];
    brush.fill("#5a3f9a", 190);
    brush.fillBleed(0.15);
    brush.beginShape(0.6);
    brush.vertex(x - 7, 300); brush.vertex(x + 7, 300); brush.vertex(x + 5, 360 + random(90)); brush.vertex(x - 5, 360 + random(90));
    brush.endShape(true);
  }
  for (let i = 0; i < 12; i++) {
    brush.fill("#fff0c8", 230);
    brush.fillBleed(0.05);
    brush.circle(random(600), random(10, 130), 2 + random(2), 0.2);
  }
}
