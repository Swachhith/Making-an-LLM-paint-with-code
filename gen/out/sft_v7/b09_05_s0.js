async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7efe1");
  brush.noStroke();

  // warm sky: peach to apricot, lower near the horizon
  brush.fill("#f2c88a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#f0a878", 160);
  brush.beginShape(0.6);
  brush.vertex(-20, 230); brush.vertex(620, 210); brush.vertex(620, 420); brush.vertex(-20, 440);
  brush.endShape(true);

  // rolling hills, layered
  brush.fill("#e89a5a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 440); brush.vertex(120, 390); brush.vertex(280, 420); brush.vertex(420, 370);
  brush.vertex(620, 400); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#d97a44", 170);
  brush.beginShape(0.7);
  brush.vertex(-20, 460); brush.vertex(220, 430); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // foreground meadow
  brush.fill("#c98a3c", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 500); brush.vertex(300, 470); brush.vertex(620, 510); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // sunlit grass
  brush.fill("#9a7a38", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 560); brush.vertex(300, 540); brush.vertex(620, 570); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // cottage, small
  brush.fill("#5a3a1a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.3);
  brush.vertex(220, 420); brush.vertex(380, 420); brush.vertex(390, 460); brush.vertex(210, 460);
  brush.endShape(true);
  brush.fill("#5a3a1a", 230);
  brush.beginShape(0.3);
  brush.vertex(210, 460); brush.vertex(390, 460); brush.vertex(390, 520); brush.vertex(210, 520);
  brush.endShape(true);
  brush.fill("#d83a2a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.3);
  brush.vertex(222, 380); brush.vertex(378, 380); brush.vertex(376, 340); brush.vertex(224, 340);
  brush.endShape(true);
  brush.fill("#d83a2a", 230);
  brush.beginShape(0.3);
  brush.vertex(224, 340); brush.vertex(376, 340); brush.vertex(374, 300); brush.vertex(222, 300);
  brush.endShape(true);
  // chimney
  brush.fill("#3a2010", 230);
  brush.beginShape(0.3);
  brush.vertex(260, 360); brush.vertex(270, 360); brush.vertex(270, 320); brush.vertex(260, 320);
  brush.endShape(true);
  // smoke
  brush.fill("#b8a88a", 150);
  brush.fillBleed(0.3);
  brush.circle(265, 300, 14, 0.5);
  brush.circle(278, 280, 10, 0.5);
  brush.circle(250, 260, 8, 0.5);
  // tree in meadow
  brush.fill("#3a2010", 230);
  brush.beginShape(0.3);
  brush.vertex(470, 520); brush.vertex(480, 520); brush.vertex(480, 450); brush.vertex(470, 450);
  brush.endShape(true);
  brush.fill("#5a3a1a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(440, 420); brush.vertex(520, 380); brush.vertex(600, 420); brush.vertex(520, 460); brush.vertex(440, 420);
  brush.endShape(true);
  // distant tree
  brush.fill("#3a2010", 220);
  brush.beginShape(0.3);
  brush.vertex(120, 480); brush.vertex(130, 480); brush.vertex(130, 420); brush.vertex(120, 420);
  brush.endShape(true);
  brush.fill("#5a3a1a", 200);
  brush.beginShape(0.7);
  brush.vertex(80, 390); brush.vertex(160, 350); brush.vertex(240, 390); brush.vertex(160, 430); brush.vertex(80, 390);
  brush.endShape(true);
}
