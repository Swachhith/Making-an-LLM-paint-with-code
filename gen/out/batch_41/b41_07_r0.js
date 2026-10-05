async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7efe0");
  brush.noStroke();
  brush.fill("#f2c27a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,380); brush.vertex(0,390); brush.endShape(true);
  brush.fill("#e8856a", 170);
  brush.beginShape(0.5); brush.vertex(0,200); brush.vertex(600,190); brush.vertex(600,380); brush.vertex(0,390); brush.endShape(true);
  // plaza ground
  brush.fill("#8a8a98", 210);
  brush.beginShape(0.5); brush.vertex(0,380); brush.vertex(600,380); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#4c4a5e", 190);
  brush.beginShape(0.5); brush.vertex(0,500); brush.vertex(600,490); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // buildings silhouettes
  brush.fill("#2a2230", 235); brush.fillBleed(0.2);
  brush.beginShape(0.1); brush.vertex(0,140); brush.vertex(110,140); brush.vertex(110,385); brush.vertex(0,385); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(480,220); brush.vertex(600,200); brush.vertex(600,385); brush.vertex(480,385); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(130,300); brush.vertex(230,300); brush.vertex(230,385); brush.vertex(130,385); brush.endShape(true);
  // lamp post
  brush.beginShape(0.2); brush.vertex(400,250); brush.vertex(416,250); brush.vertex(416,440); brush.vertex(400,440); brush.endShape(true);
  // old man
  brush.fill("#1c1822", 245);
  brush.beginShape(0.5); brush.vertex(300,420); brush.vertex(325,420); brush.vertex(332,480); brush.vertex(292,480); brush.endShape(true);
  brush.circle(312,408,10,0.3);
  brush.beginShape(0.4); brush.vertex(325,430); brush.vertex(350,450); brush.vertex(345,458); brush.vertex(322,445); brush.endShape(true);
  // pigeons
  for (let i = 0; i < 14; i++) {
    brush.fill(i%3 ? "#3a3646" : "#6a6478", 230);
    brush.circle(340 + (i*37)%160 - 20, 480 + (i*23)%60, 8, 0.5);
  }
  brush.fill("#3a3646", 200);
  brush.beginShape(0.5); brush.vertex(380,360); brush.vertex(410,340); brush.vertex(430,365); brush.vertex(400,372); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(200,330); brush.vertex(230,315); brush.vertex(245,338); brush.vertex(215,345); brush.endShape(true);
}
