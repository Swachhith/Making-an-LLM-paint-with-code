async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f5f7");
  brush.noStroke();

  // pale sky, graded cool grey-blue
  brush.fill("#b8c8d8", 205);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 480); brush.vertex(-20, 500);
  brush.endShape(true);
  brush.fill("#a9bccf", 150);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(-20, 220);
  brush.endShape(true);

  // snowy ground left mostly paper, a blue shadow band
  brush.fill("#9fb4cc", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 540); brush.vertex(200, 520); brush.vertex(420, 545); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // recursive limbs as tapering quads, never thinner than ~15px
  const limb = (x, y, ang, len, w, depth) => {
    const a = ang * Math.PI / 180;
    const ex = x + Math.cos(a) * len, ey = y + Math.sin(a) * len;
    const w2 = Math.max(15, w * 0.62);
    const nx = -Math.sin(a), ny = Math.cos(a);
    brush.fill(depth < 2 ? "#342f3a" : "#4f4858", 235 - depth * 8);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.3);
    brush.vertex(x + nx * w / 2, y + ny * w / 2);
    brush.vertex(ex + nx * w2 / 2, ey + ny * w2 / 2);
    brush.vertex(ex - nx * w2 / 2, ey - ny * w2 / 2);
    brush.vertex(x - nx * w / 2, y - ny * w / 2);
    brush.endShape(true);
    if (depth >= 4) return;
    const spread = 24 + depth * 4;
    limb(ex, ey, ang - spread, len * 0.74, w2, depth + 1);
    limb(ex, ey, ang + spread * 0.9, len * 0.7, w2, depth + 1);
  };
  limb(300, 560, -90, 170, 60, 0);
  // second pass on trunk to darken the shadow side
  brush.fill("#221e28", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(305, 560); brush.vertex(328, 560); brush.vertex(318, 395); brush.vertex(303, 395);
  brush.endShape(true);

  // fine twig haze at crown edges as small soft dots
  let s = 3;
  for (let i = 0; i < 70; i++) {
    s = (s * 16807) % 2147483647;
    const a = (s / 2147483647) * 180 + 180;
    s = (s * 16807) % 2147483647;
    const r = 180 + (s / 2147483647) * 90;
    const x = 300 + Math.cos(a * Math.PI / 180) * r;
    const y = 280 + Math.sin(a * Math.PI / 180) * r * 0.8;
    brush.fill("#7a7486", 140);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, 5, true);
  }
  // root flare
  brush.fill("#3a3540", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(250, 570); brush.vertex(280, 530); brush.vertex(320, 530); brush.vertex(355, 572);
  brush.endShape(true);
}
