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
  brush.beginShape(0.4); brush.vertex(-70,0); brush.vertex(670,0); brush.vertex(670,470); brush.vertex(-70,470); brush.endShape(true);
  brush.fill("#6a2aa8", 170);
  brush.beginShape(0.5); brush.vertex(-70,200); brush.vertex(670,150); brush.vertex(670,450); brush.vertex(-70,470); brush.endShape(true);
  brush.fill("#d8603a", 150);
  brush.beginShape(0.5); brush.vertex(150,380); brush.vertex(450,380); brush.vertex(480,480); brush.vertex(120,480); brush.endShape(true);
  brush.fill("#0a1a14", 230);
  brush.beginShape(0.4); brush.vertex(-70,470); brush.vertex(200,455); brush.vertex(400,470); brush.vertex(670,450); brush.vertex(670,600); brush.vertex(-70,600); brush.endShape(true);
  brush.fill("#050a06", 220);
  brush.beginShape(0.4); brush.vertex(-70,520); brush.vertex(300,510); brush.vertex(670,525); brush.vertex(670,600); brush.vertex(-70,600); brush.endShape(true);
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

  for (let i=0;i<40;i++){ brush.fill("#e8e0ff", 150); brush.circle(320+i*7-((i*37)%60), 40+i*7+((i*19)%40), 3+(i%3), 0.6); }
  brush.fill("#ff7a20", 90); brush.circle(300,500,60,0.8);
  brush.fill("#0a0603", 235);
  brush.beginShape(0.6); brush.vertex(195,545); brush.vertex(210,500); brush.vertex(235,500); brush.vertex(245,548); brush.endShape(true); brush.circle(222,490,10,0.4);
  brush.beginShape(0.6); brush.vertex(370,548); brush.vertex(385,505); brush.vertex(410,505); brush.vertex(418,548); brush.endShape(true); brush.circle(397,495,10,0.4);
}
