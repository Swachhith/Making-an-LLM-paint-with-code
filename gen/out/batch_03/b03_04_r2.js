async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcfbf8");
  brush.noStroke();

  // dark branch, diagonal
  brush.fill("#5a4038", 225);
  brush.fillBleed(0.12);
  brush.fillTexture(0.75, 0.4);
  brush.beginShape(0.35);
  brush.vertex(0, 585); brush.vertex(170, 470); brush.vertex(300, 360); brush.vertex(470, 190); brush.vertex(560, 120);
  brush.vertex(566, 130); brush.vertex(478, 202); brush.vertex(310, 374); brush.vertex(180, 484); brush.vertex(0, 600);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(300, 366); brush.vertex(250, 300); brush.vertex(232, 250); brush.vertex(240, 248); brush.vertex(260, 296); brush.vertex(310, 360);
  brush.endShape(true);

  brush.fill("#3e2a24", 230);
  brush.fillBleed(0.05);
  brush.beginShape(0.35);
  brush.vertex(40, 560); brush.vertex(175, 474); brush.vertex(305, 365); brush.vertex(470, 196);
  brush.vertex(474, 200); brush.vertex(309, 370); brush.vertex(179, 480); brush.vertex(44, 566);
  brush.endShape(true);
  // bloom A: upright goblet, standing on the side twig
  let bx = 235, by = 255;
  let upr = [[-42, 175, "#f3cbd6"], [-14, 205, "#efbccb"], [14, 200, "#f3cbd6"], [42, 165, "#eeb6c6"]];
  for (let p of upr) {
    let a = p[0] - 90, len = p[1];
    brush.fill(p[2], 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.8);
    brush.vertex(bx + cos(a - 70) * 22, by + sin(a - 70) * 22);
    brush.vertex(bx + cos(a - 14) * len * 0.7, by + sin(a - 14) * len * 0.7);
    brush.vertex(bx + cos(a) * len, by + sin(a) * len);
    brush.vertex(bx + cos(a + 14) * len * 0.7, by + sin(a + 14) * len * 0.7);
    brush.vertex(bx + cos(a + 70) * 22, by + sin(a + 70) * 22);
    brush.endShape(true);
    brush.fill("#c9577a", 215);
    brush.fillBleed(0.35);
    brush.beginShape(0.8);
    brush.vertex(bx + cos(a - 50) * 18, by + sin(a - 50) * 18);
    brush.vertex(bx + cos(a - 8) * len * 0.3, by + sin(a - 8) * len * 0.3);
    brush.vertex(bx + cos(a) * len * 0.45, by + sin(a) * len * 0.45);
    brush.vertex(bx + cos(a + 8) * len * 0.3, by + sin(a + 8) * len * 0.3);
    brush.vertex(bx + cos(a + 50) * 18, by + sin(a + 50) * 18);
    brush.endShape(true);
  }
  brush.fill("#5a4038", 220);
  brush.circle(bx, by + 4, 9, true);

  // bloom B: wide open, tilted face, on the main branch
  let ox = 440, oy = 250;
  for (let k = 0; k < 8; k++) {
    let a = k * 45 + 12;
    let len = 115 + (k % 2) * 30;
    brush.fill("#f7d7e0", 195);
    brush.fillBleed(0.3);
    brush.fillTexture(0.35, 0.5);
    brush.beginShape(0.85);
    brush.vertex(ox, oy);
    brush.vertex(ox + cos(a - 22) * len * 0.8, oy + sin(a - 22) * len * 0.58);
    brush.vertex(ox + cos(a) * len, oy + sin(a) * len * 0.66);
    brush.vertex(ox + cos(a + 22) * len * 0.8, oy + sin(a + 22) * len * 0.58);
    brush.endShape(true);
    brush.fill("#d86e8e", 205);
    brush.fillBleed(0.3);
    brush.beginShape(0.8);
    brush.vertex(ox, oy);
    brush.vertex(ox + cos(a - 10) * len * 0.45, oy + sin(a - 10) * len * 0.3);
    brush.vertex(ox + cos(a) * len * 0.55, oy + sin(a) * len * 0.36);
    brush.vertex(ox + cos(a + 10) * len * 0.45, oy + sin(a + 10) * len * 0.3);
    brush.endShape(true);
  }
  brush.fill("#9a8a3a", 225);
  brush.fillBleed(0.1);
  brush.circle(ox, oy, 15, true);
  brush.fill("#e0c860", 215);
  brush.circle(ox - 3, oy - 3, 7, true);

  // a closed bud low on the branch
  brush.fill("#e9a7ba", 205);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(120, 520); brush.vertex(96, 470); brush.vertex(108, 430); brush.vertex(128, 472); brush.vertex(132, 515);
  brush.endShape(true);
}
