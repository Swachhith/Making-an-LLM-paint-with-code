async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#070b24");
  brush.noStroke();
  brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.fill("#1b2f8f", 200);
  brush.beginShape(0.4); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,470); brush.vertex(0,470); brush.endShape(true);
  brush.fill("#6a2aa8", 170);
  brush.beginShape(0.5); brush.vertex(0,200); brush.vertex(600,150); brush.vertex(600,450); brush.vertex(0,470); brush.endShape(true);
  brush.fill("#d8603a", 150);
  brush.beginShape(0.5); brush.vertex(150,380); brush.vertex(450,380); brush.vertex(480,480); brush.vertex(120,480); brush.endShape(true);
  brush.fill("#0a1a14", 230);
  brush.beginShape(0.4); brush.vertex(0,470); brush.vertex(200,455); brush.vertex(400,470); brush.vertex(600,450); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#050a06", 220);
  brush.beginShape(0.4); brush.vertex(0,520); brush.vertex(300,510); brush.vertex(600,525); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  for (let i=0;i<60;i++){
    brush.fill(i%4? "#fff2c0":"#ffd8a0", 230);
    brush.circle((i*173)%590+5, (i*89)%330+10, 1.2+(i%3)*0.8, 0.3);
  }
  brush.fill("#e83a10", 230);
  brush.beginShape(0.6); brush.vertex(268,520); brush.vertex(300,468); brush.vertex(332,520); brush.endShape(true);
  brush.fill("#ffb020", 230);
  brush.beginShape(0.6); brush.vertex(280,520); brush.vertex(300,488); brush.vertex(320,520); brush.endShape(true);
  brush.fill("#fff0a0", 230); brush.circle(300,510,9,0.4);
  brush.fill("#1a0c08", 240);
  brush.beginShape(0.3); brush.vertex(220,540); brush.vertex(380,534); brush.vertex(390,556); brush.vertex(215,560); brush.endShape(true);
}
