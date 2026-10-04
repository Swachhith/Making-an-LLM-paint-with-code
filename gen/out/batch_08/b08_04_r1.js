async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f1ea");
  randomSeed(4040);
  brush.noStroke();
  // sky blooms, stronger and wetter
  for (let i = 0; i < 12; i++) {
    brush.fill(random(["#7fb2d0", "#b89fd0", "#8fc4c4", "#e8b8a0"]), 180 + random(50));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.55);
    brush.circle(random(-40, 640), random(-20, 190), 60 + random(70), 1);
  }
  // sea strip
  brush.fill("#2f7f9a", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 225); brush.vertex(620, 220); brush.vertex(620, 285); brush.vertex(-20, 300);
  brush.endShape(true);
  // wave line: foam left as paper, turquoise shallow below
  brush.fill("#6fbcc0", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 310); brush.vertex(150, 300); brush.vertex(350, 318); brush.vertex(620, 298); brush.vertex(620, 340); brush.vertex(300, 360); brush.vertex(-20, 345);
  brush.endShape(true);
  // wet sand
  brush.fill("#d8ae72", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 345); brush.vertex(300, 362); brush.vertex(620, 338); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#b08048", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 500); brush.vertex(250, 470); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // blooms of sea colour bleeding into sand
  for (let i = 0; i < 5; i++) {
    brush.fill("#5fa8b8", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.5);
    brush.circle(random(600), 380 + random(40), 25 + random(30), 1);
  }
  // drips from the sky wash over the sea
  for (let i = 0; i < 6; i++) {
    let x = 30 + random(560);
    brush.fill("#8fa8c8", 180);
    brush.fillBleed(0.15);
    brush.beginShape(0.6);
    brush.vertex(x - 6, 180); brush.vertex(x + 6, 180); brush.vertex(x + 4, 215 + random(30)); brush.vertex(x - 4, 215 + random(30));
    brush.endShape(true);
  }
  // splatter
  for (let i = 0; i < 25; i++) {
    brush.fill(random(["#7a5a2a", "#2f7f9a"]), 200);
    brush.fillBleed(0.1);
    brush.circle(random(600), random(380, 600), 2 + random(5), 0.4);
  }
  // figure, right third, walking away, darker
  let fx = 470, fy = 440;
  brush.fill("#262840", 240);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(fx, fy - 50, 8, 0.3);
  brush.beginShape(0.3);
  brush.vertex(fx - 10, fy - 42); brush.vertex(fx + 10, fy - 42); brush.vertex(fx + 12, fy - 2); brush.vertex(fx - 11, fy - 2);
  brush.endShape(true);
  brush.fill("#b8302a", 230);
  brush.beginShape(0.3);
  brush.vertex(fx - 10, fy - 42); brush.vertex(fx + 10, fy - 42); brush.vertex(fx + 11, fy - 25); brush.vertex(fx - 10, fy - 25);
  brush.endShape(true);
  brush.fill("#262840", 230);
  brush.beginShape(0.2);
  brush.vertex(fx - 10, fy - 4); brush.vertex(fx - 2, fy - 4); brush.vertex(fx - 14, fy + 30); brush.vertex(fx - 21, fy + 28);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(fx + 1, fy - 4); brush.vertex(fx + 11, fy - 4); brush.vertex(fx + 17, fy + 30); brush.vertex(fx + 9, fy + 31);
  brush.endShape(true);
  // reflection in wet sand
  brush.fill("#4a4a6a", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(fx - 18, fy + 32); brush.vertex(fx + 18, fy + 32); brush.vertex(fx + 12, fy + 90); brush.vertex(fx - 10, fy + 90);
  brush.endShape(true);
  // footprints trailing back toward left
  for (let i = 1; i < 9; i++) {
    brush.fill("#8a6a3a", 200);
    brush.fillBleed(0.1);
    brush.circle(fx - i * 30 - (i % 2) * 6, fy + 32 + i * 9 + (i % 2) * 6, 4, 0.3);
  }
}
