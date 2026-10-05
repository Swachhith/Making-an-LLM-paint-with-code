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
  brush.beginShape(0.4); brush.vertex(0,90); brush.vertex(600,70); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#5a0a1c", 190);
  brush.beginShape(0.4); brush.vertex(0,70); brush.vertex(600,60); brush.vertex(600,170); brush.vertex(0,190); brush.endShape(true);
  brush.fill("#d8284a", 150);
  brush.beginShape(0.5); brush.vertex(0,240); brush.vertex(600,220); brush.vertex(600,330); brush.vertex(0,350); brush.endShape(true);
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
}
