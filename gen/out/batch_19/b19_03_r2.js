async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3f1");
  brush.noStroke();

  // sky: lilac above fading to peach near the ground
  brush.fill("#b9a6db", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 320); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#f5bfae", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 260); brush.vertex(620, 280); brush.vertex(620, 560); brush.vertex(-20, 560);
  brush.endShape(true);
  // clouds
  brush.fill("#d9c9ee", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.circle(90, 330, 55, true);
  brush.circle(150, 340, 40, true);
  brush.circle(520, 70, 50, true);

  // sails first, behind the tower: lattice panels in soft mint and rose
  const hx = 330, hy = 205;
  const angs = [-115, -25, 65, 155];
  for (let s = 0; s < 4; s++) {
    const a = angs[s] * Math.PI / 180;
    const dx = Math.cos(a), dy = Math.sin(a);
    const px = -dy, py = dx;
    const L = s === 2 ? 200 : 250;
    for (let pass = 0; pass < 2; pass++) {
      brush.fill(s % 2 ? "#e89aa8" : "#8cc7b4", pass ? 220 : 190);
      brush.fillBleed(0.2);
      brush.fillTexture(0.45, 0.45);
      brush.beginShape(0.05);
      brush.vertex(hx + dx * 45 + px * 12, hy + dy * 45 + py * 12);
      brush.vertex(hx + dx * L + px * 12, hy + dy * L + py * 12);
      brush.vertex(hx + dx * L + px * 62, hy + dy * L + py * 62);
      brush.vertex(hx + dx * 50 + px * 52, hy + dy * 50 + py * 52);
      brush.endShape(true);
    }
    // cross slats: darker bands across the panel
    for (let t = 90; t < L; t += 45) {
      brush.fill("#8b6f8e", 170);
      brush.fillBleed(0.1);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.05);
      brush.vertex(hx + dx * t + px * 10, hy + dy * t + py * 10);
      brush.vertex(hx + dx * (t + 12) + px * 10, hy + dy * (t + 12) + py * 10);
      brush.vertex(hx + dx * (t + 12) + px * 62, hy + dy * (t + 12) + py * 62);
      brush.vertex(hx + dx * t + px * 62, hy + dy * t + py * 62);
      brush.endShape(true);
    }
    // spar
    brush.fill("#6d5a78", 220);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.05);
    brush.vertex(hx - px * 9, hy - py * 9);
    brush.vertex(hx + dx * L - px * 8, hy + dy * L - py * 8);
    brush.vertex(hx + dx * L + px * 8, hy + dy * L + py * 8);
    brush.vertex(hx + px * 9, hy + py * 9);
    brush.endShape(true);
  }

  // tower seen from below: wide base, sharp taper
  brush.fill("#d9b08c", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.05);
  brush.vertex(190, 620); brush.vertex(470, 620); brush.vertex(375, 235); brush.vertex(290, 235);
  brush.endShape(true);
  brush.fill("#a8787a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.05);
  brush.vertex(370, 620); brush.vertex(470, 620); brush.vertex(375, 235); brush.vertex(348, 235);
  brush.endShape(true);
  brush.fill("#7f5a74", 190);
  brush.beginShape(0.05);
  brush.vertex(420, 620); brush.vertex(470, 620); brush.vertex(375, 235); brush.vertex(362, 235);
  brush.endShape(true);

  // second pass on the tower body for depth
  brush.fill("#cf9f86", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.05);
  brush.vertex(205, 620); brush.vertex(380, 620); brush.vertex(350, 240); brush.vertex(295, 240);
  brush.endShape(true);
  // cap over the hub
  brush.fill("#9f8bc4", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(272, 245); brush.vertex(285, 195); brush.vertex(332, 165); brush.vertex(380, 195); brush.vertex(392, 245);
  brush.endShape(true);
  brush.fill("#6d5a8e", 200);
  brush.beginShape(0.5);
  brush.vertex(345, 170); brush.vertex(380, 195); brush.vertex(392, 245); brush.vertex(355, 245);
  brush.endShape(true);
  brush.fill("#4f3f5e", 240);
  brush.fillBleed(0.1);
  brush.circle(hx, hy, 16, true);

  // door and windows
  brush.fill("#7f6b9a", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 620); brush.vertex(300, 530); brush.vertex(330, 510); brush.vertex(360, 530); brush.vertex(360, 620);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(318, 340); brush.vertex(345, 340); brush.vertex(344, 380); brush.vertex(319, 380);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(310, 430); brush.vertex(342, 430); brush.vertex(341, 470); brush.vertex(311, 470);
  brush.endShape(true);

  // grass tufts at the foot, big because they are close
  brush.fill("#a9d0a4", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 570); brush.vertex(80, 540); brush.vertex(170, 580); brush.vertex(300, 600);
  brush.vertex(480, 575); brush.vertex(620, 545); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#78b08a", 190);
  brush.beginShape(0.6);
  brush.vertex(-20, 595); brush.vertex(150, 585); brush.vertex(400, 605); brush.vertex(620, 585); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
