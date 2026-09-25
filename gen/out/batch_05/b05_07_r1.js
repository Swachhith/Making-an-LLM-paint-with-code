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
  // golden evening wash, deeper at the top so the pale lotus stands in front of it
  brush.fill("#eab86a", 190);
  brush.fillBleed(0.5);
  brush.fillTexture(0.5, 0.3);
  brush.beginShape(0.9);
  brush.vertex(10, 10); brush.vertex(590, 10); brush.vertex(585, 250); brush.vertex(15, 270);
  brush.endShape(true);
  brush.fill("#f2d49a", 170);
  brush.fillBleed(0.4);
  brush.beginShape(0.9);
  brush.vertex(10, 200); brush.vertex(590, 190); brush.vertex(590, 420); brush.vertex(10, 430);
  brush.endShape(true);
  // water band
  brush.fill("#9f9a6e", 190);
  brush.fillBleed(0.4);
  brush.fillTexture(0.6, 0.3);
  brush.beginShape(0.8);
  brush.vertex(0, 430); brush.vertex(600, 415); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // lily pads
  brush.fill("#5c7a3c", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(360, 460); brush.vertex(450, 442); brush.vertex(570, 452); brush.vertex(575, 480);
  brush.vertex(470, 495); brush.vertex(370, 488);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(30, 500); brush.vertex(120, 488); brush.vertex(200, 500); brush.vertex(120, 520);
  brush.endShape(true);
  // stem rising from water
  brush.fill("#6f7f3a", 220);
  brush.fillBleed(0.05);
  brush.beginShape(0.5);
  brush.vertex(284, 445); brush.vertex(296, 445); brush.vertex(300, 375); brush.vertex(288, 375);
  brush.endShape(true);
  let cx = 290, base = 375;
  // back petals: pink-tipped, shaded warm rose
  let back = [[-42, 200], [-15, 225], [15, 225], [42, 200]];
  for (let b of back) {
    let tipx = cx + b[1] * sin(b[0]);
    let tipy = base - b[1] * cos(b[0]);
    brush.fill("#e9c1ad", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.75);
    brush.vertex(cx - 18, base);
    brush.vertex((cx + tipx) / 2 - 42, (base + tipy) / 2);
    brush.vertex(tipx, tipy);
    brush.vertex((cx + tipx) / 2 + 42, (base + tipy) / 2);
    brush.vertex(cx + 18, base);
    brush.endShape(true);
    brush.fill("#d9837a", 210);
    brush.fillBleed(0.18);
    brush.beginShape(0.7);
    brush.vertex(tipx, tipy);
    brush.vertex(tipx - 18, tipy + 50);
    brush.vertex(tipx + 18, tipy + 50);
    brush.endShape(true);
  }
  // front petals: paper white centres, warm ochre shadow along one side and at the base
  let front = [[-72, 160], [-30, 190], [30, 190], [72, 160], [0, 175]];
  for (let f of front) {
    let tipx = cx + f[1] * sin(f[0]);
    let tipy = base - f[1] * cos(f[0]) * 0.8;
    let mx = (cx + tipx) / 2, my = (base + tipy) / 2 + 10;
    brush.fill("#e3b98d", 185);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx - 25, base + 5);
    brush.vertex(mx - 48, my);
    brush.vertex(tipx, tipy);
    brush.vertex(mx - 12, my);
    brush.vertex(cx, base);
    brush.endShape(true);
    brush.fill("#e39088", 205);
    brush.fillBleed(0.12);
    brush.circle(tipx, tipy + 10, 10, true);
  }
  brush.fill("#c9975c", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(cx - 45, base + 5); brush.vertex(cx, base - 30); brush.vertex(cx + 45, base + 5); brush.vertex(cx, base + 18);
  brush.endShape(true);
  // pale reflection broken on the water
  brush.fill("#e8d8b8", 170);
  brush.fillBleed(0.35);
  brush.beginShape(0.9);
  brush.vertex(235, 455); brush.vertex(345, 455); brush.vertex(315, 545); brush.vertex(265, 545);
  brush.endShape(true);
}
