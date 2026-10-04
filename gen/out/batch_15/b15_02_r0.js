async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe6d6");

  brush.noStroke();
  // hazy sky
  brush.fill("#c9b8a0", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.8);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 230);
  brush.vertex(0, 240);
  brush.endShape(true);

  // far dunes
  brush.fill("#c79a6a", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(0, 240);
  brush.vertex(120, 205);
  brush.vertex(260, 232);
  brush.vertex(390, 198);
  brush.vertex(600, 228);
  brush.vertex(600, 300);
  brush.vertex(0, 300);
  brush.endShape(true);

  // middle dune bodies
  let dunes = [
    [0, 330, 180, 250, 380, 320, "#b77a48"],
    [220, 330, 430, 245, 600, 300, "#a8693c"],
  ];
  for (let d of dunes) {
    brush.fill(d[6], 200);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.6);
    brush.vertex(d[0], d[1]);
    brush.vertex(d[2], d[3]);
    brush.vertex(d[4], d[5]);
    brush.vertex(d[4], 420);
    brush.vertex(d[0], 420);
    brush.endShape(true);
  }
  // shadow sides
  brush.fill("#7a4e3a", 170);
  brush.fillBleed(0.22);
  brush.beginShape(0.5);
  brush.vertex(180, 250);
  brush.vertex(380, 320);
  brush.vertex(300, 360);
  brush.vertex(200, 300);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(430, 245);
  brush.vertex(600, 300);
  brush.vertex(600, 350);
  brush.vertex(470, 300);
  brush.endShape(true);

  // foreground sand
  brush.fill("#d0a26a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 390);
  brush.vertex(250, 370);
  brush.vertex(600, 400);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  brush.fill("#8a5a40", 150);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(0, 470);
  brush.vertex(150, 430);
  brush.vertex(130, 520);
  brush.vertex(0, 560);
  brush.endShape(true);

  // winding dry riverbed into distance
  brush.fill("#6f6a5e", 190);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.9);
  brush.vertex(300, 250);
  brush.vertex(318, 252);
  brush.vertex(300, 300);
  brush.vertex(372, 350);
  brush.vertex(330, 420);
  brush.vertex(470, 510);
  brush.vertex(520, 600);
  brush.vertex(330, 600);
  brush.vertex(330, 510);
  brush.vertex(260, 420);
  brush.vertex(330, 350);
  brush.vertex(275, 300);
  brush.endShape(true);

  brush.fill("#4d4a44", 150);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(310, 340);
  brush.vertex(345, 352);
  brush.vertex(305, 420);
  brush.vertex(420, 510);
  brush.vertex(440, 600);
  brush.vertex(380, 600);
  brush.vertex(360, 515);
  brush.vertex(285, 420);
  brush.endShape(true);

  // pale sun haze
  brush.fill("#e9d3a8", 140);
  brush.fillBleed(0.3);
  brush.circle(140, 90, 50, 0.3);
}
