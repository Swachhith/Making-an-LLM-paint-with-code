async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3ead2");
  brush.noStroke();
  // sky wash dark green
  brush.fill("#1f4a3a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,260); brush.vertex(0,230); brush.endShape(true);
  // ground
  brush.fill("#b8892a", 200); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3); brush.vertex(0,470); brush.vertex(600,450); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // house body
  for (let i = 0; i < 3; i++) {
    brush.fill(i < 2 ? "#d6a43a" : "#c48a22", 190 + i * 20); brush.fillBleed(0.25); brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.2); brush.vertex(60 + i*6,250 + i*4); brush.vertex(540 - i*6,245 + i*4); brush.vertex(550 - i*5,500); brush.vertex(50 + i*5,505); brush.endShape(true);
  }
  // parapet
  brush.fill("#b27a1c", 210); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2); brush.vertex(55,225); brush.vertex(545,220); brush.vertex(545,262); brush.vertex(55,268); brush.endShape(true);
  // door
  brush.fill("#14382a", 230); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3); brush.vertex(240,500); brush.vertex(245,350); brush.vertex(265,330); brush.vertex(325,330); brush.vertex(345,350); brush.vertex(350,500); brush.endShape(true);
  // windows
  for (const x of [105, 420]) {
    brush.fill("#14382a", 225); brush.fillBleed(0.2);
    brush.beginShape(0.3); brush.vertex(x,320); brush.vertex(x+75,320); brush.vertex(x+75,400); brush.vertex(x,400); brush.endShape(true);
  }
  // vigas
  for (let i = 0; i < 5; i++) {
    brush.fill("#6a4418", 220); brush.fillBleed(0.15);
    brush.circle(110 + i*95, 282, 14, 0.4);
  }
  // shadow under eaves
  brush.fill("#7a5410", 150); brush.fillBleed(0.3);
  brush.beginShape(0.4); brush.vertex(55,268); brush.vertex(545,262); brush.vertex(545,290); brush.vertex(55,298); brush.endShape(true);
  // cactus
  brush.fill("#1f5a3a", 210); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(500,520); brush.vertex(505,400); brush.vertex(525,395); brush.vertex(535,520); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(480,450); brush.vertex(485,420); brush.vertex(505,420); brush.vertex(505,460); brush.endShape(true);
}
