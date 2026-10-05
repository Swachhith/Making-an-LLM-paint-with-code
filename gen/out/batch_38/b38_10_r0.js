async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f0dc");
  brush.noStroke();
  brush.fill("#8ac0f0", 180); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,120); brush.vertex(0,110); brush.endShape(true);
  // layered green terraces
  const cols = ["#2fa03a", "#1f7a2a", "#5ab82f", "#17692f", "#3a9a2a", "#0f5a28"];
  for (let r = 0; r < 6; r++) {
    const y = 110 + r * 82;
    brush.fill(cols[r], 200); brush.fillBleed(0.25);
    brush.beginShape(0.8); brush.vertex(0,y+20); brush.vertex(150,y-20); brush.vertex(320,y+10); brush.vertex(470,y-25); brush.vertex(600,y+5); brush.vertex(600,y+110); brush.vertex(0,y+110); brush.endShape(true);
    brush.fill("#d8e04a", 140);
    brush.beginShape(0.8); brush.vertex(30,y+35); brush.vertex(200,y+15); brush.vertex(380,y+40); brush.vertex(200,y+55); brush.endShape(true);
  }
  // red earth paths
  brush.fill("#c2502a", 190);
  brush.beginShape(0.6); brush.vertex(280,150); brush.vertex(310,150); brush.vertex(370,600); brush.vertex(300,600); brush.endShape(true);
  // pickers
  brush.fill("#e8302a", 230); brush.circle(130, 330, 8, 0.4); brush.circle(450, 410, 8, 0.4); brush.circle(190, 500, 9, 0.4);
  brush.fill("#1a1a2a", 220); brush.circle(130, 345, 8, 0.4); brush.circle(450, 425, 8, 0.4);
}
