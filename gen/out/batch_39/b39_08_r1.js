async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8eef0");
  brush.noStroke();
  brush.fill("#7ab8c8", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#2a8a96", 150);
  brush.beginShape(0.5); brush.vertex(0,200); brush.vertex(600,230); brush.vertex(600,420); brush.vertex(0,400); brush.endShape(true);
  // distant slender trunks first
  for (const x of [40, 150, 255, 360, 470, 560]) {
    brush.fill("#4a8aa0", 170); brush.fillBleed(0.3);
    brush.beginShape(0.5); brush.vertex(x-12,520); brush.vertex(x-8,40); brush.vertex(x+10,40); brush.vertex(x+14,520); brush.endShape(true);
  }
  // main trunks: leaning, tall
  const tk = [[105,32,-12],[235,42,6],[345,30,-5],[455,48,10],[540,26,-4]];
  for (let i = 0; i < tk.length; i++) {
    const [x,w,lean] = tk[i];
    brush.fill(i%2 ? "#206878" : "#2a3a8a", 220); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5); brush.vertex(x-w/2,600); brush.vertex(x-w/2+lean,300); brush.vertex(x-w/3+lean*2,20); brush.vertex(x+w/3+lean*2,20); brush.vertex(x+w/2+lean,300); brush.vertex(x+w/2,600); brush.endShape(true);
    brush.fill("#141c5a", 200);
    brush.beginShape(0.5); brush.vertex(x+2,600); brush.vertex(x+3+lean,300); brush.vertex(x+w/3+lean*2,20); brush.vertex(x+w/2+lean*2,20); brush.vertex(x+w/2+lean,300); brush.vertex(x+w/2,600); brush.endShape(true);
    // peeling bark patches
    brush.fill("#9ad0c8", 190); brush.fillBleed(0.3);
    for (let j = 0; j < 4; j++) brush.circle(x-6+lean*(1-j*0.2) , 120 + j*100 + (i*23)%40, 11, 0.7);
  }
  // hanging leaf clusters at the top
  for (let i = 0; i < 14; i++) {
    brush.fill(["#1c6a72","#2a4a9a","#3a8a8a"][i%3], 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.7); const x = (i*83)%600, y = 5 + (i*37)%70;
    brush.vertex(x-30,y); brush.vertex(x+30,y-10); brush.vertex(x+20,y+90); brush.vertex(x-15,y+110); brush.endShape(true);
  }
  brush.fill("#141c5a", 225); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(0,550); brush.vertex(300,535); brush.vertex(600,550); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
}
