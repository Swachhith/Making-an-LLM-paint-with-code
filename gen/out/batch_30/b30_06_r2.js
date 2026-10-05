async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6f1e4");
  brush.noStroke(); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  // sky, low horizon at y=390
  brush.fill("#1f6ee0", 190); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,400); brush.vertex(-60,400); brush.endShape(true);
  brush.fill("#ff9a30", 180); brush.beginShape(0.9); brush.vertex(-60,250); brush.vertex(660,230); brush.vertex(660,400); brush.vertex(-60,400); brush.endShape(true);
  brush.fill("#ff5a70", 140); brush.beginShape(0.9); brush.vertex(-60,320); brush.vertex(660,300); brush.vertex(660,400); brush.vertex(-60,400); brush.endShape(true);
  // distant ridge
  brush.fill("#7a50c0", 170); brush.beginShape(0.6); brush.vertex(-60,400); brush.vertex(80,330); brush.vertex(180,360); brush.vertex(80,400); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(480,400); brush.vertex(600,320); brush.vertex(680,370); brush.vertex(680,400); brush.endShape(true);
  // mountain: lit side + shadow side
  brush.fill("#7a3ac0", 215); brush.beginShape(0.3); brush.vertex(110,400); brush.vertex(250,230); brush.vertex(330,110); brush.vertex(450,260); brush.vertex(560,400); brush.endShape(true);
  brush.fill("#3a1480", 215); brush.beginShape(0.3); brush.vertex(330,110); brush.vertex(380,190); brush.vertex(450,260); brush.vertex(560,400); brush.vertex(350,400); brush.vertex(320,260); brush.endShape(true);
  brush.fill("#5a24a0", 160); brush.beginShape(0.3); brush.vertex(250,230); brush.vertex(310,300); brush.vertex(240,400); brush.vertex(150,400); brush.endShape(true);
  brush.fill("#f8f4fa", 235); brush.beginShape(0.3); brush.vertex(300,150); brush.vertex(330,110); brush.vertex(360,155); brush.vertex(335,142); brush.vertex(320,165); brush.endShape(true);
  // tarn with reflection
  brush.fill("#1060c0", 210); brush.beginShape(0.5); brush.vertex(-60,400); brush.vertex(660,400); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#4a1a98", 190); brush.beginShape(0.6); brush.vertex(110,402); brush.vertex(560,402); brush.vertex(470,500); brush.vertex(340,600); brush.vertex(230,500); brush.endShape(true);
  brush.fill("#ff8a30", 170); brush.beginShape(0.6); brush.vertex(-60,405); brush.vertex(120,405); brush.vertex(80,470); brush.vertex(-60,470); brush.endShape(true);
  brush.fill("#ff8a30", 150); brush.beginShape(0.6); brush.vertex(500,405); brush.vertex(660,405); brush.vertex(660,480); brush.vertex(520,470); brush.endShape(true);
  // shore
  brush.fill("#1a7a38", 220); brush.beginShape(0.7); brush.vertex(-60,580); brush.vertex(200,545); brush.vertex(400,560); brush.vertex(660,540); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#0a4a20", 200); brush.beginShape(0.7); brush.vertex(-60,610); brush.vertex(300,590); brush.vertex(660,605); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#2a0e68", 190); brush.beginShape(0.3); brush.vertex(330,200); brush.vertex(420,250); brush.vertex(500,400); brush.vertex(400,400); brush.endShape(true);
  brush.fill("#ffb040", 150); brush.beginShape(0.5); brush.vertex(150,300); brush.vertex(250,230); brush.vertex(300,310); brush.vertex(220,400); brush.vertex(150,400); brush.endShape(true);
  brush.fill("#d86a10", 190); for (const x of [30,70,540,580]) { brush.beginShape(0.5); brush.vertex(x,600); brush.vertex(x+8,480); brush.vertex(x+24,600); brush.endShape(true); }
  brush.fill("#0a3a90", 140); brush.beginShape(0.8); brush.vertex(60,460); brush.vertex(200,455); brush.vertex(200,478); brush.vertex(60,483); brush.endShape(true);
  brush.beginShape(0.8); brush.vertex(380,520); brush.vertex(540,515); brush.vertex(540,538); brush.vertex(380,543); brush.endShape(true);
}
