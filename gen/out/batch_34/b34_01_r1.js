async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function wash(col,op,bl,k,pts){brush.fill(col,op);brush.fillBleed(bl);brush.fillTexture(0.4,0.4);brush.beginShape(k);for(let i=0;i<pts.length;i+=2)brush.vertex(pts[i],pts[i+1]);brush.endShape(true);}
function draw() {
  translate(-width / 2, -height / 2);
  background("#161a48");
  brush.noStroke();
  wash("#2c3cb0",200,0.3,0.2,[0,0,600,0,600,600,0,600]);
  wash("#5a34b8",190,0.3,0.4,[0,0,600,0,600,300,0,260]);
  wash("#1a1e70",210,0.25,0.4,[0,440,300,410,600,450,600,600,0,600]);
  // light pool
  wash("#7f78e0",200,0.3,0.3,[430,70,300,520,560,520]);
  wash("#a99bf0",190,0.3,0.3,[430,90,350,500,510,500]);
  wash("#d8cdfa",170,0.25,0.3,[430,110,390,480,470,480]);
  // pole on right
  for(let i=0;i<2;i++){wash("#0b0c34",235,0.2,0.1,[420,100,445,100,448,520,418,520]);
  wash("#0b0c34",235,0.2,0.1,[360,92,445,92,445,118,360,118]);}
  brush.fill("#fff0b8",240);brush.fillBleed(0.2);brush.circle(372,120,14,0.3);
  // dancers, left of pool, lit
  for(let i=0;i<3;i++){
  wash("#5a1c88",220,0.25,0.5,[130,330,185,320,200,430,205,500,120,500,118,430]);
  wash("#1c2a7a",220,0.25,0.5,[190,330,245,335,260,430,250,500,200,500,200,430]);
  wash("#2a1250",230,0.2,0.8,[140,262,172,262,176,300,142,304]);
  wash("#14143e",230,0.2,0.8,[204,270,238,268,240,308,206,310]);}
  wash("#a89cf0",200,0.3,0.5,[100,505,300,505,300,540,100,540]);
  for(let i=0;i<14;i++){brush.fill("#e8dcff",210);brush.circle(40+i*40,25+(i*53)%90,2+(i%3),0.3);}
}
