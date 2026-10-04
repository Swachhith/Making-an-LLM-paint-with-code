async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f1ee");
  brush.noStroke();
  // blush background wash
  brush.fill("#f0c8cc", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 300);
  brush.vertex(-20, 360);
  brush.endShape(true);
  brush.fill("#cfe0d0", 170);
  brush.beginShape(1);
  brush.vertex(-20, 360);
  brush.vertex(620, 300);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // straight stem
  brush.fill("#8fb58a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(290, 260);
  brush.vertex(310, 260);
  brush.vertex(318, 610);
  brush.vertex(296, 610);
  brush.endShape(true);
  // two leaves, one each side
  brush.fill("#a3c79a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(300, 430);
  brush.vertex(220, 380);
  brush.vertex(140, 400);
  brush.vertex(210, 440);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(308, 500);
  brush.vertex(400, 450);
  brush.vertex(470, 470);
  brush.vertex(390, 520);
  brush.endShape(true);
  brush.fill("#6f9a6c", 150);
  brush.circle(220, 410, 18, 0.6);
  brush.circle(400, 480, 18, 0.6);
  // pastel yellow ray petals, loose ring
  let hx = 300, hy = 210;
  for (let k = 0; k < 14; k++) {
    let a = k * (360 / 14);
    brush.fill("#f6d77a", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(1);
    brush.vertex(hx + cos(a - 12) * 50, hy + sin(a - 12) * 50);
    brush.vertex(hx + cos(a - 4) * 130, hy + sin(a - 4) * 130);
    brush.vertex(hx + cos(a + 6) * 132, hy + sin(a + 6) * 132);
    brush.vertex(hx + cos(a + 12) * 50, hy + sin(a + 12) * 50);
    brush.endShape(true);
  }
  for (let k = 0; k < 14; k++) {
    let a = k * (360 / 14) + 12;
    brush.fill("#efbe5a", 170);
    brush.fillBleed(0.25);
    brush.circle(hx + cos(a) * 80, hy + sin(a) * 80, 16, 0.6);
  }
  // soft cocoa-mauve disc
  brush.fill("#b08a86", 210);
  brush.fillBleed(0.25);
  brush.circle(hx, hy, 55, 0.3);
  brush.fill("#8e6a68", 180);
  brush.circle(hx + 6, hy + 6, 34, 0.3);
}
