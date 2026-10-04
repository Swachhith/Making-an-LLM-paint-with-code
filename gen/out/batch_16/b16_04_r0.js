async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1e4");
  brush.noStroke();

  // faint warm peach wash, only lower right corner, lots of paper elsewhere
  brush.fill("#f1c9a8", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(250, 620);
  brush.vertex(380, 380);
  brush.vertex(620, 300);
  brush.vertex(620, 620);
  brush.endShape(true);

  let ox = 190, oy = 210;

  // arching stem, wide soft band
  brush.fill("#7c8a4a", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(ox + 40, oy + 60);
  brush.vertex(ox + 140, oy + 80);
  brush.vertex(ox + 230, oy + 180);
  brush.vertex(ox + 260, oy + 390);
  brush.vertex(ox + 240, oy + 390);
  brush.vertex(ox + 210, oy + 190);
  brush.vertex(ox + 130, oy + 100);
  brush.vertex(ox + 40, oy + 80);
  brush.endShape(true);

  // two broad leaves at bottom
  brush.fill("#6a7e3c", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.7);
  brush.vertex(ox + 250, oy + 390);
  brush.vertex(ox + 120, oy + 350);
  brush.vertex(ox + 60, oy + 400);
  brush.vertex(ox + 180, oy + 410);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(ox + 250, oy + 390);
  brush.vertex(ox + 360, oy + 330);
  brush.vertex(ox + 410, oy + 370);
  brush.vertex(ox + 300, oy + 405);
  brush.endShape(true);

  // sepals: three narrow-ish outer petals
  let sep = [[-90, 110], [150, 100], [30, 100]];
  for (let s of sep) {
    let a = s[0], L = s[1];
    brush.fill("#c687c9", 180);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.7);
    brush.vertex(ox, oy);
    brush.vertex(ox + cos(a - 18) * L * 0.6, oy + sin(a - 18) * L * 0.6);
    brush.vertex(ox + cos(a) * L, oy + sin(a) * L);
    brush.vertex(ox + cos(a + 18) * L * 0.6, oy + sin(a + 18) * L * 0.6);
    brush.endShape(true);
  }
  // two broad side petals
  for (let a of [-160, -20]) {
    let L = 105;
    brush.fill("#b366b8", 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.8);
    brush.vertex(ox, oy);
    brush.vertex(ox + cos(a - 35) * L * 0.8, oy + sin(a - 35) * L * 0.8);
    brush.vertex(ox + cos(a) * L, oy + sin(a) * L);
    brush.vertex(ox + cos(a + 35) * L * 0.8, oy + sin(a + 35) * L * 0.8);
    brush.endShape(true);
    brush.fill("#9a3f9e", 170);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.8);
    brush.vertex(ox, oy);
    brush.vertex(ox + cos(a - 20) * L * 0.5, oy + sin(a - 20) * L * 0.5);
    brush.vertex(ox + cos(a) * L * 0.6, oy + sin(a) * L * 0.6);
    brush.vertex(ox + cos(a + 20) * L * 0.5, oy + sin(a + 20) * L * 0.5);
    brush.endShape(true);
  }
  // lip, deep magenta
  brush.fill("#7e2a7a", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(ox - 18, oy + 5);
  brush.vertex(ox - 34, oy + 50);
  brush.vertex(ox, oy + 78);
  brush.vertex(ox + 34, oy + 50);
  brush.vertex(ox + 18, oy + 5);
  brush.endShape(true);
  // golden throat
  brush.fill("#e0a33a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(ox, oy + 8, 10, 0.4);

  // two buds along the stem
  brush.fill("#c98ac8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(ox + 165, oy + 120, 16, 0.4);
  brush.circle(ox + 215, oy + 175, 12, 0.4);
}
