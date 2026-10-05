async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f0e8");
  randomSeed(7);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  // sky
  brush.fill("#3a9ae0", 190);
  brush.beginShape(0.4); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,430); brush.vertex(0,430); brush.endShape(true);
  brush.fill("#f4c8e0", 150);
  brush.beginShape(0.5); brush.vertex(0,300); brush.vertex(600,300); brush.vertex(600,430); brush.vertex(0,430); brush.endShape(true);
  // grass low horizon
  brush.fill("#3a9a3a", 210);
  brush.beginShape(0.4); brush.vertex(0,430); brush.vertex(600,420); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // purple fallen petals
  brush.fill("#8a30c0", 170);
  brush.beginShape(0.5); brush.vertex(150,520); brush.vertex(450,510); brush.vertex(520,580); brush.vertex(90,590); brush.endShape(true);
  // trunk
  brush.fill("#4a2a1a", 225);
  brush.beginShape(0.4); brush.vertex(290,450); brush.vertex(330,450); brush.vertex(320,260); brush.vertex(300,260); brush.endShape(true);
  // bloom crown, many blobs
  for (let k = 0; k < 2; k++)
    for (let i = 0; i < 16; i++) {
      let a = random(360), r = random(0, 130);
      brush.fill(k == 0 ? "#7a28c0" : "#b070e8", k == 0 ? 200 : 180);
      brush.circle(310 + cos(a) * r * 1.2, 190 + sin(a) * r * 0.55, random(30, 55), 0.7);
    }
}
