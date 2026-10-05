async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function P(c,o,b,pts,k){brush.fill(c,o);brush.fillBleed(b);brush.fillTexture(0.4,0.4);brush.beginShape(k);for(const p of pts)brush.vertex(p[0],p[1]);brush.endShape(true);}
function frill(cx,cy,s,col1,col2){
  for(let i=0;i<6;i++){const a=(-100+i*28)*Math.PI/180;const c=Math.cos(a),sn=Math.sin(a);const f=(x,y)=>[cx+(x*c-y*sn)*s,cy+(x*sn+y*c)*s];
   P(col1,225,0.3,[f(0,0),f(-45,-60),f(0,-110),f(50,-60)],0.9);}
  P(col2,215,0.3,[[cx-40*s,cy-30*s],[cx,cy-70*s],[cx+40*s,cy-30*s],[cx,cy+10*s]],0.9);
}
function draw() {
  translate(-width / 2, -height / 2);
  background("#14241a");
  brush.noStroke();
  P("#1e5a30",210,0.3,[[0,0],[600,0],[600,600],[0,600]],0.2);
  P("#0c3a1e",215,0.3,[[0,260],[600,210],[600,600],[0,600]],0.3);
  P("#d8b030",180,0.3,[[380,30],[570,70],[550,230],[400,200]],0.8);
  for(let i=0;i<4;i++)P("#2a8a44",215,0.3,[[80+i*80,600],[110+i*80,300],[150+i*80,600]],0.5);
  for(let i=0;i<2;i++)P("#3a9a50",225,0.25,[[250,600],[280,380],[330,380],[330,600]],0.4);
  // side-on sweet pea: standard (back), wings, keel
  frill(300,330,1.2,"#e8b020","#c88010");
  frill(210,250,0.8,"#f4cc40","#d8a020");
  frill(420,260,0.7,"#f8dc70","#c89018");
  P("#ffe8a0",200,0.25,[[270,360],[330,360],[310,420],[280,420]],0.8);
  P("#b88010",215,0.25,[[250,330],[300,380],[290,410],[240,370]],0.6);
}
