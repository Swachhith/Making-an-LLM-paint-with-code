async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0d1018");
  brush.noStroke();
  brush.fill("#2a2f5a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,400); brush.vertex(0,400); brush.endShape(true);
  brush.fill("#8a3a5a", 190);
  brush.beginShape(0.5); brush.vertex(0,250); brush.vertex(600,230); brush.vertex(600,410); brush.vertex(0,410); brush.endShape(true);
  brush.fill("#e0702f", 200);
  brush.beginShape(0.5); brush.vertex(0,340); brush.vertex(600,330); brush.vertex(600,410); brush.vertex(0,410); brush.endShape(true);
  // sea and sand
  brush.fill("#1a3a6a", 200);
  brush.beginShape(0.5); brush.vertex(0,400); brush.vertex(600,400); brush.vertex(600,480); brush.vertex(0,490); brush.endShape(true);
  brush.fill("#e89a4a", 160);
  brush.beginShape(0.5); brush.vertex(100,405); brush.vertex(300,410); brush.vertex(280,470); brush.vertex(120,470); brush.endShape(true);
  brush.fill("#5a4a4a", 200);
  brush.beginShape(0.8); brush.vertex(0,490); brush.vertex(600,470); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#8a6a5a", 170);
  brush.beginShape(0.8); brush.vertex(0,540); brush.vertex(600,520); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // surfer with board
  brush.fill("#06070c", 240); brush.fillBleed(0.2);
  brush.beginShape(0.3); brush.vertex(395,345); brush.vertex(430,345); brush.vertex(435,440); brush.vertex(392,440); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(396,435); brush.vertex(412,435); brush.vertex(410,520); brush.vertex(394,520); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(416,435); brush.vertex(433,435); brush.vertex(436,520); brush.vertex(418,520); brush.endShape(true);
  brush.circle(412, 325, 14, 0.3);
  brush.fill("#d8c8a0", 230);
  brush.beginShape(0.5); brush.vertex(438,300); brush.vertex(458,290); brush.vertex(474,500); brush.vertex(448,508); brush.endShape(true);
  brush.fill("#ffd27a", 230);
  brush.circle(80, 140, 3, 0.2); brush.circle(500, 90, 3, 0.2); brush.circle(250, 60, 2.5, 0.2); brush.circle(540, 200, 2, 0.2);
  brush.circle(60, 470, 4, 0.2);
}
