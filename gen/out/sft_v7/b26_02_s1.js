async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece8dc");
  randomSeed(2101);
  brush.noStroke();

  // earthy green ground wash, left as a pale tint
  brush.fill("#a8b48a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stem and leaf
  brush.fill("#5f7a4a", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(290, 560); brush.vertex(310, 560); brush.vertex(320, 340); brush.vertex(300, 120);
  brush.vertex(285, 120); brush.vertex(305, 340); brush.vertex(325, 560);
  brush.endShape(true);
  brush.fill("#4f6a3a", 215);
  brush.beginShape(0.3);
  brush.vertex(288, 560); brush.vertex(300, 560); brush.vertex(310, 400); brush.vertex(320, 400);
  brush.vertex(330, 560); brush.vertex(322, 560);
  brush.endShape(true);
  brush.fill("#5f7a4a", 215);
  brush.beginShape(0.5);
  brush.vertex(300, 200); brush.vertex(320, 160); brush.vertex(350, 170); brush.vertex(340, 210);
  brush.endShape(true);

  // outer sepals, six of them, pale violet
  for (let i = 0; i < 6; i++) {
    const a = i * 60 + 10;
    const len = 150 + random(0, 20);
    brush.fill(random(["#9aa3c8", "#8c95b8"]), 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 25) * 70, 300 + sin(a - 25) * 70);
    brush.vertex(300 + cos(a - 10) * len, 300 + sin(a - 10) * len);
    brush.vertex(300 + cos(a + 10) * len, 300 + sin(a + 10) * len);
    brush.vertex(300 + cos(a + 25) * 70, 300 + sin(a + 25) * 70);
    brush.endShape(true);
  }

  // upper lip: two broad lobes, pale lilac
  brush.fill("#b8a8c8", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(300, 300); brush.vertex(300 + cos(-30) * 80, 300 + sin(-30) * 80);
  brush.vertex(330, 180); brush.vertex(360, 200); brush.vertex(370, 230); brush.vertex(340, 240);
  brush.vertex(310, 230); brush.vertex(300, 215);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(300, 300); brush.vertex(300 + cos(30) * 80, 300 + sin(30) * 80);
  brush.vertex(270, 180); brush.vertex(240, 200); brush.vertex(230, 230); brush.vertex(260, 240);
  brush.vertex(290, 230); brush.vertex(300, 215);
  brush.endShape(true);

  // lower lip: three rounded lobes, deeper lilac
  brush.fill("#9a84a8", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(300, 300); brush.vertex(300 + cos(-20) * 100, 300 + sin(-20) * 100);
  brush.vertex(340, 250); brush.vertex(370, 270); brush.vertex(370, 320); brush.vertex(340, 340);
  brush.vertex(300, 330); brush.vertex(260, 340); brush.vertex(230, 320); brush.vertex(230, 270);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(300, 300); brush.vertex(300 + cos(20) * 100, 300 + sin(20) * 100);
  brush.vertex(340, 250); brush.vertex(370, 270); brush.vertex(370, 320); brush.vertex(340, 340);
  brush.vertex(300, 330); brush.vertex(260, 340); brush.vertex(230, 320); brush.vertex(230, 270);
  brush.endShape(true);

  // deep purple dots on the upper lip
  brush.fill("#6a4a8a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(310, 210, 5, 0.3);
  brush.circle(335, 225, 4, 0.3);
  brush.circle(270, 220, 5, 0.3);
  brush.circle(295, 200, 4, 0.3);
  brush.circle(320, 235, 4, 0.3);

  // shadow on the back of the bloom
  brush.fill("#6a5a8a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(300, 230, 100, 0.6);
}
