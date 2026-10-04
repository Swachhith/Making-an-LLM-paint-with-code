async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f4");
  randomSeed(1811);
  brush.noStroke();

  // canopy of the tree above, cool greens, dappled
  for (let i = 0; i < 14; i++) {
    brush.fill(random() < 0.5 ? "#7fae9e" : "#5f8fa0", random(150, 190));
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.55);
    brush.circle(random(-20, 620), random(-20, 150), random(60, 110), 0.7);
  }
  // trunk on left behind figure
  brush.fill("#6d7280", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(20, 80); brush.vertex(120, 90); brush.vertex(130, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // cool shadow wash behind figure
  brush.fill("#b8c9d8", 170);
  brush.beginShape(0.8);
  brush.vertex(120, 180); brush.vertex(600, 160); brush.vertex(600, 600); brush.vertex(120, 600);
  brush.endShape(true);

  // figure, waist up: shoulders/torso in blue sweater
  brush.fill("#4f78a8", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.6);
  brush.vertex(190, 600); brush.vertex(200, 400); brush.vertex(260, 350); brush.vertex(330, 345);
  brush.vertex(400, 360); brush.vertex(460, 420); brush.vertex(480, 600);
  brush.endShape(true);
  brush.fill("#3a5f8e", 190);
  brush.beginShape(0.6);
  brush.vertex(400, 380); brush.vertex(460, 430); brush.vertex(478, 600); brush.vertex(410, 600);
  brush.endShape(true);
  for (let i = 0; i < 5; i++) {
    brush.fill("#2e4f7a", 170);
    brush.fillBleed(0.3);
    brush.circle(random(220, 460), random(380, 460), random(18, 30), 0.6);
  }
  // neck
  brush.fill("#e0b49a", 200);
  brush.beginShape(0.4);
  brush.vertex(300, 300); brush.vertex(345, 300); brush.vertex(350, 352); brush.vertex(296, 352);
  brush.endShape(true);
  // head, tilted down, larger
  brush.fill("#e8bfa2", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(322, 240, 78, 0.12);
  brush.fill("#d49c80", 170);
  brush.circle(342, 262, 38, 0.3);
  // closed, downcast eyes and mouth as small soft marks
  brush.fill("#6a4038", 200);
  brush.beginShape(0.6);
  brush.vertex(296, 250); brush.vertex(316, 254); brush.vertex(314, 260); brush.vertex(298, 257);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(340, 254); brush.vertex(362, 250); brush.vertex(360, 257); brush.vertex(342, 260);
  brush.endShape(true);
  brush.fill("#b0605a", 190);
  brush.circle(330, 290, 7, 0.3);
  // hair, dark with a bun
  brush.fill("#2e2a36", 235);
  brush.beginShape(0.7);
  brush.vertex(242, 250); brush.vertex(250, 190); brush.vertex(320, 160); brush.vertex(392, 185);
  brush.vertex(404, 245); brush.vertex(380, 222); brush.vertex(320, 206); brush.vertex(262, 230); brush.vertex(256, 280);
  brush.endShape(true);
  brush.circle(360, 160, 32, 0.3);
  // book held low: open pages as paper, with shadowed cover underneath
  brush.fill("#8a3a3a", 220);
  brush.beginShape(0.2);
  brush.vertex(230, 470); brush.vertex(330, 500); brush.vertex(430, 470); brush.vertex(440, 520); brush.vertex(330, 555); brush.vertex(220, 520);
  brush.endShape(true);
  brush.fill("#f7f4ea", 250);
  brush.beginShape(0.2);
  brush.vertex(240, 460); brush.vertex(330, 488); brush.vertex(420, 460); brush.vertex(426, 505); brush.vertex(330, 535); brush.vertex(236, 505);
  brush.endShape(true);
  // hands
  brush.fill("#dcae94", 210);
  brush.circle(236, 500, 20, 0.3);
  brush.circle(424, 500, 20, 0.3);
}
