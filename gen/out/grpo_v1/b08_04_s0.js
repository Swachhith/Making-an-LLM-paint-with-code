async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf6e6");
  brush.noStroke();
  // sky: loose blooms of blue and violet, drips down the side
  brush.fill("#7aa8e0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(450, 320); brush.vertex(300, 280); brush.vertex(-20, 330);
  brush.endShape(true);
  brush.fill("#9a7fd8", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 150); brush.vertex(250, 120); brush.vertex(380, 200); brush.vertex(620, 180); brush.vertex(620, 400); brush.vertex(-20, 420);
  brush.endShape(true);
  brush.fill("#e088c8", 150);
  brush.beginShape(0.6);
  brush.vertex(300, 30); brush.vertex(420, 60); brush.vertex(520, 30); brush.vertex(480, 60);
  brush.endShape(true);
  // sea: teal wash, splashed with white foam
  brush.fill("#1f8a8a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6fd8c8", 160);
  brush.beginShape(0.6);
  brush.vertex(200, 450); brush.vertex(500, 440); brush.vertex(520, 490); brush.vertex(300, 500); brush.vertex(250, 470);
  brush.endShape(true);
  // figure walking right, small because lots of empty space
  brush.fill("#2a1f3e", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(460, 480); brush.vertex(480, 470); brush.vertex(495, 485); brush.vertex(480, 500); brush.vertex(465, 488);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(460, 495); brush.vertex(472, 490); brush.vertex(484, 498); brush.vertex(475, 510); brush.vertex(462, 504);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(458, 492); brush.vertex(448, 482); brush.vertex(436, 492); brush.vertex(444, 502); brush.vertex(456, 494);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(462, 494); brush.vertex(454, 484); brush.vertex(442, 494); brush.vertex(450, 504); brush.vertex(462, 496);
  brush.endShape(true);
  // footprints
  brush.fill("#2a1f3e", 190);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(360, 540); brush.vertex(382, 530); brush.vertex(404, 540); brush.vertex(392, 552); brush.vertex(370, 542);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(410, 545); brush.vertex(432, 535); brush.vertex(454, 545); brush.vertex(442, 557); brush.vertex(420, 547);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(440, 550); brush.vertex(462, 540); brush.vertex(484, 550); brush.vertex(472, 562); brush.vertex(450, 552);
  brush.endShape(true);
  // a splash of orange at the figure's feet
  brush.fill("#f28a2a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(450, 500); brush.vertex(470, 510); brush.vertex(455, 525); brush.vertex(435, 515);
  brush.endShape(true);
  // drips of colour running down the right edge
  brush.fill("#e088c8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(620, 300); brush.vertex(620, 350); brush.vertex(590, 400); brush.vertex(620, 450); brush.vertex(620, 500); brush.vertex(620, 550); brush.vertex(620, 620); brush.vertex(600, 620); brush.vertex(600, 550); brush.vertex(620, 500);
  brush.endShape(true);
  brush.fill("#7aa8e0", 160);
  brush.beginShape(0.8);
  brush.vertex(620, 150); brush.vertex(620, 200); brush.vertex(580, 250); brush.vertex(620, 300); brush.vertex(620, 250); brush.vertex(620, 200);
  brush.endShape(true);
  brush.fill("#f28a2a", 160);
  brush.beginShape(0.8);
  brush.vertex(620, 400); brush.vertex(620, 450); brush.vertex(570, 500); brush.vertex(620, 550); brush.vertex(620, 450); brush.vertex(620, 400);
  brush.endShape(true);
}
