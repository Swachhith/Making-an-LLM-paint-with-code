async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe6");
  randomSeed(1000);
  brush.noStroke();

  // warm light: soft sky, pale ground
  brush.fill("#e8d6b8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 400); brush.vertex(450, 450); brush.vertex(250, 420); brush.vertex(0, 460);
  brush.endShape(true);
  brush.fill("#f2e8c4", 160);
  brush.beginShape(0.8);
  brush.vertex(0, 460); brush.vertex(600, 460); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // stem: two passes, coppery
  brush.fill("#b87a4a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 470); brush.vertex(310, 470); brush.vertex(318, 600); brush.vertex(302, 600);
  brush.endShape(true);
  brush.fill("#8a5232", 190);
  brush.beginShape(0.3);
  brush.vertex(300, 470); brush.vertex(306, 470); brush.vertex(314, 600); brush.vertex(300, 600);
  brush.endShape(true);

  // two leaves, broad and warm
  brush.fill("#8a5a3a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(300, 480); brush.vertex(360, 430); brush.vertex(410, 460); brush.vertex(350, 490);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(300, 480); brush.vertex(240, 430); brush.vertex(190, 460); brush.vertex(250, 490);
  brush.endShape(true);

  // anemone: five broad petals, each a warm light with a darker centre
  for (let i = 0; i < 5; i++) {
    const a = i * 72 + random(-8, 8);
    const R = 160 + random(-10, 10);
    brush.fill("#f2a46e", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 20) * R, 300 + sin(a - 20) * R);
    brush.vertex(300 + cos(a - 10) * R * 0.9, 300 + sin(a - 10) * R * 0.9);
    brush.vertex(300 + cos(a + 10) * R * 0.9, 300 + sin(a + 10) * R * 0.9);
    brush.vertex(300 + cos(a + 20) * R, 300 + sin(a + 20) * R);
    brush.endShape(true);
    brush.fill("#e07a4a", 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.7);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 15) * R * 0.75, 300 + sin(a - 15) * R * 0.75);
    brush.vertex(300 + cos(a) * R * 0.7, 300 + sin(a) * R * 0.7);
    brush.vertex(300 + cos(a + 15) * R * 0.75, 300 + sin(a + 15) * R * 0.75);
    brush.endShape(true);
  }
  // darker heart
  brush.fill("#a04024", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(300, 300, 55, 0.3);
  brush.fill("#6a2a16", 210);
  brush.circle(300, 300, 32, 0.3);
  brush.fill("#c06a2a", 180);
  brush.circle(300, 300, 18, 0.4);
}
