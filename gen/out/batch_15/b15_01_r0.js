async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8eed9");
  randomSeed(1501);

  brush.noStroke();
  brush.fill("#f2c46a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 330);
  brush.vertex(0, 360);
  brush.endShape(true);

  brush.fill("#e89a4c", 140);
  brush.fillBleed(0.25);
  brush.circle(470, 90, 120, 0.4);

  brush.fill("#9aa84a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(0, 470);
  brush.vertex(200, 455);
  brush.vertex(420, 468);
  brush.vertex(600, 450);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  brush.fill("#6f7a2e", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(150, 540);
  brush.vertex(300, 520);
  brush.vertex(470, 545);
  brush.vertex(430, 580);
  brush.vertex(200, 585);
  brush.endShape(true);

  // trunk
  brush.fill("#6b4426", 220);
  brush.fillBleed(0.22);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(262, 540);
  brush.vertex(282, 470);
  brush.vertex(270, 400);
  brush.vertex(286, 330);
  brush.vertex(250, 260);
  brush.vertex(275, 250);
  brush.vertex(308, 318);
  brush.vertex(340, 250);
  brush.vertex(362, 262);
  brush.vertex(322, 350);
  brush.vertex(318, 440);
  brush.vertex(345, 545);
  brush.endShape(true);

  brush.fill("#3e2614", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(300, 540);
  brush.vertex(304, 450);
  brush.vertex(300, 360);
  brush.vertex(318, 355);
  brush.vertex(322, 450);
  brush.vertex(340, 542);
  brush.endShape(true);

  // crown, tall stacked masses
  let greens = ["#7f9a3a", "#5d7d2c", "#a5b24a", "#4a6a26"];
  for (let i = 0; i < 26; i++) {
    let y = random(60, 300);
    let spread = map(y, 60, 300, 90, 170);
    let x = 300 + random(-spread, spread);
    brush.fill(random(greens), random(150, 210));
    brush.fillBleed(random(0.2, 0.3));
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, random(40, 75), 0.6);
  }

  // apples
  for (let i = 0; i < 22; i++) {
    let y = random(100, 310);
    let x = 300 + random(-150, 150);
    brush.fill("#d23a22", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, random(8, 12), 0.2);
    brush.fill("#8f1c14", 180);
    brush.circle(x + 3, y + 3, 5, 0.2);
  }

  // fallen apples
  for (let i = 0; i < 5; i++) {
    brush.fill("#c8401e", 210);
    brush.fillBleed(0.2);
    brush.circle(random(180, 430), random(535, 565), 8, 0.2);
  }
}
