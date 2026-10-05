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
  P("#2a2f90",200,0.3,[[0,0],[600,0],[600,600],[0,600]],0.2);
  P("#1c1f6e",200,0.3,[[0,0],[600,0],[600,600],[0,600]],0.2);
  P("#3a5a8a",190,0.3,[[0,380],[600,360],[600,600],[0,600]],0.3);
  // petals as paper, shadows painted between
  const n=7;
  for(let i=0;i<n;i++){const a=i*360/n+10;const c=Math.cos(a*Math.PI/180),s=Math.sin(a*Math.PI/180);
   const f=(x,y)=>[300+x*c-y*s,300+x*s+y*c];
   P("#7a82c8",190,0.3,[f(10,-25),f(120,-90),f(220,-40),f(230,40),f(120,80),f(10,25)],0.8);
   P("#a4aada",150,0.3,[f(20,-15),f(120,-60),f(190,-20),f(190,30),f(100,50),f(20,15)],0.8);
  }
  for(let i=0;i<5;i++){const a=i*72+30,c=Math.cos(a*Math.PI/180),s=Math.sin(a*Math.PI/180);
   const f=(x,y)=>[300+x*c-y*s,300+x*s+y*c];
   P("#f0f0f8",235,0.2,[f(0,-35),f(70,-60),f(120,-20),f(110,35),f(60,50),f(0,35)],0.8);
  }
  P("#f0a010",230,0.3,[[270,270],[330,270],[335,330],[265,330]],0.9);
}
