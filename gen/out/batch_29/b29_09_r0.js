async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6ecd6");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.fill("#f2b860", 190);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#e88a50", 160);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 200); brush.vertex(0, 260);
  brush.endShape(true);
  // distant mountain
  brush.fill("#a8786a", 180);
  brush.beginShape(0.4);
  brush.vertex(0, 560); brush.vertex(0, 430); brush.vertex(180, 360); brush.vertex(420, 440); brush.vertex(600, 400); brush.vertex(600, 560);
  brush.endShape(true);
  // rock ledge
  brush.fill("#6a4a3a", 220);
  brush.beginShape(0.4);
  brush.vertex(0, 600); brush.vertex(0, 520); brush.vertex(200, 500); brush.vertex(400, 540); brush.vertex(600, 510); brush.vertex(600, 600);
  brush.endShape(true);
  // twisted trunk
  brush.fill("#6a3a22", 215);
  brush.beginShape(0.6);
  brush.vertex(230, 530); brush.vertex(280, 420); brush.vertex(230, 330); brush.vertex(290, 240); brush.vertex(340, 250); brush.vertex(300, 340); brush.vertex(350, 430); brush.vertex(380, 530);
  brush.endShape(true);
  brush.fill("#8a5a30", 190);
  brush.beginShape(0.6);
  brush.vertex(270, 520); brush.vertex(300, 420); brush.vertex(262, 335); brush.vertex(310, 255); brush.vertex(325, 340); brush.vertex(345, 430); brush.vertex(350, 520);
  brush.endShape(true);
  // limbs
  brush.fill("#6a3a22", 205);
  brush.beginShape(0.5);
  brush.vertex(290, 290); brush.vertex(150, 230); brush.vertex(60, 180); brush.vertex(80, 150); brush.vertex(170, 195); brush.vertex(310, 250);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(320, 280); brush.vertex(450, 200); brush.vertex(540, 190); brush.vertex(545, 215); brush.vertex(460, 240); brush.vertex(340, 320);
  brush.endShape(true);
  // foliage clumps
  const pts = [[80,150],[130,190],[60,205],[190,230],[540,195],[490,215],[430,160],[300,130],[350,100],[250,150],[200,110]];
  pts.forEach((p, i) => {
    brush.fill(i % 2 ? "#3a6a2a" : "#6a8a20", 190);
    brush.circle(p[0], p[1], 38 + (i % 3) * 9, 1.4);
  });
  brush.fill("#e8b030", 140);
  brush.circle(300, 120, 50, 1.2);
}
