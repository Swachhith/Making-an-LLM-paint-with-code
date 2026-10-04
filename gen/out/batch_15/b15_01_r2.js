async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#faefd6");
  randomSeed(1501);
  brush.noStroke();

  // warm late-light sky, stronger at the upper right
  brush.fill("#f5c060", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 380);
  brush.vertex(0, 400);
  brush.endShape(true);
  brush.fill("#ee9a48", 160);
  brush.fillBleed(0.3);
  brush.circle(520, 70, 150, 0.5);

  // ground
  brush.fill("#b0a448", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(0, 490);
  brush.vertex(220, 478);
  brush.vertex(600, 470);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);
  // long shadow of the tree across the grass, falling left
  brush.fill("#5e6a2a", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(330, 545);
  brush.vertex(60, 520);
  brush.vertex(20, 560);
  brush.vertex(300, 575);
  brush.endShape(true);

  // gnarled trunk, three passes
  let trunk = [
    [258, 555], [276, 480], [262, 420], [280, 350], [240, 290], [222, 250],
    [245, 240], [292, 318], [318, 230], [350, 190], [372, 205], [330, 300],
    [322, 420], [352, 560],
  ];
  let tones = [["#8a5a30", 210], ["#5a3418", 190], ["#3a200e", 150]];
  for (let k = 0; k < 3; k++) {
    brush.fill(tones[k][0], tones[k][1]);
    brush.fillBleed(0.22);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.4);
    for (let i = 0; i < trunk.length; i++) {
      let p = trunk[i];
      let shrink = k * 6;
      let dx = i < 7 ? shrink : -shrink;
      if (k === 2 && i < 7) dx = 26;
      brush.vertex(p[0] + dx, p[1]);
    }
    brush.endShape(true);
  }

  // tall crown, back masses in shadow green, front in warm lit green
  for (let i = 0; i < 18; i++) {
    let y = random(50, 290);
    let x = 300 + random(-110, 110);
    brush.fill("#4d6a26", random(160, 200));
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.5);
    brush.circle(x + 18, y + 14, random(45, 70), 0.6);
  }
  for (let i = 0; i < 16; i++) {
    let y = random(40, 260);
    let x = 300 + random(-120, 100);
    brush.fill(random(["#9cb040", "#b8b848"]), random(150, 190));
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x - 10, y - 8, random(30, 55), 0.7);
  }

  // warm light catching the upper right of the crown
  for (let i = 0; i < 9; i++) {
    brush.fill("#e8c850", random(150, 190));
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.circle(330 + random(0, 90), random(50, 200), random(16, 30), 0.7);
  }

  // apples: two-tone, clustered
  for (let i = 0; i < 30; i++) {
    let y = random(80, 320);
    let x = 300 + random(-140, 140);
    brush.fill("#e0401e", 230);
    brush.fillBleed(0.18);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, random(9, 13), 0.15);
    brush.fill("#8a1810", 200);
    brush.circle(x + 3, y + 4, 6, 0.2);
    brush.fill("#ffd060", 180);
    brush.circle(x - 3, y - 3, 2.5, 0.1);
  }
  for (let i = 0; i < 6; i++) {
    brush.fill("#c8381a", 220);
    brush.fillBleed(0.2);
    brush.circle(random(150, 460), random(540, 580), 9, 0.2);
  }
}
