async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e6d2");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.5, 0.4);
  brush.fill("#d8a878", 190);
  brush.beginShape(0.5); brush.vertex(-70,0); brush.vertex(670,0); brush.vertex(670,400); brush.vertex(-70,400); brush.endShape(true);
  brush.fill("#b8788a", 170);
  brush.beginShape(0.6); brush.vertex(-70,0); brush.vertex(670,0); brush.vertex(670,200); brush.vertex(-70,240); brush.endShape(true);
  brush.fill("#e8c870", 200); brush.circle(420,340,40,0.3);
  brush.fill("#8a6a58", 200);
  brush.beginShape(0.7); brush.vertex(60,420); brush.vertex(130,370); brush.vertex(200,350); brush.vertex(280,380); brush.vertex(340,420); brush.endShape(true);
  brush.fill("#5a4a44", 210);
  brush.beginShape(0.7); brush.vertex(100,420); brush.vertex(170,380); brush.vertex(230,385); brush.vertex(290,420); brush.endShape(true);
  brush.fill("#7a8a78", 190);
  brush.beginShape(0.5); brush.vertex(-70,400); brush.vertex(670,400); brush.vertex(670,600); brush.vertex(-70,600); brush.endShape(true);
  brush.fill("#a88a60", 180);
  brush.beginShape(0.6); brush.vertex(380,400); brush.vertex(460,400); brush.vertex(500,600); brush.vertex(340,600); brush.endShape(true);
  brush.fill("#5a6a60", 190);
  brush.beginShape(0.6); brush.vertex(-70,480); brush.vertex(670,470); brush.vertex(670,600); brush.vertex(-70,600); brush.endShape(true);
  brush.fill("#4a3a38", 200);
  brush.beginShape(0.7); brush.vertex(-70,600); brush.vertex(-70,520); brush.vertex(120,545); brush.vertex(200,600); brush.endShape(true);

  brush.fill("#3a2a28", 190);
  for (let i=0;i<6;i++){ brush.circle(140+i*28,368+(i%2)*8,12,0.8); }
  brush.fill("#e0b868", 140);
  brush.beginShape(0.6); brush.vertex(390,400); brush.vertex(450,400); brush.vertex(480,560); brush.vertex(370,560); brush.endShape(true);
  brush.fill("#6a7a70", 150);
  brush.beginShape(0.8); brush.vertex(60,430); brush.vertex(320,430); brush.vertex(340,460); brush.vertex(80,470); brush.endShape(true);

  brush.fill("#5a4a44", 130);
  brush.beginShape(0.8); brush.vertex(80,400); brush.vertex(330,395); brush.vertex(330,425); brush.vertex(80,430); brush.endShape(true);
  brush.fill("#e8c870", 120);
  brush.beginShape(0.8); brush.vertex(-70,330); brush.vertex(670,325); brush.vertex(670,380); brush.vertex(-70,390); brush.endShape(true);
}
