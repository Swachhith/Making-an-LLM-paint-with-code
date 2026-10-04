async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe8da");
  brush.noStroke();
  // big muted sky
  brush.fill("#b8b4a4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 440); brush.vertex(-20, 440);
  brush.endShape(true);
  // clouds: ochre-grey banks
  brush.fill("#8d8778", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.8);
  brush.vertex(40, 180); brush.vertex(120, 130); brush.vertex(240, 150); brush.vertex(330, 120);
  brush.vertex(440, 160); brush.vertex(400, 210); brush.vertex(200, 220); brush.vertex(60, 215);
  brush.endShape(true);
  brush.fill("#d4b98a", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(300, 300); brush.vertex(420, 270); brush.vertex(560, 290); brush.vertex(600, 330); brush.vertex(420, 345); brush.vertex(320, 335);
  brush.endShape(true);
  // distant hills low
  brush.fill("#7a7a62", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 430); brush.vertex(100, 405); brush.vertex(220, 425); brush.vertex(350, 400); brush.vertex(480, 420); brush.vertex(620, 405);
  brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  // valley floor
  brush.fill("#8a7a4a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 455); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#5a4e30", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 530); brush.vertex(200, 520); brush.vertex(620, 560); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // winding river, narrowing to horizon, left mostly paper-pale with a blue-grey tint
  brush.fill("#9fb0b4", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(330, 455); brush.vertex(350, 455); brush.vertex(300, 475); brush.vertex(420, 505);
  brush.vertex(230, 560); brush.vertex(380, 620); brush.vertex(200, 620); brush.vertex(120, 560);
  brush.vertex(330, 505); brush.vertex(240, 475);
  brush.endShape(true);
  // tree clumps
  let trees = [[90, 450, 18], [480, 448, 14], [560, 470, 22], [150, 500, 26]];
  for (let t of trees) {
    brush.fill("#4a4a2c", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.4);
    brush.circle(t[0], t[1], t[2], 0.8);
    brush.fill("#2e2e1c", 200);
    brush.circle(t[0] + 4, t[1] + 4, t[2] * 0.6, 0.7);
  }
}
