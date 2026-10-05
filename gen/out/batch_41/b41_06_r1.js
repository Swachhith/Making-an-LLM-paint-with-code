async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1e4c8");
  brush.noStroke();
  // storm sky: dark
  brush.fill("#2b2b3a", 220); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,220); brush.vertex(380,170); brush.vertex(180,230); brush.vertex(0,190); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.6); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,220); brush.vertex(380,170); brush.vertex(180,230); brush.vertex(0,190); brush.endShape(true);
  brush.fill("#e8a030", 190);
  brush.beginShape(0.6); brush.vertex(0,200); brush.vertex(200,230); brush.vertex(420,180); brush.vertex(600,215); brush.vertex(600,300); brush.vertex(0,300); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.6); brush.vertex(0,200); brush.vertex(200,230); brush.vertex(420,180); brush.vertex(600,215); brush.vertex(600,300); brush.vertex(0,300); brush.endShape(true);
  brush.fill("#2b2b3a", 170);
  brush.beginShape(0.6); brush.vertex(40,60); brush.vertex(300,30); brush.vertex(520,90); brush.vertex(300,150); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.6); brush.vertex(40,60); brush.vertex(300,30); brush.vertex(520,90); brush.vertex(300,150); brush.endShape(true);
  // distant field
  brush.fill("#e0a020", 210);
  brush.beginShape(0.5); brush.vertex(0,290); brush.vertex(300,280); brush.vertex(600,292); brush.vertex(600,380); brush.vertex(0,380); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(0,290); brush.vertex(300,280); brush.vertex(600,292); brush.vertex(600,380); brush.vertex(0,380); brush.endShape(true);
  brush.fill("#c8742a", 210);
  brush.beginShape(0.5); brush.vertex(0,370); brush.vertex(600,365); brush.vertex(600,470); brush.vertex(0,480); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(0,370); brush.vertex(600,365); brush.vertex(600,470); brush.vertex(0,480); brush.endShape(true);
  // sunflower heads: distant tiny to near large
  const rows = [[310,5,26],[345,8,20],[400,12,14],[470,18,9]];
  for (const r of rows) {
    for (let i = 0; i < r[2]; i++) {
      const x = (i + 0.5) * 600 / r[2] + ((i*31)%9) - 4, y = r[0] + ((i*17)%13);
      brush.fill("#f0b020", 200); brush.fillBleed(0.25);
      brush.circle(x, y, r[1]*1.7, 0.6);
      brush.fill("#2b2018", 225);
      brush.circle(x, y, r[1]*0.8, 0.4);
    }
  }
  // foreground stems & big heads
  brush.fill("#2b2b3a", 225);
  brush.beginShape(0.3); brush.vertex(120,600); brush.vertex(140,600); brush.vertex(146,430); brush.vertex(128,430); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.3); brush.vertex(120,600); brush.vertex(140,600); brush.vertex(146,430); brush.vertex(128,430); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(470,600); brush.vertex(492,600); brush.vertex(486,450); brush.vertex(466,450); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.3); brush.vertex(470,600); brush.vertex(492,600); brush.vertex(486,450); brush.vertex(466,450); brush.endShape(true);
  brush.fill("#f0a818", 215);
  brush.circle(137,420,48,0.6); brush.circle(478,440,42,0.6);
  brush.fill("#2b2018", 235);
  brush.circle(137,420,22,0.4); brush.circle(478,440,19,0.4);
  brush.fill("#2b2b3a", 200);
  brush.beginShape(0.5); brush.vertex(0,540); brush.vertex(600,520); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(0,540); brush.vertex(600,520); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
}
