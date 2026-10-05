async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbe9d0");
  brush.noStroke();
  // glowing sky
  brush.fill("#ffb347", 210); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  [[0,0],[600,0],[600,360],[0,360]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#ff6f91", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  [[0,0],[600,0],[600,160],[300,220],[0,170]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#fff2b8", 220); brush.fillBleed(0.3);
  brush.circle(300, 280, 90, 0.5);
  // dark ground and bodies
  brush.fill("#1a1030", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  [[0,430],[200,410],[400,425],[600,405],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // child A left
  brush.fill("#2a1b4a", 235); brush.fillBleed(0.15); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  [[60,600],[75,440],[110,370],[190,370],[225,440],[235,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.circle(150, 320, 42, 0.25);
  brush.beginShape(0.7);
  [[200,400],[260,330],[300,270],[320,285],[275,355],[225,440]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // child B right
  brush.fill("#3a1f55", 235);
  brush.beginShape(0.6);
  [[330,600],[345,460],[385,395],[465,395],[505,460],[520,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.circle(425, 350, 38, 0.25);
  brush.beginShape(0.7);
  [[355,430],[320,360],[330,300],[350,310],[360,370],[385,440]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // bubbles, light on dark need paper-pale
  brush.fill("#ffffff", 120);
  const bs = [[300,250,16],[250,200,12],[360,180,20],[200,140,10],[310,110,14],[440,230,12],[120,220,10]];
  for (const b of bs) { brush.fill("#d6f0ff", 200); brush.fillBleed(0.1); brush.circle(b[0], b[1], b[2], 0.1); }
  // rim light on children, hotter horizon, more bubbles
  brush.fill("#ff8a65", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  [[0,330],[200,300],[400,320],[600,300],[600,390],[0,400]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#fff6c9", 235);
  brush.circle(300, 292, 55, 0.4);
  brush.fill("#1a1030", 245);
  brush.beginShape(0.6);
  [[70,600],[85,450],[115,385],[185,385],[215,450],[225,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.circle(150, 322, 40, 0.25);
  brush.fill("#e0f4ff", 210);
  for (let i = 0; i < 9; i++) brush.circle(260 + (i * 53) % 230, 80 + (i * 37) % 170, 6 + (i % 4) * 4, 0.1);
  // darken ground silhouettes again with warm rim, tiny bubbles
  brush.fill("#0e0820", 245); brush.fillBleed(0.15);
  brush.beginShape(0.6);
  [[330,600],[345,460],[385,400],[465,400],[505,460],[520,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.circle(425, 352, 36, 0.25);
  brush.fill("#ff8a50", 170); brush.fillBleed(0.3);
  brush.beginShape(0.6);
  [[332,470],[345,420],[360,420],[352,470]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#ffffff", 235);
  for (let i = 0; i < 12; i++) brush.circle(240 + (i * 41) % 260, 60 + (i * 29) % 220, 3 + (i % 3) * 2, 0.1);
}
