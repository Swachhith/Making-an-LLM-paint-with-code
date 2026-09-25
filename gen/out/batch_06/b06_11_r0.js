async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6ece6");
  randomSeed(1111);
  brush.noStroke();
  // bold plum background band
  brush.fill("#5b1f4a", 200);
  brush.fillBleed(0.35, "out");
  brush.fillTexture(0.6, 0.4);
  brush.beginShape(0.9);
  brush.vertex(-20, 80); brush.vertex(400, 40); brush.vertex(620, 150); brush.vertex(620, 470); brush.vertex(200, 560); brush.vertex(-20, 470);
  brush.endShape(true);
  // leaves
  brush.fill("#1f7a3a", 220);
  brush.fillBleed(0.2, "out");
  let leaves = [[180, 430, 60, 520], [360, 420, 480, 500], [260, 300, 140, 250]];
  for (let L of leaves) {
    brush.beginShape(0.7);
    brush.vertex(L[0], L[1]);
    brush.vertex((L[0] + L[2]) / 2 + 30, (L[1] + L[3]) / 2 - 30);
    brush.vertex(L[2], L[3]);
    brush.vertex((L[0] + L[2]) / 2 - 30, (L[1] + L[3]) / 2 + 30);
    brush.endShape(true);
  }
  // rose 1: facing viewer, spiral of cupped petals
  let ax = 210, ay = 250;
  for (let k = 0; k < 16; k++) {
    let a = k * 97;
    let r = 120 - k * 7;
    brush.fill(k < 6 ? "#e07a98" : (k < 11 ? "#cc4f78" : "#a52a5a"), 190 + k * 3);
    brush.fillBleed(0.2, "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    for (let j = 0; j < 5; j++) {
      let aa = a + j * 30;
      let rr = r * (j == 0 || j == 4 ? 0.3 : 1);
      brush.vertex(ax + cos(aa) * rr, ay + sin(aa) * rr * 0.9);
    }
    brush.endShape(true);
  }
  // rose 2: side profile, cup shape
  let bx = 440, by = 320;
  brush.fill("#2a6b35", 210);
  brush.beginShape(0.5);
  brush.vertex(bx - 50, by + 60); brush.vertex(bx, by + 95); brush.vertex(bx + 50, by + 60); brush.vertex(bx, by + 75);
  brush.endShape(true);
  for (let i = 0; i < 6; i++) {
    let w = 110 - i * 14;
    let top = by - 70 + i * 8;
    brush.fill(i % 2 ? "#d9618a" : "#e98aa6", 200 + i * 6);
    brush.fillBleed(0.2, "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(bx - w, top);
    brush.vertex(bx - w * 0.8, by + 40);
    brush.vertex(bx, by + 70 - i * 5);
    brush.vertex(bx + w * 0.8, by + 40);
    brush.vertex(bx + w, top);
    brush.vertex(bx, top + 25);
    brush.endShape(true);
  }
}
