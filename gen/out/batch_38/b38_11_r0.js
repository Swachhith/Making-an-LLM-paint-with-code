async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4ecd4");
  brush.noStroke();
  brush.fill("#2a8ae0", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,300); brush.vertex(0,300); brush.endShape(true);
  brush.fill("#f4a02f", 170);
  brush.beginShape(0.5); brush.vertex(0,230); brush.vertex(600,220); brush.vertex(600,320); brush.vertex(0,320); brush.endShape(true);
  brush.fill("#fbfaf4", 230);
  brush.circle(120, 110, 30, 0.8); brush.circle(170, 120, 24, 0.8); brush.circle(450, 70, 30, 0.8);
  brush.fill("#d4a02a", 200); brush.fillBleed(0.25);
  brush.beginShape(0.7); brush.vertex(0,300); brush.vertex(300,290); brush.vertex(600,300); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#8aa82a", 190);
  brush.beginShape(0.7); brush.vertex(0,420); brush.vertex(250,360); brush.vertex(400,420); brush.vertex(300,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#d4501f", 180);
  brush.beginShape(0.7); brush.vertex(450,380); brush.vertex(600,400); brush.vertex(600,600); brush.vertex(380,600); brush.endShape(true);
  // river leading into distance
  brush.fill("#1a6ab8", 210); brush.fillBleed(0.3);
  brush.beginShape(0.9); brush.vertex(285,298); brush.vertex(310,298); brush.vertex(440,600); brush.vertex(240,600); brush.vertex(300,480); brush.endShape(true);
  brush.fill("#6ab0e8", 160);
  brush.beginShape(0.9); brush.vertex(290,320); brush.vertex(305,320); brush.vertex(360,560); brush.vertex(300,540); brush.endShape(true);
  // windpump
  brush.fill("#3a2a22", 230);
  brush.beginShape(0.2); brush.vertex(168,220); brush.vertex(185,220); brush.vertex(205,400); brush.vertex(150,400); brush.endShape(true);
  brush.fill("#6a6a72", 220);
  for (let k = 0; k < 8; k++) {
    const a = k * 45;
    brush.beginShape(0.3);
    brush.vertex(176,205);
    brush.vertex(176 + 52 * Math.cos(a * Math.PI / 180) - 8, 205 + 52 * Math.sin(a * Math.PI / 180));
    brush.vertex(176 + 52 * Math.cos(a * Math.PI / 180) + 8, 205 + 52 * Math.sin(a * Math.PI / 180));
    brush.endShape(true);
  }
  brush.fill("#e8302a", 230); brush.circle(176, 205, 11, 0.3);
}
