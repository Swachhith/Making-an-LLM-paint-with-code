async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4e8");
  randomSeed(1003);
  brush.noStroke();

  // warm light washes behind the bloom: warm sky and a warm ground
  brush.fill("#f2c27a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#e9b06e", 150);
  brush.beginShape(0.6);
  brush.vertex(-20, 320); brush.vertex(620, 300); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stem and leaves, painted first as the palest pass
  brush.fill("#5f8a4a", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(295, 500); brush.vertex(305, 500); brush.vertex(312, 380); brush.vertex(290, 380);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(300, 500); brush.vertex(310, 500); brush.vertex(318, 380); brush.vertex(300, 380);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(292, 490); brush.vertex(270, 420); brush.vertex(240, 370); brush.vertex(220, 370); brush.vertex(238, 420); brush.vertex(262, 490);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(308, 490); brush.vertex(330, 420); brush.vertex(360, 370); brush.vertex(380, 370); brush.vertex(362, 420); brush.vertex(338, 490);
  brush.endShape(true);

  // golden fall (outer petals), two big passes
  brush.fill("#f2b02a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(300, 200); brush.vertex(470, 100); brush.vertex(560, 170); brush.vertex(530, 330); brush.vertex(430, 330); brush.vertex(370, 270);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(300, 200); brush.vertex(370, 270); brush.vertex(430, 330); brush.vertex(530, 330); brush.vertex(560, 170); brush.vertex(470, 100);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(300, 200); brush.vertex(130, 100); brush.vertex(40, 170); brush.vertex(70, 330); brush.vertex(170, 330); brush.vertex(230, 270);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(300, 200); brush.vertex(230, 270); brush.vertex(170, 330); brush.vertex(70, 330); brush.vertex(40, 170); brush.vertex(130, 100);
  brush.endShape(true);
  // deeper blue near the throat
  brush.fill("#3a5fa0", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(300, 200); brush.vertex(430, 330); brush.vertex(370, 270); brush.vertex(230, 270); brush.vertex(170, 330);
  brush.endShape(true);

  // blue hood (upper petal)
  brush.fill("#2a5fb0", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  brush.vertex(300, 200); brush.vertex(470, 100); brush.vertex(420, 150); brush.vertex(300, 130); brush.vertex(180, 150); brush.vertex(130, 100);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(300, 200); brush.vertex(130, 100); brush.vertex(180, 150); brush.vertex(300, 130); brush.vertex(420, 150); brush.vertex(470, 100);
  brush.endShape(true);

  // yellow throat and yellow markings
  brush.fill("#ffd23a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(300, 200); brush.vertex(430, 330); brush.vertex(370, 270); brush.vertex(230, 270); brush.vertex(170, 330); brush.vertex(300, 220);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(300, 200); brush.vertex(170, 330); brush.vertex(230, 270); brush.vertex(300, 220); brush.vertex(370, 270); brush.vertex(430, 330);
  brush.endShape(true);
  brush.fill("#e8a01a", 200);
  brush.fillBleed(0.2);
  brush.circle(300, 220, 50, 0.5);
  brush.fill("#b0700a", 170);
  brush.fillBleed(0.2);
  brush.circle(300, 220, 28, 0.5);
  brush.fill("#ffd23a", 230);
  brush.circle(300, 220, 14, 0.3);

  // blue lip (lower petal)
  brush.fill("#2a5fb0", 215);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(300, 270); brush.vertex(170, 330); brush.vertex(70, 330); brush.vertex(40, 170); brush.vertex(130, 100); brush.vertex(300, 130); brush.vertex(470, 100); brush.vertex(560, 170); brush.vertex(530, 330); brush.vertex(430, 330); brush.vertex(370, 270);
  brush.endShape(true);
  brush.fill("#ffd23a", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(300, 270); brush.vertex(170, 330); brush.vertex(300, 300); brush.vertex(370, 270); brush.vertex(430, 330); brush.vertex(530, 330); brush.vertex(560, 170); brush.vertex(470, 100); brush.vertex(300, 130);
  brush.endShape(true);
  brush.fill("#e8a01a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(300, 270); brush.vertex(170, 330); brush.vertex(300, 300); brush.vertex(370, 270); brush.vertex(430, 330); brush.vertex(530, 330); brush.vertex(560, 170); brush.vertex(470, 100); brush.vertex(300, 130);
  brush.endShape(true);
  brush.fill("#b0700a", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(300, 270); brush.vertex(170, 330); brush.vertex(300, 300); brush.vertex(370, 270); brush.vertex(430, 330); brush.vertex(530, 330); brush.vertex(560, 170); brush.vertex(470, 100); brush.vertex(300, 130);
  brush.endShape(true);
}
