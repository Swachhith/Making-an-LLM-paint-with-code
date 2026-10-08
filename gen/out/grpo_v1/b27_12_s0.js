async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f5");
  brush.noStroke();
  // soft misty sky: pale lavender to lilac, two passes
  brush.fill("#b8c3d2", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(300, 320); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#9a9fd4", 150);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150); brush.vertex(300, 200); brush.vertex(-20, 150);
  brush.endShape(true);
  // reeds in the far distance: tall, thin, soft green
  brush.fill("#8fb88a", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(20, 270); brush.vertex(60, 260); brush.vertex(70, 400); brush.vertex(30, 410);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(140, 275); brush.vertex(180, 265); brush.vertex(195, 415); brush.vertex(160, 425);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(270, 272); brush.vertex(310, 262); brush.vertex(325, 412); brush.vertex(290, 422);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(400, 270); brush.vertex(440, 260); brush.vertex(455, 410); brush.vertex(420, 420);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(520, 272); brush.vertex(560, 262); brush.vertex(575, 412); brush.vertex(540, 422);
  brush.endShape(true);
  // middle reeds: denser, a deeper green
  brush.fill("#6fa87a", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(220, 330); brush.vertex(250, 320); brush.vertex(260, 470); brush.vertex(230, 480);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(360, 335); brush.vertex(390, 325); brush.vertex(400, 475); brush.vertex(370, 485);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(470, 332); brush.vertex(500, 322); brush.vertex(510, 472); brush.vertex(480, 482);
  brush.endShape(true);
  // foreground reeds: tall, golden-green, with a few purple tips
  brush.fill("#a89a5a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(10, 400); brush.vertex(30, 380); brush.vertex(40, 530); brush.vertex(20, 550);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(50, 405); brush.vertex(70, 390); brush.vertex(85, 540); brush.vertex(65, 560);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(120, 410); brush.vertex(140, 395); brush.vertex(155, 545); brush.vertex(135, 565);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(190, 415); brush.vertex(210, 400); brush.vertex(225, 550); brush.vertex(205, 570);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(250, 412); brush.vertex(270, 398); brush.vertex(285, 545); brush.vertex(265, 565);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(320, 418); brush.vertex(340, 405); brush.vertex(355, 550); brush.vertex(335, 570);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(390, 420); brush.vertex(410, 408); brush.vertex(425, 548); brush.vertex(405, 568);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(460, 415); brush.vertex(480, 402); brush.vertex(495, 545); brush.vertex(475, 565);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(530, 420); brush.vertex(550, 408); brush.vertex(565, 548); brush.vertex(545, 568);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(580, 422); brush.vertex(600, 412); brush.vertex(615, 545); brush.vertex(595, 565);
  brush.endShape(true);
  // water: reflection of sky, with darker ripples
  brush.fill("#9fb8c8", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a few soft ripples
  brush.fill("#7f96a8", 170);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(200, 490); brush.vertex(230, 490); brush.vertex(230, 520); brush.vertex(200, 520);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(400, 495); brush.vertex(430, 495); brush.vertex(430, 525); brush.vertex(400, 525);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(50, 510); brush.vertex(120, 510); brush.vertex(120, 535); brush.vertex(50, 535);
  brush.endShape(true);
  // a tiny dark island
  brush.fill("#5e7a6a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(300, 390, 32, 0.3);
}
