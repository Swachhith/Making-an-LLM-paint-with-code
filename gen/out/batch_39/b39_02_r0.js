async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efeae0");
  brush.noStroke();
  brush.fill("#2a2a44", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // stalks
  brush.fill("#2d6a3a", 210); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(190,600); brush.vertex(200,350); brush.vertex(225,340); brush.vertex(235,600); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(380,600); brush.vertex(400,330); brush.vertex(425,330); brush.vertex(430,600); brush.endShape(true);
  // blooms: bells along stalk
  const blooms = [[[210,330],[200,260],[195,190],[205,120]],[[410,320],[420,250],[440,185],[450,115]]];
  for (const b of blooms) {
    for (let j = 0; j < b.length; j++) {
      const [x, y] = b[j], s = 1 - j * 0.15;
      brush.fill("#6a1f8a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.6); brush.vertex(x-45*s,y-30*s); brush.vertex(x+45*s,y-30*s); brush.vertex(x+30*s,y+55*s); brush.vertex(x-30*s,y+55*s); brush.endShape(true);
      brush.fill("#b45ad0", 190); brush.fillBleed(0.25);
      brush.beginShape(0.6); brush.vertex(x-28*s,y-15*s); brush.vertex(x+28*s,y-15*s); brush.vertex(x+18*s,y+40*s); brush.vertex(x-18*s,y+40*s); brush.endShape(true);
      brush.fill("#2a0a3a", 220); brush.fillBleed(0.2);
      brush.circle(x, y+20*s, 14*s, 0.5);
      brush.circle(x-12*s, y+30*s, 5, 0.5); brush.circle(x+12*s, y+34*s, 5, 0.5);
    }
  }
  // leaves
  brush.fill("#1c4f2a", 220); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(60,600); brush.vertex(120,500); brush.vertex(190,470); brush.vertex(200,560); brush.vertex(190,600); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(540,600); brush.vertex(500,500); brush.vertex(440,470); brush.vertex(430,560); brush.vertex(440,600); brush.endShape(true);
}
