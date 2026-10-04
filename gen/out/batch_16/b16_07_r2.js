async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#08101f");
  brush.noStroke();

  let ridge = [[-20,480],[50,430],[120,455],[190,390],[250,345],[320,405],[390,375],[460,425],[540,395],[620,440]];
  for (let k = 0; k < 2; k++) {
    brush.fill("#20407e", 215 - k * 25);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.2);
    brush.vertex(-20, -20);
    brush.vertex(620, -20);
    for (let i = ridge.length - 1; i >= 0; i--) brush.vertex(ridge[i][0], ridge[i][1]);
    brush.endShape(true);
  }

  // milky way as long feathered diagonal strips, offset and overlapping
  let strips = [[0, 110, 150], [18, 80, 140], [-20, 60, 150], [35, 40, 170], [-5, 30, 190]];
  for (let s of strips) {
    let o = s[0], w = s[1];
    brush.fill("#d8b858", s[2]);
    brush.fillBleed(0.4);
    brush.fillTexture(0.6, 0.6);
    brush.beginShape(0.9);
    brush.vertex(-20 + o, 420 + o);
    brush.vertex(150 + o, 250 + o - w * 0.2);
    brush.vertex(330 + o, 110 + o);
    brush.vertex(560 + o, -20 + o);
    brush.vertex(560 + o + w, -20 + o + w * 0.4);
    brush.vertex(350 + o + w * 0.6, 140 + o + w * 0.7);
    brush.vertex(170 + o + w * 0.5, 290 + o + w * 0.6);
    brush.vertex(-20 + o + w * 0.2, 440 + o + w);
    brush.endShape(true);
  }
  // dust lane
  brush.fill("#132650", 200);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(60, 380);
  brush.vertex(220, 240);
  brush.vertex(400, 110);
  brush.vertex(410, 125);
  brush.vertex(240, 265);
  brush.vertex(80, 400);
  brush.endShape(true);

  for (let i = 0; i < 160; i++) {
    let x = (i * 137.5) % 620;
    let y = (i * 61.7 + (i % 11) * 17) % 390;
    brush.fill("#fbeaa8", 215 + (i % 3) * 15);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, 0.8 + (i % 5) * 0.5, 0.3);
  }

  // large moon, upper right, clear of the band
  let mx = 470, my = 230;
  brush.fill("#08101f", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(mx, my, 100, 0.1);
  brush.fill("#f2d670", 250);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(mx, my, 88, 0.05);
  brush.fill("#f8e498", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.3);
  brush.circle(mx - 6, my - 6, 76, 0.05);
  brush.fill("#b8984a", 160);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.5);
  brush.circle(mx - 24, my - 18, 22, 0.6);
  brush.circle(mx + 22, my + 22, 16, 0.6);

  // moonlit ridge rims
  brush.fill("#6a6040", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(250, 347);
  brush.vertex(320, 407);
  brush.vertex(390, 377);
  brush.vertex(460, 427);
  brush.vertex(540, 397);
  brush.vertex(540, 415);
  brush.vertex(460, 447);
  brush.vertex(390, 397);
  brush.vertex(320, 430);
  brush.vertex(255, 372);
  brush.endShape(true);
}
