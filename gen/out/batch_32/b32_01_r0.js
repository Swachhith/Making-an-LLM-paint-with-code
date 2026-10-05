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
}
