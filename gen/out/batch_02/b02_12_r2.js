async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdfcfa");

  // hairline stems with thread leaves
  brush.noStroke();
  brush.fill("#8fb685", 215);
  brush.fillBleed(0.03, "out");
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(1);
  brush.vertex(200, 220);
  brush.vertex(228, 400);
  brush.vertex(258, 600);
  brush.vertex(265, 600);
  brush.vertex(235, 400);
  brush.vertex(207, 220);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(420, 360);
  brush.vertex(350, 470);
  brush.vertex(270, 600);
  brush.vertex(277, 600);
  brush.vertex(357, 470);
  brush.vertex(427, 362);
  brush.endShape(true);
  for (let f of [[232, 420, -150], [236, 440, -30], [345, 480, -120], [330, 505, 20]]) {
    brush.fill("#9cc28f", 205);
    brush.fillBleed(0.02, "out");
    brush.beginShape(0.9);
    brush.vertex(f[0], f[1]);
    brush.vertex(f[0] + cos(f[2]) * 60, f[1] + sin(f[2]) * 60);
    brush.vertex(f[0] + cos(f[2] + 4) * 60, f[1] + sin(f[2] + 4) * 60);
    brush.endShape(true);
  }

  // bloom A: facing us, eight notched petals; white by leaving paper, rimmed in lilac
  let ax = 200, ay = 200;
  for (let i = 0; i < 8; i++) {
    let a = i * 45 + 8;
    brush.fill("#d6b0d0", 225);
    brush.fillBleed(0.25, "out");
    brush.fillTexture(0.55, 0.9);
    brush.beginShape(0.7);
    brush.vertex(ax + cos(a) * 18, ay + sin(a) * 18);
    brush.vertex(ax + cos(a - 13) * 108, ay + sin(a - 13) * 108);
    brush.vertex(ax + cos(a - 5) * 116, ay + sin(a - 5) * 116);
    brush.vertex(ax + cos(a) * 104, ay + sin(a) * 104);
    brush.vertex(ax + cos(a + 5) * 116, ay + sin(a + 5) * 116);
    brush.vertex(ax + cos(a + 13) * 108, ay + sin(a + 13) * 108);
    brush.endShape(true);
    brush.fill("#fbf6fa", 200);
    brush.fillBleed(0.05, "out");
    brush.fillTexture(0.2, 0.2);
    brush.beginShape(0.7);
    brush.vertex(ax + cos(a) * 25, ay + sin(a) * 25);
    brush.vertex(ax + cos(a - 8) * 90, ay + sin(a - 8) * 90);
    brush.vertex(ax + cos(a + 8) * 90, ay + sin(a + 8) * 90);
    brush.endShape(true);
  }
  brush.fill("#f2c64a", 230);
  brush.fillBleed(0.25, "out");
  brush.circle(ax, ay, 24, true);
  brush.fill("#b98424", 215);
  brush.fillBleed(0.08, "out");
  brush.circle(ax + 5, ay + 5, 11, true);

  // bloom B: tilted, petals foreshortened, pale blue-grey shadows
  let bx = 420, by = 340;
  for (let i = 0; i < 8; i++) {
    let a = i * 45 + 20;
    let tip = 95;
    brush.fill("#b3c1dd", 225);
    brush.fillBleed(0.25, "out");
    brush.fillTexture(0.55, 0.9);
    brush.beginShape(0.7);
    brush.vertex(bx + cos(a) * 12, by + sin(a) * 5);
    brush.vertex(bx + cos(a - 13) * tip, by + sin(a - 13) * tip * 0.42);
    brush.vertex(bx + cos(a) * tip * 1.06, by + sin(a) * tip * 0.46);
    brush.vertex(bx + cos(a + 13) * tip, by + sin(a + 13) * tip * 0.42);
    brush.endShape(true);
  }
  brush.fill("#efc550", 225);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.9);
  brush.vertex(bx - 22, by);
  brush.vertex(bx, by - 10);
  brush.vertex(bx + 22, by);
  brush.vertex(bx, by + 9);
  brush.endShape(true);
  // green calyx under the tilted head
  brush.fill("#8fb685", 215);
  brush.fillBleed(0.05, "out");
  brush.circle(bx, by + 16, 8, true);
}
