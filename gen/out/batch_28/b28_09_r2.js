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
  brush.beginShape(0.6); brush.vertex(-70,0); brush.vertex(670,0); brush.vertex(670,330); brush.vertex(-70,330); brush.endShape(true);
  brush.fill("#e8a0c0", 150);
  brush.beginShape(0.8); brush.vertex(-70,170); brush.vertex(300,130); brush.vertex(670,190); brush.vertex(670,330); brush.vertex(-70,330); brush.endShape(true);
  brush.fill("#f0b010", 220);
  brush.beginShape(0.5); brush.vertex(-70,600); brush.vertex(-70,350); brush.vertex(670,340); brush.vertex(670,600); brush.endShape(true);
  brush.fill("#c86a10", 190);
  brush.beginShape(0.5); brush.vertex(-70,600); brush.vertex(-70,470); brush.vertex(670,455); brush.vertex(670,600); brush.endShape(true);
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

  for (let i=0;i<8;i++){ const x=(i*79)%540+30;
    brush.fill("#2a70d0", 150);
    brush.beginShape(0.5); brush.vertex(x,100); brush.vertex(x+16,100); brush.vertex(x+12,300); brush.vertex(x+2,300); brush.endShape(true);
    brush.circle(x+8,305,8,0.8);
  }
  brush.fill("#8a5a10", 180);
  brush.beginShape(0.6); brush.vertex(60,480); brush.vertex(90,420); brush.vertex(125,480); brush.endShape(true);
  brush.beginShape(0.6); brush.vertex(480,500); brush.vertex(515,430); brush.vertex(550,500); brush.endShape(true);

  brush.fill("#f0b010", 150);
  brush.beginShape(0.8); brush.vertex(-70,340); brush.vertex(670,330); brush.vertex(670,380); brush.vertex(-70,390); brush.endShape(true);
  brush.fill("#e03a6a", 150);
  for (let i=0;i<5;i++){ brush.circle(70+i*115,380+(i%2)*40,14,0.9); }
}
