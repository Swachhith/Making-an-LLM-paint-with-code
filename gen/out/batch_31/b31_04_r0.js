async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e4ef");
  brush.noStroke();
  brush.fill("#b8b4e0", 210); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 420); brush.vertex(-10, 430);
  brush.endShape(true);
  brush.fill("#d4a8d0", 180);
  brush.beginShape(0.5);
  brush.vertex(-10, 200); brush.vertex(610, 230); brush.vertex(610, 440); brush.vertex(-10, 440);
  brush.endShape(true);
  brush.fill("#9fb4d8", 180);
  brush.beginShape(0.5);
  brush.vertex(-10, 40); brush.vertex(610, 20); brush.vertex(610, 140); brush.vertex(-10, 170);
  brush.endShape(true);
  // wet ground
  brush.fill("#8c88b8", 210); brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(-10, 440); brush.vertex(610, 435); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // lamp glow
  brush.fill("#ffe8a0", 190); brush.fillBleed(0.3);
  brush.circle(250, 330, 55, 0.5);
  brush.fill("#ffd070", 200);
  brush.circle(250, 330, 28, 0.4);
  // reflection
  brush.fill("#f0d090", 170);
  brush.beginShape(0.5);
  brush.vertex(232, 450); brush.vertex(268, 450); brush.vertex(285, 560); brush.vertex(215, 560);
  brush.endShape(true);
  // lamp pole
  brush.fill("#4a4878", 230); brush.fillBleed(0.1);
  brush.beginShape(0.1);
  brush.vertex(244, 445); brush.vertex(262, 445); brush.vertex(258, 350); brush.vertex(248, 350);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(232, 345); brush.vertex(268, 345); brush.vertex(260, 312); brush.vertex(240, 312);
  brush.endShape(true);
  // rain
  brush.fill("#ffffff", 120);
  for (let i = 0; i < 40; i++) brush.circle((i * 97) % 600, (i * 53) % 430, 2.5, 0.3);
}
