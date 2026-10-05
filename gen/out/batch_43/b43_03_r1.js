async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#dfece9");
  brush.noStroke();
  // deep teal ground, layered
  brush.fill("#07454c", 230); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#127c80", 160); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(40, 120); brush.vertex(300, 20); brush.vertex(580, 130); brush.vertex(560, 500); brush.vertex(300, 590); brush.vertex(30, 470);
  brush.endShape(true);
  const cx = 300, cy = 310;
  // back ring: broad bracts in dark crimson
  for (let i = 0; i < 12; i++) {
    const a = i * 30 + 8;
    const px = -sin(a), py = cos(a);
    brush.fill("#7a0c24", 215); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a) * 60 + px * 42, cy + sin(a) * 60 + py * 42);
    brush.vertex(cx + cos(a) * 200 + px * 30, cy + sin(a) * 200 + py * 30);
    brush.vertex(cx + cos(a) * 262, cy + sin(a) * 262);
    brush.vertex(cx + cos(a) * 200 - px * 30, cy + sin(a) * 200 - py * 30);
    brush.vertex(cx + cos(a) * 60 - px * 42, cy + sin(a) * 60 - py * 42);
    brush.endShape(true);
  }
  // front ring: brighter crimson, pointed, with orange tips
  for (let i = 0; i < 12; i++) {
    const a = i * 30 + 23;
    const px = -sin(a), py = cos(a);
    brush.fill("#d01a3c", 215); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.7);
    brush.vertex(cx + cos(a) * 55 + px * 34, cy + sin(a) * 55 + py * 34);
    brush.vertex(cx + cos(a) * 170 + px * 20, cy + sin(a) * 170 + py * 20);
    brush.vertex(cx + cos(a) * 222, cy + sin(a) * 222);
    brush.vertex(cx + cos(a) * 170 - px * 20, cy + sin(a) * 170 - py * 20);
    brush.vertex(cx + cos(a) * 55 - px * 34, cy + sin(a) * 55 - py * 34);
    brush.endShape(true);
    brush.fill("#f08a20", 190); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(cx + cos(a) * 190 + px * 9, cy + sin(a) * 190 + py * 9);
    brush.vertex(cx + cos(a) * 224, cy + sin(a) * 224);
    brush.vertex(cx + cos(a) * 190 - px * 9, cy + sin(a) * 190 - py * 9);
    brush.endShape(true);
  }
  // inner collar and cushion of pale styles
  brush.fill("#e04a30", 220); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 120, 0.3);
  brush.fill("#f0b040", 220); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 78, 0.35);
  for (let k = 0; k < 14; k++) {
    brush.fill("#fff0d0", 180); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
    brush.circle(cx + cos(k * 26) * 28, cy + sin(k * 26) * 28, 7, 0.4);
  }
  brush.fill("#8a2010", 200); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.circle(cx + 4, cy + 6, 18, 0.5);
}
