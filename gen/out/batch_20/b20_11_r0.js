async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf0e0");
  brush.noStroke();

  // bold sky bands
  brush.fill("#ff7a1a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 200); brush.vertex(620, 190); brush.vertex(620, 390); brush.vertex(-20, 390);
  brush.endShape(true);
  brush.fill("#e0206a", 215);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 230); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#6a1a8a", 200);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 90); brush.vertex(-20, 120);
  brush.endShape(true);
  brush.fill("#ffd23a", 240);
  brush.circle(430, 370, 55, 0.2);

  // sea
  brush.fill("#1a3a8a", 225);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.45);
  brush.beginShape(0.3);
  brush.vertex(-20, 385); brush.vertex(620, 382); brush.vertex(620, 470); brush.vertex(-20, 475);
  brush.endShape(true);
  brush.fill("#ff9a3a", 200);
  brush.beginShape(0.3);
  brush.vertex(390, 395); brush.vertex(470, 395); brush.vertex(480, 450); brush.vertex(380, 450);
  brush.endShape(true);
  // wet sand
  brush.fill("#c85a3a", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(620, 465); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#7a2a3a", 190);
  brush.beginShape(0.5);
  brush.vertex(-20, 540); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // walking figure silhouette, left third
  const F = "#1a0f24";
  brush.fill(F, 240);
  brush.fillBleed(0.18);
  brush.fillTexture(0.3, 0.4);
  brush.circle(180, 330, 13, 0.2);
  brush.beginShape(0.3);
  brush.vertex(166, 345); brush.vertex(196, 345); brush.vertex(200, 420); brush.vertex(162, 420);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(165, 415); brush.vertex(182, 415); brush.vertex(160, 490); brush.vertex(145, 488);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(180, 415); brush.vertex(198, 415); brush.vertex(215, 488); brush.vertex(200, 490);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(192, 350); brush.vertex(208, 400); brush.vertex(196, 404); brush.vertex(185, 360);
  brush.endShape(true);
  // reflection on wet sand
  brush.fill(F, 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(148, 492); brush.vertex(212, 492); brush.vertex(200, 580); brush.vertex(165, 580);
  brush.endShape(true);
}
