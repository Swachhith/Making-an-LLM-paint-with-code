async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf2e6");
  brush.noStroke();

  // soft peach glow behind the flower only
  brush.fill("#f4cfae", 150);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.5);
  brush.circle(420, 200, 150, 0.8);

  let ox = 420, oy = 200;

  // arching stem down to lower right, broad
  brush.fill("#8a9450", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(ox + 20, oy + 60);
  brush.vertex(ox + 90, oy + 110);
  brush.vertex(ox + 120, oy + 260);
  brush.vertex(ox + 105, oy + 400);
  brush.vertex(ox + 85, oy + 400);
  brush.vertex(ox + 98, oy + 260);
  brush.vertex(ox + 70, oy + 125);
  brush.vertex(ox + 10, oy + 80);
  brush.endShape(true);

  // dorsal and lateral sepals: long, pale orchid
  let sep = [[-95, 150], [145, 140], [35, 140]];
  for (let s of sep) {
    let a = s[0], L = s[1];
    brush.fill("#d49ad8", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.8);
    brush.vertex(ox, oy);
    brush.vertex(ox + cos(a - 22) * L * 0.55, oy + sin(a - 22) * L * 0.55);
    brush.vertex(ox + cos(a) * L, oy + sin(a) * L);
    brush.vertex(ox + cos(a + 22) * L * 0.55, oy + sin(a + 22) * L * 0.55);
    brush.endShape(true);
  }
  // broad rounded petals, left and right
  for (let a of [-160, -20]) {
    let L = 140;
    brush.fill("#c070c4", 205);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.9);
    brush.vertex(ox, oy);
    brush.vertex(ox + cos(a - 40) * L * 0.75, oy + sin(a - 40) * L * 0.75);
    brush.vertex(ox + cos(a - 12) * L, oy + sin(a - 12) * L);
    brush.vertex(ox + cos(a + 15) * L * 0.95, oy + sin(a + 15) * L * 0.95);
    brush.vertex(ox + cos(a + 40) * L * 0.6, oy + sin(a + 40) * L * 0.6);
    brush.endShape(true);
    // veined deeper centre
    brush.fill("#9a3a9e", 180);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.8);
    brush.vertex(ox, oy);
    brush.vertex(ox + cos(a - 18) * L * 0.55, oy + sin(a - 18) * L * 0.55);
    brush.vertex(ox + cos(a) * L * 0.7, oy + sin(a) * L * 0.7);
    brush.vertex(ox + cos(a + 18) * L * 0.55, oy + sin(a + 18) * L * 0.55);
    brush.endShape(true);
  }
  // ruffled lip
  brush.fill("#8a2a86", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(ox - 22, oy + 5);
  brush.vertex(ox - 50, oy + 55);
  brush.vertex(ox - 30, oy + 100);
  brush.vertex(ox, oy + 90);
  brush.vertex(ox + 30, oy + 100);
  brush.vertex(ox + 50, oy + 55);
  brush.vertex(ox + 22, oy + 5);
  brush.endShape(true);
  brush.fill("#5e1a60", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(ox, oy + 50, 22, 0.6);
  // golden throat
  brush.fill("#e8a634", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(ox, oy + 14, 12, 0.4);

  // bud
  brush.fill("#d08ad0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(ox + 100, oy + 150, 18, 0.4);
}
