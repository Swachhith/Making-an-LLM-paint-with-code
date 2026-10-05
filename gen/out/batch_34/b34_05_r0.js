async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function P(c,o,b,pts,k){brush.fill(c,o);brush.fillBleed(b);brush.fillTexture(0.45,0.4);brush.beginShape(k);for(const p of pts)brush.vertex(p[0],p[1]);brush.endShape(true);}
function draw() {
  translate(-width / 2, -height / 2);
  background("#ece8f0");
  brush.noStroke();
  P("#4b52b0",190,0.3,[[0,0],[600,0],[600,600],[0,600]],0.2);
  P("#2c2f86",200,0.3,[[0,330],[600,300],[600,600],[0,600]],0.3);
  P("#1c1c66",200,0.3,[[0,470],[600,450],[600,600],[0,600]],0.3);
  // flowers (accent: orange)
  for(let i=0;i<16;i++){const x=290+(i*61)%300,y=420+(i*37)%150;brush.fill("#ff7a1a",225);brush.fillBleed(0.3);brush.circle(x,y,14+(i%4)*3,0.6);}
  for(let i=0;i<10;i++){P("#1f6a5a",190,0.3,[[300+i*30,500],[310+i*30,430],[330+i*30,500]],0.5);}
  // gardener, kneeling, left
  P("#171a58",235,0.25,[[90,520],[110,350],[200,310],[250,400],[270,520]],0.5);
  P("#232a8a",220,0.25,[[120,400],[210,380],[240,430],[130,450]],0.5);
  P("#e0b090",225,0.2,[[155,260],[205,255],[210,310],[160,315]],0.7);
  P("#e0a040",220,0.2,[[135,225],[225,225],[215,265],[150,262]],0.5);
  P("#232a8a",220,0.25,[[230,380],[300,420],[290,450],[225,420]],0.5);
}
