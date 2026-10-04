async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ece4");
  brush.noStroke();

  // limited palette: burnt orange, indigo, warm grey neutral
  // sky graded orange at horizon to indigo above
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.45);
  brush.fill("#2b3a6e", 190);
  brush.beginShape(0.8);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 200); brush.vertex(-40, 230);
  brush.endShape(true);
  brush.fill("#d9642a", 200);
  brush.beginShape(0.8);
  brush.vertex(-40, 200); brush.vertex(640, 170); brush.vertex(640, 440); brush.vertex(-40, 440);
  brush.endShape(true);
  brush.fill("#d9642a", 170);
  brush.circle(300, 400, 80, 0.5);

  // ground: low hill in indigo+grey
  brush.fill("#6e665e", 210);
  brush.beginShape(0.8);
  brush.vertex(-40, 450); brush.vertex(300, 425); brush.vertex(640, 455); brush.vertex(640, 640); brush.vertex(-40, 640);
  brush.endShape(true);
  brush.fill("#2b3a6e", 200);
  brush.beginShape(0.8);
  brush.vertex(-40, 500); brush.vertex(640, 480); brush.vertex(640, 640); brush.vertex(-40, 640);
  brush.endShape(true);

  // silhouettes: bench + two people, indigo-dark, painted twice
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(pass ? "#1a1f3a" : "#2b3a6e", 230);
    brush.fillBleed(0.12);
    // bench seat and back
    brush.beginShape(0.05);
    brush.vertex(180, 395); brush.vertex(420, 395); brush.vertex(420, 412); brush.vertex(180, 412);
    brush.endShape(true);
    brush.beginShape(0.05);
    brush.vertex(185, 350); brush.vertex(415, 350); brush.vertex(415, 366); brush.vertex(185, 366);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(195, 405); brush.vertex(212, 405); brush.vertex(212, 440); brush.vertex(195, 440);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(388, 405); brush.vertex(405, 405); brush.vertex(405, 440); brush.vertex(388, 440);
    brush.endShape(true);
    // person left, leaning toward right
    brush.beginShape(0.5);
    brush.vertex(240, 300); brush.vertex(272, 296); brush.vertex(282, 398); brush.vertex(232, 400);
    brush.endShape(true);
    brush.circle(258, 280, 17, 0.15);
    brush.beginShape(0.4);
    brush.vertex(240, 392); brush.vertex(292, 392); brush.vertex(292, 438); brush.vertex(276, 438); brush.vertex(274, 410); brush.vertex(240, 410);
    brush.endShape(true);
    // person right, head tilted to left
    brush.beginShape(0.5);
    brush.vertex(320, 306); brush.vertex(352, 304); brush.vertex(360, 398); brush.vertex(312, 400);
    brush.endShape(true);
    brush.circle(332, 288, 16, 0.15);
    brush.beginShape(0.4);
    brush.vertex(306, 392); brush.vertex(358, 392); brush.vertex(356, 410); brush.vertex(326, 410); brush.vertex(324, 438); brush.vertex(308, 438);
    brush.endShape(true);
  }
}
