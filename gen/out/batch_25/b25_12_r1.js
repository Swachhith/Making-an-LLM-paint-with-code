async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf2df");
  randomSeed(1312);
  brush.noStroke();

  // warm sky, apricot glow
  brush.fill("#f7cf98", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 200); brush.vertex(-10, 210);
  brush.endShape(true);
  brush.fill("#eab070", 150);
  brush.beginShape(1);
  brush.vertex(-10, 120); brush.vertex(610, 110); brush.vertex(610, 200); brush.vertex(-10, 205);
  brush.endShape(true);
  // blue-lilac distant hills and a line of trees
  brush.fill("#b8a08a", 190);
  brush.fillBleed(0.28);
  brush.beginShape(0.8);
  brush.vertex(-10, 205); brush.vertex(120, 170); brush.vertex(280, 195); brush.vertex(440, 165);
  brush.vertex(610, 190); brush.vertex(610, 225); brush.vertex(-10, 225);
  brush.endShape(true);
  for (let i = 0; i < 9; i++) {
    brush.fill("#7c8a4a", 200);
    brush.fillBleed(0.25);
    brush.circle(30 + i * 68 + random(-10, 10), 215, random(10, 18), 0.6);
  }

  // meadow: warm yellow-green, then a band of red haze where poppies blur together
  brush.fill("#b8c060", 195);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-10, 222); brush.vertex(610, 220); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#e2503a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-10, 240); brush.vertex(610, 236); brush.vertex(610, 290); brush.vertex(-10, 300);
  brush.endShape(true);

  // path: an S-curve from the foreground to a point on the horizon
  let path = [[300, 226], [312, 226], [340, 270], [310, 330], [290, 380], [360, 460], [470, 610],
              [180, 610], [220, 460], [200, 380], [260, 320], [292, 270]];
  brush.fill("#e8c490", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.45);
  brush.beginShape(0.7);
  for (let p of path) brush.vertex(p[0], p[1]);
  brush.endShape(true);
  brush.fill("#c89c68", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(330, 450); brush.vertex(420, 610); brush.vertex(360, 610); brush.vertex(300, 470);
  brush.endShape(true);

  // poppies: round, irregular, bleeding blooms; smaller and denser into the distance
  let halfW = y => { let t = (y - 226) / 384; return 6 + t * 150; };
  let pathX = y => y < 330 ? lerp(306, 285, (y - 226) / 104) : y < 460 ? lerp(285, 290, (y - 330) / 130) : lerp(290, 325, (y - 460) / 150);
  for (let i = 0; i < 170; i++) {
    let y = 240 + pow(random(), 0.8) * 370;
    let t = (y - 226) / 384;
    let px = pathX(y), hw = halfW(y) + 10;
    let x = random() < 0.5 ? random(-10, px - hw) : random(px + hw, 610);
    let r = 3 + t * t * 26 + random(0, 3);
    brush.fill(random(["#e8281a", "#d41e1a", "#f5451e"]), random(200, 235));
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(x, y, r, 0.9);
    if (r > 12) {
      brush.fill("#a8100e", 210);
      brush.fillBleed(0.2);
      brush.circle(x + r * 0.2, y + r * 0.1, r * 0.55, 0.8);
      brush.fill("#221414", 225);
      brush.fillBleed(0.1);
      brush.circle(x + r * 0.05, y, r * 0.2, 0.3);
    }
  }
}
