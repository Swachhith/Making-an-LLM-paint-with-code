async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf2dc");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.5, 0.5);
  brush.fill("#6ab0e8", 190);
  brush.beginShape(0.6); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,330); brush.vertex(0,330); brush.endShape(true);
  brush.fill("#e8a0c0", 150);
  brush.beginShape(0.8); brush.vertex(0,170); brush.vertex(300,130); brush.vertex(600,190); brush.vertex(600,330); brush.vertex(0,330); brush.endShape(true);
  brush.fill("#f0b010", 220);
  brush.beginShape(0.5); brush.vertex(0,600); brush.vertex(0,350); brush.vertex(600,340); brush.vertex(600,600); brush.endShape(true);
  brush.fill("#c86a10", 190);
  brush.beginShape(0.5); brush.vertex(0,600); brush.vertex(0,470); brush.vertex(600,455); brush.vertex(600,600); brush.endShape(true);
  for (let i=0;i<14;i++){
    brush.fill(i%2?"#b88008":"#e0a020", 170);
    const x=i*45+10;
    brush.beginShape(0.8); brush.vertex(x,600); brush.vertex(x+15,600); brush.vertex(x+25,380); brush.vertex(x+8,370); brush.endShape(true);
  }
  brush.fill("#3a7a40", 200);
  brush.beginShape(0.8); brush.vertex(380,345); brush.vertex(440,320); brush.vertex(520,345); brush.vertex(460,360); brush.endShape(true);
  for (let i=0;i<10;i++){
    brush.fill(["#e03a6a","#2a70d0","#f08a20"][i%3], 190);
    brush.circle((i*211)%560+20,(i*97)%250+30,12+(i%4)*8,0.9);
    brush.fill("#2a70d0", 170);
    const x=(i*83)%560+20;
    brush.beginShape(0.6); brush.vertex(x,250+i*8); brush.vertex(x+16,250+i*8); brush.vertex(x+10,330+i*14); brush.vertex(x-2,330+i*14); brush.endShape(true);
  }
}
