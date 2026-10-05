async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f4f8");
  brush.noStroke();

  // cool light sky, pale green ground
  brush.fill("#a9c7d8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 320); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#b3d6a8", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stems and leaves, cool teal
  brush.fill("#5f8a7a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(260, 460); brush.vertex(290, 460); brush.vertex(310, 620); brush.vertex(290, 620);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(320, 470); brush.vertex(350, 470); brush.vertex(370, 620); brush.vertex(350, 620);
  brush.endShape(true);
  brush.fill("#3e6b5e", 200);
  brush.beginShape(0.5);
  brush.vertex(270, 500); brush.vertex(310, 500); brush.vertex(330, 540); brush.vertex(290, 540);
  brush.endShape(true);

  // side view: two overlapping cups, cup 1 back, cup 2 front
  const cx = 300, cy = 260;
  for (let pass = 1; pass <= 2; pass++) {
    const r = pass === 1 ? 140 : 110;
    const a = pass === 1 ? -12 : 12;
    for (let i = 0; i < 7; i++) {
      const t = i * 180 / 6 + a;
      const px = cx + cos(t) * r * 0.65, py = cy + sin(t) * r * 0.65;
      const px2 = cx + cos(t - 12) * r * 0.8, py2 = cy + sin(t - 12) * r * 0.8;
      const px3 = cx + cos(t + 12) * r * 0.8, py3 = cy + sin(t + 12) * r * 0.8;
      brush.fill(pass === 1 ? "#b01a36" : "#8a0e2a", 220);
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.45);
      brush.beginShape(0.5);
      brush.vertex(px, py); brush.vertex(px2, py2); brush.vertex(px3, py3);
      brush.vertex(px3 + 4, py3 + 4); brush.vertex(px2 + 4, py2 + 4);
      brush.endShape(true);
    }
  }
  // centre, a dark bud
  brush.fill("#4a0a1e", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 26, 0.4);
  brush.fill("#2a0410", 220);
  brush.circle(cx - 4, cy - 4, 12, 0.4);
  // cool light rim on the front cup
  brush.fill("#f2e8f0", 180);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(cx + 10, cy - 20); brush.vertex(cx + 90, cy - 30); brush.vertex(cx + 80, cy + 20); brush.vertex(cx + 10, cy + 10);
  brush.endShape(true);
}
