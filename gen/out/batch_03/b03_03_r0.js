async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece4d6");
  brush.noStroke();

  let leaves = [[70, 80, 40], [530, 90, 140], [540, 520, 220], [60, 510, 310]];
  for (let L of leaves) {
    let x = L[0], y = L[1], a = L[2];
    brush.fill("#7d8660", 180);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.5);
    brush.beginShape(0.6);
    brush.vertex(x, y);
    brush.vertex(x + cos(a - 25) * 110, y + sin(a - 25) * 110);
    brush.vertex(x + cos(a) * 190, y + sin(a) * 190);
    brush.vertex(x + cos(a + 25) * 110, y + sin(a + 25) * 110);
    brush.endShape(true);
  }

  let cx = 300, cy = 300;
  brush.fill("#dcb3a4", 150);
  brush.fillBleed(0.45);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 200, true);

  let tones = ["#d6a293", "#c98f82", "#be7f74", "#b06d66", "#9c5a56"];
  for (let ring = 0; ring < 5; ring++) {
    let r = 190 - ring * 34;
    let n = 9 - ring;
    for (let k = 0; k < n; k++) {
      let a = k * 360 / n + ring * 17 + random(-8, 8);
      let px = cx + cos(a) * r * 0.55, py = cy + sin(a) * r * 0.55;
      brush.fill(tones[ring], 165 + ring * 12);
      brush.fillBleed(0.25);
      brush.fillTexture(0.55, 0.5);
      brush.beginShape(0.5);
      for (let t = -40; t <= 40; t += 20) {
        let rr = r * (0.88 + random(0, 0.14));
        brush.vertex(cx + cos(a + t * (1 - ring * 0.1)) * rr, cy + sin(a + t * (1 - ring * 0.1)) * rr);
      }
      brush.vertex(px + cos(a + 90) * 10, py + sin(a + 90) * 10);
      brush.vertex(px + cos(a - 90) * 10, py + sin(a - 90) * 10);
      brush.endShape(true);
    }
  }
  brush.fill("#c9a24e", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.6, 0.3);
  brush.circle(cx, cy, 26, true);
  brush.fill("#7a4a3a", 200);
  brush.circle(cx + 4, cy + 3, 10, true);
}
