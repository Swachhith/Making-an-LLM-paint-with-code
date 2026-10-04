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

  // a thin ochre ground wash sweeping low across the page
  brush.fill("#c2a878", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(200, 455); brush.vertex(420, 462); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8f8a5c", 160);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(300, 480); brush.vertex(620, 470); brush.vertex(620, 560); brush.vertex(380, 540);
  brush.endShape(true);

  // the tree on the right edge, trunk leaning in
  brush.fill("#5e4a3a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(470, 490); brush.vertex(505, 492); brush.vertex(498, 380); brush.vertex(510, 260); brush.vertex(485, 258); brush.vertex(474, 380);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(482, 330); brush.vertex(430, 270); brush.vertex(418, 282); brush.vertex(474, 350);
  brush.endShape(true);

  // canopy in olive and umber, two passes, spilling off the top
  brush.fill("#7d8250", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.9);
  brush.vertex(340, 250); brush.vertex(360, 150); brush.vertex(440, 70); brush.vertex(560, 60); brush.vertex(630, 120); brush.vertex(630, 300); brush.vertex(520, 310); brush.vertex(420, 300);
  brush.endShape(true);
  brush.fill("#566036", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.9);
  brush.vertex(400, 260); brush.vertex(420, 170); brush.vertex(500, 120); brush.vertex(600, 140); brush.vertex(620, 250); brush.vertex(540, 285);
  brush.endShape(true);
  brush.fill("#a38a52", 170);
  brush.fillBleed(0.25);
  brush.circle(390, 200, 30, 0.6);
  brush.circle(460, 110, 26, 0.6);

  // shade pool beneath the canopy
  brush.fill("#6e6a45", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(360, 492); brush.vertex(600, 480); brush.vertex(620, 520); brush.vertex(390, 520);
  brush.endShape(true);

  // the reader, seated against the trunk, knees up
  brush.fill("#8b5a3c", 220); // rust jumper
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(448, 420); brush.vertex(475, 418); brush.vertex(480, 470); brush.vertex(446, 474);
  brush.endShape(true);
  brush.fill("#4a4a52", 220); // trousers, knees raised
  brush.beginShape(0.4);
  brush.vertex(446, 470); brush.vertex(420, 440); brush.vertex(404, 446); brush.vertex(410, 488); brush.vertex(470, 490);
  brush.endShape(true);
  brush.fill("#d9c49c", 230); // open book on knees
  brush.fillBleed(0.15);
  brush.beginShape(0.2);
  brush.vertex(418, 432); brush.vertex(446, 424); brush.vertex(448, 444); brush.vertex(420, 450);
  brush.endShape(true);
  brush.fill("#c99a7a", 230); // head bent down
  brush.fillBleed(0.15);
  brush.circle(458, 408, 11, 0.3);
  brush.fill("#3e2e26", 210); // hair
  brush.circle(462, 403, 9, 0.4);
}
