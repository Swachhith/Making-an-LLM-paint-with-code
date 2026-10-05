async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0c0a1e");
  brush.noStroke();
  brush.fill("#2a1a8a", 205); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,400); brush.vertex(0,400); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,400); brush.vertex(0,400); brush.endShape(true);
  brush.fill("#c8208a", 190);
  brush.beginShape(0.5); brush.vertex(0,260); brush.vertex(600,250); brush.vertex(600,420); brush.vertex(0,430); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(0,260); brush.vertex(600,250); brush.vertex(600,420); brush.vertex(0,430); brush.endShape(true);
  brush.fill("#ff8a3a", 170);
  brush.beginShape(0.5); brush.vertex(50,360); brush.vertex(550,350); brush.vertex(550,430); brush.vertex(50,440); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(50,360); brush.vertex(550,350); brush.vertex(550,430); brush.vertex(50,440); brush.endShape(true);
  // towers
  const b = [[10,70,330],[70,60,230],[125,70,380],[190,55,170],[240,80,110],[320,60,260],[380,70,150],[450,60,320],[510,90,210]];
  const lw = ["#ffd060","#ff9a30","#fff0a0"];
  for (const t of b) {
    brush.fill("#10102a", 245); brush.fillBleed(0.15);
    brush.beginShape(0.1); brush.vertex(t[0],600-t[2]); brush.vertex(t[0]+t[1],600-t[2]); brush.vertex(t[0]+t[1],600); brush.vertex(t[0],600); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.1); brush.vertex(t[0],600-t[2]); brush.vertex(t[0]+t[1],600-t[2]); brush.vertex(t[0]+t[1],600); brush.vertex(t[0],600); brush.endShape(true);
    for (let y = 600 - t[2] + 14; y < 590; y += 22) for (let x = t[0] + 10; x < t[0] + t[1] - 6; x += 16) {
      if (((x*7 + y*3) % 5) > 1) { brush.fill(lw[(x+y)%3], 225); brush.circle(x, y, 3.5, 0.2); }
    }
  }
  brush.fill("#ff5a8a", 200);
  brush.circle(160,336,3,0.2); brush.circle(350,316,3,0.2);
  brush.fill("#fff0c0", 210);
  for (let i = 0; i < 14; i++) brush.circle(20 + (i*47)%580, 15 + (i*29)%120, 2, 0.3);
}
