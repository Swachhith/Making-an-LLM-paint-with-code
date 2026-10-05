async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function P(c,o,b,pts,k){brush.fill(c,o);brush.fillBleed(b);brush.fillTexture(0.45,0.4);brush.beginShape(k);for(const p of pts)brush.vertex(p[0],p[1]);brush.endShape(true);}
function draw() {
  translate(-width / 2, -height / 2);
  background("#eceaf4");
  brush.noStroke();
  P("#4048b0",200,0.3,[[0,0],[600,0],[600,600],[0,600]],0.2);
  P("#2a2c8a",200,0.3,[[0,340],[600,310],[600,600],[0,600]],0.3);
  P("#161862",210,0.3,[[0,470],[600,450],[600,600],[0,600]],0.3);
  // foliage mass
  for(let i=0;i<12;i++)P("#1a5a64",190,0.3,[[290+i*26,560],[300+i*26,440],[330+i*26,560]],0.5);
  for(let i=0;i<22;i++){const x=300+(i*47)%280,y=440+(i*29)%110;brush.fill("#ff6a00",230);brush.fillBleed(0.3);brush.circle(x,y,10+(i%4)*3,0.6);brush.fill("#ffa030",200);brush.circle(x,y,5,0.4);}
  // gardener kneeling, bending to right
  for(let i=0;i<3;i++){
  P("#0c0e48",235,0.25,[[60,560],[75,440],[140,330],[230,320],[270,400],[250,470],[270,560]],0.5);
  P("#1c2290",225,0.25,[[130,350],[220,335],[260,400],[170,430]],0.5);}
  P("#e8b890",230,0.2,[[170,230],[225,225],[235,290],[185,300]],0.7);
  P("#ffb020",230,0.2,[[155,190],[250,185],[245,235],[165,232]],0.5);
  P("#e8b890",225,0.2,[[250,370],[330,420],[320,455],[240,420]],0.4);
  P("#0c0e48",230,0.25,[[240,520],[330,540],[320,580],[230,570]],0.5);
}
