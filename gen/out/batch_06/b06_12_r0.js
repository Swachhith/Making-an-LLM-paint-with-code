async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe8da");
  randomSeed(1212);
  brush.noStroke();
  // olive shadow wash in corners
  brush.fill("#8d8a5e", 160);
  brush.fillBleed(0.5, "out");
  brush.fillTexture(0.6, 0.3);
  brush.circle(40, 560, 170, true);
  brush.circle(580, 40, 140, true);
  let cx = 290, cy = 310;
  for (let i = 0; i < 5; i++) {
    let a = -100 + i * 72;
    let d = cos(a), e = sin(a), p = -e, q = d;
    // loose first pass
    brush.fill("#d9b24a", 185);
    brush.fillBleed(0.35, "out");
    brush.fillTexture(0.55, 0.45);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + d * 120 - p * 130, cy + e * 120 - q * 130);
    brush.vertex(cx + d * 270 - p * 60, cy + e * 270 - q * 60);
    brush.vertex(cx + d * 285 + p * 20, cy + e * 285 + q * 20);
    brush.vertex(cx + d * 200 + p * 120, cy + e * 200 + q * 120);
    brush.vertex(cx + d * 60 + p * 60, cy + e * 60 + q * 60);
    brush.endShape(true);
    // smaller ochre pass inside
    brush.fill("#c4912e", 170);
    brush.fillBleed(0.2, "out");
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + d * 100 - p * 70, cy + e * 100 - q * 70);
    brush.vertex(cx + d * 190, cy + e * 190);
    brush.vertex(cx + d * 110 + p * 60, cy + e * 110 + q * 60);
    brush.endShape(true);
  }
  // burgundy-brown eye
  brush.fill("#7a2e22", 220);
  brush.fillBleed(0.25, "out");
  brush.fillTexture(0.6, 0.6);
  brush.circle(cx, cy, 60, true);
  // staminal column reaching up-right
  brush.fill("#b9923a", 220);
  brush.fillBleed(0.05, "out");
  brush.beginShape(0.3);
  brush.vertex(cx - 4, cy); brush.vertex(cx + 90, cy - 130); brush.vertex(cx + 98, cy - 124); brush.vertex(cx + 6, cy + 4);
  brush.endShape(true);
  brush.fill("#d7a93f", 230);
  for (let i = 0; i < 16; i++) {
    let t = random(0.55, 1);
    brush.circle(cx + 90 * t + random(-10, 10), cy - 130 * t + random(-10, 10), 5, true);
  }
  brush.fill("#8a2a1f", 230);
  brush.circle(cx + 100, cy - 140, 8, true);
}
