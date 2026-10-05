async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1e8cc");
  // gold sky
  brush.noStroke(); brush.fill("#e3b441", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,330); brush.vertex(0,300); brush.endShape(true);
  brush.fill("#f0cf70", 150);
  brush.beginShape(0.5); brush.vertex(40,60); brush.vertex(400,40); brush.vertex(430,200); brush.vertex(60,220); brush.endShape(true);
  // hills
  brush.fill("#2f5a35", 190); brush.fillBleed(0.25);
  brush.beginShape(0.8); brush.vertex(0,330); brush.vertex(150,290); brush.vertex(330,330); brush.vertex(470,300); brush.vertex(600,330); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#1f4426", 200);
  brush.beginShape(0.8); brush.vertex(0,430); brush.vertex(200,390); brush.vertex(420,440); brush.vertex(600,400); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#c99a2e", 150);
  brush.beginShape(0.8); brush.vertex(60,500); brush.vertex(250,470); brush.vertex(330,520); brush.vertex(120,570); brush.endShape(true);
  // sheep
  const sh = [[110,470],[190,500],[60,540],[250,450],[160,560]];
  for (const s of sh) {
    brush.fill("#f4efe0", 230); brush.fillBleed(0.2);
    brush.circle(s[0], s[1], 20, 0.6);
    brush.circle(s[0]+14, s[1]-4, 14, 0.6);
    brush.fill("#2a2a22", 220);
    brush.circle(s[0]+28, s[1]-2, 7, 0.4);
  }
  // shepherd
  brush.fill("#6b3f1e", 220); brush.fillBleed(0.2);
  brush.beginShape(0.3); brush.vertex(440,360); brush.vertex(475,360); brush.vertex(485,450); brush.vertex(430,450); brush.endShape(true);
  brush.fill("#3b2412", 220);
  brush.beginShape(0.3); brush.vertex(445,445); brush.vertex(462,445); brush.vertex(462,510); brush.vertex(445,510); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(466,445); brush.vertex(480,445); brush.vertex(484,510); brush.vertex(468,510); brush.endShape(true);
  brush.fill("#d9a37a", 230); brush.circle(458, 345, 13, 0.3);
  brush.fill("#2a1a0c", 220); brush.circle(458, 335, 15, 0.3);
  brush.fill("#4a3018", 200);
  brush.beginShape(0.2); brush.vertex(500,330); brush.vertex(516,330); brush.vertex(516,520); brush.vertex(500,520); brush.endShape(true);
}
