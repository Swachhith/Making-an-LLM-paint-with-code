async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f4f0");
  brush.noStroke();

  // negative painting: bold violet ground laid in pieces around the bloom,
  // so the white petals are the untouched paper
  const ground = [
    [[0, 0], [600, 0], [600, 110], [470, 150], [360, 95], [250, 130], [0, 120]],
    [[0, 110], [240, 135], [215, 250], [230, 380], [150, 470], [0, 500]],
    [[480, 140], [600, 100], [600, 470], [470, 430], [505, 300]],
  ];
  for (const g of ground) {
    brush.fill("#4b1d7a", 225);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.45);
    brush.beginShape(0.7);
    for (const [x, y] of g) brush.vertex(x, y);
    brush.endShape(true);
  }
  brush.fill("#8e1d8c", 200);
  brush.fillBleed(0.35);
  brush.beginShape(0.9);
  brush.vertex(0, 0); brush.vertex(250, 0); brush.vertex(180, 110); brush.vertex(0, 200);
  brush.endShape(true);

  // broad dark leaves at the base, the plant's usual pair
  brush.fill("#1d5a2c", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(120, 600); brush.vertex(60, 510); brush.vertex(200, 450); brush.vertex(380, 500); brush.vertex(330, 600);
  brush.endShape(true);
  brush.fill("#2e7a34", 215);
  brush.beginShape(1);
  brush.vertex(250, 600); brush.vertex(360, 470); brush.vertex(560, 460); brush.vertex(600, 540); brush.vertex(520, 600);
  brush.endShape(true);
  brush.fill("#0f3a1c", 200);
  brush.beginShape(0.8);
  brush.vertex(80, 515); brush.vertex(220, 470); brush.vertex(360, 505); brush.vertex(220, 490);
  brush.endShape(true);

  // arching flower spike
  brush.fill("#3d5a26", 230);
  brush.fillBleed(0.05);
  brush.fillTexture(0.2, 0.2);
  brush.beginShape(0.9);
  brush.vertex(186, 480); brush.vertex(198, 360); brush.vertex(250, 280); brush.vertex(300, 262);
  brush.vertex(302, 272); brush.vertex(258, 290); brush.vertex(210, 362); brush.vertex(198, 480);
  brush.endShape(true);

  // side-on bloom: the petals are defined only by their shadows and blush
  // shadow along the underside of the swept-back lateral petal
  brush.fill("#b69ad8", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.3, 0.6);
  brush.beginShape(0.9);
  brush.vertex(305, 275); brush.vertex(400, 300); brush.vertex(480, 260); brush.vertex(470, 290); brush.vertex(400, 330); brush.vertex(320, 300);
  brush.endShape(true);
  // dorsal sepal edge
  brush.fill("#c9b2e6", 175);
  brush.beginShape(0.9);
  brush.vertex(300, 250); brush.vertex(262, 175); brush.vertex(285, 125); brush.vertex(278, 180); brush.vertex(310, 245);
  brush.endShape(true);
  // blush vein fans at petal bases
  for (const [x, y, a] of [[330, 255, -40], [335, 262, -10], [325, 270, 60]]) {
    brush.fill("#e38fc8", 175);
    brush.fillBleed(0.3);
    brush.beginShape(0.8);
    brush.vertex(x, y);
    brush.vertex(x + cos(a - 12) * 70, y + sin(a - 12) * 70);
    brush.vertex(x + cos(a + 12) * 70, y + sin(a + 12) * 70);
    brush.endShape(true);
  }
  // hanging lower sepal shadow
  brush.fill("#a58bcf", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(350, 330); brush.vertex(372, 380); brush.vertex(350, 420); brush.vertex(340, 370);
  brush.endShape(true);

  // magenta lip thrust forward, pooled dark in its throat
  brush.fill("#d4147a", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  brush.vertex(325, 262); brush.vertex(390, 250); brush.vertex(430, 285); brush.vertex(392, 322); brush.vertex(340, 300);
  brush.endShape(true);
  brush.fill("#7a0845", 230);
  brush.fillBleed(0.1);
  brush.beginShape(0.8);
  brush.vertex(340, 272); brush.vertex(385, 266); brush.vertex(404, 290); brush.vertex(372, 305);
  brush.endShape(true);
  brush.fill("#ffc400", 240);
  brush.fillBleed(0.05);
  brush.circle(338, 266, 10, 0.4);

  // two buds further back on the spike, shaded lilac
  brush.fill("#cdb5ea", 200);
  brush.fillBleed(0.2);
  brush.circle(248, 290, 22, 0.4);
  brush.fill("#d34a9c", 190);
  brush.circle(214, 350, 15, 0.4);
}
