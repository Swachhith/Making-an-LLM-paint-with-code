async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  randomSeed(2025);

  // sky: warm gradient, darker at the top
  brush.noStroke();
  brush.fill("#f7c86a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 280); brush.vertex(300, 320); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#e88a3c", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 260); brush.vertex(620, 260); brush.vertex(620, 420); brush.vertex(300, 450); brush.vertex(-20, 420);
  brush.endShape(true);
  brush.fill("#d03a2a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // sun low behind the palms
  brush.fill("#ffd03a", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(420, 400, 45, 0.3);

  // palm silhouettes: trunks as wide soft columns
  let palms = [
    { x: 80, h: 360, crown: { y: 150, r: 110, tail: 3 } },
    { x: 150, h: 300, crown: { y: 130, r: 85, tail: 3 } },
    { x: 240, h: 420, crown: { y: 170, r: 130, tail: 4 } },
    { x: 330, h: 280, crown: { y: 140, r: 90, tail: 3 } },
    { x: 420, h: 380, crown: { y: 155, r: 115, tail: 3 } },
    { x: 520, h: 330, crown: { y: 150, r: 100, tail: 3 } },
    { x: 590, h: 300, crown: { y: 140, r: 90, tail: 3 } }
  ];
  for (let p of palms) {
    let y0 = 620 - p.h;
    brush.fill("#14141a", 250);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.1);
    brush.vertex(p.x - 12, y0); brush.vertex(p.x + 12, y0); brush.vertex(p.x + 12, 620); brush.vertex(p.x - 12, 620);
    brush.endShape(true);
    // crown: big fan with three tails
    brush.fill("#14141a", 250);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.7);
    brush.vertex(p.x, y0 + 10);
    for (let t = -1; t <= 1; t += 1 / 3) {
      let a = t * 90;
      let L = p.crown.r * 0.95;
      brush.vertex(p.x + cos(a) * L, y0 + sin(a) * L);
    }
    for (let t = -1; t <= 1; t += 1 / 3) {
      let a = t * 90 + 180;
      let L = p.crown.r * 0.85;
      brush.vertex(p.x + cos(a) * L, y0 + sin(a) * L);
    }
    brush.endShape(true);
  }
  // ground line
  brush.fill("#14141a", 250);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(-20, 620); brush.vertex(620, 620); brush.vertex(620, 630); brush.vertex(-20, 630);
  brush.endShape(true);
}
