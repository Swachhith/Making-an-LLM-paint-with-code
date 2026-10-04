async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ebe4d8");
  randomSeed(303);
  brush.noStroke();

  // strip of blush dawn sky
  brush.fill("#d9ad98", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 140); brush.vertex(-20, 150);
  brush.endShape(true);
  brush.fill("#efd09c", 200);
  brush.fillBleed(0.3);
  brush.circle(460, 134, 50, 0.2);

  // treeline, almost dissolved
  brush.fill("#8a827a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.55);
  brush.beginShape(0.9);
  brush.vertex(-20, 150); brush.vertex(50, 128); brush.vertex(120, 144); brush.vertex(190, 122); brush.vertex(260, 146); brush.vertex(340, 140); brush.vertex(620, 150); brush.vertex(620, 172); brush.vertex(-20, 176);
  brush.endShape(true);

  // the meadow as big soft patches: mist is the paper left between them
  let patches = [
    [40, 250, 180, 50, "#a79d74"], [330, 230, 220, 44, "#b0a67e"],
    [160, 330, 260, 60, "#958c5e"], [500, 350, 160, 50, "#8f8758"],
    [60, 430, 240, 70, "#7c7650"], [380, 450, 260, 70, "#7a7248"]
  ];
  for (let p of patches) {
    let [x, y, w, h, c] = p;
    brush.fill(c, 185);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(x - w * 0.6, y); brush.vertex(x - w * 0.2, y - h * 0.5); brush.vertex(x + w * 0.4, y - h * 0.4); brush.vertex(x + w * 0.6, y + h * 0.1); brush.vertex(x + w * 0.2, y + h * 0.5); brush.vertex(x - w * 0.4, y + h * 0.4);
    brush.endShape(true);
  }
  // near ground, fuller
  brush.fill("#6a6440", 200);
  brush.fillBleed(0.28);
  brush.fillTexture(0.5, 0.45);
  brush.beginShape(0.6);
  brush.vertex(-20, 510); brush.vertex(200, 490); brush.vertex(420, 505); brush.vertex(620, 488); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // two misty trees mid-left, low contrast
  brush.fill("#716a5e", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.55);
  brush.circle(130, 214, 38, 0.7);
  brush.fill("#5d574c", 190);
  brush.circle(136, 222, 24, 0.6);
  brush.beginShape(0.2);
  brush.vertex(128, 240); brush.vertex(144, 240); brush.vertex(146, 276); brush.vertex(126, 276);
  brush.endShape(true);
  brush.fill("#827b6e", 160);
  brush.circle(186, 236, 22, 0.7);

  // a grazing horse, small and dark, gives scale
  brush.fill("#5a4232", 215);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(380, 330); brush.vertex(426, 326); brush.vertex(430, 344); brush.vertex(382, 346);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(380, 332); brush.vertex(364, 352); brush.vertex(372, 356); brush.vertex(390, 340);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(384, 342); brush.vertex(392, 342); brush.vertex(392, 364); brush.vertex(384, 364);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(418, 342); brush.vertex(426, 342); brush.vertex(426, 364); brush.vertex(418, 364);
  brush.endShape(true);

  // tall seeded grasses in the foreground, loose bent blades
  for (let i = 0; i < 16; i++) {
    let x = random(-10, 610);
    let top = random(470, 540);
    let lean = random(-24, 24);
    brush.fill(random(["#7a5836", "#5a5436", "#8c6a44"]), random(195, 230));
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.6);
    brush.vertex(x - 10, 615); brush.vertex(x - 2 + lean * 0.5, (615 + top) / 2); brush.vertex(x + lean, top); brush.vertex(x + 6 + lean * 0.5, (615 + top) / 2); brush.vertex(x + 10, 615);
    brush.endShape(true);
  }
  for (let i = 0; i < 12; i++) {
    brush.fill("#a07a4a", 210);
    brush.fillBleed(0.2);
    brush.circle(random(0, 600), random(500, 560), random(3, 6), 0.5);
  }
}
