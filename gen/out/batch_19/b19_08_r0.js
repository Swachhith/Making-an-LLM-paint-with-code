async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#12194a");
  brush.noStroke();

  // glowing halo around moon: light pigment on dark paper
  brush.fill("#3b4fb8", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(420, 170, 170, true);
  brush.fill("#6a5fd0", 180);
  brush.circle(420, 170, 125, true);
  // big moon
  brush.fill("#ffd84a", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.35, 0.35);
  brush.circle(420, 170, 90, true);
  brush.fill("#fff08a", 230);
  brush.circle(412, 160, 70, true);

  // stars
  let s = 11;
  for (let i = 0; i < 60; i++) {
    s = (s * 1103515245 + 12345) % 2147483648;
    const x = (s / 2147483648) * 600;
    s = (s * 1103515245 + 12345) % 2147483648;
    const y = (s / 2147483648) * 340;
    if (Math.hypot(x - 420, y - 170) < 180) continue;
    brush.fill(i % 3 ? "#fff3b0" : "#9fe3ff", 230);
    brush.fillBleed(0.1);
    brush.fillTexture(0.2, 0.2);
    brush.circle(x, y, 2 + (i % 4), true);
  }

  // rolling hill behind village
  brush.fill("#1e6b5c", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 400); brush.vertex(150, 350); brush.vertex(330, 390); brush.vertex(500, 360);
  brush.vertex(620, 380); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // village houses, bold colours, with lit windows
  const houses = [[40, 420, 70, 60, "#c0304a"], [120, 400, 60, 80, "#2a3fa0"], [190, 430, 80, 55, "#8a2f9a"],
                  [285, 410, 60, 75, "#d0582a"], [355, 435, 75, 55, "#2a3fa0"], [440, 415, 65, 70, "#c0304a"], [515, 440, 80, 55, "#8a2f9a"]];
  for (const h of houses) {
    const [x, y, w, ht, c] = h;
    brush.fill(c, 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.05);
    brush.vertex(x, y + ht); brush.vertex(x, y); brush.vertex(x + w, y); brush.vertex(x + w, y + ht);
    brush.endShape(true);
    // roof
    brush.fill("#0b0f2a", 230);
    brush.beginShape(0.05);
    brush.vertex(x - 8, y + 2); brush.vertex(x + w / 2, y - 30); brush.vertex(x + w + 8, y + 2);
    brush.endShape(true);
    // windows
    brush.fill("#ffcf3a", 250);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x + w * 0.3, y + ht * 0.4, 7, true);
    brush.circle(x + w * 0.7, y + ht * 0.4, 7, true);
  }
  // church spire
  brush.fill("#0b0f2a", 230);
  brush.beginShape(0.05);
  brush.vertex(255, 430); brush.vertex(255, 360); brush.vertex(270, 300); brush.vertex(285, 360); brush.vertex(285, 430);
  brush.endShape(true);
  brush.fill("#ffcf3a", 240);
  brush.circle(270, 375, 6, true);

  // foreground dark field
  brush.fill("#0a2a2a", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 500); brush.vertex(200, 490); brush.vertex(400, 510); brush.vertex(620, 495); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
