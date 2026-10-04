async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef4ec");
  randomSeed(1810);
  brush.noStroke();

  // misty sky and a distant peak high in the frame
  brush.fill("#9cc6d0", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 110); brush.vertex(0, 120);
  brush.endShape(true);
  brush.fill("#5f8f8a", 190);
  brush.beginShape(0.6);
  brush.vertex(170, 110); brush.vertex(300, 30); brush.vertex(430, 110); brush.vertex(430, 130); brush.vertex(170, 130);
  brush.endShape(true);

  // a steep ridge running straight down the canvas; terraces are arcs that wrap it,
  // widening as they come toward the viewer
  let greens = ["#2e9a2a", "#6cc81e", "#1f7a32", "#8ad61a", "#3fae3a"];
  let rows = 15;
  for (let k = 0; k < rows; k++) {
    let t = k / (rows - 1);
    let y = 110 + t * t * 470 + t * 20;
    let h = 14 + t * 34;
    let half = 90 + t * 330;
    let dip = 18 + t * 55;
    brush.fill(greens[k % 5], 215);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.9);
    brush.vertex(300 - half, y + dip);
    brush.vertex(300 - half * 0.5, y + dip * 0.35);
    brush.vertex(300, y);
    brush.vertex(300 + half * 0.5, y + dip * 0.35);
    brush.vertex(300 + half, y + dip);
    brush.vertex(300 + half, y + dip + h);
    brush.vertex(300 + half * 0.5, y + dip * 0.35 + h);
    brush.vertex(300, y + h);
    brush.vertex(300 - half * 0.5, y + dip * 0.35 + h);
    brush.vertex(300 - half, y + dip + h);
    brush.endShape(true);
    // shadowed bund
    let b = 5 + t * 8;
    brush.fill("#164a22", 225);
    brush.fillBleed(0.2);
    brush.beginShape(0.9);
    brush.vertex(300 - half, y + dip + h - 2);
    brush.vertex(300, y + h - 2);
    brush.vertex(300 + half, y + dip + h - 2);
    brush.vertex(300 + half, y + dip + h + b + 6);
    brush.vertex(300, y + h + b + 6);
    brush.vertex(300 - half, y + dip + h + b + 6);
    brush.endShape(true);
  }
  // tall dark trees framing the left edge, emphasising the height
  brush.fill("#0e3a24", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(0, 60); brush.vertex(40, 40); brush.vertex(80, 180); brush.vertex(70, 360); brush.vertex(95, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#1f5a2c", 200);
  brush.circle(40, 150, 55, 0.6);
  brush.circle(60, 300, 50, 0.6);
  // small farmer's hut on a mid terrace
  brush.fill("#8a4a1e", 225);
  brush.beginShape(0.2);
  brush.vertex(372, 230); brush.vertex(398, 212); brush.vertex(424, 230); brush.vertex(416, 248); brush.vertex(380, 248);
  brush.endShape(true);
}
