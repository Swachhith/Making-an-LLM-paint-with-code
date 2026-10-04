async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcead0");
  brush.noStroke();

  let ORANGE = "#f28a1c";
  let CRIMSON = "#c42034";
  let DARK = "#1e0e20";

  // sky: crimson high, orange low, blended where they meet
  brush.fill(CRIMSON, 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 180);
  brush.vertex(0, 210);
  brush.endShape(true);
  brush.fill(CRIMSON, 170);
  brush.beginShape(0.7);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 90);
  brush.vertex(0, 110);
  brush.endShape(true);
  brush.fill(ORANGE, 220);
  brush.beginShape(0.7);
  brush.vertex(0, 160);
  brush.vertex(600, 140);
  brush.vertex(600, 370);
  brush.vertex(0, 370);
  brush.endShape(true);
  // cloud streaks
  for (let c of [[40, 120, 330], [260, 200, 580], [100, 250, 260]]) {
    brush.fill(CRIMSON, 170);
    brush.fillBleed(0.25);
    brush.beginShape(0.8);
    brush.vertex(c[0], c[1]);
    brush.vertex(c[2], c[1] - 10);
    brush.vertex(c[2] - 30, c[1] + 16);
    brush.vertex(c[0] + 20, c[1] + 22);
    brush.endShape(true);
  }
  // sun: pale disc of paper ringed by orange
  brush.fill(ORANGE, 160);
  brush.fillBleed(0.3);
  brush.circle(330, 350, 70, 0.4);

  // sea, three dark passes
  for (let pass = 0; pass < 3; pass++) {
    brush.fill(DARK, 230);
    brush.fillBleed(0.18);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.1);
    brush.vertex(0, 372);
    brush.vertex(600, 372);
    brush.vertex(600, 600);
    brush.vertex(0, 600);
    brush.endShape(true);
  }
  // sun path on the water
  for (let i = 0; i < 9; i++) {
    let y = 385 + i * 24;
    let w = 25 + i * 11;
    brush.fill(i % 2 ? CRIMSON : ORANGE, 230);
    brush.fillBleed(0.15);
    brush.beginShape(0.5);
    brush.vertex(330 - w, y);
    brush.vertex(330 + w, y + 3);
    brush.vertex(330 + w * 0.75, y + 11);
    brush.vertex(330 - w * 0.75, y + 10);
    brush.endShape(true);
  }

  // silhouettes: headland with lighthouse and a sailboat, three passes
  for (let pass = 0; pass < 3; pass++) {
    brush.fill(DARK, 245);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.4);
    brush.vertex(0, 280);
    brush.vertex(70, 270);
    brush.vertex(150, 310);
    brush.vertex(220, 372);
    brush.vertex(0, 385);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(62, 276);
    brush.vertex(68, 200);
    brush.vertex(88, 200);
    brush.vertex(94, 280);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(62, 202);
    brush.vertex(78, 180);
    brush.vertex(94, 202);
    brush.endShape(true);
    // sailboat
    brush.beginShape(0);
    brush.vertex(440, 400);
    brush.vertex(536, 400);
    brush.vertex(520, 420);
    brush.vertex(455, 420);
    brush.endShape(true);
    brush.beginShape(0.05);
    brush.vertex(484, 395);
    brush.vertex(488, 250);
    brush.vertex(535, 392);
    brush.endShape(true);
    brush.beginShape(0.05);
    brush.vertex(478, 395);
    brush.vertex(480, 285);
    brush.vertex(446, 393);
    brush.endShape(true);
  }
  // lighthouse lamp stays warm
  brush.fill("#ffd070", 240);
  brush.fillBleed(0.1);
  brush.circle(78, 212, 5, 0.1);

  // gulls
  for (let g of [[380, 190], [420, 160]]) {
    for (let pass = 0; pass < 2; pass++) {
      brush.fill(DARK, 240);
      brush.fillBleed(0.08);
      brush.beginShape(0.5);
      brush.vertex(g[0], g[1]);
      brush.vertex(g[0] + 18, g[1] - 10);
      brush.vertex(g[0] + 28, g[1] + 2);
      brush.vertex(g[0] + 38, g[1] - 10);
      brush.vertex(g[0] + 56, g[1]);
      brush.vertex(g[0] + 28, g[1] + 12);
      brush.endShape(true);
    }
  }
}
