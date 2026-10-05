async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function P(c,o,b,pts,k){brush.fill(c,o);brush.fillBleed(b);brush.fillTexture(0.4,0.4);brush.beginShape(k);for(const p of pts)brush.vertex(p[0],p[1]);brush.endShape(true);}
function bloom(x,y,s,a){
  const f=(px,py)=>{const r=a*Math.PI/180;return [x+(px*Math.cos(r)-py*Math.sin(r))*s,y+(px*Math.sin(r)+py*Math.cos(r))*s];};
  // boat-shaped bract
  for(let i=0;i<2;i++)P("#0a8a3a",225,0.25,[f(-15,60),f(-60,0),f(-30,-30),f(40,-40),f(90,10),f(30,60)],0.7);
  P("#c01030",235,0.2,[f(-40,10),f(-10,-25),f(60,-20),f(70,10)],0.6);
  // petals
  for(let i=0;i<2;i++)P("#ff5a00",235,0.3,[f(-20,-20),f(-70,-100),f(-30,-170),f(10,-70)],0.8);
  for(let i=0;i<2;i++)P("#ff9a00",235,0.3,[f(0,-20),f(20,-110),f(60,-150),f(50,-40)],0.8);
  for(let i=0;i<2;i++)P("#2a28d0",235,0.3,[f(30,-10),f(100,-50),f(120,-20),f(60,10)],0.8);
}
function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf5e6");
  brush.noStroke();
  P("#8ae0c8",170,0.3,[[40,60],[560,40],[580,540],[60,570]],0.4);
  P("#0e8a60",205,0.3,[[0,440],[300,500],[600,440],[600,600],[0,600]],0.5);
  for(const s of [[190,330,150],[400,260,160],[320,430,150]]){P("#0a7a40",210,0.3,[[s[0]-10,s[1]+60],[s[0]-5,600],[s[0]+25,600],[s[0]+20,s[1]+60]],0.2);}
  P("#0a7a40",200,0.3,[[60,560],[170,440],[250,520],[150,600]],0.5);
  P("#0a7a40",200,0.3,[[430,600],[500,470],[600,530],[600,600]],0.5);
  bloom(190,330,1.3,-12);bloom(400,260,1.2,18);bloom(320,440,0.9,0);
}
