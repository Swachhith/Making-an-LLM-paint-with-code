async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf4e8");
  randomSeed(2413);
  brush.noStroke();

  // soft sky-blue ground wash, lower left
  brush.fill("#a8c8e0", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 470); brush.vertex(150, 440); brush.vertex(300, 490); brush.vertex(600, 450); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // stems
  brush.fill("#4a7a5a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 470); brush.vertex(300, 600); brush.vertex(330, 600); brush.vertex(330, 470);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(230, 440); brush.vertex(230, 600); brush.vertex(255, 600); brush.vertex(255, 440);
  brush.endShape(true);

  // bloom 1: facing forward, upper right
  let cx = 370, cy = 230;
  let R = 130;
  for (let pass = 0; pass < 3; pass++) {
    let r = R * (0.85 - pass * 0.05);
    let col = ["#f28fa8", "#f26f8a", "#e85a7a"];
    for (let k = 0; k < 10; k++) {
      let a = k * 36 + pass * 12 + random(-3, 3);
      let len = random(50, 100);
      brush.fill(col[pass], 215 - pass * 10);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.5);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a - 15) * r, cy + sin(a - 15) * r);
      brush.vertex(cx + cos(a - 8) * len, cy + sin(a - 8) * len);
      brush.vertex(cx + cos(a + 8) * len, cy + sin(a + 8) * len);
      brush.vertex(cx + cos(a + 15) * r, cy + sin(a + 15) * r);
      brush.endShape(true);
    }
  }
  // centre
  brush.fill("#d83050", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 22, 0.4);

  // bloom 2: turned sideways, lower left
  cx = 170; cy = 360;
  R = 115;
  for (let pass = 0; pass < 3; pass++) {
    let r = R * (0.85 - pass * 0.05);
    let col = ["#f6a88a", "#f28a8a", "#e86a7a"];
    for (let k = 0; k < 10; k++) {
      let a = k * 36 + pass * 12 + random(-3, 3);
      let len = random(50, 90);
      brush.fill(col[pass], 210 - pass * 10);
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a - 15) * r, cy + sin(a - 15) * r);
      brush.vertex(cx + cos(a - 8) * len, cy + sin(a - 8) * len);
      brush.vertex(cx + cos(a + 8) * len, cy + sin(a + 8) * len);
      brush.vertex(cx + cos(a + 15) * r, cy + sin(a + 15) * r);
      brush.endShape(true);
    }
  }
  brush.fill("#d83050", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 20, 0.4);
}
