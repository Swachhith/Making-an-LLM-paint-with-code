async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#15131c");
  brush.noStroke();
  // dusk glow sky
  brush.fill("#3b3566", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,300); brush.vertex(0,300); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,300); brush.vertex(0,300); brush.endShape(true);
  brush.fill("#8a4a5e", 190); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(0,200); brush.vertex(600,190); brush.vertex(600,320); brush.vertex(0,330); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(0,200); brush.vertex(600,190); brush.vertex(600,320); brush.vertex(0,330); brush.endShape(true);
  brush.fill("#d98a4a", 170); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(60,270); brush.vertex(540,265); brush.vertex(520,320); brush.vertex(80,325); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(60,270); brush.vertex(540,265); brush.vertex(520,320); brush.vertex(80,325); brush.endShape(true);
  // sea
  brush.fill("#1d2a52", 210); brush.fillBleed(0.25);
  brush.beginShape(0.4); brush.vertex(0,310); brush.vertex(600,305); brush.vertex(600,430); brush.vertex(0,440); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.4); brush.vertex(0,310); brush.vertex(600,305); brush.vertex(600,430); brush.vertex(0,440); brush.endShape(true);
  brush.fill("#c98a55", 150);
  brush.beginShape(0.5); brush.vertex(220,315); brush.vertex(380,315); brush.vertex(350,360); brush.vertex(250,360); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(220,315); brush.vertex(380,315); brush.vertex(350,360); brush.vertex(250,360); brush.endShape(true);
  // far headlands
  brush.fill("#2b2a4a", 220); brush.fillBleed(0.3);
  brush.beginShape(0.6); brush.vertex(300,320); brush.vertex(380,300); brush.vertex(480,310); brush.vertex(600,290); brush.vertex(600,350); brush.vertex(300,350); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.6); brush.vertex(300,320); brush.vertex(380,300); brush.vertex(480,310); brush.vertex(600,290); brush.vertex(600,350); brush.vertex(300,350); brush.endShape(true);
  brush.fill("#221f3a", 230);
  brush.beginShape(0.6); brush.vertex(0,360); brush.vertex(120,335); brush.vertex(260,350); brush.vertex(340,380); brush.vertex(0,400); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.6); brush.vertex(0,360); brush.vertex(120,335); brush.vertex(260,350); brush.vertex(340,380); brush.vertex(0,400); brush.endShape(true);
  // mid cliff
  brush.fill("#1a1a2c", 235); brush.fillBleed(0.2);
  brush.beginShape(0.5); brush.vertex(0,400); brush.vertex(200,390); brush.vertex(330,440); brush.vertex(420,600); brush.vertex(0,600); brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.5); brush.vertex(0,400); brush.vertex(200,390); brush.vertex(330,440); brush.vertex(420,600); brush.vertex(0,600); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(0,400); brush.vertex(200,390); brush.vertex(330,440); brush.vertex(420,600); brush.vertex(0,600); brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.5); brush.vertex(0,400); brush.vertex(200,390); brush.vertex(330,440); brush.vertex(420,600); brush.vertex(0,600); brush.endShape(true);
  // foreground
  brush.fill("#2e2a30", 240);
  brush.beginShape(0.5); brush.vertex(0,470); brush.vertex(160,480); brush.vertex(330,540); brush.vertex(500,600); brush.vertex(0,600); brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.5); brush.vertex(0,470); brush.vertex(160,480); brush.vertex(330,540); brush.vertex(500,600); brush.vertex(0,600); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(0,470); brush.vertex(160,480); brush.vertex(330,540); brush.vertex(500,600); brush.vertex(0,600); brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.5); brush.vertex(0,470); brush.vertex(160,480); brush.vertex(330,540); brush.vertex(500,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#0a0910", 245);
  brush.beginShape(0.5); brush.vertex(380,600); brush.vertex(430,520); brush.vertex(600,470); brush.vertex(600,600); brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.5); brush.vertex(380,600); brush.vertex(430,520); brush.vertex(600,470); brush.vertex(600,600); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(380,600); brush.vertex(430,520); brush.vertex(600,470); brush.vertex(600,600); brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.5); brush.vertex(380,600); brush.vertex(430,520); brush.vertex(600,470); brush.vertex(600,600); brush.endShape(true);
  // path
  brush.fill("#a8754e", 190); brush.fillBleed(0.3);
  brush.beginShape(0.6); brush.vertex(60,470); brush.vertex(150,455); brush.vertex(260,470); brush.vertex(350,520); brush.vertex(420,600); brush.vertex(300,600); brush.vertex(240,530); brush.vertex(140,490); brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.6); brush.vertex(60,470); brush.vertex(150,455); brush.vertex(260,470); brush.vertex(350,520); brush.vertex(420,600); brush.vertex(300,600); brush.vertex(240,530); brush.vertex(140,490); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.6); brush.vertex(60,470); brush.vertex(150,455); brush.vertex(260,470); brush.vertex(350,520); brush.vertex(420,600); brush.vertex(300,600); brush.vertex(240,530); brush.vertex(140,490); brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.6); brush.vertex(60,470); brush.vertex(150,455); brush.vertex(260,470); brush.vertex(350,520); brush.vertex(420,600); brush.vertex(300,600); brush.vertex(240,530); brush.vertex(140,490); brush.endShape(true);
  brush.fill("#d9a066", 150);
  brush.beginShape(0.6); brush.vertex(100,468); brush.vertex(180,462); brush.vertex(300,500); brush.vertex(350,560); brush.vertex(320,560); brush.vertex(230,505); brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.6); brush.vertex(100,468); brush.vertex(180,462); brush.vertex(300,500); brush.vertex(350,560); brush.vertex(320,560); brush.vertex(230,505); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.6); brush.vertex(100,468); brush.vertex(180,462); brush.vertex(300,500); brush.vertex(350,560); brush.vertex(320,560); brush.vertex(230,505); brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.6); brush.vertex(100,468); brush.vertex(180,462); brush.vertex(300,500); brush.vertex(350,560); brush.vertex(320,560); brush.vertex(230,505); brush.endShape(true);
  // cottage + warm lights
  brush.fill("#0e0c14", 240);
  brush.beginShape(0.1); brush.vertex(70,430); brush.vertex(130,430); brush.vertex(130,468); brush.vertex(70,468); brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.1); brush.vertex(70,430); brush.vertex(130,430); brush.vertex(130,468); brush.vertex(70,468); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.1); brush.vertex(70,430); brush.vertex(130,430); brush.vertex(130,468); brush.vertex(70,468); brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.1); brush.vertex(70,430); brush.vertex(130,430); brush.vertex(130,468); brush.vertex(70,468); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(62,432); brush.vertex(100,404); brush.vertex(138,432); brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.1); brush.vertex(62,432); brush.vertex(100,404); brush.vertex(138,432); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.1); brush.vertex(62,432); brush.vertex(100,404); brush.vertex(138,432); brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.1); brush.vertex(62,432); brush.vertex(100,404); brush.vertex(138,432); brush.endShape(true);
  brush.fill("#ff9a3c", 160); brush.circle(90,450,16,0.3); brush.circle(112,450,16,0.3); brush.fill("#ffd98a", 240);
  brush.circle(90,450,6,0.2); brush.circle(112,450,6,0.2);
  brush.fill("#ff9a3c", 200);
  brush.circle(480,330,5,0.2); brush.circle(300,318,4,0.2);
  brush.fill("#ffb060", 190); brush.circle(300,300,40,0.3); brush.fill("#fff0c8", 230);
  for (let i = 0; i < 18; i++) brush.circle(30 + i*33, 20 + (i*47)%130, 2, 0.3);
}
