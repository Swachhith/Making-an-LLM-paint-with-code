async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#141014");
  brush.noStroke();

  // warm glow low in the sky, then the crescent
  brush.fill("#3a2a20", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 300); brush.vertex(620, 260); brush.vertex(620, 350); brush.vertex(-20, 370);
  brush.endShape(true);
  brush.fill("#7a4a20", 130);
  brush.beginShape(0.6);
  brush.vertex(-20, 320); brush.vertex(620, 290); brush.vertex(620, 400); brush.vertex(-20, 410);
  brush.endShape(true);
  // crescent
  brush.fill("#c8a840", 215);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(280, 150, 85, 0.3);
  brush.fill("#f2e8a0", 225);
  brush.circle(272, 140, 60, 0.3);
  // a few stars
  for (let i = 0; i < 18; i++) {
    brush.fill("#f2e8a0", 180 + i * 4);
    brush.fillBleed(0.1);
    brush.circle(random(-20, 620), random(-20, 170), random(1, 3), 0.1);
  }

  // pine row, low
  let trees = [];
  for (let x = -20; x <= 620; x += 30) {
    let h = random(60, 120);
    let w = random(14, 24);
    trees.push({ x, w, h, top: y => 390 - h, bottom: y => 390 + h + random(-10, 10) });
  }
  for (let t of trees) {
    let y = t.top(390);
    brush.fill("#050406", 230);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0.8);
    brush.vertex(t.x - t.w * 0.5, y);
    brush.vertex(t.x + t.w * 0.5, y);
    brush.vertex(t.x + t.w * 0.6, 380);
    brush.vertex(t.x + t.w * 0.3, 370);
    brush.vertex(t.x + t.w * 0.1, y);
    brush.vertex(t.x + t.w * 0.2, 378);
    brush.vertex(t.x + t.w * 0.9, y);
    brush.vertex(t.x + t.w * 1.1, 370);
    brush.vertex(t.x + t.w * 1.2, 380);
    brush.vertex(t.x + t.w * 0.7, 390);
    brush.endShape(true);
  }
  // snow on the tops
  for (let t of trees) {
    brush.fill("#fff0d0", 220);
    brush.fillBleed(0.2);
    brush.circle(t.x + t.w * 0.5, 390 - t.h * 0.3, 8, 0.3);
  }
  // a warm porch light
  brush.fill("#ffb030", 230);
  brush.fillBleed(0.2);
  brush.circle(470, 470, 10, 0.2);
  brush.fill("#f2e8a0", 170);
  brush.circle(470, 470, 28, 0.3);
  // a figure
  brush.fill("#ffb030", 220);
  brush.fillBleed(0.1);
  brush.beginShape(0.5);
  brush.vertex(490, 472); brush.vertex(502, 472); brush.vertex(500, 490); brush.vertex(494, 490);
  brush.endShape(true);
  brush.fill("#2a1a1a", 220);
  brush.beginShape(0.5);
  brush.vertex(486, 490); brush.vertex(494, 490); brush.vertex(494, 506); brush.vertex(486, 506);
  brush.endShape(true);
}
