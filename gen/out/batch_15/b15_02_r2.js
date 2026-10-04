async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe4d0");
  brush.noStroke();

  // pale dusty sky; a low haze band warms the horizon
  brush.fill("#a8a6a0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.8);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 120);
  brush.vertex(0, 140);
  brush.endShape(true);
  brush.fill("#dcae80", 170);
  brush.beginShape(0.8);
  brush.vertex(0, 120);
  brush.vertex(600, 110);
  brush.vertex(600, 210);
  brush.vertex(0, 215);
  brush.endShape(true);

  // three rows of dunes, each with a crisp crest: lit face ochre, shadow face umber
  let rows = [
    { crest: [[0, 215], [90, 190], [200, 205], [300, 180], [420, 200], [520, 185], [600, 200]], lit: "#c89060", sh: "#8a6050", base: 250, op: 170 },
    { crest: [[0, 290], [140, 230], [260, 275], [400, 225], [600, 270]], lit: "#c07840", sh: "#6a4034", base: 360, op: 200 },
    { crest: [[0, 400], [110, 330], [300, 390], [470, 320], [600, 360]], lit: "#cf8a48", sh: "#5a3428", base: 520, op: 215 },
  ];
  for (let r of rows) {
    brush.fill(r.lit, r.op);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.45);
    brush.beginShape(0.35);
    for (let p of r.crest) brush.vertex(p[0], p[1]);
    brush.vertex(600, r.base);
    brush.vertex(0, r.base);
    brush.endShape(true);
    // shadow on the lee side of each summit (right of every local peak)
    for (let i = 1; i < r.crest.length - 1; i++) {
      let p = r.crest[i];
      if (p[1] < r.crest[i - 1][1] && p[1] < r.crest[i + 1][1]) {
        let n = r.crest[i + 1];
        for (let pass = 0; pass < 2; pass++) {
          brush.fill(r.sh, r.op - pass * 30);
          brush.fillBleed(0.18);
          brush.fillTexture(0.45, 0.4);
          brush.beginShape(0.3);
          brush.vertex(p[0], p[1]);
          brush.vertex(n[0], n[1]);
          brush.vertex(n[0] - 20, r.base - 10);
          brush.vertex(p[0] + 30 + pass * 15, r.base - 20);
          brush.endShape(true);
        }
      }
    }
  }

  // foreground sand with rippled bands
  brush.fill("#d8a868", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 470);
  brush.vertex(300, 450);
  brush.vertex(600, 480);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);
  for (let y = 500; y < 600; y += 28) {
    brush.fill("#a87848", 130);
    brush.fillBleed(0.25);
    brush.beginShape(0.7);
    brush.vertex(0, y);
    brush.vertex(300, y - 12);
    brush.vertex(600, y + 4);
    brush.vertex(600, y + 16);
    brush.vertex(300, y + 2);
    brush.vertex(0, y + 16);
    brush.endShape(true);
  }

  // a dry wadi winding back to the horizon, grey-green and dark, widening toward us
  let wadiL = [[292, 205], [270, 250], [320, 300], [250, 380], [300, 460], [200, 600]];
  let wadiR = [[300, 205], [284, 250], [345, 300], [285, 380], [360, 460], [330, 600]];
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(pass ? "#4a4438" : "#6e6a5a", pass ? 170 : 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.8);
    for (let p of wadiL) brush.vertex(p[0] + pass * 8, p[1]);
    for (let i = wadiR.length - 1; i >= 0; i--) brush.vertex(wadiR[i][0] - pass * 8, wadiR[i][1]);
    brush.endShape(true);
  }

  // tiny caravan on the far crest
  brush.fill("#3a2820", 235);
  brush.fillBleed(0.08);
  for (let i = 0; i < 4; i++) {
    let x = 400 + i * 16, y = 223 + i * 1.5;
    brush.circle(x, y, 5, 0.3);
    brush.circle(x + 6, y - 5, 2.5, 0.2);
  }
}
