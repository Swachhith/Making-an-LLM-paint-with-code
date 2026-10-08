async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf8e6");
  brush.noStroke();
  // bold sky: deep indigo
  brush.fill("#2a3a9a", 235);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 160); brush.vertex(470, 200); brush.vertex(350, 150); brush.vertex(220, 210); brush.vertex(70, 160); brush.vertex(-20, 200);
  brush.endShape(true);
  // warm sunlit clouds
  brush.fill("#f2c06a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(200, 120); brush.vertex(320, 90); brush.vertex(440, 120); brush.vertex(420, 170); brush.vertex(300, 160); brush.vertex(180, 130);
  brush.endShape(true);
  // far ridges: burnt orange
  brush.fill("#d85a1c", 225);
  brush.fillBleed(0.28);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 230); brush.vertex(120, 190); brush.vertex(250, 235); brush.vertex(370, 210); brush.vertex(500, 250); brush.vertex(620, 220); brush.vertex(620, 320); brush.vertex(0, 320);
  brush.endShape(true);
  // near mountains: emerald
  brush.fill("#1f7a4a", 235);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 270); brush.vertex(150, 230); brush.vertex(300, 260); brush.vertex(460, 240); brush.vertex(620, 270); brush.vertex(620, 320); brush.vertex(0, 320);
  brush.endShape(true);
  // autumn meadows: layered bands of gold, crimson, magenta
  brush.fill("#e86a2a", 235);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 320); brush.vertex(620, 320); brush.vertex(620, 380); brush.vertex(300, 390); brush.vertex(0, 380);
  brush.endShape(true);
  brush.fill("#b81e5a", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 380); brush.vertex(620, 380); brush.vertex(620, 440); brush.vertex(400, 450); brush.vertex(0, 440);
  brush.endShape(true);
  brush.fill("#e09a2a", 225);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 440); brush.vertex(620, 440); brush.vertex(620, 500); brush.vertex(620, 520); brush.vertex(0, 520);
  brush.endShape(true);
  // meandering river
  brush.fill("#1f4a6a", 240);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 520); brush.vertex(120, 490); brush.vertex(260, 525); brush.vertex(420, 500); brush.vertex(560, 522); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(0, 620);
  brush.endShape(true);
  // sun on the far ridge
  brush.fill("#ffd04a", 255);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(400, 100, 30, 0.3);
  brush.fill("#ffd04a", 255);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(400, 100, 16, 0.3);
  // silhouettes: pines and a lone tree
  brush.fill("#0e1a3a", 255);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(40, 320); brush.vertex(40, 230); brush.vertex(70, 230); brush.vertex(70, 320);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(130, 320); brush.vertex(130, 240); brush.vertex(160, 240); brush.vertex(160, 320);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(210, 320); brush.vertex(210, 220); brush.vertex(240, 220); brush.vertex(240, 320);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(290, 320); brush.vertex(290, 250); brush.vertex(320, 250); brush.vertex(320, 320);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(370, 320); brush.vertex(370, 270); brush.vertex(400, 270); brush.vertex(400, 320);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(500, 320); brush.vertex(500, 240); brush.vertex(530, 240); brush.vertex(530, 320);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(570, 320); brush.vertex(570, 260); brush.vertex(595, 260); brush.vertex(595, 320);
  brush.endShape(true);
  // a tall oak on the right bank
  brush.fill("#0e1a3a", 255);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(420, 320); brush.vertex(420, 250); brush.vertex(450, 250); brush.vertex(450, 320);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(440, 250); brush.vertex(455, 210); brush.vertex(470, 250); brush.vertex(455, 290);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(440, 250); brush.vertex(425, 210); brush.vertex(410, 250); brush.vertex(425, 290);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(440, 250); brush.vertex(445, 200); brush.vertex(455, 250); brush.vertex(445, 290);
  brush.endShape(true);
  // tall grasses along the bank
  brush.fill("#b81e5a", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  for (let i = 0; i < 40; i++) {
    brush.beginShape(0.5);
    brush.vertex(380 + i * 11, 510); brush.vertex(385 + i * 11, 470 + i * 3); brush.vertex(400 + i * 11, 510);
    brush.endShape(true);
  }
}
