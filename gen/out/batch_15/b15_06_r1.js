async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ebe6da");
  randomSeed(66);
  brush.noStroke();

  // grey-ochre overcast sky with a lighter break
  brush.fill("#8e969a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 160);
  brush.vertex(0, 200);
  brush.endShape(true);
  brush.fill("#c8b490", 150);
  brush.beginShape(0.8);
  brush.vertex(0, 200);
  brush.vertex(600, 150);
  brush.vertex(600, 300);
  brush.vertex(0, 330);
  brush.endShape(true);

  // field seen from ground level
  brush.fill("#8a8448", 210);
  brush.fillBleed(0.28);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(0, 480);
  brush.vertex(600, 465);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  // barn: gable front looming, roof close to the top edge
  let front = [[140, 480], [140, 220], [290, 70], [440, 220], [440, 490]];
  let side = [[440, 220], [575, 262], [575, 468], [440, 490]];
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(pass === 0 ? "#a4402c" : "#8a3022", 200);
    brush.fillBleed(0.22);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0);
    for (let p of front) brush.vertex(p[0] + pass * 6, p[1] + pass * 4);
    brush.endShape(true);
  }
  for (let pass = 0; pass < 3; pass++) {
    brush.fill("#5a2018", 200);
    brush.fillBleed(0.18);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0);
    for (let p of side) brush.vertex(p[0], p[1]);
    brush.endShape(true);
  }
  // roof slabs, dark weathered grey
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#3e3a38", 220);
    brush.fillBleed(0.12);
    brush.beginShape(0);
    brush.vertex(284, 64);
    brush.vertex(446, 220);
    brush.vertex(585, 262);
    brush.vertex(572, 236);
    brush.vertex(425, 140);
    brush.endShape(true);
  }
  // board shading streaks on the gable
  for (let x = 170; x < 430; x += 42) {
    brush.fill("#6e2418", 120);
    brush.fillBleed(0.2);
    brush.beginShape(0.2);
    brush.vertex(x, 470);
    brush.vertex(x + 16, 470);
    brush.vertex(x + 16, 240);
    brush.vertex(x, 250);
    brush.endShape(true);
  }
  // doors with paper-white X trim implied by gaps: two dark leaves
  for (let d of [[210, 290], [295, 375]]) {
    for (let pass = 0; pass < 2; pass++) {
      brush.fill("#2a1410", 230);
      brush.fillBleed(0.1);
      brush.beginShape(0);
      brush.vertex(d[0], 480);
      brush.vertex(d[0], 335);
      brush.vertex(d[1], 335);
      brush.vertex(d[1], 482);
      brush.endShape(true);
    }
  }
  brush.fill("#2a1410", 230);
  brush.beginShape(0);
  brush.vertex(262, 220);
  brush.vertex(318, 220);
  brush.vertex(318, 268);
  brush.vertex(262, 268);
  brush.endShape(true);

  // tall grasses in the foreground, cropping the barn base
  for (let i = 0; i < 34; i++) {
    let x = random(-20, 620);
    brush.fill(random(["#5e5c2c", "#8a7a3a", "#445026", "#a08e4a"]), random(180, 230));
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(x - 13, 600);
    brush.vertex(x + random(-35, 35), random(410, 520));
    brush.vertex(x + 13, 600);
    brush.endShape(true);
  }
}
