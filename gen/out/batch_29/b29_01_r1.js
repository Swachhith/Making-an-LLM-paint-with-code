async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1eee4");
  brush.noStroke();
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  const wash = (c, o, pts) => {
    brush.fill(c, o);
    brush.beginShape(0.6);
    pts.forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  };
  wash("#1a78d0", 200, [[-40,-40],[640,-40],[640,640],[-40,640]]);
  wash("#0a60b8", 150, [[-40,-40],[640,-40],[640,200],[-40,260]]);
  wash("#0a9a8a", 190, [[-40,330],[640,300],[640,640],[-40,640]]);
  wash("#d8c030", 150, [[-40,520],[640,500],[640,640],[-40,640]]);
  // trunk three passes
  wash("#7a3a10", 210, [[225,640],[250,330],[262,100],[340,100],[352,330],[395,640]]);
  wash("#c04a10", 200, [[250,640],[272,330],[282,120],[326,120],[336,330],[368,640]]);
  wash("#e8781a", 150, [[285,640],[295,330],[300,120],[322,120],[326,330],[340,640]]);
  // peeling: olive-green & pale flakes of paper left by dark patches
  for (let i = 0; i < 10; i++) {
    const y = 150 + i * 46, x = 268 + ((i * 37) % 50);
    wash(i % 2 ? "#4a7a10" : "#2a5a30", 210, [[x,y],[x+34,y-8],[x+42,y+30],[x+4,y+38]]);
  }
  wash("#5a2a0a", 190, [[250,640],[262,400],[285,400],[285,640]]);
  // limbs
  wash("#7a3a10", 200, [[270,230],[170,110],[200,80],[300,190]]);
  wash("#7a3a10", 200, [[322,210],[430,80],[460,110],[350,250]]);
  wash("#7a3a10", 190, [[292,160],[250,40],[285,30],[315,150]]);
  const cols = ["#0a8a20", "#6ab010", "#087a50", "#d0a010", "#0a5a2a"];
  for (let i = 0; i < 20; i++) {
    const a = i * 53, cx = 300 + Math.cos(a) * 130, cy = 80 + Math.sin(a * 1.3) * 60;
    brush.fill(cols[i % 5], 185 + (i % 3) * 20);
    brush.circle(cx, cy, 45 + (i % 4) * 10, 1.3);
  }
  brush.fill("#0a4a20", 200);
  brush.circle(300, 55, 55, 1.5);
  brush.circle(220, 90, 35, 1.5);
  brush.circle(390, 85, 38, 1.5);
}
