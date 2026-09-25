async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#edf1f3");
  randomSeed(11);

  // cool blue-grey wash, bleeding, behind the head
  brush.noStroke();
  brush.fill("#b9cad6", 185);
  brush.fillBleed(0.4, "out");
  brush.fillTexture(0.6, 0.4);
  brush.beginShape(0.6);
  brush.vertex(230, 40);
  brush.vertex(570, 60);
  brush.vertex(590, 360);
  brush.vertex(400, 430);
  brush.vertex(210, 300);
  brush.endShape(true);

  // arching stem ending at the base of the nodding head
  let hx = 360, hy = 250;
  brush.fill("#4f7f64", 230);
  brush.fillBleed(0.04, "out");
  brush.fillTexture(0.3, 0.6);
  brush.beginShape(0.8);
  brush.vertex(120, 600);
  brush.vertex(170, 430);
  brush.vertex(250, 250);
  brush.vertex(330, 170);
  brush.vertex(hx, hy - 30);
  brush.vertex(hx - 6, hy - 22);
  brush.vertex(334, 184);
  brush.vertex(262, 258);
  brush.vertex(184, 432);
  brush.vertex(136, 600);
  brush.endShape(true);

  // narrow leaves along the stem
  let leaves = [[160, 470, -55], [192, 390, -125], [222, 320, -40], [176, 540, -135], [262, 240, -150]];
  for (let L of leaves) {
    let a = L[2], len = 105;
    brush.fill("#5e8d77", 215);
    brush.fillBleed(0.12, "out");
    brush.fillTexture(0.4, 0.6);
    brush.beginShape(0.9);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + cos(a - 9) * len * 0.5, L[1] + sin(a - 9) * len * 0.5);
    brush.vertex(L[0] + cos(a) * len, L[1] + sin(a) * len);
    brush.vertex(L[0] + cos(a + 9) * len * 0.5, L[1] + sin(a + 9) * len * 0.5);
    brush.endShape(true);
  }

  // six petals hang down from the ovary, then roll back upward (Turk's cap)
  let hang = [[-60, 1], [-25, 1], [5, 1], [35, -1], [70, -1], [15, 1]];
  for (let i = 0; i < hang.length; i++) {
    let spread = hang[i][0];
    let side = spread < 10 ? -1 : 1;
    // petal leaves the ovary going down, then curls up and outward
    let x0 = hx + spread * 0.3, y0 = hy;
    let x1 = hx + spread * 1.2, y1 = hy + 85;
    let x2 = hx + spread * 2.0 + side * 30, y2 = hy + 45;
    let x3 = hx + spread * 2.2 + side * 55, y3 = hy - 25;
    let w = 44;
    brush.fill("#f5a066", 200);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.55, 0.5);
    brush.beginShape(0.8);
    brush.vertex(x0 - w * 0.5, y0);
    brush.vertex(x1 - w, y1 + 10);
    brush.vertex(x2 - side * 5, y2 + w);
    brush.vertex(x3, y3);
    brush.vertex(x2 + side * 10, y2 - 10);
    brush.vertex(x1 + w * 0.4, y1 - 12);
    brush.vertex(x0 + w * 0.5, y0);
    brush.endShape(true);
    brush.fill("#e2672a", 225);
    brush.fillBleed(0.1, "out");
    brush.fillTexture(0.4, 0.7);
    brush.beginShape(0.8);
    brush.vertex(x0, y0 + 5);
    brush.vertex(x1 - w * 0.5, y1 + 4);
    brush.vertex(x2, y2 + w * 0.5);
    brush.vertex(x3 - side * 4, y3 + 12);
    brush.vertex(x2, y2);
    brush.vertex(x1, y1 - 6);
    brush.endShape(true);
    // cool violet shadow in the fold
    brush.fill("#8a6f90", 170);
    brush.fillBleed(0.15, "out");
    brush.circle(x1, y1 - 2, 9, true);
    // spots on the inner curve
    for (let k = 0; k < 7; k++) {
      let t = random();
      let px = lerp(x0, x2, t) + random(-6, 6);
      let py = lerp(y0, y1, 1 - abs(t * 2 - 1)) + random(-4, 10);
      brush.fill("#3d1f2e", 225);
      brush.fillBleed(0.03, "out");
      brush.circle(px, py, random(2.5, 4.5), true);
    }
  }

  // green ovary at the top
  brush.fill("#5f8f5a", 225);
  brush.fillBleed(0.08, "out");
  brush.circle(hx, hy - 8, 14, true);

  // stamens hanging straight down beneath the cap
  for (let s = 0; s < 7; s++) {
    let ex = hx - 45 + s * 15 + random(-5, 5);
    let ey = hy + 175 + random(-20, 20);
    brush.fill("#7da38a", 215);
    brush.fillBleed(0.02, "out");
    brush.beginShape(0.5);
    brush.vertex(hx - 2, hy + 20);
    brush.vertex(ex, ey);
    brush.vertex(ex + 3, ey);
    brush.vertex(hx + 2, hy + 20);
    brush.endShape(true);
    brush.fill("#6b2a1c", 235);
    brush.fillBleed(0.06, "out");
    brush.beginShape(0.8);
    brush.vertex(ex - 7, ey + 2);
    brush.vertex(ex + 8, ey);
    brush.vertex(ex + 8, ey + 6);
    brush.vertex(ex - 7, ey + 7);
    brush.endShape(true);
  }
}
