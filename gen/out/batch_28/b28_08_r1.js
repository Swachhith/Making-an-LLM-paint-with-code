async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f9f3e0");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#3a9ae0", 190);
  brush.beginShape(0.4); brush.vertex(-70,0); brush.vertex(670,0); brush.vertex(670,230); brush.vertex(-70,230); brush.endShape(true);
  brush.fill("#7a50c0", 150);
  brush.beginShape(0.6); brush.vertex(-70,200); brush.vertex(150,150); brush.vertex(300,210); brush.vertex(450,140); brush.vertex(670,190); brush.vertex(670,260); brush.vertex(-70,260); brush.endShape(true);
  brush.fill("#2a8a40", 200);
  brush.beginShape(0.7); brush.vertex(-70,260); brush.vertex(200,230); brush.vertex(420,250); brush.vertex(670,225); brush.vertex(670,600); brush.vertex(-70,600); brush.endShape(true);
  brush.fill("#c8b020", 190);
  brush.beginShape(0.7); brush.vertex(-70,400); brush.vertex(200,330); brush.vertex(400,350); brush.vertex(670,320); brush.vertex(670,600); brush.vertex(-70,600); brush.endShape(true);
  for (let r=0;r<7;r++){
    brush.fill(r%2? "#6a1a50":"#8a2a60", 190);
    const y=420+r*24;
    brush.beginShape(0.6); brush.vertex(-70,y+10); brush.vertex(150,y-20); brush.vertex(240,y-30); brush.vertex(250,y-8); brush.vertex(150,y+8); brush.vertex(-70,y+34); brush.endShape(true);
    brush.fill("#1a6a30", 190);
    brush.beginShape(0.6); brush.vertex(670,y-80+r*3); brush.vertex(450,y-110); brush.vertex(370,y-120); brush.vertex(375,y-98); brush.vertex(470,y-88); brush.vertex(670,y-58+r*3); brush.endShape(true);
  }
  brush.fill("#e8c898", 220);
  brush.beginShape(0.6); brush.vertex(280,600); brush.vertex(330,600); brush.vertex(318,430); brush.vertex(300,330); brush.vertex(310,250); brush.vertex(298,250); brush.vertex(285,330); brush.vertex(290,430); brush.endShape(true);
  brush.fill("#d86a20", 200);
  brush.beginShape(0.6); brush.vertex(560,200); brush.vertex(670,200); brush.vertex(670,250); brush.vertex(560,250); brush.endShape(true);

  brush.fill("#1a5a28", 210);
  for (let i=0;i<7;i++){ brush.circle(70+i*80,250+(i%2)*14,18+i%3*6,0.8); }
  brush.fill("#e8d8a0", 200);
  brush.beginShape(0.6); brush.vertex(285,360); brush.vertex(315,360); brush.vertex(305,260); brush.vertex(295,260); brush.endShape(true);
}
