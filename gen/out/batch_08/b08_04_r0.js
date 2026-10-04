async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f2ec");
  randomSeed(404);
  brush.noStroke();
  // wet-in-wet sky blooms
  for (let i = 0; i < 9; i++) {
    brush.fill(random(["#9cc3d9", "#c9b6d8", "#a9cfd0"]), 150 + random(50));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.5);
    brush.circle(random(-40, 640), random(0, 200), 80 + random(70), 1);
  }
  // sea strip
  brush.fill("#3f8fa6", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 250); brush.vertex(620, 245); brush.vertex(620, 330); brush.vertex(300, 345); brush.vertex(-20, 320);
  brush.endShape(true);
  // wet sand, with drips downward
  brush.fill("#d8b77f", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 330); brush.vertex(300, 345); brush.vertex(620, 325); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#b99158", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(250, 440); brush.vertex(620, 500); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 8; i++) {
    let x = random(600);
    brush.fill("#3f8fa6", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.7);
    brush.vertex(x - 8, 320); brush.vertex(x + 8, 320); brush.vertex(x + 5, 350 + random(40)); brush.vertex(x - 5, 350 + random(40));
    brush.endShape(true);
  }
  // foam edge left as paper; splatter
  for (let i = 0; i < 20; i++) {
    brush.fill(random(["#8a6a3a", "#3f8fa6"]), 190);
    brush.fillBleed(0.15);
    brush.circle(random(600), random(360, 600), 2 + random(6), 0.4);
  }
  // small figure, right third
  let fx = 455, fy = 405;
  brush.fill("#2b2e44", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(fx, fy - 42, 7, 0.3);
  brush.beginShape(0.3);
  brush.vertex(fx - 8, fy - 34); brush.vertex(fx + 8, fy - 34); brush.vertex(fx + 10, fy); brush.vertex(fx - 9, fy);
  brush.endShape(true);
  brush.fill("#2b2e44", 210);
  brush.beginShape(0.2);
  brush.vertex(fx - 8, fy - 2); brush.vertex(fx - 1, fy - 2); brush.vertex(fx - 12, fy + 26); brush.vertex(fx - 18, fy + 24);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(fx, fy - 2); brush.vertex(fx + 9, fy - 2); brush.vertex(fx + 15, fy + 26); brush.vertex(fx + 8, fy + 27);
  brush.endShape(true);
  // reflection in wet sand
  brush.fill("#6b6a7a", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(fx - 14, fy + 28); brush.vertex(fx + 16, fy + 28); brush.vertex(fx + 10, fy + 75); brush.vertex(fx - 8, fy + 75);
  brush.endShape(true);
}
