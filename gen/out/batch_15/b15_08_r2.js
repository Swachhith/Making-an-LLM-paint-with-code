async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eaf1f0");
  randomSeed(828);
  brush.noStroke();

  // indigo sky, three passes, stopping above the cabin roof
  for (let pass = 0; pass < 3; pass++) {
    brush.fill("#1a2060", 230);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.6);
    brush.vertex(0, 0);
    brush.vertex(600, 0);
    brush.vertex(600, 250 - pass * 40);
    brush.vertex(0, 260 - pass * 40);
    brush.endShape(true);
  }
  // teal horizon glow, cut around the snowy roof so it stays paper
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#1c6a78", 215);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.1);
    brush.vertex(0, 200);
    brush.vertex(600, 190);
    brush.vertex(600, 418);
    brush.vertex(378, 418);
    brush.vertex(378, 380);
    brush.vertex(290, 300);
    brush.vertex(202, 380);
    brush.vertex(202, 418);
    brush.vertex(0, 418);
    brush.endShape(true);
  }
  // hills on either side of the cabin
  brush.fill("#18285a", 220);
  brush.fillBleed(0.15);
  brush.beginShape(0.5);
  brush.vertex(0, 370);
  brush.vertex(120, 340);
  brush.vertex(200, 382);
  brush.vertex(200, 425);
  brush.vertex(0, 430);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(380, 385);
  brush.vertex(470, 350);
  brush.vertex(600, 330);
  brush.vertex(600, 420);
  brush.vertex(380, 425);
  brush.endShape(true);

  // pines, dark indigo, three passes
  let pines = [[40, 450, 240], [105, 455, 170], [510, 430, 260], [570, 440, 200], [455, 435, 150], [160, 450, 110]];
  for (let p of pines) {
    let x = p[0], base = p[1], h = p[2];
    for (let pass = 0; pass < 3; pass++) {
      brush.fill("#0a1030", 235);
      brush.fillBleed(0.1);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.15);
      brush.vertex(x, base - h);
      for (let t = 1; t <= 5; t++) {
        let yy = base - h + (h * t) / 5;
        let ww = (h * 0.3 * t) / 5 + 10;
        brush.vertex(x + ww, yy);
        brush.vertex(x + ww * 0.45, yy - 4);
      }
      for (let t = 5; t >= 1; t--) {
        let yy = base - h + (h * t) / 5;
        let ww = (h * 0.3 * t) / 5 + 10;
        brush.vertex(x - ww * 0.45, yy - 4);
        brush.vertex(x - ww, yy);
      }
      brush.endShape(true);
    }
  }

  // cabin walls under the paper-white roof, and the chimney
  for (let pass = 0; pass < 3; pass++) {
    brush.fill("#0a1030", 240);
    brush.fillBleed(0.08);
    brush.beginShape(0);
    brush.vertex(218, 460);
    brush.vertex(218, 386);
    brush.vertex(362, 386);
    brush.vertex(362, 462);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(322, 318);
    brush.vertex(322, 282);
    brush.vertex(342, 282);
    brush.vertex(342, 330);
    brush.endShape(true);
  }
  // blue shadow on the underside of the snow roof
  brush.fill("#6a9ab0", 160);
  brush.fillBleed(0.15);
  brush.beginShape(0);
  brush.vertex(206, 372);
  brush.vertex(374, 372);
  brush.vertex(362, 388);
  brush.vertex(218, 388);
  brush.endShape(true);

  // windows glowing
  for (let w of [[238, 264], [314, 342]]) {
    for (let pass = 0; pass < 2; pass++) {
      brush.fill(pass ? "#ffd070" : "#f09a30", 230);
      brush.fillBleed(0.08);
      brush.beginShape(0);
      brush.vertex(w[0] + pass * 4, 404 + pass * 4);
      brush.vertex(w[1] - pass * 4, 404 + pass * 4);
      brush.vertex(w[1] - pass * 4, 434 - pass * 4);
      brush.vertex(w[0] + pass * 4, 434 - pass * 4);
      brush.endShape(true);
    }
  }
  brush.fill("#f6c070", 170);
  brush.fillBleed(0.3);
  brush.circle(290, 492, 60, 0.6);

  // teal snow shadows
  brush.fill("#5a98aa", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(0, 470);
  brush.vertex(210, 462);
  brush.vertex(150, 515);
  brush.vertex(0, 535);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(380, 468);
  brush.vertex(600, 448);
  brush.vertex(600, 560);
  brush.vertex(430, 525);
  brush.endShape(true);
  brush.fill("#2e5a80", 160);
  brush.beginShape(0.8);
  brush.vertex(40, 585);
  brush.vertex(300, 548);
  brush.vertex(580, 590);
  brush.vertex(300, 604);
  brush.endShape(true);
  // footpath of blue dents leading to the door
  for (let i = 0; i < 7; i++) {
    brush.fill("#4a7a9a", 170);
    brush.fillBleed(0.15);
    brush.circle(280 + sin(i * 50) * 20 + i * 4, 480 + i * 17, 5 + i * 0.8, 0.4);
  }

  for (let i = 0; i < 45; i++) {
    brush.fill("#e8f4ff", 220);
    brush.fillBleed(0.05);
    brush.circle(random(600), random(0, 200), random(1, 2.5), 0.1);
  }
}
