async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#2a5870");
  randomSeed(5);
  brush.noStroke();
  // indigo pressing down from the top, teal left open around the moon and horizon
  brush.fill("#1a2260", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 40); brush.vertex(300, 80); brush.vertex(150, 250); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#22306e", 190);
  brush.beginShape(0.9);
  brush.vertex(-20, -20); brush.vertex(250, -20); brush.vertex(120, 140); brush.vertex(-20, 180);
  brush.endShape(true);
  brush.fill("#4f9ea6", 160);
  brush.fillBleed(0.35);
  brush.beginShape(0.9);
  brush.vertex(-20, 470); brush.vertex(200, 380); brush.vertex(620, 360); brush.vertex(620, 520); brush.vertex(-20, 540);
  brush.endShape(true);
  // the crescent, large and to the upper right
  const mx = 420, my = 190;
  brush.fill("#fbf1cf", 250);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.6);
  for (let a = 50; a <= 310; a += 10) brush.vertex(mx + 120 * cos(a), my + 120 * sin(a));
  for (let a = 300; a >= 60; a -= 10) brush.vertex(mx + 55 + 100 * cos(a), my - 8 + 100 * sin(a));
  brush.endShape(true);
  brush.fill("#fffbea", 240);
  brush.beginShape(0.6);
  for (let a = 80; a <= 280; a += 10) brush.vertex(mx + 112 * cos(a), my + 112 * sin(a));
  for (let a = 270; a >= 90; a -= 10) brush.vertex(mx + 30 + 104 * cos(a), my - 4 + 104 * sin(a));
  brush.endShape(true);
  for (let i = 0; i < 45; i++) {
    brush.fill("#eaf7f4", random(180, 250));
    brush.fillBleed(0.05);
    brush.circle(random(10, 290), random(10, 300), random(1.2, 3), 0.2);
  }
  // back row of pines: mid teal-dark
  const back = [[20, 200], [70, 240], [130, 190], [250, 230], [310, 180], [370, 210], [480, 170], [545, 220], [600, 190]];
  for (const [px, ph] of back) {
    brush.fill("#163446", 230);
    brush.fillBleed(0.18);
    brush.fillTexture(0.35, 0.35);
    brush.beginShape(0.1);
    brush.vertex(px, 600 - ph);
    for (let k = 1; k <= 5; k++) { let y = 600 - ph + ph * 0.9 * k / 5; let w = 6 + k * ph / 28; brush.vertex(px + w, y); brush.vertex(px + w * 0.4, y - 5); }
    brush.vertex(px + 6, 620); brush.vertex(px - 6, 620);
    for (let k = 5; k >= 1; k--) { let y = 600 - ph + ph * 0.9 * k / 5; let w = 6 + k * ph / 28; brush.vertex(px - w * 0.4, y - 5); brush.vertex(px - w, y); }
    brush.endShape(true);
  }
  // front pines: near black, taller
  const front = [[45, 330], [175, 390], [225, 300], [430, 280], [510, 360]];
  for (const [px, ph] of front) {
    brush.fill("#050b12", 250);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.1);
    brush.vertex(px, 620 - ph);
    for (let k = 1; k <= 7; k++) { let y = 620 - ph + ph * 0.9 * k / 7; let w = 8 + k * ph / 34; brush.vertex(px + w, y); brush.vertex(px + w * 0.4, y - 7); }
    brush.vertex(px + 8, 620); brush.vertex(px - 8, 620);
    for (let k = 7; k >= 1; k--) { let y = 620 - ph + ph * 0.9 * k / 7; let w = 8 + k * ph / 34; brush.vertex(px - w * 0.4, y - 7); brush.vertex(px - w, y); }
    brush.endShape(true);
  }
  brush.fill("#050b12", 245);
  brush.beginShape(0.6);
  brush.vertex(-20, 575); brush.vertex(620, 565); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
