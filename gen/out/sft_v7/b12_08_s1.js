async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f0");
  brush.noStroke();

  // bold sky: cobalt, then violet
  brush.fill("#2f5fd6", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#6a4aa0", 190);
  brush.beginShape(0.6);
  brush.vertex(-20, 180); brush.vertex(620, 160); brush.vertex(620, 320); brush.vertex(-20, 340);
  brush.endShape(true);

  // snow-capped mountains: one big peak off-centre, two smaller ones behind
  let peaks = [[180, 470, 340, 530], [340, 440, 450, 500], [500, 420, 600, 460]];
  for (let p of peaks) {
    let [x, y1, y2, y3] = p;
    brush.fill("#1a3a7a", 220);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(x, y1); brush.vertex(x + 15, y1 - 12); brush.vertex(x + 45, y1 - 12); brush.vertex(x + 40, y2);
    brush.vertex(x + 20, y3); brush.vertex(x, y3 + 12); brush.vertex(x - 20, y3);
    brush.endShape(true);
  }
  // snowy tops: pale paper left, dark rock below
  brush.fill("#1a3a7a", 220);
  brush.beginShape(0.3);
  brush.vertex(200, 470); brush.vertex(240, 452); brush.vertex(280, 468); brush.vertex(260, 488);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(360, 440); brush.vertex(380, 428); brush.vertex(405, 442); brush.vertex(395, 462);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(520, 420); brush.vertex(545, 410); brush.vertex(570, 426); brush.vertex(562, 444);
  brush.endShape(true);

  // foreground: dark pine forest
  let trees = [[70, 520], [120, 515], [170, 525], [220, 520], [260, 528], [300, 518], [340, 530], [390, 522], [430, 528], [480, 520], [530, 532], [580, 524]];
  for (let t of trees) {
    let [x, y] = t;
    brush.fill("#142a14", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(x - 12, y); brush.vertex(x - 6, y - 28); brush.vertex(x + 6, y - 28); brush.vertex(x + 12, y);
    brush.endShape(true);
  }
  brush.fill("#2a1a10", 200);
  brush.beginShape(0.5);
  brush.vertex(-20, 540); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
