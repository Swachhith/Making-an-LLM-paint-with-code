async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#120e18");
  randomSeed(28);
  brush.noStroke(); brush.fillBleed(0.28); brush.fillTexture(0.4, 0.4);
  // sky layers glowing from the horizon
  brush.fill("#8a1a3a", 230);
  brush.beginShape(0.5); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,260); brush.vertex(-60,260); brush.endShape(true);
  brush.fill("#e0502a", 230);
  brush.beginShape(0.5); brush.vertex(-60,120); brush.vertex(660,110); brush.vertex(660,390); brush.vertex(-60,390); brush.endShape(true);
  brush.fill("#ffa832", 230);
  brush.beginShape(0.5); brush.vertex(60,240); brush.vertex(540,235); brush.vertex(600,390); brush.vertex(0,390); brush.endShape(true);
  brush.fill("#ffe48a", 235);
  brush.beginShape(0.5); brush.vertex(170,300); brush.vertex(430,300); brush.vertex(470,390); brush.vertex(130,390); brush.endShape(true);
  brush.fill("#fff6c8", 240); brush.circle(300, 350, 36, 0.2);
  // river reflecting
  brush.fill("#b8421e", 215);
  brush.beginShape(0.4); brush.vertex(-60,400); brush.vertex(660,400); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#ff9a3a", 205);
  brush.beginShape(0.5); brush.vertex(200,405); brush.vertex(400,405); brush.vertex(440,640); brush.vertex(160,640); brush.endShape(true);
  brush.fill("#ffd868", 200);
  brush.beginShape(0.5); brush.vertex(260,410); brush.vertex(340,410); brush.vertex(360,560); brush.vertex(240,560); brush.endShape(true);
  // bridge: deck and arches, two passes
  for (let k = 0; k < 4; k++) {
    brush.fill("#0a0610", 240);
    brush.beginShape(0.2); brush.vertex(-60,365); brush.vertex(660,365); brush.vertex(660,405); brush.vertex(-60,405); brush.endShape(true);
    for (let i = 0; i < 4; i++) { let x = 20 + i * 170; brush.beginShape(0.2); brush.vertex(x,400); brush.vertex(x+34,400); brush.vertex(x+32,470); brush.vertex(x+2,470); brush.endShape(true); }
  }
  brush.fill("#0a0610", 240);
  for (let i = 0; i < 12; i++) { brush.beginShape(0.2); brush.vertex(i*52,345); brush.vertex(i*52+16,345); brush.vertex(i*52+16,370); brush.vertex(i*52,370); brush.endShape(true); }
  // dark banks with reeds
  for (let k = 0; k < 4; k++) {
    brush.fill("#0a0810", 235);
    brush.beginShape(0.4); brush.vertex(-60,660); brush.vertex(-60,500); brush.vertex(110,540); brush.vertex(190,660); brush.endShape(true);
    brush.beginShape(0.4); brush.vertex(660,660); brush.vertex(660,510); brush.vertex(500,560); brush.vertex(420,660); brush.endShape(true);
  }
}
