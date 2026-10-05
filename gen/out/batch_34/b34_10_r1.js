async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function P(c,o,b,pts,k){brush.fill(c,o);brush.fillBleed(b);brush.fillTexture(0.4,0.4);brush.beginShape(k);for(const p of pts)brush.vertex(p[0],p[1]);brush.endShape(true);}
function draw() {
  translate(-width / 2, -height / 2);
  background("#f0f0f6");
  brush.noStroke();
  P("#2a2f98",210,0.3,[[0,0],[600,0],[600,600],[0,600]],0.2);
  P("#181c70",210,0.3,[[0,0],[600,0],[600,300],[0,320]],0.3);
  P("#3050a0",190,0.3,[[0,420],[600,380],[600,600],[0,600]],0.3);
  // leaves
  for(let i=0;i<2;i++){P("#0a4a3a",225,0.3,[[0,420],[140,350],[170,440],[40,520]],0.6);P("#0a4a3a",225,0.3,[[600,440],[470,360],[440,460],[560,520]],0.6);}
  // shadows around petals (paper stays), several layered
  const n=7;
  for(let k=0;k<2;k++)for(let i=0;i<n;i++){const a=i*360/n+10,c=Math.cos(a*Math.PI/180),s=Math.sin(a*Math.PI/180);
   const f=(x,y)=>[300+x*c-y*s,300+x*s+y*c];
   P("#7078c8",200,0.3,[f(10,-30),f(120,-100),f(235,-45),f(245,45),f(120,95),f(10,30)],0.8);}
  for(let i=0;i<n;i++){const a=i*360/n+10+25,c=Math.cos(a*Math.PI/180),s=Math.sin(a*Math.PI/180);
   const f=(x,y)=>[300+x*c-y*s,300+x*s+y*c];
   P("#f4f4fc",235,0.2,[f(15,-25),f(110,-70),f(190,-30),f(190,35),f(100,65),f(15,25)],0.8);
   P("#9aa4e0",150,0.3,[f(15,-5),f(100,-15),f(180,0),f(100,10)],0.8);}
  P("#ffa010",235,0.3,[[265,265],[335,265],[340,335],[260,335]],0.9);
  P("#ff7a00",200,0.3,[[285,285],[320,285],[320,320],[285,320]],0.9);
}
