async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f6");
  randomSeed(2222);
  brush.noStroke();

  // cool light: a pale blue sky, a bit of shadow on the right
  brush.fill("#a9c8e8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8fb4d0", 140);
  brush.beginShape(0.5);
  brush.vertex(420, 200); brush.vertex(620, 120); brush.vertex(620, 420); brush.vertex(420, 500);
  brush.endShape(true);

  // stem: two passes, darker green, cool
  brush.fill("#2f6a4a", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(300, 500); brush.vertex(315, 500); brush.vertex(330, 300); brush.vertex(320, 150); brush.vertex(305, 0);
  brush.vertex(290, 0); brush.vertex(300, 150); brush.vertex(310, 300); brush.vertex(325, 500);
  brush.endShape(true);
  brush.fill("#1a4232", 190);
  brush.beginShape(0.4);
  brush.vertex(290, 500); brush.vertex(305, 500); brush.vertex(320, 320); brush.vertex(310, 170); brush.vertex(295, 0);
  brush.vertex(280, 0); brush.vertex(290, 170); brush.vertex(300, 320); brush.vertex(315, 500);
  brush.endShape(true);

  // a couple of leaves, pale green with shadow
  brush.fill("#7fb8a8", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(250, 400); brush.vertex(320, 400); brush.vertex(350, 460); brush.vertex(280, 470);
  brush.endShape(true);
  brush.fill("#5a9a84", 170);
  brush.beginShape(0.7);
  brush.vertex(280, 470); brush.vertex(350, 460); brush.vertex(360, 530); brush.vertex(290, 540);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(370, 450); brush.vertex(440, 450); brush.vertex(450, 520); brush.vertex(380, 530);
  brush.endShape(true);

  // rose: cool crimson, not hot. three passes: petal tips, middle, base.
  const cx = 300, cy = 150;
  let petals = [
    [-10, -20, 110], [10, -20, 110], [20, 10, 105], [30, 30, 100], [25, 50, 95], [15, 70, 90],
    [0, 90, 85], [-15, 70, 90], [-25, 50, 95], [-30, 30, 100], [-20, 10, 105], [-10, -20, 110]
  ];
  for (let p = 0; p < petals.length; p++) {
    let a = p * 360 / petals.length;
    for (let pass = 0; pass < 2; pass++) {
      brush.fill("#b02a42", 215);
      brush.fillBleed(0.22);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a - 15) * 25, cy + sin(a - 15) * 25);
      brush.vertex(cx + cos(a - 35) * 110, cy + sin(a - 35) * 110);
      brush.vertex(cx + cos(a - 60) * 125, cy + sin(a - 60) * 125);
      brush.vertex(cx + cos(a - 85) * 130, cy + sin(a - 85) * 130);
      brush.vertex(cx + cos(a - 110) * 120, cy + sin(a - 110) * 120);
      brush.vertex(cx + cos(a - 135) * 115, cy + sin(a - 135) * 115);
      brush.vertex(cx + cos(a - 155) * 105, cy + sin(a - 155) * 105);
      brush.vertex(cx + cos(a - 170) * 30, cy + sin(a - 170) * 30);
      brush.vertex(cx + cos(a - 175) * 10, cy + sin(a - 175) * 10);
      brush.vertex(cx + cos(a - 160) * 20, cy + sin(a - 160) * 20);
      brush.vertex(cx + cos(a - 140) * 30, cy + sin(a - 140) * 30);
      brush.vertex(cx + cos(a - 120) * 105, cy + sin(a - 120) * 105);
      brush.vertex(cx + cos(a - 95) * 120, cy + sin(a - 95) * 120);
      brush.vertex(cx + cos(a - 75) * 130, cy + sin(a - 75) * 130);
      brush.vertex(cx + cos(a - 50) * 125, cy + sin(a - 50) * 125);
      brush.vertex(cx + cos(a - 30) * 110, cy + sin(a - 30) * 110);
      brush.vertex(cx + cos(a - 10) * 25, cy + sin(a - 10) * 25);
      brush.endShape(true);
    }
  }
  // shadowed undersides of overlapping petals
  for (let p = 0; p < 7; p++) {
    let a = p * 360 / 7 + 90;
    brush.fill("#6a1528", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(cx + cos(a - 40) * 50, cy + sin(a - 40) * 50);
    brush.vertex(cx + cos(a - 10) * 90, cy + sin(a - 10) * 90);
    brush.vertex(cx + cos(a + 10) * 90, cy + sin(a + 10) * 90);
    brush.vertex(cx + cos(a + 40) * 50, cy + sin(a + 40) * 50);
    brush.endShape(true);
  }
  // a few cool dots of shadow on the paper
  brush.fill("#8fb4d0", 140);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(500, 350, 20, 0.5);
  brush.circle(200, 50, 12, 0.5);
}
