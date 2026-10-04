async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4e3c8");
  randomSeed(66);
  brush.noStroke();

  // sky bands from violet down to molten orange
  let sky = ["#5b3a78", "#a2406e", "#e0573f", "#f2903a", "#f7c253"];
  for (let i = 0; i < sky.length; i++) {
    brush.fill(sky[i], 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(-10, i * 90 - 30); brush.vertex(610, i * 90 - 40);
    brush.vertex(610, i * 90 + 90); brush.vertex(-10, i * 90 + 100);
    brush.endShape(true);
  }
  // sun disc sinking behind towers
  brush.fill("#fbe07a", 210);
  brush.fillBleed(0.25);
  brush.circle(330, 400, 55, 0.2);

  // skyline: towers of varied heights, two passes for depth
  for (let layer = 0; layer < 2; layer++) {
    let x = -10;
    let base = 600;
    while (x < 610) {
      let w = random(30, 70);
      let h = layer ? random(120, 320) : random(80, 200);
      brush.fill(layer ? "#1a1024" : "#4a2a4a", layer ? 235 : 200);
      brush.fillBleed(0.12);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0);
      brush.vertex(x, base); brush.vertex(x, base - h);
      if (random() < 0.3) brush.vertex(x + w / 2, base - h - random(15, 40));
      brush.vertex(x + w, base - h); brush.vertex(x + w, base);
      brush.endShape(true);
      x += w + (layer ? random(0, 8) : -10);
    }
  }
  // a second dark pass on the lowest band to anchor it
  brush.fill("#120a18", 230);
  brush.fillBleed(0.15);
  brush.beginShape(0.2);
  brush.vertex(-10, 520); brush.vertex(610, 520); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
}
