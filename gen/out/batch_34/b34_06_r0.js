async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function P(c,o,b,pts,k){brush.fill(c,o);brush.fillBleed(b);brush.fillTexture(0.4,0.4);brush.beginShape(k);for(const p of pts)brush.vertex(p[0],p[1]);brush.endShape(true);}
function bloom(x,y,s,a){
  const f=(px,py)=>[x+(px*Math.cos(a)-py*Math.sin(a))*s,y+(px*Math.sin(a)+py*Math.cos(a))*s];
  P("#1f7a3a",200,0.25,[f(-30,40),f(-20,80),f(30,80),f(20,40)],0.5);
  P("#0c9a8a",220,0.25,[f(-40,30),f(-10,-10),f(10,-10),f(40,30),f(0,50)],0.6);
  P("#ff6a10",230,0.3,[f(-45,0),f(-90,-60),f(-50,-120),f(-10,-40)],0.8);
  P("#e0204a",230,0.3,[f(-10,-10),f(0,-120),f(20,-60),f(10,-10)],0.8);
  P("#ffb800",230,0.3,[f(10,0),f(40,-110),f(70,-80),f(40,0)],0.8);
  P("#4020c0",230,0.3,[f(20,-10),f(80,-40),f(100,-10),f(40,10)],0.8);
}
function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf5e6");
  brush.noStroke();
  P("#a8e0d0",160,0.3,[[40,60],[560,40],[580,540],[60,570]],0.4);
  P("#2a8a4a",200,0.3,[[0,400],[300,520],[600,420],[600,600],[0,600]],0.5);
  P("#1a7040",200,0.3,[[250,250],[320,600],[360,600],[330,250]],0.2);
  bloom(200,330,1.4,-10);bloom(400,240,1.2,20);bloom(330,430,1.0,0);
}
