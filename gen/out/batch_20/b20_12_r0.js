async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2efe8");
  brush.noStroke();

  // two colours: teal and rust, neutral: grey
  brush.fill("#8fb5b0", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 250); brush.vertex(620, 230); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#5f9892", 150);
  brush.beginShape(0.7);
  brush.vertex(-20, 420); brush.vertex(620, 400); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#a8a39a", 130);
  brush.beginShape(0.6);
  brush.vertex(-20, 225); brush.vertex(200, 215); brush.vertex(400, 228); brush.vertex(620, 220); brush.vertex(620, 245); brush.vertex(-20, 252);
  brush.endShape(true);

  // small boat, lower right
  brush.fill("#b5502a", 225);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.45);
  brush.beginShape(0.3);
  brush.vertex(390, 470); brush.vertex(540, 465); brush.vertex(520, 500); brush.vertex(410, 502);
  brush.endShape(true);
  brush.fill("#8a3a1e", 200);
  brush.beginShape(0.3);
  brush.vertex(405, 488); brush.vertex(528, 485); brush.vertex(518, 502); brush.vertex(412, 503);
  brush.endShape(true);
  // fisherman seated
  brush.fill("#5a5650", 225);
  brush.circle(470, 418, 11, 0.3);
  brush.beginShape(0.4);
  brush.vertex(456, 430); brush.vertex(484, 430); brush.vertex(490, 470); brush.vertex(450, 470);
  brush.endShape(true);
  brush.fill("#b5502a", 220);
  brush.beginShape(0.2);
  brush.vertex(455, 413); brush.vertex(485, 413); brush.vertex(478, 402); brush.vertex(462, 402);
  brush.endShape(true);
  // rod — wide soft shape angling up-left
  brush.fill("#5a5650", 200);
  brush.beginShape(0.2);
  brush.vertex(470, 440); brush.vertex(330, 330); brush.vertex(322, 342); brush.vertex(462, 452);
  brush.endShape(true);
  // reflection
  brush.fill("#8a3a1e", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(410, 505); brush.vertex(520, 503); brush.vertex(500, 545); brush.vertex(430, 545);
  brush.endShape(true);
  brush.fill("#3f7a74", 150);
  brush.beginShape(0.6);
  brush.vertex(250, 540); brush.vertex(340, 535); brush.vertex(345, 548); brush.vertex(255, 552);
  brush.endShape(true);
}
