async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f2ea");
  randomSeed(27);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.fill("#1a7ae0", 220);
  brush.beginShape(0.4); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,440); brush.vertex(-60,440); brush.endShape(true);
  brush.fill("#8ac8f4", 190);
  brush.beginShape(0.5); brush.vertex(-60,260); brush.vertex(660,270); brush.vertex(660,440); brush.vertex(-60,440); brush.endShape(true);
  brush.fill("#f8f4f0", 220);
  brush.beginShape(0.7); brush.vertex(40,80); brush.vertex(200,60); brush.vertex(240,110); brush.vertex(80,130); brush.endShape(true);
  // ground: saturated green with ochre dry grass
  brush.fill("#1a8a2a", 225);
  brush.beginShape(0.4); brush.vertex(-60,440); brush.vertex(300,425); brush.vertex(660,435); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#c8a030", 190);
  brush.beginShape(0.5); brush.vertex(-60,520); brush.vertex(250,490); brush.vertex(100,600); brush.vertex(-60,620); brush.endShape(true);
  // fallen petals carpet
  for (let i = 0; i < 40; i++) { brush.fill("#8a28d0", 185); brush.circle(random(130,500), random(480,610), random(8,16), 0.8); }
  // trunk & forks
  for (let k = 0; k < 2; k++) {
    brush.fill("#3a1c10", 235);
    brush.beginShape(0.4); brush.vertex(280,470); brush.vertex(332,470); brush.vertex(320,300); brush.vertex(292,300); brush.endShape(true);
    brush.beginShape(0.4); brush.vertex(295,330); brush.vertex(318,320); brush.vertex(210,230); brush.vertex(190,250); brush.endShape(true);
    brush.beginShape(0.4); brush.vertex(300,320); brush.vertex(320,330); brush.vertex(440,240); brush.vertex(420,222); brush.endShape(true);
  }
  // wide flat crown: dark purple base, lavender, pink highlights
  const cols = [["#5a1a9a",215],["#8a3ad8",205],["#c08af0",185],["#f0b8f0",170]];
  for (let j = 0; j < cols.length; j++) for (let i = 0; i < 14 - j * 2; i++) {
    let a = random(360), r = random(0, 190 - j * 25);
    brush.fill(cols[j][0], cols[j][1]);
    brush.circle(310 + cos(a) * r, 190 + sin(a) * r * 0.38 - j * 8, random(26, 50), 0.8);
  }
}
