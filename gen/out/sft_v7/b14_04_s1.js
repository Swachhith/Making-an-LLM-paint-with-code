async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e3d6");
  randomSeed(2112);
  brush.noStroke();

  // sky: slate-grey, two passes
  brush.fill("#9aa2b4", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 270);
  brush.endShape(true);
  brush.fill("#7a869e", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 100); brush.vertex(620, 80); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);

  // ground: olive meadow
  brush.fill("#8c9668", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(620, 400); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6e7a50", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a few trees in the distance
  for (let i = 0; i < 7; i++) {
    let x = random(20, 580), h = random(60, 120);
    brush.fill("#4f5c3a", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(x - 10, 420); brush.vertex(x, 420 - h); brush.vertex(x + 10, 420 - h * 0.5);
    brush.vertex(x + 12, 420);
    brush.endShape(true);
  }

  // windmill: pale body, dark cap
  let xm = 310, hm = 460;
  // tower
  brush.fill("#d9d7c8", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0);
  brush.vertex(xm - 16, hm); brush.vertex(xm + 16, hm); brush.vertex(xm + 16, hm + 200); brush.vertex(xm - 16, hm + 200);
  brush.endShape(true);
  brush.fill("#b8b6a8", 190);
  brush.fillBleed(0.2);
  brush.beginShape(0);
  brush.vertex(xm - 16, hm + 170); brush.vertex(xm + 16, hm + 170); brush.vertex(xm + 16, hm + 200); brush.vertex(xm - 16, hm + 200);
  brush.endShape(true);
  // cap
  brush.fill("#5a5444", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(xm - 12, hm - 18); brush.vertex(xm + 12, hm - 18); brush.vertex(xm + 16, hm - 4); brush.vertex(xm - 16, hm - 4);
  brush.endShape(true);
  // sails: one open, one closed
  let s = 110;
  brush.fill("#6e7a50", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(xm, hm - 12); brush.vertex(xm + s, hm - 90); brush.vertex(xm + s, hm - 10); brush.vertex(xm, hm - 40);
  brush.endShape(true);
  brush.fill("#5a5444", 210);
  brush.beginShape(0.5);
  brush.vertex(xm, hm - 12); brush.vertex(xm - s, hm - 90); brush.vertex(xm - s, hm - 10); brush.vertex(xm, hm - 40);
  brush.endShape(true);
  brush.fill("#3a362c", 210);
  brush.fillBleed(0.15);
  brush.beginShape(0.5);
  brush.vertex(xm, hm - 12); brush.vertex(xm + s, hm - 90); brush.vertex(xm + s, hm - 6); brush.vertex(xm, hm - 6);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(xm, hm - 12); brush.vertex(xm - s, hm - 90); brush.vertex(xm - s, hm - 6); brush.vertex(xm, hm - 6);
  brush.endShape(true);
  // shadow on the tower
  brush.fill("#5a5444", 180);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(xm + 8, hm + 60); brush.vertex(xm + 16, hm + 60); brush.vertex(xm + 16, hm + 160); brush.vertex(xm + 8, hm + 160);
  brush.endShape(true);
  // a figure on the ground
  brush.fill("#5a5444", 210);
  brush.fillBleed(0.2);
  brush.circle(520, 520, 5, 0.3);
  brush.circle(524, 520, 5, 0.3);
  brush.circle(522, 535, 5, 0.3);
  brush.circle(526, 535, 5, 0.3);
  brush.circle(520, 542, 5, 0.3);
  brush.circle(524, 542, 5, 0.3);
  brush.circle(522, 555, 5, 0.3);
  brush.circle(526, 555, 5, 0.3);
  // a path leading to the mill
  brush.fill("#8c9668", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(300, 570); brush.vertex(320, 570); brush.vertex(330, 585); brush.vertex(310, 585);
  brush.endShape(true);
}
