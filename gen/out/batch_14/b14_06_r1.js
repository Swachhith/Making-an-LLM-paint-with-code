async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f6");
  randomSeed(66);
  brush.noStroke();

  // a soft cool floor shadow and a vague lavender air on the right
  brush.fill("#b0bfdc", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, 470); brush.vertex(300, 450); brush.vertex(620, 480);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#c9c3e2", 170);
  brush.beginShape(0.8);
  brush.vertex(300, 40); brush.vertex(560, 80); brush.vertex(600, 300); brush.vertex(420, 360); brush.vertex(330, 200);
  brush.endShape(true);

  // figure at the left third, arms lifted, skirt sweeping right
  // skirt: three layered sweeps
  const skirt = [["#7aa3d6", 200, 0], ["#4a78c0", 200, 12], ["#8fb0e0", 180, -18], ["#2f5aa8", 160, 30]];
  for (const s of skirt) {
    brush.fill(s[0], s[1]);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.45);
    brush.beginShape(0.8);
    brush.vertex(170, 270);
    brush.vertex(205, 275);
    brush.vertex(280 + s[2], 360);
    brush.vertex(380 + s[2] * 2, 420);
    brush.vertex(300, 450);
    brush.vertex(210, 460);
    brush.vertex(130, 440);
    brush.vertex(150, 350);
    brush.endShape(true);
  }
  // bodice
  brush.fill("#2a4f90", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(172, 200); brush.vertex(202, 200); brush.vertex(208, 280); brush.vertex(166, 280);
  brush.endShape(true);
  // arms raised in an arc
  brush.fill("#d9a58c", 215);
  brush.beginShape(0.8);
  brush.vertex(198, 205); brush.vertex(240, 150); brush.vertex(250, 110); brush.vertex(262, 115); brush.vertex(252, 160); brush.vertex(206, 222);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(174, 210); brush.vertex(130, 175); brush.vertex(110, 130); brush.vertex(96, 136); brush.vertex(118, 190); brush.vertex(168, 228);
  brush.endShape(true);
  // head and hair bun
  brush.fill("#d9a58c", 230);
  brush.circle(188, 178, 16, 0.2);
  brush.fill("#4a3a44", 210);
  brush.circle(182, 166, 12, 0.3);
  // legs below the skirt
  brush.fill("#d9a58c", 210);
  brush.beginShape(0.5);
  brush.vertex(190, 450); brush.vertex(206, 450); brush.vertex(210, 510); brush.vertex(196, 512);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(168, 445); brush.vertex(182, 448); brush.vertex(160, 500); brush.vertex(146, 496);
  brush.endShape(true);
  // floor shadow under the dancer
  brush.fill("#8a9bc0", 150);
  brush.beginShape(0.8);
  brush.vertex(130, 515); brush.vertex(260, 505); brush.vertex(330, 520); brush.vertex(200, 530);
  brush.endShape(true);
}
