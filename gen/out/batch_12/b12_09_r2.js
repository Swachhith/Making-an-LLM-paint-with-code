async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eae8e6");
  randomSeed(9909);
  brush.noStroke();
  const H = 290;
  // warm-grey mist all over, a touch of rose low in the sky
  brush.fill("#c4c0c4", 180);
  brush.fillBleed(0.35);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.6);
  brush.vertex(-30, -30); brush.vertex(630, -30); brush.vertex(630, 630); brush.vertex(-30, 630);
  brush.endShape(true);
  brush.fill("#d8c2c4", 150);
  brush.fillBleed(0.35);
  brush.beginShape(0.6);
  brush.vertex(-30, 150); brush.vertex(630, 130); brush.vertex(630, 450); brush.vertex(-30, 450);
  brush.endShape(true);
  // three receding ranges, each drawn with its mirror; nearer is darker, but all close in value
  let ranges = [
    ["#a8acb8", 170, [[-30, 190], [60, 160], [140, 175], [230, 120], [300, 60], [360, 110], [440, 150], [540, 130], [630, 170]]],
    ["#949ea4", 180, [[-30, 230], [80, 215], [190, 235], [280, 200], [400, 225], [500, 205], [630, 230]]],
    ["#7f8e8c", 190, [[-30, 272], [150, 262], [300, 276], [450, 258], [630, 270]]]
  ];
  for (let r of ranges) {
    for (let m = 0; m < 2; m++) {
      brush.fill(r[0], m ? r[1] - 40 : r[1]);
      brush.fillBleed(m ? 0.38 : 0.3);
      brush.fillTexture(0.55, 0.55);
      brush.beginShape(0.55);
      brush.vertex(-30, H);
      for (let q of r[2]) brush.vertex(q[0] + (m ? random(-5, 5) : 0), m ? 2 * H - q[1] : q[1]);
      brush.vertex(630, H);
      brush.endShape(true);
    }
  }
  // right-bank firs fading into mist, and their reflections
  for (let m = 0; m < 2; m++) {
    for (let i = 0; i < 9; i++) {
      let x = 430 + i * 20 + random(-5, 5), h = 40 + i * 6 + random(-6, 6);
      brush.fill("#5e706c", m ? 120 : 190);
      brush.fillBleed(0.3);
      brush.beginShape(0.25);
      brush.vertex(x - 13, H); brush.vertex(x, m ? H + h : H - h); brush.vertex(x + 13, H);
      brush.endShape(true);
    }
  }
  // a small rowing boat, softly
  brush.fill("#6a5a5a", 190);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(180, 380); brush.vertex(240, 378); brush.vertex(232, 390); brush.vertex(188, 391);
  brush.endShape(true);
  brush.fill("#6a5a5a", 110);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(188, 392); brush.vertex(232, 391); brush.vertex(228, 404); brush.vertex(192, 405);
  brush.endShape(true);
  // pale ripple lines
  for (let i = 0; i < 5; i++) {
    let y = H + 40 + i * 50 + random(-6, 6);
    brush.fill("#e2e0de", 210);
    brush.fillBleed(0.25);
    brush.beginShape(0.5);
    let x0 = random(-20, 260);
    brush.vertex(x0, y); brush.vertex(x0 + random(200, 340), y); brush.vertex(x0 + 200, y + 8); brush.vertex(x0, y + 8);
    brush.endShape(true);
  }
}
