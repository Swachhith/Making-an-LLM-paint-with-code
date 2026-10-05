async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#14102a");
  brush.noStroke();
  // glowing sky
  brush.fill("#e89a3a", 210); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,330); brush.vertex(600,330); brush.vertex(600,470); brush.vertex(0,470); brush.endShape(true);
  brush.fill("#b5428a", 200); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(0,180); brush.vertex(600,190); brush.vertex(600,360); brush.vertex(0,350); brush.endShape(true);
  brush.fill("#3a2a8a", 200); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,200); brush.vertex(0,190); brush.endShape(true);
  // moon left as paper-ish bright
  brush.fill("#fff3c4", 255); brush.fillBleed(0.15);
  brush.circle(160, 150, 48, 0.2);
  // ground
  brush.fill("#07060f", 245); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4); brush.vertex(0,470); brush.vertex(150,455); brush.vertex(350,468); brush.vertex(600,450); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // branch
  brush.fill("#0a0812", 240);
  brush.beginShape(0.4); brush.vertex(300,480); brush.vertex(320,440); brush.vertex(470,330); brush.vertex(500,345); brush.vertex(330,490); brush.endShape(true);
  brush.beginShape(0.4); brush.vertex(480,335); brush.vertex(560,290); brush.vertex(570,310); brush.vertex(495,355); brush.endShape(true);
  // owl
  brush.fill("#2a1c14", 230); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6); brush.vertex(395,350); brush.vertex(380,290); brush.vertex(400,250); brush.vertex(440,250); brush.vertex(460,290); brush.vertex(445,350); brush.endShape(true);
  brush.fill("#4a3424", 200);
  brush.beginShape(0.6); brush.vertex(402,335); brush.vertex(395,290); brush.vertex(420,265); brush.vertex(438,290); brush.vertex(432,335); brush.endShape(true);
  brush.fill("#f2c14a", 255); brush.circle(410,262,7,0.2); brush.circle(432,262,7,0.2);
  // stars
  brush.fill("#fff3c4", 230);
  for (let i = 0; i < 18; i++) brush.circle((i*97)%600, 15 + (i*53)%130, 1.8, 0.3);
}
