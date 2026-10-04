async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f0de");
  randomSeed(2611);
  brush.noStroke();

  // warm lime wash, darker green at the base
  brush.fill("#d6d27a", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#7aa040", 180);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(150, 440); brush.vertex(460, 460); brush.vertex(620, 430);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stem and sword leaf, below the bloom only
  brush.fill("#2f6a24", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(290, 470); brush.vertex(312, 470); brush.vertex(316, 620); brush.vertex(284, 620);
  brush.endShape(true);
  brush.fill("#3f8030", 210);
  brush.beginShape(0.5);
  brush.vertex(150, 620); brush.vertex(190, 520); brush.vertex(250, 460); brush.vertex(215, 540); brush.vertex(185, 620);
  brush.endShape(true);

  // three standards, broad ruffled cups rising
  let st = [[300, 30, 0], [185, 90, -1], [415, 90, 1]];
  for (let pass = 0; pass < 2; pass++) {
    for (let s of st) {
      let [x, y, d] = s;
      let k = pass == 0 ? 1 : 0.6;
      brush.fill(pass == 0 ? "#8a4ae0" : "#5a22b0", pass == 0 ? 190 : 200);
      brush.fillBleed(0.3);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.8);
      brush.vertex(300 + d * 15, 250);
      brush.vertex(x - 85 * k + d * 30, y + 130);
      brush.vertex(x - 60 * k, y + 40);
      brush.vertex(x - 15, y + (pass ? 30 : 0));
      brush.vertex(x + 25, y + 15 + (pass ? 25 : 0));
      brush.vertex(x + 65 * k, y + 50);
      brush.vertex(x + 85 * k + d * 30, y + 130);
      brush.endShape(true);
    }
  }

  // three falls, wide and drooping, the front one largest
  let falls = [[95, 330, 0.9], [505, 330, 0.9], [300, 430, 1.1]];
  for (let f of falls) {
    let [fx, fy, s] = f;
    let mx = (300 + fx) / 2, my = (250 + fy) / 2;
    let nx = -(fy - 250), ny = fx - 300;
    let nl = sqrt(nx * nx + ny * ny); nx /= nl; ny /= nl;
    brush.fill("#7030d0", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.45);
    brush.beginShape(0.85);
    brush.vertex(300, 250);
    brush.vertex(mx + nx * 75 * s, my + ny * 75 * s);
    brush.vertex(fx + nx * 70 * s, fy + ny * 70 * s + 30);
    brush.vertex(fx + (fx - 300) * 0.15, fy + 80 * s);
    brush.vertex(fx - nx * 70 * s, fy - ny * 70 * s + 30);
    brush.vertex(mx - nx * 75 * s, my - ny * 75 * s);
    brush.endShape(true);
    brush.fill("#3c0f85", 210);
    brush.beginShape(0.8);
    brush.vertex(300, 260);
    brush.vertex(mx + nx * 35 * s, my + ny * 35 * s);
    brush.vertex(fx + nx * 35 * s, fy + ny * 35 * s + 30);
    brush.vertex(fx + (fx - 300) * 0.1, fy + 60 * s);
    brush.vertex(fx - nx * 35 * s, fy - ny * 35 * s + 30);
    brush.vertex(mx - nx * 35 * s, my - ny * 35 * s);
    brush.endShape(true);
    // white signal patch left pale, then golden beard
    brush.fill("#f0a014", 235);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(300 + nx * 10, 262 + ny * 10);
    brush.vertex(mx + nx * 12, my + ny * 12);
    brush.vertex(mx + (fx - mx) * 0.4, my + (fy - my) * 0.4);
    brush.vertex(mx - nx * 12, my - ny * 12);
    brush.vertex(300 - nx * 10, 262 - ny * 10);
    brush.endShape(true);
  }

  brush.fill("#2a0a55", 220);
  brush.circle(300, 255, 22, true);
}
