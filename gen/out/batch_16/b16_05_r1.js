async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#edf0f3");
  brush.noStroke();

  // haze over the whole sheet
  brush.fill("#c6d2de", 170);
  brush.fillBleed(0.35);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  let W = 300;
  let ridges = [
    ["#9fb2c6", 190, [[-20,150],[70,120],[160,140],[250,95],[340,130],[440,105],[540,140],[620,125]]],
    ["#8198b3", 200, [[-20,195],[90,170],[200,200],[290,160],[400,195],[500,165],[620,190]]],
    ["#647f9e", 210, [[-20,235],[60,215],[170,245],[280,225],[380,250],[470,220],[620,245]]],
    ["#4d6a8c", 215, [[-20,275],[130,260],[260,282],[360,265],[470,285],[620,270]]],
  ];
  for (let r of ridges) {
    // ridge, two passes: whole shape, then a softer top band
    brush.fill(r[0], r[1]);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.5);
    for (let p of r[2]) brush.vertex(p[0], p[1]);
    brush.vertex(620, W);
    brush.vertex(-20, W);
    brush.endShape(true);
    brush.fill(r[0], 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    for (let p of r[2]) brush.vertex(p[0], p[1] + 2);
    for (let i = r[2].length - 1; i >= 0; i--) brush.vertex(r[2][i][0], r[2][i][1] + 28);
    brush.endShape(true);
    // reflection: mirrored about W, blurrier and lighter
    brush.fill(r[0], r[1] - 35);
    brush.fillBleed(0.4);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0.8);
    brush.vertex(-20, W);
    brush.vertex(620, W);
    for (let i = r[2].length - 1; i >= 0; i--) brush.vertex(r[2][i][0], 2 * W - r[2][i][1] + 8);
    brush.endShape(true);
  }
  // shoreline mist: thin pale gap left by painting water just below
  brush.fill("#aab9c9", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 470);
  brush.vertex(620, 460);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // few horizontal ripples breaking the reflection
  for (let i = 0; i < 4; i++) {
    let y = 320 + i * 42;
    brush.fill("#dfe6ee", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.4);
    brush.vertex(100 + i * 60, y);
    brush.vertex(320 + i * 50, y - 2);
    brush.vertex(318 + i * 50, y + 15);
    brush.vertex(102 + i * 60, y + 16);
    brush.endShape(true);
  }
}
