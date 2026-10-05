async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0e2e34");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#1a6670", 200);
  brush.beginShape(0.5); [[0,0],[600,0],[600,430],[0,430]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#2a8a8a", 180);
  brush.beginShape(0.5); [[0,200],[600,170],[600,430],[0,430]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#f09030", 190);
  brush.beginShape(0.5); [[0,360],[600,350],[600,440],[0,440]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#fbc060", 180); brush.circle(480,340,28,0.4);
  // hills
  brush.fill("#0a4a50", 215);
  brush.beginShape(0.7); [[0,420],[150,380],[320,415],[480,385],[600,410],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#8a5a20", 210);
  brush.beginShape(0.6); [[0,500],[200,480],[420,500],[600,485],[600,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // gnarled trunk twisting
  brush.fill("#1a1210", 235);
  brush.beginShape(0.6); [[190,560],[210,460],[170,400],[190,340],[260,310],[240,360],[270,420],[270,470],[320,560]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.beginShape(0.6); [[200,350],[140,300],[110,250],[135,255],[180,290],[240,330]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.beginShape(0.6); [[250,330],[330,280],[400,270],[395,295],[330,310],[270,360]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#5a3a20", 190);
  brush.beginShape(0.6); [[210,540],[225,460],[200,400],[225,350],[240,420],[250,480],[270,540]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // foliage clouds
  const F=[[120,240,70],[210,270,80],[330,255,80],[400,265,60],[270,215,60]];
  for (const [x,y,r] of F){ brush.fill("#6a9a60",180); brush.circle(x,y,r,1.3); }
  for (const [x,y,r] of F){ brush.fill("#3a6a48",170); brush.circle(x+8,y+10,r*0.6,1.2); }
  brush.fill("#f0e8c0", 190); for (let i=0;i<6;i++) brush.circle(20+i*93%560,30+(i*40)%110,2.5,0.3);
  // second pass
  brush.fill("#fcb860", 170); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,150); brush.vertex(600,120); brush.vertex(600,300); brush.vertex(0,320); brush.endShape(true);
  brush.fill("#0a0605", 240); brush.fillBleed(0.15); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(205,550); brush.vertex(200,450); brush.vertex(165,400); brush.vertex(195,335); brush.vertex(255,320); brush.vertex(250,380); brush.vertex(280,430); brush.vertex(285,480); brush.vertex(330,555); brush.endShape(true);
  brush.fill("#e8a040", 190); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(225,540); brush.vertex(230,470); brush.vertex(215,410); brush.vertex(238,380); brush.vertex(250,450); brush.vertex(262,520); brush.endShape(true);
  brush.fill("#8ab070", 190); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.circle(140,240,60,1.3);
  brush.circle(300,230,70,1.3);
  brush.circle(380,270,50,1.3);
  
  // second pass
  brush.fill("#05100f", 220); brush.fillBleed(0.15); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(120,300); brush.vertex(160,270); brush.vertex(175,330); brush.vertex(140,360); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(330,280); brush.vertex(400,250); brush.vertex(410,290); brush.vertex(340,320); brush.endShape(true);
  brush.fill("#c07030", 180); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(196,400); brush.vertex(222,380); brush.vertex(236,470); brush.vertex(205,520); brush.endShape(true);
  brush.fill("#d8e0a0", 170); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.circle(130,225,36,1.2);
  brush.circle(250,215,40,1.2);
  brush.circle(360,250,34,1.2);
  
}
