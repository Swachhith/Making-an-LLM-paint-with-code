async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4e6");
  randomSeed(3131);
  brush.noStroke();

  // warm sky, two passes
  brush.fill("#f2c98a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(420, 230); brush.vertex(380, 150); brush.vertex(260, 160); brush.vertex(200, 230); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#f6a866", 150);
  brush.beginShape(0.8);
  brush.vertex(-20, 230); brush.vertex(620, 230); brush.vertex(620, 470); brush.vertex(500, 460); brush.vertex(460, 500); brush.vertex(300, 510); brush.vertex(120, 490); brush.vertex(-20, 470);
  brush.endShape(true);

  // rolling hills, warm ochre
  brush.fill("#e89a5a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-20, 470); brush.vertex(150, 440); brush.vertex(320, 460); brush.vertex(480, 430); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#d07a40", 180);
  brush.beginShape(0.9);
  brush.vertex(-20, 520); brush.vertex(260, 490); brush.vertex(380, 530); brush.vertex(520, 500); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // cottage: wide base, red roof, chimney
  let bx = 260, by = 500;
  brush.fill("#d97a3a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.15);
  brush.vertex(bx - 110, by - 10); brush.vertex(bx + 110, by - 10); brush.vertex(bx + 110, by + 130); brush.vertex(bx - 110, by + 130);
  brush.endShape(true);
  brush.fill("#c04a20", 200);
  brush.beginShape(0.15);
  brush.vertex(bx - 100, by - 130); brush.vertex(bx + 100, by - 130); brush.vertex(bx + 100, by - 10); brush.vertex(bx - 100, by - 10);
  brush.endShape(true);
  brush.fill("#9a2014", 210);
  brush.beginShape(0.15);
  brush.vertex(bx - 90, by - 150); brush.vertex(bx + 90, by - 150); brush.vertex(bx + 90, by - 100); brush.vertex(bx - 90, by - 100);
  brush.endShape(true);
  brush.fill("#6a100c", 210);
  brush.beginShape(0.15);
  brush.vertex(bx - 80, by - 170); brush.vertex(bx + 80, by - 170); brush.vertex(bx + 80, by - 140); brush.vertex(bx - 80, by - 140);
  brush.endShape(true);
  brush.fill("#5a100c", 210);
  brush.beginShape(0.15);
  brush.vertex(bx - 80, by - 190); brush.vertex(bx + 80, by - 190); brush.vertex(bx + 80, by - 160); brush.vertex(bx - 80, by - 160);
  brush.endShape(true);
  brush.fill("#3a0a08", 210);
  brush.beginShape(0.15);
  brush.vertex(bx - 80, by - 210); brush.vertex(bx + 80, by - 210); brush.vertex(bx + 80, by - 180); brush.vertex(bx - 80, by - 180);
  brush.endShape(true);
  // chimney
  brush.fill("#3a100a", 220);
  brush.beginShape(0.15);
  brush.vertex(bx + 42, by - 225); brush.vertex(bx + 62, by - 225); brush.vertex(bx + 62, by - 190); brush.vertex(bx + 42, by - 190);
  brush.endShape(true);
  brush.fill("#8a3a1a", 210);
  brush.beginShape(0.15);
  brush.vertex(bx + 42, by - 225); brush.vertex(bx + 62, by - 225); brush.vertex(bx + 62, by - 200); brush.vertex(bx + 42, by - 200);
  brush.endShape(true);
  // door
  brush.fill("#2a0a06", 230);
  brush.beginShape(0.15);
  brush.vertex(bx - 14, by + 130); brush.vertex(bx + 14, by + 130); brush.vertex(bx + 14, by + 230); brush.vertex(bx - 14, by + 230);
  brush.endShape(true);
  // windows
  brush.fill("#f2c98a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(bx - 42, by - 40, 16, 0.3);
  brush.circle(bx + 42, by - 40, 16, 0.3);
  brush.circle(bx - 42, by + 70, 16, 0.3);
  brush.circle(bx + 42, by + 70, 16, 0.3);
  // shadow under cottage
  brush.fill("#5a2010", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(bx - 110, by + 130); brush.vertex(bx + 110, by + 130); brush.vertex(bx + 100, by + 200); brush.vertex(bx - 100, by + 200);
  brush.endShape(true);

  // path leading up
  brush.fill("#c99a6a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(300, 620); brush.vertex(310, 580); brush.vertex(290, 560); brush.vertex(270, 550); brush.vertex(250, 560); brush.vertex(230, 580); brush.vertex(240, 620);
  brush.endShape(true);
  brush.fill("#8a5a3a", 160);
  brush.beginShape(0.3);
  brush.vertex(300, 620); brush.vertex(308, 570); brush.vertex(292, 555); brush.vertex(272, 545); brush.vertex(252, 555); brush.vertex(232, 570); brush.vertex(240, 620);
  brush.endShape(true);

  // tall grasses
  for (let i = 0; i < 15; i++) {
    let x = random(0, 600), h = random(40, 120);
    brush.fill(random(["#3a8a3a", "#2a6a2a", "#4a9a4a"]), 180);
    brush.fillBleed(0.25);
    brush.beginShape(0.6);
    brush.vertex(x, 620); brush.vertex(x + 4, 620 - h); brush.vertex(x + 10, 620 - h * 0.8); brush.vertex(x - 4, 620 - h * 0.7); brush.vertex(x - 10, 620);
    brush.endShape(true);
  }
}
