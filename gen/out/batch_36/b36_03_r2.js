async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef0f2");
  brush.noStroke();
  // sky bands
  const sky = [["#f4a259", 200, 0, 330], ["#e76f51", 170, 0, 230], ["#5b3a6e", 190, 0, 130]];
  for (const s of sky) {
    brush.fill(s[0], s[1]); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    [[0, s[2]],[600, s[2]],[600, s[3]+30],[300, s[3]-10],[0, s[3]+20]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  }
  // sun disc left as paper-ish glow
  brush.fill("#fff3d6", 220); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.circle(430, 270, 40, 0.3);
  // frozen lake
  brush.fill("#1d3557", 220); brush.fillBleed(0.25); brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.3);
  [[0,340],[600,340],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#0b1d3a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  [[0,450],[600,430],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // reflection streak
  brush.fill("#f4a259", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  [[390,350],[470,350],[490,520],[370,520]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // distant shore
  brush.fill("#2a2140", 220); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  [[0,345],[90,320],[200,335],[320,318],[420,338],[520,322],[600,335],[600,360],[0,360]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // skater silhouette, arm and leg extended in glide
  brush.fill("#0c0a14", 240); brush.fillBleed(0.15); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  [[225,430],[232,360],[245,300],[262,282],[280,300],[285,360],[290,430]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.beginShape(0.6);
  [[250,300],[170,285],[110,270],[112,250],[175,262],[260,275]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.beginShape(0.6);
  [[275,300],[340,280],[380,262],[390,280],[345,305],[285,325]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.beginShape(0.6);
  [[262,420],[330,445],[400,470],[395,490],[320,470],[255,440]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.circle(262, 262, 20, 0.2);
  // scarf
  brush.fill("#c1121f", 220); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  [[255,282],[220,290],[170,310],[175,325],[225,312],[270,296]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // deeper shadows on ice, brighter sun glow, skate trail
  brush.fill("#050a1a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  [[0,560],[200,520],[420,545],[600,520],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#ffd08a", 190); brush.fillBleed(0.3);
  brush.circle(430, 300, 70, 0.5);
  brush.fill("#e3e9f2", 160); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  [[40,500],[200,475],[380,490],[380,505],[200,500],[40,520]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#0c0a14", 235);
  brush.beginShape(0.6);
  [[232,420],[240,360],[270,350],[282,420]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // darker skater on top, shadow on ice
  brush.fill("#04030a", 245); brush.fillBleed(0.1);
  brush.beginShape(0.6);
  [[228,430],[236,355],[248,300],[262,285],[278,300],[284,360],[288,430]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#0a1530", 190); brush.fillBleed(0.3);
  brush.beginShape(0.8);
  [[230,470],[330,480],[420,500],[330,510],[240,495]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#e63946", 230);
  brush.circle(262, 285, 6, 0.3);
}
