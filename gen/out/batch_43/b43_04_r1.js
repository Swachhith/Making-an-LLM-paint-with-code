async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0efe6");
  brush.noStroke();
  // teal sky and mid-ground
  brush.fill("#0f6e78", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 330); brush.vertex(-10, 360);
  brush.endShape(true);
  brush.fill("#2aa3a8", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.circle(300, 250, 460, 0.6);
  brush.fill("#06494d", 230); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 470); brush.vertex(200, 440); brush.vertex(420, 470); brush.vertex(610, 440); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // trunk and limbs, dark, wide
  brush.fill("#2a1810", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(255, 585); brush.vertex(350, 585); brush.vertex(332, 400); brush.vertex(300, 300); brush.vertex(278, 400);
  brush.endShape(true);
  const limbs = [[290, 400, 120, 230], [315, 390, 480, 215], [300, 330, 220, 120], [305, 320, 400, 100], [300, 300, 305, 70]];
  for (const l of limbs) {
    const dx = l[2] - l[0], dy = l[3] - l[1], n = Math.hypot(dx, dy);
    const px = -dy / n * 15, py = dx / n * 15;
    brush.fill("#3c2418", 225); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(l[0] + px, l[1] + py); brush.vertex(l[2] + px * 0.4, l[3] + py * 0.4);
    brush.vertex(l[2] - px * 0.4, l[3] - py * 0.4); brush.vertex(l[0] - px, l[1] - py);
    brush.endShape(true);
  }
  // blossom masses: orange-pink cups, shaded on one side
  const spots = [[130, 220, 95], [480, 205, 95], [300, 95, 100], [215, 300, 70], [400, 300, 70], [220, 150, 60], [385, 160, 60], [95, 330, 50], [510, 320, 50]];
  for (const s of spots) {
    brush.fill("#e06a1e", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.circle(s[0] + 6, s[1] + 12, s[2] * 0.95, 0.6);
    for (let k = 0; k < 6; k++) {
      const a = k * 60 + s[0];
      brush.fill(k % 2 ? "#f6a064" : "#ee8442", 190); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
      brush.circle(s[0] + cos(a) * s[2] * 0.32, s[1] + sin(a) * s[2] * 0.32, s[2] * 0.32, 0.5);
    }
  }
  // fallen petals
  for (let i = 0; i < 8; i++) {
    brush.fill("#f08a4a", 200); brush.circle(190 + i * 28, 520 + (i % 3) * 15, 6, 0.4);
  }
}
