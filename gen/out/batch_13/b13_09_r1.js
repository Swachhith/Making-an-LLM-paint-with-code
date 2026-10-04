async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#edf2f6");
  brush.noStroke();
  // a pale cool mist, bare paper on the right for the empty space
  brush.fill("#b6cadb", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.circle(170, 300, 230, 0.6);
  brush.fill("#c8d7e4", 160);
  brush.circle(420, 520, 140, 0.7);
  // dancer at left third, leaping to the right; dress trails left
  let dx = 200, dy = 230;
  // trailing skirt: long sweeping ribbons, lightest first
  let rib = [["#9fb8d6", 205, 0], ["#6d8fc0", 200, 1], ["#40639e", 190, 2]];
  for (let r of rib) {
    let k = r[2];
    brush.fill(r[0], r[1]);
    brush.fillBleed(0.3 - k * 0.04);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(dx - 10, dy + 70);
    brush.vertex(dx + 24, dy + 70);
    brush.vertex(dx + 70 - k * 10, dy + 170);
    brush.vertex(dx + 20 - k * 20, dy + 260 - k * 20);
    brush.vertex(dx - 90 + k * 20, dy + 280 - k * 30);
    brush.vertex(dx - 170 + k * 40, dy + 220 - k * 10);
    brush.vertex(dx - 60, dy + 150);
    brush.endShape(true);
  }
  // bodice
  brush.fill("#2f4f86", 225);
  brush.fillBleed(0.18);
  brush.beginShape(1);
  brush.vertex(dx - 12, dy);
  brush.vertex(dx + 16, dy - 2);
  brush.vertex(dx + 24, dy + 74);
  brush.vertex(dx - 12, dy + 76);
  brush.endShape(true);
  // arms, flung up and out: soft warm-grey skin tone
  brush.fill("#caa698", 210);
  brush.fillBleed(0.18);
  brush.beginShape(1);
  brush.vertex(dx - 6, dy + 8);
  brush.vertex(dx - 60, dy - 60);
  brush.vertex(dx - 70, dy - 100);
  brush.vertex(dx - 56, dy - 102);
  brush.vertex(dx - 42, dy - 62);
  brush.vertex(dx + 8, dy);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(dx + 12, dy + 4);
  brush.vertex(dx + 70, dy - 30);
  brush.vertex(dx + 110, dy - 36);
  brush.vertex(dx + 112, dy - 22);
  brush.vertex(dx + 72, dy - 14);
  brush.vertex(dx + 16, dy + 22);
  brush.endShape(true);
  // head tipped back, dark bun
  brush.fill("#caa698", 220);
  brush.circle(dx + 6, dy - 20, 15, 0.2);
  brush.fill("#2a3444", 225);
  brush.circle(dx - 4, dy - 30, 11, 0.3);
  // pointed leg reaching out under the skirt
  brush.fill("#caa698", 205);
  brush.beginShape(1);
  brush.vertex(dx + 40, dy + 180);
  brush.vertex(dx + 120, dy + 250);
  brush.vertex(dx + 124, dy + 262);
  brush.vertex(dx + 30, dy + 200);
  brush.endShape(true);
  // a small lavender shadow where she will land
  brush.fill("#8c9ec0", 180);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(60, 540);
  brush.vertex(300, 530);
  brush.vertex(280, 548);
  brush.vertex(80, 552);
  brush.endShape(true);
}
