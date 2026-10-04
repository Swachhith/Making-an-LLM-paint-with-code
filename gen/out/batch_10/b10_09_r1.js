async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#110f30");
  brush.noStroke();
  // the huge sky is washed lighter than the sea, leaving a hole for the moon
  const mx = 400, my = 170;
  const skyCols = ["#3b3f9e", "#5b3aa6", "#3b3f9e"];
  for (let pass = 0; pass < 3; pass++) {
    brush.fill(skyCols[pass], 205 - pass * 15);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(-20, -20); brush.vertex(mx - 80, -20); brush.vertex(mx - 85, my + 40); brush.vertex(mx - 60, 470); brush.vertex(-20, 470);
    brush.endShape(true);
    brush.beginShape(0.5);
    brush.vertex(mx + 80, -20); brush.vertex(620, -20); brush.vertex(620, 470); brush.vertex(mx + 60, 470); brush.vertex(mx + 85, my + 40);
    brush.endShape(true);
    brush.beginShape(0.5);
    brush.vertex(mx - 70, my + 85); brush.vertex(mx + 70, my + 85); brush.vertex(mx + 70, 470); brush.vertex(mx - 70, 470);
    brush.endShape(true);
    brush.beginShape(0.5);
    brush.vertex(mx - 80, -20); brush.vertex(mx + 80, -20); brush.vertex(mx + 60, my - 90); brush.vertex(mx - 60, my - 90);
    brush.endShape(true);
  }
  // violet glow low in the sky and a few drifting cloud bands
  brush.fill("#7a4ab8", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 380); brush.vertex(300, 360); brush.vertex(620, 385); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#1c1a50", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(40, 300); brush.vertex(260, 285); brush.vertex(310, 300); brush.vertex(240, 318); brush.vertex(70, 320);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(470, 340); brush.vertex(600, 330); brush.vertex(620, 345); brush.vertex(580, 360); brush.vertex(480, 358);
  brush.endShape(true);
  // moon on the dark paper: pale, built in passes
  brush.fill("#fff4d2", 240);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  brush.circle(mx, my, 52, 0.12);
  brush.fill("#fff4d2", 230);
  brush.circle(mx, my, 49, 0.08);
  brush.fill("#d8cfe8", 150);
  brush.fillBleed(0.3);
  brush.circle(mx - 14, my - 10, 14, 0.6);
  brush.circle(mx + 12, my + 16, 9, 0.6);
  // stars on the washed sky
  const st = [[50, 60], [150, 36], [230, 100], [540, 60], [570, 240], [90, 250], [260, 200], [500, 290], [30, 160], [330, 50], [180, 150], [590, 130]];
  brush.fill("#fbf8ff", 245);
  brush.fillBleed(0.05);
  for (const s of st) brush.circle(s[0], s[1], 2.2, 0.2);
  // sea: the dark paper itself, with a few deeper strokes
  brush.fill("#070620", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(-20, 472); brush.vertex(620, 470); brush.vertex(620, 500); brush.vertex(-20, 505);
  brush.endShape(true);
  // moon path: pale broken dashes widening toward us
  for (let i = 0; i < 12; i++) {
    const y = 478 + i * 10;
    const w = 8 + i * 4;
    const x = mx + Math.sin(i * 2.1) * (3 + i * 1.5);
    brush.fill("#efe6ff", 225);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(x - w, y); brush.vertex(x + w, y + 1); brush.vertex(x + w - 3, y + 5); brush.vertex(x - w + 3, y + 5);
    brush.endShape(true);
  }
  // blue-violet swell across the sea
  for (let i = 0; i < 6; i++) {
    const y = 500 + i * 18;
    const x = (i % 2) ? 20 : 440;
    brush.fill("#4a4aa8", 190);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(x, y); brush.vertex(x + 170 - i * 8, y - 2); brush.vertex(x + 150 - i * 8, y + 7); brush.vertex(x + 10, y + 8);
    brush.endShape(true);
  }
}
