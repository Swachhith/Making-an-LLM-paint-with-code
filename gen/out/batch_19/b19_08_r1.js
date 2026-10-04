async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#101649");
  brush.noStroke();

  // swirling bands of bolder blue in the sky, kept away from the moon
  const bands = [[-20, 60, 300, 20, 330, 110], [-20, 170, 260, 130, 300, 230], [-20, 280, 200, 250, 620, 330]];
  for (const b of bands) {
    brush.fill("#2a3fb0", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(b[0], b[1]); brush.vertex(b[2], b[3]); brush.vertex(b[4], b[5]); brush.vertex(b[2], b[5] + 30); brush.vertex(b[0], b[1] + 50);
    brush.endShape(true);
  }

  // moon painted straight onto the dark paper, several passes to build it bright
  for (let p = 0; p < 3; p++) {
    brush.fill(p === 2 ? "#fff6c0" : "#ffe066", 245);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.3);
    brush.circle(430, 165, 95 - p * 14, true);
  }
  // a thin warm glow ring outside the disc
  for (let k = 0; k < 16; k++) {
    const a = k * 22.5 * Math.PI / 180;
    brush.fill("#f2a33a", 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.3, 0.3);
    brush.circle(430 + Math.cos(a) * 118, 165 + Math.sin(a) * 118, 14, true);
  }

  // stars
  let s = 11;
  for (let i = 0; i < 70; i++) {
    s = (s * 1103515245 + 12345) % 2147483648;
    const x = (s / 2147483648) * 600;
    s = (s * 1103515245 + 12345) % 2147483648;
    const y = (s / 2147483648) * 330;
    if (Math.hypot(x - 430, y - 165) < 140) continue;
    brush.fill(i % 3 ? "#fff3a0" : "#a8ecff", 245);
    brush.fillBleed(0.1);
    brush.fillTexture(0.2, 0.2);
    brush.circle(x, y, 2 + (i % 4), true);
  }

  // hill behind the village
  brush.fill("#177a5e", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 390); brush.vertex(150, 345); brush.vertex(330, 385); brush.vertex(500, 355);
  brush.vertex(620, 375); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // houses: bold walls, very dark roofs, big lit windows
  const houses = [[30, 415, 80, 70, "#d02848"], [125, 395, 65, 90, "#3448c8"], [205, 430, 85, 60, "#9a2ab0"],
                  [300, 405, 65, 85, "#e0602a"], [380, 430, 80, 60, "#3448c8"], [470, 410, 70, 80, "#d02848"], [550, 440, 70, 60, "#9a2ab0"]];
  for (const h of houses) {
    const [x, y, w, ht, c] = h;
    for (let p = 0; p < 2; p++) {
      brush.fill(c, 235);
      brush.fillBleed(0.15);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.05);
      brush.vertex(x, y + ht); brush.vertex(x, y); brush.vertex(x + w, y); brush.vertex(x + w, y + ht);
      brush.endShape(true);
    }
    brush.fill("#080a22", 240);
    brush.fillBleed(0.1);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.05);
    brush.vertex(x - 8, y + 4); brush.vertex(x + w / 2, y - 32); brush.vertex(x + w + 8, y + 4);
    brush.endShape(true);
    for (const fx of [0.18, 0.58]) {
      brush.fill("#ffd23a", 250);
      brush.fillBleed(0.15);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.1);
      brush.vertex(x + w * fx, y + ht * 0.25); brush.vertex(x + w * fx + 17, y + ht * 0.25);
      brush.vertex(x + w * fx + 17, y + ht * 0.25 + 20); brush.vertex(x + w * fx, y + ht * 0.25 + 20);
      brush.endShape(true);
    }
  }
  // spire
  brush.fill("#080a22", 240);
  brush.beginShape(0.05);
  brush.vertex(275, 430); brush.vertex(275, 350); brush.vertex(292, 285); brush.vertex(309, 350); brush.vertex(309, 430);
  brush.endShape(true);
  brush.fill("#ffd23a", 250);
  brush.circle(292, 370, 7, true);

  // dark foreground with window light spilling as warm dabs
  brush.fill("#06201e", 240);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 505); brush.vertex(200, 495); brush.vertex(400, 515); brush.vertex(620, 500); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
