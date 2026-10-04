async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f5f3");
  randomSeed(505);
  brush.noStroke();
  // sky in simple pieces that stop at the chapel edges, so its walls stay paper
  let pieces = [
    [[-20, -20], [195, -20], [195, 195], [80, 258], [80, 480], [-20, 480]],
    [[308, -20], [620, -20], [620, 480], [540, 480], [540, 288], [418, 242], [308, 188]],
    [[195, -20], [308, -20], [308, 80], [252, 16], [195, 80]]
  ];
  for (let pc of pieces) {
    brush.fill("#2f6cc0", 220);
    brush.fillBleed(0.25);
    brush.fillTexture(0.55, 0.5);
    brush.beginShape(0.1);
    for (let p of pc) brush.vertex(p[0], p[1]);
    brush.endShape(true);
  }
  let spots = [[50, 60], [540, 70], [470, 170], [30, 200], [580, 250], [120, 130], [380, 60]];
  for (let s of spots) {
    brush.fill(random(["#163f8e", "#7a5ec0", "#e88a9a", "#4fa4d8"]), 190 + random(40));
    brush.fillBleed(0.3);
    brush.fillTexture(0.65, 0.5);
    brush.circle(s[0], s[1], 30 + random(35), 1);
  }
  // drips running down from the sky wash beside the walls
  for (let x of [30, 55, 565, 590]) {
    brush.fill("#2f6cc0", 200);
    brush.fillBleed(0.15);
    brush.beginShape(0.6);
    brush.vertex(x - 7, 440); brush.vertex(x + 7, 440); brush.vertex(x + 5, 500 + random(40)); brush.vertex(x - 5, 500 + random(40));
    brush.endShape(true);
  }
  // cool shadow planes
  brush.fill("#8e9ac0", 205);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.05);
  brush.vertex(412, 262); brush.vertex(530, 302); brush.vertex(530, 468); brush.vertex(412, 468);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(276, 85); brush.vertex(302, 85); brush.vertex(302, 195); brush.vertex(276, 208);
  brush.endShape(true);
  brush.fill("#b4bcd4", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(95, 272); brush.vertex(200, 215); brush.vertex(200, 245); brush.vertex(95, 300);
  brush.endShape(true);
  // blue roof edges and dome
  brush.fill("#1a48a0", 235);
  brush.fillBleed(0.2);
  brush.beginShape(0.05);
  brush.vertex(80, 258); brush.vertex(200, 196); brush.vertex(200, 214); brush.vertex(92, 274);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(305, 188); brush.vertex(418, 242); brush.vertex(540, 288); brush.vertex(540, 306); brush.vertex(412, 260); brush.vertex(305, 208);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(196, 84); brush.vertex(252, 14); brush.vertex(308, 84);
  brush.endShape(true);
  brush.fill("#e8b02a", 230);
  brush.fillBleed(0.1);
  brush.circle(252, 14, 6, 0.3);
  // openings
  brush.fill("#2e2a40", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.6);
  brush.vertex(233, 150); brush.vertex(233, 112); brush.vertex(251, 96); brush.vertex(269, 112); brush.vertex(269, 150);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(216, 470); brush.vertex(216, 380); brush.vertex(250, 348); brush.vertex(284, 380); brush.vertex(284, 470);
  brush.endShape(true);
  brush.fill("#1a48a0", 230);
  for (let wx of [135, 340]) {
    brush.beginShape(0.5);
    brush.vertex(wx, 405); brush.vertex(wx, 332); brush.vertex(wx + 20, 314); brush.vertex(wx + 40, 332); brush.vertex(wx + 40, 405);
    brush.endShape(true);
  }
  brush.beginShape(0.3);
  brush.vertex(450, 405); brush.vertex(450, 340); brush.vertex(482, 340); brush.vertex(482, 405);
  brush.endShape(true);
  // hill
  brush.fill("#5f9a32", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 468); brush.vertex(200, 472); brush.vertex(420, 470); brush.vertex(620, 462);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 7; i++) {
    brush.fill(random(["#d8b43a", "#2a5220", "#e8702a", "#8a4fb8"]), 195);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.5);
    brush.circle(random(600), 525 + random(70), 22 + random(35), 1);
  }
  brush.fill("#3a4a7a", 205);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(78, 466); brush.vertex(542, 466); brush.vertex(575, 492); brush.vertex(88, 490);
  brush.endShape(true);
  for (let i = 0; i < 7; i++) {
    let x = 110 + i * 65 + random(-12, 12);
    brush.fill("#3a4a7a", 195);
    brush.fillBleed(0.15);
    brush.beginShape(0.6);
    brush.vertex(x - 7, 488); brush.vertex(x + 7, 488); brush.vertex(x + 5, 525 + random(50)); brush.vertex(x - 5, 525 + random(50));
    brush.endShape(true);
  }
}
