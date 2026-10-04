async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff8ec");
  brush.noStroke();

  // bold turquoise sky upper portion
  brush.fill("#1aa6c8", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 280);
  brush.endShape(true);

  // rolling hills: lime, emerald
  brush.fill("#8cc63f", 210);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 280); brush.vertex(150, 240); brush.vertex(330, 270); brush.vertex(480, 230); brush.vertex(620, 250); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1f8a4c", 200);
  brush.beginShape(0.8);
  brush.vertex(-20, 360); brush.vertex(200, 330); brush.vertex(620, 380); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // road: sweeping curve from bottom-left to a vanishing point far right
  brush.fill("#e2a25a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, 620); brush.vertex(180, 620); brush.vertex(300, 480); brush.vertex(470, 350); brush.vertex(540, 300);
  brush.vertex(530, 300); brush.vertex(440, 350); brush.vertex(240, 460); brush.vertex(-20, 540);
  brush.endShape(true);

  // cyclist: wheels drawn as rings of small dark dabs so the road shows through the spokes
  const cx = 400, cy = 380;
  const wr = 40;
  const wheels = [[cx - 55, cy + 60], [cx + 55, cy + 60]];
  brush.fill("#101018", 240);
  brush.fillBleed(0.05);
  brush.fillTexture(0.3, 0.3);
  for (const w of wheels) {
    for (let i = 0; i < 26; i++) {
      const a = (i / 26) * Math.PI * 2;
      brush.circle(w[0] + Math.cos(a) * wr, w[1] + Math.sin(a) * wr, 5, 0.2);
    }
    brush.circle(w[0], w[1], 4, 0.2);
  }
  // frame: blue triangle, painted as wide-ish bars
  brush.fill("#1b3fa0", 235);
  brush.fillBleed(0.08);
  brush.beginShape(0);
  brush.vertex(cx - 55, cy + 55); brush.vertex(cx - 5, cy + 5); brush.vertex(cx + 40, cy + 10); brush.vertex(cx + 55, cy + 55);
  brush.vertex(cx + 42, cy + 60); brush.vertex(cx + 32, cy + 24); brush.vertex(cx + 2, cy + 20); brush.vertex(cx - 45, cy + 62);
  brush.endShape(true);
  // rider: red jersey, torso leaning forward
  for (let p = 0; p < 2; p++) {
    brush.fill("#d7263d", 235);
    brush.fillBleed(0.12);
    brush.beginShape(0.4);
    brush.vertex(cx - 12, cy + 2); brush.vertex(cx - 2, cy - 45); brush.vertex(cx + 40, cy - 40); brush.vertex(cx + 48, cy - 24); brush.vertex(cx + 12, cy + 6);
    brush.endShape(true);
  }
  // arm to handlebar
  brush.beginShape(0.4);
  brush.vertex(cx + 30, cy - 38); brush.vertex(cx + 52, cy - 2); brush.vertex(cx + 40, cy + 4); brush.vertex(cx + 22, cy - 28);
  brush.endShape(true);
  // legs: navy shorts and a pedalling leg
  brush.fill("#1c1c3a", 235);
  brush.beginShape(0.3);
  brush.vertex(cx - 14, cy - 4); brush.vertex(cx + 14, cy + 2); brush.vertex(cx + 20, cy + 40); brush.vertex(cx + 4, cy + 44); brush.vertex(cx - 2, cy + 14);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(cx - 12, cy + 2); brush.vertex(cx - 24, cy + 30); brush.vertex(cx - 10, cy + 50); brush.vertex(cx + 2, cy + 44); brush.vertex(cx - 6, cy + 30); brush.vertex(cx + 4, cy + 8);
  brush.endShape(true);
  // head with helmet
  brush.fill("#7a4424", 235);
  brush.circle(cx + 50, cy - 56, 13, 0.2);
  brush.fill("#f2c12e", 235);
  brush.beginShape(0.5);
  brush.vertex(cx + 34, cy - 60); brush.vertex(cx + 44, cy - 74); brush.vertex(cx + 62, cy - 72); brush.vertex(cx + 66, cy - 60);
  brush.endShape(true);
  // shadow on road
  brush.fill("#8a5a2a", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(cx - 100, cy + 104); brush.vertex(cx + 80, cy + 100); brush.vertex(cx + 60, cy + 118); brush.vertex(cx - 120, cy + 120);
  brush.endShape(true);

  // sun in the sky, top left
  brush.fill("#ffd23f", 230);
  brush.circle(110, 90, 36, 0.2);
}
