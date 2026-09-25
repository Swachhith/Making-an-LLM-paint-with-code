async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8ead0");
  brush.noStroke();

  brush.fill("#f0b86a", 170);
  brush.fillBleed(0.4);
  brush.fillTexture(0.55, 0.45);
  brush.circle(290, 310, 260, true);
  brush.fill("#e89a78", 150);
  brush.fillBleed(0.35);
  brush.circle(360, 250, 150, true);

  let cx = 300, cy = 300;
  // three outer petals, broad and cupped
  for (let k = 0; k < 3; k++) {
    let a = k * 120 - 90;
    brush.fill("#9a5bb8", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.55);
    brush.beginShape(0.75);
    brush.vertex(cx + cos(a - 70) * 50, cy + sin(a - 70) * 50);
    brush.vertex(cx + cos(a - 45) * 175, cy + sin(a - 45) * 175);
    brush.vertex(cx + cos(a - 10) * 225, cy + sin(a - 10) * 225);
    brush.vertex(cx + cos(a + 20) * 215, cy + sin(a + 20) * 215);
    brush.vertex(cx + cos(a + 48) * 165, cy + sin(a + 48) * 165);
    brush.vertex(cx + cos(a + 70) * 50, cy + sin(a + 70) * 50);
    brush.endShape(true);
    brush.fill("#7a3a9e", 215);
    brush.fillBleed(0.25);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a - 40) * 40, cy + sin(a - 40) * 40);
    brush.vertex(cx + cos(a - 30) * 150, cy + sin(a - 30) * 150);
    brush.vertex(cx + cos(a + 5) * 190, cy + sin(a + 5) * 190);
    brush.vertex(cx + cos(a + 35) * 140, cy + sin(a + 35) * 140);
    brush.vertex(cx + cos(a + 40) * 40, cy + sin(a + 40) * 40);
    brush.endShape(true);
    brush.fill("#e9b7d6", 170);
    brush.fillBleed(0.1);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a - 20) * 170, cy + sin(a - 20) * 170);
    brush.vertex(cx + cos(a - 5) * 205, cy + sin(a - 5) * 205);
    brush.vertex(cx + cos(a + 18) * 195, cy + sin(a + 18) * 195);
    brush.vertex(cx + cos(a + 5) * 175, cy + sin(a + 5) * 175);
    brush.endShape(true);
  }
  // three inner petals, deeper, overlapping
  for (let k = 0; k < 3; k++) {
    let a = k * 120 - 30;
    brush.fill("#5e2585", 215);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.55);
    brush.beginShape(0.75);
    brush.vertex(cx + cos(a - 60) * 30, cy + sin(a - 60) * 30);
    brush.vertex(cx + cos(a - 40) * 115, cy + sin(a - 40) * 115);
    brush.vertex(cx + cos(a) * 150, cy + sin(a) * 150);
    brush.vertex(cx + cos(a + 40) * 115, cy + sin(a + 40) * 115);
    brush.vertex(cx + cos(a + 60) * 30, cy + sin(a + 60) * 30);
    brush.endShape(true);
    brush.fill("#b77ccc", 180);
    brush.fillBleed(0.1);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a - 20) * 100, cy + sin(a - 20) * 100);
    brush.vertex(cx + cos(a) * 138, cy + sin(a) * 138);
    brush.vertex(cx + cos(a + 20) * 100, cy + sin(a + 20) * 100);
    brush.endShape(true);
  }

  brush.fill("#2e1233", 235);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.3);
  brush.circle(cx, cy, 48, true);
  brush.fill("#1a0a1e", 235);
  brush.fillBleed(0.1);
  for (let k = 0; k < 6; k++) {
    brush.circle(cx + cos(k * 60 + 15) * 26, cy + sin(k * 60 + 15) * 26, 9, true);
  }
  brush.fill("#e0c860", 225);
  brush.circle(cx, cy, 14, true);
}
