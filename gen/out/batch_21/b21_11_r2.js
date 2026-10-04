async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#edf2f1");
  randomSeed(1111);
  brush.noStroke();

  // an upright strip of lake, deckle-edged, with wide margins of paper
  brush.fill("#cfdfe6", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.3);
  brush.vertex(170, 16); brush.vertex(430, 20); brush.vertex(436, 584); brush.vertex(166, 580);
  brush.endShape(true);
  // far shore: blue hills and a band of dark conifers
  brush.fill("#a4b6c8", 185);
  brush.fillBleed(0.28);
  brush.beginShape(0.7);
  brush.vertex(170, 90); brush.vertex(240, 60); brush.vertex(320, 78); brush.vertex(400, 54); brush.vertex(432, 66); brush.vertex(432, 110); brush.vertex(170, 110);
  brush.endShape(true);
  brush.fill("#5f7e76", 210);
  brush.fillBleed(0.22);
  brush.fillTexture(0.5, 0.45);
  brush.beginShape(0.5);
  brush.vertex(170, 110); brush.vertex(200, 96); brush.vertex(230, 104); brush.vertex(270, 90); brush.vertex(310, 104); brush.vertex(360, 92); brush.vertex(432, 104); brush.vertex(432, 124); brush.vertex(170, 126);
  brush.endShape(true);
  // its long vertical reflection, broken
  brush.fill("#7f9c98", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(170, 126); brush.vertex(432, 124); brush.vertex(432, 170); brush.vertex(360, 186); brush.vertex(310, 168); brush.vertex(250, 190); brush.vertex(170, 172);
  brush.endShape(true);
  // water: sky-coloured, deepening down, still
  brush.fill("#a8c2d0", 175);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(168, 220); brush.vertex(434, 212); brush.vertex(436, 584); brush.vertex(166, 580);
  brush.endShape(true);
  brush.fill("#7c9fb6", 180);
  brush.beginShape(0.6);
  brush.vertex(166, 380); brush.vertex(436, 360); brush.vertex(436, 584); brush.vertex(166, 580);
  brush.endShape(true);

  // a single rowing boat far out
  brush.fill("#6a4e3e", 225);
  brush.fillBleed(0.15);
  brush.beginShape(0.5);
  brush.vertex(290, 250); brush.vertex(336, 250); brush.vertex(326, 262); brush.vertex(298, 262);
  brush.endShape(true);
  brush.fill("#8aa4b4", 160);
  brush.beginShape(0.5);
  brush.vertex(298, 264); brush.vertex(326, 264); brush.vertex(322, 280); brush.vertex(302, 280);
  brush.endShape(true);

  // reeds: two clumps rooted at the bottom corners, blades fanning upward,
  // rising well above the water toward the top of the strip
  let clumps = [[200, 1, 12], [410, -1, 10]];
  for (let c of clumps) {
    let [cx, dir, n] = c;
    for (let i = 0; i < n; i++) {
      let fan = (i / (n - 1) - 0.5) * 140 + dir * 30;
      let top = random(90, 360);
      let x0 = cx + random(-20, 20);
      let x1 = x0 + fan;
      brush.fill(random(["#58765a", "#728a58", "#445e4c", "#8b9a62"]), random(200, 235));
      brush.fillBleed(0.15);
      brush.fillTexture(0.45, 0.4);
      brush.beginShape(0.3);
      brush.vertex(x0 - 9, 586);
      brush.vertex(lerp(x0, x1, 0.45) - 5, lerp(586, top, 0.55));
      brush.vertex(x1, top);
      brush.vertex(lerp(x0, x1, 0.5) + 5, lerp(586, top, 0.5));
      brush.vertex(x0 + 9, 586);
      brush.endShape(true);
    }
  }
  // cattails on a few of the tallest
  let heads = [[176, 140], [246, 200], [392, 120], [446, 210]];
  for (let h of heads) {
    brush.fill("#6b4630", 235);
    brush.fillBleed(0.12);
    brush.beginShape(0.8);
    brush.vertex(h[0] - 8, h[1]); brush.vertex(h[0] + 8, h[1] - 2); brush.vertex(h[0] + 9, h[1] + 42); brush.vertex(h[0] - 7, h[1] + 44);
    brush.endShape(true);
  }
  // reflections of the reed clumps in the dark water at the base
  brush.fill("#4e6e6a", 175);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(166, 560); brush.vertex(280, 552); brush.vertex(330, 570); brush.vertex(436, 556); brush.vertex(436, 584); brush.vertex(166, 580);
  brush.endShape(true);
}
