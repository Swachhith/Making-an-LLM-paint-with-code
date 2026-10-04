async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f6");
  brush.noStroke();

  // cool sky, darker slate behind the crown so the reds glow against it
  brush.fill("#a8bdd2", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.35);
  brush.beginShape(0.2);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#7f97b3", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 250); brush.vertex(200, 300); brush.vertex(420, 280); brush.vertex(620, 320); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  // cool ground
  brush.fill("#8a9fa3", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 460); brush.vertex(300, 450); brush.vertex(620, 465); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // trunk and main limbs
  brush.fill("#3c3240", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(272, 525); brush.vertex(285, 380); brush.vertex(220, 290); brush.vertex(245, 280);
  brush.vertex(300, 345); brush.vertex(350, 270); brush.vertex(372, 282); brush.vertex(318, 380); brush.vertex(335, 525);
  brush.endShape(true);

  // crown built from many small leaf dabs, orange on the lit top, red and crimson lower
  let s = 17;
  const rnd = () => { s = (s * 48271) % 2147483647; return s / 2147483647; };
  for (let layer = 0; layer < 3; layer++) {
    const cols = [["#f2a03a", "#ea7a2a"], ["#e0452a", "#c8302e"], ["#8e1f3e", "#6a1a44"]][layer];
    const count = [110, 90, 45][layer];
    for (let i = 0; i < count; i++) {
      const a = rnd() * Math.PI * 2, r = Math.sqrt(rnd());
      const x = 300 + Math.cos(a) * r * 250;
      const y = 200 + Math.sin(a) * r * 165 + layer * 18;
      if (layer === 0 && y > 300 && rnd() < 0.6) continue;
      if (layer === 2 && y < 180) continue;
      brush.fill(cols[i % 2], [190, 200, 180][layer]);
      brush.fillBleed(0.25);
      brush.fillTexture(0.5, 0.5);
      brush.circle(x, y, [26, 20, 16][layer] + rnd() * 10, true);
    }
  }
  // lower trunk repainted over the crown's hem so the tree stands on the ground
  for (let p = 0; p < 2; p++) {
    brush.fill("#3c3240", 230);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.3);
    brush.vertex(270 + p * 5, 528); brush.vertex(284, 400); brush.vertex(318, 400); brush.vertex(337 - p * 5, 528);
    brush.endShape(true);
  }
  // fallen leaves
  for (let i = 0; i < 40; i++) {
    const x = 60 + rnd() * 480, y = 480 + rnd() * 100;
    brush.fill(i % 2 ? "#e0602a" : "#c0283a", 215);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, 4 + (i % 3) * 2, true);
  }
  // cool blue shadow at the base
  brush.fill("#4e5f82", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(140, 525); brush.vertex(300, 505); brush.vertex(470, 520); brush.vertex(300, 548);
  brush.endShape(true);
}
