async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#121014");
  randomSeed(1507);
  brush.noStroke();

  // huge sky, layered indigo and violet
  brush.fill("#1a1826", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#2a243a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 120); brush.vertex(620, 80); brush.vertex(620, 320); brush.vertex(-20, 340);
  brush.endShape(true);
  brush.fill("#3a304a", 150);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 180); brush.vertex(620, 150); brush.vertex(620, 320); brush.vertex(-20, 330);
  brush.endShape(true);

  // crescent moon, pale paper with a dark rim
  brush.fill("#e8e2d8", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(430, 170, 65, 0.2);
  brush.fill("#1a1422", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(430 - 20, 170 - 20); brush.vertex(430 + 20, 170 - 20); brush.vertex(430 + 25, 170 + 15); brush.vertex(430 - 25, 170 + 15);
  brush.endShape(true);
  brush.fill("#c8c0b0", 200);
  brush.fillBleed(0.1);
  brush.circle(445, 155, 18, 0.2);
  brush.circle(456, 172, 12, 0.2);

  // pine tree silhouettes, low
  let trees = [
    [150, 520, 110, 200], [220, 520, 90, 170], [300, 520, 120, 190],
    [390, 520, 100, 170], [470, 520, 130, 200], [550, 520, 90, 160]
  ];
  for (let t of trees) {
    let x = t[0], h = t[3], w = t[2];
    brush.fill("#050306", 235);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.7);
    brush.vertex(x, 520);
    for (let i = 0; i < w; i++) {
      let y = 520 - h * (i + 1) / w;
      let dx = (i - w / 2) / w * 20;
      brush.vertex(x + dx, y);
    }
    brush.endShape(true);
  }
  // a few warm lights in the low sky
  for (let i = 0; i < 6; i++) {
    let x = random(60, 540), y = random(250, 330);
    brush.fill(random(["#e89a5a", "#f0a060", "#ffd08a"]), random(180, 230));
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, random(6, 12), 0.4);
  }
}
