async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf5e6");
  randomSeed(1003);
  brush.noStroke();

  // bold sky, two bands: teal then azure
  brush.fill("#2f8fa8", 235);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#5aa0d8", 230);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 130); brush.vertex(-20, 150);
  brush.endShape(true);

  // sea, foamy crest at the hill's foot
  brush.fill("#1e8fb8", 235);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 320); brush.vertex(100, 310); brush.vertex(220, 320); brush.vertex(340, 312);
  brush.vertex(460, 322); brush.vertex(620, 314); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#f2f2f2", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 330); brush.vertex(140, 322); brush.vertex(280, 332); brush.vertex(420, 324); brush.vertex(620, 334);
  brush.vertex(620, 344); brush.vertex(-20, 344);
  brush.endShape(true);

  // hill, rising left to right
  brush.fill("#6a3a2a", 235);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 350); brush.vertex(150, 330); brush.vertex(300, 320); brush.vertex(460, 335); brush.vertex(620, 320);
  brush.vertex(620, 355); brush.vertex(-20, 360);
  brush.endShape(true);
  brush.fill("#3a1a10", 220);
  brush.beginShape(0.5);
  brush.vertex(-20, 355); brush.vertex(200, 340); brush.vertex(420, 350); brush.vertex(620, 342);
  brush.vertex(620, 360); brush.vertex(-20, 360);
  brush.endShape(true);

  // houses, low and bold
  let houses = [
    [220, 322, 70, 12, 14], [295, 324, 70, 14, 15], [370, 326, 60, 13, 14],
    [445, 324, 75, 15, 16], [510, 326, 65, 14, 15]
  ];
  for (let h of houses) {
    let [x, y, w, h, t] = h;
    brush.fill("#e03a1a", 240);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.2);
    brush.vertex(x, y + h); brush.vertex(x + w, y + h); brush.vertex(x + w, y); brush.vertex(x, y);
    brush.endShape(true);
    brush.fill("#f2c44a", 230);
    brush.beginShape(0.2);
    brush.vertex(x + 4, y); brush.vertex(x + w - 4, y); brush.vertex(x + w - 6, y + h - 8); brush.vertex(x + 6, y + h - 8);
    brush.endShape(true);
    brush.fill("#3a2a1a", 220);
    brush.beginShape(0.2);
    brush.vertex(x + 12, y + 12); brush.vertex(x + w - 12, y + 12); brush.vertex(x + w - 12, y + h - 12); brush.vertex(x + 12, y + h - 12);
    brush.endShape(true);
  }
  // a church steeple
  brush.fill("#3a2a1a", 235);
  brush.beginShape(0);
  brush.vertex(420, 326); brush.vertex(435, 326); brush.vertex(435, 250); brush.vertex(420, 250);
  brush.endShape(true);
  brush.fill("#e03a1a", 235);
  brush.beginShape(0.3);
  brush.vertex(410, 326); brush.vertex(445, 326); brush.vertex(445, 290); brush.vertex(410, 290);
  brush.endShape(true);

  // foreground: dunes and a figure
  brush.fill("#3a8a5a", 225);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#2a4a2a", 200);
  brush.beginShape(0.5);
  brush.vertex(-20, 520); brush.vertex(200, 510); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // figure on a dune
  brush.fill("#e03a1a", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(320, 520, 11, 0.3);
  brush.circle(314, 510, 7, 0.3);
  brush.circle(322, 518, 7, 0.3);
}
