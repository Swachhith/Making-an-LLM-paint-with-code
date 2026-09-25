async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  brush.noStroke();

  // warm light: peach-gold glow over the whole sheet
  brush.fill("#f2c98a", 90);
  brush.fillBleed(0.7, "out");
  brush.fillTexture(0.7, 0.2);
  brush.beginShape(1);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#f7dca8", 120);
  brush.fillBleed(0.5, "out");
  brush.circle(420, 150, 150, true);

  // standards: two big upright petals, top of canvas
  let std = [
    [[300, 290], [180, 200], [170, 60], [260, 20], [305, 150]],
    [[300, 290], [420, 200], [440, 70], [350, 15], [300, 150]],
  ];
  for (let s of std) {
    let tones = [["#9fb1d8", 120, 0.5], ["#6d86c2", 180, 0.3], ["#4a63a8", 220, 0.12]];
    for (let t = 0; t < 3; t++) {
      let k = [1, 0.85, 0.6][t];
      brush.fill(tones[t][0], tones[t][1]);
      brush.fillBleed(tones[t][2], "out");
      brush.fillTexture(0.6, 0.45);
      brush.beginShape(0.95);
      for (let v of s) brush.vertex(300 + (v[0] - 300) * k, 290 + (v[1] - 290) * k);
      brush.endShape(true);
    }
  }

  // falls: three drooping petals spilling to the edges
  let falls = [
    [[300, 300], [120, 290], [10, 400], [60, 560], [200, 470]],
    [[300, 300], [480, 290], [595, 400], [545, 560], [400, 470]],
    [[300, 300], [220, 420], [230, 590], [370, 595], [380, 420]],
  ];
  for (let f of falls) {
    let tones = [["#8aa0d2", 130, 0.55], ["#4f6bb5", 190, 0.35], ["#2f4a92", 230, 0.18]];
    for (let t = 0; t < 3; t++) {
      let k = [1, 0.82, 0.55][t];
      brush.fill(tones[t][0], tones[t][1]);
      brush.fillBleed(tones[t][2], "out");
      brush.fillTexture(0.6, 0.5);
      brush.beginShape(0.95);
      for (let v of f) brush.vertex(300 + (v[0] - 300) * k, 300 + (v[1] - 300) * k);
      brush.endShape(true);
    }
    // gold signal patch running out along each fall
    let tip = f[3];
    let mx = 300 + (tip[0] - 300) * 0.45, my = 300 + (tip[1] - 300) * 0.45;
    brush.fill("#f2b93c", 200);
    brush.fillBleed(0.35, "out");
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.9);
    brush.vertex(300, 300); brush.vertex(mx - 25, my); brush.vertex(300 + (tip[0] - 300) * 0.6, 300 + (tip[1] - 300) * 0.6); brush.vertex(mx + 25, my);
    brush.endShape(true);
    brush.fill("#d4891a", 210);
    brush.fillBleed(0.1, "out");
    brush.beginShape(0.6);
    brush.vertex(300, 300); brush.vertex(mx - 6, my); brush.vertex(300 + (tip[0] - 300) * 0.5, 300 + (tip[1] - 300) * 0.5); brush.vertex(mx + 6, my);
    brush.endShape(true);
  }
  brush.fill("#f4d27a", 235);
  brush.fillBleed(0.25, "out");
  brush.circle(300, 298, 25, true);
}
