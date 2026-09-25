async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8ecd6");
  brush.noStroke();

  brush.fill("#f2c98a", 150);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.4);
  brush.circle(300, 300, 250, true);

  let cx = 300, cy = 305;
  let outer = [0, 60, 120, 180, 240, 300];
  for (let k = 0; k < outer.length; k++) {
    let a = outer[k] + 30;
    let tipX = cx + cos(a) * 190, tipY = cy + sin(a) * 190;
    brush.fill("#8a4fa8", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.5);
    brush.beginShape(0.6);
    brush.vertex(cx + cos(a - 40) * 40, cy + sin(a - 40) * 40);
    brush.vertex(cx + cos(a - 22) * 150, cy + sin(a - 22) * 150);
    brush.vertex(tipX, tipY);
    brush.vertex(cx + cos(a + 22) * 150, cy + sin(a + 22) * 150);
    brush.vertex(cx + cos(a + 40) * 40, cy + sin(a + 40) * 40);
    brush.endShape(true);
  }
  for (let k = 0; k < outer.length; k++) {
    let a = outer[k];
    brush.fill("#6a2f8c", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.6);
    brush.vertex(cx + cos(a - 30) * 30, cy + sin(a - 30) * 30);
    brush.vertex(cx + cos(a - 18) * 110, cy + sin(a - 18) * 110);
    brush.vertex(cx + cos(a) * 140, cy + sin(a) * 140);
    brush.vertex(cx + cos(a + 18) * 110, cy + sin(a + 18) * 110);
    brush.vertex(cx + cos(a + 30) * 30, cy + sin(a + 30) * 30);
    brush.endShape(true);
    brush.fill("#c98ac4", 150);
    brush.fillBleed(0.15);
    brush.beginShape(0.7);
    brush.vertex(cx + cos(a - 6) * 60, cy + sin(a - 6) * 60);
    brush.vertex(cx + cos(a) * 118, cy + sin(a) * 118);
    brush.vertex(cx + cos(a + 6) * 60, cy + sin(a + 6) * 60);
    brush.endShape(true);
  }

  brush.fill("#3b1a3f", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.6, 0.3);
  brush.circle(cx, cy, 42, true);
  brush.fill("#e0b04a", 220);
  brush.fillBleed(0.1);
  for (let k = 0; k < 6; k++) {
    brush.circle(cx + cos(k * 60 + 15) * 22, cy + sin(k * 60 + 15) * 22, 8, true);
  }
  brush.fill("#d8e07a", 200);
  brush.circle(cx, cy, 12, true);
}
