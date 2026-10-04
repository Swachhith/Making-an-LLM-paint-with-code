async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9ecee");
  randomSeed(99);
  brush.noStroke();
  // wet grey-blue sky, colour dropped in while wet
  brush.fill("#8ea3b4", 200);
  brush.fillBleed(0.4);
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.9);
  brush.vertex(-30, -30); brush.vertex(630, -30); brush.vertex(630, 630); brush.vertex(-30, 630);
  brush.endShape(true);
  for (let i = 0; i < 9; i++) {
    brush.fill(random(["#6f86a0", "#a79bc0", "#7fa39a", "#c9a0a8"]), random(140, 190));
    brush.fillBleed(0.4);
    brush.fillTexture(0.6, 0.6);
    brush.circle(random(0, 600), random(0, 600), random(60, 120), 0.9);
  }
  // body first, large: shoulders spread off both edges
  brush.fill("#243650", 235);
  brush.fillBleed(0.35);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.5);
  brush.vertex(240, 395); brush.vertex(330, 395); brush.vertex(450, 430); brush.vertex(540, 500); brush.vertex(570, 630);
  brush.vertex(20, 630); brush.vertex(50, 500); brush.vertex(130, 430);
  brush.endShape(true);
  brush.fill("#162438", 220);
  brush.beginShape(0.6);
  brush.vertex(330, 400); brush.vertex(450, 435); brush.vertex(530, 510); brush.vertex(555, 630); brush.vertex(380, 630); brush.vertex(350, 470);
  brush.endShape(true);
  // collar and scarf
  brush.fill("#e8b33a", 220);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(235, 390); brush.vertex(335, 390); brush.vertex(320, 425); brush.vertex(290, 470); brush.vertex(250, 425);
  brush.endShape(true);
  // neck and head, big
  brush.fill("#e0a584", 225);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(265, 360); brush.vertex(305, 360); brush.vertex(308, 398); brush.vertex(262, 398);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(238, 300); brush.vertex(250, 250); brush.vertex(290, 238); brush.vertex(330, 262); brush.vertex(332, 320); brush.vertex(310, 365); brush.vertex(270, 370); brush.vertex(242, 340);
  brush.endShape(true);
  brush.fill("#c47a5a", 190);
  brush.beginShape(0.7);
  brush.vertex(300, 270); brush.vertex(332, 285); brush.vertex(328, 330); brush.vertex(305, 360);
  brush.endShape(true);
  // dark hair
  brush.fill("#2a1e1a", 235);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(230, 310); brush.vertex(236, 250); brush.vertex(280, 225); brush.vertex(335, 240); brush.vertex(345, 290); brush.vertex(320, 270); brush.vertex(270, 262); brush.vertex(250, 330);
  brush.endShape(true);
  // arm raised to hold the shaft
  brush.fill("#2c4262", 230);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(400, 430); brush.vertex(440, 380); brush.vertex(420, 330); brush.vertex(395, 330); brush.vertex(405, 380); brush.vertex(360, 420);
  brush.endShape(true);
  brush.fill("#e0a584", 230);
  brush.circle(408, 322, 20, 0.3);
  // shaft
  brush.fill("#2a1a14", 230);
  brush.fillBleed(0.15);
  brush.beginShape(0.2);
  brush.vertex(398, 175); brush.vertex(414, 175); brush.vertex(418, 340); brush.vertex(400, 340);
  brush.endShape(true);
  // the umbrella: a big red dome cropped at the top, several washes
  brush.fill("#e0281c", 235);
  brush.fillBleed(0.4);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.6);
  brush.vertex(70, 210); brush.vertex(140, 90); brush.vertex(260, 10); brush.vertex(400, -10); brush.vertex(540, 40); brush.vertex(630, 150); brush.vertex(640, 200);
  brush.vertex(580, 185); brush.vertex(510, 205); brush.vertex(440, 182); brush.vertex(370, 205); brush.vertex(300, 182); brush.vertex(230, 205); brush.vertex(155, 185);
  brush.endShape(true);
  brush.fill("#b01010", 215);
  brush.fillBleed(0.35);
  brush.beginShape(0.6);
  brush.vertex(400, 0); brush.vertex(470, 30); brush.vertex(510, 200); brush.vertex(440, 182);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(390, 0); brush.vertex(250, 40); brush.vertex(155, 185); brush.vertex(230, 204);
  brush.endShape(true);
  brush.fill("#ff5a3a", 170);
  brush.fillBleed(0.4);
  brush.circle(330, 90, 55, 0.8);
  // drips running from the rim and dripping down the picture
  for (let i = 0; i < 11; i++) {
    let x = 90 + i * 50 + random(-10, 10);
    let rim = 195;
    let len = random(40, 170);
    brush.fill("#cc2418", random(160, 210));
    brush.fillBleed(0.25);
    brush.beginShape(0.4);
    brush.vertex(x - 9, rim); brush.vertex(x + 9, rim); brush.vertex(x + 4, rim + len); brush.vertex(x - 4, rim + len);
    brush.endShape(true);
    brush.circle(x, rim + len + 3, random(6, 9), 0.3);
  }
  // splatter
  for (let i = 0; i < 30; i++) {
    brush.fill(random(["#d8281c", "#243650", "#f2f4f5"]), random(170, 230));
    brush.fillBleed(0.15);
    brush.circle(random(0, 600), random(0, 600), random(2, 6), 0.4);
  }
}
