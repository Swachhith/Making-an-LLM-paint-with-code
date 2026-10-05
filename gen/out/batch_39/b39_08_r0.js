async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef0f2");
  brush.noStroke();
  brush.fill("#8fc4cc", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  const xs = [90, 200, 310, 420, 520];
  for (let i = 0; i < xs.length; i++) {
    const x = xs[i], w = 34 + (i%2)*10;
    brush.fill(i%2 ? "#2a6a78" : "#3a4a9a", 200); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5); brush.vertex(x-w/2,600); brush.vertex(x-w/2+4,60+i*25); brush.vertex(x+w/2-4,60+i*25); brush.vertex(x+w/2,600); brush.endShape(true);
    brush.fill("#1a2a6a", 190);
    brush.beginShape(0.5); brush.vertex(x+2,600); brush.vertex(x+2,80+i*25); brush.vertex(x+w/2-4,80+i*25); brush.vertex(x+w/2,600); brush.endShape(true);
    for (let j = 0; j < 4; j++) {
      brush.fill("#1d6a70", 190); brush.fillBleed(0.3);
      brush.circle(x + ((j*37+i*11)%50) - 25, 70 + i*25 + j*45, 30, 0.7);
    }
  }
  brush.fill("#1a2a6a", 200); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(0,560); brush.vertex(600,550); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
}
