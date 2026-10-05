async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece3d0");
  brush.noStroke();
  brush.fill("#d8c8a4", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(30,60); brush.vertex(570,40); brush.vertex(580,560); brush.vertex(20,570); brush.endShape(true);
  // rock
  brush.fill("#6a6050", 210); brush.fillBleed(0.25); brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5); brush.vertex(90,540); brush.vertex(110,470); brush.vertex(220,440); brush.vertex(380,450); brush.vertex(500,480); brush.vertex(520,545); brush.endShape(true);
  brush.fill("#8a7e68", 190);
  brush.beginShape(0.5); brush.vertex(130,520); brush.vertex(160,480); brush.vertex(300,470); brush.vertex(440,490); brush.vertex(470,530); brush.endShape(true);
  // trunk
  brush.fill("#5a4030", 220); brush.fillBleed(0.2);
  brush.beginShape(0.6); brush.vertex(250,470); brush.vertex(300,350); brush.vertex(340,260); brush.vertex(370,300); brush.vertex(310,400); brush.vertex(300,470); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(330,290); brush.vertex(200,260); brush.vertex(130,280); brush.vertex(140,310); brush.vertex(220,295); brush.vertex(350,330); brush.endShape(true);
  // foliage pads
  const pads = [[140,265,80],[240,225,70],[360,200,80],[480,250,70],[330,150,60]];
  for (const [x,y,r] of pads) {
    brush.fill("#3a5a30", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.8); for (let a = 0; a < 360; a += 60) brush.vertex(x + r*cos(a)*1.2, y + r*sin(a)*0.5); brush.endShape(true);
    brush.fill("#5a7a3e", 190);
    brush.beginShape(0.8); for (let a = 0; a < 360; a += 60) brush.vertex(x + r*0.7*cos(a)*1.2, y - 6 + r*0.7*sin(a)*0.5); brush.endShape(true);
  }
}
