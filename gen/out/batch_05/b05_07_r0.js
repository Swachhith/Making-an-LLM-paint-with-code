async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7ecd9");
  brush.noStroke();
  // golden evening wash in the upper sky
  brush.fill("#f0cf8e", 160);
  brush.fillBleed(0.5);
  brush.fillTexture(0.5, 0.3);
  brush.beginShape(0.9);
  brush.vertex(10, 20); brush.vertex(590, 15); brush.vertex(585, 300); brush.vertex(15, 330);
  brush.endShape(true);
  // water band
  brush.fill("#b9b28a", 165);
  brush.fillBleed(0.4);
  brush.fillTexture(0.6, 0.3);
  brush.beginShape(0.8);
  brush.vertex(0, 430); brush.vertex(600, 415); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // lily pad, elliptical, seen edge-on
  brush.fill("#6f8a4c", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(350, 455); brush.vertex(440, 440); brush.vertex(560, 450); brush.vertex(565, 475);
  brush.vertex(460, 490); brush.vertex(360, 482);
  brush.endShape(true);
  // stem rising from water
  brush.fill("#7f8f4a", 210);
  brush.fillBleed(0.05);
  brush.beginShape(0.5);
  brush.vertex(284, 440); brush.vertex(296, 440); brush.vertex(300, 370); brush.vertex(288, 370);
  brush.endShape(true);
  // side view: back petals first, pointed, pale with warm shading
  let cx = 290, base = 370;
  let back = [[-40, 185], [-15, 205], [15, 205], [40, 185]];
  for (let b of back) {
    let tipx = cx + b[1] * sin(b[0]);
    let tipy = base - b[1] * cos(b[0]);
    brush.fill("#efd2c0", 185);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.75);
    brush.vertex(cx - 18, base);
    brush.vertex((cx + tipx) / 2 - 38, (base + tipy) / 2);
    brush.vertex(tipx, tipy);
    brush.vertex((cx + tipx) / 2 + 38, (base + tipy) / 2);
    brush.vertex(cx + 18, base);
    brush.endShape(true);
    brush.fill("#e6a79a", 190);
    brush.fillBleed(0.15);
    brush.beginShape(0.7);
    brush.vertex(tipx, tipy);
    brush.vertex(tipx - 14, tipy + 35);
    brush.vertex(tipx + 14, tipy + 35);
    brush.endShape(true);
  }
  // front petals: whitest, flaring outward, with ochre shadow at the base
  let front = [[-70, 150], [-28, 175], [28, 175], [70, 150], [0, 160]];
  for (let f of front) {
    let tipx = cx + f[1] * sin(f[0]);
    let tipy = base - f[1] * cos(f[0]) * 0.8;
    brush.fill("#fffaf1", 235);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx - 25, base + 5);
    brush.vertex((cx + tipx) / 2 - 45, (base + tipy) / 2 + 10);
    brush.vertex(tipx, tipy);
    brush.vertex((cx + tipx) / 2 + 45, (base + tipy) / 2 + 10);
    brush.vertex(cx + 25, base + 5);
    brush.endShape(true);
    brush.fill("#e0b683", 165);
    brush.fillBleed(0.25);
    brush.beginShape(0.8);
    brush.vertex(cx - 25, base + 5);
    brush.vertex(cx, base - 45);
    brush.vertex(cx + 25, base + 5);
    brush.endShape(true);
    brush.fill("#eaa295", 180);
    brush.fillBleed(0.12);
    brush.circle(tipx, tipy + 8, 8, true);
  }
  // reflection
  brush.fill("#f3e4cf", 150);
  brush.fillBleed(0.35);
  brush.beginShape(0.9);
  brush.vertex(230, 450); brush.vertex(350, 450); brush.vertex(320, 540); brush.vertex(260, 540);
  brush.endShape(true);
}
