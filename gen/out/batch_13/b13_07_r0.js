async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3e6d2");
  brush.noStroke();
  // dusty sky, pale ochre fading
  brush.fill("#d8c2a0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(-10, -10);
  brush.vertex(610, -10);
  brush.vertex(610, 220);
  brush.vertex(-10, 240);
  brush.endShape(true);
  // far dunes, lilac-grey
  brush.fill("#a8927e", 190);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(-10, 250);
  brush.vertex(90, 225);
  brush.vertex(200, 240);
  brush.vertex(330, 215);
  brush.vertex(470, 238);
  brush.vertex(610, 222);
  brush.vertex(610, 280);
  brush.vertex(-10, 280);
  brush.endShape(true);
  // middle dunes, warm sienna, lit side then shadow side
  brush.fill("#c98f5a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-10, 300);
  brush.vertex(140, 262);
  brush.vertex(300, 300);
  brush.vertex(450, 268);
  brush.vertex(610, 300);
  brush.vertex(610, 380);
  brush.vertex(-10, 380);
  brush.endShape(true);
  brush.fill("#8e5a38", 180);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(140, 262);
  brush.vertex(300, 300);
  brush.vertex(240, 330);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(450, 268);
  brush.vertex(610, 300);
  brush.vertex(560, 330);
  brush.endShape(true);
  // foreground dunes framing a winding dry wadi
  brush.fill("#d6a36c", 210);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-10, 380);
  brush.vertex(180, 350);
  brush.vertex(300, 390);
  brush.vertex(460, 360);
  brush.vertex(610, 380);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#9a6440", 190);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(-10, 420);
  brush.vertex(180, 350);
  brush.vertex(120, 470);
  brush.vertex(-10, 520);
  brush.endShape(true);
  // the winding path of darker packed sand leading back
  brush.fill("#7e5a42", 180);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(310, 300);
  brush.vertex(322, 300);
  brush.vertex(360, 360);
  brush.vertex(300, 440);
  brush.vertex(400, 610);
  brush.vertex(250, 610);
  brush.vertex(260, 450);
  brush.vertex(330, 362);
  brush.endShape(true);
}
