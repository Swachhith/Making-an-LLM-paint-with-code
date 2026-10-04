async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece4d3");
  randomSeed(5005);
  brush.noStroke();

  // overcast ochre-grey sky
  brush.fill("#c9bfa6", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 300); brush.vertex(-10, 290);
  brush.endShape(true);

  // the field: a large tawny wash with drier strips
  brush.fill("#b59a62", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-10, 285); brush.vertex(610, 275); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  for (let i = 0; i < 4; i++) {
    let y = 340 + i * 65;
    brush.fill(i % 2 ? "#9c8450" : "#c2a871", 170);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.7);
    brush.vertex(-10, y); brush.vertex(610, y - 20 + i * 5);
    brush.vertex(610, y + 25); brush.vertex(-10, y + 35);
    brush.endShape(true);
  }

  // distant pine line: a band of hazy green, then individual spires
  brush.fill("#6e7560", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, 290); brush.vertex(610, 280); brush.vertex(610, 255); brush.vertex(-10, 262);
  brush.endShape(true);
  let x = -5;
  while (x < 610) {
    let h = random(35, 80);
    let w = random(14, 22);
    let base = 288 - x * 0.015;
    brush.fill(random(["#3f4a38", "#4c5540", "#35402f"]), random(190, 225));
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.1);
    brush.vertex(x - w, base); brush.vertex(x - w * 0.5, base - h * 0.55);
    brush.vertex(x, base - h); brush.vertex(x + w * 0.5, base - h * 0.55); brush.vertex(x + w, base);
    brush.endShape(true);
    x += random(12, 24);
  }
}
