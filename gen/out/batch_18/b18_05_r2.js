async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff2c8");
  brush.noStroke();

  // sky painted around the sun (sun stays as paper at 340, 262)
  brush.fill("#7a1f6e", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 110); brush.vertex(0, 90);
  brush.endShape(true);
  brush.fill("#d4234a", 215);
  brush.beginShape(0.5);
  brush.vertex(0, 80); brush.vertex(600, 100); brush.vertex(600, 190); brush.vertex(0, 175);
  brush.endShape(true);
  // orange band, left and right of the sun
  brush.fill("#f06a1c", 220);
  brush.beginShape(0.6);
  brush.vertex(0, 165); brush.vertex(290, 175); brush.vertex(285, 230); brush.vertex(0, 240);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(390, 180); brush.vertex(600, 180); brush.vertex(600, 240); brush.vertex(395, 232);
  brush.endShape(true);
  brush.fill("#f5a018", 200);
  brush.beginShape(0.6);
  brush.vertex(0, 225); brush.vertex(290, 232); brush.vertex(600, 228); brush.vertex(600, 290); brush.vertex(0, 290);
  brush.endShape(true);

  // three rolling hills, overlapping, deep plum
  let hills = [
    ["#9a2a60", [[0, 250], [140, 196], [280, 262], [600, 290]]],
    ["#6a2060", [[240, 292], [440, 208], [600, 244]]],
    ["#3a1040", [[0, 290], [100, 262], [230, 300], [600, 300]]]
  ];
  for (let H of hills) {
    brush.fill(H[0], 235);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.9);
    for (let p of H[1]) brush.vertex(p[0], p[1]);
    brush.vertex(H[1][H[1].length - 1][0], 305); brush.vertex(H[1][0][0], 305);
    brush.endShape(true);
  }

  // water mirror, bands inverted
  let water = [["#f5a018", 305, 360], ["#f06a1c", 350, 430], ["#d4234a", 420, 510], ["#7a1f6e", 500, 600]];
  for (let s of water) {
    brush.fill(s[0], 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(0, s[1]); brush.vertex(600, s[1]); brush.vertex(600, s[2]); brush.vertex(0, s[2]);
    brush.endShape(true);
  }
  // hill reflections
  brush.fill("#3a1040", 210);
  brush.beginShape(0.9);
  brush.vertex(0, 305); brush.vertex(600, 305); brush.vertex(600, 318); brush.vertex(420, 360);
  brush.vertex(260, 322); brush.vertex(120, 376); brush.vertex(0, 342);
  brush.endShape(true);
  // sun glitter: bright yellow dashes
  for (let i = 0; i < 9; i++) {
    let y = 375 + i * 24;
    let w = 46 - i * 3;
    brush.fill("#ffd000", 240);
    brush.fillBleed(0.2);
    brush.beginShape(0.4);
    brush.vertex(340 - w, y); brush.vertex(340 + w, y + 2); brush.vertex(340 + w - 6, y + 15); brush.vertex(340 - w + 6, y + 13);
    brush.endShape(true);
  }
  // sun disc rim tint so the paper reads as a sun
  brush.fill("#ffc830", 170);
  brush.fillBleed(0.3);
  brush.circle(340, 258, 44, 0.2);
}
