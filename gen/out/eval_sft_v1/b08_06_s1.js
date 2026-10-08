async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e8c8");
  randomSeed(1337);
  brush.noStroke();

  // sky: deep indigo with a hot orange sunset
  brush.fill("#2a1a6a", 225);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(300, 300); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#e84a1a", 225);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 120); brush.vertex(620, 120); brush.vertex(620, 230); brush.vertex(300, 260); brush.vertex(-20, 220);
  brush.endShape(true);
  // clouds
  brush.fill("#fff2d0", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(120, 160); brush.vertex(220, 140); brush.vertex(300, 155); brush.vertex(370, 130); brush.vertex(440, 150); brush.vertex(520, 170); brush.vertex(440, 190); brush.vertex(370, 175);
  brush.endShape(true);
  brush.fill("#fff2d0", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(470, 150); brush.vertex(540, 135); brush.vertex(600, 155); brush.vertex(530, 175); brush.vertex(470, 160);
  brush.endShape(true);

  // sea: turquoise, reflecting sky
  brush.fill("#1fb8c8", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 260); brush.vertex(620, 260); brush.vertex(620, 420); brush.vertex(300, 430); brush.vertex(-20, 420);
  brush.endShape(true);
  brush.fill("#1fb8c8", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 300); brush.vertex(620, 300); brush.vertex(620, 370); brush.vertex(300, 380); brush.vertex(-20, 360);
  brush.endShape(true);
  // waves
  for (let i = 0; i < 6; i++) {
    let y = 360 + i * 14;
    brush.fill("#1fb8c8", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    let px = [-20, 70, 150, 240, 330, 420, 510, 620];
    for (let p of px) {
      brush.vertex(p, y + random(-8, 8));
      brush.vertex(p + 20, y + 14 + random(-6, 6));
    }
    brush.endShape(true);
  }

  // hill: olive-green, bold
  brush.fill("#5a7a3a", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 540); brush.vertex(300, 555); brush.vertex(-20, 540);
  brush.endShape(true);
  brush.fill("#3a5a2a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 570); brush.vertex(300, 580); brush.vertex(-20, 560);
  brush.endShape(true);
  // village houses: terracotta roofs, white walls
  let houses = [[120, 500, 110, 40], [220, 490, 100, 35], [340, 485, 115, 45], [450, 495, 105, 40], [540, 505, 95, 35]];
  for (let h of houses) {
    let [x, y, w, ht] = h;
    brush.fill("#fff2c8", 230);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(x, y + ht); brush.vertex(x + w, y + ht); brush.vertex(x + w, y); brush.vertex(x, y);
    brush.endShape(true);
    brush.fill("#c84a2a", 230);
    brush.fillBleed(0.2);
    brush.beginShape(0.3);
    brush.vertex(x, y + ht - 20); brush.vertex(x + w * 0.6, y + ht - 35); brush.vertex(x + w, y + ht - 20); brush.vertex(x + w, y + ht - 25); brush.vertex(x + w * 0.6, y + ht - 15);
    brush.endShape(true);
  }
  // chimneys
  for (let h of houses) {
    let [x, y, w, ht] = h;
    brush.fill("#8a4a2a", 220);
    brush.fillBleed(0.2);
    brush.beginShape(0.3);
    brush.vertex(x + w * 0.3, y + ht - 25); brush.vertex(x + w * 0.7, y + ht - 25); brush.vertex(x + w * 0.7, y + ht - 55); brush.vertex(x + w * 0.3, y + ht - 55);
    brush.endShape(true);
  }
  // smoke
  for (let i = 0; i < 3; i++) {
    let [x, y, w, ht] = houses[i];
    brush.fill("#b88a6a", 170);
    brush.fillBleed(0.3);
    brush.beginShape(0.8);
    brush.vertex(x + w * 0.5, y + ht - 45); brush.vertex(x + w * 0.7, y + ht - 60); brush.vertex(x + w * 0.6, y + ht - 90); brush.vertex(x + w * 0.3, y + ht - 75); brush.vertex(x + w * 0.4, y + ht - 55);
    brush.endShape(true);
  }
  // a lone tree on the hill
  brush.fill("#3a5a2a", 230);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(300, 520); brush.vertex(330, 520); brush.vertex(335, 440); brush.vertex(305, 440);
  brush.endShape(true);
  brush.fill("#5a7a3a", 230);
  brush.fillBleed(0.3);
  brush.circle(315, 420, 55, 0.6);
  // figures on the hill
  brush.fill("#c82a2a", 230);
  brush.fillBleed(0.2);
  brush.circle(180, 530, 4, 0.3); brush.circle(184, 530, 4, 0.3);
  brush.circle(420, 535, 4, 0.3); brush.circle(424, 535, 4, 0.3);
  // path to the beach
  brush.fill("#7a6a3a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(-20, 540); brush.vertex(620, 540); brush.vertex(620, 545); brush.vertex(-20, 545);
  brush.endShape(true);
}
