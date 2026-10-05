async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efdc");
  brush.noStroke();
  brush.fill("#e0a850", 140); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5); brush.vertex(-10, 430); brush.vertex(200, 418); brush.vertex(610, 436); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.fill("#c8782a", 130);
  brush.beginShape(0.5); brush.vertex(-10, 500); brush.vertex(300, 485); brush.vertex(610, 505); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.fill("#e89060", 100); brush.circle(130, 110, 90, 0.8);
  // main tree trunk and limbs
  brush.fill("#2c1a12", 225); brush.fillBleed(0.15);
  brush.beginShape(0.3); brush.vertex(442, 462); brush.vertex(468, 462); brush.vertex(464, 400); brush.vertex(458, 350); brush.vertex(444, 400); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(448, 380); brush.vertex(420, 330); brush.vertex(402, 305); brush.vertex(428, 322); brush.vertex(456, 360); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(458, 370); brush.vertex(490, 330); brush.vertex(512, 312); brush.vertex(498, 340); brush.vertex(468, 384); brush.endShape(true);
  // blossom clouds
  const clusters = [[455,300,40],[410,315,28],[505,320,26],[430,285,24],[480,282,24]];
  for (const c of clusters) {
    brush.fill("#e88878", 140); brush.fillBleed(0.3); brush.circle(c[0], c[1], c[2], 0.8);
  }
  for (const c of clusters) {
    brush.fill("#d04a3c", 160); brush.circle(c[0] + 3, c[1] + 2, c[2] * 0.55, 0.7);
  }
  brush.fill("#2c1a12", 190);
  for (let i = 0; i < 10; i++) brush.circle(400 + i * 13, 335 + (i % 4) * 8, 3, 0.4);
  // fallen petals
  brush.fill("#d04a3c", 170);
  for (let i = 0; i < 14; i++) brush.circle(380 + (i * 37) % 160, 465 + (i * 11) % 40, 4, 0.6);
  // faint distant orchard row
  brush.fill("#e07858", 120);
  for (let i = 0; i < 6; i++) brush.circle(40 + i * 48, 424 + (i % 2) * 5, 15, 0.7);
  brush.fill("#2c1a12", 160);
  for (let i = 0; i < 6; i++) { brush.beginShape(0.2); brush.vertex(36 + i * 48, 440); brush.vertex(52 + i * 48, 440); brush.vertex(48 + i * 48, 426); brush.vertex(40 + i * 48, 426); brush.endShape(true); }
}
