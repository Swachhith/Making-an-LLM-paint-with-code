async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f5ef");
  randomSeed(9125);
  brush.noStroke();

  // wet-in-wet blooms: big soft rings of green and crimson thrown behind
  let throwCol = ["#e03a58", "#9fd06a", "#f28c6a", "#c21e3c"];
  for (let i = 0; i < 9; i++) {
    brush.fill(random(throwCol), random(120, 165));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(random(40, 560), random(40, 560), random(25, 80), 1);
  }
  // spatter
  for (let i = 0; i < 40; i++) {
    brush.fill(random(["#b3102c", "#2f7a34"]), 220);
    brush.fillBleed(0.2);
    brush.circle(random(20, 580), random(20, 580), random(2, 6), 0.4);
  }

  // stem, slanting, with drips hanging off the bloom beside it
  brush.fill("#2f7a34", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(268, 300); brush.vertex(292, 300); brush.vertex(330, 450);
  brush.vertex(360, 590); brush.vertex(336, 592); brush.vertex(306, 452);
  brush.endShape(true);
  // leaves
  brush.fill("#3e9a3e", 205);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(312, 440); brush.vertex(420, 380); brush.vertex(500, 400); brush.vertex(405, 460);
  brush.endShape(true);
  brush.fill("#1f5e27", 215);
  brush.fillBleed(0.22);
  brush.beginShape(1);
  brush.vertex(320, 440); brush.vertex(420, 395); brush.vertex(480, 402);
  brush.endShape(true);
  brush.fill("#5aaa48", 200);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(322, 510); brush.vertex(220, 470); brush.vertex(150, 500); brush.vertex(250, 540);
  brush.endShape(true);

  // rose: loose puddle, then swirling petals, deep crimson core
  let cx = 270, cy = 210;
  brush.fill("#d11a36", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.55);
  brush.circle(cx, cy, 115, 0.9);
  for (let i = 0; i < 7; i++) {
    let a = i * 51;
    brush.fill(random(["#a50e2a", "#b8122e"]), 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(cx + cos(a) * 25, cy + sin(a) * 25);
    brush.vertex(cx + cos(a + 25) * 100, cy + sin(a + 25) * 95);
    brush.vertex(cx + cos(a + 55) * 85, cy + sin(a + 55) * 80);
    brush.vertex(cx + cos(a + 60) * 30, cy + sin(a + 60) * 30);
    brush.endShape(true);
  }
  for (let i = 0; i < 4; i++) {
    let a = i * 90 + 30;
    brush.fill("#6a0418", 220);
    brush.fillBleed(0.25);
    brush.beginShape(1);
    brush.vertex(cx + cos(a) * 10, cy + sin(a) * 10);
    brush.vertex(cx + cos(a + 40) * 55, cy + sin(a + 40) * 50);
    brush.vertex(cx + cos(a + 90) * 35, cy + sin(a + 90) * 35);
    brush.endShape(true);
  }
  brush.fill("#3e0210", 230);
  brush.circle(cx + 3, cy, 18, 0.6);

  // drips: tapering runs from the bloom's lower edge, each ending in a bead
  let drips = [[200, 150], [236, 250], [300, 110], [335, 190]];
  for (let d of drips) {
    let [x, len] = d;
    let top = cy + 70 + abs(x - cx) * -0.25;
    brush.fill("#c0142e", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(x - 14, top); brush.vertex(x + 14, top);
    brush.vertex(x + 5, top + len); brush.vertex(x - 5, top + len);
    brush.endShape(true);
    brush.fill("#8a0822", 225);
    brush.fillBleed(0.15);
    brush.circle(x, top + len + 4, 9, 0.2);
  }
}
