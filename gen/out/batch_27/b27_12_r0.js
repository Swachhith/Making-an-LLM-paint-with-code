async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e8e4");
  randomSeed(1212);
  brush.noStroke();
  // misty sky, pale grey-blue
  brush.fill("#b8c2c8", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 300);
  brush.vertex(-20, 300);
  brush.endShape(true);
  // plane 1: furthest hills, barely there
  brush.fill("#a6afb3", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 250);
  brush.vertex(150, 220);
  brush.vertex(320, 240);
  brush.vertex(480, 215);
  brush.vertex(620, 235);
  brush.vertex(620, 290);
  brush.vertex(-20, 290);
  brush.endShape(true);
  // plane 2: nearer treeline
  brush.fill("#8e9a98", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, 285);
  brush.vertex(80, 262);
  brush.vertex(170, 270);
  brush.vertex(260, 258);
  brush.vertex(330, 280);
  brush.vertex(620, 275);
  brush.vertex(620, 300);
  brush.vertex(-20, 300);
  brush.endShape(true);
  // lake: still water with a soft reflection
  brush.fill("#b3bec4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, 298);
  brush.vertex(620, 298);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#98a4a4", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 302);
  brush.vertex(170, 302);
  brush.vertex(330, 302);
  brush.vertex(620, 302);
  brush.vertex(620, 330);
  brush.vertex(-20, 335);
  brush.endShape(true);
  // plane 3: middle reed bank on the right
  brush.fill("#8a8f78", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(330, 420);
  brush.vertex(450, 395);
  brush.vertex(620, 385);
  brush.vertex(620, 430);
  brush.vertex(350, 430);
  brush.endShape(true);
  // plane 4: foreground reeds, taller, left
  for (let i = 0; i < 14; i++) {
    let x = random(-10, 250);
    let h = random(120, 260);
    brush.fill(random(["#6f7560", "#7b7a5e", "#5f6655"]), random(170, 210));
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(x, 610);
    brush.vertex(x + random(-10, 10), 610 - h);
    brush.vertex(x + 17, 610 - h + 10);
    brush.vertex(x + 18, 610);
    brush.endShape(true);
    if (random() < 0.4) {
      brush.fill("#5b4e3c", 200);
      brush.fillBleed(0.2);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.5);
      brush.vertex(x - 1, 620 - h);
      brush.vertex(x + 17, 620 - h);
      brush.vertex(x + 16, 660 - h);
      brush.vertex(x, 660 - h);
      brush.endShape(true);
    }
  }
  // pale foreground water band
  brush.fill("#a2adb0", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(240, 500);
  brush.vertex(620, 490);
  brush.vertex(620, 620);
  brush.vertex(260, 620);
  brush.endShape(true);
}
