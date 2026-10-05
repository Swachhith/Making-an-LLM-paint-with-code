async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbeede");
  brush.noStroke();
  const P = (pts, c, o, b, t) => { brush.fill(c, o); brush.fillBleed(b); brush.fillTexture(t, t); brush.beginShape(0.4); pts.forEach(p => brush.vertex(p[0], p[1])); brush.endShape(true); };
  P([[0,0],[600,0],[600,460],[0,460]], "#f6a06a", 150, 0.3, 0.4);
  P([[0,0],[600,0],[600,220],[0,240]], "#d4503a", 150, 0.3, 0.4);
  P([[0,260],[600,260],[600,460],[0,460]], "#ffd070", 160, 0.3, 0.4);
  brush.fill("#fff6d0", 235); brush.fillBleed(0.2); brush.circle(300, 400, 40, 0.3);
  // peak
  P([[100,470],[260,200],[295,150],[305,150],[340,200],[500,470]], "#2a1a3a", 235, 0.2, 0.4);
  P([[295,150],[305,150],[340,200],[320,215],[300,185],[280,215],[260,200]], "#f2e0d0", 200, 0.2, 0.3);
  P([[300,170],[340,200],[500,470],[380,470]], "#14081f", 210, 0.2, 0.4);
  P([[0,440],[200,420],[400,440],[600,420],[600,600],[0,600]], "#14081f", 235, 0.25, 0.5);
  P([[0,500],[300,480],[600,500],[600,600],[0,600]], "#0a0410", 235, 0.25, 0.5);
}
