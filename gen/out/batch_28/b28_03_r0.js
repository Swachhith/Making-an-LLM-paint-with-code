async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f8");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#b9cdea", 170);
  brush.beginShape(0.5); brush.vertex(60,100); brush.vertex(520,70); brush.vertex(560,500); brush.vertex(80,540); brush.endShape(true);
  brush.fill("#7f9a6a", 190);
  brush.beginShape(0.5); brush.vertex(250,300); brush.vertex(330,300); brush.vertex(340,580); brush.vertex(240,580); brush.endShape(true);
  brush.fill("#4f7a55", 190);
  brush.beginShape(0.5); brush.vertex(120,380); brush.vertex(250,330); brush.vertex(270,440); brush.vertex(140,470); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(330,340); brush.vertex(470,370); brush.vertex(450,470); brush.vertex(320,440); brush.endShape(true);
  const bl=[[190,200,0],[300,150,1],[400,230,2]];
  for (const [cx,cy,k] of bl){
    for (let j=0;j<3;j++){
      const sc=1-j*0.2;
      brush.fill(["#6a2a9c","#8a40c0","#b070e0"][j], 170+j*20);
      brush.beginShape(0.7);
      for (let a=0;a<360;a+=30){ const r=(50+((a*7+k*31)%22))*sc; brush.vertex(cx+r*0.9*cos(a), cy+r*1.15*sin(a)); }
      brush.endShape(true);
    }
    for (let q=0;q<10;q++){
      brush.fill("#4a1a78", 210);
      brush.circle(cx-30+((q*37+k*11)%60), cy-40+((q*23+k*7)%80), 8, 0.5);
    }
  }
}
