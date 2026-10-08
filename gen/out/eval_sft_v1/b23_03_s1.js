async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef4f6");
  randomSeed(1111);
  brush.noStroke();

  // sky: layered blue-grey clouds, high horizon
  brush.fill("#b7c7e0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150); brush.vertex(460, 180); brush.vertex(300, 150); brush.vertex(120, 170); brush.vertex(-20, 140);
  brush.endShape(true);
  brush.fill("#8fa0c0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-20, 150); brush.vertex(200, 130); brush.vertex(420, 155); brush.vertex(620, 140); brush.vertex(620, 260); brush.vertex(470, 260); brush.vertex(310, 250); brush.vertex(150, 265); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#9aa8d4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(-20, 260); brush.vertex(220, 240); brush.vertex(380, 260); brush.vertex(620, 245); brush.vertex(620, 350); brush.vertex(480, 350); brush.vertex(330, 340); brush.vertex(180, 355); brush.vertex(-20, 340);
  brush.endShape(true);

  // rolling green hills, cool light, two passes each
  let hills = [[200, 200, 100, 10], [420, 230, 120, 12], [100, 320, 80, 8], [300, 340, 100, 10], [520, 310, 90, 9]];
  for (let pass = 0; pass < 2; pass++) {
    for (let h of hills) {
      brush.fill("#5f9a7a", 215);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.6);
      brush.vertex(h[0] - 10, h[2] + 5);
      for (let x = h[0] - 10; x <= h[0] + h[3]; x += 7) {
        brush.vertex(x, h[2] + 6 + sin(x * 0.015 + pass * 0.3) * 4);
      }
      brush.vertex(h[0] + h[3] + 10, h[2] + 5);
      brush.vertex(h[0] + h[3] + 10, 360);
      brush.vertex(h[0] - 10, 360);
      brush.endShape(true);
    }
  }
  // second pass, deeper, with shadow on the far side
  for (let h of hills) {
    brush.fill("#3e725a", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(h[0] + 8, h[2] + 8);
    for (let x = h[0] + 8; x <= h[0] + h[3]; x += 7) {
      brush.vertex(x, h[2] + 10 + sin(x * 0.015 + 1) * 4);
    }
    brush.vertex(h[0] + h[3] + 12, h[2] + 8);
    brush.vertex(h[0] + h[3] + 12, 360);
    brush.vertex(h[0] + 8, 360);
    brush.endShape(true);
  }
  // shadow cast on the near hill
  brush.fill("#2f5f4a", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(220, 330); brush.vertex(320, 345); brush.vertex(420, 335); brush.vertex(520, 350); brush.vertex(520, 360); brush.vertex(220, 360);
  brush.endShape(true);
}
