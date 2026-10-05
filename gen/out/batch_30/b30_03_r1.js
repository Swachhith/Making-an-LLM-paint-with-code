async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f5ee");
  brush.noStroke(); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.fill("#1e7ee0", 190); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,330); brush.vertex(-60,360); brush.endShape(true);
  brush.fill("#0a4ab8", 160); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,120); brush.vertex(-60,170); brush.endShape(true);
  brush.fill("#ffc020", 200); brush.circle(95,100,48,1.2);
  brush.fill("#ff8a10", 160); brush.circle(95,100,70,1.4);
  // ground
  brush.fill("#2aa040", 210); brush.beginShape(0.8); brush.vertex(-60,430); brush.vertex(660,420); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#0e6a28", 180); brush.beginShape(0.8); brush.vertex(-60,500); brush.vertex(660,490); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  // greenhouse glass, two layers
  brush.fill("#6adcc8", 190); brush.beginShape(0.1); brush.vertex(250,265); brush.vertex(565,265); brush.vertex(565,455); brush.vertex(250,455); brush.endShape(true);
  brush.fill("#30b0a8", 170); brush.beginShape(0.1); brush.vertex(380,265); brush.vertex(565,265); brush.vertex(565,455); brush.vertex(380,455); brush.endShape(true);
  brush.fill("#50c8c0", 200); brush.beginShape(0.1); brush.vertex(235,265); brush.vertex(407,165); brush.vertex(580,265); brush.endShape(true);
  // dense plants
  brush.fill("#0a7a28", 230); for (const [x,y,r] of [[290,410,45],[350,395,55],[420,400,50],[490,395,50],[535,350,38],[320,340,30]]) brush.circle(x,y,r,1.3);
  brush.fill("#054a18", 210); brush.circle(380,420,40,1.3); brush.circle(480,425,36,1.3);
  brush.fill("#e01848", 235); brush.circle(350,345,17,1); brush.circle(455,350,15,1); brush.circle(520,320,13,1);
  brush.fill("#ff9a10", 235); brush.circle(290,360,15,1); brush.circle(410,330,13,1);
  brush.fill("#8a2ac8", 220); brush.circle(480,300,13,1);
  // frame
  brush.fill("#143a58", 230);
  for (const x of [250,355,460,565]) { brush.beginShape(0.1); brush.vertex(x-8,265); brush.vertex(x+8,265); brush.vertex(x+8,455); brush.vertex(x-8,455); brush.endShape(true); }
  brush.beginShape(0.1); brush.vertex(243,445); brush.vertex(573,445); brush.vertex(573,465); brush.vertex(243,465); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(407,165); brush.vertex(415,171); brush.vertex(250,262); brush.vertex(240,262); brush.endShape(true);
  // foreground pots left
  brush.fill("#d8502a", 225); brush.beginShape(0.3); brush.vertex(60,520); brush.vertex(130,520); brush.vertex(120,580); brush.vertex(70,580); brush.endShape(true);
  brush.fill("#0e8a30", 225); brush.circle(95,490,34,1.4); brush.fill("#e01848", 230); brush.circle(100,470,10,1);
}
