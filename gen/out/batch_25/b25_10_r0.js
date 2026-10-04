async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f1f7");
  randomSeed(1010);
  brush.noStroke();

  // soft green ground wash so the flowers sit on something
  brush.fill("#9fcf7a", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(300, 330, 250, 0.6);

  // stems
  brush.fill("#2f8f3a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(240, 330); brush.vertex(258, 330); brush.vertex(280, 590); brush.vertex(262, 590);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(440, 250); brush.vertex(455, 255); brush.vertex(330, 590); brush.vertex(312, 585);
  brush.endShape(true);

  // pansy open bloom at left: two upper purple petals, two side, one lower
  let cx = 240, cy = 300;
  let petal = (a, r, col, op) => {
    brush.fill(col, op);
    brush.fillBleed(0.26);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(1);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 35) * r, cy + sin(a - 35) * r);
    brush.vertex(cx + cos(a) * r * 1.1, cy + sin(a) * r * 1.1);
    brush.vertex(cx + cos(a + 35) * r, cy + sin(a + 35) * r);
    brush.endShape(true);
  };
  petal(-120, 120, "#5a1a9c", 215);
  petal(-60, 120, "#6c1fb0", 215);
  petal(-165, 95, "#ffc400", 210);
  petal(-15, 95, "#ffc400", 210);
  petal(90, 110, "#ffd000", 215);
  // second pass: deep purple blotches radiating from the centre
  petal(-120, 80, "#2e0860", 200);
  petal(-60, 80, "#2e0860", 200);
  for (let a of [-165, -15, 90]) {
    brush.fill("#3a0a72", 215);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.circle(cx + cos(a) * 38, cy + sin(a) * 38, 26, 0.6);
  }
  brush.fill("#ff8a00", 230);
  brush.circle(cx, cy, 11, 0.3);

  // closed bud at upper right: a purple teardrop wrapped in green sepals
  let bx = 450, by = 200;
  brush.fill("#6c1fb0", 220);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(bx, by - 70); brush.vertex(bx + 30, by - 10); brush.vertex(bx + 5, by + 50);
  brush.vertex(bx - 25, by - 5);
  brush.endShape(true);
  brush.fill("#3a0a72", 200);
  brush.beginShape(1);
  brush.vertex(bx + 2, by - 55); brush.vertex(bx + 22, by - 5); brush.vertex(bx + 5, by + 40);
  brush.endShape(true);
  brush.fill("#2f8f3a", 220);
  brush.beginShape(0.8);
  brush.vertex(bx - 28, by + 10); brush.vertex(bx + 8, by + 65); brush.vertex(bx + 35, by + 5); brush.vertex(bx + 10, by + 40);
  brush.endShape(true);

  // a pair of heart leaves
  brush.fill("#1f7a2c", 210);
  brush.fillBleed(0.28);
  brush.beginShape(1);
  brush.vertex(275, 520); brush.vertex(190, 470); brush.vertex(150, 510); brush.vertex(220, 550);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(315, 500); brush.vertex(400, 460); brush.vertex(440, 500); brush.vertex(360, 535);
  brush.endShape(true);
}
