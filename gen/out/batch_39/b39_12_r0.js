async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe6d2");
  brush.noStroke();
  brush.fill("#e0b060", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,260); brush.vertex(0,260); brush.endShape(true);
  brush.fill("#c8601a", 200); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(0,230); brush.vertex(600,240); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#2a2018", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,300); brush.vertex(250,260); brush.vertex(350,260); brush.vertex(600,300); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // water pools
  brush.fill("#e8c890", 200);
  brush.beginShape(0.6); brush.vertex(40,400); brush.vertex(180,350); brush.vertex(230,420); brush.vertex(60,470); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(400,350); brush.vertex(560,390); brush.vertex(540,470); brush.vertex(380,420); brush.endShape(true);
  // walkway
  brush.fill("#6a3a14", 230); brush.fillBleed(0.15);
  brush.beginShape(0.2); brush.vertex(285,262); brush.vertex(325,262); brush.vertex(420,600); brush.vertex(190,600); brush.endShape(true);
  for (let i = 0; i < 7; i++) {
    const y = 280 + i*i*8 + i*10, w = 20 + i*22;
    brush.fill("#c88a3a", 200); brush.fillBleed(0.15);
    brush.beginShape(0.1); brush.vertex(305-w/2,y); brush.vertex(305+w/2,y); brush.vertex(305+w/2+4,y+8+i*3); brush.vertex(305-w/2-4,y+8+i*3); brush.endShape(true);
  }
  brush.fill("#1a1208", 230);
  brush.beginShape(0.3); brush.vertex(500,300); brush.vertex(505,230); brush.vertex(530,230); brush.vertex(535,300); brush.endShape(true);
}
