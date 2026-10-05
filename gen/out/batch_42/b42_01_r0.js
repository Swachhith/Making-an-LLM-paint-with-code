async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9edf3");
  brush.noStroke();
  const P = (pts, c, o, b, t) => { brush.fill(c, o); brush.fillBleed(b); brush.fillTexture(t, t); brush.beginShape(0.5); pts.forEach(p => brush.vertex(p[0], p[1])); brush.endShape(true); };
  P([[0,0],[600,0],[600,380],[0,380]], "#3b4a8c", 170, 0.3, 0.4);
  P([[0,60],[600,40],[600,300],[0,320]], "#5a6aa8", 150, 0.3, 0.4);
  P([[0,360],[200,330],[420,350],[600,325],[600,600],[0,600]], "#c9d0e6", 220, 0.25, 0.4);
  P([[0,450],[300,420],[600,440],[600,600],[0,600]], "#2d3a78", 170, 0.3, 0.5);
  P([[0,520],[300,500],[600,530],[600,600],[0,600]], "#1f2a62", 180, 0.3, 0.5);
  P([[270,360],[330,360],[330,392],[270,392]], "#1f2a62", 220, 0.2, 0.3);
  P([[262,362],[300,336],[338,362]], "#141c4a", 230, 0.2, 0.3);
  P([[290,372],[306,372],[306,390],[290,390]], "#ffb000", 255, 0.1, 0.3);
  P([[380,350],[420,350],[420,392],[380,392]], "#2a2f66", 190, 0.2, 0.3);
  brush.fill("#2a3a78", 190); brush.fillBleed(0.25); brush.circle(100, 372, 22, 0.6);
  brush.circle(130, 380, 16, 0.6); brush.circle(520, 376, 20, 0.6);
  for (let i = 0; i < 40; i++) { brush.fill("#ffffff", 200); brush.fillBleed(0.1); brush.circle(20 + (i * 97) % 580, 30 + (i * 53) % 300, 3, 0.5); }
}
