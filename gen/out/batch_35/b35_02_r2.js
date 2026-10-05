async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4e4cc");
  randomSeed(22);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.45, 0.4);
  // three colours only: burnt orange, ochre, deep umber
  // far glow
  brush.fill("#f0b050", 210);
  brush.beginShape(0.4); brush.vertex(-60,120); brush.vertex(660,120); brush.vertex(660,340); brush.vertex(-60,340); brush.endShape(true);
  // far plane, ochre mesas
  brush.fill("#e08a2a", 200);
  brush.beginShape(0.3); brush.vertex(150,330); brush.vertex(170,250); brush.vertex(300,242); brush.vertex(330,330); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(380,330); brush.vertex(400,270); brush.vertex(520,262); brush.vertex(560,330); brush.endShape(true);
  // middle planes: stepped orange walls
  brush.fill("#c8521a", 215);
  brush.beginShape(0.3); brush.vertex(-60,90); brush.vertex(150,110); brush.vertex(180,250); brush.vertex(240,380); brush.vertex(-60,400); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(660,60); brush.vertex(440,110); brush.vertex(410,260); brush.vertex(380,390); brush.vertex(660,420); brush.endShape(true);
  brush.fill("#a03a10", 190);
  brush.beginShape(0.3); brush.vertex(-60,200); brush.vertex(100,210); brush.vertex(150,330); brush.vertex(-60,350); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(660,190); brush.vertex(500,200); brush.vertex(460,320); brush.vertex(660,340); brush.endShape(true);
  // river-bed floor, ochre
  brush.fill("#e8a038", 220);
  brush.beginShape(0.4); brush.vertex(-60,400); brush.vertex(260,340); brush.vertex(340,340); brush.vertex(660,420); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#c8621e", 190);
  brush.beginShape(0.5); brush.vertex(240,350); brush.vertex(350,350); brush.vertex(430,600); brush.vertex(110,600); brush.endShape(true);
  // dark umber foreground
  for (let k = 0; k < 2; k++) {
    brush.fill("#3a1a0c", 225);
    brush.beginShape(0.4); brush.vertex(-60,640); brush.vertex(-60,470); brush.vertex(90,450); brush.vertex(190,520); brush.vertex(150,640); brush.endShape(true);
    brush.beginShape(0.4); brush.vertex(660,640); brush.vertex(660,500); brush.vertex(520,490); brush.vertex(450,570); brush.vertex(480,640); brush.endShape(true);
  }
  brush.fill("#5a2810", 180);
  brush.beginShape(0.4); brush.vertex(280,600); brush.vertex(300,520); brush.vertex(350,510); brush.vertex(380,600); brush.endShape(true);
}
