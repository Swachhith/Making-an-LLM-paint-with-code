async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f6");
  randomSeed(3101);
  brush.noStroke();

  // cool light: a soft blue-grey wash behind the bloom
  brush.fill("#a8b8d2", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stem and leaf, lower left
  brush.fill("#5f7a8a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(220, 400); brush.vertex(240, 400); brush.vertex(250, 530); brush.vertex(200, 560); brush.vertex(150, 470);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(230, 430); brush.vertex(250, 430); brush.vertex(270, 470); brush.vertex(230, 500);
  brush.endShape(true);

  // dahlia: rings of petals, each two passes, darker and more opaque inside
  let rings = [[340, 340, 190, 10], [340, 340, 145, 10], [340, 340, 105, 10], [340, 340, 65, 10], [340, 340, 32, 10]];
  for (let k = 0; k < rings.length; k++) {
    let [cx, cy, R, n] = rings[k];
    for (let pass = 0; pass < 2; pass++) {
      let off = pass ? 6 : 0;
      let op = 210 - k * 12;
      let bleed = 0.25;
      let tex = 0.45;
      for (let i = 0; i < n; i++) {
        let a = i * 360 / n + off + random(-6, 6);
        let r = R * random(0.92, 1.04);
        let px = cx + cos(a) * r;
        let py = cy + sin(a) * r;
        let w = R * 0.14 * random(0.85, 1.1);
        brush.fill("#8a1e3a", op);
        brush.fillBleed(bleed);
        brush.fillTexture(tex, tex);
        brush.beginShape(0.8);
        brush.vertex(cx, cy);
        brush.vertex(px + cos(a - 30) * w, py + sin(a - 30) * w);
        brush.vertex(px + cos(a) * R * 0.9, py + sin(a) * R * 0.9);
        brush.vertex(px + cos(a + 30) * w, py + sin(a + 30) * w);
        brush.endShape(true);
      }
    }
  }
  // shadow side of the bloom
  brush.fill("#4a1228", 170);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(340, 340); brush.vertex(300, 340); brush.vertex(280, 380); brush.vertex(320, 420); brush.vertex(340, 420); brush.vertex(360, 380);
  brush.endShape(true);
  // yellow centre
  brush.fill("#e8c83a", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(340, 340, 30, 0.3);
  // cool highlight on upper petals
  brush.fill("#cfe6f2", 160);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(340, 260, 38, 0.5);
}
