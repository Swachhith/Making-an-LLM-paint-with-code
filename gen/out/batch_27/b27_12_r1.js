async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e9e5");
  randomSeed(1212);
  brush.noStroke();
  // misty sky: faint warm grey above, faint blue-grey below
  brush.fill("#c6c4bc", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 160);
  brush.vertex(-20, 190);
  brush.endShape(true);
  brush.fill("#b7c1c6", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 130);
  brush.vertex(620, 120);
  brush.vertex(620, 290);
  brush.vertex(-20, 290);
  brush.endShape(true);
  // plane 1: faint far mountains
  brush.fill("#a9b1b6", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 250);
  brush.vertex(120, 205);
  brush.vertex(230, 235);
  brush.vertex(380, 195);
  brush.vertex(520, 230);
  brush.vertex(620, 215);
  brush.vertex(620, 285);
  brush.vertex(-20, 285);
  brush.endShape(true);
  // plane 2: nearer wooded shore, a notch darker
  brush.fill("#8f9b99", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, 285);
  brush.vertex(60, 262);
  brush.vertex(140, 272);
  brush.vertex(230, 256);
  brush.vertex(310, 280);
  brush.vertex(620, 280);
  brush.vertex(620, 298);
  brush.vertex(-20, 298);
  brush.endShape(true);
  // still lake, with a soft mirror of the shore
  brush.fill("#b6c0c4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, 296);
  brush.vertex(620, 296);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#9aa6a6", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 300);
  brush.vertex(310, 300);
  brush.vertex(620, 300);
  brush.vertex(620, 318);
  brush.vertex(230, 326);
  brush.vertex(140, 316);
  brush.vertex(-20, 322);
  brush.endShape(true);
  // plane 3: midground reed island to the right, with its reflection
  for (let i = 0; i < 16; i++) {
    let x = random(380, 600);
    let h = random(35, 60);
    brush.fill("#8b8c74", 185);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(x - 8, 400);
    brush.vertex(x + random(-4, 4), 400 - h);
    brush.vertex(x + 9, 400);
    brush.endShape(true);
  }
  brush.fill("#9da291", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(370, 402);
  brush.vertex(620, 400);
  brush.vertex(620, 430);
  brush.vertex(400, 425);
  brush.endShape(true);
  // a small moored rowboat on the mid water
  brush.fill("#7c7466", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(200, 380);
  brush.vertex(280, 380);
  brush.vertex(268, 394);
  brush.vertex(212, 394);
  brush.endShape(true);
  brush.fill("#a4aaa8", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(212, 397);
  brush.vertex(268, 397);
  brush.vertex(258, 412);
  brush.vertex(220, 412);
  brush.endShape(true);
  // plane 4: tall foreground reeds, tapering blades leaning, bulrush heads
  for (let i = 0; i < 22; i++) {
    let x = random(-20, 230);
    let h = random(150, 330);
    let lean = random(-40, 30);
    brush.fill(random(["#6d735e", "#7a7a60", "#5e6553", "#84836a"]), random(170, 210));
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(x - 9, 620);
    brush.vertex(x + lean * 0.5 - 4, 620 - h * 0.5);
    brush.vertex(x + lean, 620 - h);
    brush.vertex(x + lean * 0.5 + 8, 620 - h * 0.5);
    brush.vertex(x + 9, 620);
    brush.endShape(true);
    if (random() < 0.35) {
      brush.fill("#5e4f3c", 205);
      brush.fillBleed(0.2);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.6);
      let hx = x + lean * 0.8, hy = 620 - h * 0.85;
      brush.vertex(hx - 8, hy - 20);
      brush.vertex(hx + 8, hy - 20);
      brush.vertex(hx + 8, hy + 20);
      brush.vertex(hx - 8, hy + 20);
      brush.endShape(true);
    }
  }
  // soft pale water ripples in the foreground right
  for (let i = 0; i < 5; i++) {
    let y = 470 + i * 28;
    brush.fill("#a0abae", 160);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(260 + random(-20, 20), y);
    brush.vertex(620, y - 4);
    brush.vertex(620, y + 8);
    brush.vertex(300, y + 10);
    brush.endShape(true);
  }
}
