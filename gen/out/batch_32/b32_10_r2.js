async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece9d4");
  brush.noStroke();
  brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.fill("#c8e0a0", 190);
  brush.beginShape(0.4); [[0,0],[600,0],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // path converging
  brush.fill("#d8c890", 210);
  brush.beginShape(0.4); [[285,230],[318,230],[470,600],[130,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#8a7a50", 170);
  brush.beginShape(0.4); [[295,260],[312,260],[380,600],[250,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // bamboo stalks left and right, dark and wide
  const stalks=[[40,26,"#0a2a18"],[110,20,"#143a20"],[190,16,"#1e5a2a"],[245,10,"#2a7a38"],[380,10,"#2a7a38"],[430,16,"#1e5a2a"],[510,20,"#143a20"],[575,26,"#0a2a18"]];
  for (const [x,w,c] of stalks){
    brush.fill(c, 225); brush.fillBleed(0.2);
    const lean=(x<300?1:-1)*8;
    brush.beginShape(0.2); brush.vertex(x-w,0); brush.vertex(x+w,0); brush.vertex(x+w+lean,600); brush.vertex(x-w+lean,600); brush.endShape(true);
    brush.fill("#c8e060", 170);
    for (let k=1;k<5;k++) brush.beginShape(0.2), brush.vertex(x-w,k*120-16), brush.vertex(x+w,k*120-16), brush.vertex(x+w,k*120), brush.vertex(x-w,k*120), brush.endShape(true);
  }
  // leaf canopy
  brush.fill("#3a8a30", 190);
  for (let i=0;i<7;i++){ const x=i*100; brush.beginShape(0.8); brush.vertex(x,0); brush.vertex(x+90,10); brush.vertex(x+60,80+(i%3)*25); brush.vertex(x+10,60); brush.endShape(true);}
  // shadow right
  brush.fill("#0a1e10", 150);
  brush.beginShape(0.6); [[420,300],[600,260],[600,600],[470,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#fff0a0", 170);
  brush.beginShape(0.6); [[290,236],[316,236],[330,330],[280,330]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // second pass
  brush.fill("#a08040", 210); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(290,210); brush.vertex(316,210); brush.vertex(560,600); brush.vertex(40,600); brush.endShape(true);
  brush.fill("#fff0a0", 190); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(291,215); brush.vertex(314,215); brush.vertex(380,420); brush.vertex(250,420); brush.endShape(true);
  brush.fill("#05180c", 230); brush.fillBleed(0.15); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,0); brush.vertex(70,0); brush.vertex(100,600); brush.vertex(0,600); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(530,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(500,600); brush.endShape(true);
  brush.fill("#1a4a20", 190); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(330,300); brush.vertex(400,250); brush.vertex(430,420); brush.vertex(360,600); brush.vertex(330,500); brush.endShape(true);
  
  // second pass
  brush.fill("#e8d890", 190); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(285,215); brush.vertex(318,215); brush.vertex(430,600); brush.vertex(170,600); brush.endShape(true);
  brush.fill("#05180c", 200); brush.fillBleed(0.15); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,350); brush.vertex(160,330); brush.vertex(200,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#fff4b0", 180); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(296,222); brush.vertex(312,222); brush.vertex(330,300); brush.vertex(285,300); brush.endShape(true);
  
}
