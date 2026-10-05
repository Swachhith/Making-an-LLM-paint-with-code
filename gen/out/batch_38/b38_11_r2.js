async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4ecd4");
  brush.noStroke(); brush.fillTexture(0.4, 0.4); brush.fillBleed(0.3);
  brush.fill("#2a8ae0", 195);
  brush.beginShape(0.5); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,310); brush.vertex(-40,310); brush.endShape(true);
  brush.fill("#1a5ab8", 170);
  brush.beginShape(0.5); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,100); brush.vertex(-40,140); brush.endShape(true);
  brush.fill("#f4a02f", 175);
  brush.beginShape(0.5); brush.vertex(-40,225); brush.vertex(640,215); brush.vertex(640,325); brush.vertex(-40,325); brush.endShape(true);
  brush.fill("#fbfaf4", 235);
  brush.circle(430, 95, 30, 0.8); brush.circle(480, 105, 26, 0.8); brush.circle(530, 90, 22, 0.8); brush.circle(90, 130, 20, 0.8); brush.circle(130, 140, 26, 0.8);
  brush.fill("#d4a02a", 205); brush.fillBleed(0.25);
  brush.beginShape(0.7); brush.vertex(-40,305); brush.vertex(300,292); brush.vertex(640,305); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#8aa82a", 195);
  brush.beginShape(0.7); brush.vertex(-40,420); brush.vertex(240,350); brush.vertex(380,420); brush.vertex(260,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#d4501f", 185);
  brush.beginShape(0.7); brush.vertex(460,370); brush.vertex(640,390); brush.vertex(640,640); brush.vertex(380,640); brush.endShape(true);
  brush.fill("#a03a14", 140);
  brush.beginShape(0.7); brush.vertex(520,450); brush.vertex(640,470); brush.vertex(640,640); brush.vertex(460,640); brush.endShape(true);
  brush.fill("#1a6ab8", 215); brush.fillBleed(0.3);
  brush.beginShape(0.9); brush.vertex(285,298); brush.vertex(312,298); brush.vertex(460,640); brush.vertex(220,640); brush.vertex(300,470); brush.endShape(true);
  brush.fill("#7ac0f0", 170);
  brush.beginShape(0.9); brush.vertex(292,320); brush.vertex(306,320); brush.vertex(370,600); brush.vertex(300,560); brush.endShape(true);
  brush.fill("#2a1f1a", 235);
  brush.beginShape(0.2); brush.vertex(165,225); brush.vertex(188,225); brush.vertex(212,410); brush.vertex(145,410); brush.endShape(true);
  brush.fill("#5a5a66", 225);
  for (let k = 0; k < 8; k++) {
    const a = (k * 45 + 10) * Math.PI / 180, x2 = 176 + 56 * Math.cos(a), y2 = 205 + 56 * Math.sin(a);
    brush.beginShape(0.3); brush.vertex(176,205); brush.vertex(x2 - 9, y2); brush.vertex(x2 + 9, y2); brush.endShape(true);
  }
  brush.fill("#e8302a", 235); brush.circle(176, 205, 12, 0.3);
  brush.fill("#2a1f1a", 215);
  brush.beginShape(0.3); brush.vertex(150,395); brush.vertex(215,395); brush.vertex(225,420); brush.vertex(140,420); brush.endShape(true);
  brush.fill("#6a7a1a", 160);
  brush.beginShape(0.6); brush.vertex(30,520); brush.vertex(220,490); brush.vertex(260,540); brush.vertex(50,580); brush.endShape(true);
  brush.fill("#2a1f1a", 160);
  brush.beginShape(0.6); brush.vertex(150,418); brush.vertex(300,430); brush.vertex(290,445); brush.vertex(140,435); brush.endShape(true);
}
