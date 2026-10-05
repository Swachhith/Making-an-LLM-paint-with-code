async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f6");
  brush.noStroke();

  // far shore, misty green, pale
  brush.fill("#a8c4b8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 180); brush.vertex(620, 175); brush.vertex(620, 260); brush.vertex(300, 265); brush.vertex(-20, 270);
  brush.endShape(true);
  brush.fill("#8aa8c4", 150);
  brush.beginShape(0.5);
  brush.vertex(-20, 230); brush.vertex(620, 220); brush.vertex(620, 290); brush.vertex(300, 295); brush.vertex(-20, 300);
  brush.endShape(true);

  // mid reeds, soft blue-green
  brush.fill("#6f8f9a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 320); brush.vertex(200, 300); brush.vertex(420, 320); brush.vertex(620, 300); brush.vertex(620, 370); brush.vertex(420, 370); brush.vertex(200, 360); brush.vertex(-20, 380);
  brush.endShape(true);

  // lake, pale teal, wide
  brush.fill("#9cc7b8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, 380); brush.vertex(620, 375); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#7fb8a8", 170);
  brush.beginShape(0.7);
  brush.vertex(-20, 450); brush.vertex(620, 440); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#b9d8c8", 160);
  brush.beginShape(0.7);
  brush.vertex(-20, 520); brush.vertex(620, 510); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // foreground reeds, pale ochre
  brush.fill("#c9b08a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 560); brush.vertex(150, 540); brush.vertex(300, 565); brush.vertex(460, 545); brush.vertex(620, 560); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#b09074", 160);
  brush.beginShape(0.6);
  brush.vertex(-20, 600); brush.vertex(200, 585); brush.vertex(620, 600); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
