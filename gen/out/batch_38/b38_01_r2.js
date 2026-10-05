async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1e8cc");
  brush.noStroke(); brush.fillTexture(0.4, 0.4); brush.fillBleed(0.3);
  brush.fill("#e3b441", 175);
  brush.beginShape(0.5); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,340); brush.vertex(-60,320); brush.endShape(true);
  brush.fill("#f2d37a", 170);
  brush.beginShape(0.5); brush.vertex(-20,30); brush.vertex(380,10); brush.vertex(400,230); brush.vertex(-20,250); brush.endShape(true);
  brush.fill("#c98a2a", 150);
  brush.beginShape(0.5); brush.vertex(300,180); brush.vertex(660,150); brush.vertex(660,330); brush.vertex(300,330); brush.endShape(true);
  // distant hill
  brush.fill("#4a7a45", 170); brush.fillBleed(0.25);
  brush.beginShape(0.8); brush.vertex(-60,350); brush.vertex(120,300); brush.vertex(300,340); brush.vertex(480,290); brush.vertex(660,340); brush.vertex(660,420); brush.vertex(-60,420); brush.endShape(true);
  // main hillside, sweeping to bottom-left
  brush.fill("#2f5a35", 200);
  brush.beginShape(0.8); brush.vertex(-60,400); brush.vertex(220,370); brush.vertex(460,420); brush.vertex(660,390); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#1b3f24", 210);
  brush.beginShape(0.8); brush.vertex(-60,500); brush.vertex(200,470); brush.vertex(420,520); brush.vertex(660,480); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#d4a838", 150);
  brush.beginShape(0.8); brush.vertex(20,440); brush.vertex(250,410); brush.vertex(330,450); brush.vertex(100,490); brush.endShape(true);
  brush.fill("#c99a2e", 130);
  brush.beginShape(0.8); brush.vertex(380,560); brush.vertex(600,540); brush.vertex(620,600); brush.vertex(400,610); brush.endShape(true);
  const sh = [[90,475],[170,445],[230,505],[60,540],[150,570],[285,455]];
  for (const s of sh) {
    brush.fill("#fbf6e6", 235); brush.fillBleed(0.2);
    brush.circle(s[0], s[1], 32, 0.7); brush.circle(s[0]-12, s[1]-8, 20, 0.7);
    brush.fill("#2a2a22", 225);
    brush.circle(s[0]+22, s[1]-3, 9, 0.4);
    brush.beginShape(0.2); brush.vertex(s[0]-8,s[1]+8); brush.vertex(s[0]+8,s[1]+8); brush.vertex(s[0]+6,s[1]+24); brush.vertex(s[0]-6,s[1]+24); brush.endShape(true);
  }
  // shepherd, right third
  brush.fill("#7a4a22", 225); brush.fillBleed(0.2);
  brush.beginShape(0.3); brush.vertex(448,330); brush.vertex(486,330); brush.vertex(500,440); brush.vertex(432,440); brush.endShape(true);
  brush.fill("#5a3216", 200);
  brush.beginShape(0.3); brush.vertex(452,340); brush.vertex(480,340); brush.vertex(490,430); brush.vertex(442,430); brush.endShape(true);
  brush.fill("#3b2412", 230);
  brush.beginShape(0.3); brush.vertex(444,435); brush.vertex(466,435); brush.vertex(464,520); brush.vertex(442,520); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(468,435); brush.vertex(490,435); brush.vertex(494,520); brush.vertex(470,520); brush.endShape(true);
  brush.fill("#e0b088", 235); brush.circle(467, 312, 14, 0.3);
  brush.fill("#2a1a0c", 225); brush.circle(467, 302, 17, 0.3);
  brush.fill("#4a3018", 210);
  brush.beginShape(0.2); brush.vertex(510,285); brush.vertex(528,285); brush.vertex(530,525); brush.vertex(512,525); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(495,285); brush.vertex(528,285); brush.vertex(526,305); brush.vertex(500,308); brush.endShape(true);
  brush.fill("#0f2f1c", 160);
  brush.beginShape(0.8); brush.vertex(420,520); brush.vertex(560,510); brush.vertex(580,545); brush.vertex(430,555); brush.endShape(true);
  brush.fill("#f0c850", 140);
  brush.circle(100, 80, 40, 0.8);
}
