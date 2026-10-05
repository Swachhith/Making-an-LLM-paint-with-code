async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f0e6");
  brush.noStroke();
  // sky
  brush.fill("#2a6fb0", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  [[0,0],[600,0],[600,250],[0,250]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#0d2a52", 190); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  [[0,0],[600,0],[600,90],[0,130]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // far headland
  brush.fill("#0f4c3a", 220); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  [[0,255],[150,225],[300,248],[460,232],[600,250],[600,275],[0,275]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // lagoon water tapering into distance
  brush.fill("#18a999", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  [[260,262],[340,262],[480,360],[600,470],[600,600],[0,600],[0,470],[130,360]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#0a6b72", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  [[290,300],[330,300],[400,420],[330,600],[240,600],[220,420]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // sandbar curve leading away
  brush.fill("#f2d9a0", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  [[40,600],[120,520],[200,440],[270,350],[300,290],[318,290],[320,350],[260,450],[190,540],[140,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#b8803a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  [[100,600],[170,540],[240,450],[290,340],[300,330],[270,460],[200,560],[160,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // dark rocks foreground
  brush.fill("#0a1a22", 240); brush.fillBleed(0.15); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  [[450,600],[470,545],[520,520],[580,540],[600,500],[600,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // cloud shadow
  brush.fill("#ffffff", 0);
  brush.fill("#0d3a5c", 150); brush.fillBleed(0.3);
  brush.beginShape(0.9);
  [[380,380],[520,360],[600,420],[480,440]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
}
