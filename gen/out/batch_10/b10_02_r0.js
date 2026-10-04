async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3e4");
  brush.noStroke();
  const bands = [
    ["#5a1f8a", 0, 140],
    ["#c21e6e", 110, 250],
    ["#f0461e", 220, 350],
    ["#ffb000", 320, 460]
  ];
  for (const b of bands) {
    brush.fill(b[0], 215);
    brush.fillBleed(0.28);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(-20, b[1]);
    brush.vertex(200, b[1] + 15);
    brush.vertex(420, b[1] - 10);
    brush.vertex(620, b[1] + 5);
    brush.vertex(620, b[2]);
    brush.vertex(-20, b[2]);
    brush.endShape(true);
  }
  // second pass to deepen the top
  brush.fill("#3b1570", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 70); brush.vertex(300, 95); brush.vertex(-20, 60);
  brush.endShape(true);
  // sun: bright core
  brush.fill("#ffe14a", 240);
  brush.fillBleed(0.2);
  brush.circle(360, 380, 55, 0.3);
  brush.fill("#ff8a1a", 170);
  brush.fillBleed(0.3);
  brush.circle(360, 380, 90, 0.5);
  // far hill
  brush.fill("#7a1e5a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 420); brush.vertex(120, 380); brush.vertex(260, 410); brush.vertex(420, 395);
  brush.vertex(620, 370); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // middle hill
  brush.fill("#3e0f4a", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(-20, 470); brush.vertex(160, 430); brush.vertex(330, 470); brush.vertex(500, 440);
  brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // near hill, near black
  brush.fill("#190822", 240);
  brush.fillBleed(0.18);
  brush.beginShape(0.8);
  brush.vertex(-20, 520); brush.vertex(220, 500); brush.vertex(420, 540); brush.vertex(620, 510);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#190822", 220);
  brush.beginShape(0.8);
  brush.vertex(-20, 540); brush.vertex(200, 520); brush.vertex(440, 560); brush.vertex(620, 530);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a lone tree on the middle ridge
  brush.fill("#190822", 235);
  brush.fillBleed(0.15);
  brush.beginShape(0.2);
  brush.vertex(142, 440); brush.vertex(158, 440); brush.vertex(160, 400); brush.vertex(140, 400);
  brush.endShape(true);
  brush.circle(150, 385, 30, 0.6);
  brush.circle(135, 398, 20, 0.6);
  brush.circle(168, 396, 22, 0.6);
}
