async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ebeff2");
  randomSeed(1112);
  brush.noStroke();
  // cool grey-blue shadow behind everything, low
  brush.fill("#cdd6e0", 160);
  brush.fillBleed(0.45);
  brush.fillTexture(0.5, 0.3);
  brush.circle(320, 380, 220, true);
  // big serrated leaves
  let leaves = [[210, 400, 140], [320, 430, 40], [450, 360, 75]];
  for (let L of leaves) {
    brush.fill("#5a8c7e", 215);
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
    brush.fill("#3a6a5e", 185);
    brush.fillBleed(0.1);
    brush.beginShape(0.6);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + 170 * cos(L[2]), L[1] + 170 * sin(L[2]));
    brush.vertex(L[0] + 90 * cos(L[2] + 14), L[1] + 90 * sin(L[2] + 14));
    brush.endShape(true);
  }
  // open mophead: a loose lilac underwash
  brush.fill("#b8b0e2", 175);
  brush.fillBleed(0.45);
  brush.fillTexture(0.55, 0.4);
  brush.circle(230, 265, 135, true);
  // florets as distinct four-petalled blossoms, lighter on top, cooler and darker below
  for (let i = 0; i < 42; i++) {
    let a = random(360), r = 120 * sqrt(random());
    let x = 230 + r * cos(a), y = 265 + r * sin(a);
    let s = random(20, 27);
    let rot = random(90);
    let c = y < 245 ? random(["#c3b8ee", "#b7c3ef"]) : random(["#8e80cc", "#7f86cc", "#a08ad0"]);
    for (let k = 0; k < 4; k++) {
      let ang = rot + k * 90;
      brush.fill(c, 205);
      brush.fillBleed(0.12);
      brush.fillTexture(0.4, 0.5);
      brush.beginShape(0.7);
      brush.vertex(x, y);
      brush.vertex(x + s * 0.7 * cos(ang - 22), y + s * 0.7 * sin(ang - 22));
      brush.vertex(x + s * cos(ang), y + s * sin(ang));
      brush.vertex(x + s * 0.7 * cos(ang + 22), y + s * 0.7 * sin(ang + 22));
      brush.endShape(true);
    }
    brush.fill("#e9e4f6", 200);
    brush.fillBleed(0.05);
    brush.circle(x, y, 3, true);
  }
  // stem to bud
  brush.fill("#4a7862", 220);
  brush.fillBleed(0.05);
  brush.beginShape(0.5);
  brush.vertex(455, 280); brush.vertex(466, 282); brush.vertex(425, 470); brush.vertex(414, 468);
  brush.endShape(true);
  // closed bud: tight green cluster just turning lilac
  brush.fill("#92bb8e", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(460, 230, 55, true);
  for (let i = 0; i < 45; i++) {
    let a = random(360), r = 45 * sqrt(random());
    brush.fill(random() < 0.35 ? "#9f92d2" : "#5f956d", 210);
    brush.fillBleed(0.08);
    brush.circle(460 + r * cos(a), 230 + r * sin(a), random(5, 9), true);
  }
}
