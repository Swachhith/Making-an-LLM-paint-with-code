async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f4");
  randomSeed(303);
  brush.noStroke();
  let hz = 300;

  // pale sky wash
  brush.fill("#a9c4d8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 250); brush.vertex(0, 270);
  brush.endShape(true);

  // mesa silhouettes: flat tops, stepped jagged sides
  let mesas = [
    [[20, hz], [40, 215], [70, 205], [85, 180], [180, 175], [195, 200], [215, 205], [240, hz]],
    [[200, hz], [230, 245], [255, 240], [270, 225], [330, 222], [345, 238], [360, hz]],
    [[330, hz], [355, 200], [380, 190], [395, 160], [520, 155], [535, 185], [560, 195], [590, hz]]
  ];
  let tints = ["#9aa6c2", "#b3bcd0", "#8793b5"];
  for (let k = 0; k < mesas.length; k++) {
    let m = mesas[k];
    for (let pass = 0; pass < 2; pass++) {
      brush.fill(pass ? "#6f7ca3" : tints[k], pass ? 175 : 195);
      brush.fillBleed(pass ? 0.2 : 0.28);
      brush.fillTexture(0.5, 0.4);
      brush.beginShape(0.1);
      for (let p of m) brush.vertex(p[0], pass ? p[1] + (hz - p[1]) * 0.35 : p[1]);
      brush.endShape(true);
    }
  }

  // water: pale base
  brush.fill("#c3d5e2", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(0, hz); brush.vertex(600, hz); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // reflections: mirrored, broken with horizontal gaps
  for (let k = 0; k < mesas.length; k++) {
    let m = mesas[k];
    brush.fill(tints[k], 160);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.5);
    brush.beginShape(0.3);
    for (let p of m) brush.vertex(p[0] + random(-6, 6), hz + (hz - p[1]) * 1.05);
    brush.endShape(true);
  }
  // ripple bands of lighter sky colour cutting across
  for (let y = hz + 30; y < 600; y += 45) {
    brush.fill("#dde8ef", 150);
    brush.fillBleed(0.25);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.8);
    brush.vertex(random(0, 80), y); brush.vertex(random(520, 600), y + 4);
    brush.vertex(random(520, 600), y + 18); brush.vertex(random(0, 80), y + 16);
    brush.endShape(true);
  }
}
