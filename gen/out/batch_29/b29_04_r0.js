async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1a1a28");
  brush.noStroke();
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#e8602a", 200);
  brush.beginShape(0.6);
  brush.vertex(0, 80); brush.vertex(600, 80); brush.vertex(600, 400); brush.vertex(0, 400);
  brush.endShape(true);
  brush.fill("#f8b048", 200);
  brush.beginShape(0.6);
  brush.vertex(0, 250); brush.vertex(600, 250); brush.vertex(600, 400); brush.vertex(0, 400);
  brush.endShape(true);
  brush.fill("#c03a50", 180);
  brush.beginShape(0.6);
  brush.vertex(0, 60); brush.vertex(600, 60); brush.vertex(600, 200); brush.vertex(0, 190);
  brush.endShape(true);
  brush.fill("#fce088", 200);
  brush.circle(130, 330, 50, 0.6);
  // sea band
  brush.fill("#2a3a6a", 200);
  brush.beginShape(0.5);
  brush.vertex(0, 380); brush.vertex(600, 380); brush.vertex(600, 430); brush.vertex(0, 430);
  brush.endShape(true);
  // dark sand ground
  brush.fill("#0c0c14", 235);
  brush.beginShape(0.4);
  brush.vertex(0, 430); brush.vertex(600, 430); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#2a2438", 180);
  brush.beginShape(0.5);
  brush.vertex(0, 480); brush.vertex(600, 470); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // row of huts: main one off-centre right
  const huts = [[250, 60, "#2a8a9a"], [345, 70, "#c83a30"], [440, 60, "#e8c040"], [520, 55, "#2a8a9a"]];
  huts.forEach((h, i) => {
    const x = h[0], w = h[1] + (i === 1 ? 40 : 0), top = i === 1 ? 300 : 340;
    brush.fill(h[2], 210);
    brush.beginShape(0.3);
    brush.vertex(x, 440); brush.vertex(x, top + 25); brush.vertex(x + w / 2, top - 5); brush.vertex(x + w, top + 25); brush.vertex(x + w, 440);
    brush.endShape(true);
    brush.fill("#0c0c14", 220);
    brush.beginShape(0.3);
    brush.vertex(x + w / 2 - 12, 440); brush.vertex(x + w / 2 - 12, 385); brush.vertex(x + w / 2 + 12, 385); brush.vertex(x + w / 2 + 12, 440);
    brush.endShape(true);
  });
  brush.fill("#0c0c14", 200);
  brush.beginShape(0.3);
  brush.vertex(240, 438); brush.vertex(600, 438); brush.vertex(600, 455); brush.vertex(240, 455);
  brush.endShape(true);
}
