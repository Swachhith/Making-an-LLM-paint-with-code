async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff4e2");
  randomSeed(1111);
  brush.noStroke();

  // hot orange blooms across the lower sky
  const hot = ["#ff7b1c", "#f25a14", "#ffa53a", "#e8401a"];
  for (let i = 0; i < 12; i++) {
    brush.fill(random(hot), random(170, 215));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.55);
    brush.circle(random(-20, 620), random(220, 440), random(60, 120), 0.9);
  }
  // a bright wet-in-wet gap near the sun
  brush.fill("#ffd65a", 200);
  brush.circle(420, 360, 50, 0.7);

  // dark storm clouds bleeding down from the top
  const storm = ["#2b2540", "#3d2c4a", "#1e2233", "#4a3040"];
  for (let i = 0; i < 16; i++) {
    const x = random(-40, 640), y = random(-40, 220);
    brush.fill(random(storm), random(180, 230));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(x, y, random(60, 120), 0.9);
  }
  // cloud underbellies catching orange
  brush.fill("#c9461e", 170);
  for (let i = 0; i < 5; i++) {
    const x = random(0, 600), y = random(200, 260);
    brush.beginShape(0.8);
    brush.vertex(x - 90, y); brush.vertex(x, y - 20); brush.vertex(x + 100, y + 5); brush.vertex(x, y + 18);
    brush.endShape(true);
  }
  // rain drips from the storm
  for (let i = 0; i < 8; i++) {
    const x = random(20, 580), y = random(180, 240), len = random(40, 90);
    brush.fill("#2b2540", 160);
    brush.beginShape(0.5);
    brush.vertex(x - 8, y); brush.vertex(x + 8, y); brush.vertex(x + 3, y + len); brush.vertex(x - 3, y + len);
    brush.endShape(true);
  }

  // silhouettes: rolling land, a big tree, a windbreak
  brush.fill("#140c14", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.35, 0.35);
  brush.beginShape(0.7);
  brush.vertex(-20, 470); brush.vertex(140, 440); brush.vertex(330, 465); brush.vertex(500, 445);
  brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // tree trunk
  brush.beginShape(0.4);
  brush.vertex(160, 450); brush.vertex(178, 450); brush.vertex(182, 360); brush.vertex(164, 360);
  brush.endShape(true);
  for (let i = 0; i < 9; i++) {
    brush.fill("#140c14", random(200, 240));
    brush.circle(170 + random(-60, 60), 330 + random(-40, 30), random(22, 40), 0.6);
  }
  // row of poplars on the right
  for (let k = 0; k < 5; k++) {
    const x = 430 + k * 34, h = random(70, 110);
    brush.fill("#1a1018", 230);
    brush.beginShape(0.6);
    brush.vertex(x - 9, 455); brush.vertex(x, 455 - h); brush.vertex(x + 9, 455);
    brush.endShape(true);
  }
  // splatters
  for (let i = 0; i < 25; i++) {
    brush.fill(random(["#140c14", "#ff7b1c"]), random(180, 230));
    brush.fillBleed(0.1);
    brush.circle(random(600), random(600), random(2, 5), 0.4);
  }
}
