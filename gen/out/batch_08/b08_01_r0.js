async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f1e3");
  randomSeed(81);
  brush.noStroke();
  // splashy sky
  brush.fill("#6fa3d6", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 330);
  brush.vertex(420, 300); brush.vertex(200, 340); brush.vertex(-20, 310);
  brush.endShape(true);
  for (let i = 0; i < 6; i++) {
    brush.fill(random(["#3f7fc4", "#8fb8e0", "#b98fcf"]), 150 + random(60));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.4);
    brush.circle(random(600), random(40, 220), 40 + random(60), 0.9);
  }
  // barn body looming from below
  brush.fill("#c42a1f", 230);
  brush.fillBleed(0.28);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.05);
  brush.vertex(120, 520); brush.vertex(140, 230); brush.vertex(300, 110);
  brush.vertex(470, 230); brush.vertex(490, 520);
  brush.endShape(true);
  brush.fill("#9e1a14", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.1);
  brush.vertex(150, 510); brush.vertex(165, 250); brush.vertex(300, 140);
  brush.vertex(440, 250); brush.vertex(460, 510);
  brush.endShape(true);
  // drips from the barn
  for (let i = 0; i < 7; i++) {
    let x = 160 + i * 45 + random(-10, 10);
    brush.fill("#b3241a", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.8);
    brush.vertex(x - 9, 500); brush.vertex(x + 9, 500);
    brush.vertex(x + 8, 540 + random(30)); brush.vertex(x - 8, 540 + random(30));
    brush.endShape(true);
    brush.circle(x, 560 + random(20), 9, 0.4);
  }
  // roof
  brush.fill("#3b3440", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.05);
  brush.vertex(110, 245); brush.vertex(300, 90); brush.vertex(490, 245);
  brush.vertex(470, 262); brush.vertex(300, 122); brush.vertex(130, 262);
  brush.endShape(true);
  // white trim left as paper: door shadow
  brush.fill("#5a1410", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.05);
  brush.vertex(240, 520); brush.vertex(245, 360); brush.vertex(355, 360); brush.vertex(360, 520);
  brush.endShape(true);
  brush.fill("#2a1a1a", 200);
  brush.fillBleed(0.15);
  brush.beginShape(0.1);
  brush.vertex(275, 205); brush.vertex(325, 205); brush.vertex(325, 255); brush.vertex(275, 255);
  brush.endShape(true);
  // grass foreground, low angle
  brush.fill("#5e9a2e", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(150, 500); brush.vertex(320, 480);
  brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 18; i++) {
    let x = random(-10, 610);
    brush.fill(random(["#3f7a1e", "#8fb83a", "#c9b23a"]), 170 + random(60));
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(x - 12, 610); brush.vertex(x + random(-30, 30), 460 + random(60)); brush.vertex(x + 14, 610);
    brush.endShape(true);
  }
  for (let i = 0; i < 5; i++) {
    brush.fill("#e0a82e", 200);
    brush.fillBleed(0.3);
    brush.circle(random(600), 540 + random(50), 14 + random(20), 0.8);
  }
}
