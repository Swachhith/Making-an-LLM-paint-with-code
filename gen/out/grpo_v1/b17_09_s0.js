async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f5");
  randomSeed(1337);
  brush.noStroke();
  // soft sky: pale blue fading to lilac
  brush.fill("#a9b8d4", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(400, 340); brush.vertex(200, 300); brush.vertex(-20, 340);
  brush.endShape(true);
  brush.fill("#c4b3d2", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 300); brush.vertex(620, 300); brush.vertex(620, 420); brush.vertex(420, 450); brush.vertex(-20, 420);
  brush.endShape(true);
  // rolling low hills in the far distance
  brush.fill("#9fb0c4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(120, 380); brush.vertex(260, 420); brush.vertex(420, 390); brush.vertex(560, 430); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // clouds: white left as paper, painted as soft grey-blue shapes
  brush.fill("#8f9fb0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(150, 330); brush.vertex(260, 310); brush.vertex(380, 320); brush.vertex(440, 340); brush.vertex(350, 360); brush.vertex(220, 350);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(470, 340); brush.vertex(540, 320); brush.vertex(600, 335); brush.vertex(570, 360); brush.vertex(500, 350);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(200, 400); brush.vertex(320, 390); brush.vertex(440, 400); brush.vertex(420, 430); brush.vertex(300, 435);
  brush.endShape(true);
  // main peak: tall, off-centre, two passes for softness
  brush.fill("#7a8fa0", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 360); brush.vertex(310, 200); brush.vertex(340, 170); brush.vertex(370, 200); brush.vertex(380, 360);
  brush.endShape(true);
  brush.fill("#5a6f8e", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 360); brush.vertex(312, 230); brush.vertex(330, 230); brush.vertex(342, 360);
  brush.endShape(true);
  // smaller peaks behind
  brush.fill("#6f829a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(60, 350); brush.vertex(110, 290); brush.vertex(160, 340); brush.vertex(120, 350);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(500, 360); brush.vertex(530, 310); brush.vertex(560, 350); brush.vertex(530, 360);
  brush.endShape(true);
  // foreground meadow: soft green, lower opacity
  brush.fill("#8fb08a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 430); brush.vertex(620, 425); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a few tree silhouettes at the foot of the peak
  brush.fill("#4a5a6e", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(470, 450); brush.vertex(480, 300); brush.vertex(510, 300); brush.vertex(520, 450);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(530, 460); brush.vertex(540, 330); brush.vertex(560, 330); brush.vertex(570, 460);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(220, 460); brush.vertex(230, 340); brush.vertex(250, 340); brush.vertex(260, 460);
  brush.endShape(true);
}
