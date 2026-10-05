async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#14122e");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#2a2a78", 200);
  brush.beginShape(0.5); [[0,0],[600,0],[600,420],[300,330],[0,440]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#4a2f94", 180);
  brush.beginShape(0.5); [[0,200],[600,120],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // leaves
  brush.fill("#0f5a4e", 210);
  brush.beginShape(0.7); [[60,520],[150,380],[260,400],[300,500],[200,560]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.beginShape(0.7); [[560,540],[470,400],[380,420],[330,520],[420,580]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#0a3d3a", 200);
  brush.beginShape(0.7); [[110,500],[170,420],[240,440],[240,500]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // open bloom: five broad petals
  const cx=230, cy=300;
  const cols=["#d0183c","#e0284a","#b80f38","#d81e44","#c4143c"];
  for (let i=0;i<5;i++){
    const a=i*72-90, r=105;
    const ax=cx+Math.cos(a*Math.PI/180)*r, ay=cy+Math.sin(a*Math.PI/180)*r;
    const lx=cx+Math.cos((a-32)*Math.PI/180)*r*0.8, ly=cy+Math.sin((a-32)*Math.PI/180)*r*0.8;
    const rx=cx+Math.cos((a+32)*Math.PI/180)*r*0.8, ry=cy+Math.sin((a+32)*Math.PI/180)*r*0.8;
    brush.fill(cols[i], 200); brush.fillBleed(0.3);
    brush.beginShape(0.8); brush.vertex(cx,cy); brush.vertex(lx,ly); brush.vertex(ax,ay); brush.vertex(rx,ry); brush.endShape(true);
  }
  brush.fill("#7a0626", 200);
  brush.circle(cx,cy,34,0.5);
  brush.fill("#f0b030", 220);
  brush.beginShape(0.5); [[238,300],[262,230],[280,225],[272,250],[250,310]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.circle(282,222,7,0.4);brush.circle(268,236,6,0.4);brush.circle(292,238,6,0.4);
  // closed bud
  brush.fill("#a30c30", 210);
  brush.beginShape(0.8); [[430,320],[470,250],[500,290],[490,380],[455,400]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#d01c44", 190);
  brush.beginShape(0.8); [[445,330],[470,270],[485,300],[475,370]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#0f5a4e", 220);
  brush.beginShape(0.6); [[440,395],[480,395],[470,450],[450,450]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  for (let i=0;i<9;i++){ brush.fill("#d8d0ff",200); brush.circle(40+i*67%560, 30+(i*53)%160, 2.5, 0.3);}
}
