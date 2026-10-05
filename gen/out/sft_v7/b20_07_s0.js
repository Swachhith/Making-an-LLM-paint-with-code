async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf7f2");
  brush.noStroke();

  // splashy sky washes
  brush.fill("#e8b7d4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(300, -20); brush.vertex(620, 150); brush.vertex(620, 300); brush.vertex(300, 280); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#b6c4d8", 150);
  brush.beginShape(0.8);
  brush.vertex(470, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(470, 200);
  brush.endShape(true);

  // stem: a loose S-curve from bottom-left to top-right
  let x = [-10, 100, 170, 250, 330, 400, 470, 530, 580, 600];
  let y = [590, 460, 340, 230, 140, 70, 30, 10, 0, -20];
  for (let i = 0; i < x.length; i++) {
    brush.fill("#5e3a2a", 210);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x[i], y[i], 12, 0.3);
  }
  // drips along the stem
  brush.fill("#4a2a20", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  for (let i = 0; i < 22; i++) {
    let t = i / 21;
    let sx = lerp(x[0], x[9], t);
    let sy = lerp(y[0], y[9], t);
    let dx = lerp(x[4], x[8], t);
    brush.circle(sx + dx * 7, sy + lerp(y[4], y[8], t) + 15, 5, 0.3);
  }

  // cherry blossoms: two passes each, loose and splashed
  let blooms = [
    [340, 110, 220], [380, 140, 170], [360, 190, 140],
    [320, 220, 160], [390, 250, 130],
    [350, 300, 150], [300, 330, 170], [420, 320, 140],
    [460, 280, 120], [380, 270, 130],
    [350, 240, 150], [320, 210, 140], [390, 170, 130]
  ];
  for (let pass = 0; pass < 2; pass++) {
    for (let b of blooms) {
      let [cx, cy, r] = b;
      brush.fill(pass ? "#f2b8c8" : "#f7a8c4", pass ? 180 : 200);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.8);
      for (let a = 0; a < 8; a++) {
        let ang = a * 45 + pass * 15;
        brush.vertex(cx + cos(ang) * r * 0.55, cy + sin(ang) * r * 0.55);
        brush.vertex(cx + cos(ang - 22) * r, cy + sin(ang - 22) * r);
        brush.vertex(cx + cos(ang - 11) * r * 0.9, cy + sin(ang - 11) * r * 0.9);
      }
      brush.endShape(true);
      brush.fill(pass ? "#d88aa8" : "#e69ac0", pass ? 170 : 190);
      brush.beginShape(0.8);
      for (let a = 0; a < 8; a++) {
        let ang = a * 45 + pass * 15 + 20;
        brush.vertex(cx + cos(ang) * r * 0.5, cy + sin(ang) * r * 0.5);
        brush.vertex(cx + cos(ang - 26) * r * 0.9, cy + sin(ang - 26) * r * 0.9);
        brush.vertex(cx + cos(ang - 13) * r * 0.85, cy + sin(ang - 13) * r * 0.85);
      }
      brush.endShape(true);
    }
  }
  // darker centre dots
  for (let b of blooms) {
    brush.fill("#8a2a4a", 220);
    brush.fillBleed(0.1);
    brush.circle(b[0], b[1], 4, 0.2);
  }
  // splatter dots
  for (let i = 0; i < 30; i++) {
    brush.fill(["#f7a8c4", "#f2b8c8", "#e8b7d4"][i % 3], 190);
    brush.fillBleed(0.2);
    brush.circle(random(60, 540), random(60, 540), random(3, 7), 0.3);
  }
}
