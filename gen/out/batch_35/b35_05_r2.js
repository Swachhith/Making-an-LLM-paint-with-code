async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece4f0");
  randomSeed(25);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  // dusk sky bands
  brush.fill("#3a1a8a", 235);
  brush.beginShape(0.4); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,260); brush.vertex(-60,260); brush.endShape(true);
  brush.fill("#d8284a", 220);
  brush.beginShape(0.5); brush.vertex(-60,190); brush.vertex(660,170); brush.vertex(660,360); brush.vertex(-60,360); brush.endShape(true);
  brush.fill("#ff9a20", 220);
  brush.beginShape(0.5); brush.vertex(200,270); brush.vertex(660,260); brush.vertex(660,380); brush.vertex(200,380); brush.endShape(true);
  // big peak, off-centre left, shadow side deep indigo
  for (let k = 0; k < 2; k++) {
    brush.fill("#1a1a7a", 230);
    brush.beginShape(0.15); brush.vertex(-60,660); brush.vertex(60,330); brush.vertex(190,100); brush.vertex(235,60); brush.vertex(330,300); brush.vertex(480,660); brush.endShape(true);
  }
  // alpenglow snow face
  brush.fill("#ff7a9a", 225);
  brush.beginShape(0.2); brush.vertex(235,60); brush.vertex(330,300); brush.vertex(380,470); brush.vertex(270,330); brush.vertex(215,150); brush.endShape(true);
  brush.fill("#ffd0c0", 200);
  brush.beginShape(0.2); brush.vertex(235,62); brush.vertex(270,200); brush.vertex(240,150); brush.endShape(true);
  // far ridge right
  brush.fill("#5a2a9a", 215);
  brush.beginShape(0.3); brush.vertex(380,470); brush.vertex(500,350); brush.vertex(660,400); brush.vertex(660,660); brush.vertex(380,660); brush.endShape(true);
  // groomed ski run, cool white-blue
  brush.fill("#a8c8f8", 215);
  brush.beginShape(0.5); brush.vertex(90,660); brush.vertex(200,420); brush.vertex(280,420); brush.vertex(360,660); brush.endShape(true);
  brush.fill("#5a8ae0", 170);
  brush.beginShape(0.5); brush.vertex(200,660); brush.vertex(240,450); brush.vertex(270,450); brush.vertex(310,660); brush.endShape(true);
  // black pines
  for (let i = 0; i < 16; i++) {
    let x = i < 8 ? 20 + i * 18 : 400 + (i - 8) * 30; let y = 500 + random(0, 110);
    brush.fill("#06201c", 235); brush.beginShape(0.3); brush.vertex(x,y); brush.vertex(x+24,y); brush.vertex(x+12,y-60); brush.endShape(true);
  }
  brush.fill("#ffc040", 240); brush.circle(300, 395, 5, 0.3); brush.circle(430, 372, 4, 0.3);
}
