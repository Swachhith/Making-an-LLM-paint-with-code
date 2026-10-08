async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4e6");
  randomSeed(31337);
  brush.noStroke();

  // warm yellow-green ground
  brush.fill("#e8d88a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(600, 600); brush.vertex(600, 250); brush.vertex(450, 150); brush.vertex(200, 260); brush.vertex(50, 600);
  brush.endShape(true);

  // stem
  brush.fill("#7a8a3a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 330); brush.vertex(320, 330); brush.vertex(324, 600); brush.vertex(304, 600);
  brush.endShape(true);

  // two leaves, each two passes
  brush.fill("#6f8032", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(270, 470); brush.vertex(230, 440); brush.vertex(180, 470); brush.vertex(200, 500); brush.vertex(240, 470);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(340, 470); brush.vertex(380, 440); brush.vertex(430, 470); brush.vertex(410, 500); brush.vertex(370, 470);
  brush.endShape(true);
  // second pass, darker
  brush.fill("#5a6a2a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(280, 480); brush.vertex(240, 450); brush.vertex(190, 480); brush.vertex(210, 510); brush.vertex(250, 480);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(350, 480); brush.vertex(390, 450); brush.vertex(440, 480); brush.vertex(420, 510); brush.vertex(380, 480);
  brush.endShape(true);

  // anemone: ring of petals, each two passes, from outside in
  let cx = 300, cy = 220;
  for (let p = 0; p < 20; p++) {
    let a = p * 18 + random(-4, 4);
    let R = 150 + random(-6, 6);
    let len = 110 + random(-8, 8);
    let px = cx + cos(a) * R, py = cy + sin(a) * R;
    let px2 = cx + cos(a) * (R + 12), py2 = cy + sin(a) * (R + 12);
    let px3 = cx + cos(a) * (R + 28), py3 = cy + sin(a) * (R + 28);
    let px4 = cx + cos(a) * (R + 44), py4 = cy + sin(a) * (R + 44);
    let px5 = cx + cos(a) * (R + 60), py5 = cy + sin(a) * (R + 60);
    brush.fill("#6a8fe0", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(cx, cy); brush.vertex(px2, py2); brush.vertex(px3, py3); brush.vertex(px4, py4); brush.vertex(px5, py5);
    brush.vertex(cx + cos(a - 9) * 14, cy + sin(a - 9) * 14); brush.vertex(px + cos(a - 18) * 12, py + sin(a - 18) * 12); brush.vertex(px + cos(a - 27) * 10, py + sin(a - 27) * 10);
    brush.endShape(true);
    brush.fill("#3a5ac8", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(cx, cy); brush.vertex(px2, py2); brush.vertex(px3, py3); brush.vertex(px4, py4); brush.vertex(px5, py5);
    brush.vertex(cx + cos(a - 9) * 14, cy + sin(a - 9) * 14); brush.vertex(px + cos(a - 18) * 12, py + sin(a - 18) * 12); brush.vertex(px + cos(a - 27) * 10, py + sin(a - 27) * 10);
    brush.endShape(true);
  }

  // centre
  brush.fill("#c98a2a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 32, 0.4);
  brush.fill("#d45a1a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 18, 0.4);
  brush.fill("#f4a02a", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 9, 0.4);
}
