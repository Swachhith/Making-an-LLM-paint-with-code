async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function layer(col,op,bl,k,pts){brush.fill(col,op);brush.fillBleed(bl);brush.fillTexture(0.4,0.4);brush.beginShape(k);for(let i=0;i<pts.length;i+=2)brush.vertex(pts[i],pts[i+1]);brush.endShape(true);}
function draw() {
  translate(-width / 2, -height / 2);
  background("#161a48");
  brush.noStroke();
  layer("#2c3cb0",200,0.3,0.2,[0,0,600,0,600,600,0,600]);
  layer("#5a34b8",190,0.3,0.4,[0,0,600,0,600,300,0,260]);
  layer("#1a1e70",210,0.25,0.4,[0,460,300,430,600,470,600,600,0,600]);
  // light pool, dancers inside it
  layer("#8a82e8",200,0.3,0.3,[400,70,250,520,580,520]);
  layer("#b4a8f6",190,0.3,0.3,[400,90,300,510,520,510]);
  layer("#e0d6fc",170,0.25,0.3,[400,110,340,500,470,500]);
  for(let i=0;i<2;i++)layer("#0b0c34",235,0.2,0.1,[110,100,135,100,138,540,108,540]);
  for(let i=0;i<2;i++)layer("#0b0c34",235,0.2,0.1,[110,92,230,92,230,116,110,116]);
  layer("#6a50d0",120,0.3,0.4,[120,110,230,110,230,170,120,170]);
  brush.fill("#fff0b8",240);brush.fillBleed(0.2);brush.circle(222,118,15,0.3);
  // dancers: two leaning figures sharing a skirt sweep
  for(let i=0;i<3;i++){
  layer("#4a1480",225,0.25,0.5,[300,300,370,290,385,400,420,520,290,520,285,400]);
  layer("#141c70",225,0.25,0.5,[370,300,430,310,440,420,450,520,380,520,380,420]);
  layer("#24104a",235,0.2,0.8,[308,205,348,205,352,255,310,262]);
  layer("#0e1040",235,0.2,0.8,[390,215,430,213,432,262,392,265]);
  layer("#4a1480",225,0.2,0.5,[350,280,395,270,400,300,355,320]);}
  layer("#f0e8ff",190,0.3,0.5,[280,525,460,525,460,550,280,550]);
  for(let i=0;i<14;i++){brush.fill("#e8dcff",210);brush.circle(40+i*40,25+(i*53)%90,2+(i%3),0.3);}
}
