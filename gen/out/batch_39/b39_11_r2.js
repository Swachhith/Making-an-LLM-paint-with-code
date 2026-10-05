async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#080c1a");
  brush.noStroke();
  brush.fill("#1a3a7a", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,360); brush.vertex(0,360); brush.endShape(true);
  brush.fill("#3a6ab0", 190);
  brush.beginShape(0.5); brush.vertex(250,40); brush.vertex(600,20); brush.vertex(600,300); brush.vertex(300,290); brush.endShape(true);
  // moon big, off-centre right, with halo
  brush.fill("#8ab0e0", 140); brush.circle(430,150,140,0.3);
  brush.fill("#fff8d8", 255); brush.fillBleed(0.15); brush.circle(430,150,92,0.15);
  brush.fill("#d8c890", 150); brush.circle(445,165,30,0.4); brush.circle(410,130,18,0.4);
  // winding path with moonlit patches
  brush.fill("#a8c0e0", 215); brush.fillBleed(0.3);
  brush.beginShape(0.6); brush.vertex(285,355); brush.vertex(340,355); brush.vertex(380,430); brush.vertex(470,520); brush.vertex(520,600); brush.vertex(110,600); brush.vertex(250,510); brush.vertex(300,430); brush.endShape(true);
  brush.fill("#d8e4f4", 150);
  brush.beginShape(0.6); brush.vertex(310,380); brush.vertex(335,380); brush.vertex(400,470); brush.vertex(430,560); brush.vertex(300,560); brush.vertex(330,450); brush.endShape(true);
  // forest walls
  brush.fill("#040810", 250); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,200); brush.vertex(110,260); brush.vertex(230,330); brush.vertex(285,355); brush.vertex(300,430); brush.vertex(250,510); brush.vertex(100,600); brush.vertex(0,600); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(600,260); brush.vertex(480,300); brush.vertex(360,345); brush.vertex(340,360); brush.vertex(390,440); brush.vertex(500,540); brush.vertex(540,600); brush.vertex(600,600); brush.endShape(true);
  // trunks with moonlit edges
  for (const [x,w] of [[45,50],[150,34],[545,46],[470,28]]) {
    brush.fill("#04060e", 245); brush.fillBleed(0.2);
    brush.beginShape(0.5); brush.vertex(x-w/2,600); brush.vertex(x-w/3,0); brush.vertex(x+w/3,0); brush.vertex(x+w/2,600); brush.endShape(true);
    brush.fill("#4a6aa0", 150);
    brush.beginShape(0.5); brush.vertex(x+w/3,600); brush.vertex(x+w/5,40); brush.vertex(x+w/3,40); brush.vertex(x+w/2,600); brush.endShape(true);
  }
  // canopy above
  brush.fill("#040810", 235);
  brush.beginShape(0.7); brush.vertex(0,0); brush.vertex(260,0); brush.vertex(240,70); brush.vertex(120,130); brush.vertex(0,150); brush.endShape(true);
  brush.beginShape(0.7); brush.vertex(600,0); brush.vertex(580,0); brush.vertex(560,120); brush.vertex(520,80); brush.vertex(600,100); brush.endShape(true);
  // r2: brighter path, trunk shadows crossing it
  brush.fill("#b8d0f0", 210); brush.fillBleed(0.3);
  brush.beginShape(0.6); brush.vertex(300,365); brush.vertex(335,365); brush.vertex(410,470); brush.vertex(470,600); brush.vertex(250,600); brush.vertex(300,480); brush.vertex(310,420); brush.endShape(true);
  brush.fill("#050a18", 215); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(200,600); brush.vertex(280,500); brush.vertex(300,515); brush.vertex(260,600); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(380,480); brush.vertex(500,540); brush.vertex(520,570); brush.vertex(400,520); brush.endShape(true);
}
