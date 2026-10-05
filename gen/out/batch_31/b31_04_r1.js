async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece6f0");
  brush.noStroke();
  const sky = [["#c0bce8",-10,200,215],["#e0b8d8",110,170,200],["#a8c4e4",30,120,190],["#f0cfc8",250,170,190]];
  for (const s of sky) {
    brush.fill(s[0], s[3]); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(-10, s[1]); brush.vertex(300, s[1] - 12); brush.vertex(610, s[1] + 6);
    brush.vertex(610, s[1] + s[2]); brush.vertex(300, s[1] + s[2] + 10); brush.vertex(-10, s[1] + s[2]);
    brush.endShape(true);
  }
  brush.fill("#9a96c8", 215); brush.fillBleed(0.25);
  brush.beginShape(0.3); brush.vertex(-10, 450); brush.vertex(300, 440); brush.vertex(610, 448); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.fill("#7a7ab0", 190);
  brush.beginShape(0.3); brush.vertex(-10, 520); brush.vertex(300, 505); brush.vertex(610, 525); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  // glow on wet road
  brush.fill("#ffe6a0", 200); brush.fillBleed(0.3); brush.circle(380, 330, 90, 0.6);
  brush.fill("#ffd070", 215); brush.circle(380, 330, 40, 0.4);
  brush.fill("#fff4d0", 230); brush.circle(380, 330, 16, 0.3);
  brush.fill("#f4d490", 190);
  brush.beginShape(0.5); brush.vertex(362, 456); brush.vertex(398, 456); brush.vertex(430, 590); brush.vertex(330, 590); brush.endShape(true);
  // lamp
  brush.fill("#3c3a6a", 235); brush.fillBleed(0.1);
  brush.beginShape(0.1); brush.vertex(372, 452); brush.vertex(390, 452); brush.vertex(386, 355); brush.vertex(376, 355); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(358, 350); brush.vertex(402, 350); brush.vertex(392, 316); brush.vertex(368, 316); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(366, 316); brush.vertex(394, 316); brush.vertex(380, 300); brush.endShape(true);
  // rain
  brush.fill("#ffffff", 160);
  for (let i = 0; i < 70; i++) brush.circle((i * 83) % 600, (i * 47) % 440, 2.5, 0.3);
  brush.fill("#7a7ab0", 150);
  for (let i = 0; i < 12; i++) brush.circle(40 + i * 48, 470 + (i * 37) % 120, 5, 0.6);
}
