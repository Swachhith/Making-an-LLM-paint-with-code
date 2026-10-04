async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4ee");
  randomSeed(11);
  brush.noStroke();
  // soft lilac-mint background wash
  brush.fill("#d7cbe6", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 350); brush.vertex(-20, 450);
  brush.endShape(true);
  brush.fill("#c6e0cc", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 420); brush.vertex(620, 330); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // stems
  brush.fill("#8cb88a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(225, 300); brush.vertex(245, 300); brush.vertex(275, 620); brush.vertex(250, 620);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(450, 230); brush.vertex(468, 232); brush.vertex(400, 620); brush.vertex(378, 620);
  brush.endShape(true);
  // leaf
  brush.fill("#9cc79a", 190);
  brush.beginShape(0.7);
  brush.vertex(262, 470); brush.vertex(340, 420); brush.vertex(380, 440); brush.vertex(300, 490);
  brush.endShape(true);
  // open dahlia: 3 rings of pointed petals
  let cx = 230, cy = 270;
  let rings = [[190, 16, "#f7b48a", 180], [140, 14, "#f59a6a", 200], [85, 12, "#f0845a", 215]];
  for (let k = 0; k < rings.length; k++) {
    let R = rings[k][0], n = rings[k][1];
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + k * 11;
      let w = 180 / n;
      brush.fill(rings[k][2], rings[k][3] - random(20));
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.5);
      brush.vertex(cx + cos(a - w) * R * 0.25, cy + sin(a - w) * R * 0.25);
      brush.vertex(cx + cos(a - w * 0.7) * R * 0.8, cy + sin(a - w * 0.7) * R * 0.8);
      brush.vertex(cx + cos(a) * R, cy + sin(a) * R);
      brush.vertex(cx + cos(a + w * 0.7) * R * 0.8, cy + sin(a + w * 0.7) * R * 0.8);
      brush.vertex(cx + cos(a + w) * R * 0.25, cy + sin(a + w) * R * 0.25);
      brush.endShape(true);
    }
  }
  brush.fill("#e0704a", 220);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 28, 0.6);
  brush.fill("#e8c46a", 200);
  brush.circle(cx, cy, 14, 0.4);
  // closed bud, upper right
  let bx = 455, by = 200;
  brush.fill("#f5a67a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(bx - 38, by + 10); brush.vertex(bx - 20, by - 45); brush.vertex(bx, by - 60); brush.vertex(bx + 22, by - 45); brush.vertex(bx + 38, by + 10); brush.vertex(bx, by + 40);
  brush.endShape(true);
  brush.fill("#ee8a5c", 200);
  brush.beginShape(0.7);
  brush.vertex(bx - 20, by + 10); brush.vertex(bx - 5, by - 45); brush.vertex(bx + 20, by + 5); brush.vertex(bx, by + 35);
  brush.endShape(true);
  // sepals
  brush.fill("#8cb88a", 210);
  brush.beginShape(0.5);
  brush.vertex(bx - 40, by + 5); brush.vertex(bx - 18, by + 45); brush.vertex(bx + 18, by + 45); brush.vertex(bx + 40, by + 5); brush.vertex(bx, by + 25);
  brush.endShape(true);
}
