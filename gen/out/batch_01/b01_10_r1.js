async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  randomSeed(1010);
  brush.noStroke();

  // one faint dome wash, mostly paper
  brush.fill("#b8cbe6", 70);
  brush.fillBleed(0.6, "out");
  brush.fillTexture(0.7, 0.2);
  brush.circle(250, 260, 165, true);

  // single loose leaf
  brush.fill("#b7ceb0", 120);
  brush.fillBleed(0.4, "out");
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.9);
  brush.vertex(260, 400); brush.vertex(170, 470); brush.vertex(120, 540); brush.vertex(210, 510); brush.vertex(270, 430);
  brush.endShape(true);

  // florets: four soft petals each, scattered on the dome
  let cols = ["#9ab7e0", "#a9b8e8", "#8fb0d6", "#b7aee0", "#a6c8e4"];
  for (let i = 0; i < 70; i++) {
    let a = random(360), d = sqrt(random()) * 140;
    let x = 250 + cos(a) * d, y = 260 + sin(a) * d * 0.9;
    let s = random(22, 32);
    let rot = random(90);
    let c = random(cols);
    for (let p = 0; p < 4; p++) {
      let pa = rot + p * 90;
      brush.fill(c, random(150, 220));
      brush.fillBleed(0.2, "out");
      brush.fillTexture(0.4, 0.5);
      brush.beginShape(1);
      brush.vertex(x, y);
      brush.vertex(x + cos(pa - 30) * s, y + sin(pa - 30) * s);
      brush.vertex(x + cos(pa) * s * 1.2, y + sin(pa) * s * 1.2);
      brush.vertex(x + cos(pa + 30) * s, y + sin(pa + 30) * s);
      brush.endShape(true);
    }
    if (random() < 0.5) {
      brush.fill("#6b86c4", 180);
      brush.fillBleed(0.05, "out");
      brush.circle(x, y, 2, true);
    }
  }

  // closed bud: tight pale green-blue knob on a short stem
  brush.fill("#a8c3a0", 180);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.8);
  brush.vertex(455, 470); brush.vertex(440, 395); brush.vertex(446, 395); brush.vertex(462, 470);
  brush.endShape(true);
  for (let i = 0; i < 14; i++) {
    let a = random(360), d = random(0, 26);
    brush.fill(random(["#c6d8c4", "#a9c3dc", "#b9d1cc"]), 160);
    brush.fillBleed(0.25, "out");
    brush.fillTexture(0.4, 0.5);
    brush.circle(445 + cos(a) * d, 370 + sin(a) * d, random(7, 11), true);
  }
}
