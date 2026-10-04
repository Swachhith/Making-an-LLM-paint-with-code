async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e8da");
  randomSeed(1012);
  brush.noStroke();
  // dusk sky in convex bands, splashed wet-in-wet
  brush.fill("#4a3a92", 225);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 280);
  brush.endShape(true);
  brush.fill("#d86a7a", 205);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 240); brush.vertex(620, 210); brush.vertex(620, 380); brush.vertex(-20, 400);
  brush.endShape(true);
  brush.fill("#f0a050", 205);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 370); brush.vertex(620, 350); brush.vertex(620, 540); brush.vertex(-20, 540);
  brush.endShape(true);
  for (let i = 0; i < 9; i++) {
    brush.fill(random(["#2a2070", "#8a3fa8", "#e05a80", "#f0c060"]), 190 + random(40));
    brush.fillBleed(0.3);
    brush.fillTexture(0.65, 0.5);
    brush.circle(random(600), random(0, 420), 30 + random(45), 1);
  }
  // house: four dark passes, darker hex than wanted
  let body = [[110, 545], [150, 262], [320, 140], [470, 250], [500, 545]];
  let cols = ["#1c1238", "#120a26", "#0a0618", "#0a0618"];
  for (let k = 0; k < 4; k++) {
    brush.fill(cols[k], 235);
    brush.fillBleed(k < 2 ? 0.2 : 0.12);
    brush.fillTexture(0.45, 0.4);
    brush.beginShape(0.05);
    for (let p of body) brush.vertex(p[0] + (k == 3 ? 12 : 0) * (p[0] < 320 ? 1 : 0), p[1]);
    brush.endShape(true);
  }
  // chimney
  for (let k = 0; k < 3; k++) {
    brush.fill("#0a0618", 235);
    brush.fillBleed(0.12);
    brush.beginShape(0.05);
    brush.vertex(398, 205); brush.vertex(400, 108); brush.vertex(438, 108); brush.vertex(438, 232);
    brush.endShape(true);
  }
  // window painted around: frame darker, pane warm but pale
  brush.fill("#ffc040", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(330, 355, 36, 0.8);
  brush.fill("#ffe4a0", 200);
  brush.fillBleed(0.1);
  brush.beginShape(0.05);
  brush.vertex(304, 318); brush.vertex(356, 318); brush.vertex(356, 392); brush.vertex(304, 392);
  brush.endShape(true);
  brush.fill("#0a0618", 230);
  brush.fillBleed(0.05);
  brush.beginShape(0.05);
  brush.vertex(300, 351); brush.vertex(360, 351); brush.vertex(360, 359); brush.vertex(300, 359);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(326, 318); brush.vertex(334, 318); brush.vertex(334, 392); brush.vertex(326, 392);
  brush.endShape(true);
  // ground, with glow pool below window
  brush.fill("#141a26", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 535); brush.vertex(300, 555); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#e0802a", 200);
  brush.fillBleed(0.3);
  brush.circle(335, 580, 35, 0.9);
  // drips from the sky bands at the sides
  for (let x of [25, 60, 540, 580]) {
    brush.fill("#8a3fa8", 200);
    brush.fillBleed(0.15);
    brush.beginShape(0.6);
    brush.vertex(x - 7, 400); brush.vertex(x + 7, 400); brush.vertex(x + 5, 460 + random(70)); brush.vertex(x - 5, 460 + random(70));
    brush.endShape(true);
    brush.circle(x, 530 + random(20), 8, 0.4);
  }
  for (let i = 0; i < 14; i++) {
    brush.fill("#fff0c8", 235);
    brush.fillBleed(0.05);
    brush.circle(random(600), random(10, 130), 1.5 + random(2), 0.2);
  }
}
