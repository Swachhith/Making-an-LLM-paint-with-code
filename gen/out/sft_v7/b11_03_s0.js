async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3e0");
  brush.noStroke();
  // sky: magenta to orange, then a blue band
  brush.fill("#d9207a", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(-20, 240);
  brush.endShape(true);
  brush.fill("#f77a1a", 215);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 150); brush.vertex(620, 130); brush.vertex(620, 300); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#1e60c8", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 260); brush.vertex(620, 250); brush.vertex(620, 420); brush.vertex(-20, 430);
  brush.endShape(true);
  // sun low left, huge, with a halo
  brush.fill("#ffb300", 250);
  brush.fillBleed(0.2);
  brush.circle(150, 320, 70, 0.3);
  brush.fill("#fff2b0", 230);
  brush.fillBleed(0.25);
  brush.circle(150, 320, 100, 0.3);
  // orange glow band
  brush.fill("#ff6a00", 225);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(130, 320); brush.vertex(190, 300); brush.vertex(260, 315); brush.vertex(340, 330); brush.vertex(340, 400); brush.vertex(130, 400);
  brush.endShape(true);
  // far hills
  brush.fill("#e04a1a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 330); brush.vertex(150, 310); brush.vertex(300, 340); brush.vertex(620, 320); brush.vertex(620, 440); brush.vertex(-20, 440);
  brush.endShape(true);
  // desert floor
  brush.fill("#c85a00", 220);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 440); brush.vertex(620, 440); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // cactus: three stems, layered
  let cx = 430, cy = 490;
  let stems = [[-30, 0.3], [0, 0.45], [30, 0.3]];
  for (let s of stems) {
    let w = 14 * s[1];
    brush.fill("#3a8a2a", 225);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(cx - w, cy);
    brush.vertex(cx - w * 0.4, cy - 60);
    brush.vertex(cx + s[0] * w * 0.7, cy - 130);
    brush.vertex(cx + s[0] * w, cy - 210);
    brush.vertex(cx + s[0] * w * 0.4, cy - 140);
    brush.vertex(cx + w * 0.4, cy - 60);
    brush.vertex(cx + w, cy);
    brush.endShape(true);
  }
  // spines
  for (let i = 0; i < 20; i++) {
    let t = (i * 360) / 20;
    let x = cx + cos(t) * 50, y = cy + sin(t) * 50;
    brush.fill("#5aa04a", 200);
    brush.fillBleed(0.1);
    brush.beginShape(0.4);
    brush.vertex(x - 3, y); brush.vertex(x + 3, y); brush.vertex(x + cos(t + 90) * 6, y - 6); brush.vertex(x + cos(t - 90) * 6, y + 6);
    brush.endShape(true);
  }
  // shadow
  brush.fill("#8a3a0a", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(370, 500); brush.vertex(430, 490); brush.vertex(490, 500); brush.vertex(490, 540); brush.vertex(370, 540);
  brush.endShape(true);
}
