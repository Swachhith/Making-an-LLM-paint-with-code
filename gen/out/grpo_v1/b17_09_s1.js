async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece5d2");
  brush.noStroke();
  // soft sky, pale lavender-blue, high up
  brush.fill("#b8c6d6", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(420, 250); brush.vertex(200, 200); brush.vertex(-20, 250);
  brush.endShape(true);
  // rolling low hills, deeper blue
  brush.fill("#8aa0c0", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 250); brush.vertex(150, 230); brush.vertex(320, 260); brush.vertex(620, 240); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);
  // ground, warm brown
  brush.fill("#a3805c", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a lone pine, small
  brush.fill("#3a5a40", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(300, 470); brush.vertex(330, 470); brush.vertex(336, 350); brush.vertex(324, 350);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(296, 470); brush.vertex(326, 470); brush.vertex(332, 350); brush.vertex(320, 350);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(286, 470); brush.vertex(316, 470); brush.vertex(322, 350); brush.vertex(310, 350);
  brush.endShape(true);
  // mist: pale blue-grey, low, covering the base of the peaks
  brush.fill("#9aa6b8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(620, 400); brush.vertex(620, 520); brush.vertex(300, 530); brush.vertex(-20, 510);
  brush.endShape(true);
  // two peaks, one big and off-centre
  brush.fill("#708294", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(380, 330); brush.vertex(440, 220); brush.vertex(510, 230); brush.vertex(570, 330);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(380, 330); brush.vertex(330, 240); brush.vertex(300, 330);
  brush.endShape(true);
  brush.fill("#526276", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(470, 340); brush.vertex(520, 235); brush.vertex(570, 345);
  brush.endShape(true);
  brush.fill("#3a4a5c", 190);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(400, 345); brush.vertex(440, 250); brush.vertex(470, 350);
  brush.endShape(true);
  // a third smaller peak on the left
  brush.fill("#708294", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(150, 300); brush.vertex(200, 200); brush.vertex(250, 300);
  brush.endShape(true);
  // sun as a pale glow
  brush.fill("#f2e8d8", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(420, 120, 40, 0.3);
}
