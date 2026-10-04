async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e4d6c2");
  randomSeed(1311);
  brush.noStroke();
  let hz = 395;

  // dusk sky, three muted bands
  let bands = [["#665c7a", -10, 160], ["#a88088", 120, 300], ["#cf9a66", 260, hz + 10]];
  for (let b of bands) {
    brush.fill(b[0], 205);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(-10, b[1]); brush.vertex(610, b[1] - 12); brush.vertex(610, b[2]); brush.vertex(-10, b[2] + 8);
    brush.endShape(true);
  }
  brush.fill("#eec07c", 210);
  brush.fillBleed(0.25);
  brush.circle(150, hz - 22, 24, 0.2);

  // field
  brush.fill("#86704a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-10, hz); brush.vertex(610, hz - 4); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#a58a58", 170);
  brush.beginShape(0.8);
  brush.vertex(-10, 425); brush.vertex(400, 415); brush.vertex(610, 435); brush.vertex(610, 470); brush.vertex(-10, 462);
  brush.endShape(true);
  brush.fill("#54422e", 195);
  brush.beginShape(0.8);
  brush.vertex(-10, 525); brush.vertex(300, 508); brush.vertex(610, 528); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);

  // baobab: very fat trunk that stays wide to the top, then a flat wide crown of stubby limbs
  let bx = 390, by = hz + 8, tw = 44, th = 100;
  let trunk = [[bx - tw, by], [bx - tw - 6, by - 40], [bx - tw + 4, by - th], [bx + tw - 4, by - th], [bx + tw + 6, by - 40], [bx + tw, by]];
  for (let p = 0; p < 3; p++) {
    brush.fill(p == 0 ? "#5e4a3e" : "#33241e", 225);
    brush.fillBleed(0.14);
    brush.fillTexture(0.35, 0.3);
    brush.beginShape(0.5);
    for (let v of trunk) brush.vertex(v[0] + (p == 2 ? tw * 0.4 : 0) * (v[0] < bx ? 1 : 0), v[1]);
    brush.endShape(true);
  }
  // crown: limbs radiating upward and outward in a flat fan
  let limbs = [[-170, 110], [-150, 95], [-128, 80], [-108, 65], [-88, 60], [-68, 70], [-48, 85], [-28, 100], [-10, 110]];
  for (let l of limbs) {
    let [a, r] = l;
    let x0 = bx + cos(a) * 28, y0 = by - th + 4;
    let x1 = bx + cos(a) * r, y1 = by - th - 10 + sin(a) * r * 0.5;
    brush.fill("#2e201c", 225);
    brush.fillBleed(0.14);
    brush.fillTexture(0.35, 0.3);
    brush.beginShape(0.2);
    brush.vertex(x0 - 9, y0); brush.vertex(x0 + 9, y0); brush.vertex(x1 + 5, y1); brush.vertex(x1 - 5, y1);
    brush.endShape(true);
    brush.circle(x1, y1 - 4, 8, 0.6);
  }
  // sparse dry leaves, olive smudges above the limbs
  for (let i = 0; i < 12; i++) {
    brush.fill("#4e4a30", 185);
    brush.fillBleed(0.25);
    brush.circle(bx + random(-110, 110), by - th - 40 + random(-15, 15), random(8, 14), 0.8);
  }
  // long shadow
  brush.fill("#3a2c20", 185);
  brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(bx - tw, by); brush.vertex(bx + tw, by); brush.vertex(bx + 190, by + 45); brush.vertex(bx + 80, by + 55);
  brush.endShape(true);
  // distant flat-topped acacias
  for (let x of [50, 110, 230, 545]) {
    brush.fill("#3a2e2c", 205);
    brush.fillBleed(0.18);
    brush.beginShape(0.6);
    brush.vertex(x - 24, hz - 18); brush.vertex(x + 24, hz - 20); brush.vertex(x + 14, hz - 8); brush.vertex(x - 14, hz - 8);
    brush.endShape(true);
  }
}
