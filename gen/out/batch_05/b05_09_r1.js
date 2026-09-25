async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6dccd");
  brush.noStroke();
  // muted umber ground around the cup
  brush.fill("#a89478", 180);
  brush.fillBleed(0.5);
  brush.fillTexture(0.6, 0.3);
  brush.beginShape(0.9);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // stem stub at the bottom
  brush.fill("#6f7650", 225);
  brush.fillBleed(0.08);
  brush.beginShape(0.5);
  brush.vertex(285, 530); brush.vertex(315, 530); brush.vertex(322, 600); brush.vertex(280, 600);
  brush.endShape(true);
  // back petals: dusty mauve shadow inside the cup
  brush.fill("#a87873", 205);
  brush.fillBleed(0.25);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.85);
  brush.vertex(300, 520); brush.vertex(120, 400); brush.vertex(90, 190);
  brush.vertex(150, 50); brush.vertex(300, 120); brush.vertex(450, 45);
  brush.vertex(515, 190); brush.vertex(480, 400);
  brush.endShape(true);
  // left front petal
  brush.fill("#e0b0a6", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.85);
  brush.vertex(300, 545); brush.vertex(150, 460); brush.vertex(100, 300);
  brush.vertex(125, 130); brush.vertex(190, 85); brush.vertex(250, 210); brush.vertex(285, 400);
  brush.endShape(true);
  // right front petal
  brush.fill("#d8a59c", 215);
  brush.beginShape(0.85);
  brush.vertex(300, 545); brush.vertex(450, 460); brush.vertex(505, 300);
  brush.vertex(478, 130); brush.vertex(410, 85); brush.vertex(350, 210); brush.vertex(315, 400);
  brush.endShape(true);
  // centre front petal
  brush.fill("#eac0b6", 220);
  brush.fillBleed(0.18);
  brush.beginShape(0.9);
  brush.vertex(300, 550); brush.vertex(205, 450); brush.vertex(185, 280);
  brush.vertex(230, 140); brush.vertex(300, 90); brush.vertex(370, 140);
  brush.vertex(415, 280); brush.vertex(395, 450);
  brush.endShape(true);
  // grey-mauve shade down each overlap, pooling at the bottom
  brush.fill("#8e6560", 195);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(210, 440); brush.vertex(188, 290); brush.vertex(222, 380); brush.vertex(262, 525);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(390, 440); brush.vertex(412, 290); brush.vertex(378, 380); brush.vertex(338, 525);
  brush.endShape(true);
  // pink-rose veining on the centre petal
  brush.fill("#d4948c", 180);
  brush.fillBleed(0.12);
  brush.beginShape(0.9);
  brush.vertex(300, 520); brush.vertex(270, 360); brush.vertex(285, 200); brush.vertex(292, 360);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(305, 520); brush.vertex(335, 360); brush.vertex(320, 220); brush.vertex(315, 360);
  brush.endShape(true);
  // ochre base
  brush.fill("#b98f55", 195);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(240, 505); brush.vertex(300, 465); brush.vertex(360, 505); brush.vertex(300, 555);
  brush.endShape(true);
}
