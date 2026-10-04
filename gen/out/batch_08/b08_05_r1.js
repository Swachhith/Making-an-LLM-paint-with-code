async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f5f3");
  randomSeed(55);
  brush.noStroke();
  // sky painted around the chapel so its white walls stay paper
  brush.fill("#3f7cc4", 215);
  brush.fillBleed(0.28);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 470); brush.vertex(535, 470);
  brush.vertex(535, 290); brush.vertex(415, 245); brush.vertex(305, 190); brush.vertex(305, 80);
  brush.vertex(252, 18); brush.vertex(198, 80); brush.vertex(198, 198); brush.vertex(85, 258);
  brush.vertex(85, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  // blooms in the sky away from the building
  let spots = [[60, 60], [520, 80], [420, 150], [40, 190], [560, 230], [130, 120]];
  for (let s of spots) {
    brush.fill(random(["#1f4f9e", "#8a6ec4", "#e89aa0", "#5fb0d8"]), 180 + random(50));
    brush.fillBleed(0.3);
    brush.fillTexture(0.65, 0.5);
    brush.circle(s[0], s[1], 35 + random(40), 1);
  }
  // pale grey-blue shadow on right wall and tower side
  brush.fill("#9aa6c4", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.05);
  brush.vertex(410, 262); brush.vertex(525, 300); brush.vertex(525, 465); brush.vertex(410, 465);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(275, 85); brush.vertex(300, 85); brush.vertex(300, 195); brush.vertex(275, 208);
  brush.endShape(true);
  // blue roof edges and dome
  brush.fill("#1e4fa0", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.05);
  brush.vertex(85, 258); brush.vertex(200, 198); brush.vertex(200, 215); brush.vertex(95, 272);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(305, 190); brush.vertex(415, 245); brush.vertex(535, 290); brush.vertex(535, 305); brush.vertex(410, 262); brush.vertex(305, 208);
  brush.endShape(true);
  brush.fill("#1e4fa0", 235);
  brush.beginShape(0.8);
  brush.vertex(198, 82); brush.vertex(252, 18); brush.vertex(305, 82);
  brush.endShape(true);
  // bell opening, door, windows
  brush.fill("#2e2a40", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.6);
  brush.vertex(233, 150); brush.vertex(233, 112); brush.vertex(251, 96); brush.vertex(269, 112); brush.vertex(269, 150);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(218, 470); brush.vertex(218, 380); brush.vertex(250, 350); brush.vertex(282, 380); brush.vertex(282, 470);
  brush.endShape(true);
  brush.fill("#1e4fa0", 225);
  for (let wx of [140, 340]) {
    brush.beginShape(0.5);
    brush.vertex(wx, 405); brush.vertex(wx, 332); brush.vertex(wx + 20, 314); brush.vertex(wx + 40, 332); brush.vertex(wx + 40, 405);
    brush.endShape(true);
  }
  brush.beginShape(0.3);
  brush.vertex(448, 405); brush.vertex(448, 340); brush.vertex(480, 340); brush.vertex(480, 405);
  brush.endShape(true);
  // hill: green with ochre blooms
  brush.fill("#6fa03a", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 460); brush.vertex(200, 468); brush.vertex(420, 466); brush.vertex(620, 455);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 6; i++) {
    brush.fill(random(["#d8b43a", "#2f5a24", "#e8702a"]), 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.5);
    brush.circle(random(600), 520 + random(70), 25 + random(35), 1);
  }
  // drips from wall base shadow
  brush.fill("#4a5a8a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(80, 468); brush.vertex(540, 468); brush.vertex(570, 492); brush.vertex(90, 490);
  brush.endShape(true);
  for (let i = 0; i < 7; i++) {
    let x = 110 + i * 65 + random(-12, 12);
    brush.fill("#4a5a8a", 190);
    brush.fillBleed(0.15);
    brush.beginShape(0.6);
    brush.vertex(x - 7, 488); brush.vertex(x + 7, 488); brush.vertex(x + 5, 520 + random(50)); brush.vertex(x - 5, 520 + random(50));
    brush.endShape(true);
  }
}
