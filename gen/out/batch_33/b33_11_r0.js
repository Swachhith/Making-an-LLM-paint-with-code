async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe6da");
  randomSeed(111);
  brush.noStroke();
  // splashy blooms
  var wash = ["#2a6ac8", "#e83a6a", "#f0a020", "#7a3ab8"];
  for (var i = 0; i < 9; i++) {
    brush.fill(random(wash), random(150, 210)); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.5);
    brush.circle(random(0, 600), random(0, 600), random(40, 90), 1.2);
  }
  // smoke
  brush.fill("#9a8aa8", 150);
  brush.beginShape(1); brush.vertex(20, 300); brush.vertex(250, 220); brush.vertex(400, 120); brush.vertex(330, 330); brush.vertex(100, 420); brush.endShape(true);
  // figure: body
  brush.fill("#1a1428", 225); brush.fillBleed(0.25);
  brush.beginShape(0.4); brush.vertex(380, 240); brush.vertex(470, 235); brush.vertex(500, 420); brush.vertex(510, 600); brush.vertex(380, 600); brush.vertex(375, 420); brush.endShape(true);
  // head
  brush.fill("#a8562a", 220);
  brush.circle(430, 190, 32, 0.4);
  brush.fill("#1a1428", 220);
  brush.beginShape(0.3); brush.vertex(400, 175); brush.vertex(420, 150); brush.vertex(455, 160); brush.vertex(460, 185); brush.vertex(410, 185); brush.endShape(true);
  // arms and trumpet
  brush.fill("#2a1e3a", 225);
  brush.beginShape(0.3); brush.vertex(400, 270); brush.vertex(350, 230); brush.vertex(330, 195); brush.vertex(355, 190); brush.vertex(380, 235); brush.vertex(425, 255); brush.endShape(true);
  brush.fill("#f0b020", 235);
  brush.beginShape(0.2); brush.vertex(405, 180); brush.vertex(325, 175); brush.vertex(325, 195); brush.vertex(405, 200); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(325, 160); brush.vertex(275, 130); brush.vertex(270, 235); brush.vertex(325, 205); brush.endShape(true);
  // drips
  brush.fill("#e83a6a", 190);
  brush.beginShape(0.4); brush.vertex(100, 480); brush.vertex(120, 480); brush.vertex(118, 590); brush.vertex(102, 590); brush.endShape(true);
  brush.fill("#2a6ac8", 190);
  brush.beginShape(0.4); brush.vertex(220, 440); brush.vertex(240, 440); brush.vertex(238, 560); brush.vertex(222, 560); brush.endShape(true);
}
