async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#16161c");
  brush.noStroke();

  // faint warm glow at horizon
  brush.fill("#6a4a30", 150);
  brush.fillBleed(0.35);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 440);
  brush.vertex(620, 430);
  brush.vertex(620, 520);
  brush.vertex(-20, 520);
  brush.endShape(true);

  // crescent moon: pale disc, then dark bite
  brush.fill("#f3e2b0", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(420, 140, 42, 0.1);
  brush.fill("#f7ebc4", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(420, 140, 36, 0.1);
  brush.fill("#16161c", 255);
  brush.fillBleed(0.1);
  brush.fillTexture(0.2, 0.2);
  brush.circle(438, 128, 38, 0.1);
  brush.circle(438, 128, 36, 0.1);

  // stars, tiny
  let stars = [[60,60],[130,110],[200,40],[260,170],[90,220],[330,80],[520,60],[560,190],[480,250],[180,300],[40,330],[370,260],[300,330],[560,340],[240,230]];
  for (let s of stars) {
    brush.fill("#e8dcc0", 230);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(s[0], s[1], 2.5, 0.3);
  }

  // ground band
  brush.fill("#050507", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 500);
  brush.vertex(200, 490);
  brush.vertex(420, 505);
  brush.vertex(620, 495);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  // pine silhouettes along a low horizon
  let pines = [[30,500,90,26],[75,505,130,34],[120,500,70,22],[330,505,110,30],[370,500,150,38],[410,505,95,28],[520,500,120,32],[570,505,80,24]];
  for (let p of pines) {
    let x = p[0], b = p[1], h = p[2], w = p[3];
    brush.fill("#08080a", 250);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.1);
    brush.vertex(x, b - h);
    brush.vertex(x + w * 0.3, b - h * 0.7);
    brush.vertex(x + w * 0.15, b - h * 0.68);
    brush.vertex(x + w * 0.45, b - h * 0.4);
    brush.vertex(x + w * 0.25, b - h * 0.38);
    brush.vertex(x + w * 0.5, b);
    brush.vertex(x - w * 0.5, b);
    brush.vertex(x - w * 0.25, b - h * 0.38);
    brush.vertex(x - w * 0.45, b - h * 0.4);
    brush.vertex(x - w * 0.15, b - h * 0.68);
    brush.vertex(x - w * 0.3, b - h * 0.7);
    brush.endShape(true);
  }

  // a cabin with two warm windows
  brush.fill("#0a0908", 250);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0);
  brush.vertex(210, 505);
  brush.vertex(210, 470);
  brush.vertex(240, 450);
  brush.vertex(270, 470);
  brush.vertex(270, 505);
  brush.endShape(true);
  brush.fill("#f0a040", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(228, 482, 5, 0.2);
  brush.circle(252, 482, 5, 0.2);
  // distant light
  brush.fill("#e8903a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(470, 497, 3, 0.2);
}
