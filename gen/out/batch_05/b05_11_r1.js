async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eceff1");
  randomSeed(1111);
  brush.noStroke();
  // big serrated leaves under both heads
  let leaves = [[210, 400, 140], [320, 430, 40], [450, 360, 75]];
  for (let L of leaves) {
    brush.fill("#5f8f80", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(L[0], L[1]);
    for (let k = 1; k <= 5; k++) {
      let d = k * 30;
      brush.vertex(L[0] + d * cos(L[2] - 30 + k * 3), L[1] + d * sin(L[2] - 30 + k * 3));
    }
    brush.vertex(L[0] + 180 * cos(L[2]), L[1] + 180 * sin(L[2]));
    for (let k = 5; k >= 1; k--) {
      let d = k * 30;
      brush.vertex(L[0] + d * cos(L[2] + 30 - k * 3), L[1] + d * sin(L[2] + 30 - k * 3));
    }
    brush.endShape(true);
    brush.fill("#3f6f62", 180);
    brush.fillBleed(0.1);
    brush.beginShape(0.6);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + 170 * cos(L[2]), L[1] + 170 * sin(L[2]));
    brush.vertex(L[0] + 90 * cos(L[2] + 14), L[1] + 90 * sin(L[2] + 14));
    brush.endShape(true);
  }
  // open mophead: loose cool lilac washes, shadowed on the lower right
  brush.fill("#b4acdf", 195);
  brush.fillBleed(0.45);
  brush.fillTexture(0.55, 0.4);
  brush.circle(230, 265, 140, true);
  brush.fill("#9a90d2", 185);
  brush.fillBleed(0.3);
  brush.circle(270, 305, 90, true);
  // florets as clustered four-lobed marks, brighter on top
  for (let i = 0; i < 55; i++) {
    let a = random(360), r = 130 * sqrt(random());
    let x = 230 + r * cos(a), y = 265 + r * sin(a);
    let s = random(9, 14);
    brush.fill(y < 250 ? "#c9bff0" : "#7d70bf", 195);
    brush.fillBleed(0.08);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.6);
    brush.vertex(x - s, y); brush.vertex(x - 2, y - 2); brush.vertex(x, y - s); brush.vertex(x + 2, y - 2);
    brush.vertex(x + s, y); brush.vertex(x + 2, y + 2); brush.vertex(x, y + s); brush.vertex(x - 2, y + 2);
    brush.endShape(true);
  }
  // stem to bud
  brush.fill("#4f7d66", 215);
  brush.fillBleed(0.05);
  brush.beginShape(0.5);
  brush.vertex(455, 280); brush.vertex(466, 282); brush.vertex(425, 470); brush.vertex(414, 468);
  brush.endShape(true);
  // closed bud: tight green cluster just turning lilac
  brush.fill("#98bf93", 205);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(460, 230, 55, true);
  for (let i = 0; i < 40; i++) {
    let a = random(360), r = 45 * sqrt(random());
    brush.fill(random() < 0.35 ? "#a497d4" : "#6f9f7a", 205);
    brush.fillBleed(0.08);
    brush.circle(460 + r * cos(a), 230 + r * sin(a), random(5, 9), true);
  }
}
