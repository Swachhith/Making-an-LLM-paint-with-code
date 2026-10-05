async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#101a22");
  brush.noStroke();
  brush.fill("#f09a48", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,260); brush.vertex(0,260); brush.endShape(true);
  brush.fill("#f5d27a", 210);
  brush.beginShape(0.5); brush.vertex(150,100); brush.vertex(450,95); brush.vertex(480,240); brush.vertex(120,245); brush.endShape(true);
  brush.fill("#c85a5a", 180);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,80); brush.vertex(0,110); brush.endShape(true);
  // ridges
  const ridge = [["#6c5a7a",215,230,[0,240,130,200,260,235,400,190,600,225]],["#3f4e6e",225,270,[0,280,150,240,300,275,460,235,600,270]],["#1f3a48",235,320,[0,330,200,290,340,315,500,285,600,310]]];
  for (const r of ridge) {
    brush.fill(r[0], r[1]); brush.fillBleed(0.3);
    const p = r[3];
    brush.beginShape(0.5);
    for (let i = 0; i < p.length; i += 2) brush.vertex(p[i], p[i+1]);
    brush.vertex(600,600); brush.vertex(0,600);
    brush.endShape(true);
  }
  // turquoise lake
  brush.fill("#14a8a0", 220); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(20,360); brush.vertex(580,350); brush.vertex(600,470); brush.vertex(0,480); brush.endShape(true);
  brush.fill("#5fe0d0", 190);
  brush.beginShape(0.5); brush.vertex(120,365); brush.vertex(480,360); brush.vertex(440,430); brush.vertex(170,435); brush.endShape(true);
  brush.fill("#f2b868", 170);
  brush.beginShape(0.5); brush.vertex(240,372); brush.vertex(360,370); brush.vertex(340,420); brush.vertex(260,420); brush.endShape(true);
  // dark foreground ground
  brush.fill("#0a1014", 245);
  brush.beginShape(0.5); brush.vertex(0,470); brush.vertex(180,495); brush.vertex(400,480); brush.vertex(600,500); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#18252a", 230);
  brush.beginShape(0.6); brush.vertex(0,520); brush.vertex(120,500); brush.vertex(250,560); brush.vertex(80,600); brush.vertex(0,600); brush.endShape(true);
}
