async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4e8d6");
  brush.noStroke();
  // hazy dusk sky: rose to ochre
  brush.fill("#d9a88a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(-10, -10);
  brush.vertex(610, -10);
  brush.vertex(610, 120);
  brush.vertex(-10, 130);
  brush.endShape(true);
  brush.fill("#e3c08c", 170);
  brush.beginShape(1);
  brush.vertex(-10, 110);
  brush.vertex(610, 100);
  brush.vertex(610, 230);
  brush.vertex(-10, 230);
  brush.endShape(true);
  // a series of crescent dunes, each lit face then shadow face, receding
  let dunes = [
    [200, 230, "#c9a07a", "#8a6a5a", 0.6],
    [270, 260, "#cf9a62", "#8e5e44", 0.8],
    [350, 290, "#d8a060", "#94583a", 1.0],
    [450, 320, "#dfa45c", "#9a5634", 1.2]
  ];
  for (let d of dunes) {
    let y = d[0], crest = d[1], s = d[4];
    // lit base band
    brush.fill(d[2], 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(1);
    brush.vertex(-10, y + 10);
    brush.vertex(crest - 150 * s, y - 20 * s);
    brush.vertex(crest, y - 40 * s);
    brush.vertex(crest + 200 * s, y - 10 * s);
    brush.vertex(610, y + 10);
    brush.vertex(610, y + 90 * s);
    brush.vertex(-10, y + 90 * s);
    brush.endShape(true);
    // shadow side falling from the sharp crest
    brush.fill(d[3], 200);
    brush.fillBleed(0.22);
    brush.beginShape(1);
    brush.vertex(crest, y - 40 * s);
    brush.vertex(crest + 200 * s, y - 10 * s);
    brush.vertex(crest + 150 * s, y + 30 * s);
    brush.vertex(crest + 20 * s, y + 20 * s);
    brush.endShape(true);
  }
  // a line of footprints/track curving from foreground to the far crest
  let pts = [[200, 610], [240, 540], [300, 480], [330, 420], [320, 360], [300, 310], [290, 262], [292, 222]];
  for (let i = 0; i < pts.length - 1; i++) {
    let w = 34 - i * 4;
    let p = pts[i], q = pts[i + 1];
    brush.fill("#7a5238", 190);
    brush.fillBleed(0.25);
    brush.beginShape(1);
    brush.vertex(p[0] - w, p[1]);
    brush.vertex(q[0] - w * 0.8, q[1]);
    brush.vertex(q[0] + w * 0.8, q[1]);
    brush.vertex(p[0] + w, p[1]);
    brush.endShape(true);
  }
  // small caravan dots near the far crest
  for (let i = 0; i < 4; i++) {
    brush.fill("#3e2a22", 220);
    brush.fillBleed(0.1);
    brush.circle(296 + i * 12, 214 - i * 2, 3.5, 0.3);
  }
}
