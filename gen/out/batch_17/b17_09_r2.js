async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ebe8ee");
  randomSeed(9);
  brush.noStroke();
  // soft sky, rosy low, grey-violet high
  brush.fill("#aaa4c0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 300);
  brush.vertex(-20, 330);
  brush.endShape(true);
  brush.fill("#e2c7c9", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 220);
  brush.vertex(620, 200);
  brush.vertex(620, 420);
  brush.vertex(-20, 420);
  brush.endShape(true);
  // far faint peaks
  brush.fill("#a19db4", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 400);
  brush.vertex(40, 300);
  brush.vertex(85, 270);
  brush.vertex(120, 300);
  brush.vertex(190, 340);
  brush.vertex(230, 400);
  brush.endShape(true);
  // the big peak, right of centre: lit face left as pale, shadow face violet
  brush.fill("#9793ad", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.2);
  brush.vertex(140, 430);
  brush.vertex(250, 300);
  brush.vertex(330, 190);
  brush.vertex(380, 110);
  brush.vertex(402, 72);
  brush.vertex(430, 105);
  brush.vertex(480, 170);
  brush.vertex(540, 240);
  brush.vertex(620, 320);
  brush.vertex(620, 430);
  brush.endShape(true);
  brush.fill("#6d6a8c", 200);
  brush.fillBleed(0.22);
  brush.beginShape(0.25);
  brush.vertex(402, 74);
  brush.vertex(430, 105);
  brush.vertex(480, 170);
  brush.vertex(540, 240);
  brush.vertex(620, 320);
  brush.vertex(620, 430);
  brush.vertex(440, 430);
  brush.vertex(420, 300);
  brush.vertex(395, 180);
  brush.endShape(true);
  // summit snow: paper left pale, edged by a darker band below
  brush.fill("#57547a", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(355, 175);
  brush.vertex(380, 165);
  brush.vertex(400, 185);
  brush.vertex(430, 170);
  brush.vertex(460, 200);
  brush.vertex(445, 215);
  brush.vertex(410, 205);
  brush.vertex(375, 195);
  brush.vertex(350, 200);
  brush.endShape(true);
  // ridge gullies
  brush.fill("#5d5a7c", 150);
  brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(370, 140);
  brush.vertex(390, 150);
  brush.vertex(340, 280);
  brush.vertex(318, 275);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(470, 200);
  brush.vertex(490, 210);
  brush.vertex(520, 330);
  brush.vertex(498, 335);
  brush.endShape(true);
  // cloud sea: rows of soft billows with pale tops, shadow undersides
  for (let row = 0; row < 3; row++) {
    for (let i = 0; i < 7; i++) {
      let x = i * 100 + random(-20, 20) - row * 30;
      let y = 400 + row * 70 + random(-10, 10);
      let r = 70 + row * 15 + random(-10, 10);
      brush.fill("#b8b2c6", 170);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.circle(x, y + r * 0.4, r, 0.4);
      brush.fill("#ddd3dc", 190);
      brush.fillBleed(0.3);
      brush.circle(x - 5, y, r * 0.8, 0.4);
    }
  }
}
