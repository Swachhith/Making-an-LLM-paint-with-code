async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ead8");
  randomSeed(2633);
  brush.noStroke();

  // pale overcast sky
  brush.fill("#bab6a0", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#a6a690", 150);
  brush.beginShape(0.8);
  brush.vertex(-20, 40); brush.vertex(200, 70); brush.vertex(420, 40); brush.vertex(620, 90);
  brush.vertex(620, 150); brush.vertex(300, 130); brush.vertex(-20, 150);
  brush.endShape(true);

  // soft blue-grey distant hedge
  brush.fill("#7c7e66", 180);
  brush.beginShape(0.7);
  brush.vertex(-20, 262); brush.vertex(90, 248); brush.vertex(200, 258); brush.vertex(330, 244);
  brush.vertex(460, 256); brush.vertex(620, 246); brush.vertex(620, 280); brush.vertex(-20, 284);
  brush.endShape(true);

  // field: one broad wash, then a diagonal of darker grass sweeping in
  brush.fill("#a89c62", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 275); brush.vertex(620, 270); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#827c46", 180);
  brush.beginShape(0.7);
  brush.vertex(-20, 420); brush.vertex(240, 390); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6a6434", 170);
  brush.beginShape(0.7);
  brush.vertex(-20, 530); brush.vertex(300, 520); brush.vertex(620, 560); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // pond: wider oval, grey sky light
  brush.fill("#9aa6a2", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(190, 318); brush.vertex(290, 300); brush.vertex(420, 306); brush.vertex(460, 326); brush.vertex(330, 344); brush.vertex(220, 338);
  brush.endShape(true);

  // willow: dome of drooping curtains
  let wx = 260, crownY = 170, base = 322;
  brush.fill("#8a9454", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(wx - 85, base); brush.vertex(wx - 80, crownY + 50); brush.vertex(wx - 40, crownY + 5);
  brush.vertex(wx + 20, crownY - 5); brush.vertex(wx + 70, crownY + 30); brush.vertex(wx + 88, base);
  brush.endShape(true);
  for (let k = 0; k < 9; k++) {
    let x = wx - 82 + k * 19;
    let t = crownY + 15 + abs(k - 4) * 9 + random(-5, 5);
    brush.fill(k % 3 == 0 ? "#56602e" : k % 3 == 1 ? "#6c7838" : "#7a8440", 195);
    brush.fillBleed(0.25);
    brush.beginShape(0.7);
    brush.vertex(x, t); brush.vertex(x + 18, t + 4);
    brush.vertex(x + 16 + random(-4, 4), base - random(0, 10)); brush.vertex(x + random(-3, 3), base + random(-4, 6));
    brush.endShape(true);
  }
  // trunk glimpsed in a gap
  brush.fill("#3e3222", 215);
  brush.beginShape(0.3);
  brush.vertex(250, 324); brush.vertex(268, 324); brush.vertex(266, 262); brush.vertex(254, 262);
  brush.endShape(true);
  // reflection in the pond
  brush.fill("#5a6238", 170);
  brush.beginShape(0.7);
  brush.vertex(185, 326); brush.vertex(345, 326); brush.vertex(320, 342); brush.vertex(210, 340);
  brush.endShape(true);
}
