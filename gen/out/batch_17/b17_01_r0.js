async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#101a4a");
  randomSeed(17);
  brush.noStroke();
  // violet band low in the sky
  brush.fill("#6a1fb0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 250);
  brush.vertex(300, 210);
  brush.vertex(620, 260);
  brush.vertex(620, 460);
  brush.vertex(-20, 460);
  brush.endShape(true);
  brush.fill("#d0247a", 150);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(-20, 340);
  brush.vertex(250, 320);
  brush.vertex(620, 350);
  brush.vertex(620, 460);
  brush.vertex(-20, 460);
  brush.endShape(true);
  // moon glow and moon
  brush.fill("#f2c94c", 120);
  brush.fillBleed(0.3);
  brush.circle(420, 160, 120, 0.4);
  brush.fill("#fff1b0", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(420, 160, 82, 0.15);
  brush.fill("#ffe27a", 200);
  brush.circle(405, 150, 60, 0.2);
  // stars
  for (let i = 0; i < 90; i++) {
    let x = random(0, 600), y = random(0, 330);
    if (dist(x, y, 420, 160) < 130) continue;
    brush.fill(random() < 0.5 ? "#fff6c8" : "#a8e6ff", random(170, 250));
    brush.fillBleed(0.1);
    brush.circle(x, y, random(1.5, 4.5), 0.1);
  }
  // far hills
  brush.fill("#1b3fa8", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 430);
  brush.vertex(120, 370);
  brush.vertex(260, 410);
  brush.vertex(400, 360);
  brush.vertex(620, 420);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // near hills
  brush.fill("#0a0c30", 240);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(-20, 480);
  brush.vertex(180, 440);
  brush.vertex(330, 500);
  brush.vertex(520, 450);
  brush.vertex(620, 480);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#05061a", 240);
  brush.beginShape(0.7);
  brush.vertex(-20, 540);
  brush.vertex(300, 520);
  brush.vertex(620, 560);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
}
