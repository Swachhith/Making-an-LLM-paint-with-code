async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece8df");
  brush.noStroke();

  // overcast sky
  brush.fill("#9ba3a6", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 200);
  brush.vertex(0, 150);
  brush.endShape(true);
  brush.fill("#c3b69a", 140);
  brush.circle(120, 260, 140, 0.6);

  // low horizon field
  brush.fill("#8c8a4e", 200);
  brush.fillBleed(0.28);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(0, 470);
  brush.vertex(600, 450);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  // barn gable end, seen from below: roof peak near top
  brush.fill("#9a3a2a", 210);
  brush.fillBleed(0.22);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0);
  brush.vertex(150, 470);
  brush.vertex(150, 230);
  brush.vertex(290, 90);
  brush.vertex(430, 230);
  brush.vertex(430, 480);
  brush.endShape(true);
  // side wall receding to the right, darker
  brush.fill("#6e2a20", 210);
  brush.beginShape(0);
  brush.vertex(430, 230);
  brush.vertex(560, 270);
  brush.vertex(560, 460);
  brush.vertex(430, 480);
  brush.endShape(true);
  // roof edge
  brush.fill("#4a4440", 220);
  brush.fillBleed(0.15);
  brush.beginShape(0);
  brush.vertex(290, 90);
  brush.vertex(440, 222);
  brush.vertex(570, 262);
  brush.vertex(560, 245);
  brush.vertex(420, 150);
  brush.endShape(true);

  // second pass on front wall
  brush.fill("#8a2e22", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0);
  brush.vertex(160, 460);
  brush.vertex(165, 250);
  brush.vertex(290, 120);
  brush.vertex(300, 460);
  brush.endShape(true);

  // doors with white trim left as paper around dark
  brush.fill("#3a1c16", 230);
  brush.fillBleed(0.12);
  brush.beginShape(0);
  brush.vertex(225, 470);
  brush.vertex(225, 330);
  brush.vertex(355, 330);
  brush.vertex(355, 475);
  brush.endShape(true);
  brush.fill("#3a1c16", 220);
  brush.beginShape(0);
  brush.vertex(265, 230);
  brush.vertex(315, 230);
  brush.vertex(315, 275);
  brush.vertex(265, 275);
  brush.endShape(true);

  // tall foreground grasses (low angle)
  randomSeed(66);
  for (let i = 0; i < 26; i++) {
    let x = random(-20, 620);
    brush.fill(random(["#6b6a34", "#8a7a3e", "#4e5a2a"]), random(170, 220));
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(x - 14, 600);
    brush.vertex(x + random(-30, 30), random(420, 520));
    brush.vertex(x + 14, 600);
    brush.endShape(true);
  }
}
