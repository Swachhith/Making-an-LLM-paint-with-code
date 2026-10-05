async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e8d0");
  brush.noStroke();
  brush.fill("#e8b030", 170); brush.fillBleed(0.3); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.8); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#2a1a10", 200);
  brush.beginShape(0.7); brush.vertex(0,430); brush.vertex(600,420); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // background trunks
  brush.fill("#5a3a20", 170);
  for (const x of [30,90,520,560]) { brush.beginShape(0.3); brush.vertex(x,0); brush.vertex(x+22,0); brush.vertex(x+24,450); brush.vertex(x-2,450); brush.endShape(true); }
  // small aspen
  brush.fill("#f4e8c0", 230); brush.beginShape(0.3); brush.vertex(380,250); brush.vertex(402,250); brush.vertex(404,470); brush.vertex(378,470); brush.endShape(true);
  brush.fill("#2a1a10", 220); for (const y of [300,350,400]) brush.circle(391,y,6,1);
  brush.fill("#f0b010", 220); brush.circle(390,200,60,1.4); brush.circle(350,230,45,1.4); brush.circle(430,225,45,1.4);
  brush.fill("#c87800", 190); brush.circle(395,215,35,1.3);
  brush.fill("#1a0e08", 200); brush.beginShape(0.8); brush.vertex(300,470); brush.vertex(480,470); brush.vertex(520,500); brush.vertex(280,510); brush.endShape(true);
}
