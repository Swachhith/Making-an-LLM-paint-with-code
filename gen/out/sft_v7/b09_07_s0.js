async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf2e4");
  brush.noStroke();

  // sky: deep cerulean, two passes
  brush.fill("#2f7fb8", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 120); brush.vertex(-20, 150);
  brush.endShape(true);
  brush.fill("#1e5fa8", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 80); brush.vertex(620, 70); brush.vertex(620, 200); brush.vertex(-20, 220);
  brush.endShape(true);

  // distant ridge across the sky
  brush.fill("#4a3a8a", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(-20, 120); brush.vertex(100, 90); brush.vertex(250, 110); brush.vertex(400, 85); brush.vertex(620, 115);
  brush.vertex(620, 130); brush.vertex(-20, 130);
  brush.endShape(true);

  // valley floor: low, wide, a band of burnt orange
  brush.fill("#d96a1a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 380); brush.vertex(620, 380); brush.vertex(620, 460); brush.vertex(-20, 460);
  brush.endShape(true);
  brush.fill("#b0380a", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 410); brush.vertex(620, 410); brush.vertex(620, 460); brush.vertex(-20, 460);
  brush.endShape(true);

  // left mountain: jagged, deep crimson
  brush.fill("#8a1a3a", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 220); brush.vertex(150, 170); brush.vertex(300, 140); brush.vertex(420, 160); brush.vertex(550, 200); brush.vertex(620, 230);
  brush.vertex(620, 380); brush.vertex(-20, 380);
  brush.endShape(true);
  brush.fill("#5a0a2a", 180);
  brush.beginShape(0.4);
  brush.vertex(-20, 260); brush.vertex(150, 220); brush.vertex(300, 200); brush.vertex(420, 230); brush.vertex(620, 270);
  brush.vertex(620, 380); brush.vertex(-20, 380);
  brush.endShape(true);

  // right mountain: layered, ochre and magenta
  brush.fill("#c95a1a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(300, 230); brush.vertex(470, 180); brush.vertex(620, 140); brush.vertex(620, 380); brush.vertex(300, 380);
  brush.endShape(true);
  brush.fill("#9a1a5a", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(300, 270); brush.vertex(470, 220); brush.vertex(620, 190); brush.vertex(620, 380); brush.vertex(300, 380);
  brush.endShape(true);

  // valley river, ribbon of teal
  brush.fill("#1f7a7a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(-20, 440); brush.vertex(150, 420); brush.vertex(300, 450); brush.vertex(470, 425); brush.vertex(620, 440);
  brush.vertex(620, 450); brush.vertex(300, 465); brush.vertex(150, 445);
  brush.endShape(true);
  // autumn trees along the river
  brush.fill("#b0380a", 200);
  brush.fillBleed(0.2);
  brush.circle(250, 425, 14, 0.5);
  brush.circle(470, 430, 12, 0.5);
  brush.circle(100, 440, 10, 0.5);
  brush.circle(520, 445, 11, 0.5);
  // distant village, warm dots
  brush.fill("#e08a1a", 210);
  brush.fillBleed(0.1);
  brush.circle(200, 455, 4, 0.3);
  brush.circle(220, 455, 4, 0.3);
  brush.circle(235, 455, 4, 0.3);
  brush.circle(400, 455, 4, 0.3);
  brush.circle(415, 455, 4, 0.3);
}
