async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef0e2");
  randomSeed(404);
  brush.noStroke();

  // deep shadowed backdrop so the gold petals glow against it
  brush.fill("#3e5a3a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(0, 0);
  brush.vertex(380, 0);
  brush.vertex(300, 180);
  brush.vertex(120, 400);
  brush.vertex(0, 460);
  brush.endShape(true);
  brush.fill("#243a2a", 170);
  brush.circle(90, 120, 130, 0.6);

  brush.fill("#56704a", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(600, 340);
  brush.vertex(600, 600);
  brush.vertex(300, 600);
  brush.vertex(420, 470);
  brush.endShape(true);

  // stems
  brush.fill("#3a6026", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.5);
  brush.vertex(252, 320);
  brush.vertex(274, 320);
  brush.vertex(262, 600);
  brush.vertex(238, 600);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(470, 250);
  brush.vertex(488, 256);
  brush.vertex(400, 600);
  brush.vertex(378, 600);
  brush.endShape(true);
  brush.fill("#2e5220", 200);
  brush.beginShape(0.7);
  brush.vertex(250, 500);
  brush.vertex(160, 440);
  brush.vertex(100, 450);
  brush.vertex(200, 520);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(410, 500);
  brush.vertex(510, 470);
  brush.vertex(540, 490);
  brush.vertex(420, 530);
  brush.endShape(true);

  // open bloom: 13 petals, each laid twice
  let cx = 262, cy = 270;
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < 13; i++) {
      let a = i * (360 / 13) + pass * 8 + random(-5, 5);
      let len = pass === 0 ? random(140, 165) : random(100, 130);
      let w = pass === 0 ? 24 : 15;
      let mx = cx + cos(a) * len * 0.55, my = cy + sin(a) * len * 0.55;
      let nx = cos(a + 90) * w, ny = sin(a + 90) * w;
      brush.fill(pass === 0 ? "#f2b010" : "#e07c08", pass === 0 ? 210 : 180);
      brush.fillBleed(0.24);
      brush.fillTexture(0.45, 0.4);
      brush.beginShape(0.8);
      brush.vertex(cx + nx * 0.3, cy + ny * 0.3);
      brush.vertex(mx + nx, my + ny);
      brush.vertex(cx + cos(a) * len, cy + sin(a) * len);
      brush.vertex(mx - nx, my - ny);
      brush.vertex(cx - nx * 0.3, cy - ny * 0.3);
      brush.endShape(true);
    }
  }
  // shadowed ring and dark cone, layered
  brush.fill("#a8480a", 210);
  brush.fillBleed(0.25);
  brush.circle(cx, cy, 60, 0.4);
  for (let k = 0; k < 3; k++) {
    brush.fill("#2a1206", 240);
    brush.fillBleed(0.15);
    brush.fillTexture(0.5, 0.4);
    brush.circle(cx + k * 3, cy + k * 3, 42 - k * 8, 0.3);
  }
  brush.fill("#6a3a14", 200);
  brush.circle(cx - 12, cy - 12, 8, 0.3);

  // closed bud, petals folded in, tips showing gold
  let bx = 478, by = 232;
  brush.fill("#eaa012", 220);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(bx - 24, by);
  brush.vertex(bx - 12, by - 58);
  brush.vertex(bx + 2, by - 74);
  brush.vertex(bx + 22, by - 26);
  brush.vertex(bx + 22, by + 4);
  brush.endShape(true);
  brush.fill("#b85a08", 190);
  brush.beginShape(0.8);
  brush.vertex(bx + 2, by - 66);
  brush.vertex(bx + 22, by - 18);
  brush.vertex(bx + 8, by + 4);
  brush.endShape(true);
  brush.fill("#2e5220", 230);
  brush.beginShape(0.6);
  brush.vertex(bx - 34, by - 12);
  brush.vertex(bx + 34, by - 6);
  brush.vertex(bx + 6, by + 30);
  brush.endShape(true);
}
