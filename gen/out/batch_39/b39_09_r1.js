async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6eee2");
  brush.noStroke();
  brush.fill("#8a1a9a", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,230); brush.vertex(0,210); brush.endShape(true);
  brush.fill("#e02a2a", 215);
  brush.beginShape(0.5); brush.vertex(0,170); brush.vertex(600,180); brush.vertex(600,380); brush.vertex(0,380); brush.endShape(true);
  brush.fill("#f89a10", 220);
  brush.beginShape(0.5); brush.vertex(0,280); brush.vertex(600,285); brush.vertex(600,395); brush.vertex(0,395); brush.endShape(true);
  brush.fill("#ffd040", 210);
  brush.beginShape(0.5); brush.vertex(200,320); brush.vertex(600,325); brush.vertex(600,400); brush.vertex(200,400); brush.endShape(true);
  brush.fill("#fffbe0", 255); brush.fillBleed(0.15); brush.circle(420,365,50,0.15);
  // far tree line
  brush.fill("#4a1a4a", 220); brush.fillBleed(0.25);
  brush.beginShape(0.6); brush.vertex(0,395); brush.vertex(60,372); brush.vertex(140,385); brush.vertex(240,376); brush.vertex(340,392); brush.vertex(600,395); brush.vertex(600,410); brush.vertex(0,410); brush.endShape(true);
  // snow: paper plus blue and orange shadows
  brush.fill("#3a4ad0", 195); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,430); brush.vertex(200,410); brush.vertex(420,420); brush.vertex(600,430); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#f4f0f6", 180);
  brush.beginShape(0.5); brush.vertex(150,470); brush.vertex(400,455); brush.vertex(580,490); brush.vertex(450,540); brush.vertex(200,530); brush.endShape(true);
  brush.fill("#f06a30", 205); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(330,412); brush.vertex(520,415); brush.vertex(580,450); brush.vertex(380,465); brush.endShape(true);
  brush.fill("#2a2aa0", 210);
  brush.beginShape(0.5); brush.vertex(20,540); brush.vertex(200,490); brush.vertex(330,520); brush.vertex(120,590); brush.endShape(true);
  // fence posts
  brush.fill("#2a1030", 235); brush.fillBleed(0.15);
  for (const [x,y] of [[60,410],[120,414],[180,418],[510,420]]) { brush.beginShape(0.2); brush.vertex(x,y); brush.vertex(x+4,y-38); brush.vertex(x+20,y-36); brush.vertex(x+20,y); brush.endShape(true); }
}
