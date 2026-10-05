async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f1ec");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#f2c9d4", 190);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // land masses pastel
  const lands = [["#b9dcc0",[[0,200],[140,170],[230,260],[200,420],[110,520],[0,560]]],
                 ["#c9e3b0",[[600,160],[470,200],[400,330],[430,470],[520,600],[600,600]]],
                 ["#f1dba8",[[250,0],[380,0],[350,90],[290,140],[240,80]]]];
  for (const [c,pts] of lands) {
    brush.fill(c, 210); brush.fillBleed(0.25);
    brush.beginShape(0.6); for (const p of pts) brush.vertex(p[0],p[1]); brush.endShape(true);
  }
  // river channels widening toward the bottom
  brush.fill("#8fbfe0", 200);
  brush.beginShape(0.7);
  [[285,130],[315,130],[320,250],[345,340],[370,450],[420,600],[170,600],[250,450],[275,340],[290,250]].forEach(p=>brush.vertex(p[0],p[1]));
  brush.endShape(true);
  brush.fill("#6fa6d4", 170);
  brush.beginShape(0.7);
  [[290,150],[312,150],[316,260],[335,350],[345,470],[330,600],[250,600],[270,470],[282,350],[292,260]].forEach(p=>brush.vertex(p[0],p[1]));
  brush.endShape(true);
  // distributaries
  brush.fill("#8fbfe0", 190);
  brush.beginShape(0.6); [[270,380],[300,360],[200,420],[130,470],[140,520],[220,470]].forEach(p=>brush.vertex(p[0],p[1])); brush.endShape(true);
  brush.beginShape(0.6); [[340,360],[370,380],[440,430],[490,520],[460,540],[420,460]].forEach(p=>brush.vertex(p[0],p[1])); brush.endShape(true);
  brush.fill("#e9a9b8", 170);
  brush.beginShape(0.6); [[300,580],[340,520],[380,600]].forEach(p=>brush.vertex(p[0],p[1])); brush.endShape(true);
  // green marsh dabs
  brush.fill("#8cc49a", 190);
  for (let i=0;i<14;i++) brush.circle(60+i*38%520, 230+(i*71)%300, 14+(i%4)*6, 0.5);
  // second pass
  brush.fill("#e87a9c", 190); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(300,0); brush.vertex(330,0); brush.vertex(330,140); brush.vertex(300,140); brush.endShape(true);
  brush.fill("#4a90c8", 190); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(290,140); brush.vertex(315,140); brush.vertex(322,260); brush.vertex(345,350); brush.vertex(330,430); brush.vertex(250,470); brush.vertex(262,350); brush.vertex(285,260); brush.endShape(true);
  brush.fill("#4a90c8", 170); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(262,360); brush.vertex(130,455); brush.vertex(90,520); brush.vertex(125,530); brush.vertex(190,470); brush.vertex(275,400); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(345,360); brush.vertex(470,440); brush.vertex(520,560); brush.vertex(490,570); brush.vertex(430,470); brush.vertex(330,400); brush.endShape(true);
  brush.fill("#4aa86a", 190); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.circle(90,300,26,0.6);
  brush.circle(160,380,20,0.6);
  brush.circle(470,300,28,0.6);
  brush.circle(520,420,22,0.6);
  brush.circle(60,480,24,0.6);
  
  // second pass
  brush.fill("#d86a90", 170); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,330); brush.vertex(110,300); brush.vertex(200,360); brush.vertex(120,420); brush.vertex(0,400); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(600,60); brush.vertex(520,90); brush.vertex(440,170); brush.vertex(500,200); brush.vertex(600,160); brush.endShape(true);
  brush.fill("#3a78b8", 190); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(300,170); brush.vertex(312,170); brush.vertex(318,300); brush.vertex(300,300); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(255,420); brush.vertex(330,410); brush.vertex(360,520); brush.vertex(240,540); brush.endShape(true);
  brush.fill("#2a8a5a", 180); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.circle(110,330,18,0.7);
  brush.circle(190,440,16,0.7);
  brush.circle(500,360,20,0.7);
  brush.circle(430,500,16,0.7);
  
}
