async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1d4");
  randomSeed(2222);
  brush.noStroke();

  // sky: deep violet-blue at top, orange near the sun, yellow below
  brush.fill("#2a1f8a", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#e87a2a", 215);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 250); brush.vertex(620, 250); brush.vertex(620, 340); brush.vertex(-20, 330);
  brush.endShape(true);
  brush.fill("#f7c83a", 225);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 330); brush.vertex(620, 330); brush.vertex(620, 400); brush.vertex(-20, 410);
  brush.endShape(true);

  // sun low and off-centre, right side
  brush.fill("#ffb82a", 250);
  brush.fillBleed(0.1);
  brush.circle(470, 360, 65, 0.3);
  brush.fill("#ffc85a", 235);
  brush.circle(470, 360, 48, 0.3);
  // warm glow streaks
  brush.fill("#ff8a2a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(470, 340); brush.vertex(560, 350); brush.vertex(620, 320); brush.vertex(620, 400); brush.vertex(560, 420); brush.vertex(470, 410);
  brush.endShape(true);

  // distant hills
  brush.fill("#c0303a", 210);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 430); brush.vertex(150, 410); brush.vertex(300, 440); brush.vertex(470, 420); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // desert floor
  brush.fill("#e88a2a", 215);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 480); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#d96a1a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 520); brush.vertex(300, 500); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // cactus: two ribs, a wide crown, and a long stem
  let cx = 240, cy = 520;
  brush.fill("#5a8a1a", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(cx - 20, cy - 110); brush.vertex(cx + 20, cy - 110); brush.vertex(cx + 32, cy - 110); brush.vertex(cx + 30, cy - 130); brush.vertex(cx + 18, cy - 130); brush.vertex(cx + 16, cy - 110);
  brush.vertex(cx + 14, cy - 130); brush.vertex(cx + 2, cy - 130); brush.vertex(cx, cy - 110);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(cx - 30, cy - 130); brush.vertex(cx - 18, cy - 130); brush.vertex(cx - 20, cy - 110); brush.vertex(cx - 32, cy - 110); brush.vertex(cx - 30, cy - 130); brush.vertex(cx - 32, cy - 148); brush.vertex(cx - 20, cy - 148); brush.vertex(cx, cy - 130);
  brush.endShape(true);
  // stem
  brush.beginShape(0.6);
  brush.vertex(cx - 12, cy - 130); brush.vertex(cx + 12, cy - 130); brush.vertex(cx + 16, cy - 110); brush.vertex(cx - 16, cy - 110);
  brush.endShape(true);
  brush.fill("#3a6a10", 215);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(cx - 14, cy - 130); brush.vertex(cx + 14, cy - 130); brush.vertex(cx + 12, cy - 110); brush.vertex(cx - 12, cy - 110);
  brush.endShape(true);
  brush.fill("#1e4a0e", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(cx - 16, cy - 110); brush.vertex(cx + 16, cy - 110); brush.vertex(cx + 14, cy - 90); brush.vertex(cx - 14, cy - 90);
  brush.endShape(true);
  // spines
  brush.fill("#9a4a1a", 225);
  brush.fillBleed(0.15);
  for (let i = 0; i < 14; i++) {
    let a = i * 14 + random(-5, 5);
    brush.circle(cx + cos(a) * 22, cy - 100 + sin(a) * 18, 2, 0.2);
  }
  // shadow
  brush.fill("#3a2a1a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(cx - 12, cy - 130); brush.vertex(cx + 12, cy - 130); brush.vertex(cx + 18, cy - 90); brush.vertex(cx - 18, cy - 90);
  brush.endShape(true);
}
