async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbe7c6");
  brush.noStroke();

  // sky bands, bold
  let sky = [["#7a1f6e", 0, 90], ["#d4234a", 70, 170], ["#f06a1c", 150, 240], ["#f7b21a", 220, 300]];
  for (let s of sky) {
    brush.fill(s[0], 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.5);
    brush.vertex(0, s[1]); brush.vertex(600, s[1] + 10); brush.vertex(600, s[2]); brush.vertex(0, s[2] - 10);
    brush.endShape(true);
  }
  // sun, low, half behind hills
  brush.fill("#ffd84a", 230);
  brush.fillBleed(0.2);
  brush.circle(340, 280, 46, 0.2);

  // rolling hills
  brush.fill("#6a2a5e", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(0, 270); brush.vertex(150, 240); brush.vertex(280, 285); brush.vertex(420, 255);
  brush.vertex(600, 275); brush.vertex(600, 305); brush.vertex(0, 305);
  brush.endShape(true);
  brush.fill("#3a1848", 240);
  brush.beginShape(0.8);
  brush.vertex(0, 290); brush.vertex(90, 275); brush.vertex(230, 300); brush.vertex(600, 292);
  brush.vertex(600, 305); brush.vertex(0, 305);
  brush.endShape(true);

  // water: mirrored bands, broken into horizontal strokes
  let water = [["#f7b21a", 305, 350], ["#f06a1c", 340, 420], ["#d4234a", 410, 500], ["#7a1f6e", 490, 600]];
  for (let s of water) {
    brush.fill(s[0], 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(0, s[1]); brush.vertex(600, s[1]); brush.vertex(600, s[2]); brush.vertex(0, s[2]);
    brush.endShape(true);
  }
  // hill reflection
  brush.fill("#4a1c50", 190);
  brush.beginShape(0.8);
  brush.vertex(0, 305); brush.vertex(600, 305); brush.vertex(600, 330); brush.vertex(420, 350);
  brush.vertex(280, 322); brush.vertex(150, 368); brush.vertex(0, 335);
  brush.endShape(true);
  // sun glitter column
  for (let i = 0; i < 9; i++) {
    let y = 360 + i * 24;
    let w = 50 - i * 3;
    brush.fill("#ffd84a", 220);
    brush.fillBleed(0.2);
    brush.beginShape(0.4);
    brush.vertex(340 - w, y); brush.vertex(340 + w, y + 2); brush.vertex(340 + w - 6, y + 16); brush.vertex(340 - w + 6, y + 14);
    brush.endShape(true);
  }
}
