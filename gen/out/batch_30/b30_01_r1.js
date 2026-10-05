async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efdf");
  brush.noStroke(); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  // splashy sky: overlapping blooms past the edges
  brush.fill("#5a9ed0", 170);
  brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,330); brush.vertex(300,290); brush.vertex(-60,340); brush.endShape(true);
  brush.fill("#e48a5a", 150); brush.beginShape(0.9); brush.vertex(-20,40); brush.vertex(280,10); brush.vertex(320,190); brush.vertex(60,230); brush.endShape(true);
  brush.fill("#9a78c8", 150); brush.circle(110,110,70,1.5);
  brush.fill("#2f7fc0", 170); brush.circle(480,70,60,1.5);
  brush.fill("#f0c860", 140); brush.circle(250,250,45,1.5);
  // crown, three passes
  brush.fill("#4a9a50", 170); brush.beginShape(0.9); brush.vertex(290,320); brush.vertex(350,180); brush.vertex(470,130); brush.vertex(590,190); brush.vertex(620,330); brush.vertex(530,420); brush.vertex(370,410); brush.endShape(true);
  brush.fill("#1f6a3a", 200); brush.circle(440,260,80,1.4); brush.circle(540,320,65,1.4); brush.circle(380,330,50,1.4);
  brush.fill("#a8c840", 170); brush.circle(400,215,50,1.4); brush.circle(500,190,40,1.4);
  brush.fill("#0f4a2a", 190); brush.circle(470,340,45,1.4);
  // trunk
  brush.fill("#6b4a30", 220); brush.beginShape(0.3); brush.vertex(430,610); brush.vertex(448,380); brush.vertex(505,380); brush.vertex(535,610); brush.endShape(true);
  brush.fill("#3a2416", 200); brush.beginShape(0.3); brush.vertex(480,610); brush.vertex(480,400); brush.vertex(508,400); brush.vertex(520,610); brush.endShape(true);
  brush.fill("#6b4a30", 210); brush.beginShape(0.3); brush.vertex(290,420); brush.vertex(290,385); brush.vertex(460,415); brush.vertex(460,455); brush.endShape(true);
  // platform
  brush.fill("#4a3020", 220); brush.beginShape(0.1); brush.vertex(305,392); brush.vertex(445,392); brush.vertex(445,410); brush.vertex(305,410); brush.endShape(true);
  // house
  brush.fill("#d8944a", 225); brush.beginShape(0.2); brush.vertex(330,300); brush.vertex(440,300); brush.vertex(440,395); brush.vertex(330,395); brush.endShape(true);
  brush.fill("#a85a28", 200); brush.beginShape(0.2); brush.vertex(390,300); brush.vertex(440,300); brush.vertex(440,395); brush.vertex(390,395); brush.endShape(true);
  brush.fill("#b8402a", 230); brush.beginShape(0.2); brush.vertex(310,306); brush.vertex(385,236); brush.vertex(460,306); brush.endShape(true);
  brush.fill("#7a2418", 210); brush.beginShape(0.2); brush.vertex(385,236); brush.vertex(460,306); brush.vertex(385,306); brush.endShape(true);
  brush.fill("#f6dc80", 215); brush.circle(360,348,14,1);
  // drips of colour from the left
  brush.fill("#e0407a", 180); brush.beginShape(0.5); brush.vertex(100,360); brush.vertex(120,360); brush.vertex(120,500); brush.vertex(100,500); brush.endShape(true); brush.circle(110,510,13,1);
  brush.fill("#2f78b8", 180); brush.beginShape(0.5); brush.vertex(165,400); brush.vertex(183,400); brush.vertex(183,545); brush.vertex(165,545); brush.endShape(true); brush.circle(174,553,12,1);
  brush.fill("#e8b030", 170); brush.circle(60,440,45,1.6); brush.circle(240,510,38,1.6);
  brush.fill("#e0407a", 140); brush.circle(60,440,25,1.6);
  brush.fill("#4aa860", 190); brush.beginShape(0.9); brush.vertex(-60,555); brush.vertex(300,535); brush.vertex(660,565); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#2a7a40", 170); brush.beginShape(0.9); brush.vertex(-60,585); brush.vertex(400,570); brush.vertex(660,590); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
}
