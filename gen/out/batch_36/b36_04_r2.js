async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8edf2");
  brush.noStroke();
  // heavy slate sky
  brush.fill("#2b3a55", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  [[0,0],[600,0],[600,360],[0,360]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#101a2e", 190); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  [[0,0],[600,0],[600,120],[300,180],[0,140]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // distant peaks
  brush.fill("#5b6f94", 200); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  [[0,380],[90,270],[170,330],[290,210],[400,320],[490,250],[600,340],[600,400],[0,400]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#0e1930", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  [[290,210],[330,290],[300,330],[270,300]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // forest strip
  brush.fill("#0b1f2a", 230); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  for (let i = 0; i < 12; i++) {
    const x = 20 + i * 52, h = 40 + (i * 37) % 30;
    brush.beginShape(0.1);
    [[x-22,400],[x,400-h],[x+22,400]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  }
  // snow field: left mostly paper, with blue shadows
  brush.fill("#8fa6cc", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  [[0,400],[600,395],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#3b4f7e", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  [[0,520],[150,490],[330,540],[520,500],[600,530],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // hut walls
  brush.fill("#5a2e1c", 235); brush.fillBleed(0.15); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  [[260,470],[260,415],[360,415],[360,470]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // roof with heavy snow (paper) above
  brush.fill("#2a1a14", 230); brush.fillBleed(0.15); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  [[245,420],[310,370],[375,420],[360,432],[310,395],[260,432]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // lit window
  brush.fill("#ffb703", 235); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  [[283,435],[283,455],[305,455],[305,435]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // glow on snow
  brush.fill("#f4a261", 150); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.circle(294, 500, 28, 0.6);
  // heavier snow cap on roof, darker pines, long blue shadows
  brush.fill("#1b2d4d", 210); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  [[360,470],[460,480],[600,510],[600,540],[440,520],[350,485]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#f4f7fb", 235); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.6);
  [[255,418],[310,376],[365,418],[350,416],[310,388],[270,416]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#07121c", 230); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  for (let i = 0; i < 6; i++) {
    const x = 60 + i * 95;
    brush.beginShape(0.1);
    [[x-16,404],[x,350 - (i%2)*10],[x+16,404]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  }
  brush.fill("#ffb703", 200); brush.fillBleed(0.3);
  brush.circle(294, 444, 10, 0.3);
  // dark sky corners, warm chimney smoke, window glow
  brush.fill("#0a1226", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  [[0,0],[200,0],[0,260]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.beginShape(0.5);
  [[600,0],[400,0],[600,240]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#ffc233", 235); brush.fillBleed(0.2);
  brush.beginShape(0.1);
  [[283,435],[283,455],[305,455],[305,435]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#6b7c9e", 160); brush.fillBleed(0.3);
  brush.circle(335, 350, 14, 0.6);
}
