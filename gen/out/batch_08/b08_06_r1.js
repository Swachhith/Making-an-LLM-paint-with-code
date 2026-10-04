async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf5e6");
  randomSeed(606);
  brush.noStroke();
  // deep sky
  brush.fill("#1a5fd0", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(-20, 120);
  brush.endShape(true);
  brush.fill("#0d3a9a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 60); brush.vertex(-20, 40);
  brush.endShape(true);
  // steep hill rising left, seen from the quay
  brush.fill("#d89a3a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 110); brush.vertex(140, 70); brush.vertex(260, 120); brush.vertex(620, 210);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // houses scattered up the slope, tumbling, perspective from below
  let cols = ["#f03a2a", "#ffc20a", "#10a8a0", "#f06aa8", "#ff7a10", "#2a6ae0", "#8a3ac8"];
  let houses = [];
  for (let i = 0; i < 48; i++) {
    let x = random(-20, 600);
    let slopeTop = x < 140 ? 70 + (140 - x) * 0.3 : (x < 260 ? 70 + (x - 140) * 0.4 : 120 + (x - 260) * 0.25);
    let y = slopeTop + 30 + random(0, 440 - slopeTop);
    houses.push([x, y]);
  }
  houses.sort((a, b) => a[1] - b[1]);
  for (let h of houses) {
    let s = 14 + (h[1] / 520) * 50;
    let w = s * (1 + random(0.6)), ht = s * (0.8 + random(0.5));
    let x = h[0], y = h[1];
    if (random() < 0.8) {
      brush.fill(random(cols), 220);
      brush.fillBleed(0.18);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.05);
      brush.vertex(x, y); brush.vertex(x + w, y); brush.vertex(x + w, y + ht); brush.vertex(x, y + ht);
      brush.endShape(true);
    }
    // shadow side
    brush.fill("#5a3a7a", 170);
    brush.fillBleed(0.15);
    brush.beginShape(0.05);
    brush.vertex(x + w * 0.72, y); brush.vertex(x + w, y); brush.vertex(x + w, y + ht); brush.vertex(x + w * 0.72, y + ht);
    brush.endShape(true);
    // roof, seen from below: underside eave only, a thick band
    brush.fill(random(["#b02a14", "#d0481a", "#8a1a1a"]), 230);
    brush.fillBleed(0.15);
    brush.beginShape(0.05);
    brush.vertex(x - 4, y + 2); brush.vertex(x + w * 0.5, y - s * 0.35); brush.vertex(x + w + 4, y + 2);
    brush.endShape(true);
    brush.fill("#101a40", 225);
    brush.fillBleed(0.1);
    brush.circle(x + w * 0.35, y + ht * 0.45, max(2.5, s * 0.1), 0.3);
  }
  // quay wall and dark sea at the bottom
  brush.fill("#0a3a7a", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 545); brush.vertex(620, 535); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#18a0b0", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 575); brush.vertex(620, 565); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // cypresses
  for (let c of [[520, 470, 90], [80, 300, 60]]) {
    brush.fill("#135a2a", 235);
    brush.fillBleed(0.2);
    brush.beginShape(0.7);
    brush.vertex(c[0] - 16, c[1]); brush.vertex(c[0], c[1] - c[2]); brush.vertex(c[0] + 16, c[1]);
    brush.endShape(true);
  }
}
