async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8d8c8");
  brush.noStroke();

  // dusky sky: violet above, orange below
  brush.fill("#a88fb8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#f2b878", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(-20, 200); brush.vertex(620, 190); brush.vertex(620, 400); brush.vertex(-20, 410);
  brush.endShape(true);

  // far tree line in silhouette
  brush.fill("#3e2f38", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(-20, 410); brush.vertex(120, 360); brush.vertex(180, 400); brush.vertex(260, 350);
  brush.vertex(340, 400); brush.vertex(420, 350); brush.vertex(500, 400); brush.vertex(620, 360); brush.vertex(620, 410);
  brush.endShape(true);

  // field: warm ochre, darker near the tree
  brush.fill("#d9b87a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 410); brush.vertex(620, 400); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#9a7a4a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 450); brush.vertex(620, 440); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // baobab trunk, thick and bulbous, curving slightly
  brush.fill("#5a3a28", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(260, 400); brush.vertex(250, 230); brush.vertex(240, 130); brush.vertex(256, 128); brush.vertex(266, 230); brush.vertex(276, 400);
  brush.endShape(true);
  brush.fill("#3a241a", 215);
  brush.beginShape(0.1);
  brush.vertex(252, 240); brush.vertex(242, 140); brush.vertex(258, 138); brush.vertex(268, 240);
  brush.endShape(true);
  // crown: a wide, rounded dome with loose lobes
  brush.fill("#6f5038", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(256, 130); brush.vertex(200, 100); brush.vertex(130, 150); brush.vertex(120, 210); brush.vertex(170, 260); brush.vertex(256, 245);
  brush.vertex(330, 260); brush.vertex(380, 210); brush.vertex(430, 160); brush.vertex(500, 110); brush.vertex(440, 100); brush.vertex(370, 130);
  brush.endShape(true);
  brush.fill("#4a3020", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(256, 145); brush.vertex(200, 115); brush.vertex(150, 170); brush.vertex(190, 220); brush.vertex(256, 215);
  brush.vertex(300, 220); brush.vertex(350, 170); brush.vertex(400, 115); brush.vertex(256, 150);
  brush.endShape(true);
  // a few branches reaching out
  brush.fill("#4a3020", 200);
  brush.beginShape(0.3);
  brush.vertex(256, 160); brush.vertex(210, 130); brush.vertex(160, 150); brush.vertex(220, 170);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(256, 160); brush.vertex(300, 130); brush.vertex(350, 150); brush.vertex(290, 170);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(256, 160); brush.vertex(320, 130); brush.vertex(370, 150); brush.vertex(330, 170);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(256, 160); brush.vertex(200, 140); brush.vertex(150, 160); brush.vertex(210, 175);
  brush.endShape(true);
}
