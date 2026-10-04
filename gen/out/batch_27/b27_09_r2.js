async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fffaf0");
  randomSeed(909);
  brush.noStroke();
  // saturated sky painted in patches, leaving paper for the white clouds
  let skyPatches = [
    [[-20, -20], [620, -20], [620, 90], [430, 110], [300, 70], [140, 100], [-20, 80]],
    [[-20, 150], [100, 140], [220, 190], [380, 170], [520, 200], [620, 180], [620, 300], [420, 280], [200, 310], [-20, 290]],
    [[-20, 330], [180, 350], [360, 320], [620, 340], [620, 440], [-20, 440]]
  ];
  let skyCols = ["#1747b8", "#2a78d4", "#3aa2e0"];
  for (let k = 0; k < 3; k++) {
    for (let p = 0; p < 2; p++) {
      brush.fill(skyCols[k], 190);
      brush.fillBleed(0.3);
      brush.fillTexture(0.4, 0.5);
      brush.beginShape(0.5);
      for (let v of skyPatches[k]) brush.vertex(v[0], v[1]);
      brush.endShape(true);
    }
  }
  // violet-grey shadows under the white clouds
  for (let c of [[300, 112], [420, 205], [150, 320]]) {
    brush.fill("#7a74c4", 160);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.6);
    brush.vertex(c[0] - 110, c[1]);
    brush.vertex(c[0] + 120, c[1] - 6);
    brush.vertex(c[0] + 70, c[1] + 18);
    brush.vertex(c[0] - 60, c[1] + 18);
    brush.endShape(true);
  }
  // far bank: bold green trees and a strip of towpath
  for (let p = 0; p < 2; p++) {
    brush.fill(p ? "#0d6b2e" : "#23a042", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.6);
    brush.vertex(-20, 450);
    brush.vertex(40, 405 + p * 12);
    brush.vertex(110, 420);
    brush.vertex(170, 395 + p * 12);
    brush.vertex(250, 425);
    brush.vertex(620, 430);
    brush.vertex(620, 455);
    brush.vertex(-20, 458);
    brush.endShape(true);
  }
  // canal water
  brush.fill("#0a8a95", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-20, 455);
  brush.vertex(620, 455);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // houseboat, right of centre: long red hull, yellow cabin, blue roof
  let hx = 300, hy = 480;
  brush.fill("#d71f1f", 235);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(hx, hy - 24);
  brush.vertex(hx + 270, hy - 24);
  brush.vertex(hx + 255, hy + 6);
  brush.vertex(hx + 12, hy + 6);
  brush.endShape(true);
  brush.fill("#8e0d18", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(hx + 6, hy - 6);
  brush.vertex(hx + 262, hy - 6);
  brush.vertex(hx + 255, hy + 6);
  brush.vertex(hx + 12, hy + 6);
  brush.endShape(true);
  for (let p = 0; p < 2; p++) {
    brush.fill("#ffb400", 225);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0);
    brush.vertex(hx + 40, hy - 24);
    brush.vertex(hx + 40, hy - 82);
    brush.vertex(hx + 225, hy - 82);
    brush.vertex(hx + 225, hy - 24);
    brush.endShape(true);
  }
  brush.fill("#0f2f9a", 235);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(hx + 28, hy - 82);
  brush.vertex(hx + 237, hy - 82);
  brush.vertex(hx + 220, hy - 100);
  brush.vertex(hx + 45, hy - 100);
  brush.endShape(true);
  for (let i = 0; i < 4; i++) {
    let wx = hx + 58 + i * 42;
    brush.fill("#0f2f9a", 225);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0);
    brush.vertex(wx, hy - 68);
    brush.vertex(wx + 22, hy - 68);
    brush.vertex(wx + 22, hy - 44);
    brush.vertex(wx, hy - 44);
    brush.endShape(true);
  }
  // pots of flowers on the roof, magenta and orange
  for (let i = 0; i < 6; i++) {
    brush.fill(i % 2 ? "#ff5a00" : "#e0137a", 235);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.circle(hx + 55 + i * 30, hy - 110, 10, 0.6);
    brush.fill("#1f8a3a", 220);
    brush.circle(hx + 62 + i * 30, hy - 104, 6, 0.6);
  }
  // wobbling reflections straight below
  let refl = [["#d71f1f", 0, 22], ["#ffb400", 22, 60], ["#0f2f9a", 60, 76]];
  for (let r of refl) {
    brush.fill(r[0], 140);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(hx + 20, hy + 8 + r[1]);
    brush.vertex(hx + 250, hy + 8 + r[1]);
    brush.vertex(hx + 230, hy + 8 + r[2]);
    brush.vertex(hx + 140, hy + 14 + r[2]);
    brush.vertex(hx + 45, hy + 8 + r[2]);
    brush.endShape(true);
  }
  // dark ripple breaks across the reflection
  for (let i = 0; i < 6; i++) {
    let y = 510 + i * 12 + random(-4, 4), x = random(-20, 520);
    brush.fill("#05474f", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(x, y);
    brush.vertex(x + 90, y - 3);
    brush.vertex(x + 70, y + 7);
    brush.endShape(true);
  }
  // mooring posts
  for (let px of [270, 585]) {
    brush.fill("#3a1f10", 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0);
    brush.vertex(px, 430);
    brush.vertex(px + 16, 430);
    brush.vertex(px + 16, 500);
    brush.vertex(px, 500);
    brush.endShape(true);
  }
}
