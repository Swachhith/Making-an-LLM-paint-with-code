async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f6f8");
  brush.noStroke();

  // sky and sea, behind everything on the right
  brush.fill("#b4d0e2", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 70); brush.vertex(-20, 80);
  brush.endShape(true);
  brush.fill("#4f90b8", 205);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.1);
  brush.vertex(380, 74); brush.vertex(620, 70); brush.vertex(620, 150); brush.vertex(380, 160);
  brush.endShape(true);
  brush.fill("#2f6f9a", 170);
  brush.beginShape(0.3);
  brush.vertex(380, 120); brush.vertex(620, 112); brush.vertex(620, 150); brush.vertex(380, 160);
  brush.endShape(true);

  // hillside village stepping down to the sea, right of the big house
  brush.fill("#a8b89a", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.4);
  brush.vertex(420, 150); brush.vertex(620, 140); brush.vertex(620, 620); brush.vertex(420, 620);
  brush.endShape(true);
  let small = [[450, 190, 60, "#c46a4e"], [530, 170, 70, "#4d7ea0"], [470, 280, 70, "#4d7ea0"], [560, 260, 60, "#c46a4e"], [500, 380, 80, "#c46a4e"]];
  for (let h of small) {
    let [x, y, w, roof] = h;
    brush.fill("#b8c6d0", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0);
    brush.vertex(x + w * 0.62, y); brush.vertex(x + w, y); brush.vertex(x + w, y + w * 0.7); brush.vertex(x + w * 0.62, y + w * 0.7);
    brush.endShape(true);
    brush.fill(roof, 215);
    brush.beginShape(0);
    brush.vertex(x - 4, y); brush.vertex(x + w * 0.5, y - w * 0.35); brush.vertex(x + w + 4, y);
    brush.endShape(true);
    brush.fill("#3e5a70", 210);
    brush.beginShape(0);
    brush.vertex(x + w * 0.2, y + w * 0.25); brush.vertex(x + w * 0.4, y + w * 0.25); brush.vertex(x + w * 0.4, y + w * 0.5); brush.vertex(x + w * 0.2, y + w * 0.5);
    brush.endShape(true);
  }

  // the big whitewashed house: gable front left as paper
  // shaded side wall, receding to the right
  brush.fill("#98aec0", 205);
  brush.fillBleed(0.2);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0);
  brush.vertex(400, 250); brush.vertex(470, 232); brush.vertex(470, 620); brush.vertex(400, 620);
  brush.endShape(true);
  brush.fill("#7f96aa", 170);
  brush.beginShape(0.2);
  brush.vertex(400, 250); brush.vertex(420, 246); brush.vertex(420, 620); brush.vertex(400, 620);
  brush.endShape(true);
  // roof: gable edges and the slate side plane
  brush.fill("#3f6686", 230);
  brush.fillBleed(0.18);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0);
  brush.vertex(10, 262); brush.vertex(220, 92); brush.vertex(410, 262); brush.vertex(388, 262); brush.vertex(220, 120); brush.vertex(32, 262);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(220, 92); brush.vertex(300, 70); brush.vertex(480, 236); brush.vertex(410, 262);
  brush.endShape(true);
  // soft eave shadow on the white
  brush.fill("#b3c4d2", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(34, 262); brush.vertex(220, 122); brush.vertex(388, 262); brush.vertex(360, 262); brush.vertex(220, 150); brush.vertex(66, 262);
  brush.endShape(true);
  // wall shading at the base and corner, to model the white wall
  brush.fill("#c3d0da", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(10, 540); brush.vertex(400, 520); brush.vertex(400, 620); brush.vertex(10, 620);
  brush.endShape(true);

  // round attic window, shuttered windows, blue door
  brush.fill("#2e5f86", 225);
  brush.fillBleed(0.15);
  brush.circle(220, 196, 20, 0.2);
  let wins = [[90, 300], [290, 300]];
  for (let w of wins) {
    brush.fill("#1f7aa6", 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0);
    brush.vertex(w[0] - 26, w[1]); brush.vertex(w[0], w[1]); brush.vertex(w[0], w[1] + 90); brush.vertex(w[0] - 26, w[1] + 90);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(w[0] + 56, w[1]); brush.vertex(w[0] + 82, w[1]); brush.vertex(w[0] + 82, w[1] + 90); brush.vertex(w[0] + 56, w[1] + 90);
    brush.endShape(true);
    brush.fill("#34414e", 210);
    brush.beginShape(0);
    brush.vertex(w[0] + 4, w[1] + 4); brush.vertex(w[0] + 52, w[1] + 4); brush.vertex(w[0] + 52, w[1] + 86); brush.vertex(w[0] + 4, w[1] + 86);
    brush.endShape(true);
  }
  brush.fill("#1f6a98", 235);
  brush.beginShape(0.2);
  brush.vertex(170, 450); brush.vertex(170, 440); brush.vertex(200, 420); brush.vertex(240, 420); brush.vertex(270, 440); brush.vertex(270, 620); brush.vertex(170, 620);
  brush.endShape(true);
  // potted geraniums on the step
  brush.fill("#c06a4e", 220);
  brush.circle(320, 594, 20, 0.3);
  brush.circle(110, 596, 18, 0.3);
  brush.fill("#e0384a", 230);
  brush.circle(312, 566, 12, 0.6); brush.circle(330, 570, 10, 0.6);
  brush.circle(104, 570, 10, 0.6); brush.circle(118, 574, 9, 0.6);
  brush.fill("#4f8a60", 210);
  brush.circle(322, 580, 10, 0.6);
  brush.circle(112, 584, 9, 0.6);
}
