async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff8e6");
  brush.noStroke();

  // warm light: a soft peach wash in the background
  brush.fill("#f7c9a8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 600); brush.vertex(600, 600); brush.vertex(600, 0); brush.vertex(0, 0);
  brush.endShape(true);

  // stem and leaf
  brush.fill("#3a7a4a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(300, 470); brush.vertex(220, 600); brush.vertex(300, 600); brush.vertex(380, 470);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(300, 470); brush.vertex(380, 600); brush.vertex(300, 600); brush.vertex(220, 470);
  brush.endShape(true);

  // petals: three deep blue outer petals, three lighter blue inner petals
  let cx = 300, cy = 300;
  for (let i = 0; i < 3; i++) {
    let a = i * 120;
    let r = 220;
    brush.fill("#1e4a8a", 225);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 40) * r * 0.85, cy + sin(a - 40) * r * 0.85);
    brush.vertex(cx + cos(a - 10) * r, cy + sin(a - 10) * r);
    brush.vertex(cx + cos(a + 10) * r, cy + sin(a + 10) * r);
    brush.vertex(cx + cos(a + 40) * r * 0.85, cy + sin(a + 40) * r * 0.85);
    brush.endShape(true);
    // darker vein
    brush.fill("#0e2452", 210);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 20) * r * 0.3, cy + sin(a - 20) * r * 0.3);
    brush.vertex(cx + cos(a + 20) * r * 0.3, cy + sin(a + 20) * r * 0.3);
    brush.endShape(true);
  }
  for (let i = 0; i < 3; i++) {
    let a = i * 120 + 60;
    let r = 150;
    brush.fill("#4a8fd8", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 50) * r * 0.8, cy + sin(a - 50) * r * 0.8);
    brush.vertex(cx + cos(a - 15) * r, cy + sin(a - 15) * r);
    brush.vertex(cx + cos(a + 15) * r, cy + sin(a + 15) * r);
    brush.vertex(cx + cos(a + 50) * r * 0.8, cy + sin(a + 50) * r * 0.8);
    brush.endShape(true);
  }
  // yellow centre
  brush.fill("#f0a800", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 50, 0.4);
  brush.fill("#ffd020", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 32, 0.4);
  brush.fill("#f0a800", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 22, 0.5);
  // golden stamen
  for (let i = 0; i < 8; i++) {
    let a = i * 45;
    brush.fill("#e89a00", 225);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a) * 70, cy + sin(a) * 70);
    brush.vertex(cx + cos(a) * 90, cy + sin(a) * 90);
    brush.endShape(true);
    brush.fill("#f0a800", 240);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.circle(cx + cos(a) * 70, cy + sin(a) * 70, 3, 0.2);
  }
  // a few gold flecks on the blue petals
  let spots = [[120, 180], [200, 260], [380, 170], [460, 250], [150, 320], [430, 300]];
  for (let p of spots) {
    brush.fill("#ffd020", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.circle(p[0], p[1], 7, 0.5);
  }
}
