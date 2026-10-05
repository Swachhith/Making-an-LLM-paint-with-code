async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece2cc");
  brush.noStroke();
  // hazy sky, burnt orange horizon
  brush.fill("#e8b858", 205); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,270); brush.vertex(0,270); brush.endShape(true);
  brush.fill("#c85a14", 200);
  brush.beginShape(0.5); brush.vertex(0,200); brush.vertex(600,210); brush.vertex(600,290); brush.vertex(0,285); brush.endShape(true);
  // distant dark treeline
  brush.fill("#2a1e12", 215); brush.fillBleed(0.25);
  brush.beginShape(0.6); brush.vertex(0,285); brush.vertex(80,262); brush.vertex(180,278); brush.vertex(260,268); brush.vertex(360,272); brush.vertex(450,258); brush.vertex(600,280); brush.vertex(600,300); brush.vertex(0,300); brush.endShape(true);
  // bog ground: dark peat then orange-brown reflecting sky
  brush.fill("#2a1e12", 225); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,295); brush.vertex(600,295); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#c8601a", 195);
  for (const [x,y,w,h] of [[20,330,210,45],[360,325,230,40],[10,430,200,70],[400,440,190,80],[230,360,70,22]]) {
    brush.beginShape(0.7); brush.vertex(x,y); brush.vertex(x+w*0.6,y-6); brush.vertex(x+w,y+h*0.4); brush.vertex(x+w*0.8,y+h); brush.vertex(x+10,y+h*0.9); brush.endShape(true);
  }
  brush.fill("#e8b858", 150);
  for (const [x,y,w,h] of [[40,345,120,18],[390,338,130,16],[40,460,110,28]]) {
    brush.beginShape(0.7); brush.vertex(x,y); brush.vertex(x+w,y+2); brush.vertex(x+w*0.8,y+h); brush.vertex(x+8,y+h); brush.endShape(true);
  }
  // boardwalk: perspective, narrow at the horizon
  brush.fill("#5a3010", 235); brush.fillBleed(0.15);
  brush.beginShape(0.2); brush.vertex(292,296); brush.vertex(312,296); brush.vertex(470,600); brush.vertex(150,600); brush.endShape(true);
  for (let i = 0; i < 9; i++) {
    const t = i/8, y = 300 + t*t*290, hw = 10 + t*t*155 + t*8, cx = 302 + t*t*8 - t*t*t*0;
    brush.fill("#d8983a", 205); brush.fillBleed(0.15);
    brush.beginShape(0.1); brush.vertex(cx-hw,y); brush.vertex(cx+hw,y); brush.vertex(cx+hw+4,y+4+t*14); brush.vertex(cx-hw-4,y+4+t*14); brush.endShape(true);
  }
  // reeds & stumps
  for (const [x,y] of [[70,380],[120,400],[500,370],[540,400],[470,330]]) {
    brush.fill("#1a1208", 225); brush.fillBleed(0.15);
    brush.beginShape(0.3); brush.vertex(x,y); brush.vertex(x+4,y-70); brush.vertex(x+20,y-68); brush.vertex(x+22,y); brush.endShape(true);
  }
}
