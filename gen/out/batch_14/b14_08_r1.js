async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f5ec");
  randomSeed(818);
  brush.noStroke();

  // sky painted as irregular patches around white cloud shapes (paper left bare)
  const patches = [
    [[-20, -20], [620, -20], [620, 110], [460, 140], [330, 100], [150, 150], [-20, 120]],
    [[-20, 150], [120, 190], [60, 260], [-20, 280]],
    [[210, 170], [360, 140], [470, 180], [620, 150], [620, 250], [540, 280], [420, 250], [260, 250]],
    [[-20, 330], [80, 300], [230, 330], [330, 300], [460, 320], [620, 290], [620, 420], [-20, 420]],
  ];
  for (let pass = 0; pass < 2; pass++) {
    for (const p of patches) {
      brush.fill(pass ? "#1a4fc0" : "#2f86e6", pass ? 160 : 215);
      brush.fillBleed(0.28);
      brush.fillTexture(0.45, 0.4);
      brush.beginShape(0.7);
      for (const v of p) brush.vertex(v[0] + (pass ? random(-10, 10) : 0), v[1] + (pass ? -10 : 0));
      brush.endShape(true);
    }
  }
  // cool grey cloud undersides
  brush.fill("#9aaed0", 170);
  brush.fillBleed(0.3);
  const shades = [[160, 160, 70], [320, 280, 90], [80, 300, 50], [540, 280, 60]];
  for (const c of shades) {
    brush.beginShape(0.8);
    brush.vertex(c[0] - c[2], c[1]); brush.vertex(c[0], c[1] - 15); brush.vertex(c[0] + c[2], c[1]); brush.vertex(c[0], c[1] + 12);
    brush.endShape(true);
  }

  // field: layered bold greens and a gold strip
  brush.fill("#9cc62b", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, 425); brush.vertex(300, 410); brush.vertex(620, 428); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#e0b92a", 200);
  brush.beginShape(0.6);
  brush.vertex(-20, 505); brush.vertex(250, 480); brush.vertex(620, 525); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#5e9a1a", 180);
  brush.beginShape(0.6);
  brush.vertex(-20, 560); brush.vertex(300, 545); brush.vertex(620, 580); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#2a6a18", 210);
  for (let x = -10; x < 620; x += 26) brush.circle(x, 422 + random(-4, 4), random(9, 15), 0.5);

  // barn at right, two passes of red
  const bx = 390, by = 450;
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(pass ? "#b00a18" : "#e01a24", 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.35, 0.35);
    brush.beginShape(0);
    brush.vertex(bx, by); brush.vertex(bx, by - 75); brush.vertex(bx + 38, by - 118);
    brush.vertex(bx + 80, by - 118); brush.vertex(bx + 118, by - 75); brush.vertex(bx + 118, by);
    brush.endShape(true);
    brush.fill(pass ? "#6a0610" : "#9a0a14", 225);
    brush.beginShape(0);
    brush.vertex(bx + 118, by); brush.vertex(bx + 118, by - 75); brush.vertex(bx + 185, by - 65); brush.vertex(bx + 185, by + 5);
    brush.endShape(true);
  }
  brush.fill("#2a2230", 225);
  brush.beginShape(0);
  brush.vertex(bx + 80, by - 122); brush.vertex(bx + 190, by - 110); brush.vertex(bx + 190, by - 64); brush.vertex(bx + 118, by - 78);
  brush.endShape(true);
  brush.fill("#4a0408", 230);
  brush.beginShape(0);
  brush.vertex(bx + 32, by); brush.vertex(bx + 32, by - 52); brush.vertex(bx + 86, by - 52); brush.vertex(bx + 86, by);
  brush.endShape(true);

  // tree beside the barn
  for (let k = 0; k < 3; k++) {
    brush.fill(["#3a8a22", "#1f5e1a", "#0f3d10"][k], 210);
    brush.circle(330 + k * 4, 370 + k * 8, 38 - k * 8, 0.5);
  }
}
