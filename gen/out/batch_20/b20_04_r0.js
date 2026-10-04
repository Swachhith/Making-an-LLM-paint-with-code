async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1d2a4a");
  brush.noStroke();

  // stars
  brush.fill("#f5d77a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  const st = [[60,40],[140,90],[220,30],[330,70],[420,40],[520,90],[560,30],[90,160],[480,170],[270,140],[380,120]];
  for (const s of st) brush.circle(s[0], s[1], 3, 0.3);

  // tall narrow composition: central column with pines
  // snow ground left as paper: paint pale-lit slope using yellow tint over light band? paper is dark, so snow = pale shapes
  brush.fill("#e9e4d0", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 430); brush.vertex(150, 400); brush.vertex(330, 420); brush.vertex(620, 390); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#f4efdc", 230);
  brush.beginShape(0.5);
  brush.vertex(-20, 480); brush.vertex(300, 460); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // tall pines framing a vertical column
  function pine(x, base, h, w, op) {
    brush.fill("#0e1630", op);
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.15);
    brush.vertex(x, base - h);
    brush.vertex(x + w * 0.35, base - h * 0.6);
    brush.vertex(x + w * 0.2, base - h * 0.6);
    brush.vertex(x + w * 0.5, base - h * 0.25);
    brush.vertex(x + w * 0.3, base - h * 0.25);
    brush.vertex(x + w * 0.6, base);
    brush.vertex(x - w * 0.6, base);
    brush.vertex(x - w * 0.3, base - h * 0.25);
    brush.vertex(x - w * 0.5, base - h * 0.25);
    brush.vertex(x - w * 0.2, base - h * 0.6);
    brush.vertex(x - w * 0.35, base - h * 0.6);
    brush.endShape(true);
  }
  pine(70, 470, 380, 150, 235);
  pine(530, 460, 400, 150, 235);
  pine(150, 430, 220, 90, 200);
  pine(460, 420, 240, 90, 200);

  // cabin in the center
  brush.fill("#2a2230", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(240, 350); brush.vertex(360, 350); brush.vertex(360, 430); brush.vertex(240, 430);
  brush.endShape(true);
  // snowy roof (pale)
  brush.fill("#eee8d6", 235);
  brush.beginShape(0.1);
  brush.vertex(222, 355); brush.vertex(300, 290); brush.vertex(378, 355); brush.vertex(360, 362); brush.vertex(240, 362);
  brush.endShape(true);
  // glowing windows
  brush.fill("#f7c843", 245);
  brush.fillBleed(0.3);
  brush.beginShape(0.1);
  brush.vertex(256, 375); brush.vertex(286, 375); brush.vertex(286, 405); brush.vertex(256, 405);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(314, 375); brush.vertex(344, 375); brush.vertex(344, 405); brush.vertex(314, 405);
  brush.endShape(true);
  // glow on snow
  brush.fill("#f7c843", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(240, 440); brush.vertex(360, 440); brush.vertex(400, 500); brush.vertex(200, 500);
  brush.endShape(true);
  // chimney
  brush.fill("#2a2230", 230);
  brush.beginShape(0.1);
  brush.vertex(330, 300); brush.vertex(348, 300); brush.vertex(348, 335); brush.vertex(330, 320);
  brush.endShape(true);

  // path of blue shadow
  brush.fill("#3d5488", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(285, 440); brush.vertex(315, 440); brush.vertex(380, 620); brush.vertex(230, 620);
  brush.endShape(true);
}
