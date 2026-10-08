async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe4d4");
  brush.noStroke();
  // sky: soft warm wash, two passes
  brush.fill("#c9a88a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 470); brush.vertex(300, 530); brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#a68266", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 260); brush.vertex(420, 320); brush.vertex(220, 260); brush.vertex(-20, 260);
  brush.endShape(true);
  // tree in the right distance
  brush.fill("#6f5a44", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(480, 470); brush.vertex(500, 470); brush.vertex(500, 280); brush.vertex(470, 260); brush.vertex(440, 280); brush.vertex(440, 470);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(420, 470); brush.vertex(440, 470); brush.vertex(440, 340); brush.vertex(410, 330); brush.vertex(410, 470);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(540, 470); brush.vertex(560, 470); brush.vertex(560, 360); brush.vertex(530, 350); brush.vertex(530, 470);
  brush.endShape(true);
  // ground
  brush.fill("#7a6a52", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // bench
  brush.fill("#5a4a38", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(120, 520); brush.vertex(480, 520); brush.vertex(480, 532); brush.vertex(120, 532);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(130, 540); brush.vertex(140, 540); brush.vertex(140, 558); brush.vertex(130, 558);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(470, 540); brush.vertex(480, 540); brush.vertex(480, 558); brush.vertex(470, 558);
  brush.endShape(true);
  // two figures, silhouettes
  brush.fill("#3a2a1c", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  // person left, facing right
  brush.beginShape(0.3);
  brush.vertex(210, 460); brush.vertex(216, 460); brush.vertex(216, 390); brush.vertex(228, 390); brush.vertex(228, 420); brush.vertex(216, 420);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(230, 460); brush.vertex(236, 460); brush.vertex(236, 400); brush.vertex(244, 400); brush.vertex(244, 440); brush.vertex(236, 440);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(244, 440); brush.vertex(254, 440); brush.vertex(254, 460); brush.vertex(244, 460);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(236, 440); brush.vertex(244, 440); brush.vertex(244, 460); brush.vertex(236, 460);
  brush.endShape(true);
  // person right, facing left
  brush.beginShape(0.3);
  brush.vertex(370, 460); brush.vertex(376, 460); brush.vertex(376, 390); brush.vertex(388, 390); brush.vertex(388, 420); brush.vertex(376, 420);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(352, 460); brush.vertex(346, 460); brush.vertex(346, 400); brush.vertex(338, 400); brush.vertex(338, 440); brush.vertex(346, 440);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(338, 440); brush.vertex(328, 440); brush.vertex(328, 460); brush.vertex(338, 460);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(346, 440); brush.vertex(338, 440); brush.vertex(338, 460); brush.vertex(346, 460);
  brush.endShape(true);
  // heads
  brush.beginShape(0.3);
  brush.vertex(224, 430); brush.vertex(236, 430); brush.vertex(236, 448); brush.vertex(224, 448);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(364, 430); brush.vertex(376, 430); brush.vertex(376, 448); brush.vertex(364, 448);
  brush.endShape(true);
  // arms
  brush.beginShape(0.3);
  brush.vertex(232, 415); brush.vertex(216, 415); brush.vertex(216, 432); brush.vertex(224, 432); brush.vertex(224, 415);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(368, 415); brush.vertex(384, 415); brush.vertex(384, 432); brush.vertex(376, 432); brush.vertex(376, 415);
  brush.endShape(true);
  // legs
  brush.beginShape(0.3);
  brush.vertex(230, 455); brush.vertex(236, 455); brush.vertex(236, 515); brush.vertex(230, 515);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(370, 455); brush.vertex(376, 455); brush.vertex(376, 515); brush.vertex(370, 515);
  brush.endShape(true);
  // shadow on the ground
  brush.fill("#3a2a1c", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(220, 515); brush.vertex(240, 515); brush.vertex(240, 530); brush.vertex(220, 530);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(360, 515); brush.vertex(380, 515); brush.vertex(380, 530); brush.vertex(360, 530);
  brush.endShape(true);
}
