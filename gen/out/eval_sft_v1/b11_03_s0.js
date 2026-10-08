async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf6e8");
  randomSeed(2025);
  brush.noStroke();

  // bold sky: violet near the sun, orange elsewhere
  brush.fill("#7a2fb8", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 150); brush.vertex(300, 130); brush.vertex(600, 170); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#e06a1c", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 200); brush.vertex(300, 170); brush.vertex(600, 220); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // sun: paper left, orange halo
  brush.fill("#ff8a1a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.circle(520, 220, 75, 0.6);
  brush.fill("#ffcc6a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(520, 220, 55, 0.7);

  // desert floor: warm ground
  brush.fill("#d87a1e", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(0, 520); brush.vertex(600, 520); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#b04a12", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(0, 550); brush.vertex(600, 550); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // dunes behind cactus
  brush.fill("#f0a83a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(300, 520); brush.vertex(420, 420); brush.vertex(540, 470); brush.vertex(480, 520);
  brush.endShape(true);
  brush.fill("#e06a1c", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(220, 520); brush.vertex(330, 430); brush.vertex(400, 520);
  brush.endShape(true);

  // cactus: saguaro, three arms
  let cx = 230, cy = 440;
  // trunk
  brush.fill("#4a3a1e", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(cx - 10, cy + 15); brush.vertex(cx + 10, cy + 15); brush.vertex(cx + 12, cy - 150); brush.vertex(cx - 12, cy - 150);
  brush.endShape(true);
  // arms: left
  brush.fill("#5a4a2e", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.2);
  brush.vertex(cx - 10, cy - 130); brush.vertex(cx - 14, cy - 134); brush.vertex(cx - 80, cy - 200); brush.vertex(cx - 84, cy - 196); brush.vertex(cx - 10, cy - 130);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(cx - 10, cy - 140); brush.vertex(cx - 16, cy - 146); brush.vertex(cx - 60, cy - 220); brush.vertex(cx - 64, cy - 216); brush.vertex(cx - 10, cy - 140);
  brush.endShape(true);
  // arms: right
  brush.fill("#5a4a2e", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.2);
  brush.vertex(cx + 10, cy - 130); brush.vertex(cx + 14, cy - 134); brush.vertex(cx + 80, cy - 200); brush.vertex(cx + 84, cy - 196); brush.vertex(cx + 10, cy - 130);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(cx + 10, cy - 140); brush.vertex(cx + 16, cy - 146); brush.vertex(cx + 60, cy - 220); brush.vertex(cx + 64, cy - 216); brush.vertex(cx + 10, cy - 140);
  brush.endShape(true);
  // small side cactus
  brush.fill("#4a3a1e", 220);
  brush.fillBleed(0.2);
  brush.circle(470, 530, 18, 0.3);
  brush.circle(470, 510, 10, 0.3);
  brush.circle(470, 490, 6, 0.3);
  // sun's shadow
  brush.fill("#3a2a14", 150);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(500, 520); brush.vertex(520, 520); brush.vertex(520, 480); brush.vertex(500, 480);
  brush.endShape(true);
}
