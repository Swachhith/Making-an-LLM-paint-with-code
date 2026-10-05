async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#faf3ee");
  brush.noStroke();
  brush.fill("#f4b8c8", 190); brush.fillBleed(0.3); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.8); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,380); brush.vertex(0,380); brush.endShape(true);
  brush.fill("#b8c8f0", 190); brush.beginShape(0.8); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,180); brush.vertex(0,220); brush.endShape(true);
  brush.fill("#f8e0a0", 170); brush.circle(420,250,90,1.3);
  brush.fill("#c8e0c8", 190); brush.beginShape(0.8); brush.vertex(0,420); brush.vertex(600,400); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // figure silhouette
  brush.fill("#6a5a88", 230);
  brush.beginShape(0.4); brush.vertex(235,260); brush.vertex(295,260); brush.vertex(310,430); brush.vertex(220,430); brush.endShape(true);
  brush.fill("#4a3a68", 220);
  brush.beginShape(0.3); brush.vertex(230,420); brush.vertex(255,420); brush.vertex(255,520); brush.vertex(230,520); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(275,420); brush.vertex(305,420); brush.vertex(310,520); brush.vertex(278,520); brush.endShape(true);
  brush.circle(268,230,24,1);
  // arms & violin
  brush.beginShape(0.3); brush.vertex(250,285); brush.vertex(330,230); brush.vertex(345,250); brush.vertex(265,310); brush.endShape(true);
  brush.fill("#3a2a48", 230); brush.circle(280,255,15,1);
  brush.beginShape(0.3); brush.vertex(300,300); brush.vertex(400,250); brush.vertex(405,268); brush.vertex(305,320); brush.endShape(true);
}
