async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e9da");
  brush.noStroke();
  // big sky: grey-umber overcast with a warm break
  brush.fill("#a8a898", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 445); brush.vertex(-20, 445);
  brush.endShape(true);
  brush.fill("#7c7466", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 30); brush.vertex(150, 60); brush.vertex(300, 40); brush.vertex(470, 80); brush.vertex(620, 50);
  brush.vertex(620, -20); brush.vertex(-20, -20);
  brush.endShape(true);
  brush.fill("#6a6456", 170);
  brush.beginShape(0.8);
  brush.vertex(30, 200); brush.vertex(140, 150); brush.vertex(260, 170); brush.vertex(360, 140); brush.vertex(470, 190);
  brush.vertex(380, 235); brush.vertex(190, 240);
  brush.endShape(true);
  brush.fill("#d8b47a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(260, 320); brush.vertex(400, 290); brush.vertex(560, 305); brush.vertex(610, 345); brush.vertex(420, 360); brush.vertex(300, 352);
  brush.endShape(true);
  // distant hills
  brush.fill("#6e7058", 205);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 440); brush.vertex(90, 415); brush.vertex(210, 432); brush.vertex(340, 408); brush.vertex(470, 428); brush.vertex(620, 410);
  brush.vertex(620, 462); brush.vertex(-20, 462);
  brush.endShape(true);
  // river banks: fields painted on either side, leaving river as paper
  let L = [[322, 458], [296, 470], [300, 482], [380, 500], [390, 515], [260, 545], [150, 575], [160, 620]];
  let R = [[340, 458], [322, 470], [335, 480], [430, 500], [440, 518], [320, 548], [240, 580], [300, 620]];
  brush.fill("#8a7a44", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 455);
  for (let p of L) brush.vertex(p[0], p[1]);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(620, 455);
  for (let p of R) brush.vertex(p[0], p[1]);
  brush.vertex(620, 620);
  brush.endShape(true);
  // darker field bands
  brush.fill("#5a4e2c", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 560); brush.vertex(120, 545); brush.vertex(150, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(620, 520); brush.vertex(470, 530); brush.vertex(330, 600); brush.vertex(330, 620); brush.vertex(620, 620);
  brush.endShape(true);
  brush.fill("#9a8a50", 170);
  brush.beginShape(0.6);
  brush.vertex(440, 470); brush.vertex(600, 465); brush.vertex(600, 500); brush.vertex(460, 500);
  brush.endShape(true);
  // river: a pale sky reflection plus darker bank shadow
  brush.fill("#b8c0bc", 180);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  for (let p of L) brush.vertex(p[0] + 4, p[1]);
  for (let i = R.length - 1; i >= 0; i--) brush.vertex(R[i][0] - 4, R[i][1]);
  brush.endShape(true);
  // trees on banks
  let trees = [[70, 452, 16], [480, 450, 13], [560, 470, 22], [250, 535, 18], [430, 525, 20], [115, 590, 28]];
  for (let t of trees) {
    brush.fill("#48482a", 215);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.4);
    brush.circle(t[0], t[1], t[2], 0.8);
    brush.fill("#2a2a18", 205);
    brush.circle(t[0] + 4, t[1] + 4, t[2] * 0.6, 0.7);
  }
}
