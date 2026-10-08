async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf7ec");
  randomSeed(2101);
  brush.noStroke();
  // soft pink wash behind the bloom, fading to paper
  brush.fill("#f7c8d4", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a few pale dots of shadow
  brush.fill("#e8a8c2", 170);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(250, 250, 100, 0.6);
  brush.circle(360, 150, 70, 0.6);
  brush.circle(120, 360, 60, 0.6);
  // the camellia: five broad overlapping petals, loose and cupped
  for (let p = 0; p < 5; p++) {
    const a = p * 72 + random(-6, 6);
    brush.fill("#f28fa3", 215);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 28) * 120, 300 + sin(a - 28) * 120);
    brush.vertex(300 + cos(a - 18) * 175, 300 + sin(a - 18) * 175);
    brush.vertex(300 + cos(a + 18) * 175, 300 + sin(a + 18) * 175);
    brush.vertex(300 + cos(a + 28) * 120, 300 + sin(a + 28) * 120);
    brush.endShape(true);
    // a darker inner pass, slightly smaller
    brush.fill("#e06a8c", 230);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 24) * 85, 300 + sin(a - 24) * 85);
    brush.vertex(300 + cos(a - 10) * 130, 300 + sin(a - 10) * 130);
    brush.vertex(300 + cos(a + 10) * 130, 300 + sin(a + 10) * 130);
    brush.vertex(300 + cos(a + 24) * 85, 300 + sin(a + 24) * 85);
    brush.endShape(true);
  }
  // a second, more opaque pass on the upper right petal
  brush.fill("#d85a78", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(300, 300); brush.vertex(340, 210); brush.vertex(420, 230); brush.vertex(370, 300);
  brush.endShape(true);
  // the cupped throat: pale, with a ring of dots
  brush.fill("#f9d0c0", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(300, 300); brush.vertex(320, 260); brush.vertex(340, 290); brush.vertex(320, 320);
  brush.endShape(true);
  for (let i = 0; i < 12; i++) {
    const a = random(360);
    const r = random(100, 140);
    brush.fill("#b82a3c", 200);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.circle(300 + cos(a) * r, 300 + sin(a) * r, 3, 0.3);
  }
  // a tiny green centre
  brush.fill("#4a8a5a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(300, 300, 18, 0.5);
  // stem
  brush.fill("#5a8a4a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(300, 320); brush.vertex(302, 620); brush.vertex(308, 620); brush.vertex(306, 320);
  brush.endShape(true);
}
