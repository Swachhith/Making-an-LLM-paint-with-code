async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf6ef");
  randomSeed(1111);
  brush.noStroke();
  // soft pale green leaves behind
  brush.fill("#b8d8a8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(150, 470); brush.vertex(300, 320); brush.vertex(450, 480); brush.vertex(600, 420); brush.vertex(600, 600); brush.vertex(200, 600);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(600, 120); brush.vertex(480, 250); brush.vertex(330, 220); brush.vertex(180, 350); brush.vertex(20, 400); brush.vertex(0, 600); brush.vertex(120, 580);
  brush.endShape(true);
  // pale pink shadow behind the bloom
  brush.fill("#f2c8d4", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(360, 260); brush.vertex(480, 320); brush.vertex(400, 440); brush.vertex(260, 420); brush.vertex(320, 340);
  brush.endShape(true);
  // outer ring: broad, overlapping petals, light rose
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < 13; i++) {
      const a = i * 360 / 13 + pass * 5;
      const len = 150 + random(20);
      brush.fill("#f4a8c0", 200 - pass * 20);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.4);
      brush.vertex(300, 300);
      brush.vertex(300 + cos(a - 22) * len, 300 + sin(a - 22) * len);
      brush.vertex(300 + cos(a - 10) * len * 0.95, 300 + sin(a - 10) * len * 0.95);
      brush.vertex(300 + cos(a + 10) * len * 0.95, 300 + sin(a + 10) * len * 0.95);
      brush.vertex(300 + cos(a + 22) * len, 300 + sin(a + 22) * len);
      brush.endShape(true);
    }
  }
  // mid ring: deeper rose, narrower
  for (let i = 0; i < 12; i++) {
    const a = i * 360 / 12 + 22;
    brush.fill("#e87fa8", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.4);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 14) * 110, 300 + sin(a - 14) * 110);
    brush.vertex(300 + cos(a - 6) * 90, 300 + sin(a - 6) * 90);
    brush.vertex(300 + cos(a + 6) * 90, 300 + sin(a + 6) * 90);
    brush.vertex(300 + cos(a + 14) * 110, 300 + sin(a + 14) * 110);
    brush.endShape(true);
  }
  // inner ring: crimson, narrow
  for (let i = 0; i < 11; i++) {
    const a = i * 360 / 11 + 32;
    brush.fill("#d23a6e", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 10) * 75, 300 + sin(a - 10) * 75);
    brush.vertex(300 + cos(a) * 55, 300 + sin(a) * 55);
    brush.vertex(300 + cos(a + 10) * 75, 300 + sin(a + 10) * 75);
    brush.endShape(true);
  }
  // heart-shaped notches at the tips of outer petals
  for (let i = 0; i < 13; i++) {
    const a = i * 360 / 13 + 2;
    brush.fill("#f2a8c8", 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(300 + cos(a) * 145, 300 + sin(a) * 145);
    brush.vertex(300 + cos(a - 14) * 130, 300 + sin(a - 14) * 130);
    brush.vertex(300 + cos(a - 10) * 130, 300 + sin(a - 10) * 130);
    brush.vertex(300 + cos(a + 10) * 130, 300 + sin(a + 10) * 130);
    brush.vertex(300 + cos(a + 14) * 130, 300 + sin(a + 14) * 130);
    brush.endShape(true);
  }
  // dark centre
  brush.fill("#8a1a3a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(300, 300, 28, 0.4);
  brush.fill("#4a0a20", 230);
  brush.circle(300, 300, 16, 0.3);
  brush.fill("#e8a840", 200);
  brush.circle(300, 300, 6, 0.2);
}
