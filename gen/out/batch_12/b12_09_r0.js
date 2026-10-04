async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9ecec");
  randomSeed(99);
  brush.noStroke();
  const H = 320;
  // misty sky
  brush.fill("#b9c6cc", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  let layers = [
    { c: "#a8b4bd", a: 170, pts: [[-20, 200], [110, 130], [200, 180], [310, 110], [430, 170], [520, 140], [620, 190]] },
    { c: "#8c9ea6", a: 180, pts: [[-20, 250], [90, 210], [170, 240], [260, 190], [380, 245], [480, 215], [620, 255]] },
    { c: "#728a88", a: 190, pts: [[-20, 300], [120, 280], [240, 300], [360, 275], [500, 298], [620, 290]] }
  ];
  for (let L of layers) {
    for (let m of [false, true]) {
      brush.fill(L.c, m ? L.a - 50 : L.a);
      brush.fillBleed(m ? 0.35 : 0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.5);
      brush.vertex(-20, H);
      for (let p of L.pts) brush.vertex(p[0], m ? 2 * H - p[1] : p[1]);
      brush.vertex(620, H);
      brush.endShape(true);
    }
  }
  // shoreline dark soft band
  brush.fill("#5f7572", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(-20, H - 8); brush.vertex(620, H - 6); brush.vertex(620, H + 8); brush.vertex(-20, H + 10);
  brush.endShape(true);
  // pale mist streaks across water (leave paper) -> subtle horizontal glazes
  for (let i = 0; i < 4; i++) {
    let y = H + 90 + i * 55;
    brush.fill("#9fb0b5", 120);
    brush.fillBleed(0.3);
    brush.beginShape(0.5);
    brush.vertex(-20, y); brush.vertex(620, y - 4); brush.vertex(620, y + 22); brush.vertex(-20, y + 24);
    brush.endShape(true);
  }
}
