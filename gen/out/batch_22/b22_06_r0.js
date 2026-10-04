async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcfbf7");
  brush.noStroke();
  const cx = 215, cy = 375;
  // a trailing stem from the top right, arriving at the bloom
  brush.fill("#4f7d2e", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(560, 40); brush.vertex(470, 140); brush.vertex(360, 260); brush.vertex(250, 350);
  brush.vertex(262, 368); brush.vertex(375, 278); brush.vertex(488, 155); brush.vertex(578, 55);
  brush.endShape(true);
  // one leaf
  brush.fill("#5f9a33", 210);
  brush.beginShape(0.7);
  brush.vertex(420, 205); brush.vertex(470, 230); brush.vertex(520, 225); brush.vertex(480, 195);
  brush.endShape(true);
  brush.fill("#3e6a22", 180);
  brush.beginShape(0.7);
  brush.vertex(425, 208); brush.vertex(475, 222); brush.vertex(515, 224);
  brush.vertex(470, 212);
  brush.endShape(true);
  // six broad pointed petals: loose pass, then deeper pass inside
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 15;
    let L = 150;
    let W = 55;
    let tip = [cx + L * cos(a), cy + L * sin(a)];
    let l1 = [cx + W * cos(a - 35), cy + W * sin(a - 35)];
    let r1 = [cx + W * cos(a + 35), cy + W * sin(a + 35)];
    let l2 = [cx + L * 0.7 * cos(a - 14), cy + L * 0.7 * sin(a - 14)];
    let r2 = [cx + L * 0.7 * cos(a + 14), cy + L * 0.7 * sin(a + 14)];
    brush.fill("#7b2fbf", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.6);
    brush.vertex(cx, cy); brush.vertex(l1[0], l1[1]); brush.vertex(l2[0], l2[1]); brush.vertex(tip[0], tip[1]); brush.vertex(r2[0], r2[1]); brush.vertex(r1[0], r1[1]);
    brush.endShape(true);
    brush.fill("#5a14a8", 220);
    brush.fillBleed(0.22);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + L * 0.4 * cos(a - 16), cy + L * 0.4 * sin(a - 16));
    brush.vertex(cx + L * 0.9 * cos(a), cy + L * 0.9 * sin(a));
    brush.vertex(cx + L * 0.4 * cos(a + 16), cy + L * 0.4 * sin(a + 16));
    brush.endShape(true);
    // a darker central bar down each petal
    brush.fill("#3c0a7a", 190);
    brush.fillBleed(0.2);
    brush.beginShape(0.5);
    brush.vertex(cx, cy);
    brush.vertex(cx + L * 0.5 * cos(a - 5), cy + L * 0.5 * sin(a - 5));
    brush.vertex(cx + L * 0.8 * cos(a), cy + L * 0.8 * sin(a));
    brush.vertex(cx + L * 0.5 * cos(a + 5), cy + L * 0.5 * sin(a + 5));
    brush.endShape(true);
  }
  // centre: pale green heart ringed with cream stamens
  brush.fill("#c7d86a", 230);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 30, 0.4);
  for (let k = 0; k < 14; k++) {
    let a = k * 360 / 14;
    brush.fill("#f2e8a0", 230);
    brush.fillBleed(0.1);
    brush.circle(cx + 26 * cos(a), cy + 26 * sin(a), 5, 0.3);
  }
  brush.fill("#8aa43a", 220);
  brush.circle(cx, cy, 12, 0.3);
}
