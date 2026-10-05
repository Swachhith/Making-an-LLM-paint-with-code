async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8eef2");
  randomSeed(30);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  // cool wash backdrop, loose
  brush.fill("#9ac0dc", 190);
  brush.beginShape(0.5); brush.vertex(-40,80); brush.vertex(500,30); brush.vertex(640,420); brush.vertex(300,560); brush.vertex(-40,500); brush.endShape(true);
  brush.fill("#8ab0cc", 200);
  brush.beginShape(0.5); brush.vertex(60,120); brush.vertex(560,100); brush.vertex(520,480); brush.vertex(90,520); brush.endShape(true);
  // stem: thick curve of wide washes
  brush.fill("#1a5040", 225);
  brush.beginShape(0.5); brush.vertex(285,330); brush.vertex(330,330); brush.vertex(350,470); brush.vertex(330,640); brush.vertex(290,640); brush.vertex(300,470); brush.endShape(true);
  brush.fill("#2a7a5a", 210);
  brush.beginShape(0.5); brush.vertex(330,500); brush.vertex(500,430); brush.vertex(540,470); brush.vertex(350,560); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(290,540); brush.vertex(110,480); brush.vertex(90,525); brush.vertex(285,590); brush.endShape(true);
  // side view of dahlia: calyx & stacked petals, mounded profile
  brush.fill("#1a5040", 220);
  brush.beginShape(0.5); brush.vertex(250,330); brush.vertex(350,330); brush.vertex(335,375); brush.vertex(265,375); brush.endShape(true);
  const rows = [["#4a0614",230,175,445,300,0,70],["#7a0e22",220,185,430,290,0,55],["#a81a34",205,205,410,270,10,50]];
  for (let r = 0; r < 3; r++) {
    for (let i = 0; i < 14; i++) {
      let t = i / 13; let x = 150 + t * 300 + random(-8, 8);
      let top = 300 - Math.sin(t * Math.PI) * (110 - r * 25) + r * 20;
      brush.fill(rows[r][0], rows[r][1]);
      brush.beginShape(0.6); brush.vertex(x - 28, 345 - r * 6); brush.vertex(x - 10, top); brush.vertex(x + 10, top + 6); brush.vertex(x + 30, 340 - r * 6); brush.endShape(true);
    }
  }
  brush.fill("#d04a62", 150);
  for (let i = 0; i < 6; i++) brush.circle(230 + i * 28, 240 - Math.sin(i / 5 * Math.PI) * 40, random(10,16), 0.6);
}
