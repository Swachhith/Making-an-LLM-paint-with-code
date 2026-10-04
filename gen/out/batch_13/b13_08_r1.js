async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e4e0d6");
  randomSeed(18);
  brush.noStroke();
  // rain-soaked air: slanted streaky washes of umber grey
  for (let i = 0; i < 7; i++) {
    let x = -80 + i * 110;
    brush.fill(i % 2 ? "#8a8274" : "#9c9484", 180);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(x, -10);
    brush.vertex(x + 90, -10);
    brush.vertex(x + 30, 430);
    brush.vertex(x - 60, 430);
    brush.endShape(true);
  }
  // pavement with a big wet sheen
  brush.fill("#6e6456", 200);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-10, 450);
  brush.vertex(610, 440);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // the figure, lower right third, larger and darker
  let fx = 420, fy = 450;
  brush.fill("#3a2e24", 230);
  brush.fillBleed(0.18);
  brush.fillTexture(0.4, 0.4);
  // long coat flaring
  brush.beginShape(1);
  brush.vertex(fx - 18, fy - 150);
  brush.vertex(fx + 18, fy - 150);
  brush.vertex(fx + 36, fy - 40);
  brush.vertex(fx - 32, fy - 40);
  brush.endShape(true);
  brush.fill("#2a2018", 225);
  brush.beginShape(1);
  brush.vertex(fx - 22, fy - 44);
  brush.vertex(fx - 4, fy - 44);
  brush.vertex(fx - 6, fy);
  brush.vertex(fx - 22, fy);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(fx + 4, fy - 44);
  brush.vertex(fx + 24, fy - 44);
  brush.vertex(fx + 26, fy - 4);
  brush.vertex(fx + 10, fy - 4);
  brush.endShape(true);
  brush.fill("#9c7458", 215);
  brush.fillBleed(0.15);
  brush.circle(fx, fy - 166, 15, 0.2);
  brush.fill("#2e241c", 220);
  brush.circle(fx - 3, fy - 172, 12, 0.3);
  // arm raised to the handle
  brush.fill("#3a2e24", 225);
  brush.beginShape(1);
  brush.vertex(fx + 8, fy - 140);
  brush.vertex(fx + 28, fy - 176);
  brush.vertex(fx + 40, fy - 170);
  brush.vertex(fx + 20, fy - 132);
  brush.endShape(true);
  // the umbrella: three glazes of vermilion, domed
  let reds = [["#d4301e", 220, 0], ["#b01e14", 200, 14], ["#7e120c", 180, 30]];
  for (let r of reds) {
    let o = r[2];
    brush.fill(r[0], r[1]);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(fx - 80 + o, fy - 176);
    brush.vertex(fx - 40 + o, fy - 226 + o * 0.4);
    brush.vertex(fx + 30, fy - 240 + o * 0.4);
    brush.vertex(fx + 96, fy - 222);
    brush.vertex(fx + 126, fy - 180);
    brush.vertex(fx + 60, fy - 190);
    brush.vertex(fx + 20 + o, fy - 184);
    brush.endShape(true);
  }
  // reflection bleeding on the wet ground
  brush.fill("#b24030", 170);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(fx - 40, fy + 10);
  brush.vertex(fx + 90, fy + 8);
  brush.vertex(fx + 60, fy + 120);
  brush.vertex(fx - 10, fy + 120);
  brush.endShape(true);
  brush.fill("#2e241c", 170);
  brush.beginShape(1);
  brush.vertex(fx - 22, fy + 4);
  brush.vertex(fx + 26, fy + 4);
  brush.vertex(fx + 18, fy + 80);
  brush.vertex(fx - 10, fy + 80);
  brush.endShape(true);
  // puddle rings
  brush.fill("#50483c", 170);
  brush.fillBleed(0.2);
  brush.circle(160, 520, 16, 0.6);
  brush.circle(240, 560, 10, 0.6);
}
