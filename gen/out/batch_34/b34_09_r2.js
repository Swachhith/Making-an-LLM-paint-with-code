async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function Q(c,o,b,pts,k){brush.fill(c,o);brush.fillBleed(b);brush.fillTexture(0.4,0.4);brush.beginShape(k);for(const p of pts)brush.vertex(p[0],p[1]);brush.endShape(true);}
function pea(cx,cy,s,a,c1,c2){
  const r=a*Math.PI/180,co=Math.cos(r),si=Math.sin(r);
  const f=(x,y)=>[cx+(x*co-y*si)*s,cy+(x*si+y*co)*s];
  for(let i=0;i<2;i++)Q(c1,225,0.3,[f(0,0),f(-70,-60),f(-50,-140),f(10,-150),f(60,-90)],0.9);
  Q(c2,215,0.3,[f(0,0),f(50,-30),f(90,-10),f(70,40),f(20,50)],0.9);
  Q("#fff0b8",200,0.25,[f(-10,-30),f(30,-50),f(40,0),f(0,20)],0.8);
}
function draw() {
  translate(-width / 2, -height / 2);
  background("#14241a");
  brush.noStroke();
  Q("#1e5a30",210,0.3,[[0,0],[600,0],[600,600],[0,600]],0.2);
  Q("#0c3a1e",215,0.3,[[0,260],[600,210],[600,600],[0,600]],0.3);
  Q("#d8b030",170,0.3,[[380,30],[570,70],[550,230],[400,200]],0.8);
  for(let i=0;i<5;i++)Q("#2a8a44",215,0.3,[[40+i*110,600],[70+i*110,380],[110+i*110,600]],0.5);
  Q("#3a9a50",220,0.25,[[240,600],[285,390],[330,390],[320,600]],0.4);
  Q("#2a7a40",210,0.25,[[150,330],[260,380],[250,410],[140,370]],0.5);
  pea(300,380,1.5,-5,"#f0b820","#c88010");
  pea(160,300,0.9,-25,"#f8d450","#d8a020");
  pea(440,300,1.0,25,"#fbe27c","#c89018");
  Q("#b88010",215,0.25,[[255,330],[300,385],[290,415],[245,375]],0.6);
}
