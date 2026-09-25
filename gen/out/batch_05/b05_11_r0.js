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
  let leaves = [[200, 420, 150], [330, 440, 30], [440, 360, 70]];
  for (let L of leaves) {
    brush.fill("#6f9a8a", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(L[0], L[1]);
    for (let k = 1; k <= 5; k++) {
      let d = k * 28;
      brush.vertex(L[0] + d * cos(L[2] - 30 + k * 3), L[1] + d * sin(L[2] - 30 + k * 3));
    }
    brush.vertex(L[0] + 170 * cos(L[2]), L[1] + 170 * sin(L[2]));
    for (let k = 5; k >= 1; k--) {
      let d = k * 28;
      brush.vertex(L[0] + d * cos(L[2] + 30 - k * 3), L[1] + d * sin(L[2] + 30 - k * 3));
    }
    brush.endShape(true);
  }
  // open mophead: three broad loose washes, cool lilac to periwinkle
  brush.fill("#b7b3e0", 175);
  brush.fillBleed(0.45);
  brush.fillTexture(0.55, 0.4);
  brush.circle(230, 270, 140, true);
  brush.fill("#a79ed8", 180);
  brush.fillBleed(0.35);
  brush.circle(205, 250, 95, true);
  brush.fill("#c4b6e6", 170);
  brush.fillBleed(0.3);
  brush.circle(270, 300, 80, true);
  // suggestion of individual florets as scattered darker notches
  for (let i = 0; i < 26; i++) {
    let a = random(360), r = random(20, 125);
    let x = 230 + r * cos(a), y = 270 + r * sin(a);
    brush.fill("#7f73c0", 175);
    brush.fillBleed(0.1);
    brush.beginShape(0.5);
    brush.vertex(x - 6, y); brush.vertex(x, y - 6); brush.vertex(x + 6, y); brush.vertex(x, y + 6);
    brush.endShape(true);
  }
  // closed bud: tight green cluster washed with a first hint of lilac
  brush.fill("#a9c9a4", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(460, 230, 55, true);
  for (let i = 0; i < 30; i++) {
    let a = random(360), r = random(0, 45);
    brush.fill(random() < 0.4 ? "#b5a9d9" : "#88b392", 190);
    brush.fillBleed(0.08);
    brush.circle(460 + r * cos(a), 230 + r * sin(a), random(5, 9), true);
  }
  // stem to bud
  brush.fill("#5f8a73", 205);
  brush.fillBleed(0.05);
  brush.beginShape(0.5);
  brush.vertex(455, 280); brush.vertex(465, 282); brush.vertex(420, 470); brush.vertex(410, 468);
  brush.endShape(true);
}
