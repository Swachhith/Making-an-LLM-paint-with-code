async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff3ea");
  brush.noStroke();
  brush.fill("#ffd6b8", 175);
  brush.fillBleed(0.5);
  brush.fillTexture(0.6, 0.5);
  brush.circle(300, 280, 260, true);
  brush.noStroke();

  // stems
  brush.fill("#2e7a3c", 210);
  brush.fillBleed(0.1);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(180, 300); brush.vertex(240, 600); brush.vertex(252, 600); brush.vertex(192, 300);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(420, 360); brush.vertex(300, 600); brush.vertex(312, 600); brush.vertex(430, 362);
  brush.endShape(true);
  brush.fill("#3f9a48", 190);
  brush.beginShape(0.6);
  brush.vertex(230, 500); brush.vertex(120, 470); brush.vertex(60, 520); brush.vertex(150, 530);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(330, 540); brush.vertex(450, 500); brush.vertex(520, 540); brush.vertex(420, 560);
  brush.endShape(true);

  // front-facing coral peony, upper left
  let ax = 185, ay = 230;
  for (let k = 0; k < 10; k++) {
    let a = k * 36 + random(-6, 6);
    let r = 125 + random(-10, 12);
    brush.fill("#ff6a4d", 205);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.55);
    brush.beginShape(0.7);
    brush.vertex(ax + cos(a - 22) * 40, ay + sin(a - 22) * 40);
    brush.vertex(ax + cos(a - 18) * r, ay + sin(a - 18) * r);
    brush.vertex(ax + cos(a) * (r + 12), ay + sin(a) * (r + 12));
    brush.vertex(ax + cos(a + 18) * r, ay + sin(a + 18) * r);
    brush.vertex(ax + cos(a + 22) * 40, ay + sin(a + 22) * 40);
    brush.endShape(true);
  }
  for (let k = 0; k < 8; k++) {
    let a = k * 45 + 20;
    brush.fill("#d8352a", 225);
    brush.fillBleed(0.2);
    brush.beginShape(0.8);
    brush.vertex(ax, ay);
    brush.vertex(ax + cos(a - 25) * 70, ay + sin(a - 25) * 70);
    brush.vertex(ax + cos(a + 25) * 70, ay + sin(a + 25) * 70);
    brush.endShape(true);
  }
  brush.fill("#a8201c", 220);
  brush.fillBleed(0.3);
  brush.circle(ax, ay, 40, true);
  brush.fill("#ffc24a", 235);
  brush.fillBleed(0.15);
  brush.circle(ax, ay, 24, true);
  for (let k = 0; k < 10; k++) {
    brush.fill("#ffe07a", 225);
    brush.fillBleed(0.02);
    brush.circle(ax + cos(k * 36) * 30, ay + sin(k * 36) * 30, 5, true);
  }

  // side-view cup peony, right
  let bx = 420, by = 330;
  brush.fill("#ff7a5a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(bx - 120, by - 60); brush.vertex(bx - 90, by + 30); brush.vertex(bx, by + 55);
  brush.vertex(bx + 90, by + 30); brush.vertex(bx + 120, by - 60); brush.vertex(bx, by - 10);
  brush.endShape(true);
  let cup = [[-80, "#f25a3e"], [-35, "#e8432e"], [10, "#f25a3e"], [55, "#d93a28"]];
  for (let c of cup) {
    brush.fill(c[1], 205);
    brush.fillBleed(0.2);
    brush.beginShape(0.8);
    brush.vertex(bx + c[0], by + 40);
    brush.vertex(bx + c[0] - 20, by - 70);
    brush.vertex(bx + c[0] + 25, by - 110);
    brush.vertex(bx + c[0] + 50, by - 60);
    brush.vertex(bx + c[0] + 40, by + 40);
    brush.endShape(true);
  }
  brush.fill("#ffb39a", 190);
  brush.fillBleed(0.1);
  for (let c of cup) {
    brush.beginShape(0.8);
    brush.vertex(bx + c[0] + 5, by - 70);
    brush.vertex(bx + c[0] + 25, by - 104);
    brush.vertex(bx + c[0] + 42, by - 66);
    brush.vertex(bx + c[0] + 22, by - 80);
    brush.endShape(true);
  }
  brush.fill("#a8201c", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(bx - 90, by + 25); brush.vertex(bx, by + 50); brush.vertex(bx + 90, by + 25); brush.vertex(bx, by + 20);
  brush.endShape(true);
  brush.fill("#2e7a3c", 215);
  brush.beginShape(0.7);
  brush.vertex(bx - 50, by + 40); brush.vertex(bx, by + 70); brush.vertex(bx + 50, by + 40); brush.vertex(bx, by + 55);
  brush.endShape(true);
}
