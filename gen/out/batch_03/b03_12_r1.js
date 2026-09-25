async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6f8f7");
  brush.noStroke();

  // lily pad, notched, offset down-left
  brush.fill("#9cc49a", 190);
  brush.fillBleed(0.4);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  for (let a = 20; a <= 340; a += 40) {
    brush.vertex(240 + cos(a + 90) * 215, 380 + sin(a + 90) * 175);
  }
  brush.vertex(240, 380);
  brush.endShape(true);
  brush.fill("#6fa27a", 170);
  brush.fillBleed(0.3);
  brush.circle(150, 470, 70, true);
  // a hint of water
  brush.fill("#bfd6e2", 160);
  brush.fillBleed(0.5);
  brush.circle(520, 90, 90, true);

  let cx = 320, cy = 290;
  // cool grey shadow under the bloom
  brush.fill("#cfd6de", 180);
  brush.fillBleed(0.35);
  brush.circle(cx + 10, cy + 12, 170, true);

  for (let k = 0; k < 8; k++) {
    let a = k * 45 + 10;
    brush.fill("#f4e6ea", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.35, 0.45);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a - 25) * 30, cy + sin(a - 25) * 30);
    brush.vertex(cx + cos(a - 15) * 130, cy + sin(a - 15) * 130);
    brush.vertex(cx + cos(a) * 190, cy + sin(a) * 190);
    brush.vertex(cx + cos(a + 15) * 130, cy + sin(a + 15) * 130);
    brush.vertex(cx + cos(a + 25) * 30, cy + sin(a + 25) * 30);
    brush.endShape(true);
    // shadow down one side of each petal
    brush.fill("#c7cfdc", 175);
    brush.fillBleed(0.15);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a + 5) * 40, cy + sin(a + 5) * 40);
    brush.vertex(cx + cos(a + 12) * 130, cy + sin(a + 12) * 130);
    brush.vertex(cx + cos(a + 3) * 180, cy + sin(a + 3) * 180);
    brush.vertex(cx + cos(a + 20) * 60, cy + sin(a + 20) * 60);
    brush.endShape(true);
    brush.fill("#e595ae", 200);
    brush.fillBleed(0.25);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a - 8) * 140, cy + sin(a - 8) * 140);
    brush.vertex(cx + cos(a) * 188, cy + sin(a) * 188);
    brush.vertex(cx + cos(a + 8) * 140, cy + sin(a + 8) * 140);
    brush.endShape(true);
  }
  for (let k = 0; k < 7; k++) {
    let a = k * 51 + 35;
    brush.fill("#fbf1f3", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.35, 0.45);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a - 30) * 20, cy + sin(a - 30) * 20);
    brush.vertex(cx + cos(a - 17) * 85, cy + sin(a - 17) * 85);
    brush.vertex(cx + cos(a) * 120, cy + sin(a) * 120);
    brush.vertex(cx + cos(a + 17) * 85, cy + sin(a + 17) * 85);
    brush.vertex(cx + cos(a + 30) * 20, cy + sin(a + 30) * 20);
    brush.endShape(true);
    brush.fill("#bec8d8", 185);
    brush.fillBleed(0.15);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a + 10) * 30, cy + sin(a + 10) * 30);
    brush.vertex(cx + cos(a + 14) * 95, cy + sin(a + 14) * 95);
    brush.vertex(cx + cos(a + 24) * 30, cy + sin(a + 24) * 30);
    brush.endShape(true);
    brush.fill("#eeb0c2", 185);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a - 6) * 95, cy + sin(a - 6) * 95);
    brush.vertex(cx + cos(a) * 118, cy + sin(a) * 118);
    brush.vertex(cx + cos(a + 6) * 95, cy + sin(a + 6) * 95);
    brush.endShape(true);
  }
  brush.fill("#f0c850", 225);
  brush.fillBleed(0.3);
  brush.circle(cx, cy, 42, true);
  brush.fill("#b7c860", 230);
  brush.fillBleed(0.1);
  brush.circle(cx, cy, 25, true);
  for (let k = 0; k < 7; k++) {
    brush.fill("#6f7a30", 220);
    brush.circle(cx + cos(k * 51) * 13, cy + sin(k * 51) * 13, 3.5, true);
  }
}
