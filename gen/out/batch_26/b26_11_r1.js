async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2eee4");
  randomSeed(2611);
  brush.noStroke();

  // deep leaf green in the gaps between tepals (painted first, over the whole sheet)
  brush.fill("#1e6a34", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#0e4020", 180);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(280, -20); brush.vertex(150, 120); brush.vertex(-20, 240);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(620, 620); brush.vertex(330, 620); brush.vertex(480, 460); brush.vertex(620, 380);
  brush.endShape(true);

  // six wide overlapping tepals
  let cx = 300, cy = 300;
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 15 + random(-4, 4);
    let r = 275 + random(-15, 10);
    brush.fill("#9040e0", 215);
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.85);
    brush.vertex(cx + cos(a) * 20, cy + sin(a) * 20);
    brush.vertex(cx + cos(a - 34) * r * 0.5, cy + sin(a - 34) * r * 0.5);
    brush.vertex(cx + cos(a - 16) * r * 0.85, cy + sin(a - 16) * r * 0.85);
    brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
    brush.vertex(cx + cos(a + 16) * r * 0.85, cy + sin(a + 16) * r * 0.85);
    brush.vertex(cx + cos(a + 34) * r * 0.5, cy + sin(a + 34) * r * 0.5);
    brush.endShape(true);
  }
  // second pass: richer violet toward the base, deep midribs
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 15;
    let r = 240;
    brush.fill("#6a20c0", 200);
    brush.fillBleed(0.25);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a) * 30, cy + sin(a) * 30);
    brush.vertex(cx + cos(a - 22) * r * 0.45, cy + sin(a - 22) * r * 0.45);
    brush.vertex(cx + cos(a) * r * 0.8, cy + sin(a) * r * 0.8);
    brush.vertex(cx + cos(a + 22) * r * 0.45, cy + sin(a + 22) * r * 0.45);
    brush.endShape(true);
    brush.fill("#48108a", 210);
    brush.beginShape(0.7);
    brush.vertex(cx + cos(a) * 40, cy + sin(a) * 40);
    brush.vertex(cx + cos(a - 5) * r * 0.5, cy + sin(a - 5) * r * 0.5);
    brush.vertex(cx + cos(a) * r * 0.95, cy + sin(a) * r * 0.95);
    brush.vertex(cx + cos(a + 5) * r * 0.5, cy + sin(a + 5) * r * 0.5);
    brush.endShape(true);
  }

  // stamen boss
  brush.fill("#8aa030", 225);
  brush.circle(cx, cy, 38, true);
  brush.fill("#f0dc60", 235);
  for (let k = 0; k < 30; k++) {
    let a = k * 12 + random(-4, 4), rr = random(28, 50);
    brush.circle(cx + cos(a) * rr, cy + sin(a) * rr, 5, true);
  }
  brush.fill("#3a0a6a", 225);
  brush.circle(cx, cy, 14, true);
}
