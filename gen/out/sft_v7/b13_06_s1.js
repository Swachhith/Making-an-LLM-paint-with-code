async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf7e6");
  brush.noStroke();

  // warm light wash of yellow-green paper
  brush.fill("#f7e88a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // arcing stem: broad soft band from lower left to upper right
  brush.fill("#5f7a3a", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(220, 520); brush.vertex(250, 440); brush.vertex(290, 350); brush.vertex(330, 260);
  brush.vertex(365, 180); brush.vertex(405, 110); brush.vertex(445, 40); brush.vertex(530, -10);
  brush.vertex(560, 20); brush.vertex(500, 80); brush.vertex(430, 140); brush.vertex(370, 200);
  brush.vertex(325, 275); brush.vertex(280, 350); brush.vertex(240, 420); brush.vertex(200, 480);
  brush.endShape(true);
  brush.fill("#3a4f2a", 180);
  brush.beginShape(0.8);
  brush.vertex(225, 520); brush.vertex(250, 440); brush.vertex(290, 350); brush.vertex(330, 260);
  brush.vertex(365, 180); brush.vertex(405, 110); brush.vertex(445, 40); brush.vertex(530, -10);
  brush.vertex(560, 20); brush.vertex(500, 80); brush.vertex(430, 140); brush.vertex(370, 200);
  brush.vertex(325, 275); brush.vertex(280, 350); brush.vertex(240, 420); brush.vertex(200, 480);
  brush.endShape(true);

  // leaves
  brush.fill("#6a8a4a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(260, 470); brush.vertex(330, 420); brush.vertex(420, 390); brush.vertex(470, 410);
  brush.vertex(440, 450); brush.vertex(350, 470);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(470, 380); brush.vertex(550, 320); brush.vertex(620, 280); brush.vertex(620, 300);
  brush.vertex(550, 340); brush.vertex(470, 300);
  brush.endShape(true);

  // head: large dark centre, then rings of petals
  let cx = 455, cy = 100;
  brush.fill("#2a1a10", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 85, 0.3);
  for (let k = 0; k < 36; k++) {
    let a = k * 10 + (cx - 455) * 0.1;
    let r = 170 + (k % 3) * 6;
    let w = 38 + (k % 3) * 4;
    brush.fill("#f2c41a", 220);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(cx + cos(a - w) * 14, cy + sin(a - w) * 14);
    brush.vertex(cx + cos(a - w * 0.6) * r, cy + sin(a - w * 0.6) * r);
    brush.vertex(cx + cos(a) * r * 0.95, cy + sin(a) * r * 0.95);
    brush.vertex(cx + cos(a + w * 0.6) * r, cy + sin(a + w * 0.6) * r);
    brush.vertex(cx + cos(a + w) * 14, cy + sin(a + w) * 14);
    brush.endShape(true);
  }
  // a few dark veins radiating from the centre
  for (let k = 0; k < 12; k++) {
    let a = k * 30;
    brush.fill("#c98a14", 180);
    brush.fillBleed(0.15);
    brush.beginShape(0.3);
    brush.vertex(cx + cos(a) * 40, cy + sin(a) * 40);
    brush.vertex(cx + cos(a - 12) * 130, cy + sin(a - 12) * 130);
    brush.vertex(cx + cos(a) * 130, cy + sin(a) * 130);
    brush.vertex(cx + cos(a + 12) * 130, cy + sin(a + 12) * 130);
    brush.vertex(cx + cos(a + 12) * 110, cy + sin(a + 12) * 110);
    brush.vertex(cx + cos(a) * 110, cy + sin(a) * 110);
    brush.endShape(true);
  }
}
