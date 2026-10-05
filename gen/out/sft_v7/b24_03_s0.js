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

  // dusky sky: warm peach near the top, cooling to slate
  brush.fill("#d6a88a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(-20, 230);
  brush.endShape(true);
  brush.fill("#8f96a6", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 230); brush.vertex(620, 210); brush.vertex(620, 420); brush.vertex(-20, 430);
  brush.endShape(true);

  // low horizon with a few warm lights
  brush.fill("#b88a6a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(-20, 430); brush.vertex(620, 415); brush.vertex(620, 460); brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#f2c48a", 200);
  brush.fillBleed(0.2);
  brush.circle(470, 460, 8, 0.3);
  brush.circle(540, 470, 6, 0.3);
  brush.circle(200, 450, 5, 0.3);

  // trunk: wide, gnarled, three passes
  let trunk = [[190, 470], [190, 620], [300, 470], [300, 620]];
  for (let pass = 0; pass < 3; pass++) {
    brush.fill(pass == 0 ? "#8a6a44" : "#5a4430", 225);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.2);
    for (let t of trunk) {
      brush.vertex(t[0], t[1] + 30);
      brush.vertex(t[0] + 6 + pass * 2, t[1]);
    }
    brush.vertex(300, 470 + 30);
    brush.vertex(300 - 6 - pass * 2, 470);
    brush.endShape(true);
  }
  // crown: wide, rounded, two passes
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(pass == 0 ? "#a98a64" : "#7a5a3a", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(180, 450);
    brush.vertex(270, 440); brush.vertex(360, 445); brush.vertex(450, 440);
    brush.vertex(540, 445); brush.vertex(620, 455);
    brush.vertex(620, 360); brush.vertex(560, 330); brush.vertex(490, 310); brush.vertex(420, 325);
    brush.vertex(340, 315); brush.vertex(260, 335); brush.vertex(190, 355);
    brush.vertex(120, 345); brush.vertex(60, 370); brush.vertex(0, 380);
    brush.vertex(0, 470); brush.vertex(120, 460);
    brush.endShape(true);
    brush.beginShape(0.8);
    brush.vertex(180, 450); brush.vertex(300, 430); brush.vertex(420, 445); brush.vertex(540, 430);
    brush.vertex(620, 380); brush.vertex(560, 360); brush.vertex(490, 345); brush.vertex(420, 355);
    brush.vertex(340, 345); brush.vertex(260, 360); brush.vertex(190, 380);
    brush.vertex(120, 370); brush.vertex(60, 390); brush.vertex(0, 400);
    brush.vertex(0, 470); brush.vertex(120, 460);
    brush.endShape(true);
  }
  // dark shadow on the lower crown
  brush.fill("#3a2a20", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(140, 400); brush.vertex(220, 390); brush.vertex(300, 398); brush.vertex(380, 402); brush.vertex(260, 415); brush.vertex(180, 405);
  brush.endShape(true);
  // two lower branches
  brush.fill("#5a4430", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(190, 485); brush.vertex(210, 495); brush.vertex(250, 510); brush.vertex(290, 520); brush.vertex(310, 510); brush.vertex(330, 498); brush.vertex(350, 490);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(300, 485); brush.vertex(280, 495); brush.vertex(240, 510); brush.vertex(200, 520); brush.vertex(180, 510); brush.vertex(160, 498); brush.vertex(140, 490);
  brush.endShape(true);
}
