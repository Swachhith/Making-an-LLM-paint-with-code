async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8eedd");
  brush.noStroke();
  // warm sienna-rose dusk behind the flower, deep enough that pale petals read against it
  brush.fill("#d98e5a", 200);
  brush.fillBleed(0.45);
  brush.fillTexture(0.55, 0.3);
  brush.beginShape(0.9);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 230); brush.vertex(0, 260);
  brush.endShape(true);
  brush.fill("#eab872", 185);
  brush.fillBleed(0.4);
  brush.beginShape(0.9);
  brush.vertex(0, 200); brush.vertex(600, 180); brush.vertex(600, 420); brush.vertex(0, 430);
  brush.endShape(true);
  // water band, olive-green
  brush.fill("#8a8a5a", 205);
  brush.fillBleed(0.4);
  brush.fillTexture(0.6, 0.3);
  brush.beginShape(0.8);
  brush.vertex(0, 430); brush.vertex(600, 415); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // pads
  brush.fill("#4f6e33", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(370, 462); brush.vertex(455, 445); brush.vertex(575, 455); brush.vertex(580, 482);
  brush.vertex(470, 497); brush.vertex(380, 490);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(20, 505); brush.vertex(120, 490); brush.vertex(210, 503); brush.vertex(120, 523);
  brush.endShape(true);
  brush.fill("#6f7f3a", 225);
  brush.fillBleed(0.05);
  brush.beginShape(0.5);
  brush.vertex(284, 450); brush.vertex(296, 450); brush.vertex(300, 385); brush.vertex(288, 385);
  brush.endShape(true);
  let cx = 290, base = 385;
  // back petals: blush pink with rose tips
  let back = [[-44, 215], [-16, 240], [16, 240], [44, 215]];
  for (let b of back) {
    let tipx = cx + b[1] * sin(b[0]);
    let tipy = base - b[1] * cos(b[0]);
    brush.fill("#f2d2c8", 215);
    brush.fillBleed(0.15);
    brush.fillTexture(0.35, 0.6);
    brush.beginShape(0.75);
    brush.vertex(cx - 18, base);
    brush.vertex((cx + tipx) / 2 - 44, (base + tipy) / 2);
    brush.vertex(tipx, tipy);
    brush.vertex((cx + tipx) / 2 + 44, (base + tipy) / 2);
    brush.vertex(cx + 18, base);
    brush.endShape(true);
    brush.fill("#d06a74", 215);
    brush.fillBleed(0.18);
    brush.beginShape(0.7);
    brush.vertex(tipx, tipy);
    brush.vertex(tipx - 20, tipy + 55);
    brush.vertex(tipx + 20, tipy + 55);
    brush.endShape(true);
  }
  // front petals: nearly white, drawn over the back, one grey-rose shaded side each
  let front = [[-74, 170], [-32, 200], [32, 200], [74, 170], [0, 185]];
  for (let f of front) {
    let tipx = cx + f[1] * sin(f[0]);
    let tipy = base - f[1] * cos(f[0]) * 0.8;
    let mx = (cx + tipx) / 2, my = (base + tipy) / 2 + 10;
    brush.fill("#fbeee6", 230);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.6);
    brush.beginShape(0.8);
    brush.vertex(cx - 25, base + 5);
    brush.vertex(mx - 48, my);
    brush.vertex(tipx, tipy);
    brush.vertex(mx + 48, my);
    brush.vertex(cx + 25, base + 5);
    brush.endShape(true);
    brush.fill("#d9aba0", 200);
    brush.fillBleed(0.18);
    brush.beginShape(0.8);
    brush.vertex(cx - 20, base + 5);
    brush.vertex(mx - 44, my);
    brush.vertex(tipx, tipy);
    brush.vertex(mx - 18, my);
    brush.endShape(true);
    brush.fill("#d45f6c", 215);
    brush.fillBleed(0.12);
    brush.circle(tipx, tipy + 12, 11, true);
  }
  brush.fill("#b98a4f", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(cx - 45, base + 5); brush.vertex(cx, base - 30); brush.vertex(cx + 45, base + 5); brush.vertex(cx, base + 18);
  brush.endShape(true);
  // broken reflection
  brush.fill("#e3cfb0", 190);
  brush.fillBleed(0.35);
  brush.beginShape(0.9);
  brush.vertex(235, 460); brush.vertex(345, 460); brush.vertex(315, 548); brush.vertex(265, 548);
  brush.endShape(true);
}
