async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5e8d4");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#ff6a1c", 200);
  brush.beginShape(0.5); [[0,0],[600,0],[600,420],[0,420]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#e0206a", 190);
  brush.beginShape(0.5); [[0,0],[600,0],[600,200],[0,260]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#7a2aa8", 170);
  brush.beginShape(0.5); [[0,0],[600,0],[600,90],[0,130]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#ffd040", 210); brush.circle(300,360,42,0.3);
  brush.fill("#ffe890", 200); brush.circle(300,360,24,0.3);
  // ground/lagoon
  brush.fill("#0d6a7a", 210);
  brush.beginShape(0.5); [[0,430],[600,430],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#ff8a3a", 160);
  brush.beginShape(0.5); [[260,440],[340,440],[360,600],[240,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // palm trunks (curved, wide)
  const palms=[[120,600,150,120,0.9],[470,600,430,150,1],[300,600,330,230,0.7]];
  for (const [bx,by,tx,ty,s] of palms){
    brush.fill("#2a1228", 235);
    brush.beginShape(0.5);
    brush.vertex(bx-18*s,by); brush.vertex(bx+18*s,by);
    brush.vertex((bx+tx)/2+30+12*s,(by+ty)/2); brush.vertex(tx+10,ty); brush.vertex(tx-10,ty);
    brush.vertex((bx+tx)/2+30-12*s,(by+ty)/2);
    brush.endShape(true);
    brush.fill("#0c2a30", 230);
    for (let k=0;k<7;k++){
      const a=-160+k*50; const ex=tx+Math.cos(a*Math.PI/180)*110*s, ey=ty+Math.sin(a*Math.PI/180)*80*s+30;
      brush.beginShape(0.8); brush.vertex(tx,ty); brush.vertex((tx+ex)/2,(ty+ey)/2-28); brush.vertex(ex,ey); brush.vertex((tx+ex)/2,(ty+ey)/2+10); brush.endShape(true);
    }
    brush.fill("#5a3a10", 220); brush.circle(tx-8,ty+14,9,0.3); brush.circle(tx+9,ty+16,9,0.3);
  }
  // second pass
  brush.fill("#ffb020", 190); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,380); brush.vertex(600,360); brush.vertex(600,430); brush.vertex(0,440); brush.endShape(true);
  brush.fill("#1a0a28", 210); brush.fillBleed(0.2); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,520); brush.vertex(600,520); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#e0206a", 150); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,100); brush.vertex(600,60); brush.vertex(600,230); brush.vertex(0,260); brush.endShape(true);
  
  // second pass
  brush.fill("#1a0a30", 220); brush.fillBleed(0.2); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(95,600); brush.vertex(145,600); brush.vertex(148,300); brush.vertex(130,300); brush.endShape(true);
  brush.fill("#ff4a2a", 150); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,230); brush.vertex(600,200); brush.vertex(600,330); brush.vertex(0,360); brush.endShape(true);
  brush.fill("#ffe070", 200); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.circle(300,360,18,0.3);
  
}
