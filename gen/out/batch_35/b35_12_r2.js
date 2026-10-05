async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0e2a30");
  randomSeed(32);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  // teal wall behind, lamp warmth upper right
  brush.fill("#1a7a82", 225);
  brush.beginShape(0.4); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#3aa8a4", 190);
  brush.beginShape(0.5); brush.vertex(-60,40); brush.vertex(300,30); brush.vertex(280,400); brush.vertex(-60,420); brush.endShape(true);
  brush.fill("#f08a28", 220);
  brush.beginShape(0.5); brush.vertex(400,20); brush.vertex(640,40); brush.vertex(620,260); brush.vertex(420,240); brush.endShape(true);
  brush.fill("#ffc860", 215);
  brush.circle(520, 140, 40, 0.3);
  // dark shoulders/coat, large, two passes
  for (let k = 0; k < 4; k++) {
    brush.fill("#5a1e14", 230);
    brush.beginShape(0.4); brush.vertex(10,660); brush.vertex(20,470); brush.vertex(120,380); brush.vertex(230,355); brush.vertex(370,355); brush.vertex(480,385); brush.vertex(570,480); brush.vertex(590,660); brush.endShape(true);
  }
  brush.fill("#2a0e0c", 210);
  brush.beginShape(0.4); brush.vertex(300,660); brush.vertex(310,400); brush.vertex(360,360); brush.vertex(480,400); brush.vertex(570,520); brush.vertex(590,660); brush.endShape(true);
  // scarf teal-orange
  brush.fill("#e87a22", 230);
  brush.beginShape(0.4); brush.vertex(220,360); brush.vertex(380,360); brush.vertex(400,420); brush.vertex(210,420); brush.endShape(true);
  // neck, face
  brush.fill("#c8844a", 235);
  brush.beginShape(0.4); brush.vertex(255,365); brush.vertex(345,365); brush.vertex(340,300); brush.vertex(260,300); brush.endShape(true);
  for (let k = 0; k < 4; k++) { brush.fill(k ? "#e0a068" : "#b8703a", 225); brush.circle(300, 250, 70, 0.25); }
  brush.fill("#2a1008", 215); brush.circle(280, 240, 4, 0.3); brush.circle(322, 240, 4, 0.3);
  // hat
  brush.fill("#06080e", 245);
  brush.beginShape(0.3); brush.vertex(225,215); brush.vertex(375,215); brush.vertex(362,120); brush.vertex(238,120); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(185,228); brush.vertex(415,228); brush.vertex(395,200); brush.vertex(205,200); brush.endShape(true);
  // suitcase edge at bottom-left, glimpsed
  brush.fill("#d88a30", 235);
  brush.beginShape(0.2); brush.vertex(-40,660); brush.vertex(-40,560); brush.vertex(120,545); brush.vertex(130,660); brush.endShape(true);
  brush.fill("#6a3a10", 220);
  brush.beginShape(0.2); brush.vertex(30,560); brush.vertex(80,555); brush.vertex(80,515); brush.vertex(30,520); brush.endShape(true);
}
