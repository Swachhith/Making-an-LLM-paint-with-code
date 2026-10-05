async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf6ee");
  brush.noStroke();
  brush.fill("#f4c9c0", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,160); brush.vertex(0,170); brush.endShape(true);
  brush.fill("#b9d3ee", 190);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,80); brush.vertex(0,100); brush.endShape(true);
  brush.fill("#ffe9b8", 190);
  brush.beginShape(0.5); brush.vertex(120,90); brush.vertex(380,80); brush.vertex(420,130); brush.vertex(100,140); brush.endShape(true);
  // distant bank
  brush.fill("#a9c9b6", 210);
  brush.beginShape(0.6); brush.vertex(0,150); brush.vertex(200,140); brush.vertex(420,150); brush.vertex(600,142); brush.vertex(600,200); brush.vertex(0,200); brush.endShape(true);
  // water & marsh
  brush.fill("#c3dcdf", 200);
  brush.beginShape(0.4); brush.vertex(0,190); brush.vertex(600,190); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#d6e6b4", 200);
  brush.beginShape(0.5); brush.vertex(0,260); brush.vertex(250,240); brush.vertex(600,270); brush.vertex(600,420); brush.vertex(0,440); brush.endShape(true);
  brush.fill("#b7d79b", 190);
  brush.beginShape(0.5); brush.vertex(0,400); brush.vertex(300,380); brush.vertex(600,410); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // tall grass blades, many strokes
  const cols = ["#8fbf7a","#c9c27a","#e6a99a","#a1c9a6"];
  for (let i = 0; i < 46; i++) {
    const x = 10 + i * 13 + (i*37)%11, y = 600 - (i%5)*14, h = 150 + (i*53)%190;
    brush.fill(cols[i%4], 190); brush.fillBleed(0.25);
    brush.beginShape(0.5);
    brush.vertex(x,y); brush.vertex(x+16,y); brush.vertex(x+10+((i%3)-1)*18,y-h*0.6); brush.vertex(x+4+((i%5)-2)*14,y-h); brush.vertex(x-4+((i%3)-1)*18,y-h*0.6);
    brush.endShape(true);
  }
  brush.fill("#d99ab0", 190);
  for (let i = 0; i < 14; i++) brush.circle(30 + i*42, 330 + (i*61)%120, 7, 0.4);
}
