async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#121c33");
  randomSeed(22);
  brush.noStroke();
  // teal glow rising from the horizon
  brush.fill("#1f6b78", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-30, 520); brush.vertex(-30, 330); brush.vertex(200, 380); brush.vertex(420, 350); brush.vertex(630, 300); brush.vertex(630, 520);
  brush.endShape(true);
  brush.fill("#2a8a8f", 170);
  brush.beginShape(0.8);
  brush.vertex(40, 510); brush.vertex(120, 420); brush.vertex(380, 430); brush.vertex(560, 400); brush.vertex(600, 510);
  brush.endShape(true);
  // indigo swirls high in the sky
  brush.fill("#3a3f8f", 190);
  brush.fillBleed(0.28);
  brush.beginShape(0.9);
  brush.vertex(60, 90); brush.vertex(260, 40); brush.vertex(470, 120); brush.vertex(330, 200); brush.vertex(120, 170);
  brush.endShape(true);
  brush.fill("#2c5c8a", 170);
  brush.beginShape(0.9);
  brush.vertex(300, 230); brush.vertex(520, 190); brush.vertex(600, 290); brush.vertex(410, 310);
  brush.endShape(true);
  // stars
  for (let i = 0; i < 90; i++) {
    let sx = random(10, 590);
    let sy = random(10, 440);
    brush.fill(random(["#fff6d8", "#dff7ff", "#ffffff"]), random(180, 250));
    brush.fillBleed(0.1);
    brush.circle(sx, sy, random(1.5, 3.5), 0.2);
  }
  for (let i = 0; i < 8; i++) {
    let sx = random(40, 560);
    let sy = random(30, 330);
    brush.fill("#cfeff5", 120);
    brush.fillBleed(0.3);
    brush.circle(sx, sy, random(9, 14), 0.4);
    brush.fill("#fffbe8", 240);
    brush.fillBleed(0.1);
    brush.circle(sx, sy, random(3.5, 5), 0.2);
  }
  // dark ground
  brush.fill("#070b18", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(-20, 505); brush.vertex(180, 495); brush.vertex(420, 500); brush.vertex(620, 490); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // village houses: walls and roofs as one silhouette each
  const houses = [[70, 45, 38], [128, 38, 30], [178, 55, 44], [250, 34, 26], [300, 48, 40], [372, 40, 34], [430, 60, 46], [505, 36, 28]];
  for (const [hx, hw, hh] of houses) {
    let base = 510;
    brush.fill("#0a1022", 245);
    brush.fillBleed(0.12);
    brush.beginShape(0);
    brush.vertex(hx - hw / 2, base);
    brush.vertex(hx - hw / 2, base - hh);
    brush.vertex(hx, base - hh - hw * 0.45);
    brush.vertex(hx + hw / 2, base - hh);
    brush.vertex(hx + hw / 2, base);
    brush.endShape(true);
  }
  // church spire
  brush.fill("#0a1022", 245);
  brush.beginShape(0);
  brush.vertex(222, 512); brush.vertex(222, 440); brush.vertex(232, 395); brush.vertex(242, 440); brush.vertex(242, 512);
  brush.endShape(true);
  // lit windows
  for (const [hx, hw, hh] of houses) {
    let n = hw > 45 ? 2 : 1;
    for (let k = 0; k < n; k++) {
      let wx = hx - hw / 4 + k * hw / 2 + (n == 1 ? hw / 4 : 0);
      brush.fill("#f2b84a", 150);
      brush.fillBleed(0.3);
      brush.circle(wx, 510 - hh * 0.55, 8, 0.3);
      brush.fill("#ffd873", 240);
      brush.fillBleed(0.1);
      brush.circle(wx, 510 - hh * 0.55, 4, 0.2);
    }
  }
}
