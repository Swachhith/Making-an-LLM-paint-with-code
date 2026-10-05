async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eaf0ee");
  brush.noStroke();
  const P = (pts, c, o, b, t) => { brush.fill(c, o); brush.fillBleed(b); brush.fillTexture(t, t); brush.beginShape(0.5); pts.forEach(p => brush.vertex(p[0], p[1])); brush.endShape(true); };
  P([[0,0],[600,0],[600,260],[0,260]], "#cfe3d8", 160, 0.3, 0.4);
  P([[0,250],[600,250],[600,600],[0,600]], "#6f8fc8", 150, 0.3, 0.5);
  P([[0,200],[600,200],[600,300],[0,300]], "#a6c4a0", 150, 0.3, 0.4);
  // trunks
  [[60,320,90],[170,300,40],[430,300,40],[540,330,100]].forEach(t => P([[t[0]-t[2]/4,0],[t[0]+t[2]/4,0],[t[0]+t[2]/3,t[1]+80],[t[0]-t[2]/3,t[1]+80]], "#4a5a58", 170, 0.25, 0.4));
  P([[0,0],[600,0],[600,120],[0,150]], "#5f8a6a", 170, 0.3, 0.5);
  // path
  P([[280,260],[320,260],[470,600],[130,600]], "#e8e1d0", 170, 0.25, 0.4);
  // bluebell carpet
  P([[0,270],[270,260],[130,600],[0,600]], "#4a5fc0", 190, 0.3, 0.5);
  P([[330,260],[600,270],[600,600],[470,600]], "#4a5fc0", 190, 0.3, 0.5);
  P([[0,380],[200,350],[90,600],[0,600]], "#2f3f9a", 170, 0.3, 0.5);
  P([[600,380],[400,350],[510,600],[600,600]], "#2f3f9a", 170, 0.3, 0.5);
  for (let i = 0; i < 40; i++) { brush.fill("#7a58b8", 190); brush.fillBleed(0.2); brush.circle((i * 83) % 600, 300 + (i * 47) % 300, 5 + (i % 4), 0.6); }
}
