async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f3f4");
  randomSeed(5);
  brush.noStroke();
  // splashy sky around the white chapel
  brush.fill("#5b8fc9", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 420); brush.vertex(-20, 440);
  brush.endShape(true);
  for (let i = 0; i < 5; i++) {
    brush.fill(random(["#2f6db0", "#8a79c4", "#e7a0a0"]), 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.5);
    brush.circle(random(600), random(20, 160), 50 + random(50), 1);
  }
  // hill
  brush.fill("#7aa84a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(200, 440); brush.vertex(420, 445); brush.vertex(620, 490);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#3e6b2a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 540); brush.vertex(300, 520); brush.vertex(620, 560); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // chapel shadow sides (chapel itself is paper)
  // shaded right side wall
  brush.fill("#8e9bb8", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.05);
  brush.vertex(400, 250); brush.vertex(520, 290); brush.vertex(520, 470); brush.vertex(400, 470);
  brush.endShape(true);
  // roof
  brush.fill("#2f5fa8", 220);
  brush.fillBleed(0.25);
  brush.beginShape(0.05);
  brush.vertex(90, 255); brush.vertex(250, 175); brush.vertex(410, 255); brush.vertex(530, 295); brush.vertex(525, 280); brush.vertex(410, 240);
  brush.vertex(250, 160); brush.vertex(95, 240);
  brush.endShape(true);
  // bell tower shade + dome
  brush.fill("#8e9bb8", 190);
  brush.beginShape(0.05);
  brush.vertex(270, 70); brush.vertex(300, 70); brush.vertex(300, 180); brush.vertex(270, 190);
  brush.endShape(true);
  brush.fill("#2f5fa8", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(200, 75); brush.vertex(250, 20); brush.vertex(300, 75);
  brush.endShape(true);
  brush.fill("#3a3a48", 220);
  brush.fillBleed(0.15);
  brush.beginShape(0.6);
  brush.vertex(232, 100); brush.vertex(250, 85); brush.vertex(268, 100); brush.vertex(268, 140); brush.vertex(232, 140);
  brush.endShape(true);
  // door and windows
  brush.beginShape(0.5);
  brush.vertex(220, 470); brush.vertex(220, 380); brush.vertex(250, 355); brush.vertex(280, 380); brush.vertex(280, 470);
  brush.endShape(true);
  brush.fill("#2f5fa8", 220);
  brush.beginShape(0.5);
  brush.vertex(140, 400); brush.vertex(140, 330); brush.vertex(160, 315); brush.vertex(180, 330); brush.vertex(180, 400);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(320, 400); brush.vertex(320, 330); brush.vertex(340, 315); brush.vertex(360, 330); brush.vertex(360, 400);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(445, 400); brush.vertex(445, 335); brush.vertex(475, 335); brush.vertex(475, 400);
  brush.endShape(true);
  // ground shadow & drips
  brush.fill("#5c6f8f", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(80, 470); brush.vertex(530, 470); brush.vertex(560, 500); brush.vertex(90, 495);
  brush.endShape(true);
  for (let i = 0; i < 5; i++) {
    let x = 120 + i * 90 + random(-15, 15);
    brush.fill("#3e6b2a", 180);
    brush.fillBleed(0.2);
    brush.beginShape(0.7);
    brush.vertex(x - 7, 495); brush.vertex(x + 7, 495); brush.vertex(x + 5, 540 + random(40)); brush.vertex(x - 5, 540 + random(40));
    brush.endShape(true);
  }
}
