async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4ecdc");
  randomSeed(11);
  brush.noStroke();
  // sky
  brush.fill("#3a86d0", 210); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 400); brush.vertex(0, 400); brush.endShape(true);
  brush.fill("#f2b05a", 170); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(0, 290); brush.vertex(600, 290); brush.vertex(600, 420); brush.vertex(0, 420); brush.endShape(true);
  // mountain broad
  for (var pass = 0; pass < 2; pass++) {
brush.fill("#b02818", 230); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  [[0,470],[70,400],[120,370],[170,330],[215,300],[250,235],[300,200],[335,150],[372,195],[410,230],[450,280],[500,320],[540,375],[600,420],[600,470]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  }
  // colour patches of forest
  var cols = ["#e8841a", "#b3201a", "#f0b020", "#8a2a14", "#d9541a", "#6e8a2a"];
  for (var i = 0; i < 130; i++) {
    var y = random(170, 465);
    var half = map(y, 150, 470, 10, 300);
    var x = 330 + random(-half, half) * 0.85;
    brush.fill(random(cols), random(190, 240)); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.3);
    brush.circle(x, y, random(18, 40), 0.7);
  }
  // shadow side
  brush.fill("#5a1018", 190); brush.fillBleed(0.3);
  brush.beginShape(0.5);
  [[330,170],[390,215],[470,300],[560,390],[600,470],[430,470],[380,330]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // foreground band
  brush.fill("#8a3a12", 210); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(0, 480); brush.vertex(150, 450); brush.vertex(400, 465); brush.vertex(600, 445); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.fill("#d9701a", 180);
  for (var j = 0; j < 22; j++) brush.circle(random(0, 600), random(480, 590), random(14, 28), 0.7);
  brush.fill("#3a2018", 200);
  brush.beginShape(0.5); brush.vertex(0, 560); brush.vertex(300, 540); brush.vertex(600, 565); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
}
