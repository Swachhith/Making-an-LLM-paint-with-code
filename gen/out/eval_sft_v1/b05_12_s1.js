async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf6ef");
  randomSeed(1101);
  brush.noStroke();

  // soft sky-blue wash behind both blooms
  brush.fill("#b8c8e6", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stems
  brush.fill("#7aa890", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(300, 470); brush.vertex(312, 620); brush.vertex(325, 620); brush.vertex(313, 470);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(150, 470); brush.vertex(162, 620); brush.vertex(175, 620); brush.vertex(163, 470);
  brush.endShape(true);

  // leaves
  brush.fill("#5f9a7a", 190);
  brush.fillBleed(0.28);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(260, 400); brush.vertex(320, 370); brush.vertex(370, 400); brush.vertex(330, 430);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(190, 430); brush.vertex(150, 480); brush.vertex(210, 510); brush.vertex(170, 460);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(340, 340); brush.vertex(390, 300); brush.vertex(440, 330); brush.vertex(400, 360);
  brush.endShape(true);

  // bloom 1: facing up, left
  let cx = 200, cy = 220;
  let r = 110;
  for (let pass = 0; pass < 3; pass++) {
    let s = pass == 2 ? 0.85 : 1;
    for (let i = 0; i < 20; i++) {
      let a = i * 18 + random(-4, 4);
      let rr = r * random(0.85, 1);
      let rr2 = rr * random(0.9, 1.05);
      let len = random(20, 50);
      brush.fill(pass == 2 ? "#f7a8b8" : "#e88aa8", pass == 2 ? 235 : 190);
      brush.fillBleed(pass == 2 ? 0.25 : 0.3);
      brush.fillTexture(pass == 2 ? 0.35 : 0.5, pass == 2 ? 0.3 : 0.55);
      brush.beginShape(0.9);
      brush.vertex(cx + cos(a) * rr, cy + sin(a) * rr);
      brush.vertex(cx + cos(a - 16) * rr2, cy + sin(a - 16) * rr2);
      brush.vertex(cx + cos(a - 4) * rr2 * 0.9, cy + sin(a - 4) * rr2 * 0.9);
      brush.vertex(cx + cos(a + 4) * rr2 * 0.9, cy + sin(a + 4) * rr2 * 0.9);
      brush.vertex(cx + cos(a + 16) * rr2, cy + sin(a + 16) * rr2);
      brush.vertex(cx + cos(a) * rr * 0.8, cy + sin(a) * rr * 0.8);
      brush.endShape(true);
    }
    brush.fill("#f2b8c8", 210);
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.4);
    brush.circle(cx, cy, r * s * 0.65, 0.3);
  }
  brush.fill("#e07a8a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, r * 0.45, 0.3);
  brush.fill("#d05a6a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(cx, cy, r * 0.3, 0.2);

  // bloom 2: tilted down, right
  cx = 440; cy = 360;
  r = 95;
  for (let pass = 0; pass < 3; pass++) {
    let s = pass == 2 ? 0.85 : 1;
    for (let i = 0; i < 20; i++) {
      let a = i * 18 + random(-4, 4);
      let rr = r * random(0.85, 1);
      let rr2 = rr * random(0.9, 1.05);
      let len = random(20, 50);
      brush.fill(pass == 2 ? "#f8a4c4" : "#f088a8", pass == 2 ? 230 : 190);
      brush.fillBleed(pass == 2 ? 0.25 : 0.3);
      brush.fillTexture(pass == 2 ? 0.35 : 0.5, pass == 2 ? 0.3 : 0.55);
      brush.beginShape(0.9);
      brush.vertex(cx + cos(a) * rr, cy + sin(a) * rr);
      brush.vertex(cx + cos(a - 16) * rr2, cy + sin(a - 16) * rr2);
      brush.vertex(cx + cos(a - 4) * rr2 * 0.9, cy + sin(a - 4) * rr2 * 0.9);
      brush.vertex(cx + cos(a + 4) * rr2 * 0.9, cy + sin(a + 4) * rr2 * 0.9);
      brush.vertex(cx + cos(a + 16) * rr2, cy + sin(a + 16) * rr2);
      brush.vertex(cx + cos(a) * rr * 0.8, cy + sin(a) * rr * 0.8);
      brush.endShape(true);
    }
    brush.fill("#f4c8d8", 210);
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.4);
    brush.circle(cx, cy, r * s * 0.65, 0.3);
  }
  brush.fill("#e07a8a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, r * 0.45, 0.3);
  brush.fill("#d05a6a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(cx, cy, r * 0.3, 0.2);
}
