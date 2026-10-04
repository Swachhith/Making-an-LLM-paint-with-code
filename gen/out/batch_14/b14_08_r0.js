async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f4ea");
  randomSeed(808);
  brush.noStroke();

  // big saturated sky, deeper at the top
  brush.fill("#2f7fe0", 210);
  brush.fillBleed(0.28);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);
  brush.fill("#1846b0", 190);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 160); brush.vertex(300, 200); brush.vertex(-20, 150);
  brush.endShape(true);

  // white cumulus clouds left as paper: skip; instead cut with pale cool shadows under paper-white tops
  // (cloud bodies are left unpainted where the sky is thinner)
  const clouds = [[140, 260], [330, 300], [470, 230]];
  for (const c of clouds) {
    brush.fill("#8fb4ea", 170);
    brush.fillBleed(0.3);
    brush.circle(c[0], c[1] + 18, 55, 0.6);
    brush.fill("#f7f4ea", 230);
    brush.circle(c[0] - 20, c[1] - 5, 38, 0.6);
    brush.circle(c[0] + 25, c[1] - 12, 44, 0.6);
  }

  // field: bold yellow-green, then a band of deep green
  brush.fill("#9cc62b", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(300, 405); brush.vertex(620, 425);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#e0b92a", 190);
  brush.beginShape(0.6);
  brush.vertex(-20, 500); brush.vertex(250, 470); brush.vertex(620, 520);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#2f7a1c", 200);
  for (let x = -10; x < 620; x += 30) brush.circle(x, 418 + random(-4, 4), random(10, 16), 0.5);

  // barn at the right third
  const bx = 400, by = 440;
  brush.fill("#d0141e", 235);
  brush.fillBleed(0.15);
  brush.fillTexture(0.35, 0.35);
  brush.beginShape(0);
  brush.vertex(bx, by); brush.vertex(bx, by - 70); brush.vertex(bx + 35, by - 110);
  brush.vertex(bx + 75, by - 110); brush.vertex(bx + 110, by - 70); brush.vertex(bx + 110, by);
  brush.endShape(true);
  brush.fill("#9a0a14", 220);
  brush.beginShape(0);
  brush.vertex(bx + 110, by); brush.vertex(bx + 110, by - 70); brush.vertex(bx + 175, by - 60); brush.vertex(bx + 175, by + 5);
  brush.endShape(true);
  // roof edge
  brush.fill("#3a2a2a", 220);
  brush.beginShape(0);
  brush.vertex(bx + 75, by - 114); brush.vertex(bx + 180, by - 102); brush.vertex(bx + 180, by - 60); brush.vertex(bx + 110, by - 72);
  brush.endShape(true);
  // doors
  brush.fill("#5a0508", 220);
  brush.beginShape(0);
  brush.vertex(bx + 30, by); brush.vertex(bx + 30, by - 50); brush.vertex(bx + 80, by - 50); brush.vertex(bx + 80, by);
  brush.endShape(true);
  brush.fill("#f5eede", 230);
  brush.beginShape(0);
  brush.vertex(bx + 44, by - 80); brush.vertex(bx + 66, by - 80); brush.vertex(bx + 66, by - 62); brush.vertex(bx + 44, by - 62);
  brush.endShape(true);

  // a bold tree to the left of the barn
  brush.fill("#1f5e1a", 210);
  brush.circle(340, 380, 34, 0.5);
  brush.fill("#0f3d10", 200);
  brush.circle(348, 392, 22, 0.5);
}
