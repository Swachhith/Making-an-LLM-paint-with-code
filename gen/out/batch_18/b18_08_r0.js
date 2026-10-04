async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece3d3");
  randomSeed(1808);
  brush.noStroke();

  // muted earthy ground wash
  brush.fill("#b9a585", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(0, 360); brush.vertex(600, 330); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#8b8a6a", 150);
  brush.circle(120, 120, 110, 0.7);

  // stems and leaves in olive
  brush.fill("#5d6240", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(330, 330); brush.vertex(348, 330); brush.vertex(360, 600); brush.vertex(340, 600);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(150, 230); brush.vertex(166, 236); brush.vertex(328, 520); brush.vertex(314, 530);
  brush.endShape(true);
  brush.fill("#4b5234", 200);
  brush.beginShape(0.9);
  brush.vertex(350, 470); brush.vertex(440, 440); brush.vertex(500, 470); brush.vertex(420, 500);
  brush.endShape(true);

  // open dahlia: concentric rings of pointed quills, burgundy, darkening inwards
  let cx = 360, cy = 250;
  let rings = [[140, 20, "#8a3a44"], [110, 18, "#7a2a38"], [80, 16, "#6a1f30"], [50, 13, "#541827"], [25, 10, "#3e1020"]];
  for (let k = 0; k < rings.length; k++) {
    let R = rings[k];
    for (let i = 0; i < R[1]; i++) {
      let a = i * 360 / R[1] + k * 9;
      let w = 2 * PI * R[0] / R[1] * 0.3 + 8;
      let bx = cx + cos(a) * R[0] * 0.35, by = cy + sin(a) * R[0] * 0.35;
      brush.fill(R[2], 180 + k * 10 - random(0, 25));
      brush.fillBleed(0.22);
      brush.fillTexture(0.45, 0.45);
      brush.beginShape(0.5);
      brush.vertex(bx + cos(a + 90) * w, by + sin(a + 90) * w);
      brush.vertex(cx + cos(a) * R[0], cy + sin(a) * R[0]);
      brush.vertex(bx - cos(a + 90) * w, by - sin(a + 90) * w);
      brush.endShape(true);
    }
  }
  brush.fill("#2a0a14", 220);
  brush.circle(cx, cy, 14, 0.3);

  // closed bud, top-left, on stem
  brush.fill("#7a2a38", 200);
  brush.fillBleed(0.25);
  brush.circle(150, 215, 34, 0.25);
  brush.fill("#4b1826", 210);
  brush.circle(150, 205, 18, 0.3);
  brush.fill("#5d6240", 220);
  brush.beginShape(0.6);
  brush.vertex(118, 222); brush.vertex(150, 236); brush.vertex(184, 220); brush.vertex(158, 258);
  brush.endShape(true);
}
