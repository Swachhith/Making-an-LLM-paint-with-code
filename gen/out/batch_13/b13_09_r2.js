async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0f4f6");
  brush.noStroke();
  // a single soft aqua-grey wash on the right; the dancer spins in bare paper on the left
  brush.fill("#b4cdd8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(300, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 620);
  brush.vertex(240, 620);
  brush.vertex(330, 300);
  brush.endShape(true);
  brush.fill("#9cbccc", 160);
  brush.circle(520, 160, 90, 0.7);
  // the dancer: pirouette, skirt fanned out in a wide circle
  let dx = 150, dy = 250;
  // skirt: overlapping rounded tiers spun sideways
  let tiers = [["#a8d0dc", 200, 140, 60], ["#70aac4", 200, 118, 50], ["#3e7ea4", 190, 92, 40], ["#285e84", 170, 60, 28]];
  for (let t of tiers) {
    brush.fill(t[0], t[1]);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(dx - 16, dy + 70);
    brush.vertex(dx + 18, dy + 70);
    brush.vertex(dx + t[2], dy + 110 + t[3] * 0.3);
    brush.vertex(dx + t[2] * 0.6, dy + 110 + t[3]);
    brush.vertex(dx - t[2] * 0.5, dy + 116 + t[3]);
    brush.vertex(dx - t[2] * 0.9, dy + 110 + t[3] * 0.2);
    brush.endShape(true);
  }
  // torso, bodice darker teal
  brush.fill("#285e84", 225);
  brush.fillBleed(0.15);
  brush.beginShape(1);
  brush.vertex(dx - 12, dy);
  brush.vertex(dx + 14, dy);
  brush.vertex(dx + 18, dy + 74);
  brush.vertex(dx - 16, dy + 74);
  brush.endShape(true);
  // arms curved overhead in a ring
  brush.fill("#d2aea0", 215);
  brush.fillBleed(0.15);
  brush.beginShape(1);
  brush.vertex(dx - 10, dy + 6);
  brush.vertex(dx - 34, dy - 50);
  brush.vertex(dx - 6, dy - 96);
  brush.vertex(dx + 10, dy - 88);
  brush.vertex(dx - 18, dy - 48);
  brush.vertex(dx, dy + 6);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(dx + 4, dy + 6);
  brush.vertex(dx + 38, dy - 46);
  brush.vertex(dx + 14, dy - 94);
  brush.vertex(dx + 2, dy - 88);
  brush.vertex(dx + 24, dy - 46);
  brush.vertex(dx + 14, dy + 6);
  brush.endShape(true);
  brush.fill("#d2aea0", 225);
  brush.circle(dx + 2, dy - 16, 14, 0.2);
  brush.fill("#2a3440", 230);
  brush.circle(dx - 2, dy - 26, 10, 0.3);
  // legs: one standing, one tucked
  brush.fill("#d2aea0", 210);
  brush.beginShape(1);
  brush.vertex(dx - 6, dy + 190);
  brush.vertex(dx + 10, dy + 190);
  brush.vertex(dx + 6, dy + 270);
  brush.vertex(dx - 8, dy + 270);
  brush.endShape(true);
  brush.fill("#8aa6b8", 185);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(dx - 70, dy + 272);
  brush.vertex(dx + 80, dy + 266);
  brush.vertex(dx + 60, dy + 284);
  brush.vertex(dx - 60, dy + 286);
  brush.endShape(true);
}
