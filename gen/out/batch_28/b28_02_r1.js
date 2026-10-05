async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1a0d10");
  brush.noStroke();
  brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.fill("#8c1230", 190);
  brush.beginShape(0.4); brush.vertex(-70,90); brush.vertex(670,70); brush.vertex(670,600); brush.vertex(-70,600); brush.endShape(true);
  brush.fill("#5a0a1c", 190);
  brush.beginShape(0.4); brush.vertex(-70,70); brush.vertex(670,60); brush.vertex(670,170); brush.vertex(-70,190); brush.endShape(true);
  brush.fill("#d8284a", 150);
  brush.beginShape(0.5); brush.vertex(-70,240); brush.vertex(670,220); brush.vertex(670,330); brush.vertex(-70,350); brush.endShape(true);
  for (let i=0;i<22;i++){
    const x=(i*97)%560+20, y=130+((i*61)%440), r=22+((i*13)%46);
    brush.fill(i%3? "#c01c40":"#6d0e24", 200);
    brush.beginShape(0.8);
    for(let a=0;a<360;a+=45){ const k=r*(0.8+0.3*Math.sin(a*3+i)); brush.vertex(x+k*cos(a), y+k*0.7*sin(a)); }
    brush.endShape(true);
    brush.fill("#0a0306", 190);
    brush.beginShape(0.8);
    for(let a=0;a<360;a+=60){ const k=r*0.6; brush.vertex(x+r*0.15+k*cos(a), y+r*0.25+k*0.5*sin(a)); }
    brush.endShape(true);
  }
  brush.fill("#fff1d0", 230); brush.circle(380,360,14,0.5);
  brush.fill("#fff1d0", 200); brush.circle(392,368,7,0.5);

  for (let i=0;i<14;i++){
    const x=(i*131)%540+30, y=300+((i*53)%260), r=16+(i%4)*9;
    brush.fill("#2a0610", 200);
    brush.beginShape(0.8); brush.vertex(x-r,y+r*0.5); brush.vertex(x,y-r*0.5); brush.vertex(x+r*1.2,y+r*0.2); brush.vertex(x+r*0.8,y+r*0.9); brush.endShape(true);
    brush.fill("#e04a60", 150);
    brush.circle(x-r*0.2,y-r*0.3,r*0.35,0.7);
  }
  brush.fill("#fff1d0", 235); brush.circle(380,360,9,0.4);
}
