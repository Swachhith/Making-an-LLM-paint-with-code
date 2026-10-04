async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff2dc");
  randomSeed(1121);
  brush.noStroke();

  // orange-gold under-wash, wet and uneven
  const hot = ["#ff8a24", "#f25a14", "#ffb23a", "#e8401a"];
  for (let i = 0; i < 6; i++) {
    const y = 180 + i * 50;
    brush.fill(hot[i % 4], 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.55);
    brush.beginShape(1);
    brush.vertex(-40, y); brush.vertex(200, y - random(20, 50)); brush.vertex(640, y + random(-20, 20));
    brush.vertex(640, y + 90); brush.vertex(300, y + random(60, 110)); brush.vertex(-40, y + 80);
    brush.endShape(true);
  }
  brush.fill("#ffe07a", 210);
  brush.circle(410, 380, 42, 0.6);

  // heavy storm cloud masses: ragged polygons, layered three times
  const masses = [[-40, 0, 680, 170], [60, 140, 420, 250], [380, 120, 660, 230]];
  const storm = ["#3a2c48", "#241e34", "#4a2e3c"];
  for (let pass = 0; pass < 3; pass++) {
    for (const m of masses) {
      brush.fill(storm[pass], 200 - pass * 15);
      brush.fillBleed(0.3);
      brush.fillTexture(0.6, 0.6);
      brush.beginShape(1);
      const n = 9;
      for (let k = 0; k <= n; k++) brush.vertex(m[0] + (m[2] - m[0]) * k / n, m[1] + random(-20, 20) - pass * 10);
      for (let k = n; k >= 0; k--) brush.vertex(m[0] + (m[2] - m[0]) * k / n, m[3] + random(-30, 30) - pass * 15);
      brush.endShape(true);
    }
  }
  // orange light on cloud bellies
  brush.fill("#d9501e", 190);
  for (let i = 0; i < 6; i++) {
    const x = random(40, 560), y = random(215, 260);
    brush.beginShape(0.8);
    brush.vertex(x - 80, y); brush.vertex(x, y - 14); brush.vertex(x + 90, y + 4); brush.vertex(x, y + 14);
    brush.endShape(true);
  }
  // rain curtains / drips
  for (let i = 0; i < 10; i++) {
    const x = random(20, 580), y = random(200, 250), len = random(50, 120);
    brush.fill("#3a2c48", 170);
    brush.beginShape(0.5);
    brush.vertex(x - 9, y); brush.vertex(x + 9, y); brush.vertex(x + 2, y + len); brush.vertex(x - 4, y + len);
    brush.endShape(true);
  }

  // silhouettes, three passes each so they go truly dark
  for (let pass = 0; pass < 3; pass++) {
    brush.fill("#120a12", 240);
    brush.fillBleed(0.15);
    brush.fillTexture(0.35, 0.35);
    brush.beginShape(0.7);
    brush.vertex(-20, 470); brush.vertex(140, 445); brush.vertex(330, 468); brush.vertex(500, 448);
    brush.vertex(620, 462); brush.vertex(620, 620); brush.vertex(-20, 620);
    brush.endShape(true);
    brush.beginShape(0.4);
    brush.vertex(158, 455); brush.vertex(180, 455); brush.vertex(184, 350); brush.vertex(162, 350);
    brush.endShape(true);
    brush.beginShape(0.9);
    brush.vertex(90, 360); brush.vertex(110, 300); brush.vertex(170, 270); brush.vertex(235, 295);
    brush.vertex(260, 350); brush.vertex(210, 375); brush.vertex(130, 378);
    brush.endShape(true);
    for (let k = 0; k < 5; k++) {
      const x = 430 + k * 34, h = [90, 120, 80, 110, 95][k];
      brush.beginShape(0.6);
      brush.vertex(x - 10, 458); brush.vertex(x, 458 - h); brush.vertex(x + 10, 458);
      brush.endShape(true);
    }
  }
  // splatters
  for (let i = 0; i < 30; i++) {
    brush.fill(random(["#120a12", "#ff8a24", "#3a2c48"]), random(180, 235));
    brush.fillBleed(0.1);
    brush.circle(random(600), random(600), random(2, 6), 0.4);
  }
}
