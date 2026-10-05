async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e7e4f2");
  brush.noStroke();
  // sky
  brush.fill("#4b3fa8", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  [[0,0],[600,0],[600,300],[0,300]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#8e5fd1", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  [[0,160],[600,130],[600,330],[0,330]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // bridge deck seen from below: heavy arch band
  brush.fill("#1c2370", 225); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  [[0,330],[150,285],[300,270],[450,285],[600,330],[600,370],[450,325],[300,310],[150,325],[0,370]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // houses above deck, tilted-up perspective, stacked
  const hs = [[40,230,70,95,"#3d2f8f"],[130,210,80,110,"#5d3fb0"],[230,195,90,120,"#2b2a85"],[340,205,80,105,"#6a3fb5"],[430,215,70,95,"#3a2f8f"],[510,235,70,85,"#4f3aa8"]];
  for (const h of hs) {
    brush.fill(h[4], 225); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.1);
    [[h[0],h[1]+h[3]-30],[h[0],h[1]],[h[0]+h[2],h[1]],[h[0]+h[2],h[1]+h[3]-30]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
    brush.fill("#150f45", 230);
    brush.beginShape(0.1);
    [[h[0]-8,h[1]],[h[0]+h[2]/2,h[1]-38],[h[0]+h[2]+8,h[1]]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
    brush.fill("#ffd68a", 220); brush.fillBleed(0.1);
    brush.circle(h[0] + 22, h[1] + 30, 6, 0.2); brush.circle(h[0] + h[2] - 22, h[1] + 30, 6, 0.2);
  }
  // piers
  brush.fill("#10143f", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  [[110,360],[300,340],[490,360]].forEach(c => {
    brush.beginShape(0.1);
    [[c[0]-28,c[1]],[c[0]-18,600],[c[0]+18,600],[c[0]+28,c[1]]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  });
  // river water
  brush.fill("#3a4fc0", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  [[0,520],[200,505],[400,520],[600,505],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // darker arch underside, lit windows, water reflections
  brush.fill("#0b0f45", 220); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  [[0,345],[150,305],[300,292],[450,305],[600,345],[600,372],[450,328],[300,314],[150,328],[0,372]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#ffc766", 220); brush.fillBleed(0.2);
  for (let i = 0; i < 6; i++) brush.circle(60 + i * 85, 262, 7, 0.2);
  brush.fill("#6a3fb5", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  [[40,560],[160,545],[300,570],[440,545],[560,560],[560,590],[40,590]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#1c2370", 200);
  [[110,360],[300,340],[490,360]].forEach(c => {
    brush.beginShape(0.6);
    [[c[0]-18,520],[c[0]+18,520],[c[0]+12,590],[c[0]-12,590]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  });
  // dark underside shadow strong, windows warm
  brush.fill("#070a30", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  [[0,350],[150,312],[300,298],[450,312],[600,350],[600,372],[450,330],[300,318],[150,330],[0,372]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  [[110,380],[300,360],[490,380]].forEach(c => {
    brush.beginShape(0.1);
    [[c[0]-26,c[1]],[c[0]-16,500],[c[0]+16,500],[c[0]+26,c[1]]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  });
  brush.fill("#ff9d3d", 230); brush.fillBleed(0.2);
  for (let i = 0; i < 6; i++) brush.circle(65 + i * 85, 250, 8, 0.2);
}
