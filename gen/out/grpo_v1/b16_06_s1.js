async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#121218");
  randomSeed(2113);
  brush.noStroke();

  // a warm moonlit haze near the horizon
  brush.fill("#d8a86e", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(620, 460); brush.vertex(620, 530); brush.vertex(-20, 540);
  brush.endShape(true);

  // pine silhouettes: two big ones and a row of smaller ones
  let pines = [[-30, 350, 170, 420], [220, 320, 140, 400], [420, 380, 160, 440], [560, 340, 130, 400]];
  for (let p of pines) {
    let [x, h, w, base] = p;
    brush.fill("#0a0a0c", 240);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(x, base); brush.vertex(x + w / 2, base - h * 0.3); brush.vertex(x + w, base);
    brush.vertex(x + w, base + 30); brush.vertex(x, base + 30);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(x + w * 0.2, base - h * 0.5); brush.vertex(x + w * 0.8, base - h * 0.5); brush.vertex(x + w, base - h * 0.3); brush.vertex(x + w * 0.6, base - h * 0.6); brush.vertex(x, base - h * 0.3); brush.vertex(x + w * 0.2, base - h * 0.4);
    brush.endShape(true);
  }

  // the crescent: two passes, one big, one smaller
  brush.fill("#f2e6b0", 235);
  brush.fillBleed(0.25);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.2);
  brush.vertex(340, 250); brush.vertex(365, 250); brush.vertex(385, 270); brush.vertex(395, 310); brush.vertex(410, 360); brush.vertex(385, 400); brush.vertex(345, 400); brush.vertex(320, 360); brush.vertex(330, 320); brush.vertex(340, 270);
  brush.endShape(true);
  brush.fill("#e8d49a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.2);
  brush.vertex(365, 250); brush.vertex(395, 310); brush.vertex(410, 360); brush.vertex(385, 400); brush.vertex(365, 390);
  brush.endShape(true);

  // warm stars
  for (let i = 0; i < 50; i++) {
    let x = random(0, 600), y = random(0, 300);
    brush.fill("#ffd27a", 200);
    brush.fillBleed(0.05);
    brush.fillTexture(0.2, 0.2);
    brush.circle(x, y, random(1.2, 2.5), 0.3);
  }
  // one bright star
  brush.fill("#fff2b8", 250);
  brush.fillBleed(0.05);
  brush.fillTexture(0.2, 0.2);
  brush.circle(200, 120, 2.2, 0.3);
  // a few lit windows in the dark pines
  for (let i = 0; i < 12; i++) {
    brush.fill("#f7b84a", 230);
    brush.fillBleed(0.05);
    brush.fillTexture(0.2, 0.2);
    brush.circle(random(200, 500), random(360, 450), 1.8, 0.2);
  }
}
