async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fde2b8");
  randomSeed(33);
  brush.noStroke();

  // sky: violet top, crimson middle, orange low; sun area kept pale
  brush.fill("#4a2468", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 110);
  brush.vertex(0, 140);
  brush.endShape(true);
  brush.fill("#c42a4a", 210);
  brush.beginShape(0.6);
  brush.vertex(0, 100);
  brush.vertex(600, 80);
  brush.vertex(600, 220);
  brush.vertex(0, 250);
  brush.endShape(true);
  brush.fill("#f06a2a", 210);
  brush.beginShape(0.6);
  brush.vertex(0, 220);
  brush.vertex(330, 210);
  brush.vertex(360, 300);
  brush.vertex(0, 330);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(520, 200);
  brush.vertex(600, 195);
  brush.vertex(600, 330);
  brush.vertex(530, 330);
  brush.endShape(true);
  // sun glow, sun itself left as paper
  brush.fill("#ffb040", 170);
  brush.fillBleed(0.3);
  brush.circle(450, 270, 80, 0.4);
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#ffd84a", 230);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(450, 270, 36 - pass * 8, 0.1);
  }

  // back skyline in plum, two passes
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#5a1e40", 210);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0);
    let x = 0;
    brush.vertex(0, 440);
    while (x < 600) {
      let h = random(290, 360);
      let w = random(35, 60);
      brush.vertex(x, h);
      brush.vertex(x + w, h);
      x += w;
    }
    brush.vertex(600, 440);
    brush.endShape(true);
  }

  // front skyline, near-black, three passes
  let blocks = [
    [0, 55, 340], [50, 45, 290], [90, 55, 330], [150, 40, 230], [185, 60, 320],
    [240, 45, 360], [280, 70, 300], [345, 40, 380], [380, 50, 355],
    [470, 40, 390], [505, 55, 310], [555, 50, 350],
  ];
  for (let pass = 0; pass < 3; pass++) {
    brush.fill("#140a1a", 240);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0);
    brush.vertex(0, 480);
    for (let b of blocks) {
      brush.vertex(b[0], b[2]);
      brush.vertex(b[0] + b[1], b[2]);
    }
    brush.vertex(600, 480);
    brush.endShape(true);
  }
  // spire
  brush.fill("#140a1a", 240);
  brush.beginShape(0);
  brush.vertex(155, 235);
  brush.vertex(170, 150);
  brush.vertex(185, 235);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(155, 235);
  brush.vertex(170, 150);
  brush.vertex(185, 235);
  brush.endShape(true);

  // river
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#2a1430", 220);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.2);
    brush.vertex(0, 475);
    brush.vertex(600, 475);
    brush.vertex(600, 600);
    brush.vertex(0, 600);
    brush.endShape(true);
  }
  // sun reflection
  for (let i = 0; i < 7; i++) {
    let y = 490 + i * 16;
    let w = 50 - i * 4;
    brush.fill("#ffa030", 230);
    brush.fillBleed(0.15);
    brush.beginShape(0.4);
    brush.vertex(450 - w, y);
    brush.vertex(450 + w, y + 2);
    brush.vertex(450 + w - 8, y + 10);
    brush.vertex(450 - w + 8, y + 10);
    brush.endShape(true);
  }
  // lit windows
  for (let i = 0; i < 26; i++) {
    brush.fill("#ffc050", 240);
    brush.fillBleed(0.05);
    brush.circle(random(10, 590), random(380, 465), 2.2, 0.1);
  }
}
