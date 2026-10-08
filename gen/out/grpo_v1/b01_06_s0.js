async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3e2");
  brush.noStroke();
  // warm light: a soft peach wash behind the bloom
  brush.fill("#f6d2b8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(60, 60); brush.vertex(540, 40); brush.vertex(620, 220); brush.vertex(420, 260); brush.vertex(20, 240);
  brush.endShape(true);
  // a warm shadowed side of the petals
  brush.fill("#e8a87a", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(220, 280); brush.vertex(420, 240); brush.vertex(480, 300); brush.vertex(360, 350); brush.vertex(260, 310);
  brush.endShape(true);
  // the star-shaped crown: five broad golden petals
  for (let k = 0; k < 5; k++) {
    const a = k * 72;
    brush.fill("#e8b82a", 220);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(300, 300);
    brush.vertex(300 + 170 * cos(a - 30), 300 + 170 * sin(a - 30));
    brush.vertex(300 + 130 * cos(a - 10), 300 + 130 * sin(a - 10));
    brush.vertex(300 + 60 * cos(a + 20), 300 + 60 * sin(a + 20));
    brush.vertex(300 + 20 * cos(a + 30), 300 + 20 * sin(a + 30));
    brush.vertex(300 + 60 * cos(a - 20), 300 + 60 * sin(a - 20));
    brush.vertex(300 + 20 * cos(a - 30), 300 + 20 * sin(a - 30));
    brush.vertex(300 + 130 * cos(a + 10), 300 + 130 * sin(a + 10));
    brush.vertex(300 + 170 * cos(a + 30), 300 + 170 * sin(a + 30));
    brush.endShape(true);
  }
  // deeper blue veins radiating from the centre
  for (let k = 0; k < 5; k++) {
    const a = k * 72;
    brush.fill("#2a4aa8", 200);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(300, 300);
    brush.vertex(300 + 160 * cos(a), 300 + 160 * sin(a));
    brush.vertex(300 + 90 * cos(a), 300 + 90 * sin(a));
    brush.vertex(300 + 60 * cos(a), 300 + 60 * sin(a));
    brush.endShape(true);
  }
  // a second pass of gold, darker, in the petal centres
  for (let k = 0; k < 5; k++) {
    const a = k * 72;
    brush.fill("#b88a1a", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(300, 300);
    brush.vertex(300 + 110 * cos(a), 300 + 110 * sin(a));
    brush.vertex(300 + 80 * cos(a), 300 + 80 * sin(a));
    brush.vertex(300 + 40 * cos(a), 300 + 40 * sin(a));
    brush.vertex(300, 300);
    brush.endShape(true);
  }
  // the blue throat
  brush.fill("#1e5aa8", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(290, 300); brush.vertex(310, 300); brush.vertex(330, 320); brush.vertex(310, 340); brush.vertex(290, 320);
  brush.endShape(true);
  // golden stamen, a row of long slender florets
  for (let k = 0; k < 11; k++) {
    const a = k * 18;
    brush.fill("#ffd23a", 240);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(300, 300);
    brush.vertex(300 + 100 * cos(a - 12), 300 + 100 * sin(a - 12));
    brush.vertex(300 + 100 * cos(a + 12), 300 + 100 * sin(a + 12));
    brush.endShape(true);
  }
  // a dark green leaf curling behind
  brush.fill("#1f6a3a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(260, 340); brush.vertex(300, 300); brush.vertex(330, 340); brush.vertex(360, 370); brush.vertex(300, 400); brush.vertex(240, 370);
  brush.endShape(true);
  // a couple of tiny dots of gold pollen
  brush.fill("#ffd23a", 255);
  brush.fillBleed(0.1);
  brush.fillTexture(0.2, 0.2);
  brush.circle(300, 300, 3, 0.2);
  brush.circle(300, 300, 4, 0.2);
  brush.circle(300, 300, 2, 0.2);
}
