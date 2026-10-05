async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0e1030");
  brush.noStroke();
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#2a2ab8", 200);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 420); brush.vertex(0, 420);
  brush.endShape(true);
  brush.fill("#8a2aa8", 180);
  brush.beginShape(0.6);
  brush.vertex(0, 150); brush.vertex(600, 60); brush.vertex(600, 330); brush.vertex(0, 360);
  brush.endShape(true);
  brush.fill("#e83a8a", 150);
  brush.beginShape(0.6);
  brush.vertex(300, 250); brush.vertex(600, 200); brush.vertex(600, 420); brush.vertex(250, 420);
  brush.endShape(true);
  const st = [[60,50],[150,120],[240,40],[330,90],[420,35],[520,100],[560,40],[90,210],[470,170],[40,300],[560,260],[200,200]];
  brush.fill("#fff4c0", 235);
  st.forEach((s, i) => brush.circle(s[0], s[1], 3 + (i % 3), 0.3));
  brush.fill("#fff4c0", 220);
  brush.circle(500, 70, 22, 0.4);
  // hill
  brush.fill("#0a3a2a", 235);
  brush.beginShape(0.5);
  brush.vertex(0, 600); brush.vertex(0, 420); brush.vertex(200, 400); brush.vertex(420, 440); brush.vertex(600, 480); brush.vertex(600, 600);
  brush.endShape(true);
  // figure from waist up, looking up
  brush.fill("#e8601a", 225);
  brush.beginShape(0.5);
  brush.vertex(110, 600); brush.vertex(130, 440); brush.vertex(200, 400); brush.vertex(290, 420); brush.vertex(320, 600);
  brush.endShape(true);
  brush.fill("#c83a0a", 200);
  brush.beginShape(0.5);
  brush.vertex(230, 600); brush.vertex(240, 430); brush.vertex(290, 420); brush.vertex(320, 600);
  brush.endShape(true);
  brush.fill("#f0b080", 230);
  brush.beginShape(0.5);
  brush.vertex(200, 410); brush.vertex(215, 350); brush.vertex(255, 350); brush.vertex(270, 415);
  brush.endShape(true);
  brush.circle(236, 310, 38, 0.5);
  brush.fill("#1a0a10", 235);
  brush.circle(226, 290, 36, 0.8);
  brush.fill("#e8601a", 210);
  brush.beginShape(0.5);
  brush.vertex(270, 430); brush.vertex(340, 330); brush.vertex(375, 345); brush.vertex(310, 450);
  brush.endShape(true);
}
