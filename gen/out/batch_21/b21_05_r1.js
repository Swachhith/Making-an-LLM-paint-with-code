async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf0dc");
  brush.noStroke();

  // warm sky, glowing lower
  brush.fill("#f0c48a", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#ec9a72", 180);
  brush.beginShape(0.5);
  brush.vertex(-20, 190); brush.vertex(620, 170); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);

  // plume: rising column, then a broad drift left across the sky
  let puffs = [[292, 90, 30], [284, 60, 36], [262, 36, 42], [220, 26, 50], [160, 30, 54], [96, 44, 52], [40, 60, 48]];
  for (let p of puffs) {
    brush.fill("#a38e8c", 185);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(p[0], p[1], p[2], 0.8);
  }
  for (let p of puffs) {
    brush.fill("#6f5e64", 175);
    brush.fillBleed(0.25);
    brush.circle(p[0] + 4, p[1] + 12, p[2] * 0.5, 0.7);
  }
  // sunlit tops of the plume in orange
  brush.fill("#e8a26e", 170);
  brush.fillBleed(0.3);
  brush.circle(250, 18, 20, 0.6);
  brush.circle(180, 14, 24, 0.6);

  // the cone: big, filling the width
  brush.fill("#a4664a", 215);
  brush.fillBleed(0.22);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.25);
  brush.vertex(-20, 300); brush.vertex(120, 240); brush.vertex(240, 140); brush.vertex(280, 112); brush.vertex(320, 114); brush.vertex(370, 150); brush.vertex(500, 240); brush.vertex(620, 290); brush.vertex(620, 300);
  brush.endShape(true);
  brush.fill("#6a4234", 205);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(300, 114); brush.vertex(320, 114); brush.vertex(370, 150); brush.vertex(500, 240); brush.vertex(620, 290); brush.vertex(620, 300); brush.vertex(380, 300); brush.vertex(330, 200);
  brush.endShape(true);
  // gullies on the lit flank
  for (let i = 0; i < 3; i++) {
    brush.fill("#8a543e", 180);
    brush.fillBleed(0.2);
    brush.beginShape(0.4);
    brush.vertex(270 - i * 20, 130 + i * 6); brush.vertex(284 - i * 20, 132 + i * 6); brush.vertex(220 - i * 40, 290); brush.vertex(200 - i * 40, 290);
    brush.endShape(true);
  }
  brush.fill("#e8582e", 230);
  brush.fillBleed(0.25);
  brush.circle(300, 114, 16, 0.5);

  // shore
  brush.fill("#56543a", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(-20, 294); brush.vertex(620, 292); brush.vertex(620, 312); brush.vertex(-20, 314);
  brush.endShape(true);

  // lake: sky glow, the inverted cone, the inverted plume
  brush.fill("#e9ae82", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, 312); brush.vertex(620, 312); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#96644e", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 314); brush.vertex(120, 370); brush.vertex(240, 470); brush.vertex(280, 496); brush.vertex(320, 494); brush.vertex(370, 460); brush.vertex(500, 370); brush.vertex(620, 318);
  brush.endShape(true);
  brush.fill("#6a4638", 170);
  brush.beginShape(0.3);
  brush.vertex(310, 494); brush.vertex(370, 460); brush.vertex(500, 370); brush.vertex(620, 318); brush.vertex(620, 330); brush.vertex(390, 330);
  brush.endShape(true);
  brush.fill("#e05a34", 190);
  brush.circle(300, 494, 12, 0.5);
  for (let p of puffs) {
    brush.fill("#9a8482", 150);
    brush.fillBleed(0.3);
    brush.circle(p[0], 600 - p[1] * 0.5 + 20, p[2] * 0.9, 0.8);
  }

  // horizontal ripple breaks across the reflection
  for (let i = 0; i < 7; i++) {
    let y = 330 + i * 38;
    brush.fill("#f7d6a8", 215);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.4);
    brush.vertex(60 + i * 25, y); brush.vertex(560 - i * 20, y - 2); brush.vertex(550 - i * 20, y + 5); brush.vertex(70 + i * 25, y + 6);
    brush.endShape(true);
  }
}
