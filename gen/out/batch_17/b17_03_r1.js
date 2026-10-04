async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e8d8");
  randomSeed(31);
  brush.noStroke();
  // sky, warm grey
  brush.fill("#bdb19c", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 215);
  brush.vertex(-20, 215);
  brush.endShape(true);
  // sea, whole right and middle
  brush.fill("#6d8580", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, 210);
  brush.vertex(620, 210);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#4b625f", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(300, 300);
  brush.vertex(620, 260);
  brush.vertex(620, 620);
  brush.vertex(420, 620);
  brush.endShape(true);
  // far headland at the vanishing point
  brush.fill("#7f7a66", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(170, 215);
  brush.vertex(230, 196);
  brush.vertex(300, 204);
  brush.vertex(330, 216);
  brush.endShape(true);
  // the shore: a sandy strip sweeping from bottom-left toward the headland
  brush.fill("#cdb48c", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 330);
  brush.vertex(160, 240);
  brush.vertex(240, 218);
  brush.vertex(262, 222);
  brush.vertex(230, 270);
  brush.vertex(200, 380);
  brush.vertex(260, 520);
  brush.vertex(340, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // cliffs behind the shore on the left
  brush.fill("#7c5f42", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.25);
  brush.vertex(-20, 120);
  brush.vertex(60, 140);
  brush.vertex(140, 190);
  brush.vertex(230, 215);
  brush.vertex(150, 250);
  brush.vertex(60, 300);
  brush.vertex(-20, 360);
  brush.endShape(true);
  brush.fill("#4f3c2b", 210);
  brush.beginShape(0.25);
  brush.vertex(-20, 200);
  brush.vertex(70, 220);
  brush.vertex(130, 235);
  brush.vertex(40, 300);
  brush.vertex(-20, 350);
  brush.endShape(true);
  // wet sand darkening near the waterline
  brush.fill("#8f7a5a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(250, 225);
  brush.vertex(215, 300);
  brush.vertex(200, 390);
  brush.vertex(265, 520);
  brush.vertex(345, 620);
  brush.vertex(300, 620);
  brush.vertex(215, 470);
  brush.vertex(185, 380);
  brush.vertex(205, 290);
  brush.endShape(true);
  // rocks along the shore, shrinking into distance
  let rocks = [[330, 560, 55], [260, 450, 36], [290, 380, 26], [235, 320, 18], [255, 270, 12], [245, 240, 8], [420, 500, 30], [370, 330, 14]];
  for (let r of rocks) {
    brush.fill("#6b5842", 225);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.circle(r[0], r[1], r[2], 0.5);
    brush.fill("#352a20", 215);
    brush.circle(r[0] + r[2] * 0.2, r[1] + r[2] * 0.3, r[2] * 0.6, 0.45);
  }
  // wave troughs curving with the shore, foam left as paper
  for (let i = 0; i < 7; i++) {
    let t = i / 6;
    let y = 240 + t * t * 360;
    let x0 = 250 + t * 120;
    let th = 6 + t * 16;
    brush.fill("#324a48", 160);
    brush.fillBleed(0.2);
    brush.beginShape(0.8);
    brush.vertex(x0, y);
    brush.vertex(x0 + 120 + t * 60, y - 8);
    brush.vertex(620, y + 4);
    brush.vertex(620, y + th + 6);
    brush.vertex(x0 + 120 + t * 60, y + th);
    brush.vertex(x0 + 10, y + th);
    brush.endShape(true);
  }
}
