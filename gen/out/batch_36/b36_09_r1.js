async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f0e2");
  brush.noStroke();
  // wall wash
  brush.fill("#e8b04a", 180); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  [[0,0],[600,0],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // window, right side, bright sky blue
  brush.fill("#1e88e5", 210); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  [[400,70],[400,330],[570,330],[570,70]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#e53935", 200);
  brush.beginShape(0.1);
  [[400,330],[400,350],[570,350],[570,330]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // armchair
  brush.fill("#c62828", 225); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  [[220,330],[210,500],[330,560],[420,500],[415,330],[360,300],[260,300]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // grandmother body, cardigan
  brush.fill("#00897b", 225); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  [[250,500],[250,390],[275,335],[340,330],[365,390],[375,500]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // head and hair
  brush.fill("#e0a888", 235); brush.fillBleed(0.2);
  brush.circle(312, 295, 30, 0.25);
  brush.fill("#e8e8f0", 235); brush.fillBleed(0.2);
  brush.circle(312, 275, 28, 0.35);
  // knitting arms and wool
  brush.fill("#00695c", 220);
  brush.beginShape(0.7);
  [[270,380],[310,430],[375,440],[375,415],[320,395]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#8e24aa", 220); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  [[300,445],[350,430],[390,470],[330,500],[290,480]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // rug floor
  brush.fill("#6a1b9a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  [[0,540],[600,530],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // darker chair shadow, window light, yarn ball and needles
  brush.fill("#8e0000", 200); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  [[215,360],[210,500],[250,520],[250,380]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#fff8e1", 190); brush.fillBleed(0.3);
  brush.beginShape(0.1);
  [[420,90],[420,320],[550,320],[550,90]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#1565c0", 200); brush.fillBleed(0.3);
  brush.beginShape(0.1);
  [[428,98],[428,200],[540,200],[540,98]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#004d40", 210);
  brush.beginShape(0.6);
  [[255,500],[255,400],[285,345],[300,345],[290,500]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#ff7043", 230); brush.fillBleed(0.2);
  brush.circle(440, 560, 28, 0.3);
}
