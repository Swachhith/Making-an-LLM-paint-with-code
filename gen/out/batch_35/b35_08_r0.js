async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#16121c");
  randomSeed(8);
  brush.noStroke(); brush.fillBleed(0.28); brush.fillTexture(0.4, 0.4);
  // glowing sky
  brush.fill("#f08a30", 200);
  brush.beginShape(0.5); brush.vertex(0,60); brush.vertex(600,60); brush.vertex(600,380); brush.vertex(0,380); brush.endShape(true);
  brush.fill("#e04a3a", 190);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,200); brush.vertex(0,170); brush.endShape(true);
  brush.fill("#fbd870", 220);
  brush.beginShape(0.5); brush.vertex(150,230); brush.vertex(450,230); brush.vertex(480,380); brush.vertex(120,380); brush.endShape(true);
  brush.fill("#fff0b0", 220); brush.circle(300, 330, 40, 0.3);
  // river
  brush.fill("#d06a38", 190);
  brush.beginShape(0.4); brush.vertex(0,400); brush.vertex(600,400); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#fbb050", 170);
  brush.beginShape(0.5); brush.vertex(230,410); brush.vertex(370,410); brush.vertex(400,590); brush.vertex(200,590); brush.endShape(true);
  // bridge dark
  brush.fill("#0c0a10", 235);
  brush.beginShape(0.3); brush.vertex(0,360); brush.vertex(150,370); brush.vertex(300,350); brush.vertex(450,370); brush.vertex(600,360); brush.vertex(600,400); brush.vertex(0,400); brush.endShape(true);
  for (let i = 0; i < 4; i++) { brush.beginShape(0.3); brush.vertex(60+i*160,395); brush.vertex(90+i*160,395); brush.vertex(88+i*160,450); brush.vertex(62+i*160,450); brush.endShape(true); }
  // banks
  brush.fill("#0e0c14", 230);
  brush.beginShape(0.4); brush.vertex(0,600); brush.vertex(0,470); brush.vertex(120,520); brush.vertex(200,600); brush.endShape(true);
  brush.beginShape(0.4); brush.vertex(600,600); brush.vertex(600,480); brush.vertex(480,540); brush.vertex(420,600); brush.endShape(true);
}
