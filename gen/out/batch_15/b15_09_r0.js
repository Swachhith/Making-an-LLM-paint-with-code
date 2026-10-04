async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#15131a");
  brush.noStroke();

  // faint slate sky glow so pines read as silhouettes
  brush.fill("#3a3e52", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.circle(420, 160, 230, 0.5);
  brush.fill("#2c3040", 180);
  brush.beginShape(0.8);
  brush.vertex(0, 250);
  brush.vertex(600, 230);
  brush.vertex(600, 430);
  brush.vertex(0, 440);
  brush.endShape(true);

  // crescent moon painted as a light shape
  brush.fill("#f4e3b0", 240);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.9);
  let mx = 430, my = 140;
  for (let a = -120; a <= 120; a += 20) brush.vertex(mx + cos(a) * 46, my + sin(a) * 46);
  for (let a = 120; a >= -120; a -= 20) brush.vertex(mx + 16 + cos(a) * 34, my + sin(a) * 38);
  brush.endShape(true);
  brush.fill("#e8c880", 100);
  brush.fillBleed(0.3);
  brush.circle(mx, my, 70, 0.5);

  // pines: tall ragged silhouettes
  let trees = [[30, 280], [80, 200], [140, 250], [200, 330], [255, 290], [320, 360], [520, 300], [575, 240]];
  for (let t of trees) {
    let x = t[0], top = t[1];
    brush.fill("#050407", 245);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(x, top);
    let tiers = 6;
    let h = 520 - top;
    for (let i = 1; i <= tiers; i++) {
      brush.vertex(x + 8 + i * 6, top + (h * i) / tiers);
      brush.vertex(x + 4 + i * 2, top + (h * i) / tiers - 8);
    }
    for (let i = tiers; i >= 1; i--) {
      brush.vertex(x - 4 - i * 2, top + (h * i) / tiers - 8);
      brush.vertex(x - 8 - i * 6, top + (h * i) / tiers);
    }
    brush.endShape(true);
  }

  // ground
  brush.fill("#050407", 245);
  brush.fillBleed(0.15);
  brush.beginShape(0.4);
  brush.vertex(0, 500);
  brush.vertex(600, 490);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  // a few warm lights: a cabin window and lantern glows
  let lights = [[410, 510, 22], [440, 515, 16], [150, 540, 12]];
  for (let l of lights) {
    brush.fill("#e07a2a", 140);
    brush.fillBleed(0.3);
    brush.circle(l[0], l[1], l[2], 0.4);
    brush.fill("#ffc060", 240);
    brush.fillBleed(0.1);
    brush.circle(l[0], l[1], l[2] * 0.3, 0.1);
  }
}
