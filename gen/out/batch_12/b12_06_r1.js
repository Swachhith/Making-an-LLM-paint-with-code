async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f5");
  randomSeed(606);
  brush.noStroke();
  // cool sky with soft grey-blue clouds
  brush.fill("#9dbfda", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 280); brush.vertex(-20, 280);
  brush.endShape(true);
  for (let c of [[120, 90, 90], [420, 60, 110], [300, 170, 70]]) {
    brush.fill("#c9d6e0", 170);
    brush.fillBleed(0.35);
    brush.fillTexture(0.6, 0.6);
    brush.circle(c[0], c[1], c[2], 0.9);
  }
  // distant poplar row, soft
  for (let x = -10; x < 620; x += random(22, 40)) {
    let h = random(30, 60);
    brush.fill("#6f8f96", 180);
    brush.fillBleed(0.3);
    brush.beginShape(0.8);
    brush.vertex(x - 10, 290); brush.vertex(x, 290 - h); brush.vertex(x + 10, 290);
    brush.endShape(true);
  }
  // flat meadow
  brush.fill("#9ab8a0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-20, 285); brush.vertex(620, 285); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // canal: a band crossing horizontally, slightly curved
  brush.fill("#5c8fb0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 390); brush.vertex(300, 375); brush.vertex(620, 385); brush.vertex(620, 440); brush.vertex(300, 432); brush.vertex(-20, 450);
  brush.endShape(true);
  brush.fill("#3e6e8e", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 425); brush.vertex(300, 415); brush.vertex(620, 420); brush.vertex(620, 440); brush.vertex(300, 432); brush.vertex(-20, 450);
  brush.endShape(true);
  // towpath edge
  brush.fill("#7a8e7e", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(-20, 448); brush.vertex(300, 430); brush.vertex(620, 438); brush.vertex(620, 460); brush.vertex(300, 452); brush.vertex(-20, 470);
  brush.endShape(true);
  // houseboat: small, long narrowboat with cabin, right of centre
  let bx = 380, by = 388;
  brush.fill("#1f4a6a", 230);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(bx - 60, by); brush.vertex(bx + 58, by - 2); brush.vertex(bx + 50, by + 14); brush.vertex(bx - 54, by + 15);
  brush.endShape(true);
  brush.fill("#2f6b62", 230);
  brush.beginShape(0.05);
  brush.vertex(bx - 45, by - 22); brush.vertex(bx + 40, by - 23); brush.vertex(bx + 40, by); brush.vertex(bx - 45, by);
  brush.endShape(true);
  brush.fill("#a8443a", 220);
  brush.beginShape(0.05);
  brush.vertex(bx - 48, by - 22); brush.vertex(bx + 43, by - 23); brush.vertex(bx + 40, by - 30); brush.vertex(bx - 44, by - 29);
  brush.endShape(true);
  // windows left as small lighter squares? paint amber dots
  for (let i = 0; i < 5; i++) {
    brush.fill("#f2d58a", 240);
    brush.fillBleed(0.05);
    brush.circle(bx - 34 + i * 16, by - 12, 3, 0.1);
  }
  // chimney
  brush.fill("#222", 220);
  brush.circle(bx - 30, by - 34, 3, 0.2);
  // reflection
  brush.fill("#1f4a6a", 140);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(bx - 54, by + 16); brush.vertex(bx + 50, by + 15); brush.vertex(bx + 44, by + 36); brush.vertex(bx - 48, by + 38);
  brush.endShape(true);
  // big willow on the left bank
  brush.fill("#6d8d7a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.55);
  brush.circle(90, 320, 75, 0.8);
  brush.fill("#476b60", 180);
  brush.circle(100, 335, 50, 0.8);
  brush.fill("#4a4a4a", 200);
  brush.beginShape(0.3);
  brush.vertex(84, 360); brush.vertex(100, 360); brush.vertex(102, 395); brush.vertex(82, 395);
  brush.endShape(true);
  // foreground reeds, soft
  brush.fill("#6f8a60", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 560); brush.vertex(200, 530); brush.vertex(420, 555); brush.vertex(620, 540); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
