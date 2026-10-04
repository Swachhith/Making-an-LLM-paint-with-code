async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f1ea");
  randomSeed(727);
  brush.noStroke();

  // one big loose wet wash that the flowers sit in, pooling at the bottom
  brush.fill("#c8b4ea", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.9);
  brush.vertex(80, 120);
  brush.vertex(520, 90);
  brush.vertex(560, 380);
  brush.vertex(420, 520);
  brush.vertex(140, 500);
  brush.endShape(true);
  brush.fill("#f2d060", 150);
  brush.circle(470, 170, 90, 0.9);
  brush.fill("#7aa8d8", 140);
  brush.circle(160, 470, 90, 0.9);

  // three pansies, deep and saturated, each built from overlapping ragged blots
  let pans = [[215, 230, 1.2, 0], [410, 270, 1.0, 20], [305, 420, 0.95, -15]];
  for (let p of pans) {
    let x = p[0], y = p[1], k = p[2], tilt = p[3];
    let at = (ax, ay) => [x + (ax * cos(tilt) - ay * sin(tilt)) * k, y + (ax * sin(tilt) + ay * cos(tilt)) * k];
    let backs = [at(-36, -44), at(38, -42)];
    for (let pass = 0; pass < 3; pass++) {
      brush.fill(["#7a3cc8", "#4a148a", "#2a0858"][pass], [220, 200, 170][pass]);
      brush.fillBleed(0.3 - pass * 0.05);
      brush.fillTexture(0.55, 0.5);
      for (let b of backs) brush.circle(b[0] + pass * 4, b[1] + pass * 4, (58 - pass * 16) * k, 0.7);
    }
    for (let side of [-1, 1]) {
      let w = at(side * 58, 6);
      brush.fill("#8a44d0", 220);
      brush.fillBleed(0.28);
      brush.circle(w[0], w[1], 44 * k, 0.7);
      brush.fill("#f8c818", 200);
      brush.circle(w[0] - side * 8 * k, w[1] + 8 * k, 24 * k, 0.6);
    }
    let lip = at(0, 36);
    for (let pass = 0; pass < 2; pass++) {
      brush.fill(pass ? "#f0a008" : "#ffd012", pass ? 190 : 235);
      brush.fillBleed(0.28);
      brush.fillTexture(0.5, 0.5);
      brush.circle(lip[0], lip[1] - pass * 12 * k, (56 - pass * 26) * k, 0.6);
    }
    // dark face radiating into the yellow
    let f0 = at(-26, -10), f1 = at(26, -10), f2 = at(8, 44), f3 = at(-8, 44);
    for (let pass = 0; pass < 3; pass++) {
      brush.fill("#1c0638", 235);
      brush.fillBleed(0.15);
      brush.beginShape(0.5);
      brush.vertex(f0[0], f0[1]);
      brush.vertex(f1[0], f1[1]);
      brush.vertex(f2[0], f2[1]);
      brush.vertex(f3[0], f3[1]);
      brush.endShape(true);
    }
    let eye = at(0, -6);
    brush.fill("#fff4b0", 240);
    brush.fillBleed(0.05);
    brush.circle(eye[0], eye[1], 6 * k, 0.2);

    // heavy drips from the lip, ending in beads
    for (let d = 0; d < 3; d++) {
      let s = at(random(-50, 50), random(50, 70));
      let len = random(60, 170);
      let c = random(["#5a1ca8", "#8a44d0", "#e8a808"]);
      for (let pass = 0; pass < 2; pass++) {
        brush.fill(c, 210);
        brush.fillBleed(0.12);
        brush.fillTexture(0.3, 0.4);
        brush.beginShape(0.4);
        brush.vertex(s[0] - 10, s[1]);
        brush.vertex(s[0] + 10, s[1]);
        brush.vertex(s[0] + 8, s[1] + len);
        brush.vertex(s[0] - 8, s[1] + len);
        brush.endShape(true);
      }
      brush.circle(s[0], s[1] + len + 4, 12, 0.3);
    }
  }

  // leaves as quick loose blots
  for (let l of [[95, 330, 50], [535, 390, 44], [460, 470, 34]]) {
    brush.fill("#2e7a34", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(l[0], l[1], l[2], 0.85);
    brush.fill("#1a5424", 170);
    brush.circle(l[0] + 8, l[1] + 6, l[2] * 0.5, 0.6);
  }

  // flicked spatter
  for (let i = 0; i < 90; i++) {
    brush.fill(random(["#4a148a", "#f8c818", "#8a44d0", "#2e7a34"]), 230);
    brush.fillBleed(0.05);
    brush.circle(random(10, 590), random(20, 590), random(1.5, 8), 0.4);
  }
}
