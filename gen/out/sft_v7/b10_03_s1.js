async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8d8c8");
  brush.noStroke();

  // sky: warm grey-blue, two passes
  brush.fill("#8f9aa8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#a9b8c8", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(-20, 220); brush.vertex(620, 200); brush.vertex(620, 320); brush.vertex(-20, 340);
  brush.endShape(true);

  // ground: ochre-brown
  brush.fill("#b89a6a", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(620, 410); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8a6f48", 190);
  brush.beginShape(0.5);
  brush.vertex(-20, 480); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // bench: dark silhouette, three passes
  brush.fill("#4a3a2a", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(160, 420); brush.vertex(170, 420); brush.vertex(170, 430); brush.vertex(160, 430);
  brush.vertex(440, 420); brush.vertex(450, 420); brush.vertex(450, 430); brush.vertex(440, 430);
  brush.vertex(450, 435); brush.vertex(440, 435); brush.vertex(440, 445); brush.vertex(450, 445);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(160, 445); brush.vertex(450, 445); brush.vertex(450, 455); brush.vertex(160, 455);
  brush.endShape(true);
  brush.fill("#2a201a", 230);
  brush.beginShape(0.1);
  brush.vertex(200, 420); brush.vertex(210, 420); brush.vertex(210, 430); brush.vertex(200, 430);
  brush.vertex(390, 420); brush.vertex(400, 420); brush.vertex(400, 430); brush.vertex(390, 430);
  brush.endShape(true);

  // person left, seated, back to viewer
  brush.fill("#3a2a24", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.15);
  brush.vertex(200, 450); brush.vertex(235, 450); brush.vertex(235, 420); brush.vertex(215, 420);
  brush.vertex(210, 445); brush.vertex(225, 445);
  brush.endShape(true);
  brush.beginShape(0.15);
  brush.vertex(200, 450); brush.vertex(210, 450); brush.vertex(210, 430); brush.vertex(220, 430);
  brush.vertex(220, 445); brush.vertex(215, 445);
  brush.endShape(true);
  brush.beginShape(0.15);
  brush.vertex(235, 450); brush.vertex(260, 450); brush.vertex(260, 430); brush.vertex(250, 430);
  brush.vertex(250, 445); brush.vertex(235, 445);
  brush.endShape(true);
  brush.beginShape(0.15);
  brush.vertex(245, 450); brush.vertex(270, 450); brush.vertex(270, 430); brush.vertex(260, 430);
  brush.vertex(260, 445); brush.vertex(245, 445);
  brush.endShape(true);
  brush.beginShape(0.15);
  brush.vertex(255, 450); brush.vertex(280, 450); brush.vertex(280, 430); brush.vertex(270, 430);
  brush.vertex(270, 445); brush.vertex(255, 445);
  brush.endShape(true);

  // person right, seated, back to viewer
  brush.fill("#3a2a24", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.15);
  brush.vertex(390, 450); brush.vertex(425, 450); brush.vertex(425, 420); brush.vertex(405, 420);
  brush.vertex(400, 445); brush.vertex(415, 445);
  brush.endShape(true);
  brush.beginShape(0.15);
  brush.vertex(390, 450); brush.vertex(400, 450); brush.vertex(400, 430); brush.vertex(410, 430);
  brush.vertex(410, 445); brush.vertex(405, 445);
  brush.endShape(true);
  brush.beginShape(0.15);
  brush.vertex(425, 450); brush.vertex(450, 450); brush.vertex(450, 430); brush.vertex(440, 430);
  brush.vertex(440, 445); brush.vertex(425, 445);
  brush.endShape(true);
  brush.beginShape(0.15);
  brush.vertex(435, 450); brush.vertex(460, 450); brush.vertex(460, 430); brush.vertex(450, 430);
  brush.vertex(450, 445); brush.vertex(435, 445);
  brush.endShape(true);
  brush.beginShape(0.15);
  brush.vertex(445, 450); brush.vertex(470, 450); brush.vertex(470, 430); brush.vertex(460, 430);
  brush.vertex(460, 445); brush.vertex(445, 445);
  brush.endShape(true);
  // legs
  brush.fill("#3a2a24", 220);
  brush.beginShape(0.15);
  brush.vertex(235, 455); brush.vertex(255, 455); brush.vertex(255, 475); brush.vertex(235, 475);
  brush.endShape(true);
  brush.beginShape(0.15);
  brush.vertex(425, 455); brush.vertex(445, 455); brush.vertex(445, 475); brush.vertex(425, 475);
  brush.endShape(true);

  // a couple of trees behind the bench
  brush.fill("#5a4a38", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(470, 380); brush.vertex(500, 360); brush.vertex(530, 380); brush.vertex(530, 450); brush.vertex(470, 450);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(200, 300); brush.vertex(230, 270); brush.vertex(260, 300); brush.vertex(260, 400); brush.vertex(230, 400);
  brush.endShape(true);
}
