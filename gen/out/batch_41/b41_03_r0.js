async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf3dc");
  brush.noStroke();
  brush.fill("#4fa8e8", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,160); brush.vertex(0,170); brush.endShape(true);
  // road
  brush.fill("#e0a03c", 210);
  brush.beginShape(0.3); brush.vertex(285,250); brush.vertex(315,250); brush.vertex(480,600); brush.vertex(120,600); brush.endShape(true);
  // foliage mass
  brush.fill("#e8b820", 200); brush.fillBleed(0.3);
  brush.beginShape(0.6); brush.vertex(60,0); brush.vertex(540,0); brush.vertex(560,200); brush.vertex(400,280); brush.vertex(200,280); brush.vertex(40,200); brush.endShape(true);
  brush.fill("#e0561e", 190);
  brush.beginShape(0.6); brush.vertex(100,20); brush.vertex(300,10); brush.vertex(330,180); brush.vertex(120,230); brush.endShape(true);
  brush.fill("#2e9a4a", 190);
  brush.beginShape(0.6); brush.vertex(330,30); brush.vertex(520,20); brush.vertex(500,200); brush.vertex(340,230); brush.endShape(true);
  // trunks, receding pairs
  const xs = [[30,50,70],[140,40,62],[210,30,55],[255,18,40],[345,18,40],[390,30,55],[460,40,62],[540,50,70]];
  for (const t of xs) {
    const top = 300 - t[1]*0.5 ;
    brush.fill("#6d4a3a", 220); brush.fillBleed(0.2);
    brush.beginShape(0.2); brush.vertex(t[0],600-t[2]*8); brush.vertex(t[0]+t[1],600-t[2]*8); brush.vertex(t[0]+t[1]*0.8,top); brush.vertex(t[0]+t[1]*0.1,top); brush.endShape(true);
    brush.fill("#b9bfa0", 170);
    brush.beginShape(0.3); brush.vertex(t[0]+4,500-t[2]*3); brush.vertex(t[0]+t[1]*0.6,520-t[2]*3); brush.vertex(t[0]+t[1]*0.5,top+40); brush.vertex(t[0]+6,top+30); brush.endShape(true);
  }
  brush.fill("#c8281e", 190);
  for (let i = 0; i < 16; i++) brush.circle(150 + (i*71)%300, 330 + i*17, 7 + i%3*3, 0.5);
}
