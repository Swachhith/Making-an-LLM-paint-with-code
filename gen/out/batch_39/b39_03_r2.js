async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#120e26");
  brush.noStroke();
  // glowing sky bands, layered
  const bands = [["#3a2a9a",0,230,210],["#a8368a",150,380,205],["#f0883a",290,470,215],["#f8c860",370,480,190]];
  for (const [c,y0,y1,o] of bands) {
    brush.fill(c, o); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5); brush.vertex(0,y0); brush.vertex(600,y0+10); brush.vertex(600,y1); brush.vertex(0,y1-8); brush.endShape(true);
  }
  brush.fill("#fff6d4", 255); brush.fillBleed(0.15); brush.circle(130,130,55,0.15);
  brush.fill("#ffe9a0", 120); brush.circle(130,130,80,0.3);
  // ground
  brush.fill("#07050f", 250); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4); brush.vertex(0,490); brush.vertex(160,470); brush.vertex(360,488); brush.vertex(600,465); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // dead branch/tree
  brush.fill("#0a0712", 245);
  brush.beginShape(0.4); brush.vertex(280,500); brush.vertex(300,430); brush.vertex(310,380); brush.vertex(350,380); brush.vertex(340,440); brush.vertex(330,500); brush.endShape(true);
  brush.beginShape(0.4); brush.vertex(300,400); brush.vertex(420,360); brush.vertex(540,330); brush.vertex(555,360); brush.vertex(430,395); brush.vertex(320,430); brush.endShape(true);
  brush.beginShape(0.4); brush.vertex(500,340); brush.vertex(560,270); brush.vertex(585,285); brush.vertex(530,360); brush.endShape(true);
  brush.beginShape(0.4); brush.vertex(310,390); brush.vertex(250,320); brush.vertex(235,340); brush.vertex(290,420); brush.endShape(true);
  // owl on branch
  brush.fill("#3a2616", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7); brush.vertex(405,368); brush.vertex(385,300); brush.vertex(400,255); brush.vertex(425,245); brush.vertex(455,255); brush.vertex(472,300); brush.vertex(455,368); brush.endShape(true);
  brush.fill("#6a4a2c", 200);
  brush.beginShape(0.7); brush.vertex(412,355); brush.vertex(402,305); brush.vertex(420,280); brush.vertex(445,305); brush.vertex(440,355); brush.endShape(true);
  brush.fill("#2a1a0e", 240);
  brush.beginShape(0.3); brush.vertex(398,258); brush.vertex(402,235); brush.vertex(416,250); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(452,258); brush.vertex(448,235); brush.vertex(434,250); brush.endShape(true);
  brush.fill("#ffd24a", 255); brush.circle(412,275,9,0.2); brush.circle(440,275,9,0.2);
  brush.fill("#0a0712", 255); brush.circle(412,275,3.5,0.2); brush.circle(440,275,3.5,0.2);
  brush.fill("#fff3c4", 235);
  for (let i = 0; i < 26; i++) brush.circle((i*89+30)%600, 12 + (i*47)%120, 1.6 + (i%3)*0.5, 0.3);
  // r2: stronger owl and branch silhouette, glow rim
  brush.fill("#050309", 255);
  brush.beginShape(0.4); brush.vertex(300,402); brush.vertex(420,368); brush.vertex(545,338); brush.vertex(550,362); brush.vertex(430,396); brush.vertex(310,432); brush.endShape(true);
  brush.fill("#2a1a0e", 250); brush.fillBleed(0.15);
  brush.beginShape(0.7); brush.vertex(408,372); brush.vertex(388,300); brush.vertex(402,252); brush.vertex(428,242); brush.vertex(458,252); brush.vertex(474,300); brush.vertex(458,372); brush.endShape(true);
  brush.fill("#8a6038", 190); brush.fillBleed(0.3);
  brush.beginShape(0.7); brush.vertex(416,360); brush.vertex(408,310); brush.vertex(428,285); brush.vertex(448,310); brush.vertex(442,360); brush.endShape(true);
  brush.fill("#ffd24a", 255); brush.circle(412,275,10,0.2); brush.circle(442,275,10,0.2);
  brush.fill("#f8a838", 130); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(0,400); brush.vertex(300,380); brush.vertex(600,395); brush.vertex(600,430); brush.vertex(0,440); brush.endShape(true);
}
