async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0c1030");
  brush.noStroke();
  brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.fill("#2a3cb0", 200);
  brush.beginShape(0.4); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#5a30b0", 180);
  brush.beginShape(0.5); brush.vertex(0,180); brush.vertex(600,120); brush.vertex(600,420); brush.vertex(0,440); brush.endShape(true);
  brush.fill("#8a6ad8", 160);
  brush.beginShape(0.5); brush.vertex(0,350); brush.vertex(600,330); brush.vertex(600,420); brush.vertex(0,430); brush.endShape(true);
  brush.fill("#141a60", 220);
  brush.beginShape(0.6); brush.vertex(0,600); brush.vertex(0,450); brush.vertex(200,420); brush.vertex(420,440); brush.vertex(600,415); brush.vertex(600,600); brush.endShape(true);
  brush.fill("#0a0c30", 230);
  brush.beginShape(0.6); brush.vertex(300,430); brush.vertex(315,360); brush.vertex(350,345); brush.vertex(375,430); brush.endShape(true);
  brush.circle(333,332,10,0.4);
  brush.fill("#2a2080", 220);
  brush.circle(352,350,6,0.4);
  brush.fill("#d8c8ff", 210);
  brush.circle(100,90,26,0.3);
  for (let i=0;i<20;i++){ brush.fill("#c8c0ff", 220); brush.circle((i*131)%580+10,(i*53)%200+10,1.5,0.3); }
}
