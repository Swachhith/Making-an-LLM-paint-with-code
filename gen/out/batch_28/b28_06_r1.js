async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbe9d0");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#ff8a1a", 190);
  brush.beginShape(0.4); brush.vertex(-70,0); brush.vertex(670,0); brush.vertex(670,300); brush.vertex(-70,300); brush.endShape(true);
  brush.fill("#d8205a", 170);
  brush.beginShape(0.5); brush.vertex(-70,0); brush.vertex(670,0); brush.vertex(670,130); brush.vertex(-70,170); brush.endShape(true);
  brush.fill("#ffe070", 230); brush.circle(300,240,50,0.3);
  brush.fill("#b8300a", 220);
  brush.beginShape(0.8); brush.vertex(-70,300); brush.vertex(-70,230); brush.vertex(120,200); brush.vertex(250,262); brush.vertex(400,215); brush.vertex(520,180); brush.vertex(670,215); brush.vertex(670,300); brush.endShape(true);
  brush.fill("#7a1a30", 200);
  brush.beginShape(0.8); brush.vertex(-70,300); brush.vertex(120,250); brush.vertex(250,285); brush.vertex(450,250); brush.vertex(670,270); brush.vertex(670,300); brush.endShape(true);
  brush.fill("#e85a20", 190);
  brush.beginShape(0.4); brush.vertex(-70,300); brush.vertex(670,300); brush.vertex(670,600); brush.vertex(-70,600); brush.endShape(true);
  brush.fill("#8a2060", 180);
  brush.beginShape(0.5); brush.vertex(-70,420); brush.vertex(670,400); brush.vertex(670,600); brush.vertex(-70,600); brush.endShape(true);
  brush.fill("#ffc040", 220);
  brush.beginShape(0.5); brush.vertex(270,320); brush.vertex(330,320); brush.vertex(320,520); brush.vertex(280,520); brush.endShape(true);
  brush.fill("#6a1a40", 200);
  brush.beginShape(0.5); brush.vertex(-70,300); brush.vertex(120,300); brush.vertex(190,330); brush.vertex(-70,350); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(670,300); brush.vertex(450,300); brush.vertex(400,330); brush.vertex(670,360); brush.endShape(true);

  brush.fill("#ffd060", 200);
  brush.beginShape(0.6); brush.vertex(270,305); brush.vertex(330,305); brush.vertex(350,480); brush.vertex(250,480); brush.endShape(true);
  brush.fill("#b8300a", 170);
  brush.beginShape(0.8); brush.vertex(80,330); brush.vertex(220,318); brush.vertex(230,350); brush.vertex(90,360); brush.endShape(true);
  brush.fill("#ff8a1a", 150);
  brush.beginShape(0.8); brush.vertex(60,520); brush.vertex(250,500); brush.vertex(260,530); brush.vertex(70,550); brush.endShape(true);
}
