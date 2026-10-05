async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece6d8");
  brush.noStroke();

  // earthy green foliage
  brush.fill("#6f8a4a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  brush.vertex(200, 520); brush.vertex(300, 500); brush.vertex(420, 530); brush.vertex(380, 600); brush.vertex(220, 600);
  brush.endShape(true);
  brush.fill("#4a6a3a", 170);
  brush.beginShape(0.8);
  brush.vertex(150, 540); brush.vertex(280, 550); brush.vertex(260, 620); brush.vertex(130, 610);
  brush.endShape(true);
  // stems
  brush.fill("#5a7a3a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(330, 420); brush.vertex(340, 420); brush.vertex(340, 520); brush.vertex(330, 520);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(470, 450); brush.vertex(480, 450); brush.vertex(480, 560); brush.vertex(470, 560);
  brush.endShape(true);

  // ranunculus: ruffled petals in overlapping rings, yellow-orange
  // bloom 1: face-on, left, large
  let cx = 210, cy = 260;
  for (let ring = 0; ring < 4; ring++) {
    let n = ring === 0 ? 14 : ring === 1 ? 11 : ring === 2 ? 8 : 5;
    let r = 100 + ring * 40;
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + ring * 15 + (ring % 2) * 8;
      let w = 24 - ring * 3;
      brush.fill("#f2c72a", 225);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a - 18) * r * 0.6, cy + sin(a - 18) * r * 0.6);
      brush.vertex(cx + cos(a - 100) * r, cy + sin(a - 100) * r);
      brush.vertex(cx + cos(a - 20) * r * 0.6, cy + sin(a - 20) * r * 0.6);
      brush.vertex(cx + cos(a) * r * 0.85, cy + sin(a) * r * 0.85);
      brush.vertex(cx + cos(a + 20) * r * 0.6, cy + sin(a + 20) * r * 0.6);
      brush.vertex(cx + cos(a + 100) * r, cy + sin(a + 100) * r);
      brush.vertex(cx + cos(a + 18) * r * 0.6, cy + sin(a + 18) * r * 0.6);
      brush.endShape(true);
      brush.fill("#e8a414", 170);
      brush.fillBleed(0.3);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a - 100) * r * 0.9, cy + sin(a - 100) * r * 0.9);
      brush.vertex(cx + cos(a - 60) * r * 0.85, cy + sin(a - 60) * r * 0.85);
      brush.vertex(cx + cos(a - 20) * r * 0.75, cy + sin(a - 20) * r * 0.75);
      brush.vertex(cx + cos(a) * r * 0.6, cy + sin(a) * r * 0.6);
      brush.vertex(cx + cos(a + 20) * r * 0.75, cy + sin(a + 20) * r * 0.75);
      brush.vertex(cx + cos(a + 60) * r * 0.85, cy + sin(a + 60) * r * 0.85);
      brush.vertex(cx + cos(a + 100) * r * 0.9, cy + sin(a + 100) * r * 0.9);
      brush.endShape(true);
    }
  }
  brush.fill("#d48a1a", 210);
  brush.circle(cx, cy, 30, 0.3);

  // bloom 2: side view, right, smaller
  cx = 470; cy = 330;
  for (let ring = 0; ring < 3; ring++) {
    let n = ring === 0 ? 10 : 7;
    let r = 80 + ring * 30;
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + ring * 12 + 90;
      let w = 20 - ring * 2;
      brush.fill("#f2c72a", 225);
      brush.fillBleed(0.25);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a - 18) * r * 0.6, cy + sin(a - 18) * r * 0.6);
      brush.vertex(cx + cos(a - 90) * r * 0.8, cy + sin(a - 90) * r * 0.8);
      brush.vertex(cx + cos(a - 10) * r * 0.6, cy + sin(a - 10) * r * 0.6);
      brush.vertex(cx + cos(a) * r * 0.9, cy + sin(a) * r * 0.9);
      brush.vertex(cx + cos(a + 10) * r * 0.6, cy + sin(a + 10) * r * 0.6);
      brush.vertex(cx + cos(a + 90) * r * 0.8, cy + sin(a + 90) * r * 0.8);
      brush.vertex(cx + cos(a + 18) * r * 0.6, cy + sin(a + 18) * r * 0.6);
      brush.endShape(true);
    }
  }
  brush.fill("#c87a14", 210);
  brush.circle(cx, cy, 24, 0.3);
  brush.fill("#6f8a4a", 210);
  brush.beginShape(0.5);
  brush.vertex(cx - 20, cy + 10); brush.vertex(cx + 20, cy - 10); brush.vertex(cx + 18, cy + 30); brush.vertex(cx - 18, cy + 30);
  brush.endShape(true);
}
