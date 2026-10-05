async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#161624");
  brush.noStroke();
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  const wash = (c, o, pts, k) => {
    brush.fill(c, o);
    brush.beginShape(k || 0.5);
    pts.forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  };
  wash("#d83a28", 215, [[-40,60],[640,60],[640,420],[-40,420]], 0.6);
  wash("#f87a30", 220, [[-40,200],[640,210],[640,420],[-40,420]], 0.6);
  wash("#fcc058", 225, [[-40,290],[640,300],[640,420],[-40,420]], 0.6);
  wash("#a02a58", 200, [[-40,40],[640,40],[640,150],[-40,140]], 0.6);
  wash("#5a2a70", 190, [[-40,20],[640,20],[640,80],[-40,80]], 0.6);
  brush.fill("#fff0b0", 230);
  brush.circle(120, 340, 48, 0.5);
  brush.fill("#fce080", 160);
  brush.circle(120, 340, 70, 0.8);
  wash("#2a3a8a", 215, [[-40,385],[640,385],[640,440],[-40,440]], 0.5);
  wash("#e87a30", 140, [[60,392],[190,392],[190,430],[60,430]], 0.4);
  // dark foreground
  wash("#08080e", 240, [[-40,435],[640,430],[640,640],[-40,640]], 0.4);
  wash("#2a2038", 190, [[-40,500],[640,490],[640,640],[-40,640]], 0.5);
  // huts in a row, largest is off-centre
  const huts = [[230,62,"#1a8a9a",350],[320,96,"#d0301c",300],[428,60,"#e8b030",345],[498,58,"#1a8a9a",350]];
  huts.forEach(h => {
    const x = h[0], w = h[1], top = h[3];
    wash(h[2], 235, [[x,445],[x,top+28],[x+w/2,top-4],[x+w,top+28],[x+w,445]], 0.2);
    wash("#0a0a12", 190, [[x+w*0.6,445],[x+w*0.6,top+30],[x+w,top+28],[x+w,445]], 0.2);
    wash("#0a0a12", 235, [[x+w/2-12,445],[x+w/2-12,top+60],[x+w/2+12,top+60],[x+w/2+12,445]], 0.2);
  });
  brush.fill("#fce080", 220);
  brush.circle(366, 360, 6, 0.3);
  wash("#08080e", 230, [[215,440],[640,440],[640,462],[215,462]], 0.3);
  wash("#08080e", 230, [[200,410],[222,300],[246,300],[236,420]], 0.2);
}
