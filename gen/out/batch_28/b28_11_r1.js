async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8e6cc");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#ff9a30", 180);
  brush.beginShape(0.4); brush.vertex(-70,0); brush.vertex(670,0); brush.vertex(670,430); brush.vertex(-70,430); brush.endShape(true);
  brush.fill("#e0305a", 170);
  brush.beginShape(0.6); brush.vertex(-70,0); brush.vertex(670,0); brush.vertex(670,220); brush.vertex(-70,260); brush.endShape(true);
  brush.fill("#ffd080", 160);
  brush.beginShape(0.8); brush.vertex(-70,330); brush.vertex(670,320); brush.vertex(670,450); brush.vertex(-70,450); brush.endShape(true);
  brush.fill("#d81818", 230); brush.circle(300,380,56,0.3);
  brush.fill("#ffb860", 150);
  brush.beginShape(0.8); brush.vertex(-70,375); brush.vertex(670,365); brush.vertex(670,415); brush.vertex(-70,420); brush.endShape(true);
  brush.fill("#5a1a50", 210);
  brush.beginShape(0.5); brush.vertex(-70,600); brush.vertex(-70,450); brush.vertex(670,440); brush.vertex(670,600); brush.endShape(true);
  brush.fill("#c82a40", 180);
  brush.beginShape(0.5); brush.vertex(260,450); brush.vertex(340,450); brush.vertex(380,560); brush.vertex(220,560); brush.endShape(true);
  brush.fill("#2a1040", 200);
  brush.beginShape(0.6); brush.vertex(-70,600); brush.vertex(-70,520); brush.vertex(670,515); brush.vertex(670,600); brush.endShape(true);

  brush.fill("#e83030", 190);
  brush.beginShape(0.6); brush.vertex(270,450); brush.vertex(330,450); brush.vertex(350,520); brush.vertex(250,520); brush.endShape(true);
  brush.fill("#ffe0a0", 120);
  brush.beginShape(0.8); brush.vertex(0,330); brush.vertex(600,320); brush.vertex(600,370); brush.vertex(0,385); brush.endShape(true);
  brush.fill("#3a1050", 190);
  brush.beginShape(0.8); brush.vertex(0,460); brush.vertex(300,448); brush.vertex(600,460); brush.vertex(600,500); brush.vertex(0,500); brush.endShape(true);
}
