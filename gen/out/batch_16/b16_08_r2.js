async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0a0716");
  brush.noStroke();

  // outline of everything left as dark paper: low hills plus one tall cypress in the middle
  let out = [[-20,500],[60,480],[140,495],[240,470],[285,470],[290,300],[298,140],[305,120],[312,140],[320,300],[325,470],[380,470],[470,490],[560,475],[620,490]];
  // stacked sky passes: deep blue top, violet lower, all cut by the outline
  let passes = [["#232c78", 215], ["#2c2a80", 170]];
  for (let p of passes) {
    brush.fill(p[0], p[1]);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.05);
    brush.vertex(-20, -20);
    brush.vertex(620, -20);
    for (let i = out.length - 1; i >= 0; i--) brush.vertex(out[i][0], out[i][1]);
    brush.endShape(true);
  }
  // violet glow in two soft blocks either side of the cypress
  for (let side of [[-20, 270], [335, 620]]) {
    brush.fill("#7a3fa6", 180);
    brush.fillBleed(0.35);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(side[0], 300);
    brush.vertex(side[1], 290);
    brush.vertex(side[1], 470);
    brush.vertex(side[0], 480);
    brush.endShape(true);
    brush.fill("#b060b0", 150);
    brush.fillBleed(0.35);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(side[0], 400);
    brush.vertex(side[1], 395);
    brush.vertex(side[1], 470);
    brush.vertex(side[0], 480);
    brush.endShape(true);
  }
  // re-cut the hills with a near-black pass so their tops stay crisp
  brush.fill("#07050f", 250);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  for (let p of out) brush.vertex(p[0], max(p[1], 470));
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(284, 475);
  brush.vertex(289, 300);
  brush.vertex(305, 118);
  brush.vertex(321, 300);
  brush.vertex(326, 475);
  brush.endShape(true);

  // stars thick overhead, thinning downward
  for (let i = 0; i < 150; i++) {
    let y = pow(((i * 0.618) % 1), 1.6) * 440;
    let x = (i * 211.7) % 600;
    if (abs(x - 305) < 22 && y > 110) continue;
    brush.fill("#f0eaff", 210 + (i % 3) * 15);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, 0.8 + (i % 5) * 0.55, 0.3);
  }
  for (let s of [[150, 70], [430, 110], [230, 200], [500, 40]]) {
    brush.fill("#c0b0ff", 150);
    brush.fillBleed(0.35);
    brush.fillTexture(0.3, 0.3);
    brush.circle(s[0], s[1], 10, 0.4);
    brush.fill("#ffffff", 245);
    brush.fillBleed(0.1);
    brush.fillTexture(0.2, 0.2);
    brush.circle(s[0], s[1], 3, 0.2);
  }
}
