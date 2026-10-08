async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f6f8");
  randomSeed(1111);
  brush.noStroke();
  // cool sky-blue ground wash, uneven
  brush.fill("#bfe3f0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // stems and leaves in cool teal, behind the bloom
  brush.fill("#4a8a8a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(220, 380); brush.vertex(250, 380); brush.vertex(240, 620); brush.vertex(210, 620);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(380, 370); brush.vertex(410, 370); brush.vertex(400, 620); brush.vertex(370, 620);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(230, 470); brush.vertex(330, 440); brush.vertex(350, 540); brush.vertex(250, 560);
  brush.endShape(true);
  // dahlia: many overlapping petals, each two passes
  for (let pass = 0; pass < 3; pass++) {
    for (let i = 0; i < 22; i++) {
      const a = i * 180 / 11 + random(-4, 4);
      const r = 180 * ((i * 3 + pass) / 22);
      const w = 10 + random(6, 14);
      brush.fill(pass == 0 ? "#7a1f4a" : "#5a1238", pass == 0 ? 210 : 230);
      brush.fillBleed(pass == 0 ? 0.28 : 0.18);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.7);
      brush.vertex(300, 300);
      brush.vertex(300 + cos(a - w * 0.6) * r * 0.55, 300 + sin(a - w * 0.6) * r * 0.55);
      brush.vertex(300 + cos(a) * r, 300 + sin(a) * r);
      brush.vertex(300 + cos(a + w * 0.6) * r * 0.55, 300 + sin(a + w * 0.6) * r * 0.55);
      brush.endShape(true);
    }
  }
  // deeper ring of petals
  for (let i = 0; i < 18; i++) {
    const a = i * 20 + random(-2, 2);
    const r = 140 + random(-12, 12);
    brush.fill("#3a0c24", 235);
    brush.fillBleed(0.18);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.7);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a) * r * 0.7, 300 + sin(a) * r * 0.7);
    brush.vertex(300 + cos(a + 4) * r, 300 + sin(a + 4) * r);
    brush.vertex(300 + cos(a - 4) * r * 0.7, 300 + sin(a - 4) * r * 0.7);
    brush.endShape(true);
  }
  // shadowed underside of petals
  for (let i = 0; i < 12; i++) {
    const a = i * 30 + random(-6, 6);
    const r = 120 + random(-10, 10);
    brush.fill("#2a0818", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 10) * r * 0.7, 300 + sin(a - 10) * r * 0.7);
    brush.vertex(300 + cos(a) * r * 0.85, 300 + sin(a) * r * 0.85);
    brush.vertex(300 + cos(a + 10) * r * 0.7, 300 + sin(a + 10) * r * 0.7);
    brush.endShape(true);
  }
  // cool green heart in the centre
  brush.fill("#5aa87a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(300, 270); brush.vertex(335, 250); brush.vertex(365, 260); brush.vertex(350, 290); brush.vertex(320, 285);
  brush.endShape(true);
  // two cool light dots
  brush.fill("#cfe8f0", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(316, 286, 4, 0.3);
  brush.circle(334, 280, 4, 0.3);
}
