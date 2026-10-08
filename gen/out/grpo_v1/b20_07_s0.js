async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3efe2");
  randomSeed(1101);
  brush.noStroke();

  // splashy ground washes, loose drips
  brush.fill("#e8d6c4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 620); brush.vertex(620, 620); brush.vertex(620, 470); brush.vertex(420, 300); brush.vertex(200, 500); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#b8a090", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(620, 620); brush.vertex(620, 350); brush.vertex(480, 250); brush.vertex(300, 350); brush.vertex(620, 620);
  brush.endShape(true);
  // drips
  for (let i = 0; i < 12; i++) {
    brush.fill("#c9a896", 170);
    brush.fillBleed(0.3);
    brush.beginShape(0.7);
    brush.vertex(random(20, 620), random(400, 620));
    brush.vertex(random(10, 720), random(500, 620));
    brush.vertex(random(-10, 720), 620);
    brush.endShape(true);
  }

  // stem, two passes
  brush.fill("#5a6a4a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 620); brush.vertex(310, 620); brush.vertex(325, 540); brush.vertex(335, 470); brush.vertex(345, 400); brush.vertex(360, 330); brush.vertex(380, 260); brush.vertex(405, 200); brush.vertex(435, 150); brush.vertex(470, 110); brush.vertex(510, 80); brush.vertex(550, 60); brush.vertex(590, 70); brush.vertex(590, 140); brush.vertex(560, 160); brush.vertex(520, 150); brush.vertex(480, 160); brush.vertex(440, 140); brush.vertex(400, 160); brush.vertex(360, 140); brush.vertex(320, 160); brush.vertex(280, 140); brush.vertex(240, 160); brush.vertex(200, 140); brush.vertex(160, 160); brush.vertex(120, 140); brush.vertex(80, 160); brush.vertex(40, 140); brush.vertex(0, 160); brush.vertex(0, 620);
  brush.endShape(true);
  brush.fill("#40503a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(302, 620); brush.vertex(312, 620); brush.vertex(326, 542); brush.vertex(336, 472); brush.vertex(346, 402); brush.vertex(362, 332); brush.vertex(382, 262); brush.vertex(406, 202); brush.vertex(436, 152); brush.vertex(472, 112); brush.vertex(512, 82); brush.vertex(552, 62); brush.vertex(592, 72); brush.vertex(592, 142); brush.vertex(562, 162); brush.vertex(522, 152); brush.vertex(482, 162); brush.vertex(442, 142); brush.vertex(402, 162); brush.vertex(362, 142); brush.vertex(322, 162); brush.vertex(282, 142); brush.vertex(242, 162); brush.vertex(202, 142); brush.vertex(162, 162); brush.vertex(122, 142); brush.vertex(82, 162); brush.vertex(42, 142); brush.vertex(2, 162); brush.vertex(2, 620);
  brush.endShape(true);

  // blooms, two passes each, arcing along the stem
  const blooms = [[50, 120, 150, 140], [100, 200, 150, 170], [160, 280, 150, 190], [230, 360, 150, 260], [300, 440, 150, 340], [370, 520, 150, 420], [440, 600, 150, 500]];
  for (let b of blooms) {
    let [x, y, r, o] = b;
    for (let pass = 0; pass < 2; pass++) {
      brush.fill(pass ? "#f8c4c4" : "#f0a0b8", pass ? 200 : 180);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.6);
      for (let i = 0; i < 12; i++) {
        let a = i * 30 + o + pass * 15;
        brush.vertex(x + cos(a) * r * 0.9, y + sin(a) * r * 0.9);
        brush.vertex(x + cos(a - 12) * r * 1.1, y + sin(a - 12) * r * 1.1);
      }
      brush.endShape(true);
    }
    // dark centre
    brush.fill("#8a2a3a", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, r * 0.35, 0.3);
  }
  // splashy petals around the crown
  for (let i = 0; i < 14; i++) {
    let a = random(0, 360);
    let r = random(80, 130);
    brush.fill(random() < 0.5 ? "#f6a0b8" : "#f0c8c0", random(180, 230));
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a) * r * 0.6, 300 + sin(a) * r * 0.6);
    brush.vertex(300 + cos(a - 30) * r * 1.05, 300 + sin(a - 30) * r * 1.05);
    brush.vertex(300 + cos(a) * r * 0.9, 300 + sin(a) * r * 0.9);
    brush.endShape(true);
  }
  // a few stray pink splashes
  brush.fill("#f4a8c0", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(150, 150, 28, 0.5);
  brush.circle(550, 250, 22, 0.5);
  brush.circle(300, 120, 20, 0.5);
}
