async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f1ec");
  randomSeed(41);

  // bold violet ground, pooled darker at the top right
  brush.noStroke();
  brush.fill("#5b2a86", 190);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(20, 30); brush.vertex(580, 15); brush.vertex(590, 420);
  brush.vertex(420, 520); brush.vertex(160, 560); brush.vertex(15, 380);
  brush.endShape(true);
  brush.fill("#2d1a5e", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(330, 20); brush.vertex(585, 30); brush.vertex(570, 260); brush.vertex(420, 150);
  brush.endShape(true);

  // arching stem
  brush.fill("#2f6b2a", 220);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.2);
  brush.beginShape(0.8);
  brush.vertex(90, 590); brush.vertex(120, 380); brush.vertex(220, 250); brush.vertex(300, 240);
  brush.vertex(300, 250); brush.vertex(228, 262); brush.vertex(132, 385); brush.vertex(104, 590);
  brush.endShape(true);

  // side-on bloom: dorsal sepal up, petals swept back, lip forward
  // back petal (foreshortened, seen edge-on)
  brush.fill("#fbf7ff", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.2, 0.5);
  brush.beginShape(0.9);
  brush.vertex(300, 250); brush.vertex(250, 170); brush.vertex(275, 110); brush.vertex(330, 150); brush.vertex(335, 240);
  brush.endShape(true);
  // big lateral petal, curving toward the viewer
  brush.beginShape(0.9);
  brush.vertex(310, 255); brush.vertex(380, 150); brush.vertex(470, 170); brush.vertex(480, 260); brush.vertex(400, 310);
  brush.endShape(true);
  brush.fill("#ffffff", 240);
  brush.fillBleed(0.08);
  brush.beginShape(0.9);
  brush.vertex(330, 250); brush.vertex(390, 180); brush.vertex(455, 195); brush.vertex(455, 255); brush.vertex(395, 290);
  brush.endShape(true);
  // lower sepals hanging
  brush.fill("#f3eefc", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(315, 275); brush.vertex(370, 330); brush.vertex(360, 410); brush.vertex(320, 380); brush.vertex(300, 300);
  brush.endShape(true);

  // shading on white: cool lilac shadow where petals overlap
  brush.fill("#b9a4e0", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(305, 250); brush.vertex(340, 235); brush.vertex(360, 290); brush.vertex(318, 300);
  brush.endShape(true);

  // magenta lip thrust forward
  brush.fill("#c2186b", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  brush.vertex(330, 265); brush.vertex(385, 255); brush.vertex(420, 290); brush.vertex(385, 320); brush.vertex(345, 300);
  brush.endShape(true);
  brush.fill("#8a0f4a", 220);
  brush.fillBleed(0.1);
  brush.beginShape(0.8);
  brush.vertex(345, 275); brush.vertex(380, 270); brush.vertex(398, 292); brush.vertex(370, 303);
  brush.endShape(true);
  // yellow callus
  brush.fill("#ffc21a", 235);
  brush.fillBleed(0.05);
  brush.circle(342, 268, 9, 0.4);

  // a second bud further up the stem
  brush.fill("#efe8fa", 225);
  brush.fillBleed(0.2);
  brush.circle(210, 262, 22, 0.5);
  brush.fill("#a28bd0", 150);
  brush.circle(205, 270, 12, 0.5);
  brush.fill("#e9e3f7", 220);
  brush.circle(160, 312, 14, 0.5);
}
