async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8eedb");
  randomSeed(1801);

  brush.noStroke();
  brush.fill("#f2c98a", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 260);
  brush.vertex(380, 330); brush.vertex(140, 300); brush.vertex(0, 360);
  brush.endShape(true);

  // stems
  brush.fill("#5f6a2a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.4);
  brush.vertex(228, 300); brush.vertex(248, 300); brush.vertex(262, 600); brush.vertex(238, 600);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(448, 300); brush.vertex(466, 302); brush.vertex(300, 600); brush.vertex(280, 600);
  brush.endShape(true);
  // leaves
  brush.fill("#57692e", 190);
  brush.beginShape(0.8);
  brush.vertex(248, 450); brush.vertex(330, 410); brush.vertex(380, 440); brush.vertex(300, 480);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(245, 510); brush.vertex(160, 480); brush.vertex(120, 520); brush.vertex(200, 540);
  brush.endShape(true);

  // open bloom: rings of bronze petals
  let cx = 250, cy = 240;
  let layers = [
    [190, 40, "#b8672a", 200],
    [165, 34, "#d0842e", 210],
    [125, 30, "#a8521f", 220],
    [85, 24, "#8a3d17", 230],
    [45, 18, "#6b2c10", 235]
  ];
  for (let L of layers) {
    let n = floor(L[0] / 6);
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + random(-6, 6);
      let r = L[0] * random(0.85, 1.05);
      let w = L[1] / 2;
      brush.fill(L[2], L[3] - random(0, 40));
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.9);
      brush.vertex(cx + cos(a + 90) * w * 0.4, cy + sin(a + 90) * w * 0.4);
      brush.vertex(cx + cos(a) * r * 0.6 + cos(a + 90) * w, cy + sin(a) * r * 0.6 + sin(a + 90) * w);
      brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
      brush.vertex(cx + cos(a) * r * 0.6 - cos(a + 90) * w, cy + sin(a) * r * 0.6 - sin(a + 90) * w);
      brush.vertex(cx - cos(a + 90) * w * 0.4, cy - sin(a + 90) * w * 0.4);
      brush.endShape(true);
    }
  }
  brush.fill("#6b2c10", 220);
  brush.circle(cx, cy, 20, 0.4);

  // closed bud
  brush.fill("#c98a3e", 190);
  brush.fillBleed(0.3);
  brush.circle(470, 300, 46, 0.3);
  brush.fill("#b8672a", 200);
  brush.circle(470, 300, 36, 0.3);
  brush.fill("#9a4d1c", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(440, 290); brush.vertex(470, 250); brush.vertex(500, 290); brush.vertex(484, 320); brush.vertex(456, 320);
  brush.endShape(true);
  brush.fill("#6f7a3a", 210);
  brush.beginShape(0.7);
  brush.vertex(430, 320); brush.vertex(466, 340); brush.vertex(505, 318); brush.vertex(470, 362);
  brush.endShape(true);
}
