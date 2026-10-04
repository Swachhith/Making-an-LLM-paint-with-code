async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1dd");
  randomSeed(2);
  brush.noStroke();
  // warm sky, peach to gold
  brush.fill("#f2b56b", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 260);
  brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#f7d58e", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 120);
  brush.vertex(620, 90);
  brush.vertex(620, 330);
  brush.vertex(-20, 350);
  brush.endShape(true);
  // the hill, seen from below: rises steeply to the right
  brush.fill("#c88f52", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 520);
  brush.vertex(120, 430);
  brush.vertex(260, 330);
  brush.vertex(400, 230);
  brush.vertex(520, 190);
  brush.vertex(620, 180);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // houses stacked up the slope, walls warm white/ochre, roofs terracotta
  let houses = [];
  for (let i = 0; i < 14; i++) {
    let x = 80 + i * 36 + random(-10, 10);
    let groundY = 520 - (x + 20) * 0.62 + random(-15, 25);
    houses.push([x, groundY]);
  }
  for (let h of houses) {
    let x = h[0], y = h[1];
    let w = random(34, 50), ht = random(30, 48);
    // shadow side
    brush.fill("#b0703f", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0);
    brush.vertex(x + w * 0.6, y - ht);
    brush.vertex(x + w, y - ht + 4);
    brush.vertex(x + w, y);
    brush.vertex(x + w * 0.6, y);
    brush.endShape(true);
    // roof, seen from below as a thin wedge
    brush.fill(random(["#c2452b", "#d0613a", "#a8392a"]), 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0);
    brush.vertex(x - 4, y - ht);
    brush.vertex(x + w * 0.5, y - ht - 18);
    brush.vertex(x + w + 4, y - ht);
    brush.endShape(true);
    // window
    brush.fill("#3e5a78", 220);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x + w * 0.3, y - ht * 0.55, 5, 0.3);
  }
  // sea sliver at bottom left
  brush.fill("#3f8fa6", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 545);
  brush.vertex(200, 560);
  brush.vertex(340, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // foreground rocks/grass at base
  brush.fill("#6f5a34", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(250, 620);
  brush.vertex(330, 560);
  brush.vertex(480, 530);
  brush.vertex(620, 520);
  brush.vertex(620, 620);
  brush.endShape(true);
}
