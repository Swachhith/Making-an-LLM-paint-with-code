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

  // sky: dark blue wash lifted above the mountains, mountains stay as dark paper
  let ridge = [[-20,470],[60,420],[120,445],[200,380],[270,330],[340,400],[400,370],[470,420],[540,390],[620,430]];
  for (let k = 0; k < 2; k++) {
    brush.fill("#1f3a72", 210 - k * 20);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.2);
    brush.vertex(-20, -20);
    brush.vertex(620, -20);
    for (let i = ridge.length - 1; i >= 0; i--) brush.vertex(ridge[i][0], ridge[i][1]);
    brush.endShape(true);
  }

  // milky way: cloud of overlapping warm blooms along a diagonal
  for (let i = 0; i < 16; i++) {
    let t = i / 15;
    let x = 620 - t * 560 + sin(i * 70) * 30;
    let y = -10 + t * 400 + cos(i * 50) * 25;
    brush.fill("#e0c060", 110 + (i % 3) * 25);
    brush.fillBleed(0.4);
    brush.fillTexture(0.6, 0.6);
    brush.circle(x, y, 45 + (i % 4) * 12, 0.8);
  }
  // dark rifts
  for (let i = 0; i < 5; i++) {
    brush.fill("#152a58", 170);
    brush.fillBleed(0.35);
    brush.fillTexture(0.5, 0.5);
    brush.circle(470 - i * 80, 110 + i * 60, 16 + (i % 2) * 8, 0.8);
  }
  // dense stars along the band and scattered
  for (let i = 0; i < 140; i++) {
    let x = (i * 137.5) % 620;
    let y = (i * 61.7 + (i % 11) * 17) % 380;
    brush.fill("#fbeaa8", 210 + (i % 3) * 15);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, 0.8 + (i % 5) * 0.5, 0.3);
  }

  // large moon, off-centre right and low
  let mx = 440, my = 250;
  brush.fill("#f0d470", 245);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(mx, my, 95, 0.1);
  brush.fill("#f6e090", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.3);
  brush.circle(mx - 5, my - 5, 82, 0.1);
  brush.fill("#b89c4c", 160);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.5);
  brush.circle(mx - 25, my - 20, 24, 0.6);
  brush.circle(mx + 25, my + 20, 18, 0.6);
  brush.circle(mx + 10, my - 35, 12, 0.6);

  // moonlight catching the ridge edges: thin warm bands just below the skyline
  brush.fill("#6a6040", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(270, 332);
  brush.vertex(340, 402);
  brush.vertex(400, 372);
  brush.vertex(470, 422);
  brush.vertex(470, 440);
  brush.vertex(400, 392);
  brush.vertex(340, 425);
  brush.vertex(275, 360);
  brush.endShape(true);
}
