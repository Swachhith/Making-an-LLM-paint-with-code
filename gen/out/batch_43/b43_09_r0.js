async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#070a14");
  brush.noStroke();
  // aurora curtains
  const g = [["#1fd18a", 210], ["#2bb8c8", 190], ["#7a3fd0", 180]];
  for (let i = 0; i < 3; i++) {
    brush.fill(g[i][0], g[i][1]); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.9);
    brush.vertex(-10, 200 + i * 30); brush.vertex(120, 90 + i * 20); brush.vertex(260, 150 - i * 10); brush.vertex(400, 60 + i * 25);
    brush.vertex(610, 120 + i * 15); brush.vertex(610, 260 + i * 25); brush.vertex(400, 230); brush.vertex(240, 280); brush.vertex(100, 250);
    brush.endShape(true);
  }
  brush.fill("#9affc8", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(130, 140); brush.vertex(260, 120); brush.vertex(380, 110); brush.vertex(330, 200); brush.vertex(200, 210);
  brush.endShape(true);
  // stars
  for (let i = 0; i < 22; i++) {
    brush.fill("#f4efd8", 230); brush.fillBleed(0.1); brush.fillTexture(0.2, 0.2);
    brush.circle(20 + (i * 97) % 580, 15 + (i * 53) % 90, 2.2, 0.2);
  }
  // lake with reflection
  brush.fill("#1b6a78", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-10, 370); brush.vertex(610, 370); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#2fd090", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(150, 390); brush.vertex(380, 385); brush.vertex(340, 500); brush.vertex(200, 520);
  brush.endShape(true);
  // silhouettes: shore hills and pines
  brush.fill("#04060c", 250); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(-10, 380); brush.vertex(120, 350); brush.vertex(300, 372); brush.vertex(500, 345); brush.vertex(610, 365); brush.vertex(610, 395); brush.vertex(-10, 400);
  brush.endShape(true);
  for (let i = 0; i < 5; i++) {
    const x = 30 + i * 38, h = 80 + (i % 3) * 30;
    brush.beginShape(0.2);
    brush.vertex(x - 28, 395); brush.vertex(x, 395 - h); brush.vertex(x + 28, 395);
    brush.endShape(true);
  }
  for (let i = 0; i < 4; i++) {
    const x = 470 + i * 40, h = 70 + (i % 2) * 40;
    brush.beginShape(0.2);
    brush.vertex(x - 28, 392); brush.vertex(x, 392 - h); brush.vertex(x + 28, 392);
    brush.endShape(true);
  }
  // cabin with a warm window
  brush.fill("#04060c", 250);
  brush.beginShape(0.2);
  brush.vertex(300, 392); brush.vertex(300, 360); brush.vertex(325, 345); brush.vertex(350, 360); brush.vertex(350, 392);
  brush.endShape(true);
  brush.fill("#ffb040", 240); brush.fillBleed(0.2); brush.fillTexture(0.2, 0.2);
  brush.circle(324, 372, 7, 0.2);
  brush.fill("#ff9a2a", 150); brush.fillBleed(0.2); brush.fillTexture(0.2, 0.2);
  brush.circle(324, 420, 8, 0.6);
}
