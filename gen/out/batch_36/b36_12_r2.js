async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4e7cf");
  brush.noStroke();
  // warm ochre wash behind
  brush.fill("#e8a317", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  [[0,0],[600,0],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#c4451c", 160); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  [[0,380],[600,340],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // crown, big dark mass
  brush.fill("#2b1608", 215); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.9);
  [[60,230],[90,120],[180,50],[300,25],[420,50],[515,120],[545,230],[470,290],[300,270],[130,290]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#c4451c", 150); brush.fillBleed(0.3);
  brush.beginShape(0.9);
  [[160,150],[260,90],[390,100],[440,170],[340,200],[220,210]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // hanging roots, wide soft strands
  brush.fill("#3a1d0a", 220); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  for (let i = 0; i < 9; i++) {
    const x = 90 + i * 55, len = 150 + (i * 53) % 130;
    brush.beginShape(0.5);
    [[x-9,250],[x+9,250],[x+7+sin(i*80)*6,250+len/2],[x+3,250+len],[x-5,250+len],[x-6,250+len/2]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  }
  // main trunk
  brush.fill("#1c0e05", 235);
  brush.beginShape(0.6);
  [[250,600],[265,430],[262,280],[345,280],[338,430],[360,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // darker crown core, glowing ochre gaps, aerial roots reaching ground
  brush.fill("#140902", 215); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.9);
  [[110,215],[160,120],[300,80],[440,120],[490,215],[400,250],[200,250]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#e8a317", 190); brush.fillBleed(0.3);
  brush.circle(170, 180, 22, 0.5); brush.circle(430, 160, 24, 0.5);
  brush.fill("#2b1608", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  [[90,420],[190,520],[410,520],[510,420]].forEach(c => {
    brush.beginShape(0.5);
    [[c[0]-9,300],[c[0]+9,300],[c[0]+8,c[1]+80],[c[0]-8,c[1]+80]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  });
  // limit palette: re-darken trunk base, ochre light between roots
  brush.fill("#1c0e05", 240); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  [[225,600],[250,520],[262,430],[342,430],[355,520],[380,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#f0b429", 190); brush.fillBleed(0.3);
  brush.beginShape(0.9);
  [[130,420],[190,400],[230,500],[140,520]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.beginShape(0.9);
  [[390,420],[470,410],[470,520],[380,520]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
}
