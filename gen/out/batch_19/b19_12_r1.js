async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f9fb");
  brush.noStroke();

  // cool slate background painted around the bloom silhouette
  for (let p = 0; p < 2; p++) {
    brush.fill(p ? "#6f86ab" : "#9aaecb", p ? 150 : 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.3);
    brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
    brush.vertex(-20, 380 + p * 40);
    brush.vertex(60, 360); brush.vertex(120, 440); brush.vertex(220, 500); brush.vertex(300, 520);
    brush.vertex(390, 500); brush.vertex(490, 430); brush.vertex(545, 330); brush.vertex(520, 220);
    brush.vertex(450, 120); brush.vertex(380, 50); brush.vertex(300, 40); brush.vertex(215, 60);
    brush.vertex(150, 130); brush.vertex(80, 230); brush.vertex(40, 300); brush.vertex(-20, 300 + p * 40);
    brush.endShape(true);
  }
  // branch behind
  brush.fill("#4d3f45", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(280, 500); brush.vertex(318, 500); brush.vertex(360, 620); brush.vertex(320, 620);
  brush.endShape(true);
  // fuzzy bud sheath
  brush.fill("#6b7a4a", 200);
  brush.circle(300, 505, 22, true);

  // back petals: broad pink-backed cups, shading only at their bases and edges
  const petal = (bx, by, tx, ty, w, base, tip) => {
    const dx = tx - bx, dy = ty - by, l = Math.hypot(dx, dy);
    const nx = -dy / l, ny = dx / l;
    // soft cool shadow along one flank to model the white petal
    brush.fill("#aeb1cf", 170);
    brush.fillBleed(0.28);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.8);
    brush.vertex(bx, by);
    brush.vertex(bx + dx * 0.5 + nx * w, by + dy * 0.5 + ny * w);
    brush.vertex(tx + nx * w * 0.35, ty + ny * w * 0.35);
    brush.vertex(bx + dx * 0.55 + nx * w * 0.6, by + dy * 0.55 + ny * w * 0.6);
    brush.endShape(true);
    // pink flush from the base
    brush.fill(base, 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.8);
    brush.vertex(bx - nx * w * 0.4, by - ny * w * 0.4);
    brush.vertex(bx + dx * 0.4 - nx * w * 0.8, by + dy * 0.4 - ny * w * 0.8);
    brush.vertex(bx + dx * tip, by + dy * tip);
    brush.vertex(bx + dx * 0.4 + nx * w * 0.8, by + dy * 0.4 + ny * w * 0.8);
    brush.vertex(bx + nx * w * 0.4, by + ny * w * 0.4);
    brush.endShape(true);
  };
  petal(290, 470, 130, 170, 90, "#c7457f", 0.55);
  petal(310, 470, 480, 170, 90, "#c7457f", 0.55);
  petal(300, 470, 300, 70, 85, "#d65c90", 0.5);
  // front petals, closer: stronger colour
  petal(300, 480, 120, 360, 75, "#b83072", 0.6);
  petal(300, 480, 480, 360, 75, "#b83072", 0.6);
  // deep throat
  brush.fill("#7a1f55", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(260, 470); brush.vertex(300, 420); brush.vertex(340, 470); brush.vertex(300, 495);
  brush.endShape(true);
}
