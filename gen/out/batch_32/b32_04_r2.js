async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0b2a30");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#14505a", 200);
  brush.beginShape(0.5); [[0,0],[600,0],[600,330],[0,360]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#1c7078", 170);
  brush.beginShape(0.5); [[0,180],[600,150],[600,360],[0,380]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#2a8a8a", 140);
  brush.beginShape(0.5); [[0,280],[600,260],[600,370],[0,380]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // building silhouettes left & right, slanted roofs
  brush.fill("#04141a", 240);
  brush.beginShape(0.1); [[0,120],[120,90],[220,150],[250,600],[0,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.beginShape(0.1); [[600,100],[480,70],[370,160],[350,600],[600,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#0a2a30", 230);
  brush.beginShape(0.1); [[210,300],[270,270],[330,270],[390,300],[390,600],[210,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // street
  brush.fill("#0d3a42", 210);
  brush.beginShape(0.3); [[250,380],[350,380],[470,600],[130,600]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  // lanterns
  const L=[[70,250,16],[150,300,13],[225,350,10],[530,240,16],[455,300,13],[375,350,10],[300,360,8],[120,420,12],[490,430,12]];
  for (const [x,y,r] of L){
    brush.fill("#ff8a1c", 150); brush.circle(x,y,r*2.4,0.3);
    brush.fill("#ffb040", 220); brush.circle(x,y,r*1.2,0.3);
    brush.fill("#ffd98a", 230); brush.circle(x,y,r*0.55,0.2);
  }
  brush.fill("#e6761a", 120);
  brush.beginShape(0.5); [[280,470],[320,470],[330,590],[270,590]].forEach(p=>brush.vertex(...p)); brush.endShape(true);
  brush.fill("#cfe8e4", 200); for (let i=0;i<8;i++) brush.circle(260+i*37%160,30+(i*41)%90,2,0.3);
  // second pass
  brush.fill("#02101a", 235); brush.fillBleed(0.15); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(0,140); brush.vertex(90,60); brush.vertex(110,70); brush.vertex(160,150); brush.vertex(160,600); brush.vertex(0,600); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(600,140); brush.vertex(510,50); brush.vertex(490,70); brush.vertex(440,150); brush.vertex(440,600); brush.vertex(600,600); brush.endShape(true);
  brush.fill("#ff9a2c", 200); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(50,200); brush.vertex(80,200); brush.vertex(80,235); brush.vertex(50,235); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(520,190); brush.vertex(550,190); brush.vertex(550,225); brush.vertex(520,225); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(100,300); brush.vertex(125,300); brush.vertex(125,330); brush.vertex(100,330); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(480,290); brush.vertex(505,290); brush.vertex(505,320); brush.vertex(480,320); brush.endShape(true);
  brush.fill("#ff6a10", 130); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(220,480); brush.vertex(390,480); brush.vertex(430,600); brush.vertex(180,600); brush.endShape(true);
  
  // second pass
  brush.fill("#ff8a20", 180); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(290,350); brush.vertex(310,350); brush.vertex(310,372); brush.vertex(290,372); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(160,380); brush.vertex(185,380); brush.vertex(185,405); brush.vertex(160,405); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(415,380); brush.vertex(440,380); brush.vertex(440,405); brush.vertex(415,405); brush.endShape(true);
  brush.fill("#02101a", 230); brush.fillBleed(0.15); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.6); brush.vertex(205,250); brush.vertex(300,215); brush.vertex(395,250); brush.vertex(395,300); brush.vertex(205,300); brush.endShape(true);
  brush.fill("#ffb848", 190); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.circle(240,265,5,0.3);
  brush.circle(300,255,5,0.3);
  brush.circle(360,268,5,0.3);
  brush.circle(270,285,5,0.3);
  brush.circle(335,285,5,0.3);
  
}
