async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8dfc8");
  brush.noStroke();
  brush.fill("#cdbd96", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(20,40); brush.vertex(580,30); brush.vertex(590,570); brush.vertex(10,580); brush.endShape(true);
  brush.fill("#e2d6b6", 170);
  brush.beginShape(0.6); brush.vertex(150,100); brush.vertex(450,90); brush.vertex(480,400); brush.vertex(120,410); brush.endShape(true);
  // rock: three passes
  const rk = [["#5a5040",230],["#7a6e58",200],["#4a4034",210]];
  for (let i = 0; i < 3; i++) {
    brush.fill(rk[i][0], rk[i][1]); brush.fillBleed(0.25); brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.5); brush.vertex(60+i*25,565-i*10); brush.vertex(80+i*20,490); brush.vertex(190,455-i*8); brush.vertex(330,462); brush.vertex(470-i*15,480); brush.vertex(545-i*25,555); brush.endShape(true);
  }
  // roots over rock
  brush.fill("#4a3220", 225); brush.fillBleed(0.2);
  brush.beginShape(0.6); brush.vertex(200,500); brush.vertex(260,455); brush.vertex(290,430); brush.vertex(320,455); brush.vertex(300,500); brush.vertex(250,520); brush.endShape(true);
  // twisting trunk
  brush.fill("#4a3220", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6); brush.vertex(260,460); brush.vertex(245,390); brush.vertex(290,330); brush.vertex(270,270); brush.vertex(300,220); brush.vertex(340,230); brush.vertex(330,290); brush.vertex(345,340); brush.vertex(310,410); brush.vertex(300,460); brush.endShape(true);
  brush.fill("#7a5838", 190);
  brush.beginShape(0.6); brush.vertex(275,450); brush.vertex(268,390); brush.vertex(300,335); brush.vertex(290,280); brush.vertex(310,245); brush.vertex(318,300); brush.vertex(305,370); brush.endShape(true);
  // branches
  brush.fill("#4a3220", 225);
  brush.beginShape(0.6); brush.vertex(285,340); brush.vertex(190,305); brush.vertex(95,320); brush.vertex(100,345); brush.vertex(190,335); brush.vertex(290,375); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(330,270); brush.vertex(430,235); brush.vertex(520,255); brush.vertex(515,280); brush.vertex(430,262); brush.vertex(335,305); brush.endShape(true);
  // pads
  const pads = [[110,305,85,28],[205,290,70,30],[330,195,80,34],[440,230,80,28],[510,255,60,24],[300,140,60,26]];
  for (const [x,y,rw,rh] of pads) {
    brush.fill("#2e4a24", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.9); for (let a = 0; a < 360; a += 45) brush.vertex(x + rw*cos(a), y + rh*sin(a)); brush.endShape(true);
    brush.fill("#5a7c3a", 195);
    brush.beginShape(0.9); for (let a = 0; a < 360; a += 45) brush.vertex(x + rw*0.7*cos(a), y - 8 + rh*0.6*sin(a)); brush.endShape(true);
  }
  brush.fill("#6a8a4a", 200); brush.fillBleed(0.3);
  brush.beginShape(0.6); brush.vertex(120,520); brush.vertex(200,505); brush.vertex(230,535); brush.vertex(140,545); brush.endShape(true);
}
