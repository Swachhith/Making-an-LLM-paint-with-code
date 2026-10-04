async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eee7d8");
  randomSeed(2644);
  brush.noStroke();

  // narrow sky
  brush.fill("#a8aeae", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 110); brush.vertex(-20, 115);
  brush.endShape(true);
  // far blue-grey ridge
  brush.fill("#848678", 180);
  brush.beginShape(0.7);
  brush.vertex(-20, 112); brush.vertex(80, 78); brush.vertex(200, 100); brush.vertex(320, 64);
  brush.vertex(460, 96); brush.vertex(620, 72); brush.vertex(620, 150); brush.vertex(-20, 155);
  brush.endShape(true);

  // valley floor: one big warm wash
  brush.fill("#a8955e", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 140); brush.vertex(620, 135); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // irregular fields as tilted quads, bigger toward the viewer
  let cols = ["#7e7a46", "#9c7042", "#6a6a3a", "#b49a62", "#857040"];
  for (let i = 0; i < 22; i++) {
    let y = random(150, 600);
    let s = map(y, 150, 600, 0.35, 1.3);
    let x = random(-40, 600);
    let w = random(90, 160) * s, h = random(40, 70) * s;
    let tilt = random(-20, 20) * s;
    brush.fill(cols[i % 5], 150 + random(0, 50));
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(x, y + tilt); brush.vertex(x + w, y); brush.vertex(x + w + 10 * s, y + h); brush.vertex(x + 8 * s, y + h + tilt);
    brush.endShape(true);
  }

  // river, painted after the fields so it cuts through them
  let pts = [[330, 135], [300, 170], [370, 215], [250, 280], [380, 360], [220, 450], [320, 620]];
  brush.fill("#7f98a4", 215);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  for (let i = 0; i < pts.length; i++) brush.vertex(pts[i][0] - (4 + i * i * 2.5), pts[i][1]);
  for (let i = pts.length - 1; i >= 0; i--) brush.vertex(pts[i][0] + (4 + i * i * 2.5), pts[i][1]);
  brush.endShape(true);
  brush.fill("#5c7a88", 190);
  brush.beginShape(0.9);
  for (let i = 1; i < pts.length; i++) brush.vertex(pts[i][0] - (2 + i * i * 1.2), pts[i][1] + 6);
  for (let i = pts.length - 1; i >= 1; i--) brush.vertex(pts[i][0] + (2 + i * i * 0.4), pts[i][1] + 6);
  brush.endShape(true);

  // hedgerow trees trailing the banks
  brush.fill("#434a2a", 210);
  for (let i = 1; i < pts.length; i++) {
    let w = 4 + i * i * 2.5;
    let n = 2 + i;
    for (let k = 0; k < n; k++) {
      brush.circle(pts[i][0] - w - 8 - random(0, 20), pts[i][1] + random(-20, 20), 4 + i * 1.6, true);
    }
  }
}
