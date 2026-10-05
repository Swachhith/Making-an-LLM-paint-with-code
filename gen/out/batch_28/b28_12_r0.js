async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe4cc");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.5, 0.4);
  brush.fill("#c8b690", 170);
  brush.beginShape(0.6); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#8a9a7a", 180);
  brush.beginShape(0.7); brush.vertex(0,300); brush.vertex(150,240); brush.vertex(330,290); brush.vertex(500,230); brush.vertex(600,270); brush.vertex(600,420); brush.vertex(0,420); brush.endShape(true);
  brush.fill("#6a5a48", 190);
  brush.beginShape(0.5); brush.vertex(0,420); brush.vertex(600,410); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#9a4a30", 200);
  brush.beginShape(0.6); brush.vertex(150,330); brush.vertex(250,300); brush.vertex(370,330); brush.vertex(250,340); brush.endShape(true);
  brush.fill("#e0a050", 180);
  brush.beginShape(0.6); brush.vertex(200,320); brush.vertex(250,308); brush.vertex(330,325); brush.vertex(250,334); brush.endShape(true);
  brush.fill("#7a3a3a", 220);
  brush.beginShape(0.6); brush.vertex(300,360); brush.vertex(330,360); brush.vertex(350,500); brush.vertex(280,500); brush.endShape(true);
  brush.fill("#3a2a30", 220);
  brush.beginShape(0.6); brush.vertex(300,320); brush.vertex(325,320); brush.vertex(325,360); brush.vertex(300,360); brush.endShape(true);
  brush.fill("#f0d8b8", 220); brush.circle(312,335,9,0.4);
  brush.fill("#6a5040", 140);
  brush.beginShape(0.6); brush.vertex(240,500); brush.vertex(400,500); brush.vertex(420,540); brush.vertex(230,540); brush.endShape(true);
}
